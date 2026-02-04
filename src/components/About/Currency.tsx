'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface DeviseItem {
  title: string;
  content: string;
  icon: string;
  color: string;
}

const devises: DeviseItem[] = [
  {
    title: 'Beauté',
    content: "En tant que développeur d'application de base front-end, je m'efforce de créer des interfaces utilisateur d'une beauté à couper le souffle, alliant harmonie des couleurs, typographie raffinée et visuels attrayants. Chaque pixel est soigneusement positionné pour offrir une expérience visuelle éblouissante, reflétant l'esthétique la plus pure et la plus sophistiquée.",
    icon: '✨',
    color: 'from-pink-400 to-rose-500'
  },
  {
    title: 'Élégance',
    content: "L'élégance dans mes créations se manifeste par des transitions fluides, des animations gracieuses et une navigation intuitive. J'accorde une importance primordiale à la finesse et à la sobriété, permettant à chaque interaction de se dérouler avec une aisance naturelle. Mon objectif est de capturer l'essence de la sophistication dans chaque ligne de code, tout en offrant une simplicité d'utilisation sans égale.",
    icon: '🎭',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    title: 'Simplicité',
    content: "La simplicité est le cœur de mon processus de développement. Je conçois des applications épurées et accessibles, où chaque fonctionnalité est pensée pour être immédiatement compréhensible et utilisable. En éliminant toute complexité superflue, je m'assure que l'utilisateur puisse se concentrer sur ce qui importe vraiment, transformant chaque interaction en un moment de pure fluidité et de plaisir.",
    icon: '🌿',
    color: 'from-green-400 to-emerald-500'
  }
];

const DeviseCard = ({ devise, index }: { devise: DeviseItem, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        className={cn(
          "bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500",
          isMobile && "cursor-pointer"
        )}
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              className="text-2xl md:text-4xl"
              animate={{
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {devise.icon}
            </motion.div>
            <h3 className={`text-lg md:text-2xl font-bold bg-gradient-to-r ${devise.color} bg-clip-text text-transparent`}>
              {devise.title}
            </h3>
          </div>
          
          {/* Mobile Chevron */}
          <div className="md:hidden">
            <ChevronDown 
              size={20} 
              className={cn("text-gray-500 transition-transform duration-300", isOpen && "rotate-180")} 
            />
          </div>
        </div>

        {/* Content - Desktop (visible) / Mobile (Accordion) */}
        <div className="hidden md:block mt-6">
          <p className="text-gray-300 leading-relaxed text-sm md:text-base text-justify">
            {devise.content}
          </p>
        </div>

        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <p className="text-gray-300 leading-relaxed text-sm pt-4 text-justify border-t border-white/5 mt-4">
                {devise.content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Particules décoratives */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${devise.color} rounded-full opacity-20`}
              style={{ left: `${30 + i * 40}%`, top: `${20 + i * 50}%` }}
              animate={{ y: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3 + i, repeat: Infinity }}
            />
          ))}
      </div>
    </motion.div>
  );
};

export const Currency = () => {
  return (
    <div className="my-8">
      <div className="space-y-6">
        {devises.map((devise, index) => (
          <DeviseCard key={devise.title} devise={devise} index={index} />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-12 px-2"
      >
        <p className="text-gray-400 italic text-sm">
          &quot;La simplicité est la sophistication suprême.&quot;
        </p>
        <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-widest">
          - Leonardo da Vinci
        </p>
      </motion.div>
    </div>
  );
};
