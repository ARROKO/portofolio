import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Pause, Play } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Stats } from "../components/About/Stats";
import { Currency } from "../components/About/Currency";
import ContentSlide from "../components/About/ContentSlide";
import StackedImages from "../components/About/StackedImages";
import { aboutContent } from "../components/About/AboutContent";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5000);
  const [showHoverIcon, setShowHoverIcon] = useState(false);
  const [hoverIconType, setHoverIconType] = useState<'pause' | 'play'>('pause');

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const startTime = Date.now();
    const duration = 5000;
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, duration - elapsed);
      
      setTimeRemaining(remaining);
      
      if (elapsed >= duration) {
        setCurrentIndex((prev) => (prev + 1) % aboutContent.length);
        setTimeRemaining(duration);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused, currentIndex]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    setHoverIconType('pause');
    setShowHoverIcon(true);
    
    // Masquer l'icône après 800ms
    setTimeout(() => {
      setShowHoverIcon(false);
    }, 800);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    setHoverIconType('play');
    setShowHoverIcon(true);
    
    // Masquer l'icône après 800ms
    setTimeout(() => {
      setShowHoverIcon(false);
    }, 800);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);
  
  const handleClick = useCallback(() => {
    // Sur mobile, un tap toggle la pause
    if (window.innerWidth < 768) {
      togglePause();
    }
  }, [togglePause]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setTimeRemaining(5000);
  }, []);
  return (
    <PageTransition>
      <div className="max-w-18xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative grid md:grid-cols-2 gap-12 items-center cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              {/* Stacked Images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                <StackedImages
                  images={aboutContent}
                  currentIndex={currentIndex}
                />
                
                {/* Animation d'icône temporaire - Version améliorée */}
                <AnimatePresence>
                  {showHoverIcon && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.3, rotate: 180 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: "backOut",
                        rotate: { duration: 0.6 }
                      }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                    >
                      <motion.div
                        initial={{ scale: 0.8, y: 10 }}
                        animate={{ 
                          scale: [0.8, 1.2, 1], 
                          y: [10, -5, 0],
                          boxShadow: [
                            "0 0 0 0 rgba(255,255,255,0)",
                            "0 0 20px 10px rgba(255,255,255,0.1)",
                            "0 0 0 0 rgba(255,255,255,0)"
                          ]
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: "easeOut",
                          times: [0, 0.6, 1]
                        }}
                        className="relative bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-xl rounded-full p-5 border border-white/40 shadow-2xl"
                      >
                        {/* Effet de glow interne */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [0.8, 1.1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <motion.div
                          animate={{
                            rotate: hoverIconType === 'pause' ? [0, -5, 5, 0] : [0, -5, 5, 0]
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                          }}
                        >
                          {hoverIconType === 'pause' ? (
                            <Pause className="w-10 h-10 text-white drop-shadow-lg" />
                          ) : (
                            <Play className="w-10 h-10 text-white ml-1 drop-shadow-lg" />
                          )}
                        </motion.div>
                        
                        {/* Particules décoratives */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/60 rounded-full"
                            style={{
                              left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 40}px`,
                              top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}px`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1,
                              delay: i * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Content */}
              <div className="relative">
                <ContentSlide content={aboutContent[currentIndex]} />
                
              </div>
            </div>

            
            {/* Navigation simple */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {aboutContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Indicateur de temps élégant */}
            <motion.div 
              className="text-center mt-6"
              animate={{ 
                opacity: isPaused ? 0.4 : 0.8,
                y: isPaused ? 2 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <motion.div
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  animate={{
                    scale: isPaused ? [1, 0.8, 1] : [1, 1.2, 1],
                    opacity: isPaused ? 0.5 : [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: isPaused ? 1 : 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-sm text-gray-300 font-medium tracking-wider">
                  {Math.ceil(timeRemaining / 1000)}s
                </span>
                {isPaused && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs text-yellow-400 font-medium"
                  >
                    PAUSE
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Currency & Experience */}
        <div
          className="grid grid-cols-1 md:grid-cols-[5fr,3fr] gap-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Mes devises</h2>
            <Currency />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Parcours</h2>

            <div className="space-y-8">
              {[
                {
                  period: "Février 2024 - Présent",
                  title: "Développeur junior",
                  company: "TW Micronics",
                  description: "Direction informatique.",
                },
                // {
                //   period: "Janvier 2024 - Présent",
                //   title: "Développeur backend et mobile",
                //   company: "CCAA",
                //   description:
                //     "Développeur junior, participant au Développement et déploiement d'une application desktop de géstion d'un établissement scolaire.",
                // },
                {
                  period: "Février 2023 - Janvier 2024",
                  title: "Développeur junior",
                  company: "BRIDGE Company SARL",
                  description:
                    "Développeur junior, participant au Développement et déploiement d'une application desktop de géstion d'un établissement scolaire.",
                },
              ].map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm text-gray-400">
                    {experience.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 mt-1">{experience.company}</p>
                  <p className="text-gray-400 mt-3">{experience.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
