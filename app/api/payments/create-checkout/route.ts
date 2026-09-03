import { NextResponse } from "next/server";

/**
 * Provider-agnostic checkout entry point. No payment provider is wired in
 * yet (Ghana doesn't support real PayPal Business accounts, so Paystack /
 * Flutterwave are under consideration instead) — this always returns 503
 * until one is chosen. The UI (components/reserve/DepositCheckout.tsx)
 * already handles that response gracefully.
 *
 * Once a provider is picked, this is the only place that needs to change:
 * call the provider's "initialize transaction" API here and return the
 * hosted checkout URL it gives back as `url`. The client-side component
 * doesn't need to change at all.
 */
export async function POST() {
  return NextResponse.json({ error: "Online deposit payment isn't available yet." }, { status: 503 });
}
