import type { ExperiencePackage } from "@/types/experience";

export const theGhanaSafari: ExperiencePackage = {
  id: "the-ghana-safari",
  slug: "the-ghana-safari",

  title: "The Ghana Safari",
  tagline: "Meet the elephants that made this land a sanctuary.",
  shortDescription: "Wildlife drives and walking safaris through Mole National Park, Ghana's largest wildlife refuge.",
  longDescription:
    "Mole National Park protects the largest population of savanna elephants in Ghana, alongside antelope, warthog, baboon, and over 300 bird species. This is West Africa's safari — quieter and less crowded than East Africa's famous parks, but no less alive, with elephants that sometimes wander right through the motel grounds.",

  region: "Savannah Region",
  country: "Ghana",
  locations: ["Mole National Park"],

  category: ["WILDLIFE", "ADVENTURE", "NATURE", "FAMILY"],

  duration: { days: 3, nights: 2 },

  heroImage: { src: "/images/stock/mole-elephant.jpg", alt: "An African elephant walking through the dry savanna woodland of Mole National Park, Ghana" },
  gallery: [
    { src: "/images/stock/mole-elephant.jpg", alt: "An elephant walking through the savanna at Mole National Park" },
    { src: "/images/stock/kakum-canopy-walk.jpg", alt: "Visitors crossing a rope canopy walkway above a Ghanaian rainforest" },
  ],

  highlights: [
    "Guided walking safaris — one of the few parks in Africa where this is possible",
    "A vehicle game drive across Mole's savanna woodland",
    "African elephants, often visible from the park lodge itself",
    "Antelope, baboon, warthog, and over 300 recorded bird species",
    "Sunset over the escarpment from the park's viewing terrace",
  ],

  whyThisExperience:
    "Mole is proof that Ghana's story includes wilderness as much as heritage and craft. A walking safari here — on foot, at eye level with elephants — is a different kind of encounter than a vehicle ever offers, and a reminder of the land your ancestors' land once was, and still is.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Sunset Safari",
      location: "Mole National Park",
      description: "Travel to Mole, check into the park lodge, and take an evening game drive as wildlife gathers at the waterholes.",
    },
    {
      day: 2,
      title: "Walking Safari",
      location: "Mole National Park",
      description: "An early-morning guided walking safari, when temperatures are coolest and wildlife most active.",
    },
    {
      day: 3,
      title: "Final Game Drive & Departure",
      location: "Mole National Park",
      description: "A last game drive at dawn, breakfast overlooking the savanna, and departure.",
    },
  ],

  culturalContext:
    "Mole National Park was established in 1958 and remains Ghana's largest protected wildlife area. It sits within savanna homelands long managed by local communities, whose traditional knowledge of the land continues to inform the park's conservation work today.",

  included: [
    "Lodge accommodation for the full itinerary",
    "Guided walking safaris and vehicle game drives",
    "Park entry fees",
    "In-region transportation",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "December through April (dry season) for the best wildlife viewing",
    difficulty: "Easy to moderate — walking safaris cover a few kilometers at a gentle pace",
    groupSize: "Private or small group (2–12 travelers)",
    recommendedFor: ["Families", "Wildlife and adventure travelers", "Photography enthusiasts"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "BEGIN YOUR GHANA SAFARI" },

  relatedExperiences: ["meet-the-forest-guardians", "from-savannah-to-shea"],
};
