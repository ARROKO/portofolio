import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { IoSendOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import PageTransition from "../components/PageTransition";
import { SocialLinks } from "../components/Contact/SocialLinks";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

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
      emailjs
        .sendForm("service_fibrtm5", "template_u3an3lp", form.current, {
          publicKey: "PlVtJOE2khHHWVeig",
        })
        .then(
          () => {
            toast.success("Email envoyé avec succés.");
          },
          (error) => {
            //   console.log('FAILED...', error.text);
            toast.error("Erreur", error.text);
          }
        );
    }
  };
  return (
    <PageTransition>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Restons en Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contactez-moi
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 text-gray-300 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-6 h-6" />
                  <span>kemgang605@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 text-gray-300 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl"
                  whileHover={{ x: 10 }}
                >
                  <Phone className="w-6 h-6" />
                  <span>+237 6 91 11 39 96</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 text-gray-300 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl"
                  whileHover={{ x: 10 }}
                >
                  <MapPin className="w-6 h-6" />
                  <span>Yaoundé, Cameroun</span>
                </motion.div>
              </div>
            </div>

            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Envoyez-moi un message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Nom*</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email*</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message*</label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                <IoSendOutline size={19} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
