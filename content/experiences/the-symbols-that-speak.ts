import type { ExperiencePackage } from "@/types/experience";

export const theSymbolsThatSpeak: ExperiencePackage = {
  id: "the-symbols-that-speak",
  slug: "the-symbols-that-speak",

  title: "The Symbols That Speak",
  tagline: "A visual language older than the alphabet you're reading now.",
  shortDescription: "Learn to stamp Adinkra cloth by hand in Ntonso, where each symbol carries a proverb of its own.",
  longDescription:
    "In Ntonso, near Kumasi, artisans still carve Adinkra stamps from calabash gourds and press them into cloth using ink boiled from tree bark, the same method used for centuries. Each symbol is a compressed proverb: Sankofa for learning from the past, Gye Nyame for the supremacy of God, dozens more, each a small philosophy pressed into fabric.",

  region: "Ashanti Region",
  country: "Ghana",
  locations: ["Ntonso"],

  category: ["CRAFT", "HERITAGE", "CULTURE"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/adinkra-stamping.jpg", alt: "An artisan hand-stamping traditional Adinkra symbols onto cloth in Ntonso, Ghana" },
  gallery: [{ src: "/images/stock/adinkra-stamping.jpg", alt: "An artisan hand-stamping Adinkra symbols onto cloth" }],

  highlights: [
    "A visit to Ntonso's Adinkra-making village",
    "Learning to carve and press calabash stamps by hand",
    "The meaning behind Sankofa, Gye Nyame, and other core symbols",
    "Traditional bark-ink preparation, start to finish",
    "A hand-stamped cloth of your own to take home",
  ],

  whyThisExperience:
    "Adinkra is a written language most visitors never learn to read: symbols that carry entire proverbs about wisdom, unity, and resilience. Making your own cloth, symbol by symbol, is a way of carrying that language home with you, understood rather than just admired.",

  itinerary: [
    {
      day: 1,
      title: "Ntonso Adinkra Village",
      location: "Ntonso",
      description: "A full day learning bark-ink preparation and stamp-carving, followed by hands-on cloth stamping with a local artisan.",
    },
  ],

  culturalContext:
    "Adinkra symbols originated among the Akan people of Ghana and Côte d'Ivoire, traditionally worn at funerals and significant ceremonies. Ntonso remains the center of hand-production, using ink boiled from the bark of the badie tree.",

  included: [
    "Guided Ntonso village visit",
    "Hands-on stamping session and materials",
    "In-region transportation from Kumasi",
    "A dedicated steward for the day",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Additional cloth purchases"],

  practicalInformation: {
    bestTime: "Year-round",
    difficulty: "Easy, seated craft work",
    groupSize: "Private or small group (2–10 travelers)",
    recommendedFor: ["Craft enthusiasts", "Anyone pairing with Enter the Kingdom", "Families"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER ADINKRA" },

  relatedExperiences: ["enter-the-kingdom", "threads-of-a-kingdom", "from-earth-to-art"],
};
