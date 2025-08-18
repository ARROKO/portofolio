import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    // Utiliser IntersectionObserver au lieu de scroll listener pour de meilleures performances
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Trier les entrées par leur position verticale
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        
        if (visibleEntries.length > 0) {
          // Prendre la première section visible (la plus haute)
          const topSection = visibleEntries[0];
          if (topSection.intersectionRatio > 0.3) {
            setActiveSection(topSection.target.id);
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7], // Plusieurs seuils pour une détection plus fine
        rootMargin: '-10% 0px -10% 0px' // Marge réduite pour une détection plus sensible
      }
    );

    // Observer toutes les sections avec un délai pour s'assurer que le DOM est prêt
    const observeSections = () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element && observerRef.current) {
          observerRef.current.observe(element);
        }
      });
    };

    // Délai pour s'assurer que les composants lazy sont chargés
    const timeoutId = setTimeout(observeSections, 500);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'about', label: 'À Propos', icon: User },
    { id: 'projects', label: 'Projets', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        style={{ opacity, scale }}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 py-3 px-6 mt-6 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl"
      >
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={false}
                animate={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0)',
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon 
                  size={16} 
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-blue-400' : 'text-gray-400'
                  }`} 
                />
                <span className="hidden lg:inline">{item.label}</span>
                
                {/* Indicateur de glow pour l'élément actif */}
                {isActive && (
                  <motion.div
                    layoutId="navGlow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-3 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-x-0 top-24 z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mx-4 p-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white/15 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon 
                    size={18} 
                    className={`transition-colors duration-300 ${
                      isActive ? 'text-blue-400' : 'text-gray-400'
                    }`} 
                  />
                  <span>{item.label}</span>
                  
                  {/* Indicateur actif mobile */}
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-blue-400"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Overlay pour fermer le menu mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;