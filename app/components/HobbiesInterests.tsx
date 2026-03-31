"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaCode } from "react-icons/fa";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";
import { IconType } from "react-icons";

interface Hobby {
  name: string;
  icon?: IconType;
  imageIcon?: string;
  description: string;
}

const HobbiesInterests = () => {
  const hobbies: Hobby[] = [
    {
      name: "Reading Tech Blogs",
      icon: FaBook,
      description:
        "Passionate about Backend Architecture and Software Design Patterns",
    },
    {
      name: "Building Personal Projects",
      icon: FaCode,
      description:
        "Creating Java projects to explore new technologies and frameworks",
    },
    {
      name: "Vibe-Coding",
      imageIcon: "/vibecode_logo.png",
      description:
        "AI-driven development using natural language prompts to generate, debug, and refine code with AI agents",
    },
  ];

  return (
    <AnimatedSection
      animation="fadeIn"
      className="py-20 bg-[#0A0118]/50 md:px-8"
    >
      <AnimatedBackground variant="unified" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm uppercase tracking-wider">
            Personal
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{
              background: "linear-gradient(to right, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hobbies & Interests
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 20, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
              className="group perspective"
            >
              {/* Main Card */}
              <div
                className="relative bg-[#1A0033]/80 backdrop-blur-sm rounded-xl p-8
                border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300
                h-full flex flex-col items-center text-center"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 p-4 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/50 group-hover:to-pink-600/50 transition-all duration-300"
                >
                  {hobby.imageIcon ? (
                    <Image
                      src={hobby.imageIcon}
                      alt={hobby.name}
                      width={52}
                      height={52}
                      className="h-12 w-12 object-contain transition-all duration-300 group-hover:scale-105"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(64%) sepia(42%) saturate(1050%) hue-rotate(229deg) brightness(101%) contrast(98%)",
                      }}
                    />
                  ) : (
                    hobby.icon && (
                      <hobby.icon className="text-4xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                    )
                  )}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-purple-300 mb-3">
                  {hobby.name}
                </h3>
                <p className="text-gray-300/80 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HobbiesInterests;
