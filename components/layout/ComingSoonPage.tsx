import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

interface ComingSoonPageProps {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

/** Shared shell for nav destinations that are part of the site's IA but don't have content yet. */
export function ComingSoonPage({ eyebrow, title, body, ctaLabel, ctaHref }: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center sm:px-10">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-foreground/65">{body}</p>
        <a
          href={ctaHref}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
        >
          {ctaLabel}
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
