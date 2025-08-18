import { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SkillIcon from './components/SkillIcon';
import { Footer } from './pages/Footer';
import { CVDownload } from './components/CVDownload';
import LoadingSpinner from './components/LoadingSpinner';
import SEOHead from './components/SEO/SEOHead';
import { seoData } from './data/seoData';
import SkipLinks from './components/SkipLinks';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import './styles/accessibility.css';

// Lazy loading optimisé avec code splitting
import {
  Home,
  About,
  Skills,
  Projects,
  Contact,
  ProjectDetails
} from './utils/lazyRoutes';

const skills = [
  { name: "React", progress: 90 },
  { name: "Node.js", progress: 45 },
  { name: "Flutter", progress: 98 },
  { name: "TypeScript", progress: 46 },
  { name: "Docker", progress: 40 },
  { name: "Git", progress: 60 },
  { name: "Azure", progress: 70 },
  { name: "VS Code", progress: 100 },
];

// Composant principal qui contient la page d'accueil
const MainContent = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <SEOHead {...seoData.home} url="/" />
      <SkipLinks />
      <CustomCursor />
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <main id="main-content" tabIndex={-1}>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><LoadingSpinner size="lg" color="purple" text="Chargement de l'accueil..." /></div>}>
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
            <Suspense fallback={<LoadingSpinner color="purple" text="Chargement de la section À propos..." />}>
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
            <Suspense fallback={<LoadingSpinner color="blue" text="Chargement des projets..." />}>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <SkillIcon
                  key={skill.name}
                  name={skill.name}
                  progress={skill.progress}
                />
              ))}
            </div>
            <Suspense fallback={<LoadingSpinner color="purple" text="Chargement des compétences..." />}>
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
            <Suspense fallback={<LoadingSpinner color="pink" text="Chargement du formulaire de contact..." />}>
              <Contact />
            </Suspense>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto"
        >
          <CVDownload />
        </motion.div>
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
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><LoadingSpinner size="lg" color="blue" text="Chargement du projet..." /></div>}>
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
        <AppWrapper />
      </Router>
    </HelmetProvider>
  );
}

export default App;