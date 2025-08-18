import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5], // Se déclenche quand 50% de la section est visible
        rootMargin: '-20% 0px -20% 0px' // Marge pour une détection plus précise
      }
    );

    // Observer toutes les sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' },
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
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 py-4 px-8 mt-4 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-800/50 shadow-lg"
      >
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-x-0 top-20 z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mx-4 p-4 rounded-lg bg-gray-900/95 backdrop-blur-md border border-gray-800/50 shadow-lg"
        >
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                activeSection === item.id
                  ? 'bg-blue-500/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;