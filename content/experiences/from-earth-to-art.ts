import type { ExperiencePackage } from "@/types/experience";

export const fromEarthToArt: ExperiencePackage = {
  id: "from-earth-to-art",
  slug: "from-earth-to-art",

  title: "From Earth to Art",
  tagline: "Glass, fire, and color, turned into beads that carry a name.",
  shortDescription: "A hands-on glass bead-making experience with Krobo artisans in the Eastern Region, from crushed glass to finished bead.",
  longDescription:
    "In Odumase-Krobo, generations of artisans have turned crushed recycled glass into some of West Africa's most recognized beads: ground by hand, molded, and fired in kilns still built the traditional way. This experience puts you inside that process, from raw glass to a finished bead you help make yourself.",

  region: "Eastern Region",
  country: "Ghana",
  locations: ["Odumase-Krobo"],

  category: ["CRAFT", "HERITAGE", "CULTURE"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/krobo-bead-making.jpg", alt: "Handmade Krobo glass beads laid out on stone in Ghana" },
  gallery: [{ src: "/images/stock/krobo-bead-making.jpg", alt: "Handmade Krobo glass beads laid out on stone" }],

  highlights: [
    "A visit to a working Krobo glass bead workshop",
    "Hands-on time crushing, molding, and firing glass beads",
    "The meaning of bead color and pattern in Krobo tradition",
    "Conversations with artisans carrying the craft into a new generation",
    "A finished bead of your own making to take home",
  ],

  whyThisExperience:
    "Krobo beads are among the most quietly influential exports of Ghanaian craft, worn across the diaspora, often without knowing their origin. Making one yourself, from crushed glass to fired bead, closes that distance.",

  itinerary: [
    {
      day: 1,
      title: "Krobo Bead Workshop",
      location: "Odumase-Krobo",
      description: "A full day at a working bead workshop: glass preparation, molding, kiln firing, and a hands-on session making your own bead.",
    },
  ],

  culturalContext:
    "Krobo beadmaking dates back generations, historically using recycled glass ground by hand and fired in wood-burning kilns. Beads carry social meaning in Krobo culture: worn at Dipo (coming-of-age) ceremonies and passed down as heirlooms.",

  included: [
    "Guided workshop visit",
    "Hands-on bead-making session and materials",
    "In-region transportation",
    "A dedicated steward for the day",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Additional bead purchases"],

  practicalInformation: {
    bestTime: "Year-round",
    difficulty: "Easy, with seated craft work and some heat exposure near kilns",
    groupSize: "Private or small group (2–10 travelers)",
    recommendedFor: ["Craft enthusiasts", "Anyone pairing with From Bean to Chocolate", "Families"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER THE CRAFT" },

  relatedExperiences: ["threads-of-a-kingdom", "the-symbols-that-speak", "from-bean-to-chocolate"],
};
