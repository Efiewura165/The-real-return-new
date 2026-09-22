"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MESSAGE_DURATION_MS = 11200;

type Stage = "welcome" | "detty" | "done";

/**
 * A full-screen, two-beat intro that plays once per homepage visit: a bold
 * welcome line, then a Detty December call-to-action. Each zooms in from the
 * right, holds centered for ~10s, then fades — background stays transparent
 * so the hero shows through underneath.
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
    <div role="dialog" aria-modal="true" aria-label="Welcome" className="fixed inset-0 z-[80] flex items-center justify-center px-6 text-center">
      <button
        type="button"
        onClick={() => setStage("done")}
        aria-label="Skip introduction"
        className="absolute right-6 top-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/70 [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] transition-colors hover:text-white"
      >
        Skip
      </button>

      {stage === "welcome" ? (
        <p
          key="welcome"
          style={{ animation: `zoom-in-right-hold ${MESSAGE_DURATION_MS}ms ease-out forwards` }}
          className="max-w-3xl font-serif text-5xl font-medium italic leading-tight text-white [text-shadow:0_6px_30px_rgba(0,0,0,0.6)] sm:text-7xl"
        >
          Akwaaba. You&apos;re Home.
        </p>
      ) : (
        <div
          key="detty"
          style={{ animation: `zoom-in-right-hold ${MESSAGE_DURATION_MS}ms ease-out forwards` }}
          className="max-w-2xl"
        >
          <p className="font-serif text-4xl font-medium italic leading-tight text-white [text-shadow:0_6px_30px_rgba(0,0,0,0.6)] sm:text-6xl">
            Ghana Comes Alive This December.
          </p>
          <p className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-purple-luxury [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
            Beaches · Beats · Homecoming
          </p>
          <Link
            href="/reserve"
            onClick={() => setStage("done")}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-purple-luxury px-8 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02]"
          >
            Reserve Your Detty December
          </Link>
        </div>
      )}
    </div>
  );
}
