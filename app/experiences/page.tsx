import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/home/SiteHeader";
import { PackageCard } from "@/components/experiences/PackageCard";
import { RegionAmbienceCard } from "@/components/experiences/RegionAmbienceCard";
import { GhanaRegionMap } from "@/components/experiences/GhanaRegionMap";
import { getFlagshipJourneys, getPackagesByRegion } from "@/content/experiences";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experiences | The Real Return™",
  description: "Explore The Real Return™'s curated Ghana experiences, organized by region, from the Ashanti Kingdom to the savannah north.",
};

export default function ExperiencesPage() {
  const flagships = getFlagshipJourneys();
  const regions = getPackagesByRegion();

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
            Every Real Return™ experience is a complete chapter: a region, a story, a way in. Explore by region below, or begin with one
            of our flagship multi-region journeys.
          </p>
        </div>
      </section>

      {/* Flagship journeys */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Flagship Journeys</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
            Extended journeys, built for the complete story.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {flagships.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/experiences/${pkg.slug}`}
                className="group grid overflow-hidden rounded-sm border border-border sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto">
                  <Image
                    src={pkg.heroImage.src}
                    alt={pkg.heroImage.alt}
                    fill
                    sizes="(min-width:1024px) 25vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    {pkg.duration.days} Days &nbsp;·&nbsp; {pkg.locations.length} Stops
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-foreground">{pkg.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/65">{pkg.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Region map */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Browse By Region</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">Find your way in.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-foreground/65">
            Select a region on the map to jump straight to its experiences.
          </p>
          <div className="mt-10 flex justify-center">
            <GhanaRegionMap />
          </div>
        </div>
      </section>

      {/* Regional sections */}
      {regions.map(({ region, packages }, regionIndex) => (
        <section key={region} id={slugify(region)} className="scroll-mt-20 border-b border-border py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
            <h2 className="font-serif text-2xl font-normal leading-tight sm:text-3xl">{region}</h2>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-10">
              {packages.map((pkg) => (
                <PackageCard key={pkg.slug} package={pkg} />
              ))}
              <RegionAmbienceCard startIndex={regionIndex * 2} />
            </div>
          </div>
        </section>
      ))}

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 text-sm text-foreground/60 sm:px-10">
          © 2026 The Real Return™. Reconnect with intention.
        </div>
      </footer>
    </div>
  );
}
