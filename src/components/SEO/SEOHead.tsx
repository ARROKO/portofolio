'use client';

import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  keywords?: string[];
  author?: string;
}

/**
 * En Next.js, le SEO est géré via l'objet metadata dans layout.tsx ou page.tsx.
 * Ce composant est conservé pour la compatibilité avec le code existant mais
 * ne fait rien car le SEO est maintenant géré au niveau des pages.
 */
const SEOHead: React.FC<SEOHeadProps> = () => {
  return null;
};

export default SEOHead;