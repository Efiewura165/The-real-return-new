import type { CreateEmailOptions, Resend } from "resend";

/**
 * Sender for every email the site sends. Must be an address on a domain verified
 * in Resend — Resend's shared onboarding@resend.dev sender only delivers to the
 * Resend account owner, so customers and staff never receive anything from it.
 */
export const EMAIL_FROM = process.env.EMAIL_FROM ?? "The Real Return™ <hello@therealreturngh.com>";

/**
 * Everyone who gets new-lead, enrollment, and deposit alerts. RESERVE_NOTIFY_EMAIL
 * takes one address or several separated by commas, e.g.
 * "tarsha@example.com, backup@example.com".
 */
export const NOTIFY_EMAILS = parseAddressList(process.env.RESERVE_NOTIFY_EMAIL ?? "tarshalewis@therealreturngh.com");

/** Where a customer's reply lands when they answer one of our emails. */
export const EMAIL_REPLY_TO = process.env.EMAIL_REPLY_TO ?? NOTIFY_EMAILS[0];

function parseAddressList(value: string) {
  return value
    .split(/[,;]/)
    .map((address) => address.trim())
    .filter(Boolean);
}

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

/**
 * Sends an internal alert to every address in NOTIFY_EMAILS, one email each, so a
 * bad or suppressed address can't stop the others from being notified. Failures
 * are logged per address; it only throws if nobody could be reached.
 */
export async function notifyTeam(resend: Resend, input: Omit<SendInput, "to">) {
  const results = await Promise.allSettled(NOTIFY_EMAILS.map((to) => sendEmail(resend, { ...input, to })));

  const failures = results.filter((result): result is PromiseRejectedResult => result.status === "rejected");
  for (const failure of failures) console.error("[notifyTeam] Alert not delivered:", failure.reason);

  if (failures.length === results.length) {
    throw new Error(`No team member could be notified ("${input.subject}")`);
  }
}
