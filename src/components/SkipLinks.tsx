'use client';

import { motion } from 'framer-motion';

const SkipLinks = () => {
  const skipLinks = [
    { href: '#main-content', label: 'Aller au contenu principal' },
    { href: '#navigation', label: 'Aller à la navigation' },
    { href: '#projects', label: 'Aller aux projets' },
    { href: '#contact', label: 'Aller au contact' }
  ];

  const handleSkipClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus the target element for screen readers
      if (element instanceof HTMLElement) {
        element.focus();
      }
    }
  };

  return (
    <div className="sr-only focus-within:not-sr-only">
      <nav 
        className="fixed top-0 left-0 z-[100] bg-black/90 backdrop-blur-sm p-4 rounded-br-lg border-b border-r border-white/20"
        aria-label="Liens de navigation rapide"
      >
        <ul className="flex flex-col gap-2">
          {skipLinks.map((link) => (
            <li key={link.href}>
              <motion.button
                onClick={() => handleSkipClick(link.href)}
                className="text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSkipClick(link.href);
                  }
                }}
              >
                {link.label}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SkipLinks;
