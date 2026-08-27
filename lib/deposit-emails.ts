import { getEmailTemplate, renderTemplate } from "@/lib/sanity/email-templates";
import type { TravelLead } from "@/types/experience";

interface EmailContent {
  subject: string;
  text: string;
}

const SIGN_OFF = "\n\nWarmly,\nThe Real Return™\nRemember. Return. Rebuild.™";

/** Sent immediately to the customer once a deposit payment is captured. */
export async function depositConfirmationEmail(lead: TravelLead, amount: string, currency: string): Promise<EmailContent> {
  const firstName = lead.name.split(" ")[0];
  const vars = { firstName, amount, currency, tierName: lead.experienceTitle };

  const template = await getEmailTemplate("deposit-confirmation");
  if (template) return { subject: renderTemplate(template.subject, vars), text: renderTemplate(template.body, vars) };

  return {
    subject: "Deposit Received: Your Journey Is Held | The Real Return™",
    text: [
      `Dear ${firstName},`,
      "",
      `Thank you. We've received your ${currency} ${amount} deposit for the ${lead.experienceTitle} tier. Your place is now held.`,
      "",
      "A steward will personally reach out within 48 hours to confirm your itinerary, dates, and the balance due.",
      SIGN_OFF,
    ].join("\n"),
  };
}

/** Sent immediately to The Real Return™ team once a deposit payment is captured. */
export function depositInternalNotificationEmail(lead: TravelLead, amount: string, currency: string, captureId: string): EmailContent {
  return {
    subject: `NEW DEPOSIT PAID: ${lead.name} (${lead.experienceTitle})`,
    text: [
      `Lead ID: ${lead.id}`,
      `PayPal Capture ID: ${captureId}`,
      `Submitted: ${lead.createdAt}`,
      "",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Tier: ${lead.experienceTitle}`,
      `Amount: ${currency} ${amount}`,
    ].join("\n"),
  };
}
