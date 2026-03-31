"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaComments, FaBug } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";
import { IconType } from "react-icons";

interface SoftSkill {
  name: string;
  icon: IconType;
  description: string;
}

const SoftSkills = () => {
  const softSkills: SoftSkill[] = [
    {
      name: "Problem Solving",
      icon: FaLightbulb,
      description:
        "Strong analytical skills with data structures and algorithms expertise",
    },
    {
      name: "Teamwork & Collaboration",
      icon: FaUsers,
      description:
        "Effective communication and collaboration in Agile development environments",
    },
    {
      name: "Communication Skills",
      icon: FaComments,
      description:
        "Clear articulation of technical concepts and ideas to diverse audiences",
    },
    {
      name: "Technical Troubleshooting",
      icon: FaBug,
      description:
        "Systematic debugging and issue resolution across full stack",
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
            Professional Abilities
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{
              background: "linear-gradient(to right, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Soft Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div
                className="relative bg-[#1A0033]/80 backdrop-blur-sm rounded-xl p-6
                border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300
                h-full flex flex-col"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-4 text-4xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                >
                  <skill.icon className="text-4xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-300/80 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SoftSkills;
