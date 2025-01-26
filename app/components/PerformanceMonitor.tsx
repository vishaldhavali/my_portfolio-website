"use client";

import { useEffect, useState } from "react";
import { useReportWebVitals } from "next/web-vitals";

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    let frame = 0;
    let lastTime = performance.now();

    const checkPerformance = () => {
      const time = performance.now();
      frame++;

      if (time >= lastTime + 1000) {
        setFps(Math.round((frame * 1000) / (time - lastTime)));
        frame = 0;
        lastTime = time;
      }

      requestAnimationFrame(checkPerformance);
    };

    requestAnimationFrame(checkPerformance);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-0 right-0 bg-black/50 text-white p-2 text-sm">
      FPS: {fps}
    </div>
  );
};

export function reportWebVitals(metric) {
  console.log(metric);
  // Send to analytics
  if (metric.label === "web-vital") {
    // Send to your analytics
  }
}

export default PerformanceMonitor;
