import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

interface ComingSoonPageProps {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: { src: string; alt: string };
}

/** Shared shell for nav destinations that share the site's IA but don't have a bespoke page built yet. */
export function ComingSoonPage({ eyebrow, title, body, ctaLabel, ctaHref, image }: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-ink px-6 text-center sm:px-10">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85" />

        <div className="relative z-10 mx-auto max-w-2xl pt-20">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-purple-luxury">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white [text-shadow:0_6px_30px_rgba(0,0,0,0.6)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-white/85">{body}</p>
          <Link
            href={ctaHref}
            className="mt-9 inline-flex h-12 items-center justify-center rounded-sm bg-purple-luxury px-8 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
