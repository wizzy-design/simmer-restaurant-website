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
