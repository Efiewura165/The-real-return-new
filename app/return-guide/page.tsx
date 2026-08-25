import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { returnGuideContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Return Guide™ | The Real Return™",
  description: "Know Before You Go. Your trusted resource for navigating Ghana — practical information, recommendations, resources, and insights.",
};

export default function ReturnGuidePage() {
  const { hero, categories, academyCta } = returnGuideContent;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="bg-ink pb-20 pt-40 sm:pb-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-background/75">{hero.description}</p>
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">What's Inside</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">Practical guidance, organized by what you actually need to know.</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.title} className="rounded-sm border border-border bg-background p-7">
                <h3 className="font-serif text-xl font-normal text-foreground">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/65">{category.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-sm leading-7 text-foreground/50">
            The Return Guide is being built out region by region. Have a question that isn't answered yet?{" "}
            <Link href="/return-network#partner" className="underline decoration-gold/40 underline-offset-4 hover:text-foreground">
              Reach out to a steward
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{academyCta.eyebrow}</p>
          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight sm:text-4xl">{academyCta.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-foreground/70">{academyCta.description}</p>
          <Link
            href={academyCta.cta.href}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-ink px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-forest"
          >
            {academyCta.cta.label}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
