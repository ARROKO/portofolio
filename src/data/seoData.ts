export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  type?: 'website' | 'article' | 'profile';
}

export const seoData: Record<string, SEOData> = {
  home: {
    title: 'Joseph Kemgang - Développeur Full Stack',
    description: 'Portfolio de Joseph Kemgang, développeur full stack spécialisé en React, Flutter et technologies modernes. Découvrez mes projets innovants et mes compétences techniques.',
    keywords: ['développeur full stack', 'React', 'Flutter', 'JavaScript', 'TypeScript', 'portfolio', 'développeur web', 'développeur mobile'],
    type: 'profile'
  },
  about: {
    title: 'À Propos - Joseph Kemgang',
    description: 'Découvrez mon parcours de développeur full stack, mes expériences professionnelles et ma passion pour les technologies modernes. De TW Micronics à Bridge Company.',
    keywords: ['parcours développeur', 'expérience professionnelle', 'TW Micronics', 'Bridge Company', 'compétences techniques'],
    type: 'profile'
  },
  skills: {
    title: 'Compétences - Joseph Kemgang',
    description: 'Mes compétences techniques en développement : React, Flutter, TypeScript, Node.js, bases de données et bien plus. Expertise frontend et backend.',
    keywords: ['compétences développeur', 'React', 'Flutter', 'TypeScript', 'Node.js', 'frontend', 'backend', 'bases de données'],
    type: 'website'
  },
  projects: {
    title: 'Projets - Joseph Kemgang',
    description: 'Découvrez mes projets de développement : applications web React, applications mobiles Flutter, et solutions innovantes. Projets personnels et professionnels.',
    keywords: ['projets développement', 'applications web', 'applications mobiles', 'React projects', 'Flutter apps', 'portfolio projets'],
    type: 'website'
  },
  contact: {
    title: 'Contact - Joseph Kemgang',
    description: 'Contactez-moi pour vos projets de développement web et mobile. Disponible pour missions freelance et collaborations techniques.',
    keywords: ['contact développeur', 'freelance', 'développement web', 'développement mobile', 'collaboration', 'mission'],
    type: 'website'
  }
};

export const getProjectSEO = (projectTitle: string, projectDescription: string): SEOData => ({
  title: `${projectTitle} - Projet de Joseph Kemgang`,
  description: `${projectDescription} Découvrez ce projet développé par Joseph Kemgang avec les technologies modernes.`,
  keywords: ['projet développement', projectTitle.toLowerCase(), 'React', 'Flutter', 'application', 'développeur'],
  type: 'article'
});
