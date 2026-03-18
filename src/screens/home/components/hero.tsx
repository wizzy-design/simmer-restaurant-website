"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fadeUpAnimate } from "../../../lib/animations";

// Cloudinary base
const CLD_BASE = "https://res.cloudinary.com/dvjslohdt";
const LCP_IMAGE = `${CLD_BASE}/image/upload/f_auto,q_auto,w_828/simmer-restaurant/hero`;

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // FIX 1 — Don't mount video until after LCP image has had time to paint.
  // 1 500 ms gives the browser a full render cycle to commit the <Image> as
  // the LCP element before the video takes over z-index 10.
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const lcpGrace = setTimeout(() => setVideoReady(true), 1500);
    return () => clearTimeout(lcpGrace);
  }, []);

  // Slide rotation — only starts after video is mounted
  useEffect(() => {
    if (!videoReady) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VIDEOS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [videoReady]);

  const currentPoster = VIDEOS[current]
    .replace(".mp4", ".jpg")
    .replace("/upload/", "/upload/f_auto,q_auto,so_0/");

  return (
    <div className="relative h-screen min-h-[760px] w-full overflow-hidden">
      {/*
       * FIX 2 — Next.js <Image priority> replaces the bare <img>.
       * `priority` automatically:
       *   • sets fetchPriority="high" on the element
       *   • injects <link rel="preload"> into <head> at SSR time
       *   • disables lazy loading
       * Combined with the manual <link> in layout.tsx this gives the
       * browser the earliest possible signal to fetch the hero image.
       */}
      <Image
        src={LCP_IMAGE}
        alt="Simmer Restaurant — Refined dining in Jos"
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />

      {/* FIX 3 — Video is withheld for 1 500 ms so the LCP image paints first */}
      {videoReady && (
        <AnimatePresence>
          <motion.div
            key={VIDEOS[current]}
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <video
              src={VIDEOS[current]}
              poster={currentPoster}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              title="Simmer Restaurant Atmosphere"
            >
              <track kind="captions" />
            </video>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/40 z-20" />

      {/* Hero content — left-weighted layout */}
      <div className="absolute bottom-24 md:bottom-2 left-0 right-0 container mx-auto px-6 lg:px-6 z-30">
        {/* Left: Brand + tagline */}
        <div className="max-w-2xl">
          {/* Main heading */}
          <motion.h1
            {...fadeUpAnimate(0.3)}
            className="text-5xl font-medium text-white leading-[1.1] tracking-tight mb-6 md:text-6xl"
          >
            Refined Flavours,
            <br />
            <span className="font-kaushan italic font-normal inline-block pr-4">
              Simm3red
            </span>{" "}
            to Perfection
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUpAnimate(0.45)}
            className="text-base text-[#C4C8C9] font-sans tracking-wide leading-relaxed max-w-lg mb-8"
          >
            Born of Plateau soil and Nigeria's bold Northern spirit, we craft a
            global culinary experience that transcends borders. Heritage refined
            with world-class flair.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUpAnimate(0.6)} className="mt-8">
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
          </motion.div>

          {/* Slide indicators */}
          <motion.div {...fadeUpAnimate(0.75)} className="mt-6 flex gap-2">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                id={`hero-slide-indicator-${i}`}
                onClick={() => setCurrent(i)}
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
          </motion.div>
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
