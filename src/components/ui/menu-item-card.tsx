"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Plus, Check, ShoppingBasket } from "lucide-react";
import { useReservation, MenuItem } from "../../context/reservation-context";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface MenuItemCardProps {
  item: MenuItem;
  variant?: "detailed" | "minimal" | "classic-list" | "compact";
}

const MenuItemCard = ({ item, variant = "detailed" }: MenuItemCardProps) => {
  const { addToReservation, removeFromReservation, reservationItems } =
    useReservation();
  const isAdded = reservationItems.some((i) => i.name === item.name);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    if (isAdded) {
      removeFromReservation(item.name);
    } else {
      addToReservation(item);
    }
  };

  if (variant === "classic-list") {
    return (
      <div
        className="group relative py-4 first:pt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <div className="flex flex-col">
            <h4 className="text-lg md:text-xl font-serif text-onyx-black group-hover:text-gold transition-colors duration-400">
              {item.name}
            </h4>
          </div>
          <div className="flex-1 border-b border-dotted border-charcoal-grey/20 mb-1.5" />
          <div className="flex items-center gap-4">
            <span className="text-gold font-sans font-bold whitespace-nowrap">
              {item.price}
            </span>
            <button
              onClick={handleToggle}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                isAdded
                  ? "bg-gold text-white"
                  : "bg-white border border-charcoal-grey/10 text-charcoal-grey/30 hover:border-gold hover:text-gold",
              )}
            >
              {isAdded ? <Check size={14} /> : <Plus size={14} />}
            </button>
          </div>
        </div>
        {item.description && (
          <p className="text-[11px] text-charcoal-grey/50 font-sans leading-relaxed max-w-[85%] italic">
            {item.description}
          </p>
        )}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal-grey/5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-ghost-cream flex items-center justify-center">
              <span className="text-2xl text-onyx-black/5 font-kaushan">
                Simm3r
              </span>
            </div>
          )}

          {/* Price Badge - Image 2 style */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
              <span className="text-xs font-bold text-onyx-black whitespace-nowrap">
                {item.price}
              </span>
            </div>
          </div>

          {/* Add Button - Image 2 style */}
          <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={handleToggle}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all",
                isAdded
                  ? "bg-onyx-black text-white"
                  : "bg-white text-onyx-black hover:bg-gold hover:text-white",
              )}
            >
              {isAdded ? <Check size={20} /> : <ShoppingBasket size={18} />}
            </button>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-sm font-sans font-bold text-onyx-black truncate group-hover:text-gold transition-colors">
            {item.name}
          </h3>
          <p className="text-[10px] text-charcoal-grey/60 mt-1 uppercase tracking-wider font-medium">
            Chef's Choice
          </p>
        </div>
      </motion.div>
    );
  }

  if (variant === "minimal") {
    return (
      <motion.div
        className="flex items-center justify-between py-5 border-b border-onyx-black/6 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex-1 pr-6">
          <div className="flex items-baseline gap-3 mb-1">
            <h4 className="text-[13px] font-serif text-onyx-black group-hover:text-gold transition-colors duration-400 tracking-wide uppercase">
              {item.name}
            </h4>
            <div className="h-px flex-1 bg-linear-to-r from-gold/30 to-transparent self-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-xs font-sans font-semibold text-gold/80 bg-gold/5 px-2 py-0.5">
              {item.price}
            </span>
          </div>
          {item.description && (
            <p className="text-[11px] text-charcoal-grey/50 font-sans leading-relaxed max-w-lg line-clamp-1 italic">
              {item.description}
            </p>
          )}
        </div>
        <button
          onClick={handleToggle}
          className={cn(
            "w-8 h-8 flex items-center justify-center transition-all duration-500 border rounded-full",
            isAdded
              ? "bg-gold border-gold text-white shadow-lg shadow-gold/20"
              : "border-onyx-black/10 text-onyx-black/30 hover:border-gold hover:text-gold hover:scale-110",
          )}
        >
          {isAdded ? <Check size={14} /> : <Plus size={14} />}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white group overflow-hidden transition-all duration-700 hover:-translate-y-2 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 -z-10" />

      {/* Image Container with Floating Effect */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-ghost-cream shadow-sm p-3">
        <div className="relative w-full h-full overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-[#f1efe8] flex items-center justify-center overflow-hidden">
              <span className="text-5xl text-onyx-black/5 font-kaushan -rotate-12 select-none">
                Simm3r
              </span>
            </div>
          )}

          {/* Premium Overlay & Glassmorphism Badge */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-black/60 to-transparent">
            <p className="text-[10px] text-white/80 font-sans tracking-widest uppercase">
              Select to Reserve
            </p>
          </div>

          {item.image && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/90 backdrop-blur-md text-onyx-black text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 shadow-sm">
                Signature
              </span>
            </div>
          )}

          {/* Close/Remove Button Overlay if added */}
          {isAdded && (
            <div className="absolute inset-0 bg-gold/20 backdrop-blur-[2px] flex items-center justify-center z-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white text-gold w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Check size={28} />
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Modernized Content */}
      <div className="p-6 text-center">
        <div className="mb-4">
          <p className="text-[10px] text-gold font-sans font-bold tracking-[0.3em] uppercase mb-1">
            Menu Item
          </p>
          <h3 className="text-xl md:text-2xl font-serif text-onyx-black group-hover:text-gold transition-colors duration-500 leading-tight px-2">
            {item.name}
          </h3>
        </div>

        <p className="text-[11px] text-charcoal-grey/60 font-sans leading-relaxed mb-6 h-10 line-clamp-2 px-4 italic">
          {item.description ||
            "The quintessence of refined flavors, prepared with chef's utmost precision."}
        </p>

        <div className="flex flex-col items-center gap-4">
          <span className="text-lg font-sans font-semibold text-onyx-black tracking-tighter">
            {item.price}
          </span>

          <button
            onClick={handleToggle}
            className={cn(
              "w-full max-w-[180px] text-[10px] uppercase font-bold tracking-[0.3em] py-4 transition-all duration-500 rounded-full border shadow-sm",
              isAdded
                ? "bg-onyx-black text-white border-onyx-black shadow-lg"
                : "bg-transparent text-onyx-black border-onyx-black/10 hover:bg-onyx-black hover:text-white hover:border-onyx-black",
            )}
          >
            {isAdded ? "Secured" : "Reserve Item"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
