"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  const menuItems = [
    "Home",
    "About",
    "Achievements",
    "Skills",
    "Softskills",
    "Education",
    "Projects",
    "Work",
    "Certifications",
    "Resume",
    "Hobbies",
    "Contact",
  ];

  const isActive = (item: string) => activeSection === item.toLowerCase();

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
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <Link
            href="/"
            onClick={() => scrollToSection("home")}
            className="text-2xl sm:text-3xl font-bold flex-shrink-0 cursor-pointer"
            style={{
              background: "linear-gradient(to right, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VD
          </Link>

          {/* Desktop Menu - Right (lg+) */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap justify-end">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                  isActive(item)
                    ? "text-pink-400 bg-purple-600/20 border-b-2 border-pink-400"
                    : "text-purple-300 hover:text-pink-400 hover:bg-purple-600/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Tablet Menu - Right (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center gap-1 flex-wrap justify-end">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-2 py-1 text-xs rounded-md transition-all duration-300 ${
                  isActive(item)
                    ? "text-pink-400 bg-purple-600/20 border-b border-pink-400"
                    : "text-purple-300 hover:text-pink-400 hover:bg-purple-600/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Right */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-purple-300 hover:text-pink-400 hover:bg-purple-800/20 transition-all duration-300"
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

          {/* Mobile Menu Dropdown */}
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
                      className={`block w-full px-3 py-2 text-base rounded-md transition-all duration-300 ${
                        isActive(item)
                          ? "text-pink-400 bg-purple-600/20 border-l-2 border-pink-400"
                          : "text-purple-300 hover:text-pink-400 hover:bg-purple-600/10"
                      }`}
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
