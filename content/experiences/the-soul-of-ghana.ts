import type { ExperiencePackage } from "@/types/experience";

export const theSoulOfGhana: ExperiencePackage = {
  id: "the-soul-of-ghana",
  slug: "the-soul-of-ghana",

  title: "The Soul of Ghana",
  tagline: "Arrive not as a visitor, but as family coming home.",
  shortDescription:
    "Accra's markets, monuments, and modern skyline — a warm, orienting first chapter for every Real Return™ journey.",
  longDescription:
    "Accra is where every Real Return™ journey begins — a city of contrasts, where centuries-old fishing communities sit beside gleaming towers, and Kwame Nkrumah's vision for a free Africa still shapes the streets. This experience is your orientation: markets, monuments, food, and the first conversations that turn a trip into a homecoming.",

  region: "Greater Accra",
  country: "Ghana",
  locations: ["Accra"],

  category: ["HERITAGE", "CULTURE", "DIASPORA", "FOOD"],

  duration: { days: 3, nights: 2 },

  heroImage: { src: "/images/stock/accra-skyline.jpg", alt: "The modern skyline of Accra, Ghana, with cars and city towers" },
  gallery: [
    { src: "/images/stock/accra-skyline.jpg", alt: "The modern skyline of Accra, Ghana" },
    { src: "/images/stock/kwame-nkrumah-memorial.jpg", alt: "The Kwame Nkrumah Memorial Park in Accra, Ghana" },
    { src: "/images/stock/ghana-flag.jpg", alt: "The flag of Ghana" },
    { src: "/images/stock/diaspora-lounge-portrait.jpg", alt: "A woman relaxing in a stylish lounge, surrounded by greenery" },
  ],

  highlights: [
    "An opening ritual naming why each traveler has come",
    "The Kwame Nkrumah Memorial Park and Mausoleum",
    "Jamestown's fishing harbor and colorful lighthouse",
    "Makola Market — the beating commercial heart of the city",
    "A welcome dinner of authentic Ghanaian cuisine",
    "An evening in Accra's diaspora-friendly lounges and live music spots",
  ],

  whyThisExperience:
    "Accra is not a stopover — it's the doorway. Before Cape Coast, before Kumasi, before the villages your ancestors may have known, Accra teaches you how to see Ghana: proud, modern, self-determined, and unmistakably itself. Every Real Return™ traveler starts here, so that everything after is understood in context, not isolation.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Opening Ritual",
      location: "Accra",
      description: "Arrival, settling in, and an evening opening ritual with your steward and fellow travelers — the first step of a journey measured in meaning, not miles.",
    },
    {
      day: 2,
      title: "Jamestown & Makola Market",
      location: "Accra",
      description: "A guided walk through Jamestown's fishing harbor and colonial lighthouse, followed by the sensory immersion of Makola Market — color, commerce, and daily Accra life.",
    },
    {
      day: 3,
      title: "Kwame Nkrumah Memorial & Departure",
      location: "Accra",
      description: "A visit to the Kwame Nkrumah Memorial Park and Mausoleum, a closing reflection session, and onward connection to your next Real Return™ region.",
    },
  ],

  culturalContext:
    "Accra grew from a cluster of Ga fishing settlements into the capital of the first sub-Saharan African nation to gain independence from colonial rule, in 1957. That history of self-determination is still visible in its architecture, its politics, and the confidence of its streets.",

  included: [
    "Accommodation for the full itinerary",
    "Guided Jamestown and Makola Market walk",
    "Kwame Nkrumah Memorial Park entry",
    "Airport transfers and in-Accra transportation",
    "A dedicated steward throughout the journey",
    "Welcome dinner",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; November through March offers the driest, most comfortable weather",
    difficulty: "Easy — mostly walking and short drives",
    groupSize: "Private or small group (4–14 travelers)",
    recommendedFor: ["First-time visitors", "Diaspora travelers", "Families", "Anyone beginning a longer Ghana journey"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "BEGIN YOUR RETURN" },

  relatedExperiences: ["where-the-river-meets-the-sea", "return-to-the-beginning", "the-atlantic-escape", "enter-the-kingdom"],
};
