'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LazyImage from '../../LazyImage';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

export const ImageModal = ({ isOpen, onClose, src }: ImageModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4"
      >
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full h-full md:max-w-[90vw] md:max-h-[90vh] flex items-center justify-center"
        >
          <LazyImage
            src={src}
            alt="Full size preview"
            className="w-full h-full max-w-full max-h-full md:max-h-[90vh] object-contain"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);