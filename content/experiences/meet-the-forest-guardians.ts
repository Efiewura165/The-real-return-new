import type { ExperiencePackage } from "@/types/experience";

export const meetTheForestGuardians: ExperiencePackage = {
  id: "meet-the-forest-guardians",
  slug: "meet-the-forest-guardians",

  title: "Meet the Forest Guardians",
  tagline: "Where a village and its monkeys have kept faith for centuries.",
  shortDescription: "A rare, respectful visit to the Boabeng-Fiema Monkey Sanctuary, where mona and colobus monkeys are sacred.",
  longDescription:
    "In the twin villages of Boabeng and Fiema, mona and black-and-white colobus monkeys move freely through the streets, protected by a taboo older than living memory. This is not a zoo. It's a covenant between a community and the forest around it, and one of the most quietly moving conservation stories in West Africa.",

  region: "Bono East Region",
  country: "Ghana",
  locations: ["Boabeng-Fiema"],

  category: ["NATURE", "WILDLIFE", "FAMILY"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/boabeng-fiema-monkey-sanctuary.jpg", alt: "A mona monkey resting on a tree branch at the Boabeng-Fiema Monkey Sanctuary, Ghana" },
  gallery: [
    { src: "/images/stock/boabeng-fiema-monkey-sanctuary.jpg", alt: "A mona monkey on a tree branch at Boabeng-Fiema" },
    { src: "/images/stock/kakum-canopy-walk.jpg", alt: "Visitors crossing a rope canopy walkway above a Ghanaian rainforest" },
  ],

  highlights: [
    "A guided forest walk among free-roaming mona and colobus monkeys",
    "The story of the sanctuary's sacred taboo and the community that protects it",
    "The village's traditional monkey cemetery",
    "Time with local guides trained in the sanctuary's conservation history",
    "A quiet, unhurried pace rare in more commercial wildlife parks",
  ],

  whyThisExperience:
    "This sanctuary exists because a community decided, generations ago, that these monkeys were sacred, and kept that promise ever since. It's a living example of African conservation practice that predates Western environmentalism by centuries, and a gentle counterpoint to the more intense history held elsewhere in Ghana.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Village Welcome",
      location: "Boabeng-Fiema",
      description: "Travel to the twin villages, meet local guides, and take an introductory walk through the forest as the monkeys settle for the evening.",
    },
    {
      day: 2,
      title: "Forest Walk & Departure",
      location: "Boabeng-Fiema",
      description: "An early-morning forest walk when the monkeys are most active, a visit to the village's monkey cemetery, and departure.",
    },
  ],

  culturalContext:
    "The Boabeng-Fiema Monkey Sanctuary is protected under a local taboo believed to date back over 300 years, after monkeys reportedly led a fleeing priest to the site. Harming a monkey is considered a serious taboo, and deceased monkeys are given a burial in the village's dedicated cemetery.",

  included: [
    "Accommodation for the full itinerary",
    "Guided sanctuary forest walks",
    "Local conservation-guide fees",
    "Transportation within the region",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Early morning and late afternoon, when monkeys are most active",
    difficulty: "Easy, with flat forest paths and no strenuous activity",
    groupSize: "Private or small group (2–10 travelers)",
    recommendedFor: ["Families", "Wildlife and nature travelers", "Photography enthusiasts"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "MEET THE GUARDIANS" },

  relatedExperiences: ["the-ghana-safari", "from-savannah-to-shea"],
};
