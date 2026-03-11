"use client";

import { useState } from "react";
import MenuItemCard from "../../../components/ui/menu-item-card";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import foodMenuData from "../../../data/food-menu.json";
import drinksMenuData from "../../../data/drinks-menu.json";
import { fadeUpView } from "../../../lib/animations";

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
              {...fadeUpView(0.2)}
              className="text-5xl md:text-7xl font-serif text-onyx-black mb-6"
            >
              Our <span className="font-kaushan md:mt-4 italic">Signature</span>{" "}
              Menu
            </motion.h2>
            <motion.p
              {...fadeUpView(0.35)}
              className="text-sm text-charcoal-grey font-sans tracking-wide leading-relaxed max-w-lg"
            >
              Exceptional ingredients met with culinary craftsmanship. We curate
              a selection of seasonal masterpieces that define the Simm3r
              experience.
            </motion.p>
          </div>

          <motion.div {...fadeUpView(0.5)} className="flex items-center gap-4">
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
          {...fadeUpView(0.6)}
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
    category: "Sandwiches",
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
    name: "Egusi Soup",
    image: "/food3.png",
    category: "African",
  },
];

