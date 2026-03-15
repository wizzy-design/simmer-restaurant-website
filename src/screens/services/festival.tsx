"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Ticket } from "lucide-react";

const features = [
  {
    num: "01",
    title: "Masterclasses",
    desc: "Top chefs revealing closely guarded secrets and innovative techniques.",
  },
  {
    num: "02",
    title: "Charity Gala",
    desc: "A special event dedicated to giving back to the Plateau community.",
  },
  {
    num: "03",
    title: "Live Concerts",
    desc: "High-energy performances from incredible local and national artists.",
  },
  {
    num: "04",
    title: "Competitions",
    desc: "Fierce culinary battles judged by experts and the lively crowd.",
  },
  {
    num: "05",
    title: "Tasting Zones",
    desc: "Endless rows of curated local and international flavor stations.",
  },
  {
    num: "06",
    title: "Family Fun",
    desc: "Dedicated zones packed with activities, games, and treats for all ages.",
  },
];

const FestivalScreen = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div className="bg-onyx-black min-h-screen text-white relative overflow-hidden font-sans selection:bg-gold selection:text-onyx-black">
      {/* Massive Hero */}
      <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/cocktail.png')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-onyx-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-onyx-black/30 to-onyx-black" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <Link
            href="/"
            className="absolute top-32 left-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C4C8C9] hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="px-6 py-2 rounded-full border border-gold text-gold text-xs uppercase tracking-[0.4em] font-bold mb-10 backdrop-blur-md bg-onyx-black/20 shadow-[0_0_20px_rgba(255,215,0,0.2)]"
          >
            Launching December 2024
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-[15vw] md:text-[12rem] font-bold tracking-tighter uppercase leading-[0.8] mix-blend-overlay text-white"
          >
            Foodtopia.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-3xl font-kaushan italic text-gold mt-8 drop-shadow-lg"
          >
            Experience the flavor of Plateau State.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] py-32">
        {/* Sticky Scroll Section for Info */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative mb-40">
          <div className="lg:w-1/2 lg:sticky lg:top-40">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                revolution
              </span>{" "}
              in culinary entertainment.
            </h2>
            <p className="text-xl font-light text-[#C4C8C9] leading-relaxed max-w-xl">
              Foodtopia is an annual food festival celebrating the vibrant
              culinary culture of Plateau State. Designed to revolutionize the
              landscape, we bring together food enthusiasts, acclaimed chefs,
              and cultural performers.
            </p>
            <p className="text-xl font-light text-[#C4C8C9] leading-relaxed max-w-xl mt-6">
              Join us for a feast of flavors, fun, and unprecedented cultural
              celebration proudly presented by Simmer Restaurant.
            </p>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-64">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:-translate-y-2 hover:bg-white/10 hover:border-gold/30 transition-all duration-500 group"
              >
                <span className="text-4xl font-kaushan italic text-gold/30 group-hover:text-gold block mb-6 transition-colors">
                  {item.num}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[#C4C8C9] font-light leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Massive CTA Section */}
      <div
        ref={containerRef}
        className="w-full h-screen bg-gold flex items-center justify-center relative overflow-hidden text-onyx-black mt-20"
      >
        <motion.div
          style={{ y: yText }}
          className="absolute top-0 right-10 text-[20vw] font-bold uppercase tracking-tighter opacity-10 select-none pointer-events-none"
        >
          TICKETS
        </motion.div>

        <div className="text-center z-10 px-4">
          <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Secure Your Access.
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-16 opacity-80">
            View the full Foodtopia Brochure for detailed schedules, sponsorship
            opportunities, and participation details.
          </p>

          <Link
            href="/foodtopia-brochure"
            className="group relative inline-flex items-center gap-4 bg-onyx-black text-white hover:bg-white hover:text-onyx-black px-12 py-6 rounded-full uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              Access Manifesto{" "}
              <Ticket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FestivalScreen;
