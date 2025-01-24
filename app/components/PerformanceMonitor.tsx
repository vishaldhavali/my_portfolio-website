"use client";

import { useEffect, useState } from "react";

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);

  if (process.env.NODE_ENV !== "development") return null;

  useEffect(() => {
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

  return (
    <div className="fixed bottom-0 right-0 bg-black/50 text-white p-2 text-sm">
      FPS: {fps}
    </div>
  );
};

export default PerformanceMonitor;
