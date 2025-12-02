import { motion } from 'framer-motion';

const technologies = [
    "React", "TypeScript", "Next.js", "TailwindCSS", "Node.js", "Framer Motion", "Three.js", "Git", "Figma"
];

const TechMarquee = () => {
    return (
        <div className="relative flex overflow-hidden py-8 bg-black/20 backdrop-blur-sm border-y border-white/5">
            <div className="flex whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex gap-16 px-8"
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 uppercase tracking-wider opacity-50 hover:opacity-100 transition-opacity cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Gradient masks for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#1a1a2e] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#1a1a2e] to-transparent z-10" />
        </div>
    );
};

export default TechMarquee;
