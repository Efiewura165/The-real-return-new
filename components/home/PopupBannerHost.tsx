"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { PopupBanner } from "@/lib/sanity/popups";

interface PopupBannerHostProps {
  banners: PopupBanner[];
}

function matchesPage(banner: PopupBanner, pathname: string): boolean {
  if (banner.pages.length === 0) return true;
  return banner.pages.some((page) => (page === "/" ? pathname === "/" : pathname.startsWith(page)));
}

export function PopupBannerHost({ banners }: PopupBannerHostProps) {
  const pathname = usePathname() ?? "/";
  const [visible, setVisible] = useState(false);

  // Never show over checkout or the internal admin dashboard, regardless of what a banner's own page list says.
  const hardExcluded = pathname.startsWith("/reserve") || pathname.startsWith("/admin");
  const banner = hardExcluded ? undefined : banners.find((b) => matchesPage(b, pathname));

  useEffect(() => {
    if (!banner) {
      setVisible(false);
      return;
    }

    let hideTimer: ReturnType<typeof setTimeout>;
    let cycleTimer: ReturnType<typeof setInterval>;

    const showThenHide = () => {
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), banner.visibleDurationMs);
    };

    const showTimer = setTimeout(() => {
      showThenHide();
      cycleTimer = setInterval(showThenHide, banner.reappearIntervalMs);
    }, banner.firstShowDelayMs);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(cycleTimer);
    };
  }, [banner?.id, pathname]);

  if (!banner || !visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm animate-[cta-popup-in_0.4s_ease-out] overflow-hidden rounded-sm border border-gold-luxury/30 bg-ink shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] sm:w-96">
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Close"
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-background/80 transition-colors hover:bg-ink hover:text-background"
      >
        ×
      </button>
      <div className="relative h-36 w-full">
        <Image src={banner.image.src} alt={banner.image.alt} fill sizes="384px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-luxury">{banner.eyebrow}</p>
        <p className="mt-2 font-serif text-lg font-normal leading-snug text-background">{banner.message}</p>
        <Link
          href={banner.buttonLink}
          className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-sm bg-gold-luxury px-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:scale-[1.02]"
        >
          {banner.buttonLabel}
        </Link>
      </div>
    </div>
  );
}
