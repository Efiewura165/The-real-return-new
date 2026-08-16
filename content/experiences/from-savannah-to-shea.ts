import type { ExperiencePackage } from "@/types/experience";

export const fromSavannahToShea: ExperiencePackage = {
  id: "from-savannah-to-shea",
  slug: "from-savannah-to-shea",

  title: "From Savannah to Shea",
  tagline: "Trace the wealth that grew from the trees your grandmothers knew.",
  shortDescription: "Meet the women's cooperatives of Northern Ghana turning shea nuts into a global industry, by hand.",
  longDescription:
    "Across Ghana's savannah north, shea trees have sustained families for generations: their nuts hand-harvested and processed, mostly by women, into the butter that moisturizes skin and hair around the world. This experience puts you inside that process: the harvest, the roasting, the grinding, and the cooperatives turning an ancestral craft into economic independence.",

  region: "Northern Region",
  country: "Ghana",
  locations: ["Tamale area"],

  category: ["CRAFT", "AGRICULTURE", "CULTURE", "DIASPORA"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/shea butter1.jpg", alt: "Bowls of hand-processed shea butter and traditional yellow shea oil with a carved wooden spoon" },
  gallery: [
    { src: "/images/stock/shea butter1.jpg", alt: "Bowls of hand-processed shea butter and traditional yellow shea oil" },
    { src: "/images/stock/shea butter 2.jpg", alt: "A wooden bowl of raw shea butter surrounded by shea nuts" },
    { src: "/images/stock/cocoa-harvest-processing.jpg", alt: "Cocoa beans being sorted and processed by hand in Ghana" },
  ],

  highlights: [
    "A visit to a women-led shea cooperative in the savannah north",
    "The full process: harvest, roasting, grinding, and hand-churning",
    "Conversations with the women whose cooperative built their independence",
    "A hands-on shea butter making session",
    "Context on shea's journey from village craft to global export",
  ],

  whyThisExperience:
    "Shea is one of the clearest throughlines between ancestral African craft and the diaspora's daily life, seen in the lotions, soaps, and hair products found in homes across America, Canada, the UK, and beyond. To sit with the women who still make it by hand, exactly as it has been made for generations, is to see that thread made visible.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Cooperative Welcome",
      location: "Tamale area",
      description: "Travel north, meet the leaders of a local shea cooperative, and observe the harvest and roasting process.",
    },
    {
      day: 2,
      title: "Hands-On Shea Making",
      location: "Tamale area",
      description: "A guided, hands-on session grinding and hand-churning shea butter alongside the cooperative's women, followed by departure.",
    },
  ],

  culturalContext:
    "Shea butter production in northern Ghana is overwhelmingly led by women, often organized into cooperatives that provide steady income, savings programs, and collective bargaining power, a rare and significant economic engine rooted entirely in traditional knowledge passed mother to daughter.",

  included: [
    "Accommodation for the full itinerary",
    "Guided cooperative visit and hands-on shea session",
    "Community contribution fees",
    "In-region transportation",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "November through March, during the primary shea harvest season",
    difficulty: "Easy, with hands-on craft work and no strenuous activity",
    groupSize: "Private or small group (2–10 travelers)",
    recommendedFor: ["Diaspora travelers", "Craft and agriculture enthusiasts", "Anyone pairing with a Savannah Region safari"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER THE SHEA STORY" },

  relatedExperiences: ["the-ghana-safari", "meet-the-forest-guardians"],
};
