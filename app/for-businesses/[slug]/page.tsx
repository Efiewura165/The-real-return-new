import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { forBusinessContent } from "@/lib/comingSoonContent";
import { headerNav } from "@/lib/nav";

const forBusinesses = headerNav.find((parent) => parent.label === "For Businesses")?.items ?? [];

interface ForBusinessesPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return forBusinesses.map((item) => ({ slug: item.href.replace("/for-businesses/", "") }));
}

export async function generateMetadata({ params }: ForBusinessesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = forBusinesses.find((i) => i.href === `/for-businesses/${slug}`);
  if (!item) return {};
  return { title: `${item.label} | The Real Return™` };
}

export default async function ForBusinessesPage({ params }: ForBusinessesPageProps) {
  const { slug } = await params;
  const item = forBusinesses.find((i) => i.href === `/for-businesses/${slug}`);
  if (!item) notFound();
  const content = forBusinessContent[slug];
  if (!content) notFound();

  return (
    <ComingSoonPage
      eyebrow="For Businesses"
      title={item.label}
      body={content.body}
      ctaLabel={content.ctaLabel}
      ctaHref={content.ctaHref}
      image={content.image}
    />
  );
}
