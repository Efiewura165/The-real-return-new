import type { ExperiencePackage } from "@/types/experience";

export const theGhanaianCraftsman: ExperiencePackage = {
  id: "the-ghanaian-craftsman",
  slug: "the-ghanaian-craftsman",

  title: "The Ghanaian Craftsman",
  tagline: "Cocoa, beads, cloth, and symbols: Ghana made entirely by hand.",
  shortDescription: "A hands-on tour through Ghana's living craft traditions: cocoa, glass beads, Kente, Adinkra, and the food that ties it together.",
  longDescription:
    "This journey is built for makers and those who love what's made by hand. From cocoa farms in the Eastern Region to bead workshops in Odumase-Krobo, and on to the weaving and stamping villages of the Ashanti Kingdom, every day puts you inside a working craft tradition, hands in the process rather than just watching from the side.",

  region: "Multi-Region Journey",
  country: "Ghana",
  locations: ["Accra", "Eastern Region cocoa belt", "Odumase-Krobo", "Bonwire", "Ntonso"],

  category: ["CRAFT", "FOOD", "CULTURE"],

  duration: { days: 6, nights: 5 },

  heroImage: { src: "/images/stock/kente-weaving-loom.jpg", alt: "A craftsman weaving Kente cloth on a traditional loom in Bonwire, Ghana" },
  gallery: [
    { src: "/images/stock/cocoa-harvest-processing.jpg", alt: "Cocoa beans being sorted and processed by hand" },
    { src: "/images/stock/krobo-bead-making.jpg", alt: "Handmade Krobo glass beads laid out on stone" },
    { src: "/images/stock/kente-weaving-loom.jpg", alt: "A craftsman weaving Kente cloth on a traditional loom" },
    { src: "/images/stock/adinkra-stamping.jpg", alt: "An artisan hand-stamping Adinkra symbols onto cloth" },
  ],

  highlights: [
    "A working cocoa farm visit, from pod to hand-made chocolate",
    "Hands-on Krobo glass bead making, from crushed glass to finished bead",
    "Kente loom weaving in Bonwire, thread by thread",
    "Adinkra symbol stamping in Ntonso, using traditional bark ink",
    "Ashanti cuisine and market culture woven through every stop",
  ],

  whyThisExperience:
    "This is Ghana understood through what its hands have always made. Five distinct crafts, five sets of artisans, and one continuous thread connecting cocoa, glass, cloth, and symbol into a single story of skill passed down and still practiced.",

  itinerary: [
    {
      day: 1,
      title: "Arrival in Accra",
      location: "Accra",
      description: "Arrival and orientation before heading into the Eastern Region.",
    },
    {
      day: 2,
      title: "From Bean to Chocolate",
      location: "Eastern Region cocoa belt",
      description: "A working cocoa farm visit, harvest participation, and hand-made chocolate session.",
    },
    {
      day: 3,
      title: "From Earth to Art",
      location: "Odumase-Krobo",
      description: "Hands-on Krobo glass bead making, from crushed glass to finished bead.",
    },
    {
      day: 4,
      title: "Threads of a Kingdom",
      location: "Bonwire",
      description: "A full day at the loom with master Kente weavers.",
    },
    {
      day: 5,
      title: "The Symbols That Speak",
      location: "Ntonso",
      description: "Adinkra stamping and bark-ink preparation with a local artisan.",
    },
    {
      day: 6,
      title: "Departure",
      location: "Kumasi",
      description: "A closing market visit and departure.",
    },
  ],

  culturalContext:
    "Each craft on this route (cocoa, glass beads, Kente, and Adinkra) represents a distinct regional tradition passed down through families and cooperatives, together forming a fuller picture of Ghana's living, working artisan economy.",

  included: [
    "Accommodation for the full 6-day itinerary",
    "All farm visits, workshop sessions, and hands-on craft materials",
    "Domestic transportation along the full circuit",
    "A dedicated steward for the entire journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases beyond included craft materials"],

  practicalInformation: {
    bestTime: "October through March, the primary cocoa harvest season",
    difficulty: "Easy, hands-on craft work with no strenuous activity",
    groupSize: "Private or small group (2–12 travelers)",
    recommendedFor: ["Craft and food enthusiasts", "Diaspora travelers", "Families"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "BEGIN THE CRAFT JOURNEY" },

  relatedExperiences: ["remember-return-rebuild", "the-kingdom-and-the-gold-coast"],
};
