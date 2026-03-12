"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Plus, Check, ShoppingBasket } from "lucide-react";
import { useReservation, MenuItem } from "../../context/reservation-context";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface MenuItemCardProps {
  item: MenuItem;
  variant?: "classic-list" | "compact";
}

const MenuItemCard = ({ item, variant = "compact" }: MenuItemCardProps) => {
  const { addToReservation, removeFromReservation, reservationItems } =
    useReservation();
  const isAdded = reservationItems.some((i) => i.name === item.name);

  const handleToggle = () => {
    if (isAdded) {
      removeFromReservation(item.name);
    } else {
      addToReservation(item);
    }
  };

  if (variant === "classic-list") {
    return (
      <div className="group relative py-4 first:pt-0">
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

  return (
    <motion.div className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal-grey/5">
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

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
            <span className="text-xs font-bold text-onyx-black whitespace-nowrap">
              {item.price}
            </span>
          </div>
        </div>

        {/* Add Button - Always visible */}
        <div className="absolute bottom-4 right-4 transition-all duration-300">
          <button
            onClick={handleToggle}
            className={cn(
              "w-12 h-12 rounded-full cursor-pointer flex items-center justify-center shadow-2xl transition-all",
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
};

export default MenuItemCard;
