"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

const offerings = [
  {
    id: "01",
    title: "Heartfelt Weddings",
    desc: "Personalized catering that reflects your style and vision, ensuring every dish delights your guests on your most important day.",
  },
  {
    id: "02",
    title: "Healthy Buffets",
    desc: "Nutritious and delicious buffet options full of vibrant flavors that cater to various tastes and dietary needs without compromising elegance.",
  },
  {
    id: "03",
    title: "Corporate Events",
    desc: "Exceptional catering that impresses clients and colleagues alike. Elevate your business meetings and conferences with premium culinary service.",
  },
  {
    id: "04",
    title: "Social Gatherings",
    desc: "Delicious dishes that enhance every party, reunion, birthday, or bridal shower. We take care of the details so you can celebrate.",
  },
  {
    id: "05",
    title: "Themed Events",
    desc: "Creative themed catering meticulously tailored to match your event’s specific atmosphere and stylistic vision.",
  },
  {
    id: "06",
    title: "Seasonal Menus",
    desc: "We celebrate local ingredients and culinary trends, designing fresh, seasonal menus that capture the unique flavors of the time of year.",
  },
];

const CateringScreen = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="bg-ghost-cream min-h-screen pt-32 text-onyx-black relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* Navigation */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[10px] md:text-sm font-medium uppercase tracking-[0.2em] text-onyx-black/50 hover:text-gold transition-colors mb-8 md:mb-16"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        {/* Hero Section: Editorial Split */}
        <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-24 mb-32">
          {/* Giant Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-3/5"
          >
            <h1 className="text-[12vw] lg:text-[7rem] font-kaushan italic leading-[0.8] tracking-tighter text-onyx-black mb-12 mix-blend-difference relative z-10 w-[150%] pointer-events-none">
              <span className="block">Unforgettable</span>
              <span className="block pl-[10%] text-gold">Moments.</span>
            </h1>

            <p className="text-xl md:text-3xl font-light text-onyx-black/80 max-w-2xl leading-relaxed tracking-tight lg:pl-12 border-l border-gold/40">
              At Simmer Catering, we’re committed to delivering 5-star quality
              with every dish we prepare. We craft moments of pure joy, turning
              meals into memories.
            </p>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[60vh] lg:h-[80vh] rounded-[2rem] overflow-hidden sticky top-32 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('/fine-dining.png')] bg-cover bg-center" />
          </motion.div>
        </div>
      </div>

      {/* Large Edge-to-Edge Parallax Break */}
      <div
        ref={containerRef}
        className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden bg-onyx-black mt-32 mb-32"
      >
        <motion.div
          style={{ y: yImage }}
          className="absolute inset-[-20%] bg-[url('/dessert.png')] bg-cover bg-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-kaushan italic text-white/90 drop-shadow-2xl mix-blend-overlay uppercase">
            Excellence in <span className="text-gold">Every Bite</span>
          </h2>
        </div>
      </div>

      {/* Offerings: Large List Format */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl pb-40">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row justify-between items-baseline gap-8">
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tighter text-onyx-black lowercase">
            what we <span className="italic font-kaushan text-gold">offer</span>
          </h2>
          <p className="text-lg font-light text-onyx-black/60 max-w-md">
            From intimate weddings to large corporate buffets, discover how we
            bring your vision to life for every occasion.
          </p>
        </div>

        <div className="flex flex-col border-t border-onyx-black/10">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row py-12 border-b border-onyx-black/10 items-start md:items-center justify-between gap-8 hover:bg-white/50 transition-colors px-4 -mx-4 rounded-3xl"
            >
              <div className="flex items-baseline gap-6 md:w-1/2">
                <span className="text-sm font-medium text-gold tracking-widest">
                  {item.id}
                </span>
                <h3 className="text-3xl md:text-5xl font-kaushan italic text-onyx-black group-hover:-translate-y-2 transition-transform duration-500">
                  {item.title}
                </h3>
              </div>
              <p className="text-base font-light leading-relaxed text-onyx-black/70 md:w-5/12 ml-auto group-hover:text-onyx-black transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-onyx-black text-white hover:bg-gold hover:text-onyx-black text-sm uppercase tracking-widest font-bold transition-colors duration-500 shadow-xl group"
          >
            <span className="group-hover:scale-110 transition-transform duration-500">
              Book Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CateringScreen;
