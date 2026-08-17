import type { ExperiencePackage } from "@/types/experience";

export const enterTheKingdom: ExperiencePackage = {
  id: "enter-the-kingdom",
  slug: "enter-the-kingdom",

  title: "Enter the Kingdom",
  tagline: "Walk into the story of one of Africa's great kingdoms.",
  shortDescription:
    "Discover Manhyia Palace Museum, Ashanti history, Kente, Adinkra, traditional craftsmanship and the living culture of Kumasi.",
  longDescription:
    "Discover the history, traditions and living culture of the Ashanti Kingdom through Manhyia Palace Museum, traditional craftsmanship, Kente, Adinkra and the vibrant cultural heart of Kumasi. This is not a museum tour. It is a walk through gold and memory, guided by the people who still carry the kingdom forward.",

  region: "Ashanti Region",
  country: "Ghana",
  locations: ["Kumasi", "Lake Bosomtwe", "Praso"],

  category: ["HERITAGE", "CULTURE", "ROYAL HERITAGE", "DIASPORA", "CRAFT"],

  duration: { days: 6, nights: 5 },

  heroImage: { src: "/images/stock/manhyia.jpeg", alt: "The Akwaaba entrance sign to the Manhyia Palace Museum in Kumasi" },
  gallery: [
    { src: "/images/stock/manhyia.jpeg", alt: "The entrance to the Manhyia Palace Museum in Kumasi" },
    { src: "/images/stock/gold.jpg", alt: "Ashanti royal gold regalia and ceremonial ornaments on display at Manhyia Palace Museum" },
    { src: "/images/stock/kente-weaving-loom.jpg", alt: "A craftsman weaving Kente cloth on a traditional loom" },
    { src: "/images/stock/kente-cloth-attire.jpg", alt: "A close-up of vibrant, hand-woven Kente cloth attire" },
    { src: "/images/stock/lake-bosomtwe.jpg", alt: "The still waters of Lake Bosomtwe, a sacred crater lake near Kumasi" },
    { src: "/images/stock/academy-heritage-lesson.jpg", alt: "An educator sharing heritage knowledge in a study session" },
  ],

  highlights: [
    "A guided walk through Manhyia Palace Museum, seat of the Ashanti kings",
    "Royal Ashanti gold regalia and the stories behind them",
    "The legendary Okomfo Anokye Sword, planted where it has stood for centuries",
    "The Military Museum, housed in Kumasi's historic fort",
    "Hands-on time with master weavers in a working Kente loom house",
    "The meaning behind Adinkra symbols, painted and explained by a local artisan",
    "Kumasi's Central Market and Ashanti cuisine",
    "A reflective visit to Lake Bosomtwe, sacred to the Ashanti people",
    "The Last Bath in Praso, a quiet site along the Pra River carrying its own layer of the region's history",
    "A traditional cultural performance",
  ],

  whyThisExperience:
    "The Ashanti Kingdom is one of the few African kingdoms whose royal line, rituals and craft traditions were never fully broken. To enter Manhyia is to stand inside a continuous story: gold that was never melted down, cloth that still carries meaning thread by thread, symbols still spoken before they are written. For travelers of the diaspora especially, Kumasi offers something rare: not a reconstruction of what was lost, but proof of what endured.",

  itinerary: [
    {
      day: 1,
      title: "Arrival in Kumasi",
      location: "Kumasi",
      description:
        "Settle into Kumasi and take an orientation walk through the city's heritage district. An evening welcome dinner introduces the Ashanti story you're about to enter.",
    },
    {
      day: 2,
      title: "Manhyia Palace Museum",
      location: "Manhyia",
      description:
        "A guided walk through Manhyia Palace Museum with a steward trained in Ashanti royal history: the regalia, the golden stool's story, and the kings and queen mothers who shaped the kingdom.",
    },
    {
      day: 3,
      title: "Okomfo Anokye Sword & the Military Museum",
      location: "Kumasi",
      description:
        "Stand before the Okomfo Anokye Sword, planted by the legendary priest who helped found the Ashanti Empire and said to be immovable to this day. Continue to the Military Museum, housed in Kumasi's historic fort, for a look at the region's military history.",
    },
    {
      day: 4,
      title: "Kente, Adinkra & Craft",
      location: "Bonwire & Kumasi",
      description:
        "Time in a working Kente loom house with master weavers, followed by an Adinkra symbol-painting session with a local artisan. Afternoon at Kumasi's Central Market and Ashanti cuisine.",
    },
    {
      day: 5,
      title: "Lake Bosomtwe",
      location: "Lake Bosomtwe",
      description:
        "A day at Lake Bosomtwe, Ghana's only natural lake and sacred to the Ashanti people, formed inside a meteorite crater. Time by the water for reflection, a lakeside meal, and stories of what this place has meant to generations of Ashanti families.",
    },
    {
      day: 6,
      title: "The Last Bath in Praso & Departure",
      location: "Praso",
      description:
        "A visit to Praso and the site known as the Last Bath, a quiet stretch of the Pra River carrying its own layer of the region's history, shared by a local steward. A closing traditional performance of drumming and dance, a final reflection session, and departure, or an easy connection into a Central Region or Greater Accra experience.",
    },
  ],

  culturalContext:
    "The Ashanti Kingdom (Asanteman) rose in the late 17th century and remains one of Africa's most intact royal traditions, still led today by an Asantehene. Kente cloth, Adinkra symbols and Ashanti gold aren't museum artifacts here. They're living practices, still made, still worn, still spoken.",

  included: [
    "Accommodation for the full itinerary",
    "Manhyia Palace Museum guided entry",
    "Okomfo Anokye Sword and Military Museum visits",
    "Kente loom house and Adinkra artisan sessions",
    "Lake Bosomtwe day visit",
    "The Last Bath in Praso, with a local steward",
    "Airport and in-Kumasi transportation",
    "A dedicated steward throughout the journey",
    "Welcome dinner and cultural performance",
  ],
  excluded: [
    "International flights",
    "Ghana visa fees",
    "Travel insurance",
    "Personal purchases (Kente, Adinkra art, market goods)",
  ],

  practicalInformation: {
    bestTime: "November through March, and around the Akwasidae festival for a live royal ceremony",
    difficulty: "Easy, mostly walking with no strenuous activity",
    groupSize: "Private or small group (4–12 travelers)",
    recommendedFor: ["Heritage travelers", "Diaspora travelers", "Families", "Culture and craft enthusiasts"],
  },

  startingPrice: undefined,
  currency: "USD",

  featured: true,

  registration: { enabled: true, cta: "ENTER THE KINGDOM" },

  relatedExperiences: ["threads-of-a-kingdom", "the-symbols-that-speak", "from-earth-to-art", "the-sacred-waters", "wings-of-ghana", "return-to-the-beginning"],
};
