import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { saveLead } from "@/lib/leads";
import { slugify } from "@/lib/utils";
import type { TravelLead } from "@/types/experience";

const NOTIFY_EMAIL = process.env.RESERVE_NOTIFY_EMAIL ?? "efiewura89@gmail.com";
const SIGN_OFF = "\n\nWarmly,\nThe Real Return™\nRemember. Return. Rebuild.™";

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
    const firstName = name.split(" ")[0];

    await Promise.all([
      resend.emails.send({
        from: "The Real Return™ <onboarding@resend.dev>",
        to: email,
        subject: "We've Received Your Inquiry | The Real Return™",
        text: [
          `Dear ${firstName},`,
          "",
          `Thank you for reaching out about the ${tier} tier. A steward will personally review your inquiry and reach out within 48 hours to walk through availability and next steps.`,
          "",
          preferredDates ? `Preferred dates: ${preferredDates}` : null,
          SIGN_OFF,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
      resend.emails.send({
        from: "The Real Return™ <onboarding@resend.dev>",
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New Journey Inquiry: ${name} (${tier})`,
        text: [
          `Lead ID: ${lead.id}`,
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          `Journey tier: ${tier}`,
          preferredDates ? `Preferred dates: ${preferredDates}` : null,
          message ? `\nMessage:\n${message}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    ]);

    return NextResponse.json({ ok: true, leadId: lead.id, delivered: true });
  } catch (error) {
    console.error("[reserve-inquiry] Failed to send email", error);
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }
}
