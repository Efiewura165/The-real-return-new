"use client";

import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { track } from "@vercel/analytics";

interface DepositCheckoutProps {
  amount: string;
  currency: string;
  tier?: string;
}

export function DepositCheckout({ amount, currency, tier }: DepositCheckoutProps) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  if (!clientId) {
    return (
      <div className="rounded-sm border border-foreground/15 bg-muted p-6 text-sm leading-7 text-foreground/70">
        Online deposit payment isn&apos;t configured yet. Submit the inquiry form below and a steward will reach out to arrange your{" "}
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
    <div className="space-y-3">
      <PayPalScriptProvider options={{ clientId, currency }}>
        <PayPalButtons
          style={{ layout: "vertical", color: "gold", label: "pay" }}
          createOrder={async () => {
            const response = await fetch("/api/paypal/create-order", { method: "POST" });
            if (!response.ok) throw new Error("Could not start checkout.");
            const order = (await response.json()) as { id: string };
            return order.id;
          }}
          onApprove={async (data) => {
            const response = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: data.orderID, tier }),
            });
            if (!response.ok) {
              setStatus("error");
              return;
            }
            track("Deposit Paid", { amount, currency, tier: tier ?? "unspecified" });
            setStatus("success");
          }}
          onError={() => setStatus("error")}
        />
      </PayPalScriptProvider>
      {status === "error" ? (
        <p className="text-sm text-red-700">
          Something went wrong processing your deposit. Please try again, or submit the inquiry form below and a steward will assist directly.
        </p>
      ) : null}
    </div>
  );
}
