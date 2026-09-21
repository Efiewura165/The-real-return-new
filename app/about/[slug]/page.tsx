import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
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

  return (
    <ComingSoonPage
      eyebrow="About"
      title={item.label}
      body="We're still writing this page. In the meantime, read our founder's story on the homepage or reach out directly."
      ctaLabel="Our Story"
      ctaHref="/#story"
    />
  );
}
