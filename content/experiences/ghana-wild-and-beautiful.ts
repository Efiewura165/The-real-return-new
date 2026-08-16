import type { ExperiencePackage } from "@/types/experience";

export const ghanaWildAndBeautiful: ExperiencePackage = {
  id: "ghana-wild-and-beautiful",
  slug: "ghana-wild-and-beautiful",

  title: "Ghana: Wild & Beautiful",
  tagline: "Waterfalls, kingdoms, and elephants: Ghana's wildest side, connected.",
  shortDescription: "Volta's mountains, the Ashanti Kingdom's craft villages, and a Mole National Park safari, in one nature-forward circuit.",
  longDescription:
    "This is Ghana for travelers who want the land as much as the history: the tallest waterfall in West Africa, the living kingdom of the Ashanti, and a savanna safari among the country's largest elephant population. A journey built for wonder as much as reflection.",

  region: "Multi-Region Journey",
  country: "Ghana",
  locations: ["Accra", "Wli", "Kumasi", "Bobiri Forest Reserve", "Mole National Park"],

  category: ["NATURE", "WILDLIFE", "ADVENTURE"],

  duration: { days: 9, nights: 8 },

  heroImage: { src: "/images/stock/mole-elephant.jpg", alt: "An elephant walking through the dry savanna woodland of Mole National Park, Ghana" },
  gallery: [
    { src: "/images/stock/wli-waterfalls.jpg", alt: "Wli Waterfalls cascading through lush forest" },
    { src: "/images/stock/kente-weaving-loom.jpg", alt: "A craftsman weaving Kente cloth on a traditional loom" },
    { src: "/images/stock/ghana-forest-butterfly.jpg", alt: "A butterfly resting on a green leaf in a Ghanaian forest reserve" },
    { src: "/images/stock/mole-elephant.jpg", alt: "An elephant walking through the savanna at Mole National Park" },
  ],

  highlights: [
    "Wli Waterfalls, the tallest in West Africa, in the Volta Region",
    "Manhyia Palace Museum and Kente weaving in the Ashanti Kingdom",
    "A butterfly-filled forest walk at Bobiri Forest Reserve",
    "Guided walking safaris and game drives at Mole National Park",
    "A journey built around wonder, wildlife, and open space",
  ],

  whyThisExperience:
    "Ghana's story isn't only told in castles and cities. It's written across waterfalls, forests, and savanna too. This route was built for travelers who want to feel the scale of the land itself, alongside the culture it has shaped.",

  itinerary: [
    {
      day: 1,
      title: "Arrival in Accra",
      location: "Accra",
      description: "Arrival and orientation before heading into the Volta hills.",
    },
    {
      day: 2,
      title: "Into the Mountains",
      location: "Wli",
      description: "A forest hike to Wli Waterfalls, the tallest in West Africa.",
    },
    {
      day: 4,
      title: "Enter the Kingdom & Wings of Ghana",
      location: "Kumasi & Bobiri Forest Reserve",
      description: "Manhyia Palace Museum, Kente weaving, and a gentle butterfly-forest walk at Bobiri.",
    },
    {
      day: 6,
      title: "The Ghana Safari",
      location: "Mole National Park",
      description: "Walking safaris and game drives among Mole's elephants, antelope, and birdlife.",
    },
    {
      day: 9,
      title: "Departure",
      location: "Accra",
      description: "Return to Accra for departure.",
    },
  ],

  culturalContext:
    "This route connects three of Ghana's most ecologically significant regions: Volta's forested mountains, the Ashanti Kingdom's craft traditions, and the Savannah Region's protected wildlife, each shaped by centuries of coexistence between community and land.",

  included: [
    "Accommodation for the full 9-day itinerary",
    "All waterfall hikes, palace entries, craft sessions, and safari activities",
    "Domestic transportation along the full circuit",
    "A dedicated steward for the entire journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "December through March, outside the heaviest rains",
    difficulty: "Moderate, including waterfall hiking and walking safaris",
    groupSize: "Private or small group (4–12 travelers)",
    recommendedFor: ["Adventure travelers", "Families", "Wildlife and nature travelers"],
  },

  currency: "USD",
  featured: true,

  registration: { enabled: true, cta: "BEGIN YOUR GHANA SAFARI" },

  relatedExperiences: ["remember-return-rebuild", "the-kingdom-and-the-gold-coast"],
};
