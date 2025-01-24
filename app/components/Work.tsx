"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

const Work = () => {
  const experiences: WorkExperience[] = [
    {
      title: "Web Application Development Internship",
      company: "Infynow Software Solutions LLP",
      location: "Belagavi, India",
      duration: "Jan 2024 - Present",
      description: [
        "Collaborated with developers to deliver project components on time and accurately",
        "Developed frontend elements using HTML, CSS, and JavaScript",
        "Created a landing page for the project",
        "Gained hands-on experience in web application development",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Web Development", "Frontend"],
    },
    {
      title: "Web Development Intern",
      company: "CodSoft",
      location: "Remote",
      duration: "Nov 2023 - Dec 2023",
      description: [
        "Built interactive web applications with focus on user experience",
        "Designed and implemented responsive layouts using modern CSS techniques",
        "Worked with REST APIs and handled state management",
        "Participated in code reviews and implemented feedback",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "React", "REST API"],
    },
  ];

  return (
    <AnimatedSection
      animation="scaleUp"
      className="py-20 bg-[#0A0118]/50 md:px-8"
    >
      <AnimatedBackground variant="unified" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{
              background: "linear-gradient(to right, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Work/Internship
          </h2>

          <div className="relative w-full max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {experiences.map((experience, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2 w-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50, rotateY: -30 }}
                      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.3)",
                      }}
                    >
                      <Card className="bg-[#1A0033]/80 border-purple-500/20 hover:border-purple-500/50">
                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-[#E2E2B6]">
                            {experience.title}
                          </CardTitle>
                          <CardDescription>
                            <div className="flex items-center gap-2 text-[#6EACDA] mt-2">
                              <FaBriefcase className="text-lg" />
                              <span className="text-base">
                                {experience.company}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-[#6EACDA] mt-1">
                              <FaMapMarkerAlt className="text-lg" />
                              <span className="text-base">
                                {experience.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-[#6EACDA] mt-1">
                              <FaCalendar className="text-lg" />
                              <span className="text-base">
                                {experience.duration}
                              </span>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-4">
                            {experience.description.map((point, idx) => (
                              <li
                                key={idx}
                                className="hover:text-[#6EACDA] transition-colors"
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {experience.skills.map((skill, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-[#03346E] text-[#E2E2B6] hover:bg-[#6EACDA] hover:text-[#021526] transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="md:hidden mt-4 flex justify-center items-center gap-2">
                <motion.div
                  className="text-purple-400/60 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Swipe for more
                </motion.div>
                <motion.div
                  className="text-purple-400"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Work;
