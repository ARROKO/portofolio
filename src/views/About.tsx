'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import PageTransition from "../components/PageTransition";
import { Stats } from "../components/About/Stats";
import { Currency } from "../components/About/Currency";
import ContentSlide from "../components/About/ContentSlide";
import StackedImages from "../components/About/StackedImages";
import { aboutContent } from "../data/aboutData";
import twMicronicsLogo from '../assets/images/twmicronics_logo.png';
import bridgeLogo from '../assets/images/bridge_logo.png';
import LazyImage from "../components/LazyImage";
import SEOHead from "../components/SEO/SEOHead";
import { seoData } from "../data/seoData";
import { Play, Pause } from "lucide-react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 7000;

  // Unified Timer Logic
  useEffect(() => {
    if (isPaused) return;

    // Calculate start time based on current progress to resume smoothly
    const startTime = Date.now() - (progress / 100) * SLIDE_DURATION;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;

      if (newProgress >= 100) {
        // Slide finished
        setCurrentIndex((prev) => (prev + 1) % aboutContent.length);
        setProgress(0);
        clearInterval(progressInterval);
      } else {
        setProgress(newProgress);
      }
    }, 16); // ~60fps

    return () => clearInterval(progressInterval);
  }, [isPaused, currentIndex]); // Re-run when slide changes or pause state changes

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
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
    setProgress(0); // Reset progress when manually changing slide
  }, []);

  return (
    <PageTransition>
      <SEOHead {...seoData.about} url="/about" />
      <div className="max-w-18xl mx-auto px-2 md:px-4 py-8 md:py-16">
        {/* Hero Section */}
        <section className="py-4 md:py-8 px-2 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout - Card Slider */}
            <div className="block md:hidden">
              <div className="relative h-[50vh] min-h-[400px] max-h-[500px] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${aboutContent[currentIndex].image})`
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h1 className="text-xl font-bold mb-2 leading-tight">
                          {aboutContent[currentIndex].title}
                        </h1>
                        <p className="text-sm text-gray-200 leading-relaxed mb-3">
                          {aboutContent[currentIndex].description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Layout */}
            <motion.div
              className="hidden md:grid md:grid-cols-2 gap-12 items-center cursor-none group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              data-cursor="hover"
            >
              {/* Stacked Images */}
              <div className="relative" style={{ perspective: "1000px" }}>
                {/* Glow Effect Container */}
                <motion.div
                  className="absolute -inset-4 bg-linear-to-r from-white/10 to-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <StackedImages
                  images={aboutContent}
                  currentIndex={currentIndex}
                />

                {/* Circular Timer & Pause Control (Bottom Right) */}
                <div className="absolute bottom-6 right-6 z-30 flex items-center justify-center">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                      {/* Background Circle */}
                      <path
                        className="text-white/20"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      {/* Progress Circle */}
                      <motion.path
                        className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                        strokeDashoffset={100 - progress}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Icon Center */}
                    <button
                      onClick={(e) => { e.stopPropagation(); togglePause(); }}
                      className="absolute inset-0 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <ContentSlide content={aboutContent[currentIndex]} />
              </div>
            </motion.div>

            {/* Navigation simple */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {aboutContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-1 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/60"
                    }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Currency & Timeline Section - Responsive */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Currency Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Mes devises</h2>
            <Currency />
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            {/* Titre de section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Mon Parcours</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"></div>

              <div className="space-y-8">
                {[
                  {
                    period: "Février 2024 - Présent",
                    title: "Développeur Junior",
                    company: "TW Micronics",
                    logo: twMicronicsLogo,
                    description: "Développement d'applications web et maintenance systèmes informatiques.",
                    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
                    color: "from-blue-400 to-cyan-500",
                    isActive: true,
                    events: [
                      {
                        title: "LMS École des Travaux du Cameroun",
                        description: "Création d'une plateforme d'apprentissage en ligne complète avec système de gestion des cours et formation des utilisateurs",
                        icon: "🎓",
                        category: "Développement & Formation"
                      },
                      {
                        title: "Formation AZ-800 - CSPH Cameroun",
                        description: "Formation certifiante Microsoft Azure sur l'administration des serveurs Windows Server hybrides",
                        icon: "☁️",
                        category: "Certification Microsoft"
                      },
                      {
                        title: "Déploiement Maarch Courrier - MINRESI",
                        description: "Participation au déploiement de la solution de gestion électronique de documents et Records Management",
                        icon: "📄",
                        category: "Déploiement Système"
                      },
                      {
                        title: "Séminaires VBA Excel",
                        description: "Animation de séminaires de formation sur l'automatisation bureautique avec VBA Excel",
                        icon: "📊",
                        category: "Formation Bureautique"
                      }
                    ]
                  },
                  {
                    period: "Février 2023 - Janvier 2024",
                    title: "Développeur Junior",
                    company: "BRIDGE Company SARL",
                    logo: bridgeLogo,
                    description: "Application desktop de gestion scolaire et optimisation des processus.",
                    technologies: ["C#", ".NET", "WPF", "SQL Server"],
                    color: "from-purple-400 to-pink-500",
                    isActive: false
                  },
                ].map((experience) => (
                  <div
                    key={experience.company}
                    className="relative flex items-start gap-6 group"
                  >
                    {/* Point sur la timeline */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${experience.color} p-0.5 shadow-lg hover:scale-105 transition-transform duration-200`}>
                        <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                          <div className={`${experience.company === 'BRIDGE Company SARL' ? 'bg-white rounded-full p-0.5 md:p-1' : ''} flex items-center justify-center`}>
                            <LazyImage
                              src={experience.logo}
                              alt={`${experience.company} logo`}
                              className="w-6 h-6 md:w-10 md:h-10 object-contain filter brightness-110"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Badge "Actuel" */}
                      {experience.isActive && (
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                          Actuel
                        </div>
                      )}
                    </div>

                    {/* Contenu de l'expérience */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10">
                      {/* Header */}
                      <div className="flex flex-col gap-2 mb-3">
                        <div>
                          <h3 className={`text-base md:text-lg font-bold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                            {experience.title}
                          </h3>
                          <p className="text-sm md:text-base text-white font-medium">{experience.company}</p>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full self-start">
                          {experience.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">
                        {experience.description}
                      </p>

                      {/* Événements et formations (uniquement pour TW Micronics) */}
                      {experience.events && (
                        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
                          <h4 className="text-xs md:text-sm font-semibold text-white mb-2 md:mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                            Formations & Événements
                          </h4>
                          <div className="grid gap-2 md:gap-3">
                            {experience.events.map((event, index) => (
                              <motion.div
                                key={event.title}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10px" }}
                                transition={{ 
                                  delay: index * 0.1,
                                  duration: 0.4,
                                  ease: "easeOut"
                                }}
                                className="bg-white/5 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                              >
                                <div className="flex items-start gap-2 md:gap-3">
                                  <div className="text-sm md:text-lg flex-shrink-0 mt-0.5">
                                    {event.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex flex-col gap-1 mb-1">
                                      <h5 className="text-xs md:text-sm font-medium text-white leading-tight">
                                        {event.title}
                                      </h5>
                                      <span className="text-xs text-cyan-400 bg-cyan-400/10 px-1.5 md:px-2 py-0.5 rounded-full border border-cyan-400/20 self-start">
                                        {event.category}
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                      {event.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
