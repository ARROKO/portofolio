import React from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from './data';
import LazyImage from '../LazyImage';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
      className="group relative h-[400px] rounded-2xl overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transform scale-100"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t ${gradientClass} 
          opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
        {/* Title and Description */}
        <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-100 mb-4 line-clamp-2">{project.description}</p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 transform translate-y-8 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-white/20 rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4 transform translate-y-8 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <Link
            to={projectUrl}
            className="flex items-center gap-2 hover:text-blue-300 transition-colors ml-auto group"
          >
            <span>Voir le projet</span>
            <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;