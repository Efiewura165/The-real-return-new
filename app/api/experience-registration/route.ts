import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { getExperienceBySlug } from "@/lib/sanity/experiences";
import { saveLead } from "@/lib/leads";
import {
  customerConfirmationEmail,
  daysFromNowISO,
  followUpDay1Email,
  followUpDay3Email,
  followUpDay5Email,
  followUpDay7Email,
  internalLeadNotificationEmail,
} from "@/lib/experience-emails";
import type { TravelLead } from "@/types/experience";

const NOTIFY_EMAIL = process.env.RESERVE_NOTIFY_EMAIL ?? "efiewura89@gmail.com";

interface RegistrationPayload {
  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  country: string;

  experienceSlug: string;

  preferredTravelDate?: string;
  flexibleDates?: boolean;

  adults: number;
  children: number;

  interests: string[];
  travelStyle: string[];

  message?: string;
}

function isValidPayload(value: unknown): value is RegistrationPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    v.name.trim().length > 0 &&
    typeof v.email === "string" &&
    v.email.trim().length > 0 &&
    typeof v.country === "string" &&
    v.country.trim().length > 0 &&
    typeof v.experienceSlug === "string" &&
    typeof v.adults === "number" &&
    v.adults >= 1 &&
    typeof v.children === "number" &&
    Array.isArray(v.interests) &&
    Array.isArray(v.travelStyle)
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
    return NextResponse.json({ error: "Name, email, country, and traveler count are required." }, { status: 400 });
  }

  const pkg = await getExperienceBySlug(body.experienceSlug);
  if (!pkg) {
    return NextResponse.json({ error: "That experience could not be found." }, { status: 404 });
  }

  const now = new Date().toISOString();
  const lead: TravelLead = {
    id: randomUUID(),
    name: body.name,
    email: body.email,
    phone: body.phone,
    whatsapp: body.whatsapp,
    country: body.country,
    experienceId: pkg.id,
    experienceTitle: pkg.title,
    preferredTravelDate: body.preferredTravelDate,
    flexibleDates: body.flexibleDates,
    travellers: { adults: body.adults, children: body.children, total: body.adults + body.children },
    interests: body.interests,
    travelStyle: body.travelStyle,
    message: body.message,
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  await saveLead(lead);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[experience-registration] RESEND_API_KEY not set — lead saved but no emails sent.", { leadId: lead.id, experience: pkg.title });
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const confirmation = customerConfirmationEmail(lead, pkg);
    const internal = internalLeadNotificationEmail(lead, pkg);

    await Promise.all([
      resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: lead.email, subject: confirmation.subject, text: confirmation.text }),
      resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: NOTIFY_EMAIL, replyTo: lead.email, subject: internal.subject, text: internal.text }),
    ]);

    const followUps = [
      { template: followUpDay1Email, days: 1 },
      { template: followUpDay3Email, days: 3 },
      { template: followUpDay5Email, days: 5 },
      { template: followUpDay7Email, days: 7 },
    ];

    await Promise.all(
      followUps.map(({ template, days }) => {
        const { subject, text } = template(lead, pkg);
        return resend.emails.send({
          from: "The Real Return™ <onboarding@resend.dev>",
          to: lead.email,
          subject,
          text,
          scheduledAt: daysFromNowISO(days),
        });
      }),
    );

    return NextResponse.json({ ok: true, leadId: lead.id, delivered: true });
  } catch (error) {
    console.error("[experience-registration] Failed to send emails", error);
    return NextResponse.json({ ok: true, leadId: lead.id, delivered: false });
  }
}
