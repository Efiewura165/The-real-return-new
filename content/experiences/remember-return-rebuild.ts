import type { ExperiencePackage } from "@/types/experience";

export const rememberReturnRebuild: ExperiencePackage = {
  id: "remember-return-rebuild",
  slug: "remember-return-rebuild",

  title: "Remember. Return. Rebuild.™",
  tagline: "The complete Real Return™ journey, coast to savannah.",
  shortDescription:
    "The definitive Real Return™ journey — Accra, Eastern Region, Central Region, Ashanti Kingdom, and the savannah north, woven into one extended homecoming.",
  longDescription:
    "This is the full arc of The Real Return™ — every stage of the framework, lived in sequence. Remember, at Cape Coast and Elmina. Return, in the living kingdom of Kumasi and the craft villages around it. Rebuild, in the savannah north where shea cooperatives and ancient mosques carry tradition into the future. Fourteen days, five regions, one continuous story.",

  region: "Multi-Region Journey",
  country: "Ghana",
  locations: ["Accra", "Aburi", "Cape Coast", "Elmina", "Kakum National Park", "Kumasi", "Bonwire", "Ntonso", "Larabanga", "Mole National Park"],

  category: ["HERITAGE", "DIASPORA", "CULTURE", "LUXURY"],

  duration: { days: 14, nights: 13 },

  heroImage: { src: "/images/stock/kwame-nkrumah-memorial.jpg", alt: "The Kwame Nkrumah Memorial Park in Accra, Ghana" },
  gallery: [
    { src: "/images/stock/accra-skyline.jpg", alt: "The modern skyline of Accra, Ghana" },
    { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic Ocean" },
    { src: "/images/stock/manhyia.jpeg", alt: "The Akwaaba entrance sign to the Manhyia Palace Museum in Kumasi" },
    { src: "/images/stock/mole-elephant.jpg", alt: "An elephant walking through the savanna at Mole National Park" },
  ],

  highlights: [
    "Every stage of the Remember. Return. Rebuild.™ framework, in sequence",
    "Cape Coast and Elmina Castles, held with dignity and unhurried reflection",
    "Manhyia Palace Museum and the full living craft tradition of the Ashanti Kingdom",
    "A savanna safari and the ancient Larabanga Mosque in the north",
    "A dedicated steward who travels the entire arc with you",
  ],

  whyThisExperience:
    "Some journeys need to be lived whole, not sampled. This is the complete Real Return™ — every chapter of memory, return, and rebuilding, connected into a single, continuous homecoming rather than a series of disconnected stops.",

  itinerary: [
    {
      day: 1,
      title: "Remember: Accra & Aburi",
      location: "Greater Accra & Eastern Region",
      description: "Arrival, orientation, and the opening chapters of The Soul of Ghana and Above the City — grounding the journey before its deeper history.",
    },
    {
      day: 4,
      title: "Remember: Cape Coast & Elmina",
      location: "Central Region",
      description: "Return to the Beginning and Where History Meets the Atlantic — held with a steward trained to make space for grief, anger, and pride alike.",
    },
    {
      day: 7,
      title: "Return: The Ashanti Kingdom",
      location: "Ashanti Region",
      description: "Enter the Kingdom, Threads of a Kingdom, and The Symbols That Speak — Manhyia Palace, Kente weaving, and Adinkra, the living heart of the journey.",
    },
    {
      day: 11,
      title: "Rebuild: The Savannah North",
      location: "Savannah & Northern Region",
      description: "The Ancient North and From Savannah to Shea — a walking safari, the centuries-old Larabanga Mosque, and the women's cooperatives building independence from the land.",
    },
    {
      day: 14,
      title: "Closing Reflection & Departure",
      location: "Accra",
      description: "Return to Accra for a closing reflection circle naming what each traveler carries forward, before departure.",
    },
  ],

  culturalContext:
    "The Remember. Return. Rebuild.™ framework is the master structure behind every Real Return™ journey — memory honored, connection rebuilt, and legacy carried forward. This flagship experience is the framework lived in full, rather than in a single chapter.",

  included: [
    "Accommodation for the full 14-day itinerary",
    "All entries, guided tours, and hands-on sessions across every region visited",
    "Domestic transportation between all regions",
    "A dedicated steward for the entire journey",
    "Welcome and closing reflection circles",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "November through March",
    difficulty: "Easy to moderate — a mix of walking tours, a canopy walk, and a savanna safari",
    groupSize: "Private or small group (4–12 travelers)",
    recommendedFor: ["Diaspora travelers ready for the complete journey", "Families", "Anyone with two weeks to give this fully"],
  },

  currency: "USD",
  featured: true,

  registration: { enabled: true, cta: "BEGIN YOUR RETURN" },

  relatedExperiences: ["the-kingdom-and-the-gold-coast", "ghana-wild-and-beautiful", "the-ghanaian-craftsman"],
};
