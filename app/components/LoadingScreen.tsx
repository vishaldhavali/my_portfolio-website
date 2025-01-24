"use client";

import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0A0118] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-purple-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-purple-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          className="text-purple-400 text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
