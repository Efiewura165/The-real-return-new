import Link from "next/link";

import type { ExperiencePackage } from "@/types/experience";
import { VideoCarousel } from "./VideoCarousel";
import { LUXURY_AMBIENCE_VIDEOS } from "@/lib/luxury-videos";

interface PackageBannerProps {
  package: ExperiencePackage;
  videoStartIndex?: number;
}

export function PackageBanner({ package: pkg, videoStartIndex = 0 }: PackageBannerProps) {
  return (
    <Link
      href={`/experiences/${pkg.slug}`}
      className="group relative flex aspect-[16/10] w-full overflow-hidden rounded-sm sm:aspect-[21/9]"
    >
      <VideoCarousel
        videos={LUXURY_AMBIENCE_VIDEOS}
        startIndex={videoStartIndex}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
      <div className="relative mt-auto w-full p-6 sm:p-10">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">
          {pkg.region} · {pkg.locations.join(", ")}
        </p>
        <h3 className="mt-3 max-w-xl font-serif text-2xl font-normal leading-tight text-background sm:text-4xl">{pkg.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-background/80 sm:text-base sm:leading-8">{pkg.tagline}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-background/30 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-background/85">
            {pkg.duration.days} Day{pkg.duration.days === 1 ? "" : "s"}
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-luxury">{pkg.category.join(" · ")}</span>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-transform group-hover:translate-x-1">
          {pkg.registration.cta} <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
