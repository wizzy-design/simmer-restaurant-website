"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Salad,
  Briefcase,
  Users,
  PartyPopper,
  CalendarDays,
} from "lucide-react";
import { fadeUpAnimate } from "@/src/lib/animations";

const offerings = [
  {
    title: "Heartfelt Weddings",
    desc: "Personalized catering that reflects your style and vision, ensuring every dish delights your guests on your most important day.",
    icon: Heart,
  },
  {
    title: "Healthy Buffets",
    desc: "Nutritious and delicious buffet options full of vibrant flavors that cater to various tastes and dietary needs without compromising elegance.",
    icon: Salad,
  },
  {
    title: "Corporate Events",
    desc: "Exceptional catering that impresses clients and colleagues alike. Elevate your business meetings and conferences with premium culinary service.",
    icon: Briefcase,
  },
  {
    title: "Social Gatherings",
    desc: "Delicious dishes that enhance every party, reunion, birthday, or bridal shower. We take care of the details so you can celebrate.",
    icon: Users,
  },
  {
    title: "Themed Events",
    desc: "Creative themed catering meticulously tailored to match your event’s specific atmosphere and stylistic vision.",
    icon: PartyPopper,
  },
  {
    title: "Seasonal Menus",
    desc: "We celebrate local ingredients and culinary trends, designing fresh, seasonal menus that capture the unique flavors of the time of year.",
    icon: CalendarDays,
  },
];

const CateringScreen = () => {
  return (
    <div className="bg-ghost-cream min-h-screen pt-32 text-onyx-black relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section: Editorial Split */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24 mb-20 md:mb-32">
          {/* Giant Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-3/5 space-y-8"
          >
            <h1 className="text-5xl font-kaushan italic leading-[0.9] tracking-tighter text-onyx-black md:text-6xl lg:text-7xl">
              Premium Event <br className="hidden md:block" />
              <span className="text-gold not-italic font-sans font-light">
                Catering Services.
              </span>
            </h1>

            <p className="text-sm md:text-base font-light text-onyx-black/70 max-w-xl leading-relaxed pl-4 lg:pl-6 border-l-[1.5px] border-gold/40">
              We bring the Simmer culinary legacy to your venue. From bespoke
              buffets to intimate private dining, ensure your guests experience
              excellence in every bite.
            </p>

            <Link
              href="/contact"
              className="relative inline-block text-xs cursor-pointer uppercase tracking-[0.25em] text-white border border-gold bg-gold px-8 py-3.5 overflow-hidden group transition-colors duration-500 hover:bg-gold/70"
              id="book-us-button"
            >
              <span className="relative">Book Us</span>
            </Link>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-full lg:w-2/5 h-[60vh] lg:h-[80vh] rounded-4xl overflow-hidden sticky top-32 shadow-2xl"
          >
            <Image
              src="/catering-hero.jpg"
              alt="Catering services hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Offerings: Large List Format */}
      <div className="container mx-auto px-4 md:px-8 pb-28 md:pb-40">
        <div className="mb-10 md:mb-20 flex flex-col lg:flex-row justify-between items-baseline gap-8">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-onyx-black">
            What we <span className="italic font-kaushan text-gold">offer</span>
          </h2>
          <p className="text-lg font-light text-onyx-black/60 text-left lg:max-w-md">
            From bespoke intimate gatherings to grand corporate events, our
            expertise ensures excellence at any scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start gap-6 group"
            >
              {/* Icon Circle */}
              <div className="size-10 md:size-14 shrink-0 rounded-full bg-white border border-onyx-black/5 flex items-center justify-center shadow-sm group-hover:border-gold/30 group-hover:shadow-md transition-all duration-500">
                <item.icon
                  className="size-4 lg:size-6 text-gold group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="grow pt-1 md:pt-2 space-y-3">
                <h3 className="text-lg md:text-xl font-medium text-onyx-black tracking-tight group-hover:text-gold transition-colors whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-light leading-relaxed text-onyx-black/60 group-hover:text-onyx-black transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-40 text-center flex flex-col items-center">
          <p className="text-xl md:text-3xl lg:text-4xl font-serif text-onyx-black/80 max-w-2xl mx-auto mb-16 leading-relaxed">
            Ready to Make Your Event{" "}
            <span className="font-kaushan text-gold">Unforgettable?</span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-onyx-black text-white hover:bg-gold hover:text-white text-sm uppercase tracking-widest font-bold transition-colors duration-500 shadow-xl group"
          >
            <span className="group-hover:scale-110 transition-transform duration-500">
              Book Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CateringScreen;
