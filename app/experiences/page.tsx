import type { Metadata } from "next";
import Image from "next/image";

import { SiteHeader } from "@/components/home/SiteHeader";
import { ExperienceBrowser } from "@/components/experiences/ExperienceBrowser";
import { getExperiencePackages, getFlagshipJourneys, getPackagesByRegion } from "@/lib/sanity/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Explore The Real Return™'s curated Ghana experiences, organized by region, from the Ashanti Kingdom to the savannah north.",
};

export const revalidate = 60;

export default async function ExperiencesPage() {
  const [flagships, regions, allPackages] = await Promise.all([
    getFlagshipJourneys(),
    getPackagesByRegion(),
    getExperiencePackages(),
  ]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden pb-16 pt-40 sm:pb-20">
        <Image
          src="/images/stock/manhyia.jpeg"
          alt="The Akwaaba entrance sign to the Manhyia Palace Museum in Kumasi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/15" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">Experiences</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">
            See Ghana. Understand Ghana. Experience Ghana.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-background/75">
            Every Real Return™ experience is a complete chapter: a region, a story, a way in. Search below, or explore by region or
            flagship journey.
          </p>
        </div>
      </section>

      <ExperienceBrowser flagships={flagships} regions={regions} allPackages={allPackages} />

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 text-sm text-foreground/60 sm:px-10">
          © 2026 The Real Return™. Reconnect with intention.
        </div>
      </footer>
    </div>
  );
}
