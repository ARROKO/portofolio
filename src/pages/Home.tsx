import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { DeveloperTypeSlider } from "../components/DeveloperTypeSlider";
import { useRef } from "react";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  const customStyle: React.CSSProperties = {
    fontFamily: '"Parisienne", serif',
    fontWeight: 400,
    fontStyle: 'normal'
  };
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <PageTransition>
      <div ref={ref} className="relative min-h-screen flex flex-col justify-center">
        {/* Particules d'arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="text-center px-4 py-12 relative z-10">
          {/* Titre principal avec effet parallax */}
          <motion.div
            style={{ y, opacity }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6 text-left relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="inline-flex items-center gap-2"
              >
                <Sparkles className="text-yellow-400 w-8 h-8 md:w-12 md:h-12" />
                <p className="text-blue-500 text-5xl">Bienvenue😁,</p>
              </motion.div>
              <br />
              je suis <span style={customStyle}> Joseph</span>
              
              {/* Effet de glow subtil */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.h1>
          </motion.div>
          
          <DeveloperTypeSlider />
        </div>
        
        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm font-medium">Découvrez la suite</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer hover:text-white transition-colors"
            onClick={scrollToAbout}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
