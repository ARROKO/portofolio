'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { IoSendOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import PageTransition from "../components/PageTransition";
import { SocialLinks } from "../components/Contact/SocialLinks";
import { CVDownload } from "../components/CVDownload";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      const name = form.current.elements.namedItem(
        "user_name"
      ) as HTMLInputElement;
      const email = form.current.elements.namedItem(
        "user_email"
      ) as HTMLInputElement;
      const message = form.current.elements.namedItem(
        "message"
      ) as HTMLTextAreaElement;
      
      if (!name.value || !email.value || !message.value) {
        toast.error("Veuillez remplir tous les champs requis.");
        return;
      }

      setIsSubmitting(true);

      emailjs
        .sendForm("service_fibrtm5", "template_u3an3lp", form.current, {
          publicKey: "PlVtJOE2khHHWVeig",
        })
        .then(
          () => {
            toast.success("Email envoyé avec succès !");
            form.current?.reset();
          },
          (error) => {
            toast.error("Erreur lors de l'envoi : " + error.text);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };
  return (
    <PageTransition>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 md:py-8 space-y-8 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contactez-moi
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Discutons de vos projets et de la façon dont je peux vous aider à les concrétiser
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-12 order-2 lg:order-1"
          >
            <div className="space-y-4 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Mes coordonnées
              </h3>
              <div className="space-y-3 md:space-y-6">
                <motion.div
                  className="flex items-center space-x-3 md:space-x-4 text-gray-300 bg-gray-800/50 backdrop-blur-sm p-3 md:p-4 rounded-xl text-sm md:text-base"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="break-all">kemgang605@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 md:space-x-4 text-gray-300 bg-gray-800/50 backdrop-blur-sm p-3 md:p-4 rounded-xl text-sm md:text-base"
                  whileHover={{ x: 10 }}
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span>+237 6 91 11 39 96</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 md:space-x-4 text-gray-300 bg-gray-800/50 backdrop-blur-sm p-3 md:p-4 rounded-xl text-sm md:text-base"
                  whileHover={{ x: 10 }}
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span>Yaoundé, Cameroun</span>
                </motion.div>
              </div>
            </div>

            <div className="lg:hidden">
              <SocialLinks />
            </div>
            
            {/* CV Download - Mobile */}
            <div className="lg:hidden">
              <CVDownload />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-sm p-4 md:p-8 rounded-2xl order-1 lg:order-2"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Envoyez-moi un message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Nom*</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white text-sm md:text-base"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Email*</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white text-sm md:text-base"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Message*</label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white text-sm md:text-base resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-xl transition-colors text-sm md:text-base ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin md:w-5 md:h-5" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <IoSendOutline size={16} className="md:w-5 md:h-5" />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Social Links & CV Download - Desktop only */}
        <div className="hidden lg:block space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <SocialLinks />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-md mx-auto"
          >
            <CVDownload />
          </motion.div>
        </div>
        
      </div>
    </PageTransition>
  );
};

export default Contact;
