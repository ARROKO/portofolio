import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHidden(latest > lastScrollY && latest > 100);
      setLastScrollY(latest);
    });
  }, [lastScrollY, scrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 py-3 px-6 mt-4 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800"
    >
      <ul className="flex space-x-8">
        {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
          <motion.li
            key={section}
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium capitalize ${
                activeSection === section ? 'text-white' : 'text-gray-400'
              }`}
            >
              {section}
            </button>
            {activeSection === section && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;