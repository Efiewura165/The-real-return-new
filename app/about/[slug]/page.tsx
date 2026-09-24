import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { aboutContent } from "@/lib/comingSoonContent";
import { headerNav } from "@/lib/nav";

const about = (headerNav.find((parent) => parent.label === "About")?.items ?? []).filter((item) => item.href.startsWith("/about/"));

interface AboutPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return about.map((item) => ({ slug: item.href.replace("/about/", "") }));
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = about.find((i) => i.href === `/about/${slug}`);
  if (!item) return {};
  return { title: `${item.label} | The Real Return™` };
}

export default async function AboutSubPage({ params }: AboutPageProps) {
  const { slug } = await params;
  const item = about.find((i) => i.href === `/about/${slug}`);
  if (!item) notFound();
  const content = aboutContent[slug];
  if (!content) notFound();

  return (
    <ComingSoonPage
      eyebrow="About"
      title={item.label}
      body={content.body}
      ctaLabel={content.ctaLabel}
      ctaHref={content.ctaHref}
      image={content.image}
    />
  );
}
