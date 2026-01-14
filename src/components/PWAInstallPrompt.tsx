import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Monitor } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

const PWAInstallPrompt = () => {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the prompt
    const dismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (dismissed) {
      setHasBeenDismissed(true);
    }

    // Show prompt after 10 seconds if installable and not dismissed
    const timer = setTimeout(() => {
      if (isInstallable && !isInstalled && !hasBeenDismissed) {
        setShowPrompt(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isInstallable, isInstalled, hasBeenDismissed]);

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setHasBeenDismissed(true);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (!showPrompt || isInstalled) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-50"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 shadow-2xl border border-white/20 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Download size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Installer l'App
                </h3>
                <p className="text-blue-100 text-sm">
                  Accès rapide au portfolio
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Fermer la notification d'installation"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-4">
            <p className="text-blue-100 text-sm mb-3">
              Installez l'application pour une expérience optimale :
            </p>
            <div className="flex items-center gap-4 text-blue-100 text-xs">
              <div className="flex items-center gap-1">
                <Smartphone size={14} />
                <span>Accès hors ligne</span>
              </div>
              <div className="flex items-center gap-1">
                <Monitor size={14} />
                <span>Notifications</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleInstall}
              className="flex-1 bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Installer
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-lg"
            >
              Plus tard
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
