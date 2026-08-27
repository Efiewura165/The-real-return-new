import { getSanityClient, isSanityConfigured } from "./client";
import { urlForImage } from "./image";
import {
  communityContent as staticCommunity,
  founderContent as staticFounder,
  heroSlides as staticHeroSlides,
  investmentContent as staticInvestment,
  itineraryContent as staticItinerary,
  pillarsContent as staticPillars,
} from "@/content/site";
import type { Image } from "sanity";

interface SanityHeroSlide {
  image: Image;
  alt: string;
  caption: string;
}

interface SanitySiteSettings {
  heroSlides: SanityHeroSlide[];
  community: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
}

interface SanityPillar {
  key: string;
  title: string;
  description: string;
  image: Image;
}

interface SanityPillarsSection {
  eyebrow: string;
  title: string;
  pillars: SanityPillar[];
}

interface SanityFounderSection {
  eyebrow: string;
  name: string;
  role: string;
  body: string;
  pullQuote: string;
  image: Image & { alt: string };
}

interface SanityItineraryHighlight {
  day: string;
  title: string;
  location: string;
  description: string;
}

interface SanityItinerarySection {
  eyebrow: string;
  title: string;
  description: string;
  highlights: SanityItineraryHighlight[];
  cta: { label: string; href: string };
}

interface SanityInvestmentTier {
  name: string;
  description: string;
  accommodation: string;
  inclusions: string[];
  ctaLabel: string;
}

interface SanityInvestmentSection {
  eyebrow: string;
  title: string;
  description: string;
  tiers: SanityInvestmentTier[];
}

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{ heroSlides, community }`;
const PILLARS_QUERY = `*[_type == "pillarsSection"][0]{ eyebrow, title, pillars }`;
const FOUNDER_QUERY = `*[_type == "founderSection"][0]{ eyebrow, name, role, body, pullQuote, image }`;
const ITINERARY_QUERY = `*[_type == "itinerarySection"][0]{ eyebrow, title, description, highlights, cta }`;
const INVESTMENT_QUERY = `*[_type == "investmentSection"][0]{ eyebrow, title, description, tiers }`;

export async function getHeroSlides() {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const settings = await client?.fetch<SanitySiteSettings | null>(SITE_SETTINGS_QUERY).catch(() => null);
    if (settings?.heroSlides?.length) {
      return settings.heroSlides.map((slide) => ({
        src: urlForImage(slide.image)?.url() ?? "",
        alt: slide.alt,
        caption: slide.caption,
      }));
    }
  }
  return staticHeroSlides;
}

export async function getCommunityContent() {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const settings = await client?.fetch<SanitySiteSettings | null>(SITE_SETTINGS_QUERY).catch(() => null);
    if (settings?.community) return settings.community;
  }
  return staticCommunity;
}

export async function getPillarsContent() {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const section = await client?.fetch<SanityPillarsSection | null>(PILLARS_QUERY).catch(() => null);
    if (section) {
      return {
        eyebrow: section.eyebrow,
        title: section.title,
        pillars: section.pillars.map((pillar) => ({
          key: pillar.key,
          title: pillar.title,
          description: pillar.description,
          image: urlForImage(pillar.image)?.url() ?? "",
        })),
      };
    }
  }
  return staticPillars;
}

export async function getFounderContent() {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const section = await client?.fetch<SanityFounderSection | null>(FOUNDER_QUERY).catch(() => null);
    if (section) {
      return {
        eyebrow: section.eyebrow,
        name: section.name,
        role: section.role,
        body: section.body,
        pullQuote: section.pullQuote,
        image: { src: urlForImage(section.image)?.url() ?? "", alt: section.image.alt },
      };
    }
  }
  return staticFounder;
}

export async function getItineraryContent() {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const section = await client?.fetch<SanityItinerarySection | null>(ITINERARY_QUERY).catch(() => null);
    if (section) return section;
  }
  return staticItinerary;
}

export async function getInvestmentContent() {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const section = await client?.fetch<SanityInvestmentSection | null>(INVESTMENT_QUERY).catch(() => null);
    if (section) return section;
  }
  return staticInvestment;
}
