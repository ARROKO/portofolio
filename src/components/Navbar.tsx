'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { lenisInstance } from './ScrollManager';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  // --- Animation de Transparence ---
  // En haut (0px) -> Transparent (bg-transparent + border-transparent)
  // Au scroll (50px+) -> Glassmorphism (bg-black/50 + border-white/10)
  const bgOpacity = useTransform(scrollY, [0, 50], ["rgba(10, 10, 26, 0)", "rgba(10, 10, 26, 0.6)"]);
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);
  const shadow = useTransform(scrollY, [0, 50], ["0px 0px 0px rgba(0,0,0,0)", "0px 8px 32px rgba(0,0,0,0.3)"]);

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'about', label: 'À Propos', icon: User },
    { id: 'projects', label: 'Projets', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Détection active
  useEffect(() => {
    if (pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element && lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -80 });
        window.history.pushState({}, '', `/#${sectionId}`);
        setActiveSection(sectionId); 
      }
    }
  };

  return (
    <>
      <motion.nav
        style={{ 
          backgroundColor: bgOpacity,
          backdropFilter: backdropBlur,
          borderColor: borderColor,
          boxShadow: shadow,
        }}
        className={cn(
          "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50",
          "w-[95%] md:w-auto", // Largeur fixe : presque plein écran mobile, auto (fit-content) sur desktop
          "rounded-full px-2 py-2 transition-all duration-300"
        )}
      >
        <div className="flex items-center justify-between w-full md:gap-2">
          
          {/* Mobile Title */}
          <span className="md:hidden ml-4 font-bold text-white text-xs tracking-widest opacity-80">
            PORTFOLIO
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id && pathname === '/';

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={cn(
                    "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navBackground"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} className={isActive ? "text-blue-400" : "text-gray-400"} />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed inset-x-4 top-24 z-50 md:hidden bg-[#0a0a1a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id && pathname === '/';
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={cn(
                        "flex items-center gap-4 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        isActive ? "bg-white/10 text-white shadow-inner" : "text-gray-400 hover:text-white"
                      )}
                    >
                      <div className={cn("p-2 rounded-lg", isActive ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-500")}>
                        <Icon size={18} />
                      </div>
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
