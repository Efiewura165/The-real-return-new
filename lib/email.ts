import type { CreateEmailOptions, Resend } from "resend";

/**
 * Sender for every email the site sends. Must be an address on a domain verified
 * in Resend — Resend's shared onboarding@resend.dev sender only delivers to the
 * Resend account owner, so customers and staff never receive anything from it.
 */
export const EMAIL_FROM = process.env.EMAIL_FROM ?? "The Real Return™ <hello@therealreturngh.com>";

/** Where new-lead, enrollment, and deposit alerts go. */
export const NOTIFY_EMAIL = process.env.RESERVE_NOTIFY_EMAIL ?? "tarshalewis@therealreturngh.com";

/** Where a customer's reply lands when they answer one of our emails. */
export const EMAIL_REPLY_TO = process.env.EMAIL_REPLY_TO ?? NOTIFY_EMAIL;

type SendInput = Omit<CreateEmailOptions, "from">;

/**
 * Sends one email from EMAIL_FROM. The Resend SDK reports failures (unverified
 * sender, invalid recipient, rate limit…) as a returned `error` rather than
 * throwing, so without this check a rejected email looks delivered. Throwing here
 * lets each route's existing catch log it and report `delivered: false`.
 */
export async function sendEmail(resend: Resend, input: SendInput) {
  const { data, error } = await resend.emails.send({
    replyTo: EMAIL_REPLY_TO,
    ...input,
    from: EMAIL_FROM,
  } as CreateEmailOptions);

  if (error) {
    throw new Error(`Resend rejected email to ${String(input.to)} ("${input.subject}"): ${error.name}: ${error.message}`);
  }
  return data;
}
