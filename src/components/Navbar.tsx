'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { lenisInstance } from './ScrollManager';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  // Animation de la barre au scroll
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'about', label: 'À Propos', icon: User },
    { id: 'projects', label: 'Projets', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // 1. ESPION : Détecter la section active au scroll
  useEffect(() => {
    // On ne surveille que si on est sur la page d'accueil
    if (pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // La section doit être au milieu de l'écran
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
  }, [pathname]); // Re-run si on change de page

  // 2. PILOTE : Gérer le clic sur les liens
  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);

    if (pathname !== '/') {
      // Si on n'est pas sur l'accueil, on navigue vers l'accueil avec le hash
      router.push(`/#${sectionId}`);
    } else {
      // Si on est DÉJÀ sur l'accueil
      const element = document.getElementById(sectionId);
      if (element && lenisInstance) {
        // Scroll fluide via Lenis
        lenisInstance.scrollTo(element, { offset: -80 });
        // Mise à jour de l'URL pour l'historique
        window.history.pushState({}, '', `/#${sectionId}`);
        // Mise à jour manuelle immédiate pour la réactivité UI
        setActiveSection(sectionId); 
      }
    }
  };

  return (
    <>
      <motion.nav
        style={{ opacity, scale }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 py-2 px-3 bg-[#0a0a1a]/60 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id && pathname === '/';

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none ${isActive
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
                aria-label={`Naviguer vers ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Glow for Active Item */}
                {isActive && (
                  <motion.div
                    layoutId="navGlow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-md"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    layoutId="navDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_5px_#60a5fa]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2">
                  <Icon
                    size={16}
                    className={`transition-colors duration-300 ${isActive ? 'text-blue-300 drop-shadow-[0_0_3px_rgba(147,197,253,0.5)]' : 'text-gray-400'
                      }`}
                  />
                  <span className={`${isActive ? 'text-white' : 'text-gray-400'}`}>{item.label}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-x-0 top-24 z-40 md:hidden px-4">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="p-4 rounded-2xl bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id && pathname === '/';

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${isActive
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <Icon size={18} className={isActive ? 'text-blue-400' : ''} />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_5px_#60a5fa]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
