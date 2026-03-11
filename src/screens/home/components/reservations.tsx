"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { useReservation } from "../../../context/reservation-context";

export const Reservations = ({ isModal = false }: { isModal?: boolean }) => {
  const {
    reservationItems,
    closeModal,
    clearReservation,
    formData,
    updateFormData,
  } = useReservation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const today = new Date().toISOString().split("T")[0];

  const handleClose = () => {
    if (isModal) {
      closeModal();
      setTimeout(() => setIsSuccess(false), 500);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPhoneError("");
    setSubmitError("");

    const target = e.target as HTMLFormElement;
    const formValues = new FormData(target);
    const phone = formValues.get("phone") as string;
    const dateStr = formValues.get("date") as string;
    const timeStr = formValues.get("time") as string;

    // Convert to a clean number string to check length
    const phoneDigitsOnly = phone.replace(/\D/g, "");
    if (phoneDigitsOnly.length < 11 || phoneDigitsOnly.length > 13) {
      setPhoneError("Phone number must be between 11 and 13 digits.");
      return;
    }

    // Date/Time validation to prevent past reservations
    if (dateStr && timeStr) {
      const reservationDate = new Date(`${dateStr}T${timeStr}`);
      if (reservationDate < new Date()) {
        setSubmitError("Reservation date and time cannot be in the past.");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const payload = {
        guests: formValues.get("guests"),
        type: formValues.get("type"),
        time: formValues.get("time"),
        date: formValues.get("date"),
        fullName: formValues.get("fullName"),
        email: formValues.get("email"),
        phone: phone,
        foodOrders: formValues.get("foodOrders") || "",
        specialRequests: formData.hasSpecialRequest
          ? formValues.get("specialRequests")
          : "",
      };

      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit reservation.");
      }

      setIsSuccess(true);
      clearReservation();
      if (!isModal) {
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (err: any) {
      console.error(err);
      setSubmitError("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <div className={isModal ? "" : "p-8 md:p-12"}>
      {isSuccess ? (
        <div className="text-center py-20 flex flex-col items-center">
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">🎉</span>
          </div>
          <h3 className="text-3xl font-kaushan italic text-onyx-black mb-4">
            Reservation Complete!
          </h3>
          <p className="text-onyx-black/60 font-light mb-8 max-w-sm">
            Thank you for choosing Simmer Restaurant. Your reservation request
            has been successfully submitted and we will contact you shortly to
            confirm your booking.
          </p>
          {isModal && (
            <button
              onClick={handleClose}
              className="px-10 py-4 bg-onyx-black text-white hover:bg-gold hover:text-onyx-black transition-colors rounded-full font-bold uppercase tracking-[0.2em] text-sm object-fit"
            >
              Close
            </button>
          )}
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Top Row: Quick Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-b border-gray-100 pb-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Guests *
                </label>
                <select
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full h-[40px] bg-ghost-cream border border-gray-200 px-4 rounded-lg focus:outline-hidden focus:border-gold transition-colors text-sm appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Type *
                </label>
                <select
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full h-[40px] bg-ghost-cream border border-gray-200 px-4 rounded-lg focus:outline-hidden focus:border-gold transition-colors text-sm appearance-none"
                >
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Event">Event</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Time *
                </label>
                <input
                  name="time"
                  required
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full h-[40px] bg-ghost-cream border border-gray-200 px-4 rounded-lg focus:outline-hidden focus:border-gold transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Date *
                </label>
                <input
                  name="date"
                  required
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full h-[40px] bg-ghost-cream border border-gray-200 px-4 rounded-lg focus:outline-hidden focus:border-gold transition-colors text-sm"
                />
              </div>
            </div>

            {/* Name and Contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full h-[40px] bg-ghost-cream border border-gray-200 px-4 rounded-lg focus:outline-hidden focus:border-gold transition-colors text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Email *
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-[40px] bg-ghost-cream border border-gray-200 px-4 rounded-lg focus:outline-hidden focus:border-gold transition-colors text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Phone Number *
                </label>
                <div className="flex">
                  <div className="h-[40px] bg-ghost-cream border border-r-0 border-gray-200 px-4 rounded-l-lg flex items-center justify-center text-sm font-medium border-solid text-nowrap">
                    🇳🇬 +234
                  </div>
                  <input
                    name="phone"
                    required
                    type="number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-ghost-cream border border-gray-200 px-4 rounded-r-lg focus:outline-hidden focus:border-gold transition-colors text-sm"
                    placeholder="Phone"
                  />
                </div>
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>
            </div>

            {/* Optional context from reservationItems */}
            {reservationItems.length > 0 && (
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/50">
                  Food & Drinks order
                </label>
                <textarea
                  name="foodOrders"
                  rows={3}
                  className="w-full bg-ghost-cream border border-gray-200 px-5 py-4 rounded-xl focus:outline-hidden focus:border-gold transition-colors text-sm"
                  defaultValue={`I'd like to order from the menu:\n${reservationItems.map((i) => `- ${i.name}`).join("\n")}`}
                />
              </div>
            )}

            {/* Special Requests */}
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group w-fit">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={formData.hasSpecialRequest}
                    onChange={(e) =>
                      updateFormData({ hasSpecialRequest: e.target.checked })
                    }
                    className="peer appearance-none w-5 h-5 border border-gray-300 rounded-md checked:bg-gold checked:border-gold transition-colors cursor-pointer"
                  />
                  <svg
                    className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-medium text-onyx-black/60 group-hover:text-onyx-black transition-colors md:mt-0.5">
                  Is there any special request? (Allergies, etc)
                </span>
              </label>

              {formData.hasSpecialRequest && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <textarea
                    name="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full bg-ghost-cream border border-gray-200 px-5 py-4 rounded-xl focus:outline-hidden focus:border-gold transition-colors text-sm"
                    placeholder="Dietary requirements, decorations..."
                  />
                </motion.div>
              )}
            </div>

            <div
              className={`pt-6 flex ${isModal ? "justify-end gap-4 border-t border-gray-100" : "justify-center"}`}
            >
              {isModal && (
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-4 font-bold tracking-widest text-xs uppercase text-onyx-black/50 hover:text-onyx-black transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-white tracking-[0.3em] font-medium py-4 px-10 text-xs uppercase hover:bg-gold/90 transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Confirm Reservation"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );

  if (isModal) {
    return <>{formContent}</>;
  }

  return (
    <section id="reservation-section" className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-screen border-t border-onyx-black/5">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dine.png"
          alt="Restaurant Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-onyx-black/70 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium block mb-4">
              Your Table Awaits
            </span>
            <h2 className="text-5xl md:text-6xl font-kaushan italic text-white leading-tight">
              Reservations
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl bg-white shadow-2xl mx-auto rounded-xl overflow-hidden relative"
        >
          {formContent}
        </motion.div>
      </div>
    </section>
  );
};

export default Reservations;
