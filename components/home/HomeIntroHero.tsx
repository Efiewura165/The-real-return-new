"use client";

import { useState } from "react";

import { Hero } from "@/components/home/Hero";
import { WelcomeIntro } from "@/components/home/WelcomeIntro";

interface HeroSlide {
  src: string;
  alt: string;
  caption: string;
}

interface HomeIntroHeroProps {
  heroSlides: HeroSlide[];
  children?: React.ReactNode;
}

/**
 * Shares "is the welcome intro still on screen" state between the intro and
 * the Hero underneath, so the Hero's own caption stays hidden until the
 * intro is done rather than showing through and overlapping it.
 */
export function HomeIntroHero({ heroSlides, children }: HomeIntroHeroProps) {
  const [introActive, setIntroActive] = useState(true);

  return (
    <>
      <WelcomeIntro onActiveChange={setIntroActive} />
      {children}
      <Hero heroSlides={heroSlides} suppressCaption={introActive} />
    </>
  );
}
