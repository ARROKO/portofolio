import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Pause, Play } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Stats } from "../components/About/Stats";
import { Currency } from "../components/About/Currency";
import ContentSlide from "../components/About/ContentSlide";
import StackedImages from "../components/About/StackedImages";
import { aboutContent } from "../components/About/AboutContent";
import LazyImage from "../components/LazyImage";
import SEOHead from "../components/SEO/SEOHead";
import { seoData } from "../data/seoData";

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
      <SEOHead {...seoData.about} url="/about" />
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

        {/* Currency & Timeline Section - Side by side */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Currency Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Mes devises</h2>
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
              <h2 className="text-3xl font-bold text-white mb-4">Mon Parcours</h2>
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
                    logo: "/src/images/twmicronics_logo.png",
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
                    logo: "/src/images/bridge_logo.png",
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
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} p-0.5 shadow-lg hover:scale-105 transition-transform duration-200`}>
                        <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                          <div className={`${experience.company === 'BRIDGE Company SARL' ? 'bg-white rounded-full p-1' : ''} flex items-center justify-center`}>
                            <LazyImage
                              src={experience.logo} 
                              alt={`${experience.company} logo`}
                              className="w-10 h-10 object-contain filter brightness-110"
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
                    <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className={`text-lg font-bold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                            {experience.title}
                          </h3>
                          <p className="text-base text-white font-medium">{experience.company}</p>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                          {experience.period}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      {/* Événements et formations (uniquement pour TW Micronics) */}
                      {experience.events && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                            Formations & Événements réalisés
                          </h4>
                          <div className="grid gap-3">
                            {experience.events.map((event, index) => (
                              <motion.div
                                key={event.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="text-lg flex-shrink-0 mt-0.5">
                                    {event.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                      <h5 className="text-sm font-medium text-white truncate">
                                        {event.title}
                                      </h5>
                                      <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20 flex-shrink-0">
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
                      
                      {/* Technologies */}
                      {/* <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs bg-gradient-to-r ${experience.color} bg-opacity-20 text-white rounded-full border border-white/20`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div> */}
                      
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
