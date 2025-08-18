import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { DeveloperTypeSlider } from "../components/DeveloperTypeSlider";

const Home = () => {
  const customStyle: React.CSSProperties = {
    fontFamily: '"Parisienne", serif',
    fontWeight: 400,
    fontStyle: 'normal'
  };
  
  return (
    <PageTransition>
      <div className="text-center px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 text-left"
        >
          <p className="text-blue-500 text-5xl">Bienvenue😁,</p> je suis 
          <span  style={customStyle}> Joseph</span>
        </motion.h1>
        
        <DeveloperTypeSlider />
      </div>
    </PageTransition>
  );
};

export default Home;
