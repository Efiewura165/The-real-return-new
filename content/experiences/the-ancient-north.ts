import type { ExperiencePackage } from "@/types/experience";

export const theAncientNorth: ExperiencePackage = {
  id: "the-ancient-north",
  slug: "the-ancient-north",

  title: "The Ancient North",
  tagline: "Mud, faith, and eight centuries, still standing.",
  shortDescription: "Larabanga Mosque, one of the oldest mud-and-timber mosques in West Africa, and the village that has kept it standing.",
  longDescription:
    "Larabanga Mosque rises from the savannah in the Sudano-Sahelian style: sun-dried mud walls, timber struts, and twin minarets that have stood, by local tradition, since the 13th century. It is one of the oldest surviving mosques in West Africa, still an active place of worship, and a striking contrast to the coastal castles further south.",

  region: "Savannah Region",
  country: "Ghana",
  locations: ["Larabanga"],

  category: ["HERITAGE", "CULTURE", "ROYAL HERITAGE"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/larabanga-mosque.jpg", alt: "The mud-and-timber Larabanga Mosque in the Savannah Region of Ghana" },
  gallery: [{ src: "/images/stock/larabanga-mosque.jpg", alt: "The mud-and-timber Larabanga Mosque, Savannah Region, Ghana" }],

  highlights: [
    "A guided visit to Larabanga Mosque and its centuries-old Sudano-Sahelian architecture",
    "The oral history of the mosque's founding, passed down through generations",
    "Time in Larabanga village, still built largely from the same mud construction",
    "Easy pairing with a Mole National Park safari",
    "A striking architectural contrast to Ghana's coastal heritage sites",
  ],

  whyThisExperience:
    "Ghana's story isn't only coastal. Larabanga is proof of a northern history just as old and just as intact: an architectural tradition, and a faith, that has survived largely unchanged for centuries.",

  itinerary: [
    {
      day: 1,
      title: "Larabanga Mosque & Village",
      location: "Larabanga",
      description: "A guided visit to the mosque and surrounding village, with time to learn its oral history and architecture up close.",
    },
  ],

  culturalContext:
    "Larabanga Mosque is built in the Sudano-Sahelian architectural style found across the Sahel, using sun-dried mud reinforced with timber struts. Local tradition dates its founding to 1421, making it among the oldest mosques in the region; it remains an active place of worship today.",

  included: ["Guided mosque and village visit", "In-region transportation from Mole", "A dedicated steward for the day"],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "December through April (dry season)",
    difficulty: "Easy, with short guided walking",
    groupSize: "Private or small group (2–14 travelers)",
    recommendedFor: ["Heritage travelers", "Anyone pairing with The Ghana Safari"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER THE ANCIENT NORTH" },

  relatedExperiences: ["the-ghana-safari", "from-savannah-to-shea"],
};
