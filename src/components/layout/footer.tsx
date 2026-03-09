"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { ArrowUp } from "lucide-react";
import { restaurantConfig } from "../../config/restaurant";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative overflow-hidden text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer.png"
          alt="Simmer background"
          fill
          className="object-cover brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-black/8" />
      </div>

      {/* Decorative Large Text in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-kaushan text-[#282828]/55 select-none pointer-events-none whitespace-nowrap z-0">
        SIMM3R
      </div>

      <div className="relative z-10 py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-kaushan italic text-white leading-tight">
                  Simm3r Restaurant
                </h2>
                <p className="text-white/40 text-sm tracking-wide font-light max-w-sm">
                  Where culinary artistry meets timeless elegance.
                </p>
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-3 border border-white/20 rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
              >
                Back to Top{" "}
                <ArrowUp
                  size={14}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between items-start lg:items-end space-y-20 lg:space-y-0">
              {/* Nav links */}
              <nav>
                <ul className="flex flex-wrap gap-8 lg:gap-12 text-xs uppercase tracking-[0.2em] text-white/50">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Menu", href: "/menu" },
                    { name: "Contact", href: "/contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Socials & Contact Info */}
              <div className="space-y-10 lg:text-right">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  <div className="flex gap-4">
                    {[
                      {
                        icon: <FaFacebook size={14} />,
                        href: restaurantConfig.socials.facebook,
                      },
                      {
                        icon: <FaInstagram size={14} />,
                        href: restaurantConfig.socials.instagram,
                      },
                      {
                        icon: <FaXTwitter size={14} />,
                        href: restaurantConfig.socials.twitter,
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gold hover:text-white transition-all duration-500"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar items */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-[10px] uppercase tracking-[0.25em] text-white/20 pt-16 lg:pt-0">
                  <span>
                    All Rights Reserved &copy; {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
