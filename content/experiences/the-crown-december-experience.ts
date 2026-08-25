import type { ExperiencePackage } from "@/types/experience";

export const theCrownDecemberExperience: ExperiencePackage = {
  id: "the-crown-december-experience",
  slug: "the-crown-december-experience",

  title: "The Crown December Experience",
  tagline: "Your family's December, built entirely around you.",
  shortDescription:
    "A fully private, custom-built December season in a private villa or 5-star suite — your own dates, your own itinerary, your own AfroFuture access.",
  longDescription:
    "Some families don't want a cohort schedule, even a small one. This is the December season built entirely around yours: a private villa or 5-star suite, custom dates within the December window, and an itinerary sequenced around your own family's history rather than a fixed group calendar.",

  region: "Multi-Region Journey",
  country: "Ghana",
  locations: ["Accra", "Cape Coast", "Elmina", "Kakum National Park", "Kumasi"],

  category: ["HERITAGE", "DIASPORA", "LUXURY", "FAMILY"],

  duration: { days: 10, nights: 9 },

  heroImage: { src: "/images/stock/villa-pool-reflection.jpg", alt: "A white villa with arched doorways reflected in a still pool" },
  gallery: [
    { src: "/images/stock/villa-pool-reflection.jpg", alt: "A white villa with arched doorways reflected in a still pool" },
    { src: "/images/stock/grand-resort-aerial.jpg", alt: "Aerial view of a grand resort property in Ghana" },
    { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic Ocean" },
    { src: "/images/stock/manhyia.jpeg", alt: "The Akwaaba entrance sign to the Manhyia Palace Museum in Kumasi" },
  ],

  highlights: [
    "A private villa or 5-star suite, fully private for your family or group",
    "Custom dates within the December 20 – January 10 window",
    "The same ritual anchors as every Real Return™ journey — castle, naming ceremony, canopy, kente — sequenced around your family's story",
    "Private AfroFuture Festival access, without joining a fixed group schedule",
    "Ongoing legacy-building support after you return home",
  ],

  whyThisExperience:
    "The full, private Real Return™ experience. Built for families who know December is when they want to travel, but want the itinerary, pace, and privacy shaped entirely around their own story rather than a shared departure date.",

  itinerary: [
    {
      day: 1,
      title: "Private Arrival",
      location: "Accra",
      description: "A fully private arrival and welcome, set on your own timeline rather than a fixed cohort schedule.",
    },
    {
      day: 3,
      title: "Cape Coast, Elmina & Naming Ceremony",
      location: "Central Region",
      description: "Cape Coast Castle and a traditional naming ceremony, sequenced around your family's own story.",
    },
    {
      day: 6,
      title: "Kakum Canopy Walk & Kumasi Weaving Houses",
      location: "Kakum National Park & Kumasi",
      description: "The rainforest canopy walk and a private day with Kumasi's master weavers.",
    },
    {
      day: 8,
      title: "Private AfroFuture Access",
      location: "Accra",
      description: "Private access to the season's festival calendar, without joining a fixed group schedule.",
    },
    {
      day: 10,
      title: "Closing Circle & Departure",
      location: "Accra",
      description: "A closing circle built around your family, followed by a private departure.",
    },
  ],

  culturalContext:
    "December remains Ghana's most concentrated season of cultural return, but a fixed group schedule isn't right for every family. This experience holds the same heritage sites and festival calendar as every December Real Return™ journey, built entirely around your own family's pace and story instead.",

  included: [
    "Everything in The Signature December Homecoming",
    "A fully private, custom-built itinerary and dates",
    "Private villa or 5-star suite accommodation",
    "Priority access to Academy coursework for your full family",
    "Private AfroFuture Festival access",
    "Ongoing legacy-building support after you return home",
  ],
  excluded: ["International flights", "Ghana visa fees", "Yellow Fever vaccination certificate", "Travel insurance"],

  practicalInformation: {
    bestTime: "Custom dates, December 20 – January 10",
    difficulty: "Easy to moderate, fully adjustable to your family's pace",
    groupSize: "Fully private, your family or group only",
    recommendedFor: ["Families wanting a fully private December season", "Multi-generational groups", "Anyone who wants no fixed cohort schedule"],
  },

  startingPrice: 7500,
  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "REQUEST AVAILABILITY" },

  relatedExperiences: ["the-signature-december-homecoming", "the-real-return-detty-december", "remember-return-rebuild"],
};
