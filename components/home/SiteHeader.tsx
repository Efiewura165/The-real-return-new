"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { NavDropdown } from "@/components/home/NavDropdown";
import { headerCtas, headerNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktopLabel, setOpenDesktopLabel] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<Set<string>>(new Set());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function toggleMobileSection(label: string) {
    setExpandedMobile((current) => {
      const next = new Set(current);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }

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
          {headerNav.map((parent) => (
            <NavDropdown
              key={parent.label}
              parent={parent}
              isOpen={openDesktopLabel === parent.label}
              onOpen={() => setOpenDesktopLabel(parent.label)}
              onClose={() => setOpenDesktopLabel((current) => (current === parent.label ? null : current))}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={headerCtas.account.href}
            className="hidden text-[0.72rem] font-medium uppercase tracking-[0.15em] text-background/60 transition-colors hover:text-background sm:inline-block"
          >
            {headerCtas.account.label}
          </a>
          <a
            href={headerCtas.secondary.href}
            className="hidden h-11 items-center justify-center rounded-sm border border-gold-luxury/70 bg-transparent px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-gold-luxury hover:text-ink md:inline-flex"
          >
            {headerCtas.secondary.label}
          </a>
          <a
            href={headerCtas.primary.href}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-gold-luxury px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02] sm:px-6"
          >
            {headerCtas.primary.label}
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
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink lg:hidden"
        >
          <div className="flex h-20 w-full shrink-0 items-center justify-between px-6 sm:px-10">
            <a href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 leading-none text-background">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-luxury/70 bg-ink/40">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold-luxury" aria-hidden="true">
                  <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                </svg>
              </span>
              <span className="font-sans text-lg font-extrabold uppercase tracking-[0.08em]">The Real Return™</span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-background/30 text-background"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Primary" className="flex-1 px-6 pb-6 sm:px-10">
          <div className="flex flex-col gap-1">
            {headerNav.map((parent) => {
              const isExpanded = expandedMobile.has(parent.label);
              const isPlaceholder = parent.items.length === 0;

              return (
                <div key={parent.label} className="border-b border-background/10 py-1 last:border-none">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleMobileSection(parent.label)}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-gold-luxury"
                  >
                    {parent.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isExpanded && "rotate-180")} aria-hidden="true" />
                  </button>
                  {isExpanded ? (
                    <div className="flex flex-col gap-1 pb-3 pl-2">
                      {isPlaceholder ? (
                        <p className="py-1.5 text-sm text-background/45">Content coming soon.</p>
                      ) : (
                        parent.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="py-1.5 text-sm text-background/65 transition-colors hover:text-gold-luxury"
                          >
                            {item.label}
                          </a>
                        ))
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={headerCtas.primary.href}
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-gold-luxury px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink"
            >
              {headerCtas.primary.label}
            </a>
            <a
              href={headerCtas.secondary.href}
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-sm border border-gold-luxury/70 px-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-background"
            >
              {headerCtas.secondary.label}
            </a>
            <a
              href={headerCtas.account.href}
              onClick={() => setMenuOpen(false)}
              className="py-1 text-center text-[0.72rem] font-medium uppercase tracking-[0.15em] text-background/60"
            >
              {headerCtas.account.label}
            </a>
          </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
