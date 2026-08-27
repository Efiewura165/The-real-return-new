import type { ExperiencePackage } from "@/types/experience";

export const theSignatureDecemberHomecoming: ExperiencePackage = {
  id: "the-signature-december-homecoming",
  slug: "the-signature-december-homecoming",

  title: "The Signature December Homecoming",
  tagline: "More room, more craft, more return.",
  shortDescription:
    "The Detty December season with private accommodation, a coastal resort night, and time in Kumasi's weaving houses added between the festival's anchor moments.",
  longDescription:
    "Built for travelers who want the same December season without racing through it. This nine-day edition adds a private room at every stop, a night at a coastal resort between Cape Coast and Kumasi, and a full day with Kumasi's master weavers — plus a community give-back visit built into the itinerary, not offered as an add-on.",

  region: "Multi-Region Journey",
  country: "Ghana",
  locations: ["Accra", "Cape Coast", "Elmina", "Kumasi"],

  category: ["HERITAGE", "DIASPORA", "CULTURE", "LUXURY"],

  duration: { days: 9, nights: 8 },

  heroImage: { src: "/images/stock/resort-pool-aerial.jpg", alt: "Aerial view of a resort pool on the Ghanaian coast" },
  gallery: [
    { src: "/images/stock/resort-pool-aerial.jpg", alt: "Aerial view of a resort pool on the Ghanaian coast" },
    { src: "/images/stock/manhyia.jpeg", alt: "The Akwaaba entrance sign to the Manhyia Palace Museum in Kumasi" },
    { src: "/images/stock/kente-weaving-loom.jpg", alt: "A craftsman weaves colorful Kente cloth on a traditional loom in Accra, Ghana" },
    { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic Ocean" },
  ],

  highlights: [
    "Private room accommodation at every stop, including a night at a coastal resort",
    "Extended time at Cape Coast Castle and a traditional naming ceremony",
    "A full day with Kumasi's master weavers — a length of kente chosen, not assigned",
    "A community give-back visit built into the itinerary",
    "AfroFuture Festival access and a New Year's Eve celebration in Accra",
  ],

  whyThisExperience:
    "The base December season moves fast because it has to fit a lot into one week. This edition gives the same season room to breathe: two more days, a private room instead of shared, and a full chapter in Kumasi the shorter itinerary has to skip.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Welcome Dinner",
      location: "Accra",
      description: "Airport pickup, private hotel check-in, and a welcome dinner grounded in intention.",
    },
    {
      day: 4,
      title: "Cape Coast Castle & Coastal Resort",
      location: "Cape Coast",
      description: "Extended time at Cape Coast Castle and a traditional naming ceremony, followed by a night at a coastal resort.",
    },
    {
      day: 6,
      title: "Kumasi Weaving Houses",
      location: "Kumasi",
      description: "A full day with master weavers in the workshops where kente is still made by hand.",
    },
    {
      day: 7,
      title: "Community Give-Back Visit",
      location: "Kumasi",
      description: "Time with a local school or community initiative your steward has a standing relationship with.",
    },
    {
      day: 9,
      title: "New Year's Eve & Farewell Dinner",
      location: "Accra",
      description: "A citywide New Year's Eve celebration, followed by a farewell dinner and closing circle before departure.",
    },
  ],

  culturalContext:
    "Kumasi remains the living seat of the Ashanti Kingdom, where kente weaving, gold-casting, and adinkra printing continue as working trades, not museum pieces. Pairing it with Ghana's December season gives travelers a second, quieter register of return alongside the festival's energy.",

  included: [
    "Everything in The Real Return: Detty December",
    "Private room accommodation for the full 8-night itinerary",
    "One night at a coastal resort between Cape Coast and Kumasi",
    "A full day with Kumasi's master weavers",
    "A community give-back visit built into the itinerary",
    "One-on-one legacy mapping session with your steward",
  ],
  excluded: ["International flights", "Ghana visa fees", "Yellow Fever vaccination certificate", "Travel insurance", "Gratuities and personal expenses"],

  practicalInformation: {
    bestTime: "December 26 – January 4, timed to AfroFuture and the citywide New Year's Eve season",
    difficulty: "Easy to moderate, a mix of walking tours, nightlife, and craft workshops",
    groupSize: "Small group or private family dates (4–12 travelers)",
    recommendedFor: ["Families", "Travelers who want private accommodation", "Anyone adding Kumasi to their December season"],
  },

  startingPrice: 4650,
  currency: "USD",
  featured: true,

  registration: { enabled: true, cta: "BOOK THE SIGNATURE HOMECOMING" },

  relatedExperiences: ["the-real-return-detty-december", "enter-the-kingdom", "threads-of-a-kingdom", "remember-return-rebuild"],
};
