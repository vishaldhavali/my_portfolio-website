"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaLinux,
  FaGithub,
} from "react-icons/fa";
import { SiJupyter, SiGooglecolab } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";

interface Skill {
  name: string;
  icon: IconType;
  category: string;
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills: Skill[] = [
    { name: "Python", icon: FaPython, category: "Programming" },
    { name: "Java", icon: FaJava, category: "Programming" },
    { name: "HTML5", icon: FaHtml5, category: "Web Development" },
    { name: "CSS3", icon: FaCss3Alt, category: "Web Development" },
    { name: "JavaScript", icon: FaJs, category: "Web Development" },
    { name: "SQL", icon: FaDatabase, category: "Database" },
    { name: "Linux", icon: FaLinux, category: "Operating System" },
    { name: "Git", icon: FaGithub, category: "Version Control" },
    { name: "Jupyter", icon: SiJupyter, category: "Development Tool" },
    { name: "Colab", icon: SiGooglecolab, category: "Development Tool" },
    { name: "VS Code", icon: VscCode, category: "IDE" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotateY: -180,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <AnimatedSection
      animation="fadeIn"
      className="py-4 md:py-6 bg-[#0A0118]/50 relative"
    >
      <AnimatedBackground variant="unified" />
      <div className="container mx-auto px-4 md:mt-0 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(to right, #A855F7, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#1A0033]/70 backdrop-blur-sm rounded-lg p-6
                hover:shadow-lg transition-all duration-200
                border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mb-4"
                >
                  <skill.icon className="text-4xl text-purple-400" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200">
                  {skill.name}
                </h3>
                <p className="text-sm text-purple-300/80 text-center">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
