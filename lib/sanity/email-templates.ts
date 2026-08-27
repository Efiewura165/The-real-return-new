import { getSanityClient, isSanityConfigured } from "./client";

interface EmailTemplateDoc {
  subject: string;
  body: string;
}

const TEMPLATE_QUERY = `*[_type == "emailTemplate" && key == $key][0]{ subject, body }`;

export async function getEmailTemplate(key: string): Promise<EmailTemplateDoc | null> {
  if (!isSanityConfigured()) return null;
  const client = getSanityClient();
  return (await client?.fetch<EmailTemplateDoc | null>(TEMPLATE_QUERY, { key }).catch(() => null)) ?? null;
}

/** Replaces {{fieldName}} placeholders with the matching value from `vars`. Plain-text emails only — no HTML escaping needed. */
export function renderTemplate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key: string) => vars[key] ?? "");
}
