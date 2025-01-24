"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaDownload,
  FaTimes,
  FaEye,
  FaSearchPlus,
  FaSearchMinus,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";
import Image from "next/image";

const Resume = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const resumePdfPath = "/assets/resume/Vishal_Dhavali_Resume.pdf";
  const resumeImagePath = "/assets/resume/resume_img.png";

  // Reset position when closing or changing modes
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const handleViewResume = () => {
    setIsImageOpen(true);
    resetView();
  };

  const handleCloseResume = () => {
    setIsImageOpen(false);
    setIsFullScreen(false);
    resetView();
  };

  // Improved zoom handlers with position reset
  const handleZoomIn = () => {
    setScale((prev) => {
      const newScale = Math.min(prev + 0.2, 2);
      if (newScale === 1) resetView();
      return newScale;
    });
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.2, 0.5);
      if (newScale === 1) resetView();
      return newScale;
    });
  };

  // Improved scroll to zoom with better boundaries
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey) {
      // Support for Mac users
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const newScale = Math.min(Math.max(scale + delta, 0.5), 2);

      if (newScale !== scale) {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / scale;
        const y = (e.clientY - rect.top) / scale;

        const newX = x * newScale - (e.clientX - rect.left);
        const newY = y * newScale - (e.clientY - rect.top);

        container.scrollLeft += newX;
        container.scrollTop += newY;
        setScale(newScale);
      }
    }
  };

  // Add drag to pan when zoomed
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale > 1) {
      setIsDragging(true);
      setPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && scale > 1) {
      const dx = e.clientX - position.x;
      const dy = e.clientY - position.y;
      e.currentTarget.scrollLeft -= dx;
      e.currentTarget.scrollTop -= dy;
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isImageOpen) {
        if (e.key === "Escape") {
          handleCloseResume();
        } else if (e.key === "f") {
          toggleFullScreen();
        } else if (e.key === "+" && e.ctrlKey) {
          e.preventDefault();
          handleZoomIn();
        } else if (e.key === "-" && e.ctrlKey) {
          e.preventDefault();
          handleZoomOut();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isImageOpen]);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    setScale(0.9);
  };

  // Add effect to prevent body scroll when modal is open
  useEffect(() => {
    if (isImageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isImageOpen]);

  return (
    <AnimatedSection
      animation="fadeIn"
      className="py-12 md:py-20 bg-[#0A0118]/50 relative"
    >
      <AnimatedBackground variant="unified" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(to right, #A855F7, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Resume
        </motion.h2>

        <div className="flex flex-col items-center gap-6">
          <motion.p
            className="text-lg text-purple-300/80 text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            View or download my resume to learn more about my skills and
            experience.
          </motion.p>

          <div className="flex gap-4">
            <motion.button
              onClick={handleViewResume}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full
                hover:from-purple-600 hover:to-pink-600 transition-all duration-300
                transform hover:scale-105 active:scale-95 font-medium
                flex items-center gap-2"
            >
              <FaEye className="mr-2" />
              View Resume
            </motion.button>

            <motion.a
              href={resumePdfPath}
              download="Vishal_Dhavali_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#1A0033] text-white px-8 py-3 rounded-full
                hover:bg-[#2A0044] transition-all duration-300
                transform hover:scale-105 active:scale-95 font-medium
                flex items-center gap-2 border border-purple-500/20"
            >
              <FaDownload className="mr-2" />
              Download PDF
            </motion.a>
          </div>
        </div>

        <AnimatePresence>
          {isImageOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#0A0118]/95 overflow-hidden"
              onClick={handleCloseResume}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="fixed inset-0 flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Controls Bar - Fixed at top */}
                <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-[#1A0033] px-4 py-3 border-b border-purple-500/20 z-30">
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={handleZoomOut}
                      className="bg-purple-500/80 hover:bg-purple-600 text-white p-2 rounded-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaSearchMinus size={16} />
                      <span className="hidden sm:inline text-sm">Zoom Out</span>
                    </motion.button>
                    <motion.button
                      onClick={handleZoomIn}
                      className="bg-purple-500/80 hover:bg-purple-600 text-white p-2 rounded-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaSearchPlus size={16} />
                      <span className="hidden sm:inline text-sm">Zoom In</span>
                    </motion.button>
                    <motion.button
                      onClick={toggleFullScreen}
                      className="bg-purple-500/80 hover:bg-purple-600 text-white p-2 rounded-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isFullScreen ? (
                        <FaCompress size={16} />
                      ) : (
                        <FaExpand size={16} />
                      )}
                      <span className="hidden sm:inline text-sm">
                        {isFullScreen ? "Exit Full" : "Full"}
                      </span>
                    </motion.button>
                  </div>
                  <motion.button
                    onClick={handleCloseResume}
                    className="bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-lg flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTimes size={16} />
                    <span className="hidden sm:inline text-sm">Close</span>
                  </motion.button>
                </div>

                {/* Updated Image Container */}
                <div
                  className="mt-[3.5rem] flex-1 overflow-auto scrollbar-thin touch-pan-y"
                  onWheel={handleWheel}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{
                    cursor: scale > 1 ? "grab" : "default",
                    cursor: isDragging ? "grabbing" : undefined,
                  }}
                >
                  <div
                    className="min-h-[calc(100vh-3.5rem)] w-full flex items-center justify-center p-4"
                    style={{
                      transform: `scale(${scale})`,
                      transition: isDragging
                        ? "none"
                        : "transform 0.2s ease-out",
                      transformOrigin: "0 0",
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={resumeImagePath}
                        alt="Resume"
                        width={791}
                        height={1024}
                        className={`w-auto object-contain touch-pan-y select-none ${
                          isDragging ? "pointer-events-none" : ""
                        }`}
                        quality={100}
                        priority
                        draggable={false}
                        style={{
                          height: isFullScreen
                            ? "calc(100vh - 4rem)"
                            : "min(calc(100vh - 6rem), 1024px)",
                          backgroundColor: "#ffffff",
                          borderRadius: "0.5rem",
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                          transform: `scale(${1 / scale})`,
                          transformOrigin: "top left",
                          willChange: "transform",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

export default Resume;
