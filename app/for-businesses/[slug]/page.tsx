import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
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

  return (
    <ComingSoonPage
      eyebrow="For Businesses"
      title={item.label}
      body="This partnership program is still being finalized. Reach out and a member of our team will follow up directly."
      ctaLabel="Get In Touch"
      ctaHref="/reserve"
    />
  );
}
