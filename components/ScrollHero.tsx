"use client";

import { useEffect, useMemo, useState } from "react";

function fadeWindow(progress: number, start: number, end: number) {
  if (progress <= start || progress >= end) return 0;
  const midpoint = (start + end) / 2;
  if (progress <= midpoint) return (progress - start) / (midpoint - start);
  return 1 - (progress - midpoint) / (end - midpoint);
}

export function ScrollHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 1.85;
      const nextProgress = Math.min(window.scrollY / heroHeight, 1);
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = useMemo(() => {
    const scale = 1 + progress * 0.12;
    const videoY = progress * -32;
    const overlayDarkness = Math.min(Math.max((progress - 0.1) / 0.45, 0), 1);
    const titleOneOpacity = fadeWindow(progress, 0.16, 0.58);
    const titleTwoOpacity = fadeWindow(progress, 0.5, 0.9);

    return {
      media: {
        transform: `scale(${scale}) translateY(${videoY}px)`,
      },
      dark: {
        opacity: 0.32 + overlayDarkness * 0.56,
      },
      titleOne: {
        opacity: titleOneOpacity,
        transform: `translateY(${18 - titleOneOpacity * 18}px)`,
      },
      titleTwo: {
        opacity: titleTwoOpacity,
        transform: `translateY(${18 - titleTwoOpacity * 18}px)`,
      },
      scroll: {
        opacity: Math.max(1 - progress * 2, 0),
      },
    };
  }, [progress]);

  return (
    <section className="scroll-hero-shell luxe-hero-shell v8-hero-shell">
      <div className="scroll-hero-sticky luxe-hero-sticky v8-hero-sticky">
        <div className="scroll-hero-media scroll-hero-video-wrap luxe-hero-media" style={styles.media}>
          <video
            className="scroll-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/race-poster.jpg"
          >
            <source src="/race-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="scroll-hero-vignette luxe-vignette" style={styles.dark} />
        <div className="luxe-grain" />
        <div className="luxe-frame" />

        <div className="v8-text-layer">
          <div className="v8-title-block" style={styles.titleOne}>
            <p className="v8-eyebrow">EasyLoc</p>
            <h1>Avec EasyLoc, la location en toute simplicité.</h1>
          </div>

          <div className="v8-title-block v8-title-block-secondary" style={styles.titleTwo}>
            <p className="v8-eyebrow">Votre parcours</p>
            <h2>Choisissez, réservez et roulez.</h2>
          </div>
        </div>

        <div className="scroll-indicator luxe-scroll-indicator" style={styles.scroll}>
          <span />
        </div>
      </div>
    </section>
  );
}
