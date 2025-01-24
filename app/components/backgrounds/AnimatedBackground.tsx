"use client";

import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant:
    | "unified"
    | "particles"
    | "gradient"
    | "mesh"
    | "circles"
    | "waves"
    | "grid";
  className?: string;
}

export const AnimatedBackground = ({
  variant,
  className = "",
}: AnimatedBackgroundProps) => {
  const variants = {
    unified: (
      <div className="absolute inset-0 -z-10">
        {/* Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Circles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full border-purple-500/20"
              style={{
                width: `${300 + i * 200}px`,
                height: `${300 + i * 200}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                borderWidth: "2px",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>
    ),
    particles: <div></div>,
    gradient: <div></div>,
    mesh: <div></div>,
    circles: <div></div>,
    waves: <div></div>,
    grid: <div></div>,
  };

  return (
    <div
      className={`fixed inset-0 -z-0 overflow-hidden pointer-events-none ${className}`}
    >
      {variants[variant]}
    </div>
  );
};
