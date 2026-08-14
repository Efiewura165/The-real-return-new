"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#story", label: "Story" },
  { href: "/#pillars", label: "Pillars" },
  { href: "/experiences", label: "Experiences" },
  { href: "/#academy", label: "Academy" },
  { href: "/#journey", label: "Journey" },
  { href: "/#invest", label: "Invest" },
  { href: "/#community", label: "Community" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className="border-t border-background/10 bg-ink px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
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
