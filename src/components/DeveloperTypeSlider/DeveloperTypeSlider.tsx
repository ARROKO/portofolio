'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { developerTypes } from "./data";
import { TechnologyTag } from "./TechnologyTag";
import React from 'react';

export const DeveloperTypeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % developerTypes.length);
    }, 3000); // Increased to 3s for better readability

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[300px] md:h-[400px] relative flex items-center justify-center px-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute flex flex-col items-center w-full max-w-2xl"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-3 md:mb-4"
          >
            <div className="w-15 h-15 md:w-20 md:h-20 flex items-center justify-center">
              {React.createElement(developerTypes[currentIndex].icon as React.ComponentType<{size?: number; color?: string}>, {
                size: isMobile ? 60 : 80,
                color: developerTypes[currentIndex].color
              })}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3 text-center"
          >
            {developerTypes[currentIndex].title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 text-center px-4"
          >
            {developerTypes[currentIndex].subtitle}
          </motion.p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 md:gap-2 justify-center px-2">
            {developerTypes[currentIndex].technologies.map((tech, index) => (
              <TechnologyTag key={tech} icon={developerTypes[currentIndex].technologiesIconsLinks[index]}
              name={tech} delay={0.5 + index * 0.1} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
