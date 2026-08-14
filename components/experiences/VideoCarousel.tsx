"use client";

import { useEffect, useRef, useState } from "react";

interface VideoCarouselProps {
  videos: string[];
  startIndex?: number;
  intervalMs?: number;
  className?: string;
}

const FADE_MS = 500;

export function VideoCarousel({ videos, startIndex = 0, intervalMs = 8000, className }: VideoCarouselProps) {
  const [index, setIndex] = useState(startIndex % videos.length);
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videos.length <= 1) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((current) => (current + 1) % videos.length);
        setVisible(true);
      }, FADE_MS);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [videos.length, intervalMs]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [index]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${FADE_MS}ms ease-out`,
        filter: "brightness(1.22) saturate(1.08) contrast(1.02)",
      }}
    >
      <source src={videos[index]} type="video/mp4" />
    </video>
  );
}
