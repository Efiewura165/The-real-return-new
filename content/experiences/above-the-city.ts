import type { ExperiencePackage } from "@/types/experience";

export const aboveTheCity: ExperiencePackage = {
  id: "above-the-city",
  slug: "above-the-city",

  title: "Above the City",
  tagline: "Breathe easier where the hills meet the clouds.",
  shortDescription: "A cool-air retreat into Aburi's botanical gardens and hillside craft villages, just above Accra.",
  longDescription:
    "Twenty minutes from Accra, the road climbs into the Akwapim Hills and the air changes — cooler, quieter, greener. Aburi has been a retreat since colonial times, its botanical gardens home to towering trees planted over a century ago. This is a slower chapter: gardens, craft villages, and hillside views that put the whole journey in perspective.",

  region: "Eastern Region",
  country: "Ghana",
  locations: ["Aburi"],

  category: ["NATURE", "WELLNESS", "FAMILY"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/aburi-botanical-gardens.jpg", alt: "A tree-lined avenue in the Aburi Botanical Gardens, Eastern Region, Ghana" },
  gallery: [
    { src: "/images/stock/aburi-botanical-gardens.jpg", alt: "Tall trees lining a path through the Aburi Botanical Gardens" },
    { src: "/images/stock/grand-resort-aerial.jpg", alt: "Aerial view of a hillside resort surrounded by gardens" },
    { src: "/images/stock/poolside-colonnade-thatched-roof.jpg", alt: "A thatched-roof poolside colonnade with wooden chairs" },
  ],

  highlights: [
    "A guided walk through the 135-year-old Aburi Botanical Gardens",
    "Century-old avenue trees planted during the colonial era",
    "Woodcarving workshops in the surrounding craft villages",
    "Panoramic views over the Accra Plains from the escarpment",
    "A slow, restorative pace after the energy of Accra",
  ],

  whyThisExperience:
    "Every journey needs a place to exhale. Aburi has served that purpose for generations — a hillside sanctuary above the heat and noise of the capital. For travelers, it's a chance to slow down between chapters, to sit with what Accra stirred up, before the deeper history of Cape Coast or the living kingdom of Kumasi.",

  itinerary: [
    {
      day: 1,
      title: "Into the Hills",
      location: "Aburi",
      description: "Drive up into the Akwapim Hills, check into a hillside retreat, and spend the afternoon walking the Aburi Botanical Gardens.",
    },
    {
      day: 2,
      title: "Craft Villages & Views",
      location: "Aburi",
      description: "A morning among woodcarving workshops in the surrounding villages, a final panoramic view over the plains, and return to Accra.",
    },
  ],

  culturalContext:
    "Aburi Botanical Gardens was established in 1890 by the British colonial government as an experimental plant station. Today it is tended as a living record of that era and a beloved local retreat, its avenue of towering trees among the oldest cultivated in Ghana.",

  included: [
    "Accommodation for the full itinerary",
    "Guided Aburi Botanical Gardens entry and tour",
    "Craft village visit",
    "Transportation to and from Accra",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; mornings are coolest and best for walking",
    difficulty: "Easy — gentle walking, no strenuous activity",
    groupSize: "Private or small group (2–14 travelers)",
    recommendedFor: ["Families", "Wellness travelers", "Anyone pairing with a Greater Accra stay"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER ABURI" },

  relatedExperiences: ["from-bean-to-chocolate", "the-soul-of-ghana", "into-the-mountains"],
};
