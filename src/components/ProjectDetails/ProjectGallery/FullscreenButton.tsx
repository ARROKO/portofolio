import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

interface FullscreenButtonProps {
  onClick: () => void;
  type: 'personal' | 'professional';
}

export const FullscreenButton = ({ onClick, type }: FullscreenButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`absolute top-4 right-4 w-10 h-10 rounded-full 
      flex items-center justify-center z-20
      backdrop-blur-md transition-all duration-300
      opacity-100 md:opacity-0 md:group-hover:opacity-100
      ${type === 'personal' 
        ? 'bg-pink-500/20 hover:bg-pink-500/30' 
        : 'bg-blue-500/20 hover:bg-blue-500/30'}`}
  >
    <Maximize2 className="w-5 h-5" />
  </motion.button>
);