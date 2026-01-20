'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { skills } from "../components/Skills/data";
import SEOHead from '../components/SEO/SEOHead';
import { seoData } from '../data/seoData';
import PageTransition from '../components/PageTransition';
import { cn } from '../utils/cn';
import Image from 'next/image';

// -----------------------------------------------------------------------------
// Composant : SkillCard (Carte unitaire pour une compétence)
// -----------------------------------------------------------------------------
function SkillCard({ item }: { item: { name: string; logoLink: string } }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Effet Spotlight au survol */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Contenu de la carte */}
      <div className="relative flex items-center gap-4 p-4 h-full">
        {/* Logo container avec un léger fond */}
        <div className="flex-shrink-0 relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 p-1.5 group-hover:scale-110 transition-transform duration-300">
          <img 
            src={item.logoLink} 
            alt={item.name}
            className="w-full h-full object-contain drop-shadow-lg"
            loading="lazy"
          />
        </div>
        
        {/* Nom de la compétence */}
        <div className="flex-grow">
          <h4 className="text-gray-200 font-medium group-hover:text-white transition-colors text-sm md:text-base">
            {item.name}
          </h4>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Composant : CategoryGroup (Groupe de compétences)
// -----------------------------------------------------------------------------
function CategoryGroup({ 
  category, 
  items, 
  index 
}: { 
  category: string; 
  items: any[]; 
  index: number; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-8 break-inside-avoid"
    >
      {/* Titre de la catégorie avec ligne décorative */}
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
          {category}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Grille des compétences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((skill) => (
          <SkillCard key={skill.name} item={skill} />
        ))}
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// Vue Principale : Skills
// -----------------------------------------------------------------------------
const Skills = () => {
  return (
    <PageTransition>
      <SEOHead {...seoData.skills} url="/skills" />
      
      <div className="w-full px-4 py-2 md:py-4 max-w-7xl mx-auto">
        {/* En-tête de page */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Technique</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Une constellation de technologies maîtrisées pour donner vie à vos idées. 
              Pureté du code et fluidité de l'expérience utilisateur.
            </p>
          </motion.div>
          
          {/* Background Glow décoratif */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        </div>

        {/* Contenu Principal - Layout Masonry (CSS Columns pour le "fluid") */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {skills.map((skillGroup, index) => (
            <CategoryGroup 
              key={skillGroup.category} 
              category={skillGroup.category} 
              items={skillGroup.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;