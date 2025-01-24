import { useState, useEffect } from "react";

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

  return (
    <div
      className={`fixed inset-0 -z-0 overflow-hidden pointer-events-none ${className}`}
    >
      {variants[variant]}
    </div>
  );
};
