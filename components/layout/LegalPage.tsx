import type { ReactNode } from "react";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/** Shared shell for the privacy policy and terms of service. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="border-b border-border pb-12 pt-40 sm:pb-16">
        <div className="mx-auto w-full max-w-[820px] px-6 sm:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">The Real Return™</p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-foreground/50">Last updated {updated}</p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[820px] px-6 sm:px-10">
          <div className="rounded-sm border border-gold/30 bg-gold/5 p-5 text-sm leading-6 text-foreground/70">
            <strong className="font-semibold text-foreground">Draft, pending legal review.</strong> This page describes what the site
            actually collects and does today. Sections in brackets mark decisions (legal entity name, governing state, refund policy)
            that still need sign-off from counsel and the business before this page is treated as final.
          </div>

          <div className="mt-12 space-y-10 text-base leading-8 text-foreground/75 [&_h2]:mt-2 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:text-foreground [&_h2]:leading-tight [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_p]:mt-3">
            {children}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
