"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaDownload,
  FaXmark,
  FaEye,
  FaArrowUpRightFromSquare,
  FaBars,
  FaMagnifyingGlassPlus,
  FaMagnifyingGlassMinus,
  FaArrowsRotate,
} from "react-icons/fa6";
import AnimatedSection from "./AnimatedSection";
import { AnimatedBackground } from "./backgrounds/AnimatedBackground";

const Resume = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const pdfUrl = "/assets/resume/Vishal_Dhavali_resume_AIO.pdf";

  // Handle body scroll lock
  useEffect(() => {
    if (isPdfOpen) {
      document.body.classList.add("pdf-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("pdf-open");
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.classList.remove("pdf-open");
      document.body.style.overflow = "unset";
    };
  }, [isPdfOpen]);

  const togglePdfView = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsPdfOpen(!isPdfOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Vishal_Dhavali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <AnimatedSection
        animation="fadeIn"
        className="py-8 md:py-16 bg-[#0A0118]/50 relative flex items-center"
      >
        <AnimatedBackground variant="unified" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2
              className="text-4xl font-bold mb-8 text-center"
              style={{
                background:
                  "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 1,
                transform: "none",
              }}
            >
              Resume
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              View or download my resume to learn more about my skills and
              experience.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <motion.button
                onClick={togglePdfView}
                className="group relative inline-flex items-center gap-2 px-8 py-3 
                  bg-[#9333EA] hover:bg-[#8928D9] text-white rounded-full overflow-hidden 
                  transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEye className="text-lg" />
                <span className="font-medium">View Resume</span>
              </motion.button>

              <motion.button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-2 px-8 py-3 
                  bg-[#1E1B4B] hover:bg-[#1E1B4B]/80 text-white rounded-full 
                  overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="text-lg" />
                <span className="font-medium">Download PDF</span>
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* PDF Viewer Modal - Centered by default */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={togglePdfView}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-[1400px] max-w-[98vw] h-[92vh] md:h-[92vh] bg-[#1A0033] rounded-lg overflow-hidden shadow-2xl border border-purple-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Gradient */}
              <div className="flex items-center justify-between h-12 px-3 md:px-6 bg-gradient-to-r from-purple-900/50 to-purple-800/50 border-b border-purple-500/20">
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="p-1.5 md:p-2 hover:bg-purple-700/30 rounded-lg transition-colors">
                    <FaBars className="text-purple-200" size={16} />
                  </button>
                  <h3 className="text-xs md:text-sm font-medium text-purple-200">
                    Resume Preview
                  </h3>
                </div>

                <div className="flex items-center gap-1 md:gap-2">
                  <button
                    onClick={handleDownload}
                    className="p-1.5 md:p-2 hover:bg-purple-700/30 rounded-lg transition-colors"
                    title="Download"
                  >
                    <FaDownload className="text-purple-200" size={14} />
                  </button>
                  <button
                    onClick={handleOpenInNewTab}
                    className="p-1.5 md:p-2 hover:bg-purple-700/30 rounded-lg transition-colors"
                    title="Open in New Tab"
                  >
                    <FaArrowUpRightFromSquare
                      className="text-purple-200"
                      size={14}
                    />
                  </button>
                  <button
                    onClick={togglePdfView}
                    className="p-1.5 md:p-2 hover:bg-purple-700/30 rounded-lg transition-colors"
                    title="Close"
                  >
                    <FaXmark className="text-purple-200" size={14} />
                  </button>
                </div>
              </div>

              {/* PDF Content */}
              <div className="h-[calc(100vh-48px)] md:h-[calc(92vh-48px)] bg-[#525659] overflow-hidden pdf-viewer-content">
                <object
                  data={pdfUrl}
                  type="application/pdf"
                  className="w-full h-full pdf-object"
                >
                  <embed
                    src={pdfUrl}
                    type="application/pdf"
                    className="w-full h-full pdf-embed"
                  />
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Resume;
