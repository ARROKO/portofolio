'use client';

import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full">
      {/* Separation Line with Gradient */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Footer Content with Glassmorphism */}
      <div className="relative bg-black/20 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col items-center justify-center gap-6">
            
            {/* Copyright & Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-2"
            >
              <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">
                © {currentYear} <span className="text-white font-medium">Joseph Kemgang</span>. Tous droits réservés.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500"
              >
                <span>Fait avec</span>
                <span 
                  className="text-red-500 inline-block"
                  style={{
                    animation: 'heartbeat 1.5s ease-in-out infinite both',
                  }}
                >
                  <style jsx>{`
                    @keyframes heartbeat {
                      0% { transform: scale(1); }
                      15% { transform: scale(1.25); }
                      30% { transform: scale(1); }
                      45% { transform: scale(1.25); }
                      80% { transform: scale(1); }
                      100% { transform: scale(1); }
                    }
                  `}</style>
                  ❤️
                </span>
                <span>à Yaoundé, Cameroun</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </footer>
  );
};