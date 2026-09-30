import type { MetadataRoute } from "next";

import { headerNav } from "@/lib/nav";
import { getExperiencePackages } from "@/lib/sanity/experiences";
import { absoluteUrl } from "@/lib/seo";

// Experiences come from Sanity, so refresh hourly to pick up new packages.
export const revalidate = 3600;

const SECTION_PREFIXES = ["/journeys/", "/about/", "/for-businesses/"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/experiences"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/academy"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/reserve"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms"), lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Journeys, About, and For Businesses pages are defined by the header nav,
  // the same source their generateStaticParams uses.
  const navPages: MetadataRoute.Sitemap = headerNav
    .flatMap((parent) => parent.items)
    .map((item) => item.href)
    .filter((href) => SECTION_PREFIXES.some((prefix) => href.startsWith(prefix)))
    .map((href) => ({
      url: absoluteUrl(href),
      lastModified,
      changeFrequency: "monthly",
      priority: href.startsWith("/journeys/") ? 0.8 : 0.6,
    }));

  const experiences = await getExperiencePackages();
  const experiencePages: MetadataRoute.Sitemap = experiences.map((pkg) => ({
    url: absoluteUrl(`/experiences/${pkg.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...navPages, ...experiencePages];
}
