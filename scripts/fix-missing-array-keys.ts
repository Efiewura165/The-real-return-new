/**
 * One-off data fix: the Phase 1 (Academy) and Phase 2 (Experience Packages)
 * migration scripts wrote array-of-object fields without a `_key` on each
 * item, which Sanity Studio requires to edit list items safely. This
 * backfills `_key` (and the matching `_type` for each inline object shape)
 * on every affected array, without touching any other field.
 *
 * Safe to re-run: existing `_key` values are preserved, only missing ones
 * are generated.
 *
 * Run with: npx tsx scripts/fix-missing-array-keys.ts
 */
import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";

function loadEnvLocal() {
  const envPath = path.join(__dirname, "..", ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    if (!(key in process.env)) process.env[key] = trimmed.slice(eq + 1).trim();
  }
}
loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2025-01-01", token, useCdn: false });

function randomKey(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Doc = Record<string, any>;

async function fixAcademySettings() {
  const doc: Doc | null = await client.fetch(`*[_type == "academySettings"][0]`);
  if (!doc) return console.log("No academySettings document found — skipping.");

  const phases = (doc.phases ?? []).map((p: Doc) => ({
    _type: "phase",
    _key: p._key ?? randomKey(),
    phase: p.phase,
    title: p.title,
    description: p.description,
    unlocked: p.unlocked,
  }));

  await client.patch(doc._id).set({ phases }).commit();
  console.log(`Fixed academySettings.phases (${phases.length} items)`);
}

async function fixAcademyCourses() {
  const docs: Doc[] = await client.fetch(`*[_type == "academyCourse"]`);
  for (const doc of docs) {
    const curriculum = (doc.curriculum ?? []).map((c: Doc) => ({
      _type: "lesson",
      _key: c._key ?? randomKey(),
      title: c.title,
      description: c.description,
    }));
    await client.patch(doc._id).set({ curriculum }).commit();
    console.log(`Fixed curriculum for "${doc.title}" (${curriculum.length} lessons)`);
  }
}

async function fixExperiencePackages() {
  const docs: Doc[] = await client.fetch(`*[_type == "experiencePackage"]`);
  for (const doc of docs) {
    const gallery = (doc.gallery ?? []).map((g: Doc) => ({
      ...g,
      _type: "image",
      _key: g._key ?? randomKey(),
    }));
    const itinerary = (doc.itinerary ?? []).map((d: Doc) => ({
      _type: "itineraryDay",
      _key: d._key ?? randomKey(),
      day: d.day,
      title: d.title,
      description: d.description,
      location: d.location,
    }));

    await client.patch(doc._id).set({ gallery, itinerary }).commit();
    console.log(`Fixed "${doc.title}" (${gallery.length} gallery images, ${itinerary.length} itinerary days)`);
  }
}

async function main() {
  await fixAcademySettings();
  await fixAcademyCourses();
  await fixExperiencePackages();
  console.log("\nDone. Refresh /studio — the \"Missing keys\" warning should be gone.");
}

main().catch((error) => {
  console.error("Fix failed:", error);
  process.exit(1);
});
