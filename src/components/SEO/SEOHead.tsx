import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  keywords?: string[];
  author?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Joseph Kemgang - Développeur Full Stack',
  description = 'Portfolio de Joseph Kemgang, développeur full stack spécialisé en React, Flutter et technologies modernes. Découvrez mes projets et compétences.',
  image = '/images/og-image.jpg',
  url = 'https://joseph-kemgang.dev',
  type = 'website',
  keywords = ['développeur', 'full stack', 'React', 'Flutter', 'JavaScript', 'TypeScript', 'portfolio'],
  author = 'Joseph Kemgang'
}) => {
  const fullTitle = title.includes('Joseph Kemgang') ? title : `${title} | Joseph Kemgang`;
  const fullUrl = url.startsWith('http') ? url : `https://joseph-kemgang.dev${url}`;
  const fullImage = image.startsWith('http') ? image : `https://joseph-kemgang.dev${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Joseph Kemgang Portfolio" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@joseph_kemgang" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Joseph Kemgang",
          "jobTitle": "Développeur Full Stack",
          "description": description,
          "url": fullUrl,
          "image": fullImage,
          "sameAs": [
            "https://github.com/joseph-kemgang",
            "https://linkedin.com/in/joseph-kemgang"
          ],
          "knowsAbout": [
            "JavaScript",
            "TypeScript",
            "React",
            "Flutter",
            "Node.js",
            "Développement Web",
            "Développement Mobile"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Formation Développement"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
