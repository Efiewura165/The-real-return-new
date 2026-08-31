"use client";

import { useMemo, useState } from "react";

import { PackageCard } from "@/components/experiences/PackageCard";
import { RegionAmbienceCard } from "@/components/experiences/RegionAmbienceCard";
import { GhanaRegionMap } from "@/components/experiences/GhanaRegionMap";
import { slugify } from "@/lib/utils";
import type { ExperienceCategory, ExperiencePackage } from "@/types/experience";
import Image from "next/image";
import Link from "next/link";

interface ExperienceBrowserProps {
  flagships: ExperiencePackage[];
  regions: { region: string; packages: ExperiencePackage[] }[];
  allPackages: ExperiencePackage[];
}

export function ExperienceBrowser({ flagships, regions, allPackages }: ExperienceBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory | null>(null);

  const categories = useMemo(() => {
    const set = new Set<ExperienceCategory>();
    for (const pkg of allPackages) for (const c of pkg.category) set.add(c);
    return Array.from(set).sort();
  }, [allPackages]);

  const isFiltering = query.trim().length > 0 || activeCategory !== null;

  const filtered = useMemo(() => {
    if (!isFiltering) return [];
    const q = query.trim().toLowerCase();
    return allPackages.filter((pkg) => {
      const matchesQuery =
        !q ||
        pkg.title.toLowerCase().includes(q) ||
        pkg.tagline.toLowerCase().includes(q) ||
        pkg.region.toLowerCase().includes(q) ||
        pkg.locations.some((loc) => loc.toLowerCase().includes(q));
      const matchesCategory = !activeCategory || pkg.category.includes(activeCategory);
      return matchesQuery && matchesCategory;
    });
  }, [allPackages, query, activeCategory, isFiltering]);

  return (
    <>
      {/* Search & filter */}
      <section className="border-b border-border py-10">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1 sm:max-w-sm">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, region, or place…"
                aria-label="Search experiences"
                className="h-11 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none placeholder:text-foreground/40 focus:border-gold"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory((prev) => (prev === category ? null : category))}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full border px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    activeCategory === category
                      ? "border-gold bg-gold text-ink"
                      : "border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isFiltering ? (
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">
              {filtered.length} {filtered.length === 1 ? "Experience" : "Experiences"} Found
            </p>
            {filtered.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-10">
                {filtered.map((pkg) => (
                  <PackageCard key={pkg.slug} package={pkg} />
                ))}
              </div>
            ) : (
              <p className="mt-6 max-w-md text-base leading-7 text-foreground/60">
                Nothing matches that search. Try a different region, category, or place name.
              </p>
            )}
          </div>
        </section>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
