import { NextResponse } from "next/server";
import { PAYPAL_API_BASE, getPaypalAccessToken, isPaypalConfigured } from "@/lib/paypal";

export async function POST(request: Request) {
  if (!isPaypalConfigured()) {
    return NextResponse.json({ error: "Payments aren't configured yet." }, { status: 503 });
  }

  let orderId: string | undefined;
  try {
    const body = (await request.json()) as { orderId?: string };
    orderId = body.orderId;
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

    const capture = await response.json();
    return NextResponse.json({ ok: true, capture });
  } catch (error) {
    console.error("[paypal/capture-order] Unexpected error", error);
    return NextResponse.json({ error: "Could not confirm the deposit payment." }, { status: 500 });
  }
}
