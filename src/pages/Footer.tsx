import { motion } from "framer-motion";
import { FooterWave } from "../components/Footer/FooterWave";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      <FooterWave />
      
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-12">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-gray-400 pt-8 border-t border-gray-800"
            >
              <p>© {currentYear} Joseph. Tous droits réservés.</p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-2 text-sm"
              >
                Fait avec ❤️ à Yaoundé, Cameroun
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};