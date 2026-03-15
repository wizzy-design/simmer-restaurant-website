"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp } from "../../../lib/animations";
import { cn } from "../../../lib/utils";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAutoPlaying = useRef(true);

  // Auto-play logic for mobile/tablet
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoPlaying.current || !scrollRef.current || window.innerWidth >= 1024) return;

      const container = scrollRef.current;
      const children = container.children;
      if (children.length === 0) return;

      const firstItem = children[0] as HTMLElement;
      const itemWidth = firstItem.offsetWidth;
      const gap = 16; // gap-4

      const nextIndex = (activeIndex + 1) % images.length;
      
      container.scrollTo({
        left: nextIndex * (itemWidth + gap),
        behavior: "smooth",
      });
      
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Sync index on manual scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const children = container.children;
    if (children.length === 0) return;

    const firstItem = children[0] as HTMLElement;
    const itemWidth = firstItem.offsetWidth;
    const gap = 16;
    
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / (itemWidth + gap));
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < images.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-24 bg-onyx-black overflow-hidden border-t border-white/5 px-6 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Images: Masonry on Desktop, Horizontal Auto-scroll on Mobile */}
        <div className="order-2 lg:order-1 relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={() => (isAutoPlaying.current = false)}
            onTouchEnd={() => (isAutoPlaying.current = true)}
            onMouseDown={() => (isAutoPlaying.current = false)}
            onMouseUp={() => (isAutoPlaying.current = true)}
            className="flex lg:block lg:columns-2 gap-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 lg:pb-0 lg:space-y-4"
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 * idx }}
                className={cn(
                  "relative shrink-0 w-[80vw] sm:w-[50vw] lg:w-full snap-center overflow-hidden group rounded-md border border-white/5 bg-white/2 shadow-2xl transition-all duration-500",
                  img.aspect,
                  "lg:break-inside-avoid"
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
          
          {/* Subtle Mobile Hint: Active Dot Indicator */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  i === activeIndex ? "w-4 bg-gold" : "w-1 bg-white/20"
                )} 
              />
            ))}
          </div>
        </div>

        {/* Right: Editorial Content */}
        <div className="flex flex-col gap-8 lg:gap-10 order-1 lg:order-2">
          <motion.div {...fadeUp}>
            <h2 className="text-5xl md:text-6xl font-kaushan italic text-white leading-[1.1]">
              About Our
              <br />
              <span className="text-gold not-italic font-sans font-light tracking-tight">
                Restaurant
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-col gap-8 max-w-lg"
          >
            <p className="text-[#C4C8C9] text-base leading-relaxed font-sans font-light">
              Founded six years ago as Sweet November Bistro,{" "}
              <span className="text-white font-medium">Simm3r Restaurant </span>
              is the evolution of our dedication to exceptional cuisine. <br />
              <br />
              In 2024, we opened our permanent home in Rayfield, Jos, a
              sophisticated space designed to blend our rich culinary heritage
              with modern refinement.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp} className="mt-8">
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
              <span className="relative">Our Story</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

const images = [
  { src: "/cafe.png", alt: "Cafe ambiance", aspect: "aspect-[4/5]" },
  { src: "/desk.png", alt: "Reception desk", aspect: "aspect-[5/4]" },
  { src: "/dine.png", alt: "Dining area", aspect: "aspect-square" },
  { src: "/mural.png", alt: "Artistic mural", aspect: "aspect-[3/4]" },
  { src: "/outside.png", alt: "Exterior view", aspect: "aspect-[16/16]" },
  { src: "/painting.png", alt: "Interior decor", aspect: "aspect-[4/3]" },
];
