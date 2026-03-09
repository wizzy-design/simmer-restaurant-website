"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Youtube,
  Phone,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

const AboutScreen = () => {
  return (
    <div className="bg-onyx-black min-h-screen pt-40 pb-24 text-[#C4C8C9]">
      {/* Hero / Our Story Section */}
      <section className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          {...fadeUp}
          className="flex flex-col gap-8 order-2 lg:order-1"
        >
          <h1 className="text-5xl md:text-6xl font-kaushan italic text-white leading-[1.1]">
            A Legacy of <br />
            <span className="text-gold not-italic font-sans font-light tracking-tight">
              Passion & Flavor
            </span>
          </h1>
          <div className="flex flex-col gap-6 text-base leading-relaxed font-sans font-light max-w-xl">
            <p>
              From our origins as the beloved{" "}
              <strong>Sweet November Bistro</strong> to the elevated experience
              of <strong>Simmer Restaurant</strong>, our journey in Jos has
              spanned over six years of culinary innovation.
            </p>
            <p>
              Guided by Executive Chef Jemmy, our new name reflects our
              philosophy: taking the time to gently blend flavors and
              experiences into something extraordinary.
            </p>
            <p>
              We&apos;ve grown harmoniously, and on September 3rd, 2024, we
              proudly unveiled our new identity&mdash;designed to be the
              city&apos;s premier dining destination.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full rounded-md overflow-hidden shadow-2xl order-1 lg:order-2 border border-white/5 bg-white/5"
        >
          <video
            src="/about2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
        <motion.div
          {...fadeUp}
          className="relative h-[400px] md:h-[500px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-white/5"
        >
          <video
            src="/about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="flex flex-col gap-8 max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-kaushan italic text-white leading-[1.1]">
            Our <br />
            <span className="text-gold not-italic font-sans font-light tracking-tight">
              Mission
            </span>
          </h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed font-sans font-light border-l border-gold/40 pl-6 lg:pl-8">
            <p>
              To craft authentic, high-quality dishes that honor tradition while
              embracing innovation.
            </p>
            <p>
              We are dedicated to providing a warm and welcoming atmosphere
              where every guest feels valued, and every meal reflects our
              unyielding passion for excellence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Meet the CEO Section */}
      <section className="container mx-auto px-4 md:px-8">
        <motion.div
          {...fadeUp}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-kaushan italic text-white leading-[1.1] mb-4">
            Meet the CEO
          </h2>
          <h3 className="text-lg md:text-xl text-gold font-sans font-light tracking-widest uppercase mb-4">
            Chef Jemimah Bayei
          </h3>
          <div className="w-16 h-[1px] bg-gold/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 group bg-white/5">
              <Image
                src="/chef.png"
                alt="Chef Jemimah Bayei"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>

            {/* Contact Details beneath Image */}
            <div className="mt-8 flex flex-col gap-6 p-6 w-full rounded-md bg-white/5 border border-white/5 backdrop-blur-sm">
              <h4 className="text-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold text-center border-b border-white/5 pb-4">
                Connect & Discover
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:09163891140"
                  className="flex items-center gap-4 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                >
                  <span className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                    <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="text-sm font-light">09163891140</span>
                </a>
                <a
                  href="mailto:info@mysimmer.com"
                  className="flex items-center gap-4 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                >
                  <span className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                    <Mail className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="text-sm font-light">Email Us</span>
                </a>
                <a
                  href="https://www.instagram.com/simmerrestaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                >
                  <span className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                    <Instagram className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="text-sm font-light">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/simmerrestaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                >
                  <span className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                    <Facebook className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="text-sm font-light">Facebook</span>
                </a>
                <a
                  href="https://twitter.com/simmerbysnb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                >
                  <span className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                    <Twitter className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="text-sm font-light">Twitter</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jemimah-bayei-68a85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                >
                  <span className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                    <Linkedin className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="text-sm font-light">LinkedIn</span>
                </a>
                <a
                  href="https://www.youtube.com/@Chef_jemmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md sm:col-span-2 border border-white/5 bg-black/20 mt-2"
                >
                  <Youtube className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium tracking-wide">
                    Watch on YouTube
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-8 text-base leading-relax font-sans font-light lg:pt-8"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              Affectionately known as <strong>Chef Jemmy</strong>, Jemimah Bayei
              is a visionary executive chef, restaurant consultant, and
              entrepreneur whose passion bridges the gap between field and
              table.
            </p>
            <div className="w-12 h-[1px] bg-gold/50"></div>
            <p>
              With degrees in Economics and Industrial &amp; Labor Relations,
              her journey uniquely intertwines the agricultural and culinary
              industries. She spent years building a robust agricultural
              distribution network, ensuring the flow of thousands of metric
              tons of essential farming supplies across states like Kaduna,
              Bauchi, and Jos. Her work profoundly supported high-quality farm
              yields in the region.
            </p>
            <p>
              Driven by an uncompromising love for gastronomy, she co-founded
              Sweet November Bistro before formalizing her culinary brilliance
              at Red Dish Culinary School, earning dual diplomas in cuisine and
              p&acirc;tisserie.
            </p>
            <p>
              Today, through <strong>Simmer Restaurant</strong> and{" "}
              <strong>Simmer Culinary School</strong>, she shares her wealth of
              expertise. From mentoring the next generation of chefs to
              consulting for blossoming food businesses, Chef Jemmy exemplifies
              a seamless blend of farming and cooking&mdash;nurturing the earth
              and bringing people together around exceptional food.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutScreen;
