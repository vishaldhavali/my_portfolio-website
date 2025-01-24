"use client";

import { useState, useEffect } from "react";

interface AnimatedBackgroundProps {
  variant: string;
  className?: string;
}

export const AnimatedBackground = ({
  variant,
  className = "",
}: AnimatedBackgroundProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) return null;

  const variants: { [key: string]: JSX.Element } = {
    unified: (
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#1A0033] to-[#0A0118]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(168,85,247,0.1) 0%, rgba(236,73,153,0.1) 50%, rgba(8,0,20,0.8) 100%)",
        }}
      ></div>
    ),
    particles: <div></div>,
    gradient: <div></div>,
    mesh: <div></div>,
    circles: <div></div>,
    waves: <div></div>,
    grid: <div></div>,
  };

  return (
    <div
      className={`fixed inset-0 -z-0 overflow-hidden pointer-events-none ${className}`}
    >
      {variants[variant]}
    </div>
  );
};
