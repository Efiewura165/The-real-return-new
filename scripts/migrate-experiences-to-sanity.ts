/**
 * One-off migration: pushes the existing static experience package
 * content (content/experiences/*.ts) into Sanity as real, editable
 * documents.
 *
 * Requires SANITY_API_WRITE_TOKEN plus NEXT_PUBLIC_SANITY_PROJECT_ID /
 * NEXT_PUBLIC_SANITY_DATASET in .env.local (same as the Academy
 * migration). Run with: npx tsx scripts/migrate-experiences-to-sanity.ts
 */
import path from "path";
import fs from "fs";
import { createClient } from "@sanity/client";

import { experiencePackages } from "../content/experiences";
import type { ExperienceImage } from "../types/experience";

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

// Cache uploads by source path so shared stock photos (used across
// multiple packages' hero/gallery) only get uploaded to Sanity once.
const imageAssetCache = new Map<string, { _type: "reference"; _ref: string }>();

async function uploadImageOnce(publicSrc: string) {
  const cached = imageAssetCache.get(publicSrc);
  if (cached) return cached;

  const fullPath = path.join(__dirname, "..", "public", publicSrc);
  const buffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload("image", buffer, { filename: path.basename(fullPath) });
  const ref = { _type: "reference" as const, _ref: asset._id };
  imageAssetCache.set(publicSrc, ref);
  return ref;
}

async function toSanityImage(image: ExperienceImage) {
  const asset = await uploadImageOnce(image.src);
  return { _type: "image", asset, alt: image.alt };
}

async function main() {
  console.log(`Migrating ${experiencePackages.length} experience packages...\n`);

  for (const pkg of experiencePackages) {
    console.log(`"${pkg.title}" (${pkg.slug})`);

    const heroImage = await toSanityImage(pkg.heroImage);
    const gallery = await Promise.all(pkg.gallery.map(toSanityImage));

    await client.createOrReplace({
      _id: `experiencePackage-${pkg.slug}`,
      _type: "experiencePackage",
      title: pkg.title,
      slug: { _type: "slug", current: pkg.slug },
      tagline: pkg.tagline,
      shortDescription: pkg.shortDescription,
      longDescription: pkg.longDescription,
      region: pkg.region,
      country: pkg.country,
      locations: pkg.locations,
      category: pkg.category,
      duration: pkg.duration,
      heroImage,
      gallery,
      highlights: pkg.highlights,
      whyThisExperience: pkg.whyThisExperience,
      itinerary: pkg.itinerary,
      culturalContext: pkg.culturalContext,
      included: pkg.included,
      excluded: pkg.excluded,
      practicalInformation: pkg.practicalInformation,
      startingPrice: pkg.startingPrice,
      currency: pkg.currency,
      featured: pkg.featured,
      registration: pkg.registration,
      relatedExperiences: pkg.relatedExperiences,
    });
  }

  console.log(`\nDone. ${imageAssetCache.size} unique images uploaded. All experience packages are now live in Sanity, visit /studio to edit them.`);
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
