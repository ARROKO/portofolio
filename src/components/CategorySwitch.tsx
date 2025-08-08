import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart } from 'lucide-react';

interface CategorySwitchProps {
  activeCategory: 'personal' | 'professional';
  onSwitch: (category: 'personal' | 'professional') => void;
}

const CategorySwitch: React.FC<CategorySwitchProps> = ({ activeCategory, onSwitch }) => {
  return (
    <motion.div 
      className="flex justify-center gap-8 mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={() => onSwitch('personal')}
        className={`group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 overflow-hidden
          ${activeCategory === 'personal' 
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-purple-500/30' 
            : 'bg-white/10'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={activeCategory === 'personal' ? { opacity: 1 } : { opacity: 0 }}
        />
        <motion.div
          animate={activeCategory === 'personal' ? { scale: 1.1 } : { scale: 1 }}
          className="relative flex items-center gap-3"
        >
          <Heart size={24} />
          <span className="text-lg font-medium">Projets Personnels</span>
        </motion.div>
      </motion.button>
      
      <motion.button
        onClick={() => onSwitch('professional')}
        className={`group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 overflow-hidden
          ${activeCategory === 'professional' 
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30' 
            : 'bg-white/10'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={activeCategory === 'professional' ? { opacity: 1 } : { opacity: 0 }}
        />
        <motion.div
          animate={activeCategory === 'professional' ? { scale: 1.1 } : { scale: 1 }}
          className="relative flex items-center gap-3"
        >
          <Briefcase size={24} />
          <span className="text-lg font-medium">Projets Professionnels</span>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default CategorySwitch;