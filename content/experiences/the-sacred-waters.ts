import type { ExperiencePackage } from "@/types/experience";

export const theSacredWaters: ExperiencePackage = {
  id: "the-sacred-waters",
  slug: "the-sacred-waters",

  title: "The Sacred Waters",
  tagline: "A lake formed by fire, held sacred by generations.",
  shortDescription: "A restful chapter at Lake Bosomtwe, Ghana's only natural lake, formed by a meteorite impact and held sacred by the Ashanti.",
  longDescription:
    "Lake Bosomtwe fills a meteorite crater roughly a million years old, its still water ringed by forested hills. To the Ashanti, it is sacred, believed to be home to the souls of the dead, and fished from traditional wooden paddleboards rather than canoes, out of respect. It's one of the most tranquil places in the region, and a natural place to rest between chapters.",

  region: "Ashanti Region",
  country: "Ghana",
  locations: ["Lake Bosomtwe"],

  category: ["NATURE", "WELLNESS", "CULTURE"],

  duration: { days: 2, nights: 1 },

  heroImage: { src: "/images/stock/lake-bosomtwe.jpg", alt: "The calm waters of Lake Bosomtwe surrounded by forested hills, Ashanti Region, Ghana" },
  gallery: [{ src: "/images/stock/lake-bosomtwe.jpg", alt: "The calm waters of Lake Bosomtwe surrounded by forested hills" }],

  highlights: [
    "A guided paddleboard trip on Ghana's only natural lake",
    "The story of the lake's sacred status among the Ashanti",
    "A lakeside village walk with local fishing communities",
    "Unstructured time to rest between heritage-heavy chapters",
    "Forest hikes on the crater rim overlooking the water",
  ],

  whyThisExperience:
    "After Manhyia, Kente, and Adinkra, Bosomtwe offers something different: stillness. Its sacred status among the Ashanti adds meaning to the quiet, and its natural beauty makes it one of the easiest places in Ghana to simply be present.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Lakeside Village",
      location: "Lake Bosomtwe",
      description: "Travel from Kumasi, settle into a lakeside stay, and take a walk through a local fishing village.",
    },
    {
      day: 2,
      title: "Paddleboard & Crater Rim",
      location: "Lake Bosomtwe",
      description: "A guided paddleboard session on the lake, followed by a forest hike along the crater rim before returning to Kumasi.",
    },
  ],

  culturalContext:
    "Lake Bosomtwe was formed by a meteorite impact roughly one million years ago and remains Ghana's only natural lake. The Ashanti consider it sacred, traditionally believing it receives the souls of the dead. Fishing is done from wooden paddleboards known as 'padua,' not canoes, in keeping with local custom.",

  included: [
    "Accommodation for the full itinerary",
    "Guided paddleboard session",
    "Crater rim hike",
    "Transportation from Kumasi",
    "A dedicated steward throughout the journey",
  ],
  excluded: ["International flights", "Ghana visa fees", "Travel insurance", "Personal purchases"],

  practicalInformation: {
    bestTime: "Year-round; November through March for clearest skies",
    difficulty: "Easy, with light paddling and moderate hiking",
    groupSize: "Private or small group (2–12 travelers)",
    recommendedFor: ["Wellness travelers", "Nature travelers", "Anyone pairing with Enter the Kingdom"],
  },

  currency: "USD",
  featured: false,

  registration: { enabled: true, cta: "ESCAPE TO BOSOMTWE" },

  relatedExperiences: ["enter-the-kingdom", "wings-of-ghana"],
};
