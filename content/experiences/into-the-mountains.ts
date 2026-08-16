import type { ExperiencePackage } from "@/types/experience";

export const intoTheMountains: ExperiencePackage = {
  id: "into-the-mountains",
  slug: "into-the-mountains",

  title: "Into the Mountains",
  tagline: "Let the tallest falls in West Africa remind you how small you are, and how much that matters.",
  shortDescription: "A forest hike to Wli Waterfalls, the highest waterfall in West Africa, in Ghana's lush Volta Region.",
  longDescription:
    "In the Agumatsa Wildlife Sanctuary, a two-tiered waterfall drops nearly 80 meters through a canopy alive with fruit bats and birdsong. Reaching it means a scenic hike through tropical forest: easy to the lower falls, more demanding to the upper. Either way, the reward is the same: mist on your face, and a reminder of how much of Ghana is still wild.",

  region: "Volta Region",
  country: "Ghana",
  locations: ["Wli", "Hohoe"],

  category: ["NATURE", "ADVENTURE", "WELLNESS"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/wli-waterfalls.jpg", alt: "Wli Waterfalls cascading through the Agumatsa Wildlife Sanctuary, Volta Region, Ghana" },
  gallery: [
    { src: "/images/stock/wli-waterfalls.jpg", alt: "Wli Waterfalls cascading through lush forest" },
    { src: "/images/stock/kakum-canopy-walk.jpg", alt: "Visitors crossing a rope canopy walkway above a Ghanaian rainforest" },
  ],

  highlights: [
    "A guided forest hike to the lower falls of Wli, the tallest in West Africa",
    "The option to continue to the more demanding upper falls",
    "Thousands of fruit bats roosting in the surrounding cliffs",
    "A cool, misty swim at the base of the falls",
    "Time in the Agumatsa Wildlife Sanctuary's tropical forest",
  ],

  whyThisExperience:
    "After the weight of history held in Cape Coast or the living pageantry of Kumasi, Wli offers something different: pure, uncomplicated wonder. Standing beneath water falling from 80 meters, surrounded by forest and the wingbeats of thousands of bats, is its own kind of return: to scale, to nature, to breath.",

  itinerary: [
    {
      day: 1,
      title: "Into the Forest",
      location: "Hohoe",
      description: "Travel into the Volta Region, settle into Hohoe, and take an orientation walk at the edge of the Agumatsa Wildlife Sanctuary.",
    },
    {
      day: 2,
      title: "Wli Waterfalls Hike",
      location: "Wli",
      description: "A guided hike to the lower falls (with an optional extension to the upper falls for more experienced hikers), time to swim at the base, and departure.",
    },
  ],

  culturalContext:
    "The Wli Waterfalls sit within the Agumatsa Wildlife Sanctuary, named for the local Siamese word meaning \"let us come together.\" The site is sacred to the surrounding Ewe communities, who have long regarded the falls and their bat colonies as protected.",

  included: [
    "Accommodation for the full itinerary",
    "Guided waterfall hike with a local ranger",
    "Sanctuary entry fees",
    "Transportation within the region",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases", "Swimwear and hiking gear"],

  practicalInformation: {
    bestTime: "November through March, outside the heaviest rains",
    difficulty: "Moderate: the lower falls hike is easy, while the upper falls hike is more strenuous",
    groupSize: "Private or small group (2–12 travelers)",
    recommendedFor: ["Adventure travelers", "Nature travelers", "Wellness travelers"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "CLIMB INTO THE MOUNTAINS" },

  relatedExperiences: ["above-the-city", "meet-the-forest-guardians"],
};
