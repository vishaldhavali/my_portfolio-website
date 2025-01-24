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

  const particleCount = isMobile ? 15 : 30;
  const animationDuration = isMobile ? 2 : 3;

  const variants: Record<string, JSX.Element> = {
    unified: <div></div>,
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
