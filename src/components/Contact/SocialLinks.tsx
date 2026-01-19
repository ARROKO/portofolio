"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/ARROKO",
    color: "#333",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/joseph-kemgang-7b1580267",
    color: "#0077B5",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/237691113996",
    color: "#25D366",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    url: "https://t.me/ARROKO",
    color: "#0088cc",
  },
];

export const SocialLinks = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8 text-center md:text-left">
        Réseaux Sociaux
      </h3>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/80 transition-all text-sm md:text-base"
          >
            <social.icon
              size={20}
              className="md:w-6 md:h-6"
              style={{ color: social.color }}
            />
            <span className="text-gray-300">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
