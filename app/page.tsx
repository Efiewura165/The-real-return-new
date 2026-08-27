import Image from "next/image";

import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { getAcademyHero, getAcademyCourses } from "@/lib/sanity/academy";
import {
  getCommunityContent,
  getFounderContent,
  getHeroSlides,
  getInvestmentContent,
  getItineraryContent,
  getPillarsContent,
} from "@/lib/sanity/site";

export default async function HomePage() {
  const [academyHero, academyCourses, heroSlides, pillarsContent, founderContent, itineraryContent, investmentContent, communityContent] =
    await Promise.all([
      getAcademyHero(),
      getAcademyCourses(),
      getHeroSlides(),
      getPillarsContent(),
      getFounderContent(),
      getItineraryContent(),
      getInvestmentContent(),
      getCommunityContent(),
    ]);
  const teaserCourses = academyCourses.filter((course) => !course.featured);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <Hero heroSlides={heroSlides} />

      {/* Story / founder quote */}
      <section id="story" className="bg-ink py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image src={founderContent.image.src} alt={founderContent.image.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw, 90vw" />
          </div>
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{founderContent.eyebrow}</p>
            <blockquote className="mt-6 font-serif text-3xl italic leading-snug text-background sm:text-4xl">“{founderContent.pullQuote}”</blockquote>
            <p className="mt-8 text-base leading-8 text-background/70">{founderContent.body}</p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-background">
              {founderContent.name} <span className="text-background/50">· {founderContent.role}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{pillarsContent.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">{pillarsContent.title}</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {pillarsContent.pillars.map((pillar) => (
              <div key={pillar.key} className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-serif text-2xl font-normal text-background">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-background/80">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy */}
      <section id="academy" className="bg-muted py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{academyHero.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">{academyHero.title}</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/70">{academyHero.description}</p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-foreground/50">{academyHero.facilitator}</p>
            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image src={academyHero.image.src} alt={academyHero.image.alt} fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
            </div>
            <a
              href="/academy"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-ink px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-forest"
            >
              Explore Academy Membership
            </a>
          </div>

          <div className="grid gap-4">
            {teaserCourses.map((course) => (
              <a
                key={course.slug}
                href={`/academy?course=${course.slug}#enroll`}
                className="group rounded-sm border border-border bg-background p-7 transition-colors hover:border-gold"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {course.format} · {course.lessonCount} Lessons
                </p>
                <h3 className="mt-3 font-serif text-xl font-normal">{course.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/65">{course.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-gold transition-transform group-hover:translate-x-1">
                  Enroll Now <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{itineraryContent.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">{itineraryContent.title}</h2>
            <p className="mt-6 text-base leading-8 text-foreground/70">{itineraryContent.description}</p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {itineraryContent.highlights.map((stop) => (
              <div key={stop.day} className="flex flex-col bg-background p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {stop.day} · {stop.location}
                </p>
                <h3 className="mt-3 font-serif text-lg font-normal">{stop.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-foreground/65">{stop.description}</p>
              </div>
            ))}
          </div>

          <a
            href="/reserve"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-sm border border-foreground/20 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
          >
            {itineraryContent.cta.label}
          </a>
        </div>
      </section>

      {/* Investment */}
      <section id="invest" className="bg-ink py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{investmentContent.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">
              {investmentContent.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-background/70">{investmentContent.description}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {investmentContent.tiers.map((tier, i) => (
              <div key={tier.name} className={`flex flex-col rounded-sm border p-8 ${i === 1 ? "border-gold-luxury/60 bg-white/[0.04]" : "border-background/15"}`}>
                <h3 className="font-serif text-2xl font-normal text-background">{tier.name}</h3>
                <p className="mt-3 text-sm leading-6 text-background/65">{tier.description}</p>
                <div className="mt-6 rounded-sm border border-background/15 bg-background/5 px-4 py-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-background/50">Accommodation included</p>
                  <p className="mt-1 text-sm leading-6 text-background/75">{tier.accommodation}</p>
                </div>
                <ul className="mt-6 flex-1 space-y-2 border-t border-background/10 pt-6">
                  {tier.inclusions.map((item) => (
                    <li key={item} className="text-sm leading-6 text-background/60">
                      · {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/reserve?tier=${encodeURIComponent(tier.name)}#inquire`}
                  className="mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-gold-luxury px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
                >
                  {tier.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="bg-forest py-20 sm:py-28">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{communityContent.eyebrow}</p>
          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight text-background sm:text-4xl">{communityContent.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-background/75">{communityContent.description}</p>
          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm border border-background/50 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-background hover:text-forest"
          >
            {communityContent.buttonLabel}
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 text-sm text-foreground/60 sm:px-10">
          © 2026 The Real Return™. Reconnect with intention.
        </div>
      </footer>
    </div>
  );
}
