import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { PAYPAL_API_BASE, getPaypalAccessToken, isPaypalConfigured } from "@/lib/paypal";
import { saveLead } from "@/lib/leads";
import { depositConfirmationEmail, depositInternalNotificationEmail } from "@/lib/deposit-emails";
import type { TravelLead } from "@/types/experience";

const NOTIFY_EMAIL = process.env.RESERVE_NOTIFY_EMAIL ?? "efiewura89@gmail.com";

interface PaypalCapture {
  id: string;
  status: string;
  payer?: {
    email_address?: string;
    name?: { given_name?: string; surname?: string };
  };
  purchase_units?: {
    payments?: {
      captures?: { id: string; amount?: { value: string; currency_code: string } }[];
    };
  }[];
}

export async function POST(request: Request) {
  if (!isPaypalConfigured()) {
    return NextResponse.json({ error: "Payments aren't configured yet." }, { status: 503 });
  }

  let orderId: string | undefined;
  let tier: string | undefined;
  try {
    const body = (await request.json()) as { orderId?: string; tier?: string };
    orderId = body.orderId;
    tier = body.tier;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!orderId) {
    return NextResponse.json({ error: "Missing orderId." }, { status: 400 });
  }

  try {
    const accessToken = await getPaypalAccessToken();
    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[paypal/capture-order] PayPal error", detail);
      return NextResponse.json({ error: "Could not confirm the deposit payment." }, { status: 502 });
    }

    const capture = (await response.json()) as PaypalCapture;

    await recordDeposit(capture, tier).catch((error) => {
      console.error("[paypal/capture-order] Failed to save/email deposit lead", error);
    });

    return NextResponse.json({ ok: true, capture });
  } catch (error) {
    console.error("[paypal/capture-order] Unexpected error", error);
    return NextResponse.json({ error: "Could not confirm the deposit payment." }, { status: 500 });
  }
}

async function recordDeposit(capture: PaypalCapture, tier: string | undefined) {
  const email = capture.payer?.email_address;
  if (!email) {
    console.warn("[paypal/capture-order] Capture had no payer email — skipping lead save/email.", { captureId: capture.id });
    return;
  }

  const givenName = capture.payer?.name?.given_name ?? "";
  const surname = capture.payer?.name?.surname ?? "";
  const name = [givenName, surname].filter(Boolean).join(" ") || "PayPal Customer";

  const paymentCapture = capture.purchase_units?.[0]?.payments?.captures?.[0];
  const amount = paymentCapture?.amount?.value ?? "unknown";
  const currency = paymentCapture?.amount?.currency_code ?? "USD";
  const captureId = paymentCapture?.id ?? capture.id;

  const now = new Date().toISOString();
  const lead: TravelLead = {
    id: randomUUID(),
    name,
    email,
    country: "Not specified",
    experienceId: `deposit-${captureId}`,
    experienceTitle: tier ?? "Journey Deposit",
    travellers: { adults: 1, children: 0, total: 1 },
    interests: [],
    travelStyle: [],
    message: `Deposit of ${currency} ${amount} paid via PayPal (capture ${captureId}).`,
    status: "booked",
    createdAt: now,
    updatedAt: now,
  };

  await saveLead(lead);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[paypal/capture-order] RESEND_API_KEY not set — deposit saved but not emailed.", { leadId: lead.id, email });
    return;
  }

  const resend = new Resend(apiKey);
  const confirmation = depositConfirmationEmail(lead, amount, currency);
  const internal = depositInternalNotificationEmail(lead, amount, currency, captureId);

  await Promise.all([
    resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: lead.email, subject: confirmation.subject, text: confirmation.text }),
    resend.emails.send({ from: "The Real Return™ <onboarding@resend.dev>", to: NOTIFY_EMAIL, replyTo: lead.email, subject: internal.subject, text: internal.text }),
  ]);
}
