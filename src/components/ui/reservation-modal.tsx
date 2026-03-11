"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, CalendarCheck } from "lucide-react";
import { useReservation } from "../../context/reservation-context";
import React from "react";
import { Reservations } from "../../screens/home/components/reservations";

const ReservationModal = () => {
  const { isModalOpen, closeModal } = useReservation();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-onyx-black/60 backdrop-blur-sm z-200"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white z-201 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 bg-white z-10">
              <h2 className="text-xl font-serif text-onyx-black flex items-center gap-3">
                <CalendarCheck size={20} className="text-gold" />
                Book a Table
              </h2>
              <button
                onClick={closeModal}
                className="p-2 bg-ghost-cream rounded-full hover:bg-gold hover:text-white transition-colors"
                aria-label="Close drawer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto w-full p-6 md:p-8">
              <Reservations isModal />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
