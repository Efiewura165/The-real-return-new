import type { ExperiencePackage } from "@/types/experience";

export const wingsOfGhana: ExperiencePackage = {
  id: "wings-of-ghana",
  slug: "wings-of-ghana",

  title: "Wings of Ghana",
  tagline: "Hundreds of species, and not one of them in a hurry.",
  shortDescription: "A gentle forest walk through Bobiri Forest Reserve, home to hundreds of Ghana's butterfly species.",
  longDescription:
    "Bobiri Forest Reserve, a short drive from Kumasi, protects one of West Africa's richest concentrations of butterfly species, alongside towering old-growth trees and a canopy alive with birdsong. This is a gentle, unhurried chapter, built for noticing small things.",

  region: "Ashanti Region",
  country: "Ghana",
  locations: ["Bobiri Forest Reserve"],

  category: ["NATURE", "WILDLIFE", "FAMILY"],

  duration: { days: 1 },

  heroImage: { src: "/images/stock/ghana-forest-butterfly.jpg", alt: "A butterfly resting on a green leaf in a Ghanaian forest reserve" },
  gallery: [{ src: "/images/stock/ghana-forest-butterfly.jpg", alt: "A butterfly resting on a green leaf" }],

  highlights: [
    "A guided walk through Bobiri Forest Reserve with a local naturalist",
    "Hundreds of recorded butterfly species in a single reserve",
    "Old-growth forest trees among the oldest protected in the region",
    "A quiet, restorative pace after the intensity of Kumasi",
    "Photography-friendly conditions in the forest's dappled light",
  ],

  whyThisExperience:
    "Not every chapter needs to be a monument or a museum. Bobiri offers something gentler: proof that Ghana's forests are still teeming, still quietly spectacular, and worth walking through slowly.",

  itinerary: [
    {
      day: 1,
      title: "Bobiri Forest Walk",
      location: "Bobiri Forest Reserve",
      description: "A full day guided walk through the reserve with a local naturalist, pausing to observe butterflies, birds, and old-growth trees.",
    },
  ],

  culturalContext:
    "Bobiri Forest Reserve was established in the 1930s and today functions as both a protected forest and a training ground for forestry students, home to an unusually high concentration of butterfly and moth species for its size.",

  included: [
    "Guided naturalist-led forest walk",
    "Reserve entry fees",
    "In-region transportation from Kumasi",
    "A dedicated steward for the day",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; dry season for easiest walking conditions",
    difficulty: "Easy, flat forest paths",
    groupSize: "Private or small group (2–12 travelers)",
    recommendedFor: ["Families", "Nature and photography enthusiasts", "Anyone pairing with The Sacred Waters"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER THE FOREST" },

  relatedExperiences: ["the-sacred-waters", "meet-the-forest-guardians"],
};
