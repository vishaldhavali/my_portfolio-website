import { useEffect, useState } from "react";

export const useReducedMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    // Check device performance
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const hasLowMemory =
        navigator?.deviceMemory && navigator.deviceMemory < 4;
      return isMobile || hasLowMemory;
    };

    setShouldReduceMotion(mediaQuery.matches || checkPerformance());
  }, []);

  return shouldReduceMotion;
};
