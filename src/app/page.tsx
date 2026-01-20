'use client';

import { Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { Footer } from '@/views/Footer';
import WaveTransition from '@/components/WaveTransition';
import QuantumLoader from '@/components/QuantumLoader';
import SkipLinks from '@/components/SkipLinks';
import ParticlesBackground from '@/components/ParticlesBackground';
import GlobalBackground from '@/components/GlobalBackground';

// Lazy loading components for section visibility
import Home from '@/views/Home';
import About from '@/views/About';
import Skills from '@/views/Skills';
import Projects from '@/views/Projects';
import Contact from '@/views/Contact';

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <SkipLinks />
      
      {/* Nouveau Background Global (Grille + Lueurs) */}
      <GlobalBackground />
      <ParticlesBackground />
      
      <Navbar />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main id="main-content" tabIndex={-1}>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><QuantumLoader /></div>}>
            <Home />
          </Suspense>
        </section>

        <section id="about" className="min-h-screen py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              À Propos
            </motion.h2>
            <Suspense fallback={<QuantumLoader />}>
              <About />
            </Suspense>
          </div>
        </section>

        <section id="projects" className="min-h-screen px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12"
            >
              Projets
            </motion.h2>
            <Suspense fallback={<QuantumLoader />}>
              <Projects />
            </Suspense>
          </div>
        </section>

        <section id="skills" className="h-auto py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12"
            >
              Compétences
            </motion.h2>
            <Suspense fallback={<QuantumLoader />}>
              <Skills />
            </Suspense>
          </div>
        </section>

        <section id="contact" className="h-auto py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12"
            >
              Contact
            </motion.h2>
            <Suspense fallback={<QuantumLoader />}>
              <Contact />
            </Suspense>
          </div>
        </section>

        <WaveTransition />

        <Footer />
      </main>
    </div>
  );
}
