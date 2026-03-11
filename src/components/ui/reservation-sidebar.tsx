"use client";

import { motion, AnimatePresence } from "motion/react";
import { ShoppingBasket, X, Trash2, CalendarCheck } from "lucide-react";
import { useReservation } from "../../context/reservation-context";
import Image from "next/image";

const ReservationSidebar = () => {
  const {
    reservationItems,
    removeFromReservation,
    clearReservation,
    itemCount,
    isSidebarOpen,
    closeSidebar,
    openModal,
  } = useReservation();

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-101 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-charcoal-grey/5">
              <h2 className="text-xl font-serif text-onyx-black flex items-center gap-3">
                <CalendarCheck size={20} className="text-gold" />
                Reservation List
              </h2>
              <button
                onClick={closeSidebar}
                className="p-2 hover:bg-ghost-cream transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {reservationItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBasket
                    size={48}
                    className="text-charcoal-grey/10 mb-4"
                  />
                  <p className="text-sm font-sans text-charcoal-grey/60 italic">
                    Your list is currently empty.
                  </p>
                </div>
              ) : (
                <>
                  {reservationItems.map((item) => (
                    <div key={item.name} className="flex gap-4 group">
                      <div className="relative w-20 h-20 bg-ghost-cream shrink-0">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-serif">{item.name}</h4>
                          <p className="text-[10px] text-gold font-sans font-semibold uppercase tracking-wider">
                            {item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromReservation(item.name)}
                          className="text-[10px] text-charcoal-grey/40 hover:text-red-500 transition-colors uppercase font-medium tracking-widest"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {reservationItems.length > 0 && (
              <div className="p-8 border-t border-charcoal-grey/5 bg-ghost-cream/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-charcoal-grey/60">
                    Total items
                  </span>
                  <span className="text-lg font-serif">{itemCount}</span>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      closeSidebar();
                      openModal();
                    }}
                    className="w-full bg-gold text-white tracking-[0.3em] font-medium py-4 text-xs uppercase hover:bg-gold/90 transition-all shadow-xl shadow-gold/20"
                  >
                    Proceed with Reservation
                  </button>
                  <button
                    onClick={clearReservation}
                    className="w-full text-charcoal-grey/40 tracking-[0.2em] font-medium py-2 text-[10px] uppercase hover:text-red-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={12} />
                    Clear List
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReservationSidebar;
