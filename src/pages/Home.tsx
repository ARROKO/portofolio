'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import PageTransition from "../components/PageTransition";
import { DeveloperTypeSlider } from "../components/DeveloperTypeSlider";

const Home = () => {
  const customStyle: React.CSSProperties = {
    fontFamily: '"Parisienne", serif',
    fontWeight: 400,
    fontStyle: 'normal'
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        
        <div className="text-center px-2 md:px-4 py-8 md:py-12 relative z-10 w-full max-w-5xl mx-auto">
          {/* Titre principal */}
          <div className="mb-6 md:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
              >
                <div className="flex items-center gap-2">
                    <Sparkles className="text-yellow-400 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14" />
                    <span className="text-blue-500 text-3xl md:text-4xl lg:text-5xl">Bienvenue😁,</span>
                </div>
              </motion.div>
              <div className="mt-2">
                je suis <span style={customStyle}> Joseph</span>
              </div>

            </motion.h1>
          </div>

          <DeveloperTypeSlider />
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs md:text-sm font-medium">Découvrez la suite</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer hover:text-white transition-colors"
            onClick={scrollToAbout}
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;