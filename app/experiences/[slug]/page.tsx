import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PackageDetail } from "@/components/experiences/PackageDetail";
import { getExperiencePackages, getExperienceBySlug } from "@/lib/sanity/experiences";
import { absoluteUrl, jsonLdScript, organizationRef, pageMetadata } from "@/lib/seo";

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const experiencePackages = await getExperiencePackages();
  return experiencePackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getExperienceBySlug(slug);
  if (!pkg) return {};

  return pageMetadata({
    title: pkg.title,
    description: pkg.shortDescription,
    path: `/experiences/${pkg.slug}`,
    image: pkg.heroImage,
  });
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const pkg = await getExperienceBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.shortDescription,
    url: absoluteUrl(`/experiences/${pkg.slug}`),
    image: absoluteUrl(pkg.heroImage.src),
    touristType: pkg.category,
    provider: organizationRef,
    ...(pkg.startingPrice
      ? {
          offers: {
            "@type": "Offer",
            price: pkg.startingPrice,
            priceCurrency: pkg.currency ?? "USD",
            url: absoluteUrl(`/experiences/${pkg.slug}`),
          },
        }
      : {}),
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: day.title,
        description: day.description,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      <SiteHeader />
      <PackageDetail package={pkg} />
      <SiteFooter />
    </div>
  );
}
