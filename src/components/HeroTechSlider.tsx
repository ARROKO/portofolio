"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Sélection des compétences "Top Tier" depuis tes données
const techStack = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

export default function HeroTechSlider() {
  return (
    <div
      className="w-full max-w-[500px] overflow-hidden relative group"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      {/* Masques de fondu pour une intégration douce (Optionnel si le maskImage fonctionne bien) */}
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10" />

      <motion.div
        className="flex w-max"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {/* Correction du glitch : On utilise pr-12 au lieu de gap pour une largeur mathématiquement parfaite */}
        {[...techStack, ...techStack].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 pr-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          >
            {/* Icône SVG */}
            <div className="relative w-5 h-5 md:w-6 md:h-6 grayscale group-hover:grayscale-0 transition-all duration-300">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
                unoptimized // Nécessaire pour les URLs externes si pas configuré dans next.config.ts
              />
            </div>
            {/* Nom */}
            <span className="text-xs md:text-sm font-mono text-gray-400 tracking-wider uppercase whitespace-nowrap group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
