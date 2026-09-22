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

async function main() {
  console.log("Uploading Detty December pop-up banner image...");
  const fullPath = path.join(__dirname, "..", "public", "images", "stock", "detty-december-beach-celebration.jpg");
  const buffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload("image", buffer, { filename: path.basename(fullPath) });

  console.log("Creating/updating the Detty December pop-up document...");
  await client.createOrReplace({
    _id: "popupBanner-detty-december",
    _type: "popupBanner",
    internalName: "Detty December CTA",
    enabled: true,
    pages: [],
    image: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: "A woman jumping and celebrating on the beach at dusk, string lights glowing behind her",
    },
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
