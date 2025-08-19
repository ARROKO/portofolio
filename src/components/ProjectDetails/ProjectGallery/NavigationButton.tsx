import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  type: 'personal' | 'professional';
  icon: LucideIcon;
}

export const NavigationButton = ({ direction, onClick, type, icon: Icon }: NavigationButtonProps) => {
  const isLeft = direction === 'left';
  
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-2 md:left-4' : 'right-2 md:right-4'}
        w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
        backdrop-blur-md transition-all duration-300 z-20
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        ${type === 'personal' 
          ? 'bg-pink-500/20 hover:bg-pink-500/30' 
          : 'bg-blue-500/20 hover:bg-blue-500/30'}`}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6" />
    </motion.button>
  );
};