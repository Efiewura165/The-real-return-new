import type { ExperiencePackage } from "@/types/experience";

export const threadsOfAKingdom: ExperiencePackage = {
  id: "threads-of-a-kingdom",
  slug: "threads-of-a-kingdom",

  title: "Threads of a Kingdom",
  tagline: "Every color has a name. Every pattern, a meaning.",
  shortDescription: "Hands-on time with master Kente weavers in Bonwire, the village where the cloth of kings is still made by hand.",
  longDescription:
    "In Bonwire, just outside Kumasi, narrow wooden looms still click with the same rhythm they have for centuries — thread by thread, pattern by pattern, into Kente cloth. This experience puts you at the loom itself, learning not just the technique but the meaning: every color and pattern in Kente says something, and a master weaver will teach you to read it.",

  region: "Ashanti Region",
  country: "Ghana",
  locations: ["Bonwire"],

  category: ["CRAFT", "HERITAGE", "CULTURE"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/kente-weaving-loom.jpg", alt: "A craftsman weaving Kente cloth on a traditional loom in Bonwire, Ghana" },
  gallery: [
    { src: "/images/stock/kente-weaving-loom.jpg", alt: "A craftsman weaving Kente cloth on a traditional loom" },
    { src: "/images/stock/kente-cloth-attire.jpg", alt: "A close-up of vibrant, hand-woven Kente cloth attire" },
  ],

  highlights: [
    "A guided walk through Bonwire's weaving houses",
    "Hands-on time at a traditional narrow-strip loom",
    "A master weaver's explanation of color and pattern meaning",
    "The chance to choose and take home a length of cloth chosen for what it says",
    "Conversations with a family that has woven for generations",
  ],

  whyThisExperience:
    "Kente is one of the most recognized textiles from the African continent, and almost none of that recognition includes its meaning. Learning to read pattern and color the way weavers do — and leaving with cloth chosen, not assigned — turns a souvenir into something closer to a message.",

  itinerary: [
    {
      day: 1,
      title: "Bonwire Weaving Houses",
      location: "Bonwire",
      description: "A full day in Bonwire's weaving houses: guided history, hands-on loom time, and a closing session choosing your own length of cloth.",
    },
  ],

  culturalContext:
    "Kente originated among the Ashanti as royal and ceremonial cloth, historically reserved for chiefs and important occasions. Each color and pattern carries specific meaning — gold for royalty and wealth, green for growth, and dozens of named patterns tied to proverbs, history, and status.",

  included: [
    "Guided Bonwire weaving house tour",
    "Hands-on loom instruction",
    "In-region transportation from Kumasi",
    "A dedicated steward for the day",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Cloth purchases beyond the included length"],

  practicalInformation: {
    bestTime: "Year-round",
    difficulty: "Easy — seated craft work",
    groupSize: "Private or small group (2–10 travelers)",
    recommendedFor: ["Craft enthusiasts", "Anyone pairing with Enter the Kingdom", "Families"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER KENTE" },

  relatedExperiences: ["enter-the-kingdom", "the-symbols-that-speak", "from-earth-to-art"],
};
