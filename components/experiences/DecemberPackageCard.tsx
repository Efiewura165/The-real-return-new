import Image from "next/image";
import Link from "next/link";

import type { ExperiencePackage } from "@/types/experience";

interface DecemberPackageCardProps {
  package: ExperiencePackage;
  featured?: boolean;
}

export function DecemberPackageCard({ package: pkg, featured = false }: DecemberPackageCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-sm border ${
        featured ? "border-gold-luxury/50 bg-gradient-to-b from-[#171410] via-ink to-[#0a1512]" : "border-border bg-background"
      }`}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image src={pkg.heroImage.src} alt={pkg.heroImage.alt} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-luxury">
            {pkg.locations.join(" · ")}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-normal leading-tight text-background sm:text-3xl">{pkg.title}</h3>
          <p className="mt-2 max-w-lg text-sm leading-6 text-background/80 sm:text-base">{pkg.tagline}</p>
        </div>
      </div>

      <div className={`grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] ${featured ? "text-background" : "text-foreground"}`}>
        <div>
          <p className={`text-sm leading-7 ${featured ? "text-background/75" : "text-foreground/70"}`}>{pkg.shortDescription}</p>

          <p className={`mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${featured ? "text-gold-luxury" : "text-gold"}`}>
            Itinerary
          </p>
          <ol className="mt-4 space-y-5">
            {pkg.itinerary.map((stop) => (
              <li key={stop.day} className={`border-l pl-5 ${featured ? "border-background/20" : "border-border"}`}>
                <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${featured ? "text-gold-luxury" : "text-gold"}`}>
                  Day {stop.day}
                  {stop.location ? ` · ${stop.location}` : ""}
                </p>
                <h4 className={`mt-1 font-serif text-lg font-normal ${featured ? "text-background" : "text-foreground"}`}>{stop.title}</h4>
                <p className={`mt-1 text-sm leading-6 ${featured ? "text-background/65" : "text-foreground/65"}`}>{stop.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            {pkg.startingPrice ? (
              <div className="flex items-baseline gap-2">
                <span className={`font-serif text-3xl ${featured ? "text-gold-luxury" : "text-gold"}`}>
                  {pkg.currency === "USD" ? "$" : ""}
                  {pkg.startingPrice.toLocaleString()}
                </span>
                <span className={`text-sm ${featured ? "text-background/55" : "text-foreground/55"}`}>per person</span>
              </div>
            ) : null}
            <p className={`mt-2 text-[0.7rem] uppercase tracking-[0.2em] ${featured ? "text-background/50" : "text-foreground/50"}`}>
              {pkg.duration.days} Day{pkg.duration.days === 1 ? "" : "s"}
              {pkg.duration.nights ? ` / ${pkg.duration.nights} Night${pkg.duration.nights === 1 ? "" : "s"}` : ""} ·{" "}
              {pkg.practicalInformation.groupSize ?? "Contact for availability"}
            </p>
          </div>

          <div>
            <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${featured ? "text-background/50" : "text-foreground/50"}`}>
              Included
            </p>
            <ul className="mt-3 space-y-2">
              {pkg.included.map((item) => (
                <li key={item} className={`text-sm leading-6 ${featured ? "text-background/70" : "text-foreground/65"}`}>
                  · {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${featured ? "text-background/40" : "text-foreground/40"}`}>
              Not Included
            </p>
            <ul className="mt-3 space-y-2">
              {pkg.excluded.map((item) => (
                <li key={item} className={`text-sm leading-6 ${featured ? "text-background/50" : "text-foreground/50"}`}>
                  · {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/experiences/${pkg.slug}#register`}
            className="mt-auto inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-6 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
          >
            {pkg.registration.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
