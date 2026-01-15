"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HomeScene3D() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-10">
        {/* Bloc texte */}
        <div className="max-w-xl text-left z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 w-fit"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-200">
              Open to Work
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Designing the <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              Future Digital
            </span>
          </motion.h1>

          {/* Texte interstellaire */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed"
          >
            Naviguant entre constellations de code et nébuleuses d’idées, je suis Joseph — développeur Full Stack et architecte d’expériences numériques. Mon cockpit : React, Next.js, Tailwind. Ma mission : concevoir des interfaces galactiques, accessibles et ultra-performantes, où chaque pixel compte et chaque interaction rayonne.
          </motion.p>
        </div>

        {/* Animation Spline */}
        <div className="w-210 h-200 shrink-0 relative translate-x-32 lg:translate-x-48">
          <Spline
            scene="https://prod.spline.design/xz3RduXdQGG6xtbj/scene.splinecode"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}