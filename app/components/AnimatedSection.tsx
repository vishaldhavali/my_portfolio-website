"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { usePerformanceMode } from "../hooks/usePerformanceMode";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "slideUp" | "slideIn" | "fadeIn" | "scaleUp" | "staggered";
  delay?: number;
  noSpacing?: boolean;
}

const AnimatedSection = ({
  children,
  className = "",
  animation = "slideUp",
  delay = 0,
  noSpacing = false,
}: AnimatedSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const isLowPerformance = usePerformanceMode();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getMobileAnimations = () => ({
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-20px" },
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: delay * 0.2,
    },
  });

  const getDesktopAnimations = () => {
    const animations = {
      slideUp: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, ease: "easeOut" },
      },
      slideIn: {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, ease: "easeOut" },
      },
      fadeIn: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.4 },
      },
      scaleUp: {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.4 },
      },
      staggered: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.4, staggerChildren: 0.1 },
      },
    };
    return animations[animation];
  };

  const getOptimizedAnimations = () => {
    if (isLowPerformance || shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.2 },
        viewport: { once: true, margin: "0px" },
      };
    }
    return isMobile ? getMobileAnimations() : getDesktopAnimations();
  };

  return (
    <motion.section
      {...getOptimizedAnimations()}
      className={`${className} overflow-hidden will-change-transform ${
        noSpacing ? "py-0 md:py-0" : ""
      }`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
