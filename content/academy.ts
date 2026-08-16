import type { AcademyCourse, AcademyPhase } from "@/types/academy";

export const academyHero = {
  eyebrow: "The Real Return™ Academy",
  title: "Arrive prepared. Learn before you land.",
  description:
    "Every Real Return™ journey is stronger when it begins before the flight. The Academy is a self-paced learning path taught by our founder — grounded, practical coursework that turns a trip into a homecoming.",
  facilitator: "Taught by Tarsha Lewis, Founder of The Real Return™",
  image: { src: "/images/stock/academy-heritage-lesson.jpg", alt: "An educator writing on a whiteboard during a heritage studies lesson" },
};

export const academyPhases: AcademyPhase[] = [
  {
    phase: "Phase 1",
    title: "Foundation & Orientation",
    description: "Grounded, practical modules that prepare you before you ever set foot in Ghana — available now as standalone courses below.",
    unlocked: true,
  },
  {
    phase: "Phase 2",
    title: "Cultural Deep Dive",
    description: "History, spirituality, and social structure explored beyond the tourist surface.",
    unlocked: false,
  },
  {
    phase: "Phase 3",
    title: "Identity & Belonging",
    description: "Working through what it means to return — grief, pride, and everything between.",
    unlocked: false,
  },
  {
    phase: "Phase 4",
    title: "Practical Relocation",
    description: "Housing, healthcare, schooling, and the logistics of a longer stay or move.",
    unlocked: false,
  },
  {
    phase: "Phase 5",
    title: "Economic Opportunity",
    description: "Business formation, land, and investment pathways for the diaspora in Ghana.",
    unlocked: false,
  },
  {
    phase: "Phase 6",
    title: "1:1 Concierge",
    description: "Direct, personal guidance from a Real Return™ steward for your specific path.",
    unlocked: false,
  },
];

export const academyCourses: AcademyCourse[] = [
  {
    id: "academy-cultural-acclimatization",
    slug: "cultural-acclimatization",
    title: "Cultural Acclimatization",
    tagline: "Walk in like you already belong.",
    description:
      "Social hierarchy and respect norms, greetings and etiquette, Ghana Time, family structure, and the role of faith in daily life — the unwritten rules that make the difference between visiting and arriving.",
    image: { src: "/images/stock/diaspora-lounge-portrait.jpg", alt: "A woman relaxing in a stylish lounge, surrounded by greenery" },
    price: 79,
    currency: "USD",
    format: "Self-Paced Online",
    lessonCount: 5,
    curriculum: [
      {
        title: "Social Hierarchy & Respect",
        description: "Understanding elders, chiefs, and the structures of respect that shape every interaction in Ghanaian life.",
      },
      {
        title: "Greetings & Everyday Etiquette",
        description: "The greetings, gestures, and small courtesies that signal you belong, from first hello to Ghana Time.",
      },
      {
        title: "Family & Community Structure",
        description: "How extended family, clan, and community obligations shape decisions, hospitality, and daily rhythms.",
      },
      {
        title: "Faith in Daily Life",
        description: "The role of Christianity, Islam, and traditional belief in how Ghanaians move through an ordinary day.",
      },
      {
        title: "Real-World Scenarios",
        description: "Common situations worked through in advance, from market bargaining to visiting an elder's home.",
      },
    ],
    featured: false,
  },
  {
    id: "academy-linguistic-basics",
    slug: "linguistic-basics",
    title: "Linguistic Basics",
    tagline: "Speak the first words that open doors.",
    description:
      "Survival phrases in Twi, Ga, and Ewe, everyday expressions, nonverbal communication, and the Akan proverbs that shape how people speak — enough to be understood, and to understand.",
    image: { src: "/images/stock/adinkra-stamping.jpg", alt: "A craftsman hand-stamping traditional Adinkra symbols onto cloth" },
    price: 89,
    currency: "USD",
    format: "Self-Paced Online",
    lessonCount: 5,
    curriculum: [
      {
        title: "Survival Phrases in Twi, Ga & Ewe",
        description: "Core greetings, questions, and requests across Ghana's three most widely spoken languages.",
      },
      {
        title: "Everyday Expressions",
        description: "The small talk, filler words, and casual phrases that make conversation feel natural, not textbook.",
      },
      {
        title: "Nonverbal Communication",
        description: "Gesture, eye contact, tone, and the unspoken cues that carry as much meaning as words.",
      },
      {
        title: "Akan Proverbs & Wisdom",
        description: "Common proverbs and what they reveal about values, humor, and how Ghanaians think.",
      },
      {
        title: "Listening Practice",
        description: "Guided audio with native speakers so your ear adjusts before you ever land.",
      },
    ],
    featured: false,
  },
  {
    id: "academy-documentation",
    slug: "documentation",
    title: "Documentation",
    tagline: "Handle the paperwork before it handles you.",
    description:
      "Visa types, Right of Abode eligibility, the Ghana Card, customs rules, and the health requirements to sort out before you travel — the practical groundwork done right, once.",
    image: { src: "/images/stock/ghana-flag.jpg", alt: "The flag of Ghana" },
    price: 99,
    currency: "USD",
    format: "Self-Paced Online",
    lessonCount: 5,
    curriculum: [
      {
        title: "Visa Types & Requirements",
        description: "Which visa fits your trip, from short-stay tourism to longer relocation plans.",
      },
      {
        title: "Right of Abode Eligibility",
        description: "Who qualifies, how to apply, and what it unlocks for diaspora returnees.",
      },
      {
        title: "The Ghana Card",
        description: "Step-by-step through applying for Ghana's national ID as a returning member of the diaspora.",
      },
      {
        title: "Customs & Import Rules",
        description: "What you can bring, what's restricted, and how to avoid delays at the border.",
      },
      {
        title: "Health & Vaccination Requirements",
        description: "The medical paperwork and preparations to sort out before you fly.",
      },
    ],
    featured: false,
  },
  {
    id: "academy-full-membership",
    slug: "full-membership",
    title: "Full Academy Membership",
    tagline: "The complete path, from first lesson to 1:1 guidance.",
    description:
      "Everything in Foundation & Orientation, plus every phase that follows: Cultural Deep Dive, Identity & Belonging, Practical Relocation, Economic Opportunity, and ongoing 1:1 Concierge guidance from a Real Return™ steward.",
    image: { src: "/images/stock/krobo-bead-making.jpg", alt: "An artisan hand-crafting traditional Krobo beads" },
    price: 349,
    currency: "USD",
    format: "Self-Paced + 1:1 Concierge",
    lessonCount: 30,
    curriculum: [
      {
        title: "All Three Foundation Courses",
        description: "Complete access to Cultural Acclimatization, Linguistic Basics, and Documentation.",
      },
      {
        title: "Cultural Deep Dive & Identity",
        description: "History, spirituality, and the emotional work of return, explored beyond the surface.",
      },
      {
        title: "Practical Relocation Planning",
        description: "Housing, healthcare, schooling, and the logistics of a longer stay.",
      },
      {
        title: "Economic Opportunity",
        description: "Business formation, land, and investment pathways for the diaspora.",
      },
      {
        title: "Ongoing 1:1 Concierge",
        description: "Direct, personal guidance from a Real Return™ steward for as long as you need it.",
      },
    ],
    featured: true,
  },
];

export function getCourseBySlug(slug: string): AcademyCourse | undefined {
  return academyCourses.find((course) => course.slug === slug);
}
