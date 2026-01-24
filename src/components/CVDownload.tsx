'use client';

import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

export const CVDownload = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 md:p-8 text-center relative overflow-hidden group w-full md:w-96 lg:w-[28rem]"
    >
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10"
      >
        <FaFileDownload className="text-3xl md:text-5xl text-white mx-auto mb-3 md:mb-4" />
        <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
          Téléchargez mon CV
        </h3>
        <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6">
          Découvrez mon parcours professionnel et mes compétences en détail
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1WmdMS33EmyZs8AdByXJOF5kY3OoWCO9O/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
        
        <button className="cursor-pointer group/download relative flex gap-1 px-4 md:px-8 py-2 md:py-4 bg-white text-gray-900 rounded-3xl hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300 text-sm md:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="20px"
            width="20px"
            className="md:w-6 md:h-6"
          >
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Interface / Download">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#111827"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  id="Vector"
                ></path>
              </g>
            </g>
          </svg>
          Download
          <div className="absolute text-white text-xs uppercase scale-0 rounded-md py-2 px-2 bg-[#5c5fe9] left-2/4 mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#5c5fe9] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4">
            642 ko
          </div>
        </button>
        </motion.a>
      </motion.div>

      {/* Effet de brillance au survol */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        initial={false}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};
