'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollManagerProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export let lenisInstance: Lenis | null = null;

const ScrollManager: React.FC<ScrollManagerProps> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialisation du moteur Lenis
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisInstance = null;
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // 2. Gestion intelligente de la navigation par Hash
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hash = window.location.hash;

    if (!hash || !lenisRef.current) {
        if (pathname === '/' && !hash) {
             lenisRef.current?.scrollTo(0, { immediate: true });
        }
        return;
    }

    const targetId = hash.replace('#', '');

    // Fonction de scroll atomique
    const scrollToTarget = (element: HTMLElement) => {
      lenisRef.current?.scrollTo(element, {
        offset: -80,
        immediate: false, // Animation fluide
        duration: 1.5,
        force: true
      });
    };

    const element = document.getElementById(targetId);

    if (element) {
      // Cas 1 : L'élément est déjà là (navigation interne rapide)
      scrollToTarget(element);
    } else {
      // Cas 2 : L'élément n'est pas encore là (chargement de page / lazy loading)
      // On met en place un "Espion" (MutationObserver) qui guette l'apparition de l'élément
      const observer = new MutationObserver((mutations, obs) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // L'élément vient d'apparaître !
          scrollToTarget(targetElement);
          obs.disconnect(); // On arrête d'espionner
        }
      });

      // On commence à espionner tout le document
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Sécurité : on arrête d'espionner après 3 secondes si rien ne se passe
      return () => observer.disconnect();
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
};

export default ScrollManager;
