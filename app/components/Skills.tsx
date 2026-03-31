"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";
import Image from "next/image";

interface Skill {
  name: string;
  icon?: string; // SVG path
  category: string;
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills: Skill[] = [
    // Backend/Java Stack (PRIMARY)
    {
      name: "Java",
      icon: "/assets/Skills_logo/Java.svg",
      category: "Backend Stack",
    },
    {
      name: "Spring Boot",
      icon: "/assets/Skills_logo/Spring.svg",
      category: "Backend Stack",
    },
    {
      name: "Spring Framework",
      icon: "/assets/Skills_logo/Spring.svg",
      category: "Backend Stack",
    },
    {
      name: "REST APIs",
      icon: "/assets/Skills_logo/RestAPI.svg",
      category: "Backend Stack",
    },
    {
      name: "JDBC",
      icon: "/assets/Skills_logo/jdbc.svg",
      category: "Backend Stack",
    },
    {
      name: "Hibernate",
      icon: "/assets/Skills_logo/Hibernate.svg",
      category: "Backend Stack",
    },
    {
      name: "Maven",
      icon: "/assets/Skills_logo/Apache Maven.svg",
      category: "Backend Stack",
    },

    // Databases
    {
      name: "MySQL",
      icon: "/assets/Skills_logo/mysql-official.svg",
      category: "Databases",
    },
    {
      name: "SQL",
      icon: "/assets/Skills_logo/SQL.svg",
      category: "Databases",
    },
    {
      name: "DBMS",
      icon: "/assets/Skills_logo/DBMS.svg",
      category: "Databases",
    },

    // Other Languages
    {
      name: "Python",
      icon: "/assets/Skills_logo/Python.svg",
      category: "Other Languages",
    },
    {
      name: "C Language",
      icon: "/assets/Skills_logo/C.svg",
      category: "Other Languages",
    },

    // Web Technologies
    {
      name: "HTML5",
      icon: "/assets/Skills_logo/HTML5.svg",
      category: "Web Technologies",
    },
    {
      name: "CSS3",
      icon: "/assets/Skills_logo/CSS3.svg",
      category: "Web Technologies",
    },
    {
      name: "JavaScript",
      icon: "/assets/Skills_logo/JavaScript.svg",
      category: "Web Technologies",
    },

    // Tools
    {
      name: "Git",
      icon: "/assets/Skills_logo/Git.svg",
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: "/assets/Skills_logo/GitHub.svg",
      category: "Tools",
    },
    {
      name: "Postman",
      icon: "/assets/Skills_logo/Postman.svg",
      category: "Tools",
    },
    {
      name: "VS Code",
      icon: "/assets/Skills_logo/Visual Studio Code (VS Code).svg",
      category: "Tools",
    },
    {
      name: "IntelliJ IDEA",
      icon: "/assets/Skills_logo/IntelliJ IDEA.svg",
      category: "Tools",
    },
    {
      name: "Eclipse",
      icon: "/assets/Skills_logo/Eclipse IDE.svg",
      category: "Tools",
    },
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
      <div
        ref={containerRef}
        className="container mx-auto px-4 md:mt-0 relative z-10"
      >
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

        {/* Group skills by category */}
        {Array.from(
          new Map(skills.map((skill) => [skill.category, skill])).entries(),
        ).map(([category], categoryIndex) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-8 text-purple-300 flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
              {category}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills
                .filter((s) => s.category === category)
                .map((skill, index) => (
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
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="mb-4 h-12 w-12 flex items-center justify-center"
                      >
                        {skill.icon ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="object-contain w-12 h-12"
                          />
                        ) : (
                          <div className="text-3xl text-purple-400 font-bold">
                            {skill.name.charAt(0)}
                          </div>
                        )}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2 text-purple-200">
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
