'use client';

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
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
import { Play, Pause, ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";

// --- Composant pour gérer l'accordéon individuel ---
const CareerItem = ({ item, index }: { item: any, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
        >
            {/* Point de timeline centré */}
            <div className="absolute left-[-40px] top-0 -translate-x-1/2 w-4 h-4 flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-950 border border-white/20 group-hover:border-blue-400 transition-colors duration-500">
                    <div className={`absolute inset-0 rounded-full bg-blue-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
            </div>

            <div className="relative">
                {/* En-tête (Toujours visible) */}
                <div 
                    className="cursor-pointer md:cursor-default" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-lg shadow-white/5 shrink-0 transition-transform group-hover:scale-105">
                            <LazyImage src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <p className="text-blue-400/80 font-medium text-sm">{item.company}</p>
                        </div>
                        
                        {/* Indicateur Accordéon (Mobile uniquement) */}
                        <div className="md:hidden">
                            <ChevronDown className={cn("text-gray-500 transition-transform duration-300", isOpen && "rotate-180")} />
                        </div>
                    </div>
                    
                    <span className="inline-block text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5 mb-4">
                        {item.period}
                    </span>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                </div>

                {/* Contenu Desktop (Toujours visible) */}
                <div className="hidden md:block space-y-4">
                     {item.highlights?.map((high: any, i: number) => (
                        <div key={i} className="flex flex-col gap-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <h4 className="text-sm font-bold text-gray-200">{high.title}</h4>
                                <span className="text-[9px] uppercase tracking-tighter text-blue-300/60 bg-blue-500/5 px-1.5 rounded border border-blue-500/10">
                                    {high.tag}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed italic">
                                {high.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contenu Mobile (Accordéon) */}
                <div className="md:hidden">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4 pt-2 border-t border-white/5 mt-2">
                                    {item.highlights?.map((high: any, i: number) => (
                                        <div key={i} className="flex flex-col gap-1 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <h4 className="text-sm font-bold text-gray-200">{high.title}</h4>
                                                <span className="text-[9px] uppercase tracking-tighter text-blue-300/60 bg-blue-500/5 px-1.5 rounded border border-blue-500/10">
                                                    {high.tag}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400 leading-relaxed italic">
                                                {high.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </motion.div>
    );
};

// --- Page Principale ---

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 7000;
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isPaused) return;
    const startTime = Date.now() - (progress / 100) * SLIDE_DURATION;
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;
      if (newProgress >= 100) {
        setCurrentIndex((prev) => (prev + 1) % aboutContent.length);
        setProgress(0);
        clearInterval(progressInterval);
      } else {
        setProgress(newProgress);
      }
    }, 16);
    return () => clearInterval(progressInterval);
  }, [isPaused, currentIndex]);

  const togglePause = useCallback(() => setIsPaused(prev => !prev), []);
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  const careerPath = [
    {
      period: "2024 - Présent",
      title: "Développeur Junior",
      company: "TW Micronics",
      logo: twMicronicsLogo,
      description: "Développement d'applications web, formation client et administration système.",
      color: "from-blue-500 to-cyan-400",
      highlights: [
        {
          title: "Formation Customisée - Port Autonome de Douala (PAL)",
          desc: "Expertise Microsoft Copilot, Microsoft Purview et Power Apps dispensée aux équipes du PAL.",
          tag: "IA & Power Platform"
        },
        {
          title: "LMS École des Travaux Publics",
          desc: "Déploiement, personnalisation de Moodle et formation des administrateurs/enseignants.",
          tag: "E-Learning"
        },
        {
          title: "Formation AZ-800 - CSPH",
          desc: "Administration Windows Server Hybride dispensée aux équipes informatiques de la CSPH.",
          tag: "Infrastructure"
        },
        {
          title: "Déploiement Maarch Courrier - MINRESI",
          desc: "Numérisation des flux administratifs via la solution GED Maarch Courrier.",
          tag: "Digitalisation"
        },
        {
          title: "Séminaires VBA - CNCC",
          desc: "Automatisation des processus métier via VBA Excel pour le Conseil National des Chargeurs.",
          tag: "Automatisation"
        }
      ]
    },
    {
      period: "2023 - 2024",
      title: "Développeur Junior",
      company: "BRIDGE Company SARL",
      logo: bridgeLogo,
      description: "Conception logicielle et optimisation des systèmes de gestion scolaire.",
      color: "from-purple-500 to-pink-500",
      highlights: [
        {
          title: "Application de Gestion Scolaire",
          desc: "Conception d'une application desktop (.NET/WPF) pour le suivi administratif complet.",
          tag: "Dév. Desktop"
        }
      ]
    },
  ];

  return (
    <PageTransition>
      <SEOHead {...seoData.about} url="/about" />
      <div className="max-w-18xl mx-auto px-4 py-8 md:py-16">
        
        {/* Slider Section */}
        <section className="py-4 md:py-8 px-2 md:px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ perspective: "1000px" }}>
                <StackedImages images={aboutContent} currentIndex={currentIndex} />
                <div className="absolute bottom-6 right-6 z-30 flex items-center justify-center">
                   <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                      <path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      <motion.path className="text-white" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" strokeDashoffset={100 - progress} />
                    </svg>
                    <button onClick={togglePause} className="absolute inset-0 flex items-center justify-center text-white">
                      {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
                    </button>
                  </div>
                </div>
              </div>
              <div><ContentSlide content={aboutContent[currentIndex]} /></div>
            </div>
          </div>
        </section>

        <Stats />

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          <div className="space-y-6 lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              Mes devises
            </h2>
            <Currency />
          </div>

          <div className="space-y-8 relative pl-2">
            <motion.h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              Mon Parcours
            </motion.h2>

            <div ref={timelineRef} className="relative pl-10 border-l border-white/5">
              <motion.div 
                style={{ scaleY, originY: 0 }} 
                className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-purple-500 to-transparent z-0" 
              />

              <div className="space-y-20">
                {careerPath.map((item, index) => (
                    <CareerItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
