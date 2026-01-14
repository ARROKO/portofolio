'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WaveTransitionProps {
  className?: string;
}

const WaveTransition: React.FC<WaveTransitionProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Ligne de séparation élégante */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
      />
    </div>
  );
};

export default WaveTransition;
