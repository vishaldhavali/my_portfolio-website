"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 64 : 80;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const targetPosition = sectionTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Work",
    "Certifications",
    "Resume",
    "Contact",
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#080014]/90 backdrop-blur-md shadow-lg border-b border-purple-500/20"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold flex-shrink-0"
            style={{
              background: "linear-gradient(to right, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VD
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-3 py-2 text-sm text-purple-400 hover:text-pink-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Tablet Menu */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-2 py-1 text-xs text-purple-400 hover:text-pink-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-pink-400 hover:bg-purple-800/20 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-[#080014]/95 backdrop-blur-lg md:hidden border-b border-purple-500/20"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full px-3 py-2 text-base text-purple-400 hover:text-pink-400 hover:bg-purple-800/20 rounded-md transition-colors duration-300"
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
