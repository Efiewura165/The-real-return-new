"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const dismissedRef = useRef(false);
  // Tracks which image each banner showed last, so a banner with several
  // images cycles through them (a different one each time it appears)
  // instead of always showing the first.
  const imageRotationRef = useRef<Record<string, number>>({});

  // Never show over checkout or the internal admin dashboard, regardless of what a banner's own page list says.
  const hardExcluded = pathname.startsWith("/reserve") || pathname.startsWith("/admin");
  const matchingBanners = hardExcluded ? [] : banners.filter((b) => matchesPage(b, pathname));
  const matchingIds = matchingBanners.map((b) => b.id).join(",");

  useEffect(() => {
    dismissedRef.current = false;

    if (matchingBanners.length === 0) {
      setVisible(false);
      return;
    }

    // Rotates through every banner that matches this page, one at a time,
    // instead of only ever showing the first match.
    let rotation = 0;
    let hideTimer: ReturnType<typeof setTimeout>;
    let cycleTimer: ReturnType<typeof setInterval>;

    const showThenHide = () => {
      if (dismissedRef.current) return;
      const index = rotation % matchingBanners.length;
      const current = matchingBanners[index];
      const imageIndex = (imageRotationRef.current[current.id] ?? 0) % current.images.length;
      imageRotationRef.current[current.id] = imageIndex + 1;

      setActiveIndex(index);
      setActiveImage(current.images[imageIndex]);
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        rotation += 1;
      }, current.visibleDurationMs);
    };

    const first = matchingBanners[0];
    const showTimer = setTimeout(() => {
      showThenHide();
      cycleTimer = setInterval(showThenHide, first.reappearIntervalMs);
    }, first.firstShowDelayMs);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(cycleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchingIds, pathname]);

  const banner = matchingBanners[activeIndex];
  if (!banner || !visible || !activeImage) return null;

  function dismiss() {
    dismissedRef.current = true;
    setVisible(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm animate-[cta-popup-in_0.4s_ease-out] overflow-hidden rounded-sm border border-purple-luxury/30 bg-ink shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] sm:w-96">
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close"
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-background/80 transition-colors hover:bg-ink hover:text-background"
      >
        ×
      </button>
      <div className="relative h-56 w-full">
        <Image src={activeImage.src} alt={activeImage.alt} fill sizes="384px" className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-purple-luxury">{banner.eyebrow}</p>
        <p className="mt-2 font-serif text-lg font-normal leading-snug text-background">{banner.message}</p>
        <Link
          href={banner.buttonLink}
          className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-sm bg-purple-luxury px-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:scale-[1.02]"
        >
          {banner.buttonLabel}
        </Link>
      </div>
    </div>
  );
}
