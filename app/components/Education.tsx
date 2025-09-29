"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  description: string[];
  achievements: string[];
}

const Education = () => {
  // Separate refs for desktop and mobile
  const desktopTimelineRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);

  // Update scroll progress setup for better tracking
  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: desktopTimelineRef,
    offset: ["start end", "end start"], // Changed offset for better tracking
  });

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start 80%", "end 20%"], // Keep consistent with desktop
  });

  // Adjust dot position calculation for smoother movement
  const desktopDotPosition = useTransform(
    desktopScrollProgress,
    [0, 1],
    ["2%", "98%"] // Adjusted range to keep dot within timeline
  );

  const mobileDotPosition = useTransform(
    mobileScrollProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const opacity = useTransform(
    desktopScrollProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    desktopScrollProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const educationData: Education[] = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Presidency University",
      location: "Bangalore, Karnataka",
      duration: "Sep 2022 – July 2025",
      grade: "CGPA: 8.31",
      description: [
        "Currently pursuing Bachelor's degree in Computer Science",
        "Focusing on software development and web technologies",
      ],
      achievements: [],
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Motichand Lengade Bharatesh Polytechnic",
      location: "Belagavi, Karnataka",
      duration: "Jun 2019 – Apr 2022",
      grade: "Percentage: 79%",
      description: [
        "Completed diploma with focus on computer science fundamentals",
        "Gained practical experience in programming and system design",
      ],
      achievements: [],
    },
  ];

  // Update getNodeColor function for better detection
  const getNodeColor = (index: number, isDesktop: boolean) => {
    const total = educationData.length;
    const progress = isDesktop
      ? desktopScrollProgress.get()
      : mobileScrollProgress.get();
    const nodePosition = index / (total - 1);
    const threshold = 0.2; // Increased threshold for better detection

    const distance = Math.abs(progress - nodePosition);

    if (distance < threshold) {
      return "#6EACDA"; // Active (current) node color
    } else if (progress > nodePosition) {
      return "#EC4899"; // Completed node color
    } else {
      return "#1A0033"; // Upcoming node color
    }
  };

  // Desktop Timeline JSX
  const DesktopTimeline = () => (
    <div
      className="hidden md:block relative min-h-[600px] py-20" // Increased height and added padding
      ref={desktopTimelineRef}
    >
      {/* Container for timeline content */}
      <div className="relative h-full">
        {/* Timeline Track */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

        {/* Scrolling Dot */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#6EACDA] rounded-full border-4 border-[#021526] z-20"
          style={{ top: desktopDotPosition }}
          transition={{
            type: "spring",
            stiffness: 50, // Reduced for smoother movement
            damping: 10,
            mass: 0.5,
          }}
        />

        {/* Timeline Content */}
        <div className="relative">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center mb-32 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#021526] z-10"
                style={{
                  backgroundColor: getNodeColor(index, true),
                  transition: "background-color 0.3s ease",
                  top: `${(index / (educationData.length - 1)) * 100}%`,
                }}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />

              {/* Education Card */}
              <motion.div
                className={`w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "pr-8" : "pl-8"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-[#150B2E]/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <FaGraduationCap className="text-3xl text-[#6EACDA]" />
                    <h3 className="text-xl font-bold text-[#E2E2B6]">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-[#6EACDA]">
                      <FaMapMarkerAlt />
                      <span>
                        {edu.institution}, {edu.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#6EACDA]">
                      <FaCalendarAlt />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="text-[#E2E2B6] font-semibold">
                      Grade: {edu.grade}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {edu.description.map((desc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start gap-2"
                      >
                        <BsArrowRight className="text-[#6EACDA] mt-1" />
                        <p className="text-white/80">{desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {edu.achievements.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: "auto", opacity: 1 }}
                      className="mt-4 pt-4 border-t border-[#6EACDA]/20"
                    >
                      <h4 className="text-[#6EACDA] font-semibold mb-2">
                        Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="text-[#E2E2B6]"
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile Timeline JSX
  const MobileTimeline = () => (
    <div className="md:hidden relative" ref={mobileTimelineRef}>
      {/* Timeline Track */}
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

      {/* Scrolling Dot */}
      <motion.div
        className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-[#6EACDA] rounded-full border-3 border-[#021526] z-20"
        style={{ top: mobileDotPosition }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Education Cards */}
      <div className="space-y-6 pl-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#150B2E]/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 relative"
          >
            {/* Timeline Node */}
            <motion.div
              className="absolute left-0 top-8 transform -translate-x-[2.25rem] w-3 h-3 rounded-full border-2 border-[#021526] z-10"
              style={{
                backgroundColor: getNodeColor(index, false),
                transition: "background-color 0.3s ease",
              }}
            />

            {/* Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <FaGraduationCap className="text-2xl text-[#6EACDA]" />
              </div>
              <h3 className="text-xl font-bold text-[#E2E2B6]">{edu.degree}</h3>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-[#6EACDA]">
                <FaMapMarkerAlt />
                <span>
                  {edu.institution}, {edu.location}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#6EACDA]">
                <FaCalendarAlt />
                <span>{edu.duration}</span>
              </div>
              <div className="text-[#E2E2B6] font-semibold">{edu.grade}</div>
            </div>

            <div className="space-y-3">
              {edu.description.map((desc, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <BsArrowRight className="text-[#6EACDA] mt-1" />
                  <p className="text-white/80">{desc}</p>
                </motion.div>
              ))}

              {edu.achievements.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  className="mt-4 pt-4 border-t border-[#6EACDA]/20"
                >
                  <h4 className="text-[#6EACDA] font-semibold mb-2">
                    Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="text-[#E2E2B6]"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <AnimatedSection
      animation="slideUp"
      className="py-12 md:py-20 bg-[#0A0118]/50 relative"
    >
      <AnimatedBackground variant="unified" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(to right, #A855F7, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Education Journey
        </motion.h2>

        {/* Timeline Components */}
        <DesktopTimeline />
        <MobileTimeline />
      </div>
    </AnimatedSection>
  );
};

export default Education;
