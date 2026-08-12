import Image from "next/image";
import Link from "next/link";

import { getRelatedExperiences } from "@/content/experiences";
import type { ExperiencePackage } from "@/types/experience";
import { RegistrationForm } from "./RegistrationForm";

interface PackageDetailProps {
  package: ExperiencePackage;
}

export function PackageDetail({ package: pkg }: PackageDetailProps) {
  const related = getRelatedExperiences(pkg);

  return (
    <div className="bg-background">
      {/* Full-screen hero */}
      <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
        <Image src={pkg.heroImage.src} alt={pkg.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 sm:px-10 sm:pb-28">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">
            {pkg.region} · {pkg.locations.join(", ")}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-normal leading-tight text-background sm:text-6xl">{pkg.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-background/85">{pkg.tagline}</p>
          <p className="mt-4 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-background/60">
            {pkg.duration.days} Days{pkg.duration.nights ? ` / ${pkg.duration.nights} Nights` : ""} &nbsp;·&nbsp;{" "}
            {pkg.category.join(" · ")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#register"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
            >
              {pkg.registration.cta}
            </a>
            <a
              href="#itinerary"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-background/40 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:border-background"
            >
              View Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[900px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">The Story</p>
          <p className="mt-6 font-serif text-2xl font-normal leading-relaxed text-foreground sm:text-3xl">{pkg.longDescription}</p>
        </div>
      </section>

      {/* Why this experience */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[900px] px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">Why This Experience</p>
          <p className="mt-6 font-serif text-2xl italic leading-relaxed text-background sm:text-3xl">{pkg.whyThisExperience}</p>
        </div>
      </section>

      {/* What you will experience */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">What You Will Experience</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight sm:text-5xl">The moments that shape this journey.</h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {pkg.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-4 rounded-sm border border-border bg-muted p-6">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-luxury" aria-hidden="true" />
                <span className="text-base leading-7 text-foreground/80">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section id="itinerary" className="border-t border-border bg-muted py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Itinerary</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight sm:text-5xl">A journey held together by place and ritual.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {pkg.itinerary.map((stop) => (
              <div key={stop.day} className="flex flex-col bg-background p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Day {stop.day}
                  {stop.location ? ` · ${stop.location}` : ""}
                </p>
                <h3 className="mt-3 font-serif text-lg font-normal text-foreground">{stop.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-foreground/65">{stop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural context */}
      {pkg.culturalContext ? (
        <section className="bg-forest py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[900px] px-6 text-center sm:px-10">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">Cultural Context</p>
            <p className="mt-6 text-lg leading-8 text-background/85">{pkg.culturalContext}</p>
          </div>
        </section>
      ) : null}

      {/* Gallery */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Gallery</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight sm:text-5xl">A living portrait of {pkg.region}.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.gallery.map((image) => (
              <div key={image.src} className="group relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / excluded */}
      <section className="border-t border-border bg-muted py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">What&apos;s Included</p>
            <ul className="mt-6 space-y-3">
              {pkg.included.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-foreground/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-foreground/50">What&apos;s Not Included</p>
            <ul className="mt-6 space-y-3">
              {pkg.excluded.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-foreground/60">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Practical information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Practical Information</p>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pkg.practicalInformation.bestTime ? (
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">Best Time</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground/75">{pkg.practicalInformation.bestTime}</dd>
              </div>
            ) : null}
            {pkg.practicalInformation.difficulty ? (
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">Difficulty</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground/75">{pkg.practicalInformation.difficulty}</dd>
              </div>
            ) : null}
            {pkg.practicalInformation.groupSize ? (
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">Group Size</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground/75">{pkg.practicalInformation.groupSize}</dd>
              </div>
            ) : null}
            {pkg.practicalInformation.recommendedFor?.length ? (
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">Recommended For</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground/75">{pkg.practicalInformation.recommendedFor.join(", ")}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      {/* Related experiences */}
      {related.length > 0 ? (
        <section className="border-t border-border bg-muted py-24 sm:py-32">
          <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Related Experiences</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/experiences/${r.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={r.heroImage.src}
                      alt={r.heroImage.alt}
                      fill
                      sizes="(min-width:1024px) 25vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 font-serif text-lg font-normal text-foreground">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Register your interest */}
      <section id="register" className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#171410] via-ink to-[#0a1512]" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">Register Your Interest</p>
              <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-background sm:text-4xl">Begin your return.</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-background/70">
                Tell us about your family and dates, and a steward will personally shape {pkg.title} around you.
              </p>
              <p className="mt-8 text-sm leading-7 text-background/50">
                Prefer something fully private?{" "}
                <Link href="/reserve#inquire" className="underline decoration-gold-luxury/50 underline-offset-4 hover:text-background">
                  Plan a Bespoke Journey
                </Link>
                .
              </p>
            </div>
            <RegistrationForm experienceSlug={pkg.slug} experienceTitle={pkg.title} />
          </div>
        </div>
      </section>
    </div>
  );
}
