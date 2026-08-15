"use client";

import { useEffect, useRef, useState } from "react";

interface VideoCarouselProps {
  videos: string[];
  startIndex?: number;
  intervalMs?: number;
  className?: string;
  onIndexChange?: (index: number) => void;
}

const FADE_MS = 900;
const READY_FALLBACK_MS = 1000;

export function VideoCarousel({ videos, startIndex = 0, intervalMs = 8000, className, onIndexChange }: VideoCarouselProps) {
  const start = startIndex % videos.length;
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const activeLayerRef = useRef<0 | 1>(0);
  const currentIndexRef = useRef(start);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null]);

  useEffect(() => {
    activeLayerRef.current = activeLayer;
  }, [activeLayer]);

  useEffect(() => {
    const first = videoRefs.current[0];
    if (first) {
      first.src = videos[start];
      first.load();
      first.play().catch(() => {});
    }
    onIndexChange?.(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (videos.length <= 1) return;

    const timer = setInterval(() => {
      const inactiveLayer: 0 | 1 = activeLayerRef.current === 0 ? 1 : 0;
      const nextIndex = (currentIndexRef.current + 1) % videos.length;
      const video = videoRefs.current[inactiveLayer];
      if (!video) return;

      video.src = videos[nextIndex];
      video.load();
      video.play().catch(() => {});

      let fallback: ReturnType<typeof setTimeout>;
      const reveal = () => {
        currentIndexRef.current = nextIndex;
        setActiveLayer(inactiveLayer);
        onIndexChange?.(nextIndex);
        clearTimeout(fallback);
      };
      video.addEventListener("loadeddata", reveal, { once: true });
      fallback = setTimeout(reveal, READY_FALLBACK_MS);
    }, intervalMs);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos, intervalMs]);

  return (
    <>
      {[0, 1].map((layer) => (
        <video
          key={layer}
          ref={(el) => {
            videoRefs.current[layer] = el;
          }}
          autoPlay
          muted
          loop
          playsInline
          className={className}
          style={{
            position: "absolute",
            inset: 0,
            opacity: activeLayer === layer ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            filter: "brightness(1.22) saturate(1.08) contrast(1.02)",
          }}
        />
      ))}
    </>
  );
}
