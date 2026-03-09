"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ConsultancyScreen = () => {
  return (
    <div className="bg-[#EAEAEA] min-h-screen pt-32 text-onyx-black relative overflow-hidden font-sans">
      {/* Very minimalist brutalist nav */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex justify-between items-center border-b border-onyx-black/20 pb-6 mb-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-onyx-black hover:opacity-50 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" /> Index
          </Link>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-onyx-black/40">
            Division 03
          </span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-end mb-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-3/5"
          >
            <h1 className="text-[10vw] lg:text-[7rem] font-medium leading-[0.9] tracking-tighter text-onyx-black uppercase break-words hyphens-auto">
              Restaurant
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ WebkitTextStroke: "2px #1c1c1c" }}
              >
                Consulting
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-2/5 flex flex-col gap-6"
          >
            <div className="w-16 h-[2px] bg-onyx-black" />
            <p className="text-xl md:text-2xl font-light text-onyx-black/80 leading-relaxed tracking-wide">
              Transform your culinary vision into a profitable reality. We bring
              decades of operational excellence down to a science.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Massive Full Image Break */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-[60vh] md:h-[80vh] relative bg-onyx-black my-20"
      >
        <div className="absolute inset-0 bg-[url('/restaurant.png')] bg-cover bg-center opacity-80 mix-blend-luminosity grayscale" />
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] pb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-onyx-black/20 pb-8">
          <h2 className="text-3xl md:text-5xl font-sans tracking-tighter uppercase font-medium">
            Core Capabilities
          </h2>
          <p className="font-mono text-sm uppercase tracking-widest text-onyx-black/40">
            Our Methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {[
            {
              tag: "01",
              name: "Menu Strategy",
              desc: "Crafting menus that balance aesthetic appeal with bulletproof cost controls and operational feasibility.",
            },
            {
              tag: "02",
              name: "Kitchen Setup",
              desc: "Optimizing flow, equipment placement, and safety protocols for maximum efficiency and speed.",
            },
            {
              tag: "03",
              name: "Staff Training",
              desc: "Developing rigorous SOPs and hands-on training programs to ensure 5-star service standard consistency.",
            },
            {
              tag: "04",
              name: "Profitability",
              desc: "Deep financial audits, vendor management, and waste reduction strategies to scale your margins.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col border-b border-onyx-black/10 pb-8"
            >
              <div className="flex justify-between items-end mb-6">
                <span className="font-mono text-xl text-onyx-black/30 group-hover:text-gold transition-colors">
                  {item.tag}
                </span>
                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300" />
              </div>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tighter lowercase mb-4">
                {item.name}
              </h3>
              <p className="text-lg font-light text-onyx-black/70 leading-relaxed md:max-w-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <Link
            href="/contact"
            className="inline-block border-2 border-onyx-black text-onyx-black text-2xl md:text-4xl font-sans tracking-tighter uppercase hover:bg-onyx-black hover:text-white px-16 py-8 rounded-[3rem] transition-colors duration-500"
          >
            Initiate Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyScreen;
