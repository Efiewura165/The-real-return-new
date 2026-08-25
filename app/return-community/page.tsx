import type { Metadata } from "next";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { InterestForm } from "@/components/ecosystem/InterestForm";
import { returnCommunityContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Return Community™ | The Real Return™",
  description: "Don't just visit. Connect. Meet other Returners, entrepreneurs, creatives, families, and professionals across Ghana.",
};

export default function ReturnCommunityPage() {
  const { hero, closing } = returnCommunityContent;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="bg-forest pb-20 pt-40 sm:pb-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-background/80">{hero.description}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{closing.eyebrow}</p>
          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight sm:text-4xl">{closing.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-foreground/70">{closing.description}</p>
        </div>

        <div className="mx-auto mt-14 w-full max-w-xl px-6 sm:px-10">
          <div className="rounded-sm border border-border bg-muted p-6 sm:p-8">
            <InterestForm
              type="community"
              label="Join the Return Community"
              submitLabel="Join the Community"
              successMessage="Thank you for joining. We'll reach out with upcoming gatherings, events, and conversations."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
