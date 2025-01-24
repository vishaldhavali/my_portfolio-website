"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "Web Development", percentage: 85 },
    { name: "Python Programming", percentage: 90 },
    { name: "Database Management", percentage: 80 },
    { name: "Problem Solving", percentage: 85 },
  ];

  return (
    <AnimatedSection
      animation="slideUp"
      className="py-4 md:py-6 bg-[#0A0118]/50 relative"
    >
      <div className="container mx-auto px-4 md:mb-0">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
              <div className="relative w-72 h-72 rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  width={400}
                  height={400}
                  className="object-cover transition duration-300 transform hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-3"
              style={{
                background: "linear-gradient(to right, #A855F7, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me
            </motion.h2>
            <motion.p className="text-lg mb-4 text-gray-300/90 leading-relaxed">
              Creative student passionate about web development, excelling in
              collaborative environments, combining strong coding skills in
              HTML, CSS, Python, and SQL with effective team leadership and
              continuous learning.
            </motion.p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div
                    className="relative p-4 rounded-xl bg-[#150B2E]/80 backdrop-blur-sm 
                    border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300
                    transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-purple-400">
                        {skill.name}
                      </span>
                      <span className="text-pink-400">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-[#0D0121] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
