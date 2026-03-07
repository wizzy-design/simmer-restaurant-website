"use client";

import { motion } from "motion/react";
import { MapPin, Mail, Phone } from "lucide-react";
import { restaurantConfig } from "../../../config/restaurant";

const Location = () => {
  const mapQuery = encodeURIComponent(restaurantConfig.contact.address);
  const mapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section className="bg-white py-20 overflow-hidden border-t border-onyx-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Editorial Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div {...fadeUp}>
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium block mb-4">
                Visit Us
              </span>
              <h2 className="text-5xl md:text-6xl font-kaushan italic text-onyx-black leading-tight">
                Where to <br /> find us
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="space-y-8"
            >
              <a
                href={restaurantConfig.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 group"
              >
                <div className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-onyx-black/40">
                    Address
                  </span>
                  <p className="text-sm text-onyx-black/70 max-w-xs leading-relaxed transition-colors group-hover:text-onyx-black">
                    {restaurantConfig.contact.address}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${restaurantConfig.contact.email}`}
                className="flex gap-4 group"
              >
                <div className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-onyx-black/40">
                    Email
                  </span>
                  <p className="text-sm text-onyx-black/70 transition-colors group-hover:text-onyx-black">
                    {restaurantConfig.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${restaurantConfig.contact.phoneRaw}`}
                className="flex gap-4 group"
              >
                <div className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-onyx-black/40">
                    Phone
                  </span>
                  <p className="text-sm text-onyx-black/70 transition-colors group-hover:text-onyx-black">
                    {restaurantConfig.contact.phone}
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Framed Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 h-[450px] md:h-[500px] w-full relative overflow-hidden shadow-lg border border-onyx-black/5"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) contrast(1.1) opacity(0.9)",
              }}
              allowFullScreen
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};
