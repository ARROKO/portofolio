'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import PageTransition from "../components/PageTransition";
import { DeveloperTypeSlider } from "../components/DeveloperTypeSlider";
import HomeScene3D from '../components/HomeScene3D';

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
      <div className="min-h-screen w-full lg:grid lg:grid-cols-2 lg:gap-12 relative overflow-hidden bg-transparent">
        
        {/* Colonne Gauche : Texte */}
        <div className="relative z-50 flex flex-col justify-center px-6 lg:pl-16 lg:pr-0 py-20 lg:py-0 order-2 lg:order-1 h-full">
            <div className="w-full max-w-3xl mx-auto lg:mx-0">
              <div className="mb-8 text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-4 mb-2"
                  >
                     <Sparkles className="text-yellow-400 w-6 h-6 md:w-10 md:h-10 animate-pulse" />
                     <span className="text-blue-500">Bienvenue😁,</span>
                  </motion.div>
                  
                  <div className="block mt-2">
                    je suis <span style={customStyle} className="text-white">Joseph</span>
                  </div>
                </motion.h1>

                <motion.p
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.4 }}
                   className="text-gray-300 text-base md:text-xl font-light max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed drop-shadow-md"
                >
                  Développeur Full Stack passionné par la création d'expériences numériques immersives et performantes.
                </motion.p>
              </div>

              {/* Slider de compétences */}
              <div className="w-full max-w-xl mx-auto lg:mx-0">
                <DeveloperTypeSlider />
              </div>

            </div>
        </div>

        {/* Colonne Droite : Animation 3D */}
        <div className="relative order-1 lg:order-2 h-[40vh] lg:h-auto w-full flex flex-col justify-start">
             {/* Container sans scale pour éviter l'overlap */}
             <div className="w-full h-full bg-transparent flex items-center justify-center">
                 <HomeScene3D />
             </div>
        </div>

        {/* Indicateur de scroll (absolu par rapport à la page entière) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-30 pointer-events-auto"
        >
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase opacity-70">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer hover:text-white transition-colors p-2"
            onClick={scrollToAbout}
          >
            <div className="w-5 h-9 border-2 border-white/40 hover:border-white/80 rounded-full flex justify-center transition-colors">
              <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
