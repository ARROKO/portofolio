import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Stats } from "../components/About/Stats";
import { Currency } from "../components/About/Currency";
import ContentSlide from "../components/About/ContentSlide";
import StackedImages from "../components/About/StackedImages";
import { aboutContent } from "../components/About/AboutContent";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5000);

  useEffect(() => {
    if (isPaused) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const duration = 5000;
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = (elapsed / duration) * 100;
      const remaining = Math.max(0, duration - elapsed);
      
      setProgress(Math.min(progressPercent, 100));
      setTimeRemaining(remaining);
      
      if (elapsed >= duration) {
        setCurrentIndex((prev) => (prev + 1) % aboutContent.length);
        setProgress(0);
        setTimeRemaining(duration);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused, currentIndex]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setTimeRemaining(5000);
  }, []);
  return (
    <PageTransition>
      <div className="max-w-18xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="grid md:grid-cols-2 gap-12 items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
              </motion.div>

              {/* Content */}
              <ContentSlide content={aboutContent[currentIndex]} />
            </div>

            {/* Contrôles et Navigation */}
            <div className="flex flex-col items-center gap-4 mt-8">
              {/* Barre de progression temporelle */}
              <div className="w-full max-w-md">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Slide {currentIndex + 1}/{aboutContent.length}</span>
                  <span>{Math.ceil(timeRemaining / 1000)}s</span>
                </div>
                <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                  {isPaused && (
                    <div className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center">
                      <Pause className="w-3 h-3 text-yellow-400" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Contrôles */}
              <div className="flex items-center gap-4">
                {/* Bouton Play/Pause */}
                <button
                  onClick={togglePause}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  aria-label={isPaused ? 'Reprendre' : 'Pause'}
                >
                  {isPaused ? (
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  ) : (
                    <Pause className="w-4 h-4 text-white" />
                  )}
                </button>
                
                {/* Navigation Dots */}
                <div className="flex gap-2">
                  {aboutContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-5 h-1 rounded-2xl transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-blue-500 scale-125"
                          : "bg-gray-500 hover:bg-gray-400"
                      }`}
                      aria-label={`Aller à la slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Indicateur d'état pour mobile */}
              <div className="md:hidden text-center">
                <p className="text-xs text-gray-400">
                  {isPaused ? (
                    <span className="flex items-center justify-center gap-1">
                      <Pause className="w-3 h-3" />
                      Diaporama en pause
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1">
                      <Play className="w-3 h-3" />
                      Diaporama en cours
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Touchez le bouton pause pour lire tranquillement
                </p>
              </div>
            </div>
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
