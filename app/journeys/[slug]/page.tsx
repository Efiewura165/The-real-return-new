import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { headerNav } from "@/lib/nav";

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
  if (!item) return {};
  return { title: `${item.label} | The Real Return™` };
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const item = journeys.find((i) => i.href === `/journeys/${slug}`);
  if (!item) notFound();

  return (
    <ComingSoonPage
      eyebrow="Journeys"
      title={item.label}
      body="We're putting the finishing touches on this journey. In the meantime, a steward can help you plan it directly."
      ctaLabel="Begin Your Journey"
      ctaHref="/reserve"
    />
  );
}
