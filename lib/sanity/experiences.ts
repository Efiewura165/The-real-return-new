import { getSanityClient, isSanityConfigured } from "./client";
import { urlForImage } from "./image";
import {
  experiencePackages as staticPackages,
  getExperienceBySlug as getStaticExperienceBySlug,
  getFlagshipJourneys as getStaticFlagshipJourneys,
  getPackagesByRegion as getStaticPackagesByRegion,
  getRelatedExperiences as getStaticRelatedExperiences,
} from "@/content/experiences";
import type { ExperienceCategory, ExperienceImage, ExperiencePackage } from "@/types/experience";
import type { Image } from "sanity";

interface SanityExperienceImage extends Image {
  alt?: string;
}

interface SanityExperiencePackage {
  title: string;
  slug: { current: string };
  tagline: string;
  shortDescription: string;
  longDescription: string;
  region: string;
  country?: string;
  locations?: string[];
  category?: ExperienceCategory[];
  duration: { days: number; nights?: number };
  heroImage: SanityExperienceImage;
  gallery?: SanityExperienceImage[];
  highlights?: string[];
  whyThisExperience?: string;
  itinerary?: { day: number; title: string; description: string; location?: string }[];
  culturalContext?: string;
  included?: string[];
  excluded?: string[];
  practicalInformation?: { bestTime?: string; difficulty?: string; groupSize?: string; recommendedFor?: string[] };
  startingPrice?: number;
  currency?: string;
  featured?: boolean;
  registration?: { enabled: boolean; cta?: string };
  relatedExperiences?: string[];
}

const PACKAGE_PROJECTION = `{
  title, slug, tagline, shortDescription, longDescription, region, country, locations, category,
  duration, heroImage, gallery, highlights, whyThisExperience, itinerary, culturalContext,
  included, excluded, practicalInformation, startingPrice, currency, featured, registration, relatedExperiences
}`;

const PACKAGES_QUERY = `*[_type == "experiencePackage"] ${PACKAGE_PROJECTION}`;
const PACKAGE_BY_SLUG_QUERY = `*[_type == "experiencePackage" && slug.current == $slug][0] ${PACKAGE_PROJECTION}`;

function toImage(image: SanityExperienceImage): ExperienceImage {
  return { src: urlForImage(image)?.url() ?? "", alt: image.alt ?? "" };
}

function toPackage(doc: SanityExperiencePackage): ExperiencePackage {
  return {
    id: doc.slug.current,
    slug: doc.slug.current,
    title: doc.title,
    tagline: doc.tagline,
    shortDescription: doc.shortDescription,
    longDescription: doc.longDescription,
    region: doc.region,
    country: doc.country ?? "Ghana",
    locations: doc.locations ?? [],
    category: doc.category ?? [],
    duration: doc.duration,
    heroImage: toImage(doc.heroImage),
    gallery: (doc.gallery ?? []).map(toImage),
    highlights: doc.highlights ?? [],
    whyThisExperience: doc.whyThisExperience ?? "",
    itinerary: doc.itinerary ?? [],
    culturalContext: doc.culturalContext,
    included: doc.included ?? [],
    excluded: doc.excluded ?? [],
    practicalInformation: doc.practicalInformation ?? {},
    startingPrice: doc.startingPrice,
    currency: doc.currency,
    featured: doc.featured ?? false,
    registration: { enabled: doc.registration?.enabled ?? true, cta: doc.registration?.cta ?? "Register Interest" },
    relatedExperiences: doc.relatedExperiences ?? [],
  };
}

async function fetchAllFromSanity(): Promise<ExperiencePackage[] | null> {
  if (!isSanityConfigured()) return null;
  const client = getSanityClient();
  const docs = await client?.fetch<SanityExperiencePackage[]>(PACKAGES_QUERY).catch(() => null);
  return docs?.length ? docs.map(toPackage) : null;
}

export async function getExperiencePackages(): Promise<ExperiencePackage[]> {
  const fromSanity = await fetchAllFromSanity();
  return fromSanity ?? staticPackages;
}

export async function getExperienceBySlug(slug: string): Promise<ExperiencePackage | undefined> {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const doc = await client?.fetch<SanityExperiencePackage | null>(PACKAGE_BY_SLUG_QUERY, { slug }).catch(() => null);
    if (doc) return toPackage(doc);
  }
  return getStaticExperienceBySlug(slug);
}

export async function getRelatedExperiences(pkg: ExperiencePackage): Promise<ExperiencePackage[]> {
  const all = await getExperiencePackages();
  const bySlug = new Map(all.map((p) => [p.slug, p]));
  const related = pkg.relatedExperiences.map((slug) => bySlug.get(slug)).filter((p): p is ExperiencePackage => Boolean(p));
  return related.length ? related : getStaticRelatedExperiences(pkg);
}

export async function getFlagshipJourneys(): Promise<ExperiencePackage[]> {
  const all = await fetchAllFromSanity();
  if (!all) return getStaticFlagshipJourneys();
  const { FLAGSHIP_REGION } = await import("@/content/experiences");
  return all.filter((pkg) => pkg.region === FLAGSHIP_REGION);
}

export async function getPackagesByRegion(): Promise<{ region: string; packages: ExperiencePackage[] }[]> {
  const all = await fetchAllFromSanity();
  if (!all) return getStaticPackagesByRegion();

  const { REGION_ORDER, FLAGSHIP_REGION } = await import("@/content/experiences");
  const regional = all.filter((pkg) => pkg.region !== FLAGSHIP_REGION);
  return REGION_ORDER.map((region) => ({
    region,
    packages: regional.filter((pkg) => pkg.region === region),
  })).filter((group) => group.packages.length > 0);
}
