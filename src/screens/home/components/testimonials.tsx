"use client";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { cn } from "@/src/lib/utils";

const Testimonials = () => {
  return (
    <section
      className="bg-onyx-black py-24 relative overflow-hidden text-white"
      id="testimonials"
    >
      {/* Decorative Lights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 mb-5 px-3.5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-y-6 w-full flex-col lg:flex-row md:justify-between"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-kaushan italic text-white leading-tight mb-4 text-left">
              Jos' top-rated <br />
              <span className="text-gold not-italic font-sans font-light tracking-tight">
                Dining Experience
              </span>
            </h2>

            <ReviewAndRating className="hidden lg:flex" />
          </motion.div>
        </div>
      </div>

      {/* Full-Width Reviews Marquee */}
      <div className="relative w-full overflow-visible">
        <Marquee speed={120} pauseOnHover className="py-12 flex items-stretch">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/3 shadow-lg p-6 mx-4 w-[90vw] md:w-[450px] min-h-[300px] md:min-h-0 relative group transition-all duration-700 flex flex-col backdrop-blur-sm self-stretch"
            >
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-8 rotate-180 transition-colors" />

              {/* Card Header: Avatar & Info */}
              <div className="flex items-center gap-4 mb-8 shrink-0">
                <div className="relative size-14 rounded-full border-2 border-gold/30 ring-4 ring-gold/5">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif! text-lg text-gold flex items-center gap-2">
                    {item.name}
                  </h4>
                  <div className="flex text-gold gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <MdOutlineStar key={i} className="w-3 h-3 fill-gold" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-white/90 font-light leading-relaxed relative pl-4 text-base grow flex items-center before:content-[''] before:absolute before:-left-1 before:inset-y-0 before:w-0.5 before:bg-gold/30">
                "{item.text}"
              </p>
            </div>
          ))}
        </Marquee>

        <ReviewAndRating className="lg:hidden justify-start px-6 mt-2" />
      </div>
    </section>
  );
};

export default Testimonials;

const ReviewAndRating = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl font-serif text-gold">4.3</span>
        <div className="flex flex-col">
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <MdOutlineStar key={i} className="size-2.5 fill-gold" />
            ))}
          </div>
          <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">
            Rating
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 md:border-l md:border-white/10 md:pl-6">
        <span className="text-3xl font-serif text-gold">77+</span>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold leading-tight">
            Verified
          </span>
          <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold leading-tight">
            Reviews
          </span>
        </div>
      </div>
    </div>
  );
};

const googleLink =
  "https://www.google.com/search?sca_esv=c575d2bf7ecd87ab&sxsrf=ANbL-n7LbRLUyCLXIys9oyKdqoP0129H-A:1773334630383&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOa7LSlsad5BxQMJk25bMsYBOL3A_ciAvS23BAkCdPmswreCUdQnCJXODxvy4YwtfFW3PnTxdGWn60d5WlYsYAuY4CU8_EwRKbFEtgYUtC_ZE30d51w%3D%3D&q=Simmer+restaurant+Reviews&sa=X&ved=2ahUKEwjh0dil6pqTAxUoW0EAHT8zFnMQ0bkNegQIJBAH&biw=1377&bih=677&dpr=1.39";

const testimonials = [
  {
    name: "Victor Benante",
    avatar: "/victor.png",
    text: "I call this place 'Jos special'. They serve genuine, authentic dishes made with care and rich in tradition. Each meal is crafted to capture the true essence of Nigerian heritage.",
    spent: "₦4,000–6,000",
  },
  {
    name: "Monica Binjin",
    avatar: "/monica.png",
    text: "The waiters are amazingly courteous and the ambience is fabulous. You’d get the worth of your money here. I highly recommend. ✅ timeliness ✅ service.",
    spent: "₦14,000–16,000",
  },
  {
    name: "Abdulazeez Damilola",
    avatar: "/abdul.png",
    text: "I had a great time at the restaurant, the food was nice, excellent taste and the delivery was swift. The ambience feels like something out of a moonlight experience.",
    spent: "₦4,000–6,000",
  },
  {
    name: "Moses Christabel",
    avatar: "/moses.png",
    text: "They are so welcoming and they complement everyone nicely which made my friends and I smile. They are exceptionally neat and organized. I love it here!",
    spent: "₦16,000–18,000",
  },
  {
    name: "Lady Anonymous",
    avatar: "/lady.png",
    text: "This has to be the best restaurant I have ever experienced in this city. From the ambience to the food and customer service. Everything was amazing and I highly recommend.",
    spent: "₦20,000+",
  },
];
