import { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './pages/Footer';
import WaveTransition from './components/WaveTransition';
import QuantumLoader from './components/QuantumLoader';
import SEOHead from './components/SEO/SEOHead';
import { seoData } from './data/seoData';
import SkipLinks from './components/SkipLinks';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import './styles/accessibility.css';
import ScrollManager from './components/ScrollManager';

// Lazy loading optimisé avec code splitting
import {
  Home,
  About,
  Skills,
  Projects,
  Contact,
  ProjectDetails
} from './utils/lazyRoutes';


// Composant principal qui contient la page d'accueil
const MainContent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <SEOHead {...seoData.home} url="/" />
      <SkipLinks />
      <CustomCursor />
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

        <section id="skills" className="min-h-screen py-24 px-4">
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

        <section id="contact" className="min-h-screen py-24 px-4">
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

        {/* Wave Transition - Séparation élégante avant le footer */}
        <WaveTransition />

        <Footer />
      </main>
      <PWAInstallPrompt />
    </div>
  );
};

// Wrapper qui gère le curseur personnalisé
const AppWrapper = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    document.body.style.background = '#1a1a2e';
    document.body.style.minHeight = '100vh';
    return () => {
      document.body.style.cursor = 'auto';
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{
      background: '#1a1a2e',
      minHeight: '100vh'
    }}>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><QuantumLoader /></div>}>
            <ProjectDetails />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

// Composant App principal avec le Router
function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollManager>
          <AppWrapper />
        </ScrollManager>
      </Router>
    </HelmetProvider>
  );
}

export default App;