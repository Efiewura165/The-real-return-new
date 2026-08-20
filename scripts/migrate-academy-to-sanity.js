/**
 * One-off migration: pushes the existing static Academy content
 * (content/academy.ts) into Sanity as real, editable documents.
 *
 * Requires SANITY_API_WRITE_TOKEN (a token with Editor access,
 * created in sanity.io/manage under your project's API tab) plus
 * NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET in
 * .env.local. Run with: node scripts/migrate-academy-to-sanity.js
 */
const path = require("path");
const fs = require("fs");
const { createClient } = require("@sanity/client");

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

const client = createClient({ projectId, dataset, apiVersion: "2025-01-01", token, useCdn: false });

// Mirrors content/academy.ts. Kept as plain data here (not imported) since
// this script runs under plain Node, not the Next.js/TypeScript pipeline.
const academyHero = {
  eyebrow: "The Real Return™ Academy",
  title: "Arrive prepared. Learn before you land.",
  description:
    "Every Real Return™ journey is stronger when it begins before the flight. The Academy is a self-paced learning path taught by our founder, with grounded, practical coursework that turns a trip into a homecoming.",
  facilitator: "Taught by Tarsha Lewis, Founder of The Real Return™",
  imagePath: "public/images/stock/tarsha-academy-session.jpg",
  imageAlt: "Tarsha Lewis teaching a documentation session to a Real Return™ diaspora cohort",
};

const academyPhases = [
  { phase: "Phase 1", title: "Foundation & Orientation", description: "Grounded, practical modules that prepare you before you ever set foot in Ghana, available now as standalone courses below.", unlocked: true },
  { phase: "Phase 2", title: "Cultural Deep Dive", description: "History, spirituality, and social structure explored beyond the tourist surface.", unlocked: false },
  { phase: "Phase 3", title: "Identity & Belonging", description: "Working through what it means to return: grief, pride, and everything between.", unlocked: false },
  { phase: "Phase 4", title: "Practical Relocation", description: "Housing, healthcare, schooling, and the logistics of a longer stay or move.", unlocked: false },
  { phase: "Phase 5", title: "Economic Opportunity", description: "Business formation, land, and investment pathways for the diaspora in Ghana.", unlocked: false },
  { phase: "Phase 6", title: "1:1 Concierge", description: "Direct, personal guidance from a Real Return™ steward for your specific path.", unlocked: false },
];

const academyCourses = [
  {
    slug: "cultural-acclimatization",
    title: "Cultural Acclimatization",
    tagline: "Walk in like you already belong.",
    description: "Social hierarchy and respect norms, greetings and etiquette, Ghana Time, family structure, and the role of faith in daily life: the unwritten rules that make the difference between visiting and arriving.",
    imagePath: "public/images/stock/diaspora-lounge-portrait.jpg",
    imageAlt: "A woman relaxing in a stylish lounge, surrounded by greenery",
    price: 79,
    currency: "USD",
    format: "Self-Paced Online",
    lessonCount: 5,
    order: 1,
    featured: false,
    curriculum: [
      { title: "Social Hierarchy & Respect", description: "Understanding elders, chiefs, and the structures of respect that shape every interaction in Ghanaian life." },
      { title: "Greetings & Everyday Etiquette", description: "The greetings, gestures, and small courtesies that signal you belong, from first hello to Ghana Time." },
      { title: "Family & Community Structure", description: "How extended family, clan, and community obligations shape decisions, hospitality, and daily rhythms." },
      { title: "Faith in Daily Life", description: "The role of Christianity, Islam, and traditional belief in how Ghanaians move through an ordinary day." },
      { title: "Real-World Scenarios", description: "Common situations worked through in advance, from market bargaining to visiting an elder's home." },
    ],
  },
  {
    slug: "linguistic-basics",
    title: "Linguistic Basics",
    tagline: "Speak the first words that open doors.",
    description: "Survival phrases in Twi, Ga, and Ewe, everyday expressions, nonverbal communication, and the Akan proverbs that shape how people speak: enough to be understood, and to understand.",
    imagePath: "public/images/stock/adinkra-stamping.jpg",
    imageAlt: "A craftsman hand-stamping traditional Adinkra symbols onto cloth",
    price: 89,
    currency: "USD",
    format: "Self-Paced Online",
    lessonCount: 5,
    order: 2,
    featured: false,
    curriculum: [
      { title: "Survival Phrases in Twi, Ga & Ewe", description: "Core greetings, questions, and requests across Ghana's three most widely spoken languages." },
      { title: "Everyday Expressions", description: "The small talk, filler words, and casual phrases that make conversation feel natural, not textbook." },
      { title: "Nonverbal Communication", description: "Gesture, eye contact, tone, and the unspoken cues that carry as much meaning as words." },
      { title: "Akan Proverbs & Wisdom", description: "Common proverbs and what they reveal about values, humor, and how Ghanaians think." },
      { title: "Listening Practice", description: "Guided audio with native speakers so your ear adjusts before you ever land." },
    ],
  },
  {
    slug: "documentation",
    title: "Documentation",
    tagline: "Handle the paperwork before it handles you.",
    description: "Visa types, Right of Abode eligibility, the Ghana Card, customs rules, and the health requirements to sort out before you travel: the practical groundwork done right, once.",
    imagePath: "public/images/stock/ghana-flag.jpg",
    imageAlt: "The flag of Ghana",
    price: 99,
    currency: "USD",
    format: "Self-Paced Online",
    lessonCount: 5,
    order: 3,
    featured: false,
    curriculum: [
      { title: "Visa Types & Requirements", description: "Which visa fits your trip, from short-stay tourism to longer relocation plans." },
      { title: "Right of Abode Eligibility", description: "Who qualifies, how to apply, and what it unlocks for diaspora returnees." },
      { title: "The Ghana Card", description: "Step-by-step through applying for Ghana's national ID as a returning member of the diaspora." },
      { title: "Customs & Import Rules", description: "What you can bring, what's restricted, and how to avoid delays at the border." },
      { title: "Health & Vaccination Requirements", description: "The medical paperwork and preparations to sort out before you fly." },
    ],
  },
  {
    slug: "full-membership",
    title: "Full Academy Membership",
    tagline: "The complete path, from first lesson to 1:1 guidance.",
    description: "Everything in Foundation & Orientation, plus every phase that follows: Cultural Deep Dive, Identity & Belonging, Practical Relocation, Economic Opportunity, and ongoing 1:1 Concierge guidance from a Real Return™ steward.",
    imagePath: "public/images/stock/krobo-bead-making.jpg",
    imageAlt: "An artisan hand-crafting traditional Krobo beads",
    price: 349,
    currency: "USD",
    format: "Self-Paced + 1:1 Concierge",
    lessonCount: 30,
    order: 4,
    featured: true,
    curriculum: [
      { title: "All Three Foundation Courses", description: "Complete access to Cultural Acclimatization, Linguistic Basics, and Documentation." },
      { title: "Cultural Deep Dive & Identity", description: "History, spirituality, and the emotional work of return, explored beyond the surface." },
      { title: "Practical Relocation Planning", description: "Housing, healthcare, schooling, and the logistics of a longer stay." },
      { title: "Economic Opportunity", description: "Business formation, land, and investment pathways for the diaspora." },
      { title: "Ongoing 1:1 Concierge", description: "Direct, personal guidance from a Real Return™ steward for as long as you need it." },
    ],
  },
];

async function uploadImage(relativePath, alt) {
  const fullPath = path.join(__dirname, "..", relativePath);
  const buffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload("image", buffer, { filename: path.basename(fullPath) });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt };
}

async function main() {
  console.log("Uploading Academy hero image...");
  const heroImage = await uploadImage(academyHero.imagePath, academyHero.imageAlt);

  console.log("Creating/updating Academy Settings document...");
  await client.createOrReplace({
    _id: "academySettings",
    _type: "academySettings",
    eyebrow: academyHero.eyebrow,
    title: academyHero.title,
    description: academyHero.description,
    facilitator: academyHero.facilitator,
    image: heroImage,
    phases: academyPhases,
  });

  for (const course of academyCourses) {
    console.log(`Uploading image for "${course.title}"...`);
    const image = await uploadImage(course.imagePath, course.imageAlt);

    console.log(`Creating/updating course "${course.title}"...`);
    await client.createOrReplace({
      _id: `academyCourse-${course.slug}`,
      _type: "academyCourse",
      title: course.title,
      slug: { _type: "slug", current: course.slug },
      tagline: course.tagline,
      description: course.description,
      image,
      price: course.price,
      currency: course.currency,
      format: course.format,
      lessonCount: course.lessonCount,
      order: course.order,
      featured: course.featured,
      curriculum: course.curriculum,
    });
  }

  console.log("\nDone. Academy content is now live in Sanity — visit /studio to edit it.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
