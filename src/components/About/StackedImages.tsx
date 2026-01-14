'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AboutContent } from '../../data/aboutData';
import LazyImage from '../LazyImage';

interface StackedImagesProps {
  images: AboutContent[];
  currentIndex: number;
}

const StackedImages: React.FC<StackedImagesProps> = ({ images, currentIndex }) => {
  return (
    <div className="relative w-full h-[500px]">
      <AnimatePresence mode="popLayout">
        {images.map((content, index) => {
          const isActive = index === currentIndex;
          const zIndex = images.length - Math.abs(currentIndex - index);
          
          return (
            <motion.div
              key={content.id}
              className="absolute inset-0"
              style={{ zIndex }}
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.5,
                rotateY: isActive ? 0 : -15,
                y: isActive ? 0 : index * 20,
                filter: isActive ? 'brightness(1)' : 'brightness(0.5)'
              }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.8
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <LazyImage
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default StackedImages;