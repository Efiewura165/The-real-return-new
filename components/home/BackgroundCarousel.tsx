"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BackgroundCarouselImage {
  src: string;
  alt: string;
}

interface BackgroundCarouselProps {
  images: BackgroundCarouselImage[];
  intervalMs?: number;
}

/** Crossfading full-bleed image background, meant to sit behind a dark-overlay section's content. */
export function BackgroundCarousel({ images, intervalMs = 5500 }: BackgroundCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {images.map((image, i) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? undefined : "eager"}
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(1.25) saturate(1.1) contrast(1.02)" }}
          />
        </div>
      ))}
    </div>
  );
}
