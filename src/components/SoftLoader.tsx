import { motion } from 'framer-motion';

const SoftLoader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-[200px]">
            <div className="relative flex items-center justify-center">
                {/* Lueur diffuse */}
                <motion.div
                    className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
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

                {/* Point central */}
                <motion.div
                    className="w-1 h-1 bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    );
};

export default SoftLoader;
