import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/Projects/ProjectCard';
import { projects } from '../components/Projects/data';
import SEOHead from '../components/SEO/SEOHead';
import { seoData } from '../data/seoData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'personal' | 'professional'>('personal');

  useEffect(() => {
    // Animation for the background gradient
    gsap.to('body', {
      background: activeCategory === 'personal'
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #1a1a2e 0%, #1e2a4a 50%, #1a1a2e 100%)',
      duration: 1,
      ease: 'power2.inOut',
    });
  }, [activeCategory]);

  const filteredProjects = projects.filter(project => project.type === activeCategory);

  return (
    <PageTransition>
      <SEOHead {...seoData.projects} url="/projects" />
      <div className="min-h-screen py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header with Animated Background */}
          <motion.div 
            className="text-center mb-12 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={`bg-gradient-to-r ${
              activeCategory === 'personal'
                ? 'from-pink-500 to-purple-500'
                : 'from-blue-500 to-cyan-500'
            } bg-clip-text text-transparent`}>
              Mes Réalisations
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {activeCategory === 'personal' 
              ? 'Découvrez mes projets personnels, reflets de mes passions et de ma créativité'
              : 'Explorez mes réalisations professionnelles et contributions aux projets d\'entreprise'}
          </motion.p>
        </motion.div>

        {/* Category Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700">
            <button
              onClick={() => setActiveCategory('personal')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'personal'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Projets Personnels
            </button>
            <button
              onClick={() => setActiveCategory('professional')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'professional'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Projets Professionnels
            </button>
          </div>
        </div>
        
        {/* Projects Grid with Stagger Animation */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          
          {filteredProjects.map((project, index) => (
            <ProjectCard
            key={project.title} 
            project={project} 
            index={index} 
            />
          ))}
        </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;