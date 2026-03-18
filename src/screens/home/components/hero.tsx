"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Cloudinary base
const CLD_BASE = "https://res.cloudinary.com/dvjslohdt";
// LCP image — first-frame thumbnail of reel1 via Cloudinary video delivery.
// `video/upload` + `.jpg` extension + `so_0` = frame at second 0.
// This avoids a separate hero asset; the static placeholder is visually
// identical to the opening frame of the video that immediately follows it.
const LCP_BASE = `${CLD_BASE}/video/upload`;
const LCP_SRC = `${LCP_BASE}/f_auto,q_auto,so_0,w_828,c_fill,g_auto/simmer-restaurant/reel1.jpg`;
const LCP_SRCSET = [
  `${LCP_BASE}/f_auto,q_auto,so_0,w_640,c_fill,g_auto/simmer-restaurant/reel1.jpg 640w`,
  `${LCP_BASE}/f_auto,q_auto,so_0,w_828,c_fill,g_auto/simmer-restaurant/reel1.jpg 828w`,
  `${LCP_BASE}/f_auto,q_auto,so_0,w_1080,c_fill,g_auto/simmer-restaurant/reel1.jpg 1080w`,
  `${LCP_BASE}/f_auto,q_auto,so_0,w_1920,c_fill,g_auto/simmer-restaurant/reel1.jpg 1920w`,
].join(", ");

const getPoster = (index: number) =>
  VIDEOS[index]
    .replace(".mp4", ".jpg")
    .replace("/upload/", "/upload/f_auto,q_auto,so_0/");

const Hero = () => {
  // `current` = the video slot actively fading in / playing on top (z-[11])
  // `prev`    = the previously active slot kept in the DOM underneath (z-10)
  //            so there is always something visible during the 800 ms crossfade.
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Ref keeps goTo's closure stale-free inside setInterval without requiring
  // it to be an interval dependency (which would reset the timer every slide).
  const currentRef = useRef(0);

  const goTo = useCallback((next: number) => {
    if (next === currentRef.current) return;
    setPrev(currentRef.current);      // keep old slot visible beneath
    setCurrent(next);                 // mount new slot with fade-in CSS class
    currentRef.current = next;
  }, []);

  // LCP grace period — don't mount video until hero image has painted
  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Slide rotation
  useEffect(() => {
    if (!videoReady) return;
    const interval = setInterval(() => {
      goTo((currentRef.current + 1) % VIDEOS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [videoReady, goTo]);

  // Remove the previous slot from the DOM once the CSS crossfade is done
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 800);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <div className="relative h-screen min-h-[760px] md:min-h-screen w-full overflow-hidden">
      {/*
       * LCP IMAGE — plain <img> bypasses the /_next/image proxy entirely.
       * Cloudinary already delivers f_auto + q_auto; routing through
       * /_next/image adds ~2.7 s of element render delay for zero benefit.
       * fetchpriority="high" + the <link rel="preload"> in layout.tsx give
       * the browser the earliest possible signal to start the fetch.
       */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LCP_SRC}
        srcSet={LCP_SRCSET}
        sizes="100vw"
        alt="Simmer Restaurant — Refined dining in Jos"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/*
       * Two-slot video crossfade — CSS-only, no motion/react needed.
       *
       * SLOT A — previous (z-10): stays fully visible in the DOM while the
       *   new video fades in. Without this, React's key-based remount would
       *   cause an instant cut to the static hero image before the new video
       *   appears. After 800 ms (CSS animation duration), this slot is unmounted.
       *
       * SLOT B — current (z-[11]): a fresh div is created on each `goTo` call
       *   because `key={current}` changes. The new div starts at opacity:0
       *   (set by .hero-video-enter via animation-fill-mode) and fades to
       *   opacity:1 over 800 ms. Being above SLOT A in both z-index and DOM
       *   order, it visually replaces it smoothly.
       */}
      {videoReady && (
        <>
          {/* SLOT A — previous video: static underlay during crossfade */}
          {prev !== null && (
            <div className="absolute inset-0 z-10">
              <video
                src={VIDEOS[prev]}
                poster={getPoster(prev)}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                title="Simmer Restaurant Atmosphere"
              >
                <track kind="captions" />
              </video>
            </div>
          )}

          {/* SLOT B — current video: fades in on top via CSS */}
          <div key={current} className="absolute inset-0 z-[11] hero-video-enter">
            <video
              src={VIDEOS[current]}
              poster={getPoster(current)}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              title="Simmer Restaurant Atmosphere"
            >
              <track kind="captions" />
            </video>
          </div>
        </>
      )}

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/40 z-20" />

      {/* Hero content — left-weighted layout */}
      <div className="absolute bottom-24 md:bottom-2 left-0 right-0 container mx-auto px-6 lg:px-6 z-30">
        <div className="max-w-2xl">
          {/* Main heading — CSS fade-up, delay-1 (0.3 s) */}
          <h1 className="hero-animate hero-delay-1 text-5xl font-medium text-white leading-[1.1] tracking-tight mb-6 md:text-6xl">
            Refined Flavours,
            <br />
            <span className="font-kaushan italic font-normal inline-block pr-4">
              Simm3red
            </span>{" "}
            to Perfection
          </h1>

          {/* Subtitle — CSS fade-up, delay-2 (0.45 s) */}
          <p className="hero-animate hero-delay-2 text-base text-[#C4C8C9] font-sans tracking-wide leading-relaxed max-w-lg mb-8">
            Born of Plateau soil and Nigeria&apos;s bold Northern spirit, we
            craft a global culinary experience that transcends borders. Heritage
            refined with world-class flair.
          </p>

          {/* CTA — CSS fade-up, delay-3 (0.6 s) */}
          <div className="hero-animate hero-delay-3 mt-8">
            <button
              className="relative text-xs cursor-pointer uppercase tracking-[0.25em] text-white border border-gold bg-gold px-8 py-3.5 overflow-hidden group transition-colors duration-500 hover:text-onyx-black"
              id="hero-reserve-button"
              onClick={() => {
                document
                  .getElementById("reservation-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative">Reserve Your Table</span>
            </button>
          </div>

          {/* Slide indicators — CSS fade-up, delay-4 (0.75 s) */}
          <div className="hero-animate hero-delay-4 mt-6 flex gap-2">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                id={`hero-slide-indicator-${i}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-10 px-1 flex items-center cursor-pointer group"
              >
                <div
                  className={`h-[2px] transition-all duration-500 ease-in-out ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-4 bg-white/40 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const VIDEOS = [
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel1.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel2.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel3.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel4.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel5.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel6.mp4",
];
