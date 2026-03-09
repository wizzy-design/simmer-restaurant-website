"use client";

import React, { useState } from "react";
import MenuItemCard from "../../../components/ui/menu-item-card";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import foodMenuData from "../../../data/food-menu.json";
import drinksMenuData from "../../../data/drinks-menu.json";
import NextImage from "next/image";

const PopularMenu = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Flatten all menu items
  const allFoodItems = foodMenuData.flatMap((cat: any) =>
    cat.items.map((item: any) => ({ ...item, category: cat.category })),
  );
  const allDrinkItems = drinksMenuData.flatMap((cat: any) =>
    cat.items.map((item: any) => ({ ...item, category: cat.category })),
  );
  const allItems = [...allFoodItems, ...allDrinkItems];

  // Get signature items with full data
  const signatureItemsData = SIGNATURE_ITEMS.map((sig: any) => {
    const data = allItems.find((item: any) => item.name === sig.name);
    return { ...data, image: sig.image } as any;
  }).filter((item: any) => item.name); // Filter out any missing items

  const categories = [
    "All",
    ...new Set(signatureItemsData.map((item) => item.category)),
  ];

  const filteredItems =
    activeTab === "All"
      ? signatureItemsData
      : signatureItemsData.filter((item) => item.category === activeTab);

  return (
    <section className="py-24 bg-ghost-cream min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 px-4">
          <div className="max-w-2xl">
            <motion.h2
              {...fadeUp(0.2)}
              className="text-5xl md:text-7xl font-serif text-onyx-black mb-6"
            >
              Our <span className="font-kaushan md:mt-4 italic">Signature</span>{" "}
              Menu
            </motion.h2>
            <motion.p
              {...fadeUp(0.35)}
              className="text-sm text-charcoal-grey font-sans tracking-wide leading-relaxed max-w-lg"
            >
              Exceptional ingredients met with culinary craftsmanship. We curate
              a selection of seasonal masterpieces that define the Simm3r
              experience.
            </motion.p>
          </div>

          <motion.div {...fadeUp(0.5)} className="flex items-center gap-4">
            <Link
              href="/menu"
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-onyx-black font-medium hover:text-gold transition-colors duration-300"
            >
              View Full Menu
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Categories Tab Selector */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap gap-2 mb-12 px-4"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 text-[10px] uppercase font-medium tracking-[0.2em] transition-all duration-300 ${
                activeTab === cat
                  ? "bg-onyx-black text-white"
                  : "bg-white text-onyx-black/60 hover:text-onyx-black hover:bg-white/80"
              }`}
            >
              {cat.split(" (")[0]} {/* Clean up category names */}
            </button>
          ))}
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                layout
              >
                <MenuItemCard item={item} variant="compact" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bonus minimal section for soups/extras */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
          {/* Left side: A highlighted feature */}
          <motion.div
            {...fadeUp(0.3)}
            className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden"
          >
            <NextImage
              src="/dine.png"
              alt="Dining interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <h3 className="text-4xl font-serif mb-4">
                Unforgettable <br />
                <span className="text-gold italic font-kaushan">
                  Read & Dine
                </span>{" "}
                Vibes
              </h3>
              <p className="text-sm font-sans tracking-wide leading-relaxed opacity-80 max-w-md mb-8">
                More than just a restaurant - we provide the serenity for you to
                enjoy your meal alongside your favorite chapters.
              </p>
              <Link
                href="/reservation"
                className="inline-block relative text-[10px] uppercase tracking-[0.3em] font-medium border-b border-white hover:border-gold hover:text-gold pb-1.5 transition-all duration-300"
              >
                Reserve a sanctuary
              </Link>
            </div>
          </motion.div>

          {/* Right side: Mini menu highlights */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4"
            >
              Essentials
            </motion.span>
            <motion.h3
              {...fadeUp(0.2)}
              className="text-4xl md:text-5xl font-serif text-onyx-black mb-12"
            >
              Quick Bites <br />& Late Delights
            </motion.h3>

            <div className="space-y-4">
              {allItems.slice(0, 6).map((item, idx) => (
                <motion.div key={item.name} {...fadeUp(0.3 + idx * 0.1)}>
                  <MenuItemCard item={item} variant="minimal" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;

// Mapping of signature items and their images
const SIGNATURE_ITEMS = [
  {
    name: "Sizzling Brownies and Cream",
    image: "/food36.png",
    category: "Desert",
  },
  {
    name: "Classic Beef Burger",
    image: "/food19.png",
    category: "Sandwitches",
  },
  {
    name: "Lamb Chops",
    image: "/food13.png",
    category: "Beef, Lamb and other Meats",
  },
  {
    name: "English Breakfast",
    image: "/food12.png",
    category: "Breakfast (9:30am — 11:50am)",
  },
  {
    name: "Margherita",
    image: "/food14.png",
    category: "Pizza (ONE SIZE) (Tuesdays and Saturdays only)",
  },
  {
    name: "Native Rice",
    image: "/food3.png",
    category: "African",
  },
];

const fadeUp = (delay: number) =>
  ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut", delay },
  }) as const;
