import { motion, useTime, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HolographicOrb = () => {
    const time = useTime();
    const rotate1 = useTransform(time, [0, 20000], [0, 360], { clamp: false });
    const rotate2 = useTransform(time, [0, 15000], [0, -360], { clamp: false });
    const rotate3 = useTransform(time, [0, 10000], [0, 360], { clamp: false });

    // Mouse interaction for subtle tilt
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center perspective-1000"
            style={{ perspective: '1000px' }}
        >
            {/* Core Glow - Static for performance */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Main Rings Container - 3D Transform */}
            <div className="relative w-full h-full preserve-3d">
                {/* Outer Ring */}
                <motion.div
                    style={{ rotateZ: rotate1, rotateX: 45 }}
                    className="absolute inset-0 border-[1px] border-blue-400/30 rounded-full border-t-transparent border-l-transparent"
                />

                {/* Middle Ring */}
                <motion.div
                    style={{ rotateZ: rotate2, rotateY: 45 }}
                    className="absolute inset-12 border-[1px] border-purple-400/30 rounded-full border-b-transparent border-r-transparent"
                />

                {/* Inner Ring */}
                <motion.div
                    style={{ rotateZ: rotate3, rotateX: -45 }}
                    className="absolute inset-24 border-[1px] border-cyan-300/20 rounded-full border-dashed"
                />

                {/* Core Energy */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    >
                        <div className="absolute inset-2 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-md" />
                    </motion.div>
                </div>
            </div>

            {/* Optimized Particles - CSS Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            </div>
        </div>
    );
};

export default HolographicOrb;
