import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Project } from '../Projects/data';
import { useNavigate } from 'react-router-dom';

interface ProjectHeroProps {
  project: Project;
  opacity: any;
  scale: any;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ project, opacity, scale }) => {

  const navigate = useNavigate();

  return (
    <motion.div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0">
        <img 
          src={project.image2 !== undefined ? project.image2 : project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          project.type === 'personal'
            ? 'bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900'
            : 'bg-gradient-to-b from-transparent via-blue-900/50 to-gray-900'
        }`} />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          className="absolute -top-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={`px-4 py-2 rounded-full text-sm ${
            project.type === 'personal' 
              ? 'bg-pink-500/20 text-pink-300'
              : 'bg-blue-500/20 text-blue-300'
          }`}>
            {project.type === 'personal' ? 'Projet Personnel' : 'Projet Professionnel'}
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={`bg-gradient-to-r ${
            project.type === 'personal'
              ? 'from-pink-500 to-purple-500'
              : 'from-blue-500 to-cyan-500'
          } bg-clip-text text-transparent`}>
            {project.title}
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {project.description}
        </motion.p>

        <motion.div 
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 
              backdrop-blur-md transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Retour aux projets</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 
              backdrop-blur-md transition-all duration-300"
          >
            <Github size={20} />
            <span>Code Source</span>
          </a>
          {
            project.live && <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r 
              from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 
              transition-all duration-300"
          >
            <ExternalLink size={20} />
            <span>Voir le Projet</span>
          </a>
          }
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectHero;