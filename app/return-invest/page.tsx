import type { Metadata } from "next";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { InterestForm } from "@/components/ecosystem/InterestForm";
import { returnInvestContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Return Invest™ | The Real Return™",
  description: "Your Return can build something. Explore opportunities to move from visiting Ghana to building in Ghana.",
};

export default function ReturnInvestPage() {
  const { hero, categories } = returnInvestContent;

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

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Where Returners Build</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category.title} className="rounded-sm border border-border bg-background p-7">
                <h3 className="font-serif text-xl font-normal text-foreground">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/65">{category.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-7 text-foreground/50">
            Return Invest is early: we're building the vetted network of legal, financial, and local partners before connecting Returners to
            specific opportunities. Register your interest below and a steward will reach out as opportunities that fit your goals become
            available.
          </p>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto w-full max-w-xl px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Register Interest</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl">Tell us what you want to build.</h2>
        </div>
        <div className="mx-auto mt-10 w-full max-w-xl px-6 sm:px-10">
          <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
            <InterestForm
              type="invest"
              label="Return Invest"
              submitLabel="Register Interest"
              successMessage="Thank you. A steward will follow up as Return Invest opportunities that fit your goals become available."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
