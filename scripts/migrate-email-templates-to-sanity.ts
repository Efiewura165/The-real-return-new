/**
 * One-off migration: pushes the customer-facing email copy (subjects + bodies
 * from lib/experience-emails.ts, lib/academy-emails.ts, lib/deposit-emails.ts,
 * and lib/inquiry-emails.ts) into Sanity as editable emailTemplate documents.
 *
 * Internal team-notification emails are intentionally NOT included — they're
 * structured operational data dumps (lead ID, contact info, trip details),
 * not editorial copy, and keeping their format code-controlled keeps the
 * data reliable for whoever processes leads.
 *
 * Requires SANITY_API_WRITE_TOKEN (a token with Editor access) plus
 * NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET in .env.local.
 * Run with: npx tsx scripts/migrate-email-templates-to-sanity.ts
 */
import fs from "fs";
import path from "path";
import { createClient, type SanityClient } from "@sanity/client";

loadEnvLocal();

function loadEnvLocal() {
  const envPath = path.join(__dirname, "..", ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local. See the comment at the top of this file.");
  process.exit(1);
}

const client: SanityClient = createClient({ projectId, dataset, apiVersion: "2025-01-01", token, useCdn: false });

const SIGN_OFF = "\n\nWarmly,\nThe Real Return™\nRemember. Return. Rebuild.™";

interface TemplateSeed {
  key: string;
  label: string;
  subject: string;
  body: string;
  mergeFieldsHelp: string;
}

const templates: TemplateSeed[] = [
  {
    key: "experience-confirmation",
    label: "Experience Booking — Confirmation",
    subject: "Your Ghana Journey Starts Here | The Real Return™",
    body: [
      "Dear {{firstName}},",
      "",
      "Thank you for choosing The Real Return™. We've received your journey request for {{packageTitle}} ({{region}}), and we're genuinely excited to help shape this for you.",
      "",
      "Here's what you shared with us:",
      "{{detailsBlock}}",
      "",
      "A steward will personally review your preferences and reach out within 48 hours to begin shaping your Ghana experience. No automated back-and-forth, just a real conversation about what you're hoping to feel on this journey.",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{packageTitle}}, {{region}}, {{detailsBlock}} (auto-built trip summary — don't remove)",
  },
  {
    key: "experience-followup-day1",
    label: "Experience Booking — Day 1 Follow-Up",
    subject: "Why {{packageTitle}} Matters",
    body: "Dear {{firstName}},\n\n{{whyThisExperience}}" + SIGN_OFF,
    mergeFieldsHelp: "{{firstName}}, {{packageTitle}}, {{whyThisExperience}} (pulled from the package's own description)",
  },
  {
    key: "experience-followup-day3",
    label: "Experience Booking — Day 3 Follow-Up",
    subject: "Imagine Yourself in Ghana",
    body: [
      "Dear {{firstName}},",
      "",
      "Picture this: {{highlight1}}. Then {{highlight2}}.",
      "",
      "{{packageTitle}} isn't a checklist. It's built from moments like these, a story you walk into.",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{packageTitle}}, {{highlight1}}, {{highlight2}}",
  },
  {
    key: "experience-followup-day5",
    label: "Experience Booking — Day 5 Follow-Up",
    subject: "Make Your Journey Your Own",
    body: [
      "Dear {{firstName}},",
      "",
      "{{packageTitle}} can be traveled exactly as designed, or reshaped entirely around you: private departure dates, a slower pace, extra time with the artisans and stewards who make it come alive.",
      "",
      "If a bespoke, fully private version of this journey feels right for your family, just reply and let us know.",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{packageTitle}}",
  },
  {
    key: "experience-followup-day7",
    label: "Experience Booking — Day 7 Follow-Up",
    subject: "Ready to Begin Your Return?",
    body: [
      "Dear {{firstName}},",
      "",
      "Your steward is ready to continue planning {{packageTitle}} whenever you are. Reply to this email with any questions, or let us know the best time for a call.",
      "",
      "The destination is Ghana. The relationship is the return.",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{packageTitle}}",
  },
  {
    key: "academy-confirmation",
    label: "Academy — Enrollment Confirmation",
    subject: "You're Enrolled in {{courseTitle}} | The Real Return™ Academy",
    body: [
      "Dear {{firstName}},",
      "",
      "Thank you for enrolling in {{courseTitle}}. This is one of the most meaningful steps you can take before your journey. It means arriving prepared, not just present.",
      "",
      "- Course: {{courseTitle}}",
      "- Format: {{courseFormat}}",
      "- Lessons: {{lessonCount}}",
      "- Tuition: ${{price}} {{currency}}",
      "",
      "A member of our team will personally reach out within 48 hours to confirm your enrollment and get you access to your course materials.",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{courseTitle}}, {{courseFormat}}, {{lessonCount}}, {{price}}, {{currency}}",
  },
  {
    key: "academy-followup-day1",
    label: "Academy — Day 1 Follow-Up",
    subject: "Getting Started With {{courseTitle}}",
    body: [
      "Dear {{firstName}},",
      "",
      "{{courseDescription}}",
      "",
      "If you have any questions before you begin, just reply to this email. A real person reads every message.",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{courseTitle}}, {{courseDescription}}",
  },
  {
    key: "deposit-confirmation",
    label: "Deposit — Payment Confirmation",
    subject: "Deposit Received: Your Journey Is Held | The Real Return™",
    body: [
      "Dear {{firstName}},",
      "",
      "Thank you. We've received your {{currency}} {{amount}} deposit for the {{tierName}} tier. Your place is now held.",
      "",
      "A steward will personally reach out within 48 hours to confirm your itinerary, dates, and the balance due.",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{amount}}, {{currency}}, {{tierName}}",
  },
  {
    key: "reserve-inquiry-confirmation",
    label: "Reserve Page — Inquiry Confirmation",
    subject: "We've Received Your Inquiry | The Real Return™",
    body: [
      "Dear {{firstName}},",
      "",
      "Thank you for reaching out about the {{tier}} tier. A steward will personally review your inquiry and reach out within 48 hours to walk through availability and next steps.",
      "",
      "{{datesLine}}",
      SIGN_OFF,
    ].join("\n"),
    mergeFieldsHelp: "{{firstName}}, {{tier}}, {{datesLine}} (blank when no dates were given)",
  },
];

async function main() {
  for (const template of templates) {
    console.log(`Creating/updating template "${template.label}"...`);
    await client.createOrReplace({
      _id: `emailTemplate-${template.key}`,
      _type: "emailTemplate",
      key: template.key,
      label: template.label,
      subject: template.subject,
      body: template.body,
      mergeFieldsHelp: template.mergeFieldsHelp,
    });
  }

  console.log("\nDone. Email copy is now editable in Sanity — visit /studio to edit it.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
