import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { journeyContent } from "@/lib/comingSoonContent";
import { headerNav } from "@/lib/nav";
import { absoluteUrl, jsonLdScript, organizationRef, pageMetadata } from "@/lib/seo";

const journeys = headerNav.find((parent) => parent.label === "Journeys")?.items ?? [];

interface JourneyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journeys.map((item) => ({ slug: item.href.replace("/journeys/", "") }));
}

export async function generateMetadata({ params }: JourneyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = journeys.find((i) => i.href === `/journeys/${slug}`);
  const content = journeyContent[slug];
  if (!item || !content) return {};
  return pageMetadata({ title: item.label, description: content.body, path: item.href, image: content.image });
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const item = journeys.find((i) => i.href === `/journeys/${slug}`);
  if (!item) notFound();
  const content = journeyContent[slug];
  if (!content) notFound();

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: item.label,
    description: content.body,
    url: absoluteUrl(item.href),
    image: absoluteUrl(content.image.src),
    touristType: "African diaspora",
    provider: organizationRef,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(tripJsonLd)} />
      <ComingSoonPage
        eyebrow="Journeys"
        title={item.label}
        body={content.body}
        ctaLabel={content.ctaLabel}
        ctaHref={content.ctaHref}
        image={content.image}
      />
    </>
  );
}
