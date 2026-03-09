"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const services = [
  {
    id: "01",
    title: "Catering Services",
    subtitle: "Unforgettable Moments",
    description:
      "Make your events unforgettable with Simmer Restaurant’s exceptional catering services! We bring the vibrant flavors of African and international cuisine to your table, tailored for your unique celebration.",
    link: "/services/catering-services",
    image: "/fine-dining.png", // Or maybe an abstract elegant placeholder
  },
  {
    id: "02",
    title: "Pastry School",
    subtitle: "Master the Art",
    description:
      "Simmer Culinary School offers comprehensive training in Cuisine and Pastry Arts, awarding certifications and diplomas upon completion. Learn from the best in a state-of-the-art environment.",
    link: "/services/pastry-school",
    image: "/food.png",
  },
  {
    id: "03",
    title: "Consultancy",
    subtitle: "Build a Legacy",
    description:
      "Transform your culinary vision into a profitable reality. We provide expert advice on menu creation, restaurant management, and kitchen setup, guiding you every step of the way.",
    link: "/services/restaurant-consultancy",
    image: "/restaurant.png",
  },
  {
    id: "04",
    title: "Foodtopia Festival",
    subtitle: "A Culinary Celebration",
    description:
      "An annual food festival celebrating the vibrant culinary culture of Plateau State and its impact on the local culinary and entertainment scene.",
    link: "/services/food-festival",
    image: "/cocktail.png",
  },
];

const ServiceBlock = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="min-h-screen py-24 flex items-center relative z-10"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={cn(
            "flex flex-col gap-12 lg:gap-24 items-center",
            isEven ? "lg:flex-row" : "lg:flex-row-reverse",
          )}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] overflow-hidden rounded-[2rem] group">
            <motion.div
              style={{ y }}
              className="absolute inset-[-15%] bg-cover bg-center"
              // fallback to a dark gradient if image is missing
              initial={{ backgroundColor: "#1a1a1a" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-onyx-black/20 group-hover:bg-transparent transition-colors duration-700" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-gold font-sans tracking-[0.3em] text-sm uppercase mb-4 block">
                {service.id} &mdash; {service.subtitle}
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-kaushan italic text-white mb-8 leading-[0.9]">
                {service.title.split(" ").map((word: string, i: number) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h2>
              <p className="text-[#C4C8C9] font-light text-lg md:text-xl leading-relaxed mb-12 max-w-md">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="group relative inline-flex border border-white/20 rounded-full p-2 pl-8 items-center gap-6 hover:border-gold/50 transition-colors duration-500 w-fit"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white group-hover:text-gold transition-colors">
                  Explore
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-onyx-black transition-colors" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesScreen = () => {
  return (
    <div className="bg-onyx-black min-h-screen text-[#C4C8C9] relative selection:bg-gold selection:text-onyx-black">
      {/* Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-radial-gradient from-onyx-black/40 to-onyx-black" />

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] font-medium mb-6"
          >
            Simmer Restaurant
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-kaushan italic text-white leading-none mb-8 drop-shadow-2xl"
          >
            Beyond <br /> Dining.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-xl mx-auto text-lg md:text-xl font-light text-white/60 tracking-wide"
          >
            Curated experiences, mastery in culinary arts, and tailored services
            designed to leave a lasting impression.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-4">
            Scroll to Discover
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Services List */}
      <div className="relative z-10 bg-onyx-black">
        {services.map((service, idx) => (
          <ServiceBlock key={service.id} service={service} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default ServicesScreen;
