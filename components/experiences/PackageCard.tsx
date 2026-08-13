import Image from "next/image";
import Link from "next/link";

import type { ExperiencePackage } from "@/types/experience";

interface PackageCardProps {
  package: ExperiencePackage;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/experiences/${pkg.slug}`} className="group flex w-full flex-col sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <Image
          src={pkg.heroImage.src}
          alt={pkg.heroImage.alt}
          fill
          sizes="(min-width:1024px) 23vw, (min-width:640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
        {pkg.region} · {pkg.locations[0]}
      </p>
      <h3 className="mt-2 font-serif text-xl font-normal leading-snug text-foreground">{pkg.title}</h3>
      <p className="mt-2 text-sm leading-6 text-foreground/65">{pkg.tagline}</p>
      <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/45">
        {pkg.duration.days} Day{pkg.duration.days === 1 ? "" : "s"} &nbsp;·&nbsp; {pkg.category.slice(0, 2).join(" · ")}
      </p>
    </Link>
  );
}
