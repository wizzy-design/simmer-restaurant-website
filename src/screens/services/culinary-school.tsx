"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const CulinarySchoolScreen = () => {
  return (
    <div className="bg-ghost-cream min-h-screen pt-32 text-onyx-black relative overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        {/* Hero Section: Editorial Split */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-3/5 space-y-8"
          >
            <h1 className="text-5xl font-kaushan italic leading-[0.9] tracking-tighter text-onyx-black md:text-6xl lg:text-7xl">
              Master the Art of <br className="hidden md:block" />
              <span className="text-gold font-sans font-light not-italic">
                Professional Cooking.
              </span>
            </h1>

            <p className="text-sm md:text-base font-light text-onyx-black/70 max-w-xl leading-relaxed pl-4 lg:pl-6 border-l-[1.5px] border-gold/40">
              Transform your culinary dreams into reality. Join Simmer Culinary
              Academy for an immersive 3-month journey into the world of
              professional cuisine and pastry, guided by expert mentors.
            </p>

            <Link
              href="/contact"
              className="relative inline-block text-xs cursor-pointer uppercase tracking-[0.25em] text-white border border-gold bg-gold px-8 py-3.5 overflow-hidden group transition-colors duration-500 hover:bg-gold/70"
            >
              <span className="relative">Enroll Now</span>
            </Link>
          </motion.div>

          {/* Media Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-full lg:w-2/5 aspect-4/5 lg:h-[80vh] rounded-xl overflow-hidden sticky top-32 shadow-2xl bg-onyx-black"
          >
            <video
              src="/culinary-school-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:pt-16">
          {/* Diplomas */}
          <div className="space-y-8 relative">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold opacity-80 mb-10">
              Diplomas (6 Months)
            </h3>
            <div className="space-y-8">
              {[
                { n: "Pastry Course", p: "₦850k" },
                { n: "Cuisine Class", p: "₦750k" },
                { n: "Restaurant Mgt.", p: "₦300k" },
              ].map((i) => (
                <div key={i.n} className="group cursor-default">
                  <p className="text-base font-medium text-onyx-black group-hover:text-gold transition-colors">
                    {i.n}
                  </p>
                  <p className="font-kaushan text-gold/60 text-xl">{i.p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Cuisine */}
          <div className="space-y-8 relative">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold opacity-80 mb-10">
              Global Cuisine
            </h3>
            <div className="space-y-5">
              {[
                { n: "African Cuisine", p: "₦200k" },
                { n: "Asian Cuisine", p: "₦150k" },
                { n: "French / Italian", p: "₦150k" },
                { n: "Middle Eastern", p: "₦150k" },
                { n: "Cooking Basics", p: "₦120k" },
                { n: "Breakfast Class", p: "₦135k" },
              ].map((i) => (
                <div
                  key={i.n}
                  className="flex justify-between items-center text-sm  border-onyx-black/5 pb-2 group"
                >
                  <span className="font-light group-hover:pl-2 transition-all">
                    {i.n}
                  </span>
                  <span className="font-medium text-gold">{i.p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pastry & Baking */}
          <div className="space-y-8 relative">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold opacity-80 mb-10">
              Baking & Pastry
            </h3>
            <div className="space-y-5">
              {[
                { n: "Sourdough/Baguette", p: "₦180k" },
                { n: "Cakes & Quick Bread", p: "₦150k" },
                { n: "Cookies", p: "₦150k" },
                { n: "Bread/Enriched", p: "₦100k" },
                { n: "Tarts/Pies/Choux", p: "₦100k" },
                { n: "Working w/ Chocolate", p: "₦250k" },
              ].map((i) => (
                <div
                  key={i.n}
                  className="flex justify-between items-center text-sm  pb-2 group"
                >
                  <span className="font-light group-hover:pl-2 transition-all">
                    {i.n}
                  </span>
                  <span className="font-medium text-gold">{i.p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div className="space-y-8 relative">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold opacity-80 mb-10">
              Specialties
            </h3>
            <div className="space-y-5">
              {[
                { n: "Dessert Class", p: "₦150k" },
                { n: "Candies & Confections", p: "₦150k" },
                { n: "Cake Decoration", p: "₦150k" },
                { n: "Creams & Sauces", p: "₦120k" },
                { n: "Restaurant Cons.", p: "Quote" },
              ].map((i) => (
                <div
                  key={i.n}
                  className="flex justify-between items-center text-sm  pb-2 group"
                >
                  <span className="font-light group-hover:pl-2 transition-all">
                    {i.n}
                  </span>
                  <span className="font-medium text-gold">{i.p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center flex flex-col items-center my-20 lg:my-30">
        <p className="text-xl md:text-3xl lg:text-4xl font-serif text-onyx-black/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          Ready to Begin Your{" "}
          <span className="font-kaushan text-gold">Culinary Adventure?</span>
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gold blur-3xl opacity-10 rounded-full" />
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center w-48 h-48 rounded-full bg-onyx-black text-white hover:bg-gold hover:text-white text-sm uppercase tracking-widest font-bold transition-all duration-500 shadow-2xl group overflow-hidden"
          >
            <span className="relative z-10 group-hover:scale-110 transition-transform">
              Join Now
            </span>
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* Instagram Connect: Slim Card */}
      <div className="container mx-auto px-6 mb-20 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto bg-white border border-onyx-black/5 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="size-16 rounded-2xl bg-gold/5 flex items-center justify-center shrink-0">
              <FaInstagram className="text-gold size-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-medium text-onyx-black">
                Connect with us on <span className="text-gold">Instagram</span>
              </h3>
              <p className="text-sm text-onyx-black/50 font-light">
                See the daily life and artistry at the academy.
              </p>
            </div>
          </div>
          <Link
            href="https://www.instagram.com/simmerculinary/reels/"
            target="_blank"
            className="w-full md:w-auto px-10 py-4 bg-onyx-black text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-gold transition-all duration-500 text-center shadow-lg hover:shadow-gold/20"
          >
            Follow @simmerculinary
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CulinarySchoolScreen;
