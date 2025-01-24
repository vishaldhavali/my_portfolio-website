"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features?: string[];
  github: string;
  demo: string;
  image: string;
  contribution?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateY: 5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative group h-full"
    >
      {/* Gradient Glow Effect */}
      <div className="absolute inset-[1px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500" />

      {/* Main Card */}
      <div className="relative bg-[#150B2E]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden group h-64">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#150B2E] via-[#150B2E]/50 to-transparent opacity-80" />

          {/* Project Links */}
          <div className="absolute bottom-4 right-4 flex space-x-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
            {project.github && (
              <a
                href={project.github}
                className="text-white hover:text-purple-400 transition-colors p-2 bg-purple-900/50 rounded-full backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="text-white hover:text-purple-400 transition-colors p-2 bg-purple-900/50 rounded-full backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300/90">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/20 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          {project.features && (
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-purple-400">
                Key Features:
              </h4>
              <ul className="space-y-1 text-gray-300/80">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 group/item hover:text-purple-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover/item:bg-purple-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Stock Analysis and Prediction Dashboard",
      description:
        "Developed a comprehensive stock analysis and prediction platform using Python and machine learning. The dashboard provides real-time stock data visualization, technical analysis indicators, and AI-powered price predictions to help investors make informed decisions.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Streamlit",
        "yfinance",
      ],
      features: [
        "Real-time stock data visualization",
        "Technical analysis indicators",
        "Machine learning-based price predictions",
        "Interactive dashboard interface",
        "Historical data analysis",
      ],
      github: "https://github.com/yourusername/project",
      demo: "https://your-demo-link.com",
      image: "/stockpreimg.png",
    },
    {
      title: "Currency Detection System Using ML",
      description:
        "Developed an advanced machine learning-based system for automated currency detection and counterfeit prevention. The system utilizes computer vision and deep learning techniques to analyze and verify the authenticity of banknotes in real-time.",
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Deep Learning",
        "Image Processing",
      ],
      features: [
        "Real-time currency detection",
        "High-accuracy counterfeit detection",
        "Multi-currency support",
        "Automated denomination classification",
        "Detailed authenticity reporting",
      ],
      image: "/crydtct.png",
      github: "https://github.com/vishaldhavali/Currency-Recognition-System-",
      demo: "https://your-currency-demo.com",
    },
  ];

  return (
    <AnimatedSection
      animation="fadeIn"
      className="py-4 md:py-6 bg-[#0A0118]/50 md:px-8"
    >
      <AnimatedBackground variant="unified" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(to right, #A855F7, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
