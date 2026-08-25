import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { BackgroundCarousel } from "@/components/home/BackgroundCarousel";
import { PillarCard } from "@/components/ecosystem/PillarCard";
import { InterestForm } from "@/components/ecosystem/InterestForm";
import {
  pillarsContent,
  founderContent,
  itineraryContent,
  investmentContent,
  ecosystemContent,
  ghanaJourneyContent,
  forBusinessContent,
  comingSoonContent,
  whyRealReturnContent,
  diasporaGhanaContent,
  joinTheReturnContent,
} from "@/content/site";
import { getAcademyHero, getAcademyCourses } from "@/lib/sanity/academy";

export default async function HomePage() {
  const [academyHero, academyCourses] = await Promise.all([getAcademyHero(), getAcademyCourses()]);
  const teaserCourses = academyCourses.filter((course) => !course.featured);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <Hero />

      {/* Core message strip */}
      <section className="border-b border-border py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 sm:grid-cols-3 sm:px-10">
          {pillarsContent.pillars.map((pillar) => (
            <div key={pillar.key}>
              <h3 className="font-serif text-2xl font-normal text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/65">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Ecosystem */}
      <section id="ecosystem" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{ecosystemContent.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">{ecosystemContent.title}</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemContent.pillars.map((pillar) => (
              <PillarCard key={pillar.key} name={pillar.name} tagline={pillar.tagline} description={pillar.description} cta={pillar.cta} href={pillar.href} />
            ))}
          </div>
        </div>
      </section>

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

      {/* The Ghana Journey */}
      <section id="journey" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{ghanaJourneyContent.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">{ghanaJourneyContent.title}</h2>
            <p className="mt-6 text-base leading-8 text-foreground/70">{ghanaJourneyContent.description}</p>
          </div>

          <div className="mt-14 rounded-sm border border-border bg-muted p-8 sm:p-10">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">{ghanaJourneyContent.signature.eyebrow}</p>
            <h3 className="mt-3 font-serif text-2xl font-normal text-foreground sm:text-3xl">{ghanaJourneyContent.signature.title}</h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-foreground/70">{ghanaJourneyContent.signature.description}</p>
            <Link
              href={ghanaJourneyContent.signature.cta.href}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-sm bg-ink px-6 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-forest"
            >
              {ghanaJourneyContent.signature.cta.label}
            </Link>
          </div>

          <div className="mt-14">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{itineraryContent.eyebrow}</p>
            <h3 className="mt-4 max-w-2xl font-serif text-2xl font-normal leading-tight sm:text-3xl">{itineraryContent.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70">{itineraryContent.description}</p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
              {itineraryContent.highlights.map((stop) => (
                <div key={stop.day} className="flex flex-col bg-background p-7">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                    {stop.day} · {stop.location}
                  </p>
                  <h4 className="mt-3 font-serif text-lg font-normal">{stop.title}</h4>
                  <p className="mt-2 flex-1 text-sm leading-6 text-foreground/65">{stop.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{investmentContent.eyebrow}</p>
            <h3 className="mt-4 max-w-2xl font-serif text-2xl font-normal leading-tight sm:text-3xl">{investmentContent.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70">{investmentContent.description}</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {investmentContent.tiers.map((tier, i) => (
                <div key={tier.name} className={`flex flex-col rounded-sm border p-8 ${i === 1 ? "border-gold/50 bg-muted" : "border-border bg-background"}`}>
                  <h4 className="font-serif text-2xl font-normal text-foreground">{tier.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">{tier.description}</p>
                  <div className="mt-6 rounded-sm border border-border bg-black/[0.02] px-4 py-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground/50">Accommodation included</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/75">{tier.accommodation}</p>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2 border-t border-border pt-6">
                    {tier.inclusions.map((item) => (
                      <li key={item} className="text-sm leading-6 text-foreground/60">
                        · {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/reserve?tier=${encodeURIComponent(tier.name)}#inquire`}
                    className="mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-gold-luxury px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
                  >
                    {tier.ctaLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academy teaser */}
      <section id="academy" className="scroll-mt-20 bg-muted py-24 sm:py-32">
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

      {/* For Businesses */}
      <section id="business" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
        <BackgroundCarousel images={forBusinessContent.images} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/85" />
        <div className="relative mx-auto w-full max-w-[1000px] px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{forBusinessContent.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-background sm:text-4xl">{forBusinessContent.title}</h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-background/60">{forBusinessContent.subtitle}</p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-background/80">{forBusinessContent.description}</p>
          <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-background/60">{forBusinessContent.benefitsIntro}</p>
          <ul className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 text-left sm:grid-cols-2">
            {forBusinessContent.benefits.map((item) => (
              <li key={item} className="text-sm leading-6 text-background/75">
                · {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-lg italic text-background">{forBusinessContent.closingLine}</p>
          <Link
            href={forBusinessContent.cta.href}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
          >
            {forBusinessContent.cta.label}
          </Link>
        </div>
      </section>

      {/* Coming soon */}
      <section className="border-b border-border bg-ink py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{comingSoonContent.eyebrow}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {comingSoonContent.items.map((item) => (
              <Link key={item.key} href={item.href} className="group rounded-sm border border-background/15 p-8 transition-colors hover:border-gold-luxury/60">
                <h3 className="font-serif text-2xl font-normal text-background">{item.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-luxury">{item.tagline}</p>
                <p className="mt-4 text-sm leading-7 text-background/65">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-background transition-transform group-hover:translate-x-1">
                  Join the Waitlist <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why The Real Return */}
      <section id="why" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1000px] px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{whyRealReturnContent.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl">{whyRealReturnContent.title}</h2>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-foreground/80 sm:text-2xl">{whyRealReturnContent.items.join(" ")}</p>
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-foreground/70">{whyRealReturnContent.closingLine}</p>
        </div>
      </section>

      {/* For the Diaspora / For Ghana */}
      <section className="border-t border-border">
        <div className="grid lg:grid-cols-2">
          <div className="bg-muted px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-md">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{diasporaGhanaContent.diaspora.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl">{diasporaGhanaContent.diaspora.title}</h2>
              <p className="mt-5 text-base leading-8 text-foreground/70">{diasporaGhanaContent.diaspora.description}</p>
              <Link
                href={diasporaGhanaContent.diaspora.cta.href}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-sm border border-foreground/20 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
              >
                {diasporaGhanaContent.diaspora.cta.label}
              </Link>
            </div>
          </div>
          <div className="bg-forest px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-md">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{diasporaGhanaContent.ghana.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-background sm:text-4xl">{diasporaGhanaContent.ghana.title}</h2>
              <p className="mt-5 text-base leading-8 text-background/75">{diasporaGhanaContent.ghana.description}</p>
              <p className="mt-5 font-serif text-lg text-background">{diasporaGhanaContent.ghana.closingLine}</p>
              <Link
                href={diasporaGhanaContent.ghana.cta.href}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-sm border border-background/50 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-background hover:text-forest"
              >
                {diasporaGhanaContent.ghana.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join The Return */}
      <section id="join" className="scroll-mt-20 border-t border-border py-24 sm:py-32">
        <div className="mx-auto w-full max-w-xl px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{joinTheReturnContent.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl">{joinTheReturnContent.title}</h2>
          <p className="mt-5 text-base leading-7 text-foreground/70">{joinTheReturnContent.description}</p>
          <p className="mt-2 text-sm leading-7 text-foreground/55">{joinTheReturnContent.items.join(" · ")}</p>
        </div>
        <div className="mx-auto mt-10 w-full max-w-xl px-6 sm:px-10">
          <div className="rounded-sm border border-border bg-muted p-6 sm:p-8">
            <InterestForm
              type="newsletter"
              label="Join The Return"
              submitLabel={joinTheReturnContent.cta.label}
              successMessage="Thank you for joining The Return — we'll keep you posted."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
