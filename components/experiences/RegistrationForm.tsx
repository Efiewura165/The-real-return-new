"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

const INTERESTS = [
  "Heritage",
  "African Diaspora history",
  "Culture",
  "Food",
  "Nature",
  "Wildlife",
  "Beach",
  "Luxury",
  "Adventure",
  "Wellness",
  "Family",
  "Photography",
  "Craft",
  "Agriculture",
];

const TRAVEL_STYLES = ["Private", "Small Group", "Couple", "Family", "Solo", "Luxury", "Premium", "Bespoke"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface RegistrationFormProps {
  experienceSlug: string;
  experienceTitle: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  country: string;
  preferredTravelDate: string;
  flexibleDates: boolean;
  adults: string;
  children: string;
  preferredDuration: string;
  interests: string[];
  travelStyle: string[];
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  country: "",
  preferredTravelDate: "",
  flexibleDates: false,
  adults: "2",
  children: "0",
  preferredDuration: "",
  interests: [],
  travelStyle: [],
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const STEP_LABELS = ["About You", "Your Journey", "Your Interests", "Travel Style", "Your Request"];

export function RegistrationForm({ experienceSlug, experienceTitle }: RegistrationFormProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggle(key: "interests" | "travelStyle", value: string) {
    setForm((current) => {
      const list = current[key];
      const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
      return { ...current, [key]: next };
    });
  }

  function validateStep(current: number): string[] {
    const issues: string[] = [];
    if (current === 1) {
      if (!form.name.trim()) issues.push("Full name is required.");
      if (!form.email.trim() || !EMAIL_PATTERN.test(form.email)) issues.push("A valid email address is required.");
      if (!form.country.trim()) issues.push("Country of residence is required.");
    }
    if (current === 2) {
      const adults = Number(form.adults);
      if (!Number.isFinite(adults) || adults < 1) issues.push("At least one adult traveler is required.");
      const children = Number(form.children);
      if (!Number.isFinite(children) || children < 0) issues.push("Number of children must be zero or more.");
    }
    return issues;
  }

  function goNext() {
    const issues = validateStep(step);
    if (issues.length > 0) {
      setErrors(issues);
      return;
    }
    setErrors([]);
    setStep((s) => Math.min(s + 1, 5));
  }

  function goBack() {
    setErrors([]);
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    const issues = validateStep(1).concat(validateStep(2));
    if (issues.length > 0) {
      setErrors(issues);
      setStep(issues.some((i) => i.includes("email") || i.includes("name") || i.includes("Country")) ? 1 : 2);
      return;
    }

    setStatus("submitting");
    setErrors([]);

    try {
      const response = await fetch("/api/experience-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          whatsapp: form.whatsapp || undefined,
          country: form.country,
          experienceSlug,
          preferredTravelDate: form.preferredTravelDate || undefined,
          flexibleDates: form.flexibleDates,
          adults: Number(form.adults),
          children: Number(form.children),
          interests: form.interests,
          travelStyle: form.travelStyle,
          message: form.message || undefined,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      track("Experience Registration Submitted", { experienceSlug, experienceTitle });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold-luxury/40 bg-ink p-10 text-center">
        <p className="font-serif text-3xl font-normal leading-tight text-background sm:text-4xl">Your Return Begins Here.</p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-background/75">
          Thank you for choosing The Real Return™. We&apos;ve received your journey request. Our team will review your preferences and
          contact you to begin shaping your Ghana experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/reserve"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
          >
            Explore More Experiences
          </Link>
          <Link
            href="/#story"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-background/40 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:border-background"
          >
            Learn About Ghana
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
      <div className="flex items-center gap-2">
        {STEP_LABELS.map((label, index) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-semibold ${
                index + 1 <= step ? "bg-gold-luxury text-ink" : "bg-muted text-foreground/40"
              }`}
            >
              {index + 1}
            </span>
            {index < STEP_LABELS.length - 1 ? (
              <span className={`h-px flex-1 ${index + 1 < step ? "bg-gold-luxury" : "bg-border"}`} />
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
        Step {step} of 5: {STEP_LABELS[step - 1]}
      </p>

      <div className="mt-6 space-y-5">
        {step === 1 ? (
          <>
            <Field label="Full Name">
              <input value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email Address">
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
              </Field>
              <Field label="Country of Residence">
                <input value={form.country} onChange={(e) => update("country", e.target.value)} className={inputClass} />
              </Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone (optional)">
                <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
              </Field>
              <Field label="WhatsApp (optional)">
                <input type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputClass} />
              </Field>
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <Field label="Selected Experience">
              <div className={`${inputClass} flex items-center text-foreground/70`}>{experienceTitle}</div>
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Preferred Travel Date">
                <input
                  type="text"
                  placeholder="e.g. March 2027, or flexible"
                  value={form.preferredTravelDate}
                  onChange={(e) => update("preferredTravelDate", e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Preferred Duration">
                <input
                  type="text"
                  placeholder="e.g. 4 days"
                  value={form.preferredDuration}
                  onChange={(e) => update("preferredDuration", e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>
            <label className="flex items-center gap-2 text-sm text-foreground/70">
              <input type="checkbox" checked={form.flexibleDates} onChange={(e) => update("flexibleDates", e.target.checked)} className="h-4 w-4" />
              My dates are flexible
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Adults">
                <input
                  type="number"
                  min={1}
                  value={form.adults}
                  onChange={(e) => update("adults", e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Children">
                <input
                  type="number"
                  min={0}
                  value={form.children}
                  onChange={(e) => update("children", e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>
          </>
        ) : null}

        {step === 3 ? (
          <Field label="What draws you to Ghana? (select all that apply)">
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <Chip key={interest} label={interest} selected={form.interests.includes(interest)} onClick={() => toggle("interests", interest)} />
              ))}
            </div>
          </Field>
        ) : null}

        {step === 4 ? (
          <Field label="How would you like to travel?">
            <div className="flex flex-wrap gap-2">
              {TRAVEL_STYLES.map((style) => (
                <Chip key={style} label={style} selected={form.travelStyle.includes(style)} onClick={() => toggle("travelStyle", style)} />
              ))}
            </div>
          </Field>
        ) : null}

        {step === 5 ? (
          <Field label="Tell us what you would love your Ghana experience to feel like.">
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
            />
          </Field>
        ) : null}
      </div>

      {errors.length > 0 ? (
        <ul className="mt-5 space-y-1 text-sm text-red-700">
          {errors.map((issue) => (
            <li key={issue}>{issue}</li>
          ))}
        </ul>
      ) : null}
      {status === "error" ? <p className="mt-5 text-sm text-red-700">Something went wrong sending your request. Please try again.</p> : null}

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 1}
          className="inline-flex h-11 items-center justify-center rounded-sm border border-border px-6 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground disabled:pointer-events-none disabled:opacity-40"
        >
          Back
        </button>
        {step < 5 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Register Your Interest"}
          </button>
        )}
      </div>
    </div>
  );
}

const inputClass = "h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">{label}</p>
      {children}
    </div>
  );
}

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full border px-4 py-2 text-[0.75rem] font-medium transition-colors ${
        selected ? "border-gold-luxury bg-gold-luxury text-ink" : "border-border text-foreground/70 hover:border-gold"
      }`}
    >
      {label}
    </button>
  );
}
