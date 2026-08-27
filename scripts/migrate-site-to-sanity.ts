/**
 * One-off migration: pushes the remaining homepage/site-wide content
 * (content/site.ts) into Sanity as real, editable documents.
 *
 * Requires SANITY_API_WRITE_TOKEN (a token with Editor access,
 * created in sanity.io/manage under your project's API tab) plus
 * NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET in
 * .env.local. Run with: npx tsx scripts/migrate-site-to-sanity.ts
 */
import fs from "fs";
import path from "path";
import { createClient, type SanityClient } from "@sanity/client";

import { communityContent, founderContent, heroSlides, investmentContent, itineraryContent, pillarsContent } from "../content/site";

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

const imageAssetCache = new Map<string, { _type: "reference"; _ref: string }>();

async function uploadImageOnce(relativeSrc: string) {
  const cached = imageAssetCache.get(relativeSrc);
  if (cached) return cached;

  const fullPath = path.join(__dirname, "..", "public", relativeSrc.replace(/^\//, ""));
  const buffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload("image", buffer, { filename: path.basename(fullPath) });
  const reference = { _type: "reference" as const, _ref: asset._id };
  imageAssetCache.set(relativeSrc, reference);
  return reference;
}

async function toSanityImage(relativeSrc: string, alt?: string) {
  console.log(`Uploading image ${relativeSrc}...`);
  const assetRef = await uploadImageOnce(relativeSrc);
  return { _type: "image", asset: assetRef, ...(alt ? { alt } : {}) };
}

async function migrateSiteSettings() {
  console.log("\nMigrating Site Settings (hero slides + community)...");
  const slides = await Promise.all(
    heroSlides.map(async (slide) => ({
      _type: "heroSlide",
      _key: slide.src,
      image: await toSanityImage(slide.src),
      alt: slide.alt,
      caption: slide.caption,
    })),
  );

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    heroSlides: slides,
    community: communityContent,
  });
}

async function migratePillars() {
  console.log("\nMigrating Pillars Section...");
  const pillars = await Promise.all(
    pillarsContent.pillars.map(async (pillar) => ({
      _type: "pillar",
      _key: pillar.key,
      key: pillar.key,
      title: pillar.title,
      description: pillar.description,
      image: await toSanityImage(pillar.image),
    })),
  );

  await client.createOrReplace({
    _id: "pillarsSection",
    _type: "pillarsSection",
    eyebrow: pillarsContent.eyebrow,
    title: pillarsContent.title,
    pillars,
  });
}

async function migrateFounder() {
  console.log("\nMigrating Founder Section...");
  await client.createOrReplace({
    _id: "founderSection",
    _type: "founderSection",
    eyebrow: founderContent.eyebrow,
    name: founderContent.name,
    role: founderContent.role,
    body: founderContent.body,
    pullQuote: founderContent.pullQuote,
    image: await toSanityImage(founderContent.image.src, founderContent.image.alt),
  });
}

async function migrateItinerary() {
  console.log("\nMigrating Itinerary Preview Section...");
  await client.createOrReplace({
    _id: "itinerarySection",
    _type: "itinerarySection",
    eyebrow: itineraryContent.eyebrow,
    title: itineraryContent.title,
    description: itineraryContent.description,
    highlights: itineraryContent.highlights.map((h) => ({ _type: "highlight", _key: h.day, ...h })),
    cta: itineraryContent.cta,
  });
}

async function migrateInvestment() {
  console.log("\nMigrating Investment Section...");
  await client.createOrReplace({
    _id: "investmentSection",
    _type: "investmentSection",
    eyebrow: investmentContent.eyebrow,
    title: investmentContent.title,
    description: investmentContent.description,
    tiers: investmentContent.tiers.map((t) => ({ _type: "tier", _key: t.name, ...t })),
  });
}

async function main() {
  await migrateSiteSettings();
  await migratePillars();
  await migrateFounder();
  await migrateItinerary();
  await migrateInvestment();

  console.log("\nDone. Homepage content is now live in Sanity — visit /studio to edit it.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
