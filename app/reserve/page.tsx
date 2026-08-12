import type { Metadata } from "next";
import Image from "next/image";

import { SiteHeader } from "@/components/home/SiteHeader";
import { DepositCheckout } from "@/components/reserve/DepositCheckout";
import { InquiryForm } from "@/components/reserve/InquiryForm";
import { PackageBanner } from "@/components/experiences/PackageBanner";
import { investmentContent } from "@/content/site";
import { experiencePackages } from "@/content/experiences";
import { RESERVATION_DEPOSIT_AMOUNT, RESERVATION_DEPOSIT_CURRENCY } from "@/lib/paypal";

export const metadata: Metadata = {
  title: "Reserve Your Journey | The Real Return™",
  description: "Reserve your Ghana Legacy Journey with The Real Return™. Choose a tier, hold your spot with a deposit, or send an inquiry.",
};

export default async function ReservePage({ searchParams }: { searchParams: Promise<{ tier?: string }> }) {
  const { tier } = await searchParams;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28">
        <Image
          src="/images/stock/h1.jpg"
          alt="The illuminated entrance of a grand resort at dusk, framed by palm trees"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">Reserve Your Journey</p>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold-luxury to-transparent" />
          <h1 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">
            Hold your place on the Ghana Legacy Journey.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-background/75">
            Choose the tier that fits your family, then either hold your spot with a deposit or send an inquiry. A steward will follow up
            within 48 hours to finalize dates and details.
          </p>
        </div>
      </section>

      {/* Choose your experience */}
      {experiencePackages.length > 0 ? (
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Choose Your Experience</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">
              Curated journeys into the story of Ghana.
            </h2>
            <div className="mt-10 grid gap-8">
              {experiencePackages.map((pkg) => (
                <PackageBanner key={pkg.slug} package={pkg} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Pricing tiers */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {investmentContent.tiers.map((t, i) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-sm border p-8 ${
                  i === 1
                    ? "border-gold-luxury/50 bg-gradient-to-b from-[#171410] via-ink to-[#0a1512] shadow-[0_25px_60px_-15px_rgba(217,178,92,0.25)]"
                    : "border-border bg-background"
                }`}
              >
                {i === 1 ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold-luxury px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink">
                    Most Requested
                  </span>
                ) : null}
                <h3 className={`font-serif text-2xl font-normal ${i === 1 ? "text-background" : "text-foreground"}`}>{t.name}</h3>
                <p className={`mt-3 text-sm leading-6 ${i === 1 ? "text-background/65" : "text-foreground/65"}`}>{t.description}</p>
                <div className={`mt-6 rounded-sm border px-4 py-3 ${i === 1 ? "border-background/15 bg-background/5" : "border-border bg-muted"}`}>
                  <p className={`text-[0.65rem] uppercase tracking-[0.2em] ${i === 1 ? "text-background/50" : "text-foreground/50"}`}>
                    Accommodation included
                  </p>
                  <p className={`mt-1 text-sm leading-6 ${i === 1 ? "text-background/75" : "text-foreground/75"}`}>{t.accommodation}</p>
                </div>
                <ul className={`mt-6 flex-1 space-y-2 border-t pt-6 ${i === 1 ? "border-background/10" : "border-border"}`}>
                  {t.inclusions.map((item) => (
                    <li key={item} className={`text-sm leading-6 ${i === 1 ? "text-background/60" : "text-foreground/60"}`}>
                      · {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/reserve?tier=${encodeURIComponent(t.name)}#inquire`}
                  className="mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-gold-luxury px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
                >
                  {t.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deposit + inquiry */}
      <section id="inquire" className="border-t border-border bg-muted py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Hold Your Spot</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">
              Secure your place with a deposit.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/70">
              {`A ${RESERVATION_DEPOSIT_CURRENCY} ${RESERVATION_DEPOSIT_AMOUNT} deposit holds your place while a steward finalizes your itinerary and tier.`}{" "}
              It&apos;s applied toward your journey. The balance is arranged directly with your steward.
            </p>
            <div className="mt-8 rounded-sm border border-border bg-background p-6 sm:p-8">
              <DepositCheckout amount={RESERVATION_DEPOSIT_AMOUNT} currency={RESERVATION_DEPOSIT_CURRENCY} />
            </div>
          </div>

          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Prefer To Talk First?</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">
              Send us an inquiry.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/70">
              Tell us a bit about your family and dates. A steward will reach out to walk through tiers, availability, and next steps.
            </p>
            <div className="mt-8 rounded-sm border border-border bg-background p-6 sm:p-8">
              <InquiryForm defaultTier={tier} />
            </div>
          </div>
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
