"use client";

import { motion } from "framer-motion";

import HeroTechSlider from "./HeroTechSlider";

export default function HomeScene3D() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full py-20">
        
        {/* --- COLONNE GAUCHE : IDENTITÉ (Full width on mobile) --- */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left relative z-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex items-center gap-3"
          >
            {/* Ligne décorative plus subtile */}
            <div className="h-[1px] w-8 bg-gray-600/50" />
            
            {/* Badge de statut */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-widest text-gray-300 uppercase">
                Available for work
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8"
          >
            JOSEPH<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">KEMGANG</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed border-l border-white/10 pl-6 mb-12"
          >
            Je ne code pas, je sculpte des émotions. Une alchimie où la <span className="text-white font-medium">Beauté</span> caresse la rétine et l'<span className="text-white font-medium">Élégance</span> guide l'instinct, pour une <span className="text-white font-medium">Simplicité</span> si pure qu'elle en devient enivrante.
          </motion.p>

          {/* Slider de Technologies Minimaliste */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="mb-3 text-[10px] uppercase tracking-widest text-gray-600 font-mono">Stack Principale</div>
            <HeroTechSlider />
          </motion.div>
        </div>

        {/* --- COLONNE DROITE : L'ARTEFACT (Masqué sur mobile) --- */}
        <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Plaque principale en verre - TOTALEMENT TRANSPARENTE */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col p-10 justify-between overflow-hidden group">
              
              {/* Reflets de lumière sur le verre */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-30" />
              <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45 transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-10" />

              {/* Contenu Abstrait */}
              <div className="relative z-10 space-y-8">
                <div className="flex gap-2 opacity-50">
                   <div className="w-12 h-[2px] bg-white rounded-full" />
                   <div className="w-2 h-[2px] bg-white/30 rounded-full" />
                </div>

                {/* Cercle central éthéré */}
                <div className="py-12 flex justify-center">
                  <div className="relative w-40 h-40 rounded-full border border-white/5 flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-dashed border-white/10 rounded-full" 
                    />
                    <div className="w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full backdrop-blur-xl border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                  <div className="flex justify-between text-[9px] uppercase tracking-[0.3em] text-white/40 font-mono">
                    <span>Structural Elegance</span>
                    <span>Aesthetic.01</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bijou flottant plus subtil */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -bottom-4 w-20 h-20 border border-white/20 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl z-20"
            >
               <span className="text-white/40 text-xl font-light">✦</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR (STYLE PROJECT HERO) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}