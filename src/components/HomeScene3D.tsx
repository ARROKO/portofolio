"use client";

import { motion } from "framer-motion";

export default function HomeScene3D() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      
      {/* --- FOND AMBIANT --- */}
      {/* Grille ultra-subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      
      {/* Lueurs d'ambiance plus diffuses */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] opacity-20" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full py-20">
        
        {/* --- COLONNE GAUCHE : IDENTITÉ --- */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-cyan-500/30" />
            <span className="text-cyan-400/80 font-mono text-sm tracking-widest uppercase">Creative Developer</span>
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
            Je conçois des expériences numériques où la <span className="text-white font-medium">Beauté</span> rencontre la fonctionnalité, 
            avec une <span className="text-white font-medium">Élégance</span> structurelle et une <span className="text-white font-medium">Simplicité</span> absolue.
          </motion.p>

          {/* Les 3 Principes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {['Beauté', 'Élégance', 'Simplicité'].map((item) => (
              <div key={item} className="px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-sm text-gray-300 font-light tracking-wide hover:border-cyan-500/30 transition-colors duration-500">
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- COLONNE DROITE : L'ARTEFACT --- */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]">
          
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
    </div>
  );
}
