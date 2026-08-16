import type { ExperiencePackage } from "@/types/experience";

export const aboveTheRainforest: ExperiencePackage = {
  id: "above-the-rainforest",
  slug: "above-the-rainforest",

  title: "Above the Rainforest",
  tagline: "Walk above the canopy that once bordered the routes families were taken from.",
  shortDescription: "Kakum National Park's rope canopy walkway, suspended above one of West Africa's last untouched rainforests.",
  longDescription:
    "Kakum's canopy walkway strings seven rope bridges across the treetops, up to 40 meters above the forest floor, one of the few places in Africa to see rainforest from the canopy down rather than the ground up. The forest below once bordered the routes families were taken from on their way to the coast. Here, the journey turns toward what endures: the land itself, still standing, still growing.",

  region: "Central Region",
  country: "Ghana",
  locations: ["Kakum National Park"],

  category: ["NATURE", "ADVENTURE", "FAMILY"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/kakum-canopy-walk.jpg", alt: "Visitors crossing the rope canopy walkway above the rainforest at Kakum National Park" },
  gallery: [{ src: "/images/stock/kakum-canopy-walk.jpg", alt: "Visitors crossing the rope canopy walkway at Kakum National Park" }],

  highlights: [
    "Seven rope bridges strung across the rainforest canopy, up to 40 meters high",
    "Guided forest-floor nature trails before the canopy walk",
    "One of West Africa's last stands of untouched tropical rainforest",
    "Wildlife spotting, including forest elephants and hundreds of bird species",
    "A natural, grounding pairing with Cape Coast or Elmina",
  ],

  whyThisExperience:
    "After the weight of the castles, Kakum turns the journey toward what has endured. The forest canopy stretches unbroken above land that has witnessed centuries, proof that some things survive, still standing, still growing.",

  itinerary: [
    {
      day: 1,
      title: "Kakum Canopy Walk",
      location: "Kakum National Park",
      description: "A guided forest-floor nature trail followed by the canopy walkway crossing, with time to spot wildlife along the way.",
    },
  ],

  culturalContext:
    "Kakum National Park protects over 350 square kilometers of tropical rainforest and was historically part of the forested interior bordering routes to the coast during the transatlantic slave trade era, a landscape with its own long memory.",

  included: ["Canopy walkway and park entry fees", "Guided nature trail", "In-region transportation", "A dedicated steward for the day"],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "November through March, outside the heaviest rains",
    difficulty: "Moderate: the canopy walkway is at height and involves swaying rope bridges",
    groupSize: "Private or small group (2–14 travelers)",
    recommendedFor: ["Families", "Adventure travelers", "Anyone pairing with Return to the Beginning or Where History Meets the Atlantic"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "EXPLORE KAKUM" },

  relatedExperiences: ["return-to-the-beginning", "where-history-meets-the-atlantic"],
};
