import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { saveLead } from "@/lib/leads";
import type { TravelLead } from "@/types/experience";

const NOTIFY_EMAIL = process.env.RESERVE_NOTIFY_EMAIL ?? "efiewura89@gmail.com";
const SIGN_OFF = "\n\nWarmly,\nThe Real Return™\nRemember. Return. Rebuild.™";

interface EcosystemInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  type: string;
  label: string;
  businessName?: string;
  message?: string;
}

function isValidPayload(value: unknown): value is EcosystemInquiryPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    v.name.trim().length > 0 &&
    typeof v.email === "string" &&
    v.email.trim().length > 0 &&
    typeof v.type === "string" &&
    v.type.trim().length > 0 &&
    typeof v.label === "string" &&
    v.label.trim().length > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Name, email, and interest type are required." }, { status: 400 });
  }

  const { name, email, phone, type, label, businessName, message } = body;

  const combinedMessage = [businessName ? `Business: ${businessName}` : null, message].filter(Boolean).join("\n\n") || undefined;

  const now = new Date().toISOString();
  const lead: TravelLead = {
    id: randomUUID(),
    name,
    email,
    phone,
    country: "Not specified",
    experienceId: `ecosystem-${type}`,
    experienceTitle: label,
    travellers: { adults: 1, children: 0, total: 1 },
    interests: [],
    travelStyle: [],
    message: combinedMessage,
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  await saveLead(lead);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[ecosystem-inquiry] RESEND_API_KEY not set — inquiry saved but not emailed.", { leadId: lead.id, name, email, type });
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const firstName = name.split(" ")[0];

    await Promise.all([
      resend.emails.send({
        from: "The Real Return™ <onboarding@resend.dev>",
        to: email,
        subject: `We've Received Your ${label} Request | The Real Return™`,
        text: [`Dear ${firstName},`, "", `Thank you for your interest in ${label}. A member of our team will follow up soon.`, SIGN_OFF]
          .filter(Boolean)
          .join("\n"),
      }),
      resend.emails.send({
        from: "The Real Return™ <onboarding@resend.dev>",
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New ${label} Inquiry: ${name}`,
        text: [
          `Lead ID: ${lead.id}`,
          `Type: ${type}`,
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          businessName ? `Business: ${businessName}` : null,
          message ? `\nMessage:\n${message}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    ]);

    return NextResponse.json({ ok: true, leadId: lead.id, delivered: true });
  } catch (error) {
    console.error("[ecosystem-inquiry] Failed to send email", error);
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }
}
