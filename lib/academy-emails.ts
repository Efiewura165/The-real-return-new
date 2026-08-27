import { getEmailTemplate, renderTemplate } from "@/lib/sanity/email-templates";
import type { AcademyCourse } from "@/types/academy";
import type { TravelLead } from "@/types/experience";

interface EmailContent {
  subject: string;
  text: string;
}

const SIGN_OFF = "\n\nWarmly,\nThe Real Return™\nRemember. Return. Rebuild.™";

/** Sent immediately to the customer on enrollment. */
export async function academyConfirmationEmail(lead: TravelLead, course: AcademyCourse): Promise<EmailContent> {
  const firstName = lead.name.split(" ")[0];
  const vars = {
    firstName,
    courseTitle: course.title,
    courseFormat: course.format,
    lessonCount: String(course.lessonCount),
    price: String(course.price),
    currency: course.currency,
  };

  const template = await getEmailTemplate("academy-confirmation");
  if (template) return { subject: renderTemplate(template.subject, vars), text: renderTemplate(template.body, vars) };

  return {
    subject: `You're Enrolled in ${course.title} | The Real Return™ Academy`,
    text: [
      `Dear ${firstName},`,
      "",
      `Thank you for enrolling in ${course.title}. This is one of the most meaningful steps you can take before your journey. It means arriving prepared, not just present.`,
      "",
      `- Course: ${course.title}`,
      `- Format: ${course.format}`,
      `- Lessons: ${course.lessonCount}`,
      `- Tuition: $${course.price} ${course.currency}`,
      "",
      "A member of our team will personally reach out within 48 hours to confirm your enrollment and get you access to your course materials.",
      SIGN_OFF,
    ].join("\n"),
  };
}

/** Sent immediately to The Real Return™ team on enrollment. */
export function academyInternalNotificationEmail(lead: TravelLead, course: AcademyCourse): EmailContent {
  return {
    subject: `NEW ACADEMY ENROLLMENT: ${course.title}`,
    text: [
      `Lead ID: ${lead.id}`,
      `Submitted: ${lead.createdAt}`,
      "",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      lead.phone ? `Phone: ${lead.phone}` : null,
      `Country: ${lead.country}`,
      "",
      `Course: ${course.title}`,
      `Tuition: $${course.price} ${course.currency}`,
      lead.message ? `\nMessage:\n${lead.message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

/** Day 1 follow-up. */
export async function academyFollowUpDay1Email(lead: TravelLead, course: AcademyCourse): Promise<EmailContent> {
  const firstName = lead.name.split(" ")[0];
  const vars = { firstName, courseTitle: course.title, courseDescription: course.description };

  const template = await getEmailTemplate("academy-followup-day1");
  if (template) return { subject: renderTemplate(template.subject, vars), text: renderTemplate(template.body, vars) };

  return {
    subject: `Getting Started With ${course.title}`,
    text: [
      `Dear ${firstName},`,
      "",
      `${course.description}`,
      "",
      "If you have any questions before you begin, just reply to this email. A real person reads every message.",
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
