import type { ExperiencePackage } from "@/types/experience";

export const fromCoconutToGoldenOil: ExperiencePackage = {
  id: "from-coconut-to-golden-oil",
  slug: "from-coconut-to-golden-oil",

  title: "From Coconut to Golden Oil",
  tagline: "The coast's other harvest, pressed and boiled by hand.",
  shortDescription: "Coastal Western Region communities turning palm fruit and coconut into Ghana's traditional golden oil.",
  longDescription:
    "Along Ghana's western coastline, palm and coconut groves feed a tradition as old as the villages themselves — fruit boiled, pounded, and pressed by hand into the deep golden oil that flavors nearly every Ghanaian kitchen. This experience puts you inside that process, alongside the women who do this work season after season.",

  region: "Western Region",
  country: "Ghana",
  locations: ["Coastal villages near Axim"],

  category: ["AGRICULTURE", "CRAFT", "FOOD"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/palm-oil-processing.jpg", alt: "Women hand-processing palm fruit into traditional golden oil in a coastal Ghanaian village" },
  gallery: [{ src: "/images/stock/palm-oil-processing.jpg", alt: "Women hand-processing palm fruit into traditional golden oil" }],

  highlights: [
    "A visit to a coastal village oil-pressing cooperative",
    "The full hand process: boiling, pounding, and pressing",
    "Conversations with the women whose cooperative sustains the craft",
    "A tasting of fresh, unrefined golden oil against store-bought versions",
    "An easy pairing with Busua or Nzulezo",
  ],

  whyThisExperience:
    "Golden oil touches nearly every meal in Ghana, yet the labor behind it — almost entirely women's work, almost entirely by hand — rarely gets seen. This is a chance to witness it directly, and to taste the difference it makes.",

  itinerary: [
    {
      day: 1,
      title: "Oil-Pressing Village Visit",
      location: "Coastal villages near Axim",
      description: "A full day with a coastal oil-pressing cooperative: boiling, pounding, and pressing, followed by a tasting session.",
    },
  ],

  culturalContext:
    "Palm oil production along Ghana's coast remains overwhelmingly women-led, often organized into cooperatives that provide steady income alongside the daily rhythm of farming and family life — a tradition passed down largely unchanged for generations.",

  included: ["Guided cooperative visit and hands-on session", "Tasting session", "In-region transportation", "A dedicated steward for the day"],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; peak harvest is typically March through May",
    difficulty: "Easy — hands-on craft work, some heat near boiling pots",
    groupSize: "Private or small group (2–10 travelers)",
    recommendedFor: ["Craft and agriculture enthusiasts", "Anyone pairing with The Atlantic Escape"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER THE OIL STORY" },

  relatedExperiences: ["the-atlantic-escape", "ghanas-hidden-water-world", "from-bean-to-chocolate"],
};
