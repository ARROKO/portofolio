'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Target, Users } from 'lucide-react';
import type { Project } from '../../data/projectsData';

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {

  const overviewItems = [
    {
      icon: <Layout className="text-pink-500" size={24} />,
      title: "Architecture",
      description: project.architecture
    },
    {
      icon: <Target className="text-purple-500" size={24} />,
      title: "Objectifs",
      description: project.objectif
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Public Cible",
      description: project.public
    }
  ].filter(item => {
    if (!item.description) return false;
    if (Array.isArray(item.description) && item.description.length === 0) return false;
    return true;
  });

  return (
    <section className="content-section">
      <div className="grid md:grid-cols-3 gap-8">
        {overviewItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            {Array.isArray(item.description) ? (
               <ul className="space-y-2">
                 {item.description.map((desc, i) => (
                   <li key={i} className="flex items-start gap-2 text-gray-400">
                     <span className="mt-2 min-w-[4px] h-1 rounded-full bg-gray-500" />
                     <span>{desc}</span>
                   </li>
                 ))}
               </ul>
            ) : (
              <p className="text-gray-400">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;
