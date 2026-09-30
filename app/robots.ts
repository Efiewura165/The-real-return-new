import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /login is deliberately not listed: it's noindexed instead, and crawlers
      // can only see a noindex tag on pages they're allowed to fetch.
      disallow: ["/admin", "/studio", "/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
