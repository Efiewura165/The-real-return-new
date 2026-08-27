"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface InterestFormProps {
  type: string;
  label: string;
  showBusinessName?: boolean;
  submitLabel?: string;
  successMessage?: string;
}

export function InterestForm({ type, label, showBusinessName = false, submitLabel = "Submit", successMessage }: InterestFormProps) {
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
      type,
      label,
      businessName: showBusinessName ? String(data.get("businessName") ?? "") : undefined,
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/ecosystem-inquiry", {
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
        {successMessage ?? "Thank you. We've received your request and will be in touch soon."}
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
        {showBusinessName ? (
          <div className="space-y-2">
            <label htmlFor="businessName" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Business name
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              required
              className="h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
            />
          </div>
        ) : null}
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

      {status === "error" ? <p className="text-sm text-red-700">Something went wrong sending your request. Please try again.</p> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
