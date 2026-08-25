import type { Metadata } from "next";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { InterestForm } from "@/components/ecosystem/InterestForm";
import { trustedNetworkContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Return Network™ | The Real Return™",
  description: "Know Who to Trust. Connect with verified Ghanaian businesses, professionals, and service providers across every part of your Return.",
};

export default function ReturnNetworkPage() {
  const { hero, ecosystem, trust, marketplace, revenue, partner } = trustedNetworkContent;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="bg-ink pb-20 pt-40 sm:pb-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-luxury">{hero.tagline}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-background/75">{hero.description}</p>
        </div>
      </section>

      {/* The ecosystem, restated */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">The Ecosystem</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-5">
            {ecosystem.map((item) => (
              <div key={item.name} className="flex flex-col bg-background p-6">
                <h3 className="font-serif text-lg font-normal text-foreground">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-border bg-ink py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{trust.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">{trust.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-background/70">{trust.description}</p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {trust.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`rounded-sm border p-8 ${i === 2 ? "border-gold-luxury/60 bg-white/[0.04]" : "border-background/15"}`}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-luxury">Tier {i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl font-normal text-background">{tier.name}</h3>
                <p className="mt-3 text-sm leading-6 text-background/65">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-sided marketplace */}
      <section className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{marketplace.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">{marketplace.title}</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-sm border border-border bg-background p-8">
              <h3 className="font-serif text-2xl font-normal text-foreground">{marketplace.returners.title}</h3>
              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">{marketplace.returners.subtitle}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {marketplace.returners.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-foreground/65">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-border bg-muted p-8">
              <h3 className="font-serif text-2xl font-normal text-foreground">{marketplace.businesses.title}</h3>
              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">{marketplace.businesses.subtitle}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {marketplace.businesses.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-foreground/65">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-sm border border-border bg-background p-8">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{revenue.eyebrow}</p>
            <h3 className="mt-3 font-serif text-xl font-normal text-foreground">{revenue.title}</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/65">{revenue.items.join(" · ")}</p>
          </div>
        </div>
      </section>

      {/* Become a Return Partner */}
      <section id="partner" className="scroll-mt-20 bg-muted py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">{partner.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl">{partner.title}</h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/50">{partner.subtitle}</p>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/70">{partner.description}</p>
            <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">{partner.benefitsIntro}</p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {partner.benefits.map((item) => (
                <li key={item} className="text-sm leading-6 text-foreground/65">
                  · {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-lg italic text-foreground">{partner.closingLine}</p>
          </div>

          <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
            <InterestForm
              type="partner"
              label="Become a Return Partner"
              showBusinessName
              submitLabel="Become a Return Partner"
              successMessage="Thank you. Your Return Partner request has been received — a member of our team will follow up soon."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
