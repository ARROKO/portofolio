'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import type { Project } from '../../data/projectsData';
import { useRouter } from 'next/navigation';
import LazyImage from '../LazyImage';

interface ProjectHeroProps {
  project: Project;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  opacity: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scale: any;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ project, opacity, scale }) => {

  const router = useRouter();

  return (
    <motion.div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <LazyImage
          src={project.image2 !== undefined ? project.image2 : project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 ${
          project.type === 'personal'
            ? 'bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900'
            : 'bg-gradient-to-b from-transparent via-blue-900/50 to-gray-900'
        }`} />
      </div>

      <div className="relative z-10 text-center px-2 md:px-6">
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
          className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6"
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
          className="text-sm md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-12 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {project.description}
        </motion.p>

        <motion.div 
          className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => router.push('/#projects')}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 hover:bg-white/20 
              backdrop-blur-md transition-all duration-300 text-sm md:text-base w-full md:w-auto justify-center"
          >
            <ArrowLeft size={16} className="md:w-5 md:h-5" />
            <span>Retour aux projets</span>
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 hover:bg-white/20 
              backdrop-blur-md transition-all duration-300 text-sm md:text-base w-full md:w-auto justify-center"
          >
            <Github size={16} className="md:w-5 md:h-5" />
            <span>Code Source</span>
          </a>
          {
            project.live && <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r 
              from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 
              transition-all duration-300 text-sm md:text-base w-full md:w-auto justify-center"
          >
            <ExternalLink size={16} className="md:w-5 md:h-5" />
            <span>Voir le Projet</span>
          </a>
          }
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
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