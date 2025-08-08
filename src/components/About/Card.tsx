import "./styleCard.css";
// import 'React' from 'react';
import { motion } from "framer-motion";

export const Card: React.FC<{title: string, content: string}> = ({ title, content }) => {
  const customStyle: React.CSSProperties = {
    fontFamily: '"Parisienne", serif',
    fontWeight: 700,
    fontStyle: "normal",
  };
  return (
    /* From Uiverse.io by gharsh11032000 */
    // <div className="card">
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
    >
      <p className="heading" style={customStyle}>
        {title}
      </p>
      <p>{content}</p>
    </motion.div>
    // </div>
  );
};
