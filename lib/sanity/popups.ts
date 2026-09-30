import { getSanityClient, isSanityConfigured } from "./client";
import { urlForImage } from "./image";
import type { Image } from "sanity";

export interface PopupBanner {
  id: string;
  pages: string[];
  images: { src: string; alt: string }[];
  eyebrow: string;
  message: string;
  buttonLabel: string;
  buttonLink: string;
  firstShowDelayMs: number;
  visibleDurationMs: number;
  reappearIntervalMs: number;
}

interface SanityPopupBanner {
  _id: string;
  pages?: string[];
  images: (Image & { alt: string })[];
  eyebrow: string;
  message: string;
  buttonLabel: string;
  buttonLink: string;
  firstShowDelaySeconds: number;
  visibleDurationSeconds: number;
  reappearIntervalSeconds: number;
}

const BANNERS_QUERY = `*[_type == "popupBanner" && enabled == true]{ _id, pages, images, eyebrow, message, buttonLabel, buttonLink, firstShowDelaySeconds, visibleDurationSeconds, reappearIntervalSeconds }`;

function toBanner(doc: SanityPopupBanner): PopupBanner {
  return {
    id: doc._id,
    pages: doc.pages ?? [],
    images: (doc.images ?? []).map((image) => ({ src: urlForImage(image)?.url() ?? "", alt: image.alt })),
    eyebrow: doc.eyebrow,
    message: doc.message,
    buttonLabel: doc.buttonLabel,
    buttonLink: doc.buttonLink,
    firstShowDelayMs: doc.firstShowDelaySeconds * 1000,
    visibleDurationMs: doc.visibleDurationSeconds * 1000,
    reappearIntervalMs: doc.reappearIntervalSeconds * 1000,
  };
}

const staticFallback: PopupBanner[] = [
  {
    id: "static-booking-cta",
    pages: [],
    images: [
      {
        src: "/images/stock/ghana-water-welcome-smile.jpg",
        alt: "A smiling Ghanaian woman in traditional dress, welcoming guests with a warm Akwaaba spirit",
      },
    ],
    eyebrow: "The Real Return™",
    message: "You are at the Right Spot Where Luxury meets Adventure",
    buttonLabel: "Book Now For Our Next Exciting Destination Package",
    buttonLink: "/reserve",
    firstShowDelayMs: 6000,
    visibleDurationMs: 18000,
    reappearIntervalMs: 45000,
  },
];

export async function getPopupBanners(): Promise<PopupBanner[]> {
  if (isSanityConfigured()) {
    const client = getSanityClient();
    const docs = await client?.fetch<SanityPopupBanner[]>(BANNERS_QUERY).catch(() => null);
    if (docs?.length) return docs.map(toBanner).filter((banner) => banner.images.length > 0);
  }
  return staticFallback;
}
