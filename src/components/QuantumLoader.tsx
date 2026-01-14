'use client';

import { motion } from 'framer-motion';

const QuantumLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[200px] gap-8">
            <div className="relative flex items-center justify-center w-24 h-24">
                {/* Noyau central */}
                <motion.div
                    className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Orbite 1 */}
                <motion.div
                    className="absolute w-full h-full border-2 border-transparent border-t-blue-400/80 border-b-blue-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Orbite 2 (inclinée) */}
                <motion.div
                    className="absolute w-full h-full border-2 border-transparent border-r-purple-500/80 border-l-purple-500/30 rounded-full"
                    style={{ rotate: 60 }}
                    animate={{ rotate: [60, 420] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Orbite 3 (inclinée inverse) */}
                <motion.div
                    className="absolute w-full h-full border-2 border-transparent border-t-pink-500/80 border-b-pink-500/30 rounded-full"
                    style={{ rotate: -60 }}
                    animate={{ rotate: [-60, 300] }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Lueur globale */}
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
            </div>

            <motion.p
                className="text-sm font-light tracking-[0.3em] text-blue-200/80 uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                Chargement
            </motion.p>
        </div>
    );
};

export default QuantumLoader;
