import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SkillIcon from './components/SkillIcon';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Home from './pages/Home';
import { Footer } from './pages/Footer';
import { CVDownload } from './components/CVDownload';

const skills = [
  { name: "React", progress: 90 },
  { name: "Node.js", progress: 85 },
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
    <>
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
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
          <About />
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
          <Projects />
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
          <Skills />
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
          <Contact />
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <CVDownload />
      </motion.div>
      <Footer />
    </>
  );
};

// Wrapper qui gère le curseur personnalisé
const AppWrapper = () => {
  const location = useLocation();
  const showNavbar = location.pathname === '/';

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
};

// Composant App principal avec le Router
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;