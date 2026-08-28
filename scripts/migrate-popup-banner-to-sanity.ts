/**
 * One-off migration: seeds the original hardcoded booking pop-up
 * (formerly components/home/BookingCTAPopup.tsx) into Sanity as the
 * first editable popupBanner document, so the site keeps showing the
 * same banner after the code stops hardcoding it.
 *
 * Requires SANITY_API_WRITE_TOKEN plus NEXT_PUBLIC_SANITY_PROJECT_ID /
 * NEXT_PUBLIC_SANITY_DATASET in .env.local.
 * Run with: npx tsx scripts/migrate-popup-banner-to-sanity.ts
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

async function main() {
  console.log("Uploading pop-up banner image...");
  const fullPath = path.join(__dirname, "..", "public", "images", "stock", "ghana-water-welcome-smile.jpg");
  const buffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload("image", buffer, { filename: path.basename(fullPath) });

  console.log("Creating/updating the Booking CTA pop-up document...");
  await client.createOrReplace({
    _id: "popupBanner-booking-cta",
    _type: "popupBanner",
    internalName: "Homepage Booking CTA",
    enabled: true,
    pages: [],
    image: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: "A smiling Ghanaian woman in traditional dress, welcoming guests with a warm Akwaaba spirit",
    },
    eyebrow: "The Real Return™",
    message: "You are at the Right Spot Where Luxury meets Adventure",
    buttonLabel: "Book Now For Our Next Exciting Destination Package",
    buttonLink: "/reserve",
    firstShowDelaySeconds: 6,
    visibleDurationSeconds: 18,
    reappearIntervalSeconds: 45,
  });

  console.log("\nDone. The pop-up banner is now editable in Sanity — visit /studio to edit it or add new ones.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
