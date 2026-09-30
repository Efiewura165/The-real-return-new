/**
 * One-off migration: adds the Detty December pop-up banner as a second
 * editable popupBanner document in Sanity, alternating on-screen with the
 * existing Homepage Booking CTA banner.
 *
 * Requires SANITY_API_WRITE_TOKEN plus NEXT_PUBLIC_SANITY_PROJECT_ID /
 * NEXT_PUBLIC_SANITY_DATASET in .env.local.
 * Run with: npx tsx scripts/migrate-detty-december-banner-to-sanity.ts
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

// Every image this banner cycles through, one at a time, a different one on
// each appearance. Add more entries here (filename relative to
// public/images/stock, plus alt text) and re-run this script to expand the
// rotation.
const DETTY_DECEMBER_IMAGES: { filename: string; alt: string }[] = [
  {
    filename: "detty-december-beach-celebration.jpg",
    alt: "A woman jumping and celebrating on the beach at dusk, string lights glowing behind her",
  },
  {
    filename: "detty-december-festival-dancer.jpg",
    alt: "A Ghanaian dancer in colorful traditional festival attire and beaded jewelry, mid-performance",
  },
  {
    filename: "detty-december-wine-toast.jpg",
    alt: "Two guests toasting wine glasses over a fine-dining spread on a rooftop terrace at night",
  },
  {
    filename: "detty-december-restaurant-glow.jpg",
    alt: "A woman raising a wine glass to a golden sunset at a rooftop restaurant table",
  },
];

async function main() {
  console.log(`Uploading ${DETTY_DECEMBER_IMAGES.length} Detty December pop-up banner image(s)...`);
  const images = [];
  for (const { filename, alt } of DETTY_DECEMBER_IMAGES) {
    const fullPath = path.join(__dirname, "..", "public", "images", "stock", filename);
    const buffer = fs.readFileSync(fullPath);
    const asset = await client.assets.upload("image", buffer, { filename });
    images.push({ _type: "image" as const, _key: asset._id, asset: { _type: "reference" as const, _ref: asset._id }, alt });
  }

  console.log("Creating/updating the Detty December pop-up document...");
  await client.createOrReplace({
    _id: "popupBanner-detty-december",
    _type: "popupBanner",
    internalName: "Detty December CTA",
    enabled: true,
    pages: [],
    images,
    eyebrow: "Detty December",
    message: "Ghana's biggest season is coming. Beaches, beats, and homecoming energy, secure your spot before it fills up.",
    buttonLabel: "Reserve Your Detty December",
    buttonLink: "/reserve",
    firstShowDelaySeconds: 10,
    visibleDurationSeconds: 6,
    reappearIntervalSeconds: 45,
  });

  console.log("\nDone. Both pop-up banners now alternate on /studio — visit it to edit either or add more.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
