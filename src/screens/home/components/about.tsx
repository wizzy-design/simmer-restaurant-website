"use client";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="py-24 bg-onyx-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Proper Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4 order-2 lg:order-1">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 * idx }}
              className={`relative overflow-hidden group rounded-md border bg-white/2 break-inside-avoid shadow-2xl ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Right: Editorial Content */}
        <div className="flex flex-col gap-10 order-1 lg:order-2">
          <motion.div {...fadeUp}>
            <h2 className="text-5xl md:text-6xl font-kaushan italic text-white leading-[1.1]">
              A Symphony of African & <br />
              <span className="text-gold not-italic font-sans font-light tracking-tight">
                International Flavours
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-col gap-8 max-w-lg"
          >
            <p className="text-[#C4C8C9] text-base leading-relaxed font-sans font-light">
              At Simmer restaurant, we&apos;re committed to delighting your
              taste buds with mouthwatering dishes. Whether you&apos;re craving
              the bold flavors of African spices or the comforting tastes of
              your international favorites, we&apos;ve got it all. Let&apos;s
              make your dining experience unforgettable!
            </p>
            <p className="text-[#C4C8C9] text-base leading-relaxed font-sans font-light">
              From savory to sweet, our menu has something special for everyone.
              Come and find your new favorites!
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="pt-4"
          >
            <button className="relative group overflow-hidden border border-gold/30 px-10 py-4 transition-all duration-500 hover:border-gold">
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative text-gold group-hover:text-onyx-black text-xs uppercase tracking-[0.3em] font-medium transition-colors duration-500">
                Explore Menu
              </span>
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

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};
