import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/home/SiteHeader";
import { PackageDetail } from "@/components/experiences/PackageDetail";
import { getExperiencePackages, getExperienceBySlug } from "@/lib/sanity/experiences";

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

  return {
    title: `${pkg.title} | The Real Return™`,
    description: pkg.shortDescription,
    alternates: { canonical: `/experiences/${pkg.slug}` },
    openGraph: {
      title: pkg.title,
      description: pkg.shortDescription,
      images: [{ url: pkg.heroImage.src }],
    },
  };
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
    touristType: pkg.category,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <PackageDetail package={pkg} />
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 text-sm text-foreground/60 sm:px-10">
          © 2026 The Real Return™. Reconnect with intention.
        </div>
      </footer>
    </div>
  );
}
