import type { MetadataRoute } from "next";

import { getExperiencePackages } from "@/lib/sanity/experiences";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-real-return-new.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const packages = await getExperiencePackages();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/academy`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/experiences`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/reserve`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const packageRoutes: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${SITE_URL}/experiences/${pkg.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...packageRoutes];
}
