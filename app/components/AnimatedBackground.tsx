import { useState, useEffect, ReactNode, useRef } from "react";

interface AnimatedBackgroundProps {
  variant?: string;
  className?: string;
  children?: ReactNode;
  isVisible?: boolean;
}

export const AnimatedBackground = ({
  variant,
  className = "",
  children,
  isVisible = true,
}: AnimatedBackgroundProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver to pause animations when not visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { rootMargin: "-100px", threshold: 0 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (!isMounted) return null;

  const particleCount = isMobile ? 8 : 15; // Reduced from 30 to 15 (50% reduction)
  const animationDuration = isMobile ? 2 : 3;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        animationPlayState: isInView && isVisible ? "running" : "paused",
      }}
    >
      {children}
    </div>
  );
};
