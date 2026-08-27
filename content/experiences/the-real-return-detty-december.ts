import type { ExperiencePackage } from "@/types/experience";

export const theRealReturnDettyDecember: ExperiencePackage = {
  id: "the-real-return-detty-december",
  slug: "the-real-return-detty-december",

  title: "The Real Return: Detty December",
  tagline: "Ghana's biggest season, held with ritual and reflection.",
  shortDescription:
    "AfroFuture, citywide New Year's Eve celebrations, and the heritage anchors of Cape Coast and Kakum — Ghana's December return season, inside the Real Return™ framework.",
  longDescription:
    "December in Ghana is unlike anywhere else in the world: hundreds of thousands of the diaspora arriving at once, AfroFuture's stages lighting up Accra, and a citywide countdown into the new year. This journey holds all of that energy without losing the thread of why travelers come home in the first place — Cape Coast Castle, the rainforest canopy of Kakum, and a closing circle that asks what each traveler is carrying forward, not just what they danced to.",

  region: "Multi-Region Journey",
  country: "Ghana",
  locations: ["Accra", "Cape Coast", "Elmina", "Kakum National Park"],

  category: ["HERITAGE", "DIASPORA", "CULTURE", "LUXURY"],

  duration: { days: 7, nights: 6 },

  heroImage: { src: "/images/stock/accra-skyline.jpg", alt: "The modern skyline of Accra, Ghana" },
  gallery: [
    { src: "/images/stock/accra-skyline.jpg", alt: "The modern skyline of Accra, Ghana" },
    { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic Ocean" },
    { src: "/images/stock/kakum-canopy-walk.jpg", alt: "The forest canopy walkway at Kakum National Park, Ghana" },
    { src: "/images/stock/kwame-nkrumah-memorial.jpg", alt: "The Kwame Nkrumah Memorial Park in Accra, Ghana" },
  ],

  highlights: [
    "AfroFuture Festival access during its opening weekend in Accra",
    "A guided walk through Cape Coast Castle and the Door of No Return",
    "A traditional naming ceremony on Ghana's coast — a ritual return, not a photo stop",
    "The Kakum Canopy Walk above the rainforest that once bordered the routes families were taken from",
    "A citywide New Year's Eve celebration, followed by a closing circle before departure",
  ],

  whyThisExperience:
    "Most December trips give you the party and skip the reason people started calling it a homecoming. This one keeps both: the festival energy Ghana is known for every December, held alongside the same ritual anchors — castle, coastline, canopy, and a closing circle — that shape every Real Return™ journey.",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Welcome Dinner",
      location: "Accra",
      description: "Airport pickup, hotel check-in, and a welcome dinner that opens the journey — the first step of a season measured in meaning, not just events.",
    },
    {
      day: 2,
      title: "Accra Orientation & AfroFuture Opening Night",
      location: "Accra",
      description: "Kwame Nkrumah Memorial, a hands-on craft workshop, and AfroFuture's opening night on the festival grounds.",
    },
    {
      day: 4,
      title: "Cape Coast Castle & Naming Ceremony",
      location: "Cape Coast & Elmina",
      description: "A guided walk through the castle's dungeons and the Door of No Return, followed by a traditional naming ceremony on the coast.",
    },
    {
      day: 6,
      title: "Kakum Canopy Walk",
      location: "Kakum National Park",
      description: "A walk above the rainforest canopy, followed by an evening beach club back in Accra.",
    },
    {
      day: 7,
      title: "New Year's Eve & Closing Circle",
      location: "Accra",
      description: "A citywide New Year's Eve celebration, followed by a closing circle that names what each traveler is carrying home before departure.",
    },
  ],

  culturalContext:
    "December in Ghana has grown from a diaspora homecoming season into one of the continent's biggest cultural moments, anchored by festivals like AfroFuture and a monthlong wave of concerts, beach parties, and citywide celebration. The Real Return™ framework holds that energy alongside its heritage sites, so the season becomes a homecoming, not just a holiday.",

  included: [
    "Hotel accommodation for the full 6-night itinerary",
    "Daily breakfast and 3 dinners",
    "Airport transfers and in-country transportation",
    "A dedicated steward throughout the journey",
    "All site entry fees and the traditional naming ceremony",
    "AfroFuture Festival access",
  ],
  excluded: ["International flights", "Ghana visa fees", "Yellow Fever vaccination certificate", "Travel insurance", "Gratuities and personal expenses"],

  practicalInformation: {
    bestTime: "December 26 – January 2, timed to AfroFuture and the citywide New Year's Eve season",
    difficulty: "Easy to moderate, a mix of walking tours, nightlife, and the Kakum canopy walk",
    groupSize: "Small group (8–14 travelers)",
    recommendedFor: ["Diaspora travelers", "First-time visitors to Ghana's December season", "Anyone who wants the festival and the heritage, not just one or the other"],
  },

  startingPrice: 3795,
  currency: "USD",
  featured: true,

  registration: { enabled: true, cta: "JOIN THE DECEMBER RETURN" },

  relatedExperiences: ["return-to-the-beginning", "above-the-rainforest", "the-soul-of-ghana", "remember-return-rebuild"],
};
