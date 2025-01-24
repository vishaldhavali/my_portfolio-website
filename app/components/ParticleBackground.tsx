"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";

interface ParticleBackgroundProps {
  options: ISourceOptions;
}

const ParticleBackground = ({ options }: ParticleBackgroundProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        ...options,
        fps_limit: 60,
        particles: {
          ...options.particles,
          move: {
            ...options.particles?.move,
            speed: isMobile ? 0.3 : 0.5,
          },
          number: {
            ...options.particles?.number,
            density: {
              enable: true,
              area: isMobile ? 600 : 800,
            },
          },
        },
        retina_detect: false,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
