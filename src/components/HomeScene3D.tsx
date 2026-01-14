'use client';

import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomeScene3D() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full relative">
      {/* Loader pendant le chargement de la 3D */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* La scène Spline native */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full"
      >
        <Spline 
          scene="https://prod.spline.design/xz3RduXdQGG6xtbj/scene.splinecode"
          onLoad={() => setIsLoading(false)}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}
