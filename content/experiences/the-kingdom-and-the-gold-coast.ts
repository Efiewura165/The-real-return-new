import type { ExperiencePackage } from "@/types/experience";

export const theKingdomAndTheGoldCoast: ExperiencePackage = {
  id: "the-kingdom-and-the-gold-coast",
  slug: "the-kingdom-and-the-gold-coast",

  title: "The Kingdom & The Gold Coast",
  tagline: "Castles, canopy, and a kingdom that never stopped weaving.",
  shortDescription: "Cape Coast, Elmina, Kakum, and the Ashanti Kingdom: Ghana's heritage coast and living kingdom in one connected circuit.",
  longDescription:
    "This journey traces a natural geographic line: from Accra down to the historic castles of the Gold Coast, up through Kakum's rainforest canopy, and on to Kumasi, seat of the Ashanti Kingdom. No backtracking, no wasted distance, just the most complete circuit through Ghana's coastal and Ashanti heritage.",

  region: "Multi-Region Journey",
  country: "Ghana",
  locations: ["Accra", "Cape Coast", "Elmina", "Kakum National Park", "Kumasi", "Lake Bosomtwe"],

  category: ["HERITAGE", "DIASPORA", "CULTURE"],

  duration: { days: 8, nights: 7 },

  heroImage: { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic Ocean, Ghana" },
  gallery: [
    { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic Ocean" },
    { src: "/images/stock/elmina-castle.jpg", alt: "Elmina Castle overlooking the Atlantic Ocean" },
    { src: "/images/stock/kakum-canopy-walk.jpg", alt: "Visitors crossing a rope canopy walkway above a Ghanaian rainforest" },
    { src: "/images/stock/manhyia.jpeg", alt: "The Akwaaba entrance sign to the Manhyia Palace Museum in Kumasi" },
    { src: "/images/stock/lake-bosomtwe.jpg", alt: "The calm waters of Lake Bosomtwe surrounded by forested hills" },
  ],

  highlights: [
    "Cape Coast Castle and Elmina Castle, held with dignity and unhurried reflection",
    "Kakum National Park's rainforest canopy walkway",
    "Manhyia Palace Museum and the full Ashanti craft circuit: Kente and Adinkra",
    "A restful closing chapter at Lake Bosomtwe",
    "A single, logical circuit with no unnecessary backtracking",
  ],

  whyThisExperience:
    "History and living culture, in one geographically coherent journey. This route pairs the weight of the coastal castles with the resilience and craft of the Ashanti Kingdom, memory and continuation held together.",

  itinerary: [
    {
      day: 1,
      title: "Arrival in Accra",
      location: "Accra",
      description: "Arrival and orientation before the journey moves toward the coast.",
    },
    {
      day: 2,
      title: "Return to the Beginning & Where History Meets the Atlantic",
      location: "Cape Coast & Elmina",
      description: "Cape Coast Castle and Elmina Castle, held with a steward trained for unhurried reflection.",
    },
    {
      day: 4,
      title: "Above the Rainforest",
      location: "Kakum National Park",
      description: "The Kakum canopy walkway and forest trails, turning the journey toward what endures.",
    },
    {
      day: 5,
      title: "Enter the Kingdom",
      location: "Kumasi",
      description: "Manhyia Palace Museum, Kente weaving in Bonwire, and Adinkra stamping in Ntonso.",
    },
    {
      day: 8,
      title: "The Sacred Waters & Departure",
      location: "Lake Bosomtwe",
      description: "A restful closing morning at Lake Bosomtwe before departure.",
    },
  ],

  culturalContext:
    "This route connects two of Ghana's defining heritage narratives: the coastal castles central to transatlantic slave trade history, and the still-living Ashanti Kingdom further inland, two chapters of the same continuous story.",

  included: [
    "Accommodation for the full 8-day itinerary",
    "All castle, canopy walk, and Ashanti craft entries and guided tours",
    "Domestic transportation along the full circuit",
    "A dedicated steward for the entire journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "November through March",
    difficulty: "Easy to moderate, including the Kakum canopy walkway",
    groupSize: "Private or small group (4–12 travelers)",
    recommendedFor: ["Diaspora travelers", "Heritage travelers", "Families"],
  },

  currency: "USD",
  featured: true,

  registration: { enabled: true, cta: "BEGIN THE CIRCUIT" },

  relatedExperiences: ["remember-return-rebuild", "ghana-wild-and-beautiful"],
};
