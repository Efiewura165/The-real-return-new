import { createClient, type SanityClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2025-01-01";

export function isSanityConfigured() {
  return Boolean(projectId);
}

let cachedClient: SanityClient | null = null;

/** Returns null if Sanity isn't configured yet, so callers can fall back gracefully. */
export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;
  if (!cachedClient) {
    cachedClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    });
  }
  return cachedClient;
}
