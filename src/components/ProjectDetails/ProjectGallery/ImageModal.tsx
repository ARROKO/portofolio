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
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      >
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </motion.button>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-[90vw] max-h-[90vh]"
        >
          <LazyImage
            src={src}
            alt="Full size preview"
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);