"use client";

import { useState } from "react";

interface DepositCheckoutProps {
  amount: string;
  currency: string;
  tier?: string;
}

type Status = "idle" | "processing" | "success" | "error" | "unavailable";

export function DepositCheckout({ amount, currency, tier }: DepositCheckoutProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handlePay() {
    setStatus("processing");
    try {
      const response = await fetch("/api/payments/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency, tier }),
      });

      if (response.status === 503) {
        setStatus("unavailable");
        return;
      }
      if (!response.ok) throw new Error("Could not start checkout.");

      const { url } = (await response.json()) as { url: string };
      window.location.href = url;
    } catch {
      setStatus("error");
    }
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-sm border border-foreground/15 bg-muted p-6 text-sm leading-7 text-foreground/70">
        Online deposit payment isn&apos;t available yet. Submit the inquiry form below and a steward will reach out to arrange your{" "}
        {currency} {amount} deposit directly.
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-forest/30 bg-forest/10 p-6 text-sm leading-7 text-forest">
        Deposit received. Thank you. A steward will be in touch within 48 hours to confirm your itinerary.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-sm border border-border bg-background p-5">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/50">Deposit Amount</p>
          <p className="mt-1 font-serif text-3xl font-normal text-foreground">
            {currency} {amount}
          </p>
          {tier ? <p className="mt-1 text-sm text-foreground/60">For the {tier} tier</p> : null}
        </div>
      </div>

      <button
        type="button"
        onClick={handlePay}
        disabled={status === "processing"}
        className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-gold-luxury px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.01] disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "processing" ? "Redirecting to secure payment…" : "Pay Deposit Securely"}
      </button>

      <p className="text-xs leading-5 text-foreground/45">
        You&apos;ll be redirected to a secure payment page to complete your deposit, then brought back here.
      </p>

      {status === "error" ? (
        <p className="text-sm text-red-700">
          Something went wrong starting checkout. Please try again, or submit the inquiry form below and a steward will assist directly.
        </p>
      ) : null}
    </div>
  );
}
