import type { ExperiencePackage } from "@/types/experience";

export const theAtlanticEscape: ExperiencePackage = {
  id: "the-atlantic-escape",
  slug: "the-atlantic-escape",

  title: "The Atlantic Escape",
  tagline: "Let the tide set the pace of your day.",
  shortDescription: "Palm-lined beaches, fishing villages, and slow Atlantic mornings in Busua, Ghana's Western Region.",
  longDescription:
    "Busua is where the journey exhales. A crescent of golden sand, gentle surf, and a fishing village rhythm unbroken by the pace of the capital. This is a chapter built for rest — mornings under palm trees, afternoons in the water, evenings with fresh-caught fish and the sound of the Atlantic.",

  region: "Western Region",
  country: "Ghana",
  locations: ["Busua"],

  category: ["BEACH", "LUXURY", "WELLNESS", "ADVENTURE"],

  duration: { days: 3, nights: 2 },

  heroImage: { src: "/images/stock/busua-beach-lounge.jpg", alt: "A beachfront lounge under palm trees overlooking the Atlantic Ocean at Busua, Ghana" },
  gallery: [
    { src: "/images/stock/busua-beach-lounge.jpg", alt: "A beachfront lounge overlooking the Atlantic Ocean at Busua" },
    { src: "/images/stock/ghana-beach-bodyboarding.jpg", alt: "A boy bodyboarding in the waves on a Ghanaian beach" },
    { src: "/images/stock/poolside-cabana-ocean-view.jpg", alt: "A shaded poolside cabana overlooking the ocean" },
    { src: "/images/stock/villa-pool-reflection.jpg", alt: "A white villa with arched doorways reflected in a still pool" },
  ],

  highlights: [
    "Mornings on Busua's palm-lined crescent beach",
    "Beginner-friendly surf lessons with local instructors",
    "A boat visit to the fishing village and its daily catch",
    "Sunset dinners with fresh seafood on the sand",
    "Unstructured time — the one chapter built for doing nothing at all",
  ],

  whyThisExperience:
    "Every return needs rest built into it, not just history and discovery. Busua gives the journey somewhere to land — a slower rhythm after Cape Coast's weight and Kumasi's grandeur, where the only itinerary is the tide.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Settling In",
      location: "Busua",
      description: "Arrival at your beachfront accommodation, an easy first afternoon, and a welcome dinner on the sand.",
    },
    {
      day: 2,
      title: "Surf & Sea",
      location: "Busua",
      description: "An optional beginner surf lesson, free time on the beach, and a boat visit to the local fishing village.",
    },
    {
      day: 3,
      title: "Slow Morning & Departure",
      location: "Busua",
      description: "A final unhurried morning by the water before departure.",
    },
  ],

  culturalContext:
    "Busua's economy has long centered on fishing, with wooden canoes launching daily from the beach at dawn. In recent decades it has also become one of Ghana's most respected surf communities, drawing travelers while staying rooted in village life.",

  included: [
    "Beachfront accommodation for the full itinerary",
    "One surf lesson per traveler",
    "Fishing village boat visit",
    "Airport transfers and in-region transportation",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "November through March for calmer seas; August for the strongest surf",
    difficulty: "Easy — entirely optional activity level",
    groupSize: "Private or small group (2–14 travelers)",
    recommendedFor: ["Couples", "Luxury travelers", "Anyone closing out a longer Ghana journey"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "ESCAPE TO THE ATLANTIC" },

  relatedExperiences: ["return-to-the-beginning", "the-soul-of-ghana"],
};
