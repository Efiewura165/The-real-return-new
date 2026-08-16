import type { ExperiencePackage } from "@/types/experience";

export const returnToTheBeginning: ExperiencePackage = {
  id: "return-to-the-beginning",
  slug: "return-to-the-beginning",

  title: "Return to the Beginning",
  tagline: "Stand where memory and the Atlantic meet.",
  shortDescription:
    "Cape Coast Castle, the Door of No Return, and the coastal fishing communities that carry that history forward with dignity.",
  longDescription:
    "Cape Coast holds one of the most difficult and necessary chapters in the story of the African diaspora. This experience is not designed to overwhelm. It is designed to hold space. A guided walk through Cape Coast Castle, time with stewards trained to sit with grief, anger, and pride alike, and days after, spent with the living, resilient coastal community that calls this place home today.",

  region: "Central Region",
  country: "Ghana",
  locations: ["Cape Coast"],

  category: ["HERITAGE", "DIASPORA", "CULTURE"],

  duration: { days: 3, nights: 2 },

  heroImage: { src: "/images/stock/cape-coast-castle.jpg", alt: "The whitewashed walls and cannons of Cape Coast Castle overlooking the Atlantic Ocean, Ghana" },
  gallery: [
    { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic Ocean" },
    { src: "/images/stock/kwame-nkrumah-memorial.jpg", alt: "The Kwame Nkrumah Memorial Park in Accra, Ghana" },
    { src: "/images/stock/academy-heritage-lesson.jpg", alt: "An educator sharing heritage knowledge in a study session" },
  ],

  highlights: [
    "A guided walk through Cape Coast Castle's dungeons and the Door of No Return",
    "Time held with a steward trained to make space for grief, anger, and pride alike",
    "A visit to the fishing harbor and the community that lives beside the castle today",
    "An evening reflection circle, unhurried, and never asked to resolve by sundown",
    "Context on the region's role in the broader story of the transatlantic slave trade",
  ],

  whyThisExperience:
    "This is, for many, the reason the whole journey began. Cape Coast Castle does not ask to be understood in an afternoon. It asks to be witnessed, honestly, and held afterward with care. We do not rush this. Reflection here is unhurried, and never asked to be resolved by sundown. This is history met with dignity, and a future built in its honor.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Orientation",
      location: "Cape Coast",
      description: "Arrival and a gentle orientation to the town, preparing travelers for what the following day will hold.",
    },
    {
      day: 2,
      title: "Cape Coast Castle",
      location: "Cape Coast",
      description: "A guided walk through the castle's dungeons and the Door of No Return, held with a steward trained to make space for grief, anger, and pride alike.",
    },
    {
      day: 3,
      title: "Community & Reflection",
      location: "Cape Coast",
      description: "Time with the fishing harbor community, a closing reflection circle, and onward connection to your next Real Return™ region.",
    },
  ],

  culturalContext:
    "Cape Coast Castle was one of roughly forty \"slave castles\" built along the Ghanaian coast, and among the last departure points for millions of enslaved Africans forcibly taken across the Atlantic. Today it stands as a UNESCO World Heritage Site and a place of pilgrimage for the African diaspora: not a ruin, but a witness.",

  included: [
    "Accommodation for the full itinerary",
    "Cape Coast Castle guided entry with a trained heritage steward",
    "Evening reflection circle",
    "Airport transfers and in-Cape Coast transportation",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; this experience is offered with the same care in every season",
    difficulty: "Easy walking, though emotionally significant, paced deliberately and never rushed",
    groupSize: "Private or small group (4–14 travelers)",
    recommendedFor: ["Diaspora travelers", "Heritage travelers", "Families ready to hold this history together"],
  },

  currency: "USD",
  featured: true,

  registration: { enabled: true, cta: "RETURN TO THE BEGINNING" },

  relatedExperiences: ["where-history-meets-the-atlantic", "above-the-rainforest", "enter-the-kingdom", "the-soul-of-ghana"],
};
