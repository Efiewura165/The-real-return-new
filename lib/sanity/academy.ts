import { getSanityClient, isSanityConfigured } from "./client";
import { urlForImage } from "./image";
import { academyCourses as staticCourses, academyHero as staticHero, academyPhases as staticPhases } from "@/content/academy";
import type { AcademyCourse, AcademyPhase } from "@/types/academy";
import type { Image } from "sanity";

interface SanityAcademySettings {
  eyebrow: string;
  title: string;
  description: string;
  facilitator: string;
  image: Image & { alt: string };
  phases: AcademyPhase[];
}

interface SanityAcademyCourse {
  title: string;
  slug: { current: string };
  tagline: string;
  description: string;
  image: Image & { alt: string };
  price: number;
  currency: string;
  format: string;
  lessonCount: number;
  curriculum: { title: string; description: string }[];
  featured: boolean;
}

const SETTINGS_QUERY = `*[_type == "academySettings"][0]{ eyebrow, title, description, facilitator, image, phases }`;
const COURSES_QUERY = `*[_type == "academyCourse"] | order(order asc){ title, slug, tagline, description, image, price, currency, format, lessonCount, curriculum, featured }`;
const COURSE_BY_SLUG_QUERY = `*[_type == "academyCourse" && slug.current == $slug][0]{ title, slug, tagline, description, image, price, currency, format, lessonCount, curriculum, featured }`;

function toCourse(doc: SanityAcademyCourse): AcademyCourse {
  return {
    id: `academy-${doc.slug.current}`,
    slug: doc.slug.current,
    title: doc.title,
    tagline: doc.tagline,
    description: doc.description,
    image: { src: urlForImage(doc.image)?.url() ?? "", alt: doc.image.alt },
    price: doc.price,
    currency: doc.currency,
    format: doc.format,
    lessonCount: doc.lessonCount,
    curriculum: doc.curriculum,
    featured: doc.featured,
  };
}

export async function getAcademyHero() {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const settings = await client?.fetch<SanityAcademySettings | null>(SETTINGS_QUERY).catch(() => null);
    if (settings) {
      return {
        eyebrow: settings.eyebrow,
        title: settings.title,
        description: settings.description,
        facilitator: settings.facilitator,
        image: { src: urlForImage(settings.image)?.url() ?? "", alt: settings.image.alt },
      };
    }
  }
  return staticHero;
}

export async function getAcademyPhases(): Promise<AcademyPhase[]> {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const settings = await client?.fetch<SanityAcademySettings | null>(SETTINGS_QUERY).catch(() => null);
    if (settings?.phases?.length) return settings.phases;
  }
  return staticPhases;
}

export async function getAcademyCourses(): Promise<AcademyCourse[]> {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const docs = await client?.fetch<SanityAcademyCourse[]>(COURSES_QUERY).catch(() => null);
    if (docs?.length) return docs.map(toCourse);
  }
  return staticCourses;
}

export async function getAcademyCourseBySlug(slug: string): Promise<AcademyCourse | undefined> {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const doc = await client?.fetch<SanityAcademyCourse | null>(COURSE_BY_SLUG_QUERY, { slug }).catch(() => null);
    if (doc) return toCourse(doc);
  }
  return staticCourses.find((course) => course.slug === slug);
}
