import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { aboutContent } from "@/lib/comingSoonContent";
import { headerNav } from "@/lib/nav";
import { pageMetadata } from "@/lib/seo";

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
  const content = aboutContent[slug];
  if (!item || !content) return {};
  return pageMetadata({ title: item.label, description: content.body, path: item.href, image: content.image });
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
