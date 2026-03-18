"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const Hero = () => {
  // Two-slot crossfade: `current` fades in on top (z-[11]), `prev` stays
  // visible underneath (z-10) for the 800 ms duration, then unmounts.
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Ref lets the interval always read the latest index without being a dep.
  const currentRef = useRef(0);

  const goTo = useCallback((next: number) => {
    if (next === currentRef.current) return;
    setPrev(currentRef.current);
    setCurrent(next);
    currentRef.current = next;
  }, []);

  // Grace period: wait 1.5 s after mount so the LCP <img> can paint first.
  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Rotate slides every 7 s once the video layer is ready.
  useEffect(() => {
    if (!videoReady) return;
    const id = setInterval(
      () => goTo((currentRef.current + 1) % VIDEOS.length),
      7000,
    );
    return () => clearInterval(id);
  }, [videoReady, goTo]);

  // Drop the previous slot after the CSS crossfade completes (800 ms).
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 800);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <div className="relative h-screen min-h-[760px] md:min-h-screen w-full overflow-hidden">
      {/* LCP image — plain <img> skips the /_next/image proxy; preload hint in layout.tsx */}
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

      {videoReady && (
        <>
          {/* Slot A — previous video: underlayer during crossfade */}
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

          {/* Slot B — current video: key change triggers hero-video-enter CSS animation */}
          <div
            key={current}
            className="absolute inset-0 z-[11] hero-video-enter"
          >
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/40 z-20" />

      {/* Content */}
      <div className="absolute bottom-24 md:bottom-2 left-0 right-0 container mx-auto px-6 lg:px-6 z-30">
        <div className="max-w-2xl">
          <h1 className="hero-animate hero-delay-1 text-5xl font-medium text-white leading-[1.1] tracking-tight mb-6 md:text-6xl">
            Refined Flavours,
            <br />
            <span className="font-kaushan italic font-normal inline-block pr-4">
              Simm3red
            </span>{" "}
            to Perfection
          </h1>

          <p className="hero-animate hero-delay-2 text-base text-[#C4C8C9] font-sans tracking-wide leading-relaxed max-w-lg mb-8">
            Born of Plateau soil and Nigeria&apos;s bold Northern spirit, we
            craft a global culinary experience that transcends borders. Heritage
            refined with world-class flair.
          </p>

          <div className="hero-animate hero-delay-3 mt-8">
            <button
              id="hero-reserve-button"
              className="relative text-xs cursor-pointer uppercase tracking-[0.25em] text-white border border-gold bg-gold px-8 py-3.5 overflow-hidden group transition-colors duration-500 hover:text-onyx-black"
              onClick={() =>
                document
                  .getElementById("reservation-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative">Reserve Your Table</span>
            </button>
          </div>

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

const CLD_VIDEO = "https://res.cloudinary.com/dvjslohdt/video/upload";

// LCP image — frame 0 of reel1 served directly from Cloudinary.
// Using video/upload + .jpg + so_0 avoids a separate hero image asset and
// ensures the static placeholder is visually identical to the first video.
const LCP_SRC = `${CLD_VIDEO}/f_auto,q_auto,so_0,w_828,c_fill,g_auto/simmer-restaurant/reel1.jpg`;
const LCP_SRCSET = [
  `${CLD_VIDEO}/f_auto,q_auto,so_0,w_640,c_fill,g_auto/simmer-restaurant/reel1.jpg 640w`,
  `${CLD_VIDEO}/f_auto,q_auto,so_0,w_828,c_fill,g_auto/simmer-restaurant/reel1.jpg 828w`,
  `${CLD_VIDEO}/f_auto,q_auto,so_0,w_1080,c_fill,g_auto/simmer-restaurant/reel1.jpg 1080w`,
  `${CLD_VIDEO}/f_auto,q_auto,so_0,w_1920,c_fill,g_auto/simmer-restaurant/reel1.jpg 1920w`,
].join(", ");

const getPoster = (index: number) =>
  VIDEOS[index]
    .replace(".mp4", ".jpg")
    .replace("/upload/", "/upload/f_auto,q_auto,so_0/");

const VIDEOS = [
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel1.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel2.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel3.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel4.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel5.mp4",
  "https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/reel6.mp4",
];
