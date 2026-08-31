import { getSanityClient, isSanityConfigured } from "./client";
import { urlForImage } from "./image";
import type { Image } from "sanity";

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorContext: string;
  image?: { src: string; alt: string };
  featured: boolean;
}

interface SanityTestimonial {
  _id: string;
  quote: string;
  authorName: string;
  authorContext: string;
  image?: (Image & { alt?: string }) | null;
  featured: boolean;
}

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc){ _id, quote, authorName, authorContext, image, featured }`;

function toTestimonial(doc: SanityTestimonial): Testimonial {
  return {
    id: doc._id,
    quote: doc.quote,
    authorName: doc.authorName,
    authorContext: doc.authorContext,
    image: doc.image ? { src: urlForImage(doc.image)?.url() ?? "", alt: doc.image.alt ?? doc.authorName } : undefined,
    featured: doc.featured,
  };
}

/**
 * No static fallback here on purpose — unlike the migrated content, there
 * is no pre-existing testimonial copy to fall back to, and fabricated
 * customer quotes should never ship as placeholder data. Returns an empty
 * list until real testimonials are added in Studio; callers should hide
 * the section entirely when empty.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured()) return [];
  const client = getSanityClient();
  const docs = await client?.fetch<SanityTestimonial[]>(TESTIMONIALS_QUERY).catch(() => null);
  return docs?.map(toTestimonial) ?? [];
}
