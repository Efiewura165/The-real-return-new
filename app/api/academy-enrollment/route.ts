import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { getAcademyCourseBySlug } from "@/lib/sanity/academy";
import { saveLead } from "@/lib/leads";
import { academyConfirmationEmail, academyFollowUpDay1Email, academyInternalNotificationEmail, daysFromNowISO } from "@/lib/academy-emails";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import type { TravelLead } from "@/types/experience";

const NOTIFY_EMAIL = process.env.RESERVE_NOTIFY_EMAIL ?? "tarshalewis@therealreturngh.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface EnrollmentPayload {
  name: string;
  email: string;
  phone?: string;
  country: string;
  courseSlug: string;
  message?: string;
  /** Honeypot: a real visitor never fills this hidden field. */
  company?: string;
}

function isValidPayload(value: unknown): value is EnrollmentPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    v.name.trim().length > 0 &&
    typeof v.email === "string" &&
    EMAIL_PATTERN.test(v.email.trim()) &&
    typeof v.country === "string" &&
    v.country.trim().length > 0 &&
    typeof v.courseSlug === "string" &&
    v.courseSlug.trim().length > 0
  );
}

export async function POST(request: Request) {
  if (isRateLimited(`academy-enrollment:${getClientIp(request)}`)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Name, a valid email, country, and a selected course are required." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true, leadId: randomUUID(), delivered: true });
  }

  const course = await getAcademyCourseBySlug(body.courseSlug);
  if (!course) {
    return NextResponse.json({ error: "That course could not be found." }, { status: 404 });
  }

  const now = new Date().toISOString();
  const lead: TravelLead = {
    id: randomUUID(),
    name: body.name,
    email: body.email,
    phone: body.phone,
    country: body.country,
    experienceId: course.id,
    experienceTitle: course.title,
    travellers: { adults: 1, children: 0, total: 1 },
    interests: [],
    travelStyle: [],
    message: body.message,
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  await saveLead(lead);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[academy-enrollment] RESEND_API_KEY not set — lead saved but no emails sent.", { leadId: lead.id, course: course.title });
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const confirmation = await academyConfirmationEmail(lead, course);
    const internal = academyInternalNotificationEmail(lead, course);

    await Promise.all([
      resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: lead.email, subject: confirmation.subject, text: confirmation.text }),
      resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: NOTIFY_EMAIL, replyTo: lead.email, subject: internal.subject, text: internal.text }),
    ]);

    const followUp = await academyFollowUpDay1Email(lead, course);
    await resend.emails.send({
      from: "The Real Return™ <onboarding@resend.dev>",
      to: lead.email,
      subject: followUp.subject,
      text: followUp.text,
      scheduledAt: daysFromNowISO(1),
    });

    return NextResponse.json({ ok: true, leadId: lead.id, delivered: true });
  } catch (error) {
    console.error("[academy-enrollment] Failed to send emails", error);
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }
}
