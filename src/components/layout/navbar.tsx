"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-[#D9D2C5]">
      <div className="flex items-center justify-between container mx-auto py-5">
        <div>
          <Link
            href="/"
            className="text-3xl font-semibold font-kaushan text-gold"
          >
            Simm3r
          </Link>
        </div>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-sm text-charcoal-grey font-medium"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <button className="text-sm text-gold font-medium border border-gold px-5 py-3 ">
          Reservations
        </button>
      </div>
    </nav>
  );
}
