import Image from "next/image";
import Link from "next/link";

import type { ExperiencePackage } from "@/types/experience";

interface PackageBannerProps {
  package: ExperiencePackage;
}

export function PackageBanner({ package: pkg }: PackageBannerProps) {
  return (
    <div className="grid overflow-hidden rounded-sm border border-border bg-background lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative aspect-[4/3] lg:aspect-auto">
        <Image src={pkg.heroImage.src} alt={pkg.heroImage.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">
          {pkg.region} · {pkg.locations.join(", ")}
        </p>
        <h3 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">{pkg.title}</h3>
        <p className="mt-4 max-w-md text-base leading-8 text-foreground/70">{pkg.tagline}</p>
        <p className="mt-4 max-w-md text-sm leading-7 text-foreground/60">{pkg.shortDescription}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
            {pkg.duration.days} Days
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">{pkg.category.join(" · ")}</span>
        </div>
        <Link
          href={`/experiences/${pkg.slug}`}
          className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
        >
          {pkg.registration.cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
