"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";

const Certifications = () => {
  const certifications = [
    {
      title: "E-PRABESH (Computer Fundamentals)",
      issuer: "Belagavi, India",
      date: "2017",
      description:
        "Computer Fundamentals, Windows, MS Office (Word, Excel, PowerPoint) - Scored 87%",
      link: "https://drive.google.com/file/d/174Lo4Qr41Zqzab3gucjMO1OHw_oQkK55/view",
    },
    {
      title: "C Programming",
      issuer: "Good Luck Computer, Belagavi",
      date: "2021",
      description:
        "Advanced C programming concepts including data structures and algorithms.",
      link: "https://drive.google.com/file/d/17GS8l--1Q5PsKKhHn6rxaSsdsnJzM9ta/view",
    },
    {
      title: "Full Stack Development in Python with Automation Testing",
      issuer: "Softmusk Info PVT.LTD, Belagavi",
      date: "2022",
      description:
        "Comprehensive training in Python full-stack development and automation testing.",
      link: "https://drive.google.com/file/d/17M4LEE5sVWElxW2D1U0mgUcz7hQ-o8UJ/view",
    },
    {
      title: "Introduction to Supervised & Unsupervised Machine Learning",
      issuer: "Simplilearn",
      date: "2023",
      description:
        "Fundamentals of machine learning algorithms and their practical applications.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDYxMDE2Ml8xNjk4NTIyMzg1LnBuZyIsInVzZXJuYW1lIjoiVmlzaGFsIERoYXZhbGkifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1567523798656387788&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVTzFzcY4oTCkyD0iyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUACiuHTT8AAAA%3D",
    },
    {
      title: "Getting Started with Machine Learning Algorithms",
      issuer: "Simplilearn",
      date: "2023",
      description:
        "Practical implementation of various machine learning algorithms.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDYxMDE2Ml8xNjk4NTIyMzg1LnBuZyIsInVzZXJuYW1lIjoiVmlzaGFsIERoYXZhbGkifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1567523954138359803&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVTzFzcY4oTCkyD0iyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUACiuHTT8AAAA%3D",
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "Simplilearn",
      date: "2024",
      description: "Understanding cloud computing fundamentals and services.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNTExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTExNDY3M18xNzE0ODM4ODc5LnBuZyIsInVzZXJuYW1lIjoiVmlzaGFsIERoYXZhbGkifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1567524139947175351&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN8szcc0tNis0D0iyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUALN3uNz8AAAA%3D",
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
            Achievements
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{
              background: "linear-gradient(to right, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 },
              }}
              className="bg-[#1A0033]/80 backdrop-blur-sm rounded-lg p-6
                hover:shadow-lg transition-all duration-300
                border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3"
                >
                  <FaCertificate className="text-2xl text-[#150B2E]" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    {cert.title}
                  </h3>
                  <p className="text-pink-400 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-white/60 mb-4">{cert.date}</p>
                  <p className="text-white/80 mb-4">{cert.description}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certifications;
