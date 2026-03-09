"use client";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Peace James",
    source: "Google Reviews",
    text: "Five stars or nothing! Sweet November (now Simmer) was an experience! Lovely and cozy ambience, nice and courteous staff especially Paul who was very professional. Tasty and really affordable meals and drinks. Had a date on a Sunday evening and we both enjoyed our time there so well that we went back on Monday…lol. I highly recommend!",
    rating: 5,
  },
  {
    name: "Faith Ogbe Peter",
    source: "Google Reviews",
    text: "My experience was fantastic. I really love the view and their meals. It is delicious.",
    rating: 5,
  },
  {
    name: "Oluwaseun Oluwaferanmi",
    source: "Google Reviews",
    text: "I came to Jos for a short vacation... ordered jollof rice and chicken sauce, it was the best meal I’ve ever tasted, and it’s not too expensive, their menu is pocket friendly. Kudos 🙌 to the chef! The customer service is top notch 🔝. All 5 star ⭐️ ⭐️⭐️⭐️⭐️",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-onyx-black py-24 md:py-32 relative overflow-hidden text-white"
      id="testimonials"
    >
      {/* Decorative Lights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4">
              Social Proof
            </p>
            <h2 className="text-4xl md:text-6xl font-kaushan italic text-white leading-tight">
              Words from our beloved guests
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-full p-4 pr-8 backdrop-blur-sm self-start md:self-end"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
              {/* Minimal Google Icon representation */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            <div>
              <div className="flex text-gold mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4"
                    fill={s === 5 ? "url(#half)" : "currentColor"}
                  />
                ))}
              </div>
              <p className="font-medium text-sm">
                4.3 / 5 Rating{" "}
                <span className="text-white/50 font-light ml-1">
                  (77 Reviews)
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative group hover:bg-white/10 hover:border-gold/30 transition-all duration-500 flex flex-col"
            >
              <Quote className="w-10 h-10 text-gold/20 absolute top-8 right-8 group-hover:text-gold/40 transition-colors duration-500 rotate-180" />

              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-[#C4C8C9] font-light italic leading-relaxed mb-10 grow text-sm md:text-base">
                "{item.text}"
              </p>

              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white text-base md:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-xs text-white/50 font-mono tracking-widest uppercase mt-1">
                    Verified • {item.source}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SVG Defs for fractional star */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
