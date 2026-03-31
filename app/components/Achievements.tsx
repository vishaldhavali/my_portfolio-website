"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaFile } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";

interface Achievement {
  title: string;
  description: string;
  date: string;
  link: string;
  doi: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Research Paper Published in IJSREM",
      description:
        "AI-Vakeel: An AI-Powered Platform for Smart Legal Query Resolution in the Indian Judiciary",
      date: "May 2025",
      link: "https://ijsrem.com/download/ai-vakeel-an-ai-powered-platform-for-smart-legal-query-resolution-in-the-indian-judiciary/",
      doi: "10.55041/IJSREM48058",
      icon: <FaAward className="text-3xl" />,
      highlight: true,
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
            Recognition
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{
              background: "linear-gradient(to right, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Achievements & Publications
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`relative group ${
                achievement.highlight ? "mb-8" : ""
              }`}
            >
              {/* Gradient Glow Effect */}
              {achievement.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              )}

              {/* Main Card */}
              <div
                className={`relative bg-[#1A0033]/80 backdrop-blur-sm rounded-2xl p-8
                border transition-all duration-300
                ${
                  achievement.highlight
                    ? "border-purple-500/50 hover:border-purple-500/80"
                    : "border-purple-500/20 hover:border-purple-500/50"
                }
                ${achievement.highlight ? "bg-[#1A0033]/90" : ""}`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 p-4 rounded-xl ${
                      achievement.highlight
                        ? "bg-gradient-to-br from-purple-500 to-pink-500"
                        : "bg-purple-900/50"
                    }`}
                  >
                    <div
                      className={
                        achievement.highlight ? "text-white" : "text-purple-400"
                      }
                    >
                      {achievement.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-semibold mb-2 ${
                        achievement.highlight
                          ? "text-purple-300"
                          : "text-purple-400"
                      }`}
                    >
                      {achievement.title}
                    </h3>

                    <p className="text-gray-300/90 mb-3 text-lg">
                      {achievement.description}
                    </p>

                    <p className="text-sm text-purple-300/70 mb-4">
                      Published: {achievement.date}
                    </p>

                    {/* DOI Badge */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/20">
                        DOI: {achievement.doi}
                      </span>

                      {/* Links */}
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-purple-200 rounded-full transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span>View Publication</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Achievements;
