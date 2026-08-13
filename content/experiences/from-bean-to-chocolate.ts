import type { ExperiencePackage } from "@/types/experience";

export const fromBeanToChocolate: ExperiencePackage = {
  id: "from-bean-to-chocolate",
  slug: "from-bean-to-chocolate",

  title: "From Bean to Chocolate",
  tagline: "Taste the crop that built a nation's economy, straight from the pod.",
  shortDescription: "A hands-on cocoa farm experience in Ghana's Eastern Region, from harvest to hand-made chocolate.",
  longDescription:
    "Ghana is the world's second-largest cocoa producer, and much of that legacy runs through the Eastern Region's farms. This experience puts you inside the full process — cracking pods, fermenting and drying beans, and finally roasting and grinding your own chocolate by hand, alongside the farming families who do this work every season.",

  region: "Eastern Region",
  country: "Ghana",
  locations: ["Eastern Region cocoa belt"],

  category: ["FOOD", "AGRICULTURE", "CRAFT"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/cocoa-harvest-processing.jpg", alt: "Cocoa beans being sorted and processed by hand in Ghana" },
  gallery: [
    { src: "/images/stock/cocoa-harvest-processing.jpg", alt: "Cocoa beans being sorted and processed by hand" },
    { src: "/images/stock/aburi-botanical-gardens.jpg", alt: "A tree-lined avenue in the Aburi Botanical Gardens, Eastern Region, Ghana" },
  ],

  highlights: [
    "A guided walk through a working cocoa farm during harvest",
    "Cracking pods and fermenting beans the traditional way",
    "Hand-roasting and grinding your own chocolate from scratch",
    "Conversations with the farming families behind Ghana's cocoa economy",
    "A tasting flight comparing farm-fresh chocolate to what reaches export",
  ],

  whyThisExperience:
    "Chocolate is one of the clearest threads connecting Ghana to kitchens and pantries across the diaspora — and almost no one who eats it has seen where it begins. Standing in a cocoa farm, hands on the pods, changes that permanently.",

  itinerary: [
    {
      day: 1,
      title: "Farm Visit & Harvest",
      location: "Eastern Region cocoa belt",
      description: "Travel into the cocoa belt, meet a farming family, and take part in the pod harvest and fermentation process.",
    },
    {
      day: 2,
      title: "Bean to Bar",
      location: "Eastern Region cocoa belt",
      description: "Hand-roast and grind cocoa beans into your own chocolate, followed by a comparative tasting session.",
    },
  ],

  culturalContext:
    "Cocoa arrived in Ghana in the late 19th century and became, within a generation, the backbone of the national economy — grown overwhelmingly on smallholder family farms that remain the heart of the industry today.",

  included: [
    "Accommodation for the full itinerary",
    "Guided farm visit and harvest participation",
    "Hands-on chocolate-making session",
    "Transportation within the region",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "October through March, the primary cocoa harvest season",
    difficulty: "Easy — light hands-on farm work",
    groupSize: "Private or small group (2–12 travelers)",
    recommendedFor: ["Families", "Food and craft enthusiasts", "Anyone pairing with an Aburi stay"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "DISCOVER THE COCOA STORY" },

  relatedExperiences: ["above-the-city", "from-coconut-to-golden-oil"],
};
