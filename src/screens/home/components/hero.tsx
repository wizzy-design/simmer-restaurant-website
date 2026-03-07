"use client";

import { MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { restaurantConfig } from "../../../config/restaurant";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero2.png"
        alt="Simm3r Restaurant ambiance"
        fill
        className="object-cover"
        priority
      />

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero content — left-weighted layout */}
      <div className="absolute bottom-12 left-0 right-0 mx-auto container flex items-end justify-between gap-12">
        {/* Left: Brand + tagline */}
        <div className="max-w-2xl">
          {/* Main heading */}
          <motion.h1
            {...fadeUp(0.3)}
            className="text-7xl md:text-8xl font-medium text-white leading-[1.1] tracking-wide mb-4"
          >
            <span className="font-kaushan text-white italic">Simm3r</span>
            <br />
            Restaurant
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-sm text-[#C4C8C9] font-sans tracking-wide leading-relaxed max-w-md"
          >
            The ultimate culinary destination on the plateau.
            <br />A unique blend of African and international flavours.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.6)} className="mt-8">
            <button className="relative text-xs uppercase tracking-[0.25em] text-white border border-gold bg-gold px-8 py-3.5 overflow-hidden group transition-colors duration-500 hover:text-onyx-black">
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative">Reserve Your Table</span>
            </button>
          </motion.div>
        </div>

        {/* Right: Social Proof & Trust Card */}
        <motion.div {...fadeUp(0.55)} className="hidden lg:block mb-4">
          <div className="bg-onyx-black px-8 py-10 shadow-[40px_40px_80px_rgba(0,0,0,0.8)] border-l-[3px] border-gold relative overflow-hidden group min-w-[300px]">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -translate-y-16 translate-x-16 pointer-events-none" />

            <div className="relative z-10 space-y-7">
              {/* Rating Section */}
              <div className="space-y-3">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i === 4 ? "opacity-40" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-[10px] font-bold text-ghost-cream tracking-widest">
                    4.3
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] uppercase tracking-[0.3em] font-bold text-gold/60">
                    Google Reviews
                  </span>
                  <a
                    href="https://share.google/50bbOUm7OqUJDuA2Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[11px] text-white/50 hover:text-white transition-colors duration-300"
                  >
                    Based on 77 verified reviews
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/10" />

              {/* Location Section */}
              <div className="flex gap-4 group/loc">
                <div className="text-gold mt-1 group-hover/loc:scale-110 transition-transform duration-500">
                  <MapPinned size={15} />
                </div>
                <div className="space-y-1.5">
                  <span className="block text-[9px] uppercase tracking-[0.3em] font-bold text-gold/60">
                    Location
                  </span>
                  <a
                    href={restaurantConfig.contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-ghost-cream font-medium leading-relaxed max-w-[180px] hover:text-gold transition-colors duration-300"
                  >
                    {restaurantConfig.contact.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const contactInfo = [
  {
    icon: <MapPinned size={14} />,
    text: restaurantConfig.contact.address,
    href: restaurantConfig.contact.mapUrl,
  },
  {
    icon: <Phone size={14} />,
    text: restaurantConfig.contact.phone,
    href: `tel:${restaurantConfig.contact.phoneRaw}`,
  },
];
