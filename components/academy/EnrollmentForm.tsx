"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { track } from "@vercel/analytics";

import type { AcademyCourse } from "@/types/academy";

interface EnrollmentFormProps {
  courses: AcademyCourse[];
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export function EnrollmentForm({ courses }: EnrollmentFormProps) {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("course");
  const defaultSlug = courses.find((c) => c.slug === initialSlug)?.slug ?? courses[0]?.slug ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [courseSlug, setCourseSlug] = useState(defaultSlug);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const selectedCourse = courses.find((c) => c.slug === courseSlug);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const issues: string[] = [];
    if (!name.trim()) issues.push("Full name is required.");
    if (!email.trim() || !EMAIL_PATTERN.test(email)) issues.push("A valid email address is required.");
    if (!country.trim()) issues.push("Country of residence is required.");
    if (!courseSlug) issues.push("Please select a course.");
    if (issues.length > 0) {
      setErrors(issues);
      return;
    }
    setErrors([]);
    setStatus("submitting");
    try {
      const response = await fetch("/api/academy-enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: phone || undefined, country, courseSlug, message: message || undefined }),
      });
      if (!response.ok) throw new Error("Request failed");
      track("Academy Enrollment Submitted", { course: selectedCourse?.title ?? courseSlug });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold-luxury/40 bg-ink p-10 text-center">
        <p className="font-serif text-3xl font-normal leading-tight text-background sm:text-4xl">You&apos;re Enrolled.</p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-background/75">
          Thank you for joining The Real Return™ Academy. A member of our team will reach out within 48 hours to confirm your enrollment and share
          your course materials.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-border bg-background p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Email Address">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </Field>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Country of Residence">
          <input value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Phone (optional)">
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Select Course">
          <select value={courseSlug} onChange={(e) => setCourseSlug(e.target.value)} className={inputClass}>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title} (${c.price} {c.currency})
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Anything you'd like us to know? (optional)">
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
          />
        </Field>
      </div>

      {errors.length > 0 ? (
        <ul className="mt-5 space-y-1 text-sm text-red-700">
          {errors.map((issue) => (
            <li key={issue}>{issue}</li>
          ))}
        </ul>
      ) : null}
      {status === "error" ? <p className="mt-5 text-sm text-red-700">Something went wrong. Please try again.</p> : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          {selectedCourse ? (
            <>
              Tuition:{" "}
              <span className="font-semibold text-foreground">
                ${selectedCourse.price} {selectedCourse.currency}
              </span>
            </>
          ) : null}
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-8 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? "Enrolling…" : "Enroll Now"}
        </button>
      </div>
    </form>
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
