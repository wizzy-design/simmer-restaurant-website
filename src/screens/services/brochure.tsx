"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ArrowDownRight, ArrowRight } from "lucide-react";

const FoodtopiaBrochureScreen = () => {
  return (
    <div className="bg-[#111111] min-h-screen pt-32 text-white relative font-sans antialiased selection:bg-white selection:text-black">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <main className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10 pb-40">
        <header className="flex justify-between items-end border-b border-white/20 pb-8 mb-20 md:mb-32">
          <Link
            href="/services/food-festival"
            className="inline-flex items-center gap-2 text-gold hover:text-white uppercase tracking-widest text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <div className="text-right">
            <span className="block text-white/50 text-[10px] uppercase font-mono tracking-widest mb-1">
              Document.01
            </span>
            <span className="block text-white font-bold uppercase tracking-[0.2em] text-sm md:text-base">
              Official Digital Manifesto
            </span>
          </div>
        </header>

        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32 md:mb-48"
        >
          <h1 className="text-[12vw] md:text-[8rem] leading-[0.85] font-bold tracking-tighter uppercase text-white mb-10 w-full lg:w-[130%]">
            Foodtopia{" "}
            <span className="text-gold italic font-kaushan tracking-normal lowercase text-[10vw] md:text-[7rem]">
              2024
            </span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start pl-4 md:pl-0 border-l-[3px] md:border-l-0 border-gold/50">
            <ArrowDownRight
              className="w-16 h-16 text-gold shrink-0 hidden md:block"
              strokeWidth={1}
            />
            <p className="text-xl md:text-3xl font-light leading-relaxed text-white/80 max-w-3xl">
              A comprehensive blueprint for the ultimate celebration of Plateau
              State’s vibrant culinary culture. A call for pioneers, partners,
              and food enthusiasts.
            </p>
          </div>
        </motion.div>

        {/* Content Modules - Zine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Section 01 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/20 pt-16"
          >
            <div className="lg:col-span-4 flex items-baseline gap-4">
              <span className="font-mono text-gold text-lg">01</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                The Vision
              </h2>
            </div>
            <div className="lg:col-span-8 text-lg font-light leading-relaxed text-[#C4C8C9]">
              <p className="mb-8">
                <span className="text-4xl float-left mr-4 font-bold text-white mt-[-6px]">
                  F
                </span>
                oodtopia is not just a festival; it is a movement. Launching in
                December 2024, our mission is to redefine and revolutionize the
                culinary and entertainment landscape of Plateau State, shining a
                global spotlight on our rich agricultural heritage and local
                food cultivation culture.
              </p>
              <p>
                Hosted proudly by Simmer Restaurant, this massive annual event
                brings together thousands of food enthusiasts, world-class
                chefs, and dynamic cultural performers. We aim to forge
                unforgettable experiences and create a new tradition that
                significantly boosts local tourism.
              </p>
              <div className="mt-12 p-8 bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase font-mono tracking-widest text-gold mb-2">
                    Location Directive
                  </span>
                  <strong className="text-xl font-medium tracking-wide">
                    Jos, Plateau State, Nigeria
                  </strong>
                </div>
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">
                  📌
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 02 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/20 pt-16"
          >
            <div className="lg:col-span-4 flex items-baseline gap-4">
              <span className="font-mono text-gold text-lg">02</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Key Highlights
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  title: "Culinary Masterclasses",
                  desc: "Learn directly from top-tier chefs, gaining access to closely guarded recipes and techniques in live, interactive demonstrations.",
                },
                {
                  title: "Exclusive Tasting",
                  desc: "Dive deep into our curated zones. Sample a diverse array of local and international dishes designed to delight your palate.",
                },
                {
                  title: "Cultural Music",
                  desc: "Groove to amazing live performances by both local and national artists while enjoying exquisite food and drinks.",
                },
                {
                  title: "Mass Competitions",
                  desc: "Witness high-stakes battles between culinary giants judged live on stage.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l border-gold/30 pl-6">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base font-light text-[#C4C8C9] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 03 - Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 mt-20 bg-gold text-onyx-black p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-10 mix-blend-overlay" />
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 relative z-10">
              Join The Movement.
            </h2>
            <p className="text-lg md:text-2xl font-medium max-w-3xl mb-12 relative z-10 opacity-90">
              We are actively seeking visionary partners who want to align their
              brand with culinary excellence, cultural celebration, and
              community growth.
            </p>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-6 bg-onyx-black text-white hover:bg-white hover:text-onyx-black px-12 py-6 uppercase tracking-[0.2em] font-bold transition-colors duration-500 shadow-2xl"
            >
              Become a Partner{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default FoodtopiaBrochureScreen;
