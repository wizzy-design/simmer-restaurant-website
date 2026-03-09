"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { useReservation } from "../../context/reservation-context";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openSidebar } = useReservation();

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
              "text-3xl font-semibold font-kaushan transition-colors duration-500",
              showDarkText ? "text-gold" : "text-white",
            )}
          >
            Simm3r
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={cn(
                "text-[11px] uppercase tracking-[0.25em] font-medium transition-colors hover:text-gold",
                showDarkText ? "text-onyx-black" : "text-white",
              )}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={openSidebar}
            className={cn(
              "relative text-[11px] uppercase tracking-[0.25em] font-medium border px-8 py-3.5 transition-all duration-500 flex items-center gap-2",
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
              "md:hidden p-2 transition-colors",
              showDarkText ? "text-onyx-black" : "text-white",
            )}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[76px] bg-ghost-cream/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-kaushan italic text-onyx-black hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSidebar();
              }}
              className="mt-4 text-[11px] uppercase tracking-[0.3em] text-gold border border-gold px-12 py-5 hover:bg-gold hover:text-white transition-all relative"
            >
              Reservations
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-onyx-black text-white w-6 h-6 flex items-center justify-center text-[10px] font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const navLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "#contact" },
];
