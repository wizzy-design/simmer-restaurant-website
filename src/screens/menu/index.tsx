"use client";

import { useState, useMemo } from "react";
import MenuItemCard from "../../components/ui/menu-item-card";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import foodMenuData from "../../data/food-menu.json";
import drinksMenuData from "../../data/drinks-menu.json";
import { MenuItem } from "../../context/reservation-context";
import { cn } from "../../lib/utils";

interface MenuCategory {
  category: string;
  items: MenuItem[];
  type?: "food" | "drinks";
}

const MenuScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Combine data
  const allCategories = useMemo<MenuCategory[]>(() => {
    return [
      ...foodMenuData.map((c) => ({ ...c, type: "food" as const })),
      ...drinksMenuData.map((c) => ({ ...c, type: "drinks" as const })),
    ];
  }, []);

  const categories = useMemo(() => {
    return ["All", ...allCategories.map((c) => c.category)];
  }, [allCategories]);

  const filteredMenu = useMemo(() => {
    let result = allCategories;

    if (selectedCategory !== "All") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (searchQuery) {
      result = result
        .map((c) => ({
          ...c,
          items: c.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description
                ?.toLowerCase()
                .includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((c) => c.items.length > 0);
    }

    return result;
  }, [allCategories, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-ghost-cream pt-32 pb-24">
      {/* Search & Header */}
      <div className="container mx-auto px-4 md:px-6 mb-8 lg:mb-20">
        <div className="flex flex-col justify-between gap-12 mb-4 lg:flex-row lg:items-end lg:mb-16">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-serif text-onyx-black mb-6"
            >
              <span className="font-kaushan">Our</span> Menu
            </motion.h1>
            <p className="text-sm text-charcoal-grey font-sans leading-relaxed opacity-70">
              Explore our full culinary collection. Search for your favorite
              dishes and add them to your reservation list for a personalized
              dining experience.
            </p>
          </div>

          <div className="relative w-full lg:w-80 group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-grey/30 group-focus-within:text-gold transition-colors duration-300"
              size={18}
            />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-charcoal-grey/10 focus:border-gold outline-none transition-all duration-300 font-sans text-xs tracking-wider"
            />
          </div>
        </div>

        {/* Categories Scroller */}
        <div className="relative overflow-hidden -mx-4 px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-6 no-scrollbar">
            <motion.div
              className="flex items-center gap-2 min-w-max"
              initial={{ x: 0 }}
              animate={{ x: [0, -80, 0] }}
              transition={{
                duration: 1.2,
                delay: 1.5,
                ease: "easeInOut",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "whitespace-nowrap px-8 py-3 text-[10px] uppercase font-medium tracking-[0.2em] transition-all duration-300 border",
                    selectedCategory === cat
                      ? "bg-onyx-black text-white border-onyx-black shadow-lg shadow-black/10"
                      : "bg-white text-onyx-black/60 border-charcoal-grey/5 hover:border-onyx-black/10 hover:text-onyx-black",
                  )}
                >
                  {cat.split(" (")[0]}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Subtle Fading Edge to indicate more content */}
          <div className="absolute right-0 top-0 bottom-6 w-16 bg-linear-to-l from-ghost-cream to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Grid Container */}
      <div className="container mx-auto px-4 md:px-6 space-y-18 lg:space-y-32">
        {filteredMenu.map((cat, catIdx) => {
          // Identify items with images to use as visuals for the category
          const featuredImages = cat.items
            .filter((item) => item.image)
            .map((item) => item.image as string);

          const isEven = catIdx % 2 === 0;

          return (
            <div key={cat.category}>
              <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
                {/* Visual Side (Left) */}
                {!isEven && featuredImages.length > 0 && (
                  <div className="lg:w-5/12 hidden lg:block sticky top-28">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full" />
                      {featuredImages.length === 1 ? (
                        <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white group">
                          <SmartImage
                            src={featuredImages[0]}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-onyx-black/5 group-hover:bg-transparent transition-colors" />
                        </div>
                      ) : (
                        <div className="relative grid grid-cols-2 gap-4">
                          {featuredImages.slice(0, 2).map((img, i) => (
                            <div
                              key={i}
                              className={cn(
                                "relative overflow-hidden shadow-2xl",
                                i === 0
                                  ? "aspect-4/5 rounded-[4rem] translate-y-8"
                                  : "aspect-square rounded-full translate-x-4",
                              )}
                            >
                              <SmartImage
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-onyx-black/5" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* List Side */}
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif text-onyx-black capitalize italic">
                      {cat.category.split(" (")[0]}
                    </h2>
                    <div className="h-px flex-1 bg-gold/20" />
                  </div>

                  <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                      {cat.items.map((item, idx) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                        >
                          <MenuItemCard item={item} variant="classic-list" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Visual Side (Right) */}
                {isEven && featuredImages.length > 0 && (
                  <div className="lg:w-5/12 hidden lg:block sticky top-28">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full" />
                      {featuredImages[0] && (
                        <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white group">
                          <SmartImage
                            src={featuredImages[0]}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-onyx-black/10 group-hover:bg-transparent transition-colors" />
                        </div>
                      )}
                      {featuredImages[1] && (
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-4xl overflow-hidden shadow-2xl border-4 border-white rotate-6 hidden xl:block">
                          <SmartImage
                            src={featuredImages[1]}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filteredMenu.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-charcoal-grey font-serif text-xl opacity-40">
              No items found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuScreen;

// Resolves a Cloudinary public-ID shorthand (local /food.png or raw public ID)
// and returns the correct src string for CldImage.
const toCldSrc = (src: string) =>
  src.startsWith("/")
    ? `simmer-restaurant/${src.split(".")[0].substring(1)}`
    : src;

// Renders the right image component depending on the URL scheme:
//   Unsplash / external http → next/image  (optimizer-friendly)
//   Cloudinary / local path  → CldImage    (transformation pipeline)
const SmartImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const isExternal =
    src.startsWith("http") && !src.includes("res.cloudinary.com");

  if (isExternal) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes="(max-width: 1024px) 50vw, 40vw"
      />
    );
  }
  return (
    <CldImage
      src={toCldSrc(src)}
      alt={alt}
      fill
      className={className}
      crop="fill"
      gravity="auto"
      sizes="(max-width: 1024px) 50vw, 40vw"
    />
  );
};
