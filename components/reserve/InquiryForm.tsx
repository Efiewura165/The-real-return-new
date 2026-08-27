"use client";

import { useState } from "react";

interface InquiryFormProps {
  defaultTier?: string;
  tierNames: string[];
}

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm({ defaultTier, tierNames }: InquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      tier: String(data.get("tier") ?? ""),
      preferredDates: String(data.get("preferredDates") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/reserve-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-forest/30 bg-forest/10 p-6 text-sm leading-7 text-forest">
        Thank you. Your inquiry has been sent. A steward will reach out within 48 hours to talk through dates and tiers.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="tier" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
            Journey tier
          </label>
          <select
            id="tier"
            name="tier"
            required
            defaultValue={defaultTier ?? ""}
            className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
          >
            <option value="" disabled>
              Select a tier
            </option>
            {tierNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="preferredDates" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
          Preferred travel dates (optional)
        </label>
        <input
          id="preferredDates"
          name="preferredDates"
          type="text"
          placeholder="e.g. December 2026, or flexible"
          className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
          Anything else we should know? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
        />
      </div>

      {status === "error" ? <p className="text-sm text-red-700">Something went wrong sending your inquiry. Please try again.</p> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
