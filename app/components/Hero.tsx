"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import type { ISourceOptions } from "tsparticles-engine";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { useState, useEffect } from "react";

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#080014", "#A855F7", "#EC4899"],
    },
    opacity: {
      value: 0.2,
      random: true,
      animation: {
        enable: true,
        speed: 0.3,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1.5,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.5,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce",
      },
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#A855F7",
      opacity: 0.1,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.03,
      },
    },
    blur: {
      enable: true,
      value: 1,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.2,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  background: {
    color: "#080014",
    image:
      "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(236,73,153,0.15) 50%, rgba(8,0,20,0.8) 100%)",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  detectRetina: true,
} as ISourceOptions;

const getMobileParticleOptions = (): ISourceOptions => ({
  ...particlesOptions,
  particles: {
    ...particlesOptions.particles,
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 1.5,
      random: true,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.5,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce",
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      animation: {
        enable: true,
        speed: 0.3,
        minimumValue: 0.1,
        sync: false,
      },
    },
  },
  fullScreen: {
    enable: false,
  },
  background: {
    ...particlesOptions.background,
    size: "100% 100%",
  },
});

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 64 : 80;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const targetPosition = sectionTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D001A] via-[#1A0033] to-[#0D001A] pb-0"
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-600/20 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 backdrop-blur-[1px]">
        <ParticleBackground
          options={isMobile ? getMobileParticleOptions() : particlesOptions}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center z-10 min-h-[100dvh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center w-full flex flex-col items-center"
        >
          <div className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-4 md:mb-6 rounded-full relative group overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-pulse group-hover:from-indigo-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300" />
            <img
              src="/bitmoji.jpeg"
              alt="Bitmoji Avatar"
              className="w-full h-full object-cover rounded-full border-4 border-indigo-500/30 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "linear-gradient(to right, #6366f1, #A855F7, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Vishal Dhavali
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-purple-300/80 mb-4 md:mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Aspiring Software Developer | Passionate about Web Development
        </motion.p>
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-4 md:mb-8"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full
                hover:from-purple-600 hover:to-pink-600 transition-all duration-300
                transform hover:scale-105 active:scale-95 font-medium"
            >
              Get in Touch
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center items-center gap-6"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://www.linkedin.com/in/vishal-dhavali-9a8b442a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#021526]/50 p-3 rounded-full hover:bg-purple-600/20 transition-all duration-300 
                    group border border-purple-500/20 hover:border-purple-500/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-2xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent
                className="bg-purple-900/90 border border-purple-500/20 text-purple-200"
                sideOffset={5}
              >
                <p>LinkedIn Profile</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://github.com/vishaldhavale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#021526]/50 p-3 rounded-full hover:bg-purple-600/20 transition-all duration-300 
                    group border border-purple-500/20 hover:border-purple-500/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-2xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent
                className="bg-purple-900/90 border border-purple-500/20 text-purple-200"
                sideOffset={5}
              >
                <p>GitHub Profile</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="/assets/resume/Vishal_Dhavali_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#021526]/50 p-3 rounded-full hover:bg-purple-600/20 transition-all duration-300 
                    group border border-purple-500/20 hover:border-purple-500/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileAlt className="text-2xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent
                className="bg-purple-900/90 border border-purple-500/20 text-purple-200"
                sideOffset={5}
              >
                <p>View Resume</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-32 bg-gradient-to-t from-[#0A0118] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
