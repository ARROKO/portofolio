import { motion } from 'framer-motion';

const SoftLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[200px] gap-8">
            <div className="relative flex items-center justify-center">
                {/* Lueur diffuse d'arrière-plan */}
                <motion.div
                    className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Anneau orbital rotatif */}
                <motion.div
                    className="absolute w-16 h-16 border border-blue-400/30 rounded-full"
                    style={{ borderTopColor: 'rgba(96, 165, 250, 0.8)' }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Second anneau (plus petit, sens inverse) */}
                <motion.div
                    className="absolute w-10 h-10 border border-purple-400/20 rounded-full"
                    style={{ borderBottomColor: 'rgba(192, 132, 252, 0.8)' }}
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Point central pulsant */}
                <motion.div
                    className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Texte indicatif */}
            <motion.p
                className="text-sm font-light tracking-[0.2em] text-blue-200/70 uppercase"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                Initialisation
            </motion.p>
        </div>
    );
};

export default SoftLoader;
