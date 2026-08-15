"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { heroSlides } from "@/content/site";
import { LUXURY_AMBIENCE_VIDEOS, LUXURY_AMBIENCE_CAPTIONS } from "@/lib/luxury-videos";
import { VideoCarousel } from "@/components/experiences/VideoCarousel";

const AUTO_ADVANCE_MS = 6500;
const VIDEO_SLIDE_MS = 5000;
const VIDEO_INTRO_MS = VIDEO_SLIDE_MS * LUXURY_AMBIENCE_VIDEOS.length;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const caption = showVideo ? LUXURY_AMBIENCE_CAPTIONS[videoIndex] : heroSlides[index].caption;
  const captionKey = showVideo ? `video-${videoIndex}` : `photo-${index}`;
  const captionDurationMs = showVideo ? VIDEO_SLIDE_MS : AUTO_ADVANCE_MS;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowVideo(false), VIDEO_INTRO_MS);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <div className="absolute inset-0 transition-opacity duration-[1400ms] ease-out" style={{ opacity: showVideo ? 1 : 0 }} aria-hidden={!showVideo}>
        <VideoCarousel
          videos={LUXURY_AMBIENCE_VIDEOS}
          intervalMs={VIDEO_SLIDE_MS}
          className="h-full w-full object-cover"
          onIndexChange={setVideoIndex}
        />
      </div>

      <div className="absolute inset-0 transition-opacity duration-[1400ms] ease-out" style={{ opacity: showVideo ? 0 : 1 }} aria-hidden={showVideo}>
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/18 to-ink/5" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 pt-40 sm:px-10 sm:pb-32">
        <p
          key={captionKey}
          className="max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-background [text-shadow:0_6px_30px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl"
          style={{ animation: `caption-splash ${captionDurationMs}ms ease-in-out forwards` }}
        >
          {caption}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/reserve"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
          >
            Begin Your Journey
          </a>
          <a
            href="#story"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-background/40 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:border-background"
          >
            Our Story
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 right-6 z-10 flex gap-2 transition-opacity duration-[1400ms] ease-out sm:right-10"
        style={{ opacity: showVideo ? 0 : 1 }}
      >
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-gold-luxury" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
