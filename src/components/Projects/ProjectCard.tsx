'use client';

import React, { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '../../data/projectsData';
import LazyImage from '../LazyImage';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isActive, setIsActive] = useState(false);
  const isPersonal = project.type === 'personal';
  const gradientClass = isPersonal
    ? 'from-pink-500/80 to-purple-500/80'
    : 'from-blue-500/80 to-cyan-500/80';

  const projectUrl = `/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-[280px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden"
      style={{ perspective: '1500px' }}
      onClick={() => setIsActive(!isActive)}
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transform scale-100"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t ${gradientClass} 
          transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end transform transition-transform duration-500">
        {/* Title and Description */}
        <div className={`transform transition-all duration-500 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:translate-y-8 md:opacity-0'}`}>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{project.title}</h3>
          <p className="text-gray-100 mb-3 md:mb-4 line-clamp-2 text-sm md:text-base">{project.description}</p>
        </div>
        
        {/* Technologies */}
        <div className={`flex flex-wrap gap-2 mb-3 md:mb-4 transform transition-all duration-500 delay-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:translate-y-8 md:opacity-0'}`}>
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-2 md:px-3 py-1 text-xs md:text-sm bg-white/20 rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className={`flex gap-4 transform transition-all duration-500 delay-200 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:translate-y-8 md:opacity-0'}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors text-sm md:text-base"
          >
            <Github size={16} className="md:w-5 md:h-5" />
            <span>Code</span>
          </a>
          <Link
            href={projectUrl}
            className="flex items-center gap-2 hover:text-blue-300 transition-colors ml-auto group text-sm md:text-base"
          >
            <span>Voir le projet</span>
            <ArrowRight size={16} className="md:w-5 md:h-5 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;