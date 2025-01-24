"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Set viewport height after component mounts
    setViewportHeight(window.innerHeight);

    // Optional: Update on window resize
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const opacity = useTransform(scrollY, [0, viewportHeight], [1, 0.5]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D001A] to-[#1A0033]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[#0D001A]/50" />
      </div>
    </motion.div>
  );
};

export default ParallaxBackground;
