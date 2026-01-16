"use client";

import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// --- Composant Scramble Text ---
const ScrambleText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  
  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(startScramble, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{display}</span>;
};

// --- Composant Principal ---
export default function HomeScene3D() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Container */}
      <div className="w-full container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        
        {/* TEXTE (GAUCHE) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 order-2 lg:order-1 flex flex-col justify-center">
          
          {/* Badge animé */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 w-fit hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default group">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium text-cyan-100/90 tracking-wide">
                Simplicité & Excellence
              </span>
            </div>
          </motion.div>

          {/* TITRE "EXTRAORDINAIRE" */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight relative">
            <div className="">
               <ScrambleText text="INNOVATION" delay={500} />
            </div>
            <div className="mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-gradient bg-300%">
                 <ScrambleText text="PERFORMANCE" delay={1200} />
              </span>
            </div>
          </h1>

          {/* Description avec Fade In */}
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-0 max-w-lg leading-relaxed font-light mx-auto lg:mx-0 border-l-2 border-cyan-500/30 pl-6"
          >
            L&apos;alliance de la créativité et de la technique pour des expériences web uniques.
          </motion.p>
        </div>

        {/* ROBOT 3D (DROITE) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-400 w-200 lg:h-[800px] shrink-0 relative order-1 lg:order-2"
        >
          <Spline
            scene="https://prod.spline.design/xz3RduXdQGG6xtbj/scene.splinecode"
            onLoad={() => setIsLoading(false)}
            className="drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}