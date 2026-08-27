import type { Metadata } from "next";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { InterestForm } from "@/components/ecosystem/InterestForm";
import { returnRewardsContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Return Rewards™ | The Real Return™",
  description: "Return. Discover. Connect. Earn. A future loyalty program connecting Returners with participating Ghanaian businesses — coming soon.",
};

export default function ReturnRewardsPage() {
  const { hero } = returnRewardsContent;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="bg-ink pb-24 pt-40 sm:pb-32">
        <div className="mx-auto w-full max-w-[1000px] px-6 text-center sm:px-10">
          <span className="inline-flex rounded-full border border-gold-luxury/50 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-luxury">
            {hero.status}
          </span>
          <p className="mt-6 text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{hero.eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">{hero.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-background/75">{hero.description}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-xl px-6 text-center sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Be First</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl">Join the Return Rewards waitlist.</h2>
        </div>
        <div className="mx-auto mt-10 w-full max-w-xl px-6 sm:px-10">
          <div className="rounded-sm border border-border bg-muted p-6 sm:p-8">
            <InterestForm
              type="rewards"
              label="Return Rewards Waitlist"
              submitLabel="Join the Waitlist"
              successMessage="Thank you. We'll let you know as soon as Return Rewards launches."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
