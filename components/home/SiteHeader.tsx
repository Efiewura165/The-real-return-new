"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#pillars", label: "Pillars" },
  { href: "#academy", label: "Academy" },
  { href: "#journey", label: "Journey" },
  { href: "#invest", label: "Invest" },
  { href: "#community", label: "Community" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/95 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.25)]" : "bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <a href="#" className="flex flex-col leading-none text-background">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">The Real Return™</span>
          <span className="mt-1 font-sans text-lg font-extrabold uppercase tracking-[0.08em]">Remember · Return · Rebuild</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8rem] font-medium uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-gold-luxury"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#invest"
          className="inline-flex h-11 items-center justify-center rounded-sm border border-gold-luxury/70 bg-transparent px-6 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-gold-luxury hover:text-ink"
        >
          Reserve Your Journey
        </a>
      </div>
    </header>
  );
}
