import type { ExperiencePackage } from "@/types/experience";

export const ghanasHiddenWaterWorld: ExperiencePackage = {
  id: "ghanas-hidden-water-world",
  slug: "ghanas-hidden-water-world",

  title: "Ghana's Hidden Water World",
  tagline: "A village with no roads, no cars, and no need for either.",
  shortDescription: "Nzulezo, a UNESCO-listed stilt village built entirely on water in Ghana's Western Region.",
  longDescription:
    "Reached only by a canoe ride across Lake Tadane, Nzulezo is a village of wooden homes, churches, and a school, all built on stilts above the water — no roads, no cars, no dry land beneath a single structure. It's one of the most singular places in West Africa, and a UNESCO World Heritage Tentative List site.",

  region: "Western Region",
  country: "Ghana",
  locations: ["Nzulezo"],

  category: ["NATURE", "HERITAGE", "ADVENTURE"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/nzulezo-stilt-village.jpg", alt: "Wooden stilt houses built over the water at Nzulezo village, Western Region, Ghana" },
  gallery: [{ src: "/images/stock/nzulezo-stilt-village.jpg", alt: "Wooden stilt houses built over the water at Nzulezo village" }],

  highlights: [
    "A guided canoe ride across Lake Tadane to the village",
    "A walking tour of Nzulezo's stilt homes, church, and school",
    "The history of a community built entirely on water for generations",
    "Wildlife spotting along the lake — birds, monkeys, and butterflies",
    "An easy pairing with a Busua or Atlantic Escape stay",
  ],

  whyThisExperience:
    "There's nowhere else quite like Nzulezo — a community that solved the question of where to live by simply building on the water itself, and has sustained that way of life for generations. It's a quiet, singular detour from Ghana's more familiar landmarks.",

  itinerary: [
    {
      day: 1,
      title: "Canoe to Nzulezo",
      location: "Nzulezo",
      description: "A guided canoe ride across Lake Tadane, a walking tour of the stilt village, and return by canoe in the afternoon.",
    },
  ],

  culturalContext:
    "Nzulezo's residents trace their ancestry to a migration from Mali centuries ago, following a snail that is said to have led them to the lake. The village remains on Ghana's UNESCO World Heritage Tentative List for its unique architecture and way of life.",

  included: ["Guided canoe transport and village tour", "Lake entry fees", "In-region transportation", "A dedicated steward for the day"],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "November through March for calmer lake conditions",
    difficulty: "Easy — seated canoe ride and short walking",
    groupSize: "Private or small group (2–10 travelers)",
    recommendedFor: ["Nature travelers", "Anyone pairing with The Atlantic Escape"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER NZULEZO" },

  relatedExperiences: ["the-atlantic-escape", "from-coconut-to-golden-oil"],
};
