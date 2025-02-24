"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Failed to load particles:", error);
    }
  }, []);

  const particleOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#A855F7", "#EC4899", "#9333EA"],
      },
      shape: {
        type: ["circle", "triangle"],
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#A855F7",
        opacity: 0.15,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.03,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
      twinkle: {
        particles: {
          enable: true,
          color: "#EC4899",
          frequency: 0.05,
          opacity: 0.5,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"],
          parallax: {
            enable: true,
            force: 50,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.3,
            color: "#EC4899",
          },
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.4,
          opacity: 0.6,
        },
        push: {
          quantity: 3,
        },
      },
    },
    background: {
      color: "transparent",
    },
    detectRetina: true,
    fpsLimit: 30,
    smooth: true,
  };

  if (!isMounted) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
