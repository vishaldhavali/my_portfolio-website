"use client";

import { useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 border-2 border-[#6EACDA] rounded-full pointer-events-none z-50"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
};

export default CustomCursor;
