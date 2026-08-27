import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { saveLead } from "@/lib/leads";
import { inquiryConfirmationEmail, inquiryInternalNotificationEmail } from "@/lib/inquiry-emails";
import { slugify } from "@/lib/utils";
import type { TravelLead } from "@/types/experience";

const NOTIFY_EMAIL = process.env.RESERVE_NOTIFY_EMAIL ?? "efiewura89@gmail.com";

interface InquiryPayload {
  name: string;
  email: string;
  phone?: string;
  tier: string;
  preferredDates?: string;
  message?: string;
}

function isValidPayload(value: unknown): value is InquiryPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return typeof v.name === "string" && v.name.trim().length > 0 && typeof v.email === "string" && v.email.trim().length > 0 && typeof v.tier === "string";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Name, email, and journey tier are required." }, { status: 400 });
  }

  const { name, email, phone, tier, preferredDates, message } = body;

  const now = new Date().toISOString();
  const lead: TravelLead = {
    id: randomUUID(),
    name,
    email,
    phone,
    country: "Not specified",
    experienceId: `inquiry-${slugify(tier)}`,
    experienceTitle: tier,
    preferredTravelDate: preferredDates,
    travellers: { adults: 1, children: 0, total: 1 },
    interests: [],
    travelStyle: [],
    message,
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  await saveLead(lead);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[reserve-inquiry] RESEND_API_KEY not set — inquiry saved but not emailed.", { leadId: lead.id, name, email, tier });
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const confirmation = await inquiryConfirmationEmail(name, tier, preferredDates);
    const internal = inquiryInternalNotificationEmail(lead.id, name, email, tier, phone, preferredDates, message);

    await Promise.all([
      resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: email, subject: confirmation.subject, text: confirmation.text }),
      resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: NOTIFY_EMAIL, replyTo: email, subject: internal.subject, text: internal.text }),
    ]);

    return NextResponse.json({ ok: true, leadId: lead.id, delivered: true });
  } catch (error) {
    console.error("[reserve-inquiry] Failed to send email", error);
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }
}
