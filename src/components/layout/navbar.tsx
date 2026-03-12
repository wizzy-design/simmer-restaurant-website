"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { useReservation } from "../../context/reservation-context";
import { FaBurger, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { restaurantConfig } from "../../config/restaurant";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openSidebar } = useReservation();
  const [expandedLink, setExpandedLink] = useState<string | null>(null);

  // Force dark text on menu page or other potential light-background pages
  const isLightPage = pathname === "/menu";
  const showDarkText = isScrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        isScrolled
          ? "bg-ghost-cream/90 backdrop-blur-md shadow-sm border-b border-gold/30"
          : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between container mx-auto px-6">
        <div>
          <Link
            href="/"
            className={cn(
              "text-3xl font-semibold font-kaushan transition-colors duration-500 relative z-50",
              mobileMenuOpen || showDarkText ? "text-gold" : "text-white",
            )}
          >
            Simm3r
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={cn(
                "group relative text-[11px] uppercase tracking-[0.25em] font-medium transition-colors",
                showDarkText ? "text-onyx-black" : "text-white",
              )}
            >
              <Link
                href={link.href}
                className={cn(
                  "py-4 inline-flex items-center gap-1 transition-all duration-300 relative",
                  showDarkText ? "hover:text-gold" : "hover:opacity-70",
                )}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </Link>

              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left">
                  <div className="bg-white rounded-2xl shadow-xl shadow-onyx-black/10 border border-gray-100 py-3 w-64 flex flex-col">
                    {link.dropdown.map((drop) => (
                      <Link
                        key={drop.name}
                        href={drop.href}
                        className="w-full px-6 py-2.5 text-onyx-black/80 hover:bg-gold/10 hover:text-gold hover:pl-8 transition-all duration-300 block"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={openSidebar}
            className={cn(
              "relative text-[11px] uppercase tracking-[0.25em] font-medium border px-8 py-3.5 transition-all duration-500 hidden lg:flex items-center gap-2",
              showDarkText
                ? "text-gold border-gold hover:bg-gold hover:text-white"
                : "text-white border-white hover:bg-white hover:text-onyx-black",
            )}
          >
            Reservations
            {itemCount > 0 && (
              <span
                className={cn(
                  "absolute -top-2 -right-2 size-5 flex items-center justify-center text-[9px] font-bold rounded-full",
                  showDarkText
                    ? "bg-onyx-black text-white"
                    : "bg-white text-onyx-black",
                )}
              >
                {itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors relative z-50",
              mobileMenuOpen || showDarkText ? "text-onyx-black" : "text-white",
            )}
          >
            {mobileMenuOpen ? (
              <MdOutlineRestaurantMenu size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay — Full Screen Immersive Experience */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ghost-cream z-40 lg:hidden flex flex-col"
          >
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-8 pt-32 pb-12 flex flex-col items-center">
              <motion.div
                variants={{
                  open: { transition: { staggerChildren: 0.1 } },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
                initial="closed"
                animate="open"
                className="w-full max-w-sm flex flex-col gap-10"
              >
                {navLinks.map((link, idx) => {
                  const hasDropdown = !!link.dropdown;
                  const isExpanded = expandedLink === link.name;

                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 },
                      }}
                      className="flex flex-col items-center w-full"
                    >
                      <div className="flex items-center justify-between w-full group">
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-sans tracking-widest text-gold font-bold opacity-50 uppercase">
                            0{idx + 1}
                          </span>
                          {hasDropdown ? (
                            <button
                              onClick={() =>
                                setExpandedLink(isExpanded ? null : link.name)
                              }
                              className="text-4xl font-kaushan italic text-onyx-black hover:text-gold transition-colors text-left flex items-center gap-4"
                            >
                              {link.name}
                              <ChevronDown
                                className={cn(
                                  "w-6 h-6 transition-transform duration-500",
                                  isExpanded && "rotate-180",
                                )}
                              />
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-4xl font-kaushan italic text-onyx-black hover:text-gold transition-colors"
                            >
                              {link.name}
                            </Link>
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {hasDropdown && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden w-full mt-6"
                          >
                            <div className="grid grid-cols-2 gap-3 pb-4">
                              {link.dropdown.map((drop) => (
                                <Link
                                  key={drop.name}
                                  href={drop.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="p-4 border border-gold/10 bg-white/50 rounded-xl flex items-center justify-center text-center text-[10px] uppercase tracking-widest text-onyx-black/70 hover:bg-gold/5 hover:text-gold transition-all font-sans font-bold leading-tight"
                                >
                                  {drop.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  className="pt-4 flex flex-col items-center gap-8"
                >
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openSidebar();
                    }}
                    className="w-full text-[11px] uppercase tracking-[0.3em] text-white bg-gold px-12 py-5 hover:bg-onyx-black transition-all relative font-bold"
                  >
                    Manage Reservations
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-onyx-black text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-ghost-cream scale-110">
                        {itemCount}
                      </span>
                    )}
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Menu Footer — Re-integrated with Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-8 border-t border-gold/10 flex flex-col items-center gap-6"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-onyx-black/40 font-bold">
                Follow our story
              </p>
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
                    className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-500"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-onyx-black/20 font-medium">
                &copy; {new Date().getFullYear()} Simmer Restaurant
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const navLinks = [
  { name: "Menu", href: "/menu" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Catering Services", href: "/services/catering-services" },
      { name: "Pastry School", href: "/services/pastry-school" },
      {
        name: "Restaurant Consultancy",
        href: "/services/restaurant-consultancy",
      },
      { name: "Foodtopia Festival", href: "/services/food-festival" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
