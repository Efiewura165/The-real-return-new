import type { Metadata } from "next";

export const SITE_NAME = "The Real Return™";
export const SITE_TAGLINE = "Remember. Return. Rebuild.";
export const SITE_DESCRIPTION =
  "The Real Return™ is a heritage and legacy platform for the African diaspora, built for those returning to Ghana not as tourists, but as family coming home.";

/** 1200×630 share card used wherever a page has no image of its own. */
export const DEFAULT_OG_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Cape Coast Castle overlooking the Atlantic, Ghana",
};

/**
 * The canonical origin every absolute URL (canonical links, Open Graph, sitemap,
 * JSON-LD) is built from. Set NEXT_PUBLIC_SITE_URL to the custom domain once
 * it's live; until then Vercel's production URL is used automatically.
 */
export const SITE_URL = resolveSiteUrl();

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;
  return "http://localhost:3000";
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetadataInput {
  /** Page title without the site-name suffix; the root layout's template adds it. */
  title: string;
  description: string;
  /** Route path, e.g. "/journeys/family-return". Used for the canonical URL. */
  path: string;
  image?: { src: string; alt: string };
  noIndex?: boolean;
}

/**
 * Full per-page metadata. Next.js merges metadata shallowly, so a page that sets
 * `openGraph` replaces the layout's entirely — every page goes through here so
 * the share card, Twitter card, and canonical are always complete.
 */
export function pageMetadata({ title, description: rawDescription, path, image, noIndex }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const description = toMetaDescription(rawDescription);
  const images = image ? [{ url: image.src, alt: image.alt }] : [DEFAULT_OG_IMAGE];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((img) => img.url),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Search results cut descriptions at ~160 characters; trim at a word boundary instead of mid-word. */
function toMetaDescription(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "")}…`;
}

/** Serializes JSON-LD for a <script> tag, escaping `<` so content can't break out of it. */
export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  slogan: SITE_TAGLINE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: absoluteUrl(DEFAULT_OG_IMAGE.url),
  areaServed: { "@type": "Country", name: "Ghana" },
};

/** Compact reference to the organization for `provider` fields on other pages. */
export const organizationRef = {
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
};
