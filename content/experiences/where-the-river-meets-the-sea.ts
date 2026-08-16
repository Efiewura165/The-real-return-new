import type { ExperiencePackage } from "@/types/experience";

export const whereTheRiverMeetsTheSea: ExperiencePackage = {
  id: "where-the-river-meets-the-sea",
  slug: "where-the-river-meets-the-sea",

  title: "Where the River Meets the Sea",
  tagline: "Two waters, one horizon, and a stillness Accra doesn't have.",
  shortDescription: "Ada, where the Volta River meets the Atlantic Ocean in a rare, tranquil estuary landscape.",
  longDescription:
    "An hour east of Accra, the Volta River widens into a broad estuary before giving itself, finally, to the Atlantic. Ada sits at that meeting point: sandbars, fishing canoes, and a horizon split quietly between fresh water and salt. It's one of the most photographed, least crowded landscapes in Ghana.",

  region: "Greater Accra",
  country: "Ghana",
  locations: ["Ada"],

  category: ["NATURE", "BEACH", "ADVENTURE"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/ada-volta-estuary.jpg", alt: "The Volta River estuary meeting the Atlantic Ocean at Ada, Ghana" },
  gallery: [
    { src: "/images/stock/ada-volta-estuary.jpg", alt: "The Volta River estuary at Ada, Ghana" },
    { src: "/images/stock/ghana-beach-bodyboarding.jpg", alt: "A boy bodyboarding in the waves on a Ghanaian beach" },
  ],

  highlights: [
    "A boat ride out to the sandbar where the river meets the ocean",
    "Kayaking the calm estuary waters at sunrise",
    "Time with the Ada fishing communities who have worked these waters for generations",
    "A beachfront dinner as the two waters catch the sunset differently",
    "A slow, restorative pace after Accra's energy",
  ],

  whyThisExperience:
    "Ada is a landscape you won't quite believe until you're standing in it: fresh water on one side, salt on the other, and a silence that Accra never offers. It's an easy, grounding pairing with a Greater Accra chapter, and a reminder that Ghana's story is written in water as much as land.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Estuary Boat Ride",
      location: "Ada",
      description: "Travel to Ada, settle in, and take an afternoon boat ride out to where the Volta meets the Atlantic.",
    },
    {
      day: 2,
      title: "Sunrise Kayak & Departure",
      location: "Ada",
      description: "An early kayak paddle on the calm estuary waters, breakfast by the water, and return to Accra.",
    },
  ],

  culturalContext:
    "The Ada people have fished and farmed this estuary for centuries, and the Volta's mouth remains central to local life and livelihood, a working landscape as much as a beautiful one.",

  included: [
    "Accommodation for the full itinerary",
    "Guided estuary boat ride",
    "Kayak equipment and guide",
    "Transportation to and from Accra",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; November through March for the calmest water",
    difficulty: "Easy, with no swimming or paddling experience required",
    groupSize: "Private or small group (2–14 travelers)",
    recommendedFor: ["Couples", "Nature travelers", "Anyone pairing with a Greater Accra stay"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER ADA" },

  relatedExperiences: ["the-soul-of-ghana", "the-atlantic-escape"],
};
