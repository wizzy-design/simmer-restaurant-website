"use client";

import { ShoppingBasket } from "lucide-react";
import { useReservation } from "../../context/reservation-context";
import { motion, AnimatePresence } from "motion/react";

const FloatingReservationButton = () => {
  const { itemCount, openSidebar } = useReservation();

  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={openSidebar}
            className="relative w-16 h-16 bg-gold text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 rounded-none"
          >
            <ShoppingBasket size={24} />
            <span className="absolute -top-1 -right-1 bg-white text-onyx-black text-[10px] w-6 h-6 flex items-center justify-center font-bold">
              {itemCount}
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingReservationButton;
