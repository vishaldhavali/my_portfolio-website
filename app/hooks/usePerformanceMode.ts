import { useEffect, useState } from "react";

export const usePerformanceMode = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      // Check device capabilities
      const isMobile = window.innerWidth < 768;
      const hasLowMemory =
        navigator?.deviceMemory && navigator.deviceMemory < 4;
      const isLowEndDevice =
        navigator?.hardwareConcurrency && navigator.hardwareConcurrency < 4;

      // Check if the device is struggling
      const isLowFPS = performance.now() > 1000 / 30; // Below 30fps

      return isMobile || hasLowMemory || isLowEndDevice || isLowFPS;
    };

    setIsLowPerformance(checkPerformance());

    // Recheck on visibility change
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        setIsLowPerformance(checkPerformance());
      }
    });
  }, []);

  return isLowPerformance;
};
