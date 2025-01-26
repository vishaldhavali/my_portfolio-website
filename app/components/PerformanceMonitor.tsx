"use client";

import { useEffect, useState } from "react";
import { useReportWebVitals } from "next/web-vitals";

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);
  const [webVitals, setWebVitals] = useState({
    CLS: 0,
    FID: 0,
    LCP: 0,
  });

  // Monitor FPS
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    let frame = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const checkPerformance = () => {
      const time = performance.now();
      frame++;

      if (time >= lastTime + 1000) {
        setFps(Math.round((frame * 1000) / (time - lastTime)));
        frame = 0;
        lastTime = time;
      }

      animationFrameId = requestAnimationFrame(checkPerformance);
    };

    animationFrameId = requestAnimationFrame(checkPerformance);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Monitor Web Vitals
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("web-vitals").then(({ getCLS, getFID, getLCP }) => {
        getCLS((metric) => {
          console.log("CLS:", metric.value);
          setWebVitals((prev) => ({ ...prev, CLS: metric.value }));
        });
        getFID((metric) => {
          console.log("FID:", metric.value);
          setWebVitals((prev) => ({ ...prev, FID: metric.value }));
        });
        getLCP((metric) => {
          console.log("LCP:", metric.value);
          setWebVitals((prev) => ({ ...prev, LCP: metric.value }));
        });
      });
    }
  }, []);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-0 right-0 bg-black/50 text-white p-2 text-sm space-y-1">
      <div>FPS: {fps}</div>
      <div>CLS: {webVitals.CLS.toFixed(3)}</div>
      <div>FID: {webVitals.FID.toFixed(1)}ms</div>
      <div>LCP: {webVitals.LCP.toFixed(1)}ms</div>
    </div>
  );
};

export function reportWebVitals(metric: any) {
  // Send to analytics
  if (metric.label === "web-vital") {
    console.log(metric.name, metric.value);
    // Add your analytics code here
  }
}

export default PerformanceMonitor;
