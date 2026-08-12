import { NextResponse } from "next/server";
import { PAYPAL_API_BASE, RESERVATION_DEPOSIT_AMOUNT, RESERVATION_DEPOSIT_CURRENCY, getPaypalAccessToken, isPaypalConfigured } from "@/lib/paypal";

export async function POST() {
  if (!isPaypalConfigured()) {
    return NextResponse.json({ error: "Payments aren't configured yet." }, { status: 503 });
  }

  try {
    const accessToken = await getPaypalAccessToken();
    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: "The Real Return™ — Journey Reservation Deposit",
            amount: { currency_code: RESERVATION_DEPOSIT_CURRENCY, value: RESERVATION_DEPOSIT_AMOUNT },
          },
        ],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[paypal/create-order] PayPal error", detail);
      return NextResponse.json({ error: "Could not start the deposit checkout." }, { status: 502 });
    }

    const order = (await response.json()) as { id: string };
    return NextResponse.json({ id: order.id });
  } catch (error) {
    console.error("[paypal/create-order] Unexpected error", error);
    return NextResponse.json({ error: "Could not start the deposit checkout." }, { status: 500 });
  }
}
