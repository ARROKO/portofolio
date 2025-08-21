// Fonction simplifiée pour dossier public
const getImageUrl = (path: string) => {
  return `/images/${path}`;
};


export interface AboutContent {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const aboutContent: AboutContent[] = [
  {
    id: 1,
    title: "Développeur Junior Passionné",
    description: "Avec une solide formation en informatique et une passion pour le développement web, je me spécialise dans la création d'applications modernes et performantes. Mon parcours m'a permis d'acquérir une expertise technique solide tout en développant une approche créative pour résoudre les défis technologiques.",
    image: getImageUrl("about-content.jpeg")
  },
  {
    id: 2,
    title: "Innovation & Créativité",
    description: "Je crois fermement que l'innovation naît de la combinaison entre créativité et rigueur technique. Chaque projet est une opportunité d'explorer de nouvelles solutions, d'optimiser les performances et de créer des expériences utilisateur exceptionnelles qui marquent la différence.",
    image: getImageUrl("about-content2.jpeg")
  },
  {
    id: 3,
    title: "Vision & Ambition",
    description: "Mon objectif est de contribuer activement à l'évolution du web en développant des solutions qui ont un impact réel. Je m'efforce constamment d'apprendre, de me perfectionner et de rester à la pointe des technologies pour offrir des produits de qualité supérieure.",
    image: getImageUrl("about-content3.jpeg")
  }
];