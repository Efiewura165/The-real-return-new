"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MESSAGE_DURATION_MS = 3400;

type Stage = "welcome" | "detty" | "done";

/**
 * A full-screen, two-beat intro that plays once per homepage visit: a bold
 * welcome line, then a Detty December call-to-action, each sliding in and
 * back out via the same caption-splash animation the hero captions use.
 */
export function WelcomeIntro() {
  const [stage, setStage] = useState<Stage>("welcome");

  useEffect(() => {
    if (stage === "done") return;
    const timer = setTimeout(() => {
      setStage((current) => (current === "welcome" ? "detty" : "done"));
    }, MESSAGE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (stage === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  useEffect(() => {
    if (stage === "done") return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setStage("done");
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [stage]);

  if (stage === "done") return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Welcome" className="fixed inset-0 z-[80] flex items-center justify-center bg-ink px-6 text-center">
      <button
        type="button"
        onClick={() => setStage("done")}
        aria-label="Skip introduction"
        className="absolute right-6 top-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background/50 transition-colors hover:text-background"
      >
        Skip
      </button>

      {stage === "welcome" ? (
        <p
          key="welcome"
          style={{ animation: `caption-splash ${MESSAGE_DURATION_MS}ms ease-in-out forwards` }}
          className="max-w-3xl font-serif text-4xl font-medium italic leading-tight text-background sm:text-6xl"
        >
          Akwaaba. You&apos;re Home.
        </p>
      ) : (
        <div key="detty" style={{ animation: `caption-splash ${MESSAGE_DURATION_MS}ms ease-in-out forwards` }} className="max-w-2xl">
          <p className="font-serif text-4xl font-medium italic leading-tight text-background sm:text-6xl">
            Ghana Comes Alive This December.
          </p>
          <p className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-purple-luxury">
            Beaches · Beats · Homecoming
          </p>
          <Link
            href="/reserve"
            onClick={() => setStage("done")}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-purple-luxury px-8 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
          >
            Reserve Your Detty December
          </Link>
        </div>
      )}
    </div>
  );
}
