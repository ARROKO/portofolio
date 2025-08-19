import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutContent } from './AboutContent';

interface ContentSlideProps {
  content: AboutContent;
}

const ContentSlide: React.FC<ContentSlideProps> = ({ content }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={content.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {content.title}
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {content.description}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentSlide;