"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Instagram } from "lucide-react";

const modules = [
  {
    id: "01",
    title: "Artisan Bread Making",
    desc: "Master the craft of baking fresh, crusty bread with satisfying techniques. We break down the fermentation process to its core.",
  },
  {
    id: "02",
    title: "Cookies & Confections",
    desc: "Unleash your creativity and decorate stunning bespoke cookies. Learn the precise temperatures required for sugar perfection.",
  },
  {
    id: "03",
    title: "Classic Cakes & Desserts",
    desc: "Bake stunning cakes for birthdays, weddings, and special celebrations using classic French entremet structures.",
  },
  {
    id: "04",
    title: "Candy Handling & Chocolate",
    desc: "Dive into candy making and learn to temper and mold chocolates into glossy, snapping masterpieces.",
  },
  {
    id: "05",
    title: "Pies & Advanced Tarts",
    desc: "Learn the essentials to craft buttery, perfect pie crusts and elegant tarts that resist the dreaded soggy bottom.",
  },
  {
    id: "06",
    title: "Business & Catering",
    desc: "Turn your passion into profit with our pastry business modules. Scaling recipes for hundreds effortlessly.",
  },
];

const MarqueeRow = ({ text }: { text: string }) => {
  return (
    <div className="flex w-[200%] overflow-hidden bg-gold py-4 -rotate-2 select-none z-20 relative mix-blend-difference">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex whitespace-nowrap"
      >
        <span className="text-xl md:text-3xl font-sans font-bold uppercase tracking-widest text-onyx-black px-4">
          {text}
        </span>
        <span className="text-xl md:text-3xl font-sans font-bold uppercase tracking-widest text-onyx-black px-4">
          {text}
        </span>
      </motion.div>
    </div>
  );
};

const CulinarySchoolScreen = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="bg-onyx-black min-h-screen pt-32 text-white relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 mb-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] md:text-sm font-medium uppercase tracking-[0.2em] text-[#C4C8C9] hover:text-gold transition-colors mb-20 md:mb-32 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />{" "}
          Back to Home
        </Link>

        {/* Cinematic Hero */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[50vh] lg:h-[75vh] rounded-[3rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/dessert.png')] bg-cover bg-center transition-transform hover:scale-110 duration-[2s]" />
            <div className="absolute inset-0 bg-onyx-black/30" />
            <div className="absolute bottom-10 left-10 max-w-xs">
              <p className="font-kaushan italic text-white text-2xl md:text-4xl leading-tight opacity-90">
                "Love is the secret ingredient"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-white/10 relative">
              <span className="block translate-x-12">Culinary</span>
              <span className="block text-white">Mastery.</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-gold to-white translate-x-8">
                Academy.
              </span>
            </h1>
            <p className="text-lg md:text-2xl font-light tracking-wide text-[#C4C8C9] leading-relaxed mt-12 max-w-lg">
              Welcome to the Simmer Culinary School. Discover your passion in a
              state-of-the-art kitchen, guided by industry experts dedicated to
              student success.
            </p>
          </motion.div>
        </div>
      </div>

      <MarqueeRow text="EXPERT INSTRUCTORS • 5-STAR REVIEWS • 100% SATISFACTION • STUDENT SUCCESS • " />

      {/* Modules List: Staggered Architecture */}
      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-8 max-w-7xl mt-40"
      >
        <h2 className="text-5xl md:text-7xl font-sans tracking-tight text-white mb-20 uppercase font-bold text-center">
          The{" "}
          <span className="text-gold italic font-kaushan lowercase">
            Curriculum
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
          {modules.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
              className={`flex gap-6 group cursor-pointer ${idx % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="text-6xl md:text-8xl font-kaushan italic text-white/10 group-hover:text-gold transition-colors duration-500">
                {item.id}
              </div>
              <div className="pt-4">
                <h3 className="text-2xl md:text-4xl font-sans font-medium text-white mb-4 group-hover:-translate-y-1 transition-transform">
                  {item.title}
                </h3>
                <p className="text-[#C4C8C9] text-base md:text-lg font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic IG Feed Section */}
      <div className="mt-40 mb-20 border-t border-white/10 bg-white/5 py-32 rounded-[4rem] mx-4 md:mx-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <a
            href="https://www.instagram.com/simmerculinary/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-4 text-white hover:text-gold transition-colors mb-8 group"
          >
            <Instagram
              className="w-12 h-12 group-hover:scale-125 transition-transform duration-500"
              strokeWidth={1.5}
            />
            <h2 className="text-4xl md:text-5xl tracking-tighter uppercase font-bold">
              @simmerculinary
            </h2>
          </a>
          <p className="text-[#C4C8C9] text-xl font-light max-w-xl mx-auto">
            Join our community. See our students in action, get sneak peeks, and
            draw daily dessert inspiration.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] aspect-4/5 rounded-4xl overflow-hidden relative group cursor-pointer bg-onyx-black"
            >
              <div className="absolute inset-0 border border-white/10 rounded-4xl group-hover:border-gold/30 transition-colors z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-30 mix-blend-overlay z-0" />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-linear-to-t from-onyx-black to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
                <span className="text-white/20 font-bold text-2xl uppercase tracking-widest group-hover:text-gold/80 transition-colors group-hover:scale-110 duration-500">
                  Post {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 text-center">
        <Link
          href="/contact"
          className="group relative inline-flex border border-white/20 rounded-full px-12 py-6 items-center gap-6 hover:border-gold/50 hover:bg-gold transition-colors duration-500"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-white group-hover:text-onyx-black transition-colors">
            Enroll Today
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CulinarySchoolScreen;
