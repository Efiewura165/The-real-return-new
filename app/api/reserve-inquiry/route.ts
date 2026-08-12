import { NextResponse } from "next/server";
import { Resend } from "resend";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[reserve-inquiry] RESEND_API_KEY not set — inquiry logged but not emailed.", { name, email, tier });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "The Real Return™ <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New Journey Inquiry — ${name} (${tier})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Journey tier: ${tier}`,
        preferredDates ? `Preferred dates: ${preferredDates}` : null,
        message ? `\nMessage:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[reserve-inquiry] Failed to send email", error);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
