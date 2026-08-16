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
      "Social hierarchy and respect norms",
      "Greetings, etiquette, and Ghana Time",
      "Family structure and the role of elders",
      "Faith and its place in daily life",
      "Everyday situations, worked through in advance",
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
      "Survival phrases in Twi, Ga, and Ewe",
      "Everyday expressions and small talk",
      "Nonverbal communication and gesture",
      "Akan proverbs and what they reveal",
      "Listening practice with native speakers",
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
      "Visa types and which one fits your plans",
      "Right of Abode eligibility",
      "Applying for the Ghana Card",
      "Customs rules for returning travelers",
      "Health and vaccination requirements",
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
      "All three Foundation & Orientation courses",
      "Cultural Deep Dive and Identity & Belonging",
      "Practical Relocation planning",
      "Economic Opportunity and investment pathways",
      "Ongoing 1:1 Concierge access to a steward",
    ],
    featured: true,
  },
];

export function getCourseBySlug(slug: string): AcademyCourse | undefined {
  return academyCourses.find((course) => course.slug === slug);
}
