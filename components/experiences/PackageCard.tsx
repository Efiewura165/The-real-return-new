import Image from "next/image";
import Link from "next/link";

import type { ExperiencePackage } from "@/types/experience";

interface PackageCardProps {
  package: ExperiencePackage;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link
      href={`/experiences/${pkg.slug}`}
      className="group relative flex aspect-[4/5] w-full flex-col overflow-hidden rounded-sm sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
    >
      <Image
        src={pkg.heroImage.src}
        alt={pkg.heroImage.alt}
        fill
        sizes="(min-width:1024px) 23vw, (min-width:640px) 45vw, 90vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
      <div className="relative mt-auto p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-luxury">
          {pkg.region} · {pkg.locations[0]}
        </p>
        <h3 className="mt-2 font-serif text-xl font-normal leading-snug text-background">{pkg.title}</h3>
        <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-background/75">
          {pkg.duration.days} Day{pkg.duration.days === 1 ? "" : "s"}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-background transition-transform group-hover:translate-x-1">
          Explore <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
