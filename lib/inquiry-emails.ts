import { getEmailTemplate, renderTemplate } from "@/lib/sanity/email-templates";

interface EmailContent {
  subject: string;
  text: string;
}

const SIGN_OFF = "\n\nWarmly,\nThe Real Return™\nRemember. Return. Rebuild.™";

/** Sent immediately to the customer on submission. */
export async function inquiryConfirmationEmail(name: string, tier: string, preferredDates?: string): Promise<EmailContent> {
  const firstName = name.split(" ")[0];
  const vars = { firstName, tier, datesLine: preferredDates ? `Preferred dates: ${preferredDates}` : "" };

  const template = await getEmailTemplate("reserve-inquiry-confirmation");
  if (template) return { subject: renderTemplate(template.subject, vars), text: renderTemplate(template.body, vars) };

  return {
    subject: "We've Received Your Inquiry | The Real Return™",
    text: [
      `Dear ${firstName},`,
      "",
      `Thank you for reaching out about the ${tier} tier. A steward will personally review your inquiry and reach out within 48 hours to walk through availability and next steps.`,
      "",
      vars.datesLine || null,
      SIGN_OFF,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

/** Sent immediately to The Real Return™ team on submission. */
export function inquiryInternalNotificationEmail(
  leadId: string,
  name: string,
  email: string,
  tier: string,
  phone?: string,
  preferredDates?: string,
  message?: string,
): EmailContent {
  return {
    subject: `New Journey Inquiry: ${name} (${tier})`,
    text: [
      `Lead ID: ${leadId}`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Journey tier: ${tier}`,
      preferredDates ? `Preferred dates: ${preferredDates}` : null,
      message ? `\nMessage:\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}
