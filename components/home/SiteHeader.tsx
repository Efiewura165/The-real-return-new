"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const JOURNEY_LINK = { href: "/reserve", label: "Ghana Journey" };

const ECOSYSTEM_LINKS = [
  { href: "/return-guide", label: "Return Guide™", description: "Know before you go." },
  { href: "/return-network", label: "Return Network™", description: "Know who to trust." },
  { href: "/experiences", label: "Return Experiences™", description: "Experience Ghana differently." },
  { href: "/return-community", label: "Return Community™", description: "Don't just visit. Connect." },
  { href: "/return-invest", label: "Return Invest™", description: "Build something in Ghana." },
];

const COMING_SOON_LINKS = [
  { href: "/return-market", label: "Return Market™" },
  { href: "/return-rewards", label: "Return Rewards™" },
];

const SECONDARY_LINKS = [
  { href: "/academy", label: "Academy" },
  { href: "/return-network#partner", label: "For Businesses" },
];

const MOBILE_LINKS = [
  JOURNEY_LINK,
  ...ECOSYSTEM_LINKS.map(({ href, label }) => ({ href, label })),
  ...COMING_SOON_LINKS,
  ...SECONDARY_LINKS,
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!ecosystemOpen) return;

    function onClickOutside(event: MouseEvent) {
      if (ecosystemRef.current && !ecosystemRef.current.contains(event.target as Node)) {
        setEcosystemOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setEcosystemOpen(false);
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [ecosystemOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen ? "bg-ink/95 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.25)]" : "bg-gradient-to-b from-ink/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <a href="/" className="flex items-center gap-3 leading-none text-background">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-luxury/70 bg-ink/40">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold-luxury" aria-hidden="true">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </span>
          <span className="font-sans text-lg font-extrabold uppercase tracking-[0.08em]">The Real Return™</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <a
            href={JOURNEY_LINK.href}
            className="text-[0.8rem] font-medium uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-gold-luxury"
          >
            {JOURNEY_LINK.label}
          </a>

          <div ref={ecosystemRef} className="relative">
            <button
              type="button"
              aria-expanded={ecosystemOpen}
              aria-haspopup="true"
              onClick={() => setEcosystemOpen((open) => !open)}
              className="flex items-center gap-1.5 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-gold-luxury"
            >
              The Ecosystem
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${ecosystemOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            {ecosystemOpen ? (
              <div className="absolute left-1/2 top-full mt-4 w-[22rem] -translate-x-1/2 rounded-sm border border-background/10 bg-ink p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
                {ECOSYSTEM_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setEcosystemOpen(false)}
                    className="block rounded-sm px-4 py-3 transition-colors hover:bg-background/5"
                  >
                    <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-background">{link.label}</span>
                    <span className="mt-0.5 block text-[0.75rem] text-background/55">{link.description}</span>
                  </a>
                ))}
                <div className="mt-1 border-t border-background/10 pt-2">
                  {COMING_SOON_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setEcosystemOpen(false)}
                      className="flex items-center justify-between rounded-sm px-4 py-2.5 text-sm text-background/50 transition-colors hover:bg-background/5 hover:text-background/80"
                    >
                      {link.label}
                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-luxury/70">Coming Soon</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {SECONDARY_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8rem] font-medium uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-gold-luxury"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/reserve"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-gold-luxury/70 bg-transparent px-6 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-gold-luxury hover:text-ink"
          >
            Book
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-background/30 text-background lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-background/10 bg-ink px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {MOBILE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-gold-luxury"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
