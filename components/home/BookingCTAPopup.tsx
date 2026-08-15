"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FIRST_SHOW_DELAY_MS = 6000;
const VISIBLE_DURATION_MS = 18000;
const REAPPEAR_INTERVAL_MS = 45000;

export function BookingCTAPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const hidden = pathname?.startsWith("/reserve") || pathname?.startsWith("/admin");

  useEffect(() => {
    if (hidden) {
      setVisible(false);
      return;
    }

    let hideTimer: ReturnType<typeof setTimeout>;
    let cycleTimer: ReturnType<typeof setInterval>;

    const showThenHide = () => {
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), VISIBLE_DURATION_MS);
    };

    const showTimer = setTimeout(() => {
      showThenHide();
      cycleTimer = setInterval(showThenHide, REAPPEAR_INTERVAL_MS);
    }, FIRST_SHOW_DELAY_MS);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(cycleTimer);
    };
  }, [hidden]);

  if (hidden || !visible) return null;

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
        <Image
          src="/images/stock/ghana-water-welcome-smile.jpg"
          alt="A smiling Ghanaian woman in traditional dress, welcoming guests with a warm Akwaaba spirit"
          fill
          sizes="384px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-luxury">The Real Return™</p>
        <p className="mt-2 font-serif text-lg font-normal leading-snug text-background">
          You are at the Right Spot Where Luxury meets Adventure
        </p>
        <Link
          href="/reserve"
          className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-sm bg-gold-luxury px-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:scale-[1.02]"
        >
          Book Now For Our Next Exciting Destination Package
        </Link>
      </div>
    </div>
  );
}
