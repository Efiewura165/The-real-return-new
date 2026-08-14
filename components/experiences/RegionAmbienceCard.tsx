import Link from "next/link";

import { VideoCarousel } from "./VideoCarousel";
import { LUXURY_AMBIENCE_VIDEOS } from "@/lib/luxury-videos";

interface RegionAmbienceCardProps {
  startIndex?: number;
}

export function RegionAmbienceCard({ startIndex = 0 }: RegionAmbienceCardProps) {
  return (
    <Link
      href="/reserve"
      className="group relative flex aspect-[4/5] w-full flex-col overflow-hidden rounded-sm sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
    >
      <VideoCarousel
        videos={LUXURY_AMBIENCE_VIDEOS}
        startIndex={startIndex}
        intervalMs={6000}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
      <div className="relative mt-auto p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-luxury">The Real Return™</p>
        <h3 className="mt-2 font-serif text-xl font-normal leading-snug text-background">Not sure where to start?</h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-background transition-transform group-hover:translate-x-1">
          Begin Your Journey <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
