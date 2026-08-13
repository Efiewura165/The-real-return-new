import type { ExperiencePackage } from "@/types/experience";

export const whereHistoryMeetsTheAtlantic: ExperiencePackage = {
  id: "where-history-meets-the-atlantic",
  slug: "where-history-meets-the-atlantic",

  title: "Where History Meets the Atlantic",
  tagline: "A threshold between memory and the sea.",
  shortDescription: "Elmina Castle, the oldest European structure in sub-Saharan Africa, and the fishing town that has grown around it.",
  longDescription:
    "Elmina Castle predates Cape Coast Castle by over a century — built in 1482, it is the oldest European building in sub-Saharan Africa, and among the earliest points in the transatlantic slave trade's long, painful history. Today, one of Ghana's largest fishing harbors operates in its shadow, a living town continuing on beside a difficult past.",

  region: "Central Region",
  country: "Ghana",
  locations: ["Elmina"],

  category: ["HERITAGE", "DIASPORA", "CULTURE"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/elmina-castle.jpg", alt: "The whitewashed walls of Elmina Castle overlooking the Atlantic Ocean, Ghana" },
  gallery: [{ src: "/images/stock/elmina-castle.jpg", alt: "Elmina Castle overlooking the Atlantic Ocean" }],

  highlights: [
    "A guided walk through Elmina Castle, the oldest European structure in sub-Saharan Africa",
    "Time held with a steward trained to make space for reflection",
    "A visit to Elmina's fishing harbor, one of the busiest in Ghana",
    "The town's colorful, historic streets and Dutch colonial architecture",
    "A closing conversation on memory, resilience, and what continues",
  ],

  whyThisExperience:
    "Elmina asks the same dignity Cape Coast does — this is not a monument to visit quickly. Pairing the two castles gives a fuller picture of this history's scale, while Elmina's living harbor town offers a reminder that life continues, determined, beside even the heaviest history.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Harbor Town",
      location: "Elmina",
      description: "Arrival and an afternoon walking Elmina's historic streets and working fishing harbor.",
    },
    {
      day: 2,
      title: "Elmina Castle",
      location: "Elmina",
      description: "A guided walk through Elmina Castle, held with a steward trained in reflective, unhurried heritage tours.",
    },
  ],

  culturalContext:
    "Built by the Portuguese in 1482 as São Jorge da Mina, Elmina Castle is the oldest European building south of the Sahara and, like Cape Coast Castle, a UNESCO World Heritage Site and a major departure point in the history of the transatlantic slave trade.",

  included: [
    "Accommodation for the full itinerary",
    "Elmina Castle guided entry with a trained heritage steward",
    "Harbor town walking tour",
    "Transportation within the region",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; offered with the same care in every season",
    difficulty: "Easy walking, though emotionally significant — paced deliberately, never rushed",
    groupSize: "Private or small group (4–14 travelers)",
    recommendedFor: ["Diaspora travelers", "Heritage travelers", "Anyone pairing with Return to the Beginning"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER ELMINA" },

  relatedExperiences: ["return-to-the-beginning", "above-the-rainforest"],
};
