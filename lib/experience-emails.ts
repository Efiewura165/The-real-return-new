import type { ExperiencePackage, TravelLead } from "@/types/experience";

interface EmailContent {
  subject: string;
  text: string;
}

const SIGN_OFF = "\n\nWarmly,\nThe Real Return™\nRemember. Return. Rebuild.™";

/** Sent immediately to the customer on submission. */
export function customerConfirmationEmail(lead: TravelLead, pkg: ExperiencePackage): EmailContent {
  const firstName = lead.name.split(" ")[0];
  return {
    subject: "Your Ghana Journey Starts Here | The Real Return™",
    text: [
      `Dear ${firstName},`,
      "",
      `Thank you for choosing The Real Return™. We've received your journey request for ${pkg.title} (${pkg.region}), and we're genuinely excited to help shape this for you.`,
      "",
      "Here's what you shared with us:",
      `- Experience: ${pkg.title}`,
      `- Region: ${pkg.region}`,
      lead.preferredTravelDate ? `- Preferred dates: ${lead.preferredTravelDate}${lead.flexibleDates ? " (flexible)" : ""}` : null,
      `- Travelers: ${lead.travellers.adults} adult(s)${lead.travellers.children ? `, ${lead.travellers.children} child(ren)` : ""}`,
      lead.interests.length ? `- Interests: ${lead.interests.join(", ")}` : null,
      "",
      "A steward will personally review your preferences and reach out within 48 hours to begin shaping your Ghana experience. No automated back-and-forth, just a real conversation about what you're hoping to feel on this journey.",
      SIGN_OFF,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

/** Sent immediately to The Real Return™ team on submission. */
export function internalLeadNotificationEmail(lead: TravelLead, pkg: ExperiencePackage): EmailContent {
  return {
    subject: `NEW EXPERIENCE LEAD: ${pkg.title}`,
    text: [
      `Lead ID: ${lead.id}`,
      `Submitted: ${lead.createdAt}`,
      "",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      lead.phone ? `Phone: ${lead.phone}` : null,
      lead.whatsapp ? `WhatsApp: ${lead.whatsapp}` : null,
      `Country: ${lead.country}`,
      "",
      `Package: ${pkg.title} (${pkg.region})`,
      lead.preferredTravelDate ? `Preferred dates: ${lead.preferredTravelDate}${lead.flexibleDates ? " (flexible)" : ""}` : "Preferred dates: not specified",
      `Travelers: ${lead.travellers.adults} adult(s), ${lead.travellers.children} child(ren), ${lead.travellers.total} total`,
      lead.interests.length ? `Interests: ${lead.interests.join(", ")}` : null,
      lead.travelStyle.length ? `Travel style: ${lead.travelStyle.join(", ")}` : null,
      lead.message ? `\nMessage:\n${lead.message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

/** Day 1 follow-up. */
export function followUpDay1Email(lead: TravelLead, pkg: ExperiencePackage): EmailContent {
  const firstName = lead.name.split(" ")[0];
  return {
    subject: `Why ${pkg.title} Matters`,
    text: `Dear ${firstName},\n\n${pkg.whyThisExperience}${SIGN_OFF}`,
  };
}

/** Day 3 follow-up. */
export function followUpDay3Email(lead: TravelLead, pkg: ExperiencePackage): EmailContent {
  const firstName = lead.name.split(" ")[0];
  return {
    subject: "Imagine Yourself in Ghana",
    text: [
      `Dear ${firstName},`,
      "",
      `Picture this: ${pkg.highlights[0]?.toLowerCase() ?? "the first morning of your journey"}. Then ${pkg.highlights[1]?.toLowerCase() ?? "an afternoon you didn't expect to move you this much"}.`,
      "",
      `${pkg.title} isn't a checklist. It's built from moments like these, a story you walk into.`,
      SIGN_OFF,
    ].join("\n"),
  };
}

/** Day 5 follow-up. */
export function followUpDay5Email(lead: TravelLead, pkg: ExperiencePackage): EmailContent {
  const firstName = lead.name.split(" ")[0];
  return {
    subject: "Make Your Journey Your Own",
    text: [
      `Dear ${firstName},`,
      "",
      `${pkg.title} can be traveled exactly as designed, or reshaped entirely around you: private departure dates, a slower pace, extra time with the artisans and stewards who make it come alive.`,
      "",
      "If a bespoke, fully private version of this journey feels right for your family, just reply and let us know.",
      SIGN_OFF,
    ].join("\n"),
  };
}

/** Day 7 follow-up. */
export function followUpDay7Email(lead: TravelLead, pkg: ExperiencePackage): EmailContent {
  const firstName = lead.name.split(" ")[0];
  return {
    subject: "Ready to Begin Your Return?",
    text: [
      `Dear ${firstName},`,
      "",
      `Your steward is ready to continue planning ${pkg.title} whenever you are. Reply to this email with any questions, or let us know the best time for a call.`,
      "",
      "The destination is Ghana. The relationship is the return.",
      SIGN_OFF,
    ].join("\n"),
  };
}

/** ISO timestamp N days from now, for Resend's `scheduledAt`. */
export function daysFromNowISO(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
}
