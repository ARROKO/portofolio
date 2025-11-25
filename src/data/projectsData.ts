import weatherAppCadrage from '../assets/images/projects-images/weather-app/cadrage-weather.png';
import weatherAppScreen1 from '../assets/images/projects-images/weather-app/Capture-ecran-1.png';
import weatherAppScreen2 from '../assets/images/projects-images/weather-app/Capture-ecran-2.png';
import weatherAppScreen3 from '../assets/images/projects-images/weather-app/Capture-ecran-3.png';
import marvelQuizCadrage from '../assets/images/projects-images/marvel-quiz/cadrage_marvel.png';
import marvelQuizPage1 from '../assets/images/projects-images/marvel-quiz/page1.png';
import marvelQuizInscription from '../assets/images/projects-images/marvel-quiz/inscription.png';
import marvelQuizConnexion from '../assets/images/projects-images/marvel-quiz/connexion.png';
import marvelQuizGame2 from '../assets/images/projects-images/marvel-quiz/game2.png';
import marvelQuizGame3 from '../assets/images/projects-images/marvel-quiz/game3.png';
import marvelQuizGame4 from '../assets/images/projects-images/marvel-quiz/game4.png';
import marvelQuizGame5 from '../assets/images/projects-images/marvel-quiz/game5.png';
import countryFlagsCadrage from '../assets/images/projects-images/country-flags/cadrage-country.png';
import countryFlagsScreen1 from '../assets/images/projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_55_00.png';
import countryFlagsScreen2 from '../assets/images/projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_55_23.png';
import countryFlagsScreen3 from '../assets/images/projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_56_57.png';
import projectJpg from '../assets/images/project.jpg';
import modernSchoolScreen1 from '../assets/images/projects-images/modern-school/Screenshot_20231009-171300.png';
import modernSchoolScreen2 from '../assets/images/projects-images/modern-school/Screenshot_20231009-171313.png';
import modernSchoolScreen3 from '../assets/images/projects-images/modern-school/Screenshot_20231009-171323.png';
import modernSchoolScreen4 from '../assets/images/projects-images/modern-school/Screenshot_20231009-171421.png';
import saloonprivedScreen1 from '../assets/images/projects-images/saloonprived/Capture1.png';
import saloonprivedScreen2 from '../assets/images/projects-images/saloonprived/Capture2.png';
import saloonprivedScreen3 from '../assets/images/projects-images/saloonprived/Capture3.png';
import saloonprivedScreen4 from '../assets/images/projects-images/saloonprived/Capture4.png';
import saloonprivedScreen5 from '../assets/images/projects-images/saloonprived/Capture5.png';

export type ProjectType = 'web' | 'mobile' | 'desktop';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  application?: ProjectType;
  type: 'personal' | 'professional';
  image: string;
  image2?: string;
  screenshots: string[];
  technologies: string[];
  features?: string[];
  platforms?: string[];
  github?: string;
  live?: string;
  storeLinks?: {
    playStore?: string;
    appStore?: string;
    microsoftStore?: string;
  };
  objectif: string;
  public: string;
  architecture: string;
}

export const projects: Project[] = [
  {
    title: 'Weather app',
    description: "Fournit des prévisions météo locales et globales en temps réel avec une interface simple et intuitive.",
    image: weatherAppCadrage,
    image2: weatherAppScreen1,
    application: 'web',
    screenshots: [
      weatherAppScreen1,
      weatherAppScreen2,
      weatherAppScreen3
    ],
    technologies: ['React', 'Weather API'],
    github: 'https://github.com',
    live: 'https://weather-app-7c0aa.web.app/',
    type: 'personal',
    features: [
      'Prise de notes vocales',
      'Notifications de rappel',
      'Thèmes personnalisables',
      'Recherche avancée',
      'Partage de notes'
    ],
    objectif: "Offrir aux utilisateurs une expérience fluide et intuitive pour consulter les prévisions météorologiques locales et mondiales. L'application vise à aider les utilisateurs à planifier leurs journées, prendre des décisions adaptées à la météo (vêtements, activités extérieures)",
    public: "Weather App s’adresse à tous ceux qui veulent une alternative rapide et épurée aux applications classiques : ✅ Voyageurs souhaitant planifier leurs déplacements en fonction de la météo. ✅ Professionnels en extérieur (agriculture, bâtiment, événementiel).✅ Toute personne recherchant une solution simple et performante pour consulter la météo.",
    architecture: "Weathher App repose sur une architecture modulaire et connectée, utilisant une API externe pour récupérer des données météorologiques en temps réel. Elle est construite avec un frontend en React, un backend léger en Node.js, et l'API OpenWeatherMap pour fournir des prévisions précises.",
  },
  {
    title: 'Marvel quiz',
    description: 'Testez vos connaissance sur tous les hero et vilains de l\'univers Marvel',
    image: marvelQuizCadrage,
    image2: marvelQuizPage1,
    application: 'desktop',
    screenshots: [
        marvelQuizInscription,
        marvelQuizConnexion,
        marvelQuizGame2,
        marvelQuizGame3,
        marvelQuizGame4,
        marvelQuizGame5,
      ]
    ,
    technologies: ['React', 'Marvel API', 'Axios', 'Firebase'],
    github: 'https://github.com',
    live: 'https://marvelquiz-8186f.web.app/',
    type: 'personal',
    features: [
      'Prise de notes vocales',
      'Notifications de rappel',
      'Thèmes personnalisables',
      'Recherche avancée',
      'Partage de notes'
    ],
    objectif: "L’objectif de Marvel Quiz est de proposer une expérience ludique et immersive aux fans de l’univers Marvel. Les utilisateurs peuvent tester leurs connaissances sur les héros, les films, les comics et les événements majeurs de l’univers Marvel à travers une série de questions évolutives.",
    public: "Marvel Quiz s’adresse principalement à : \n ✅ Les fans de Marvel, curieux de tester leurs connaissances et découvrir de nouvelles anecdotes.\n✅ Les amateurs de quiz, cherchant une application divertissante autour d’une thématique populaire. \n✅ Les joueurs occasionnels, qui aiment les jeux de culture générale et les défis en ligne.",
    architecture: "Marvel Quiz repose sur une architecture modulaire et connectée, utilisant une API externe pour récupérer des données sur l'univers Marvel. Elle est construite avec un frontend en React, un backend léger en Node.js, et l'API Marvel pour fournir des questions précises.",
  },
  {
    title: 'Country flags',
    description: " Une application éducative dédiée à la présentation des drapeaux du monde entier. Elle permet aux utilisateurs de découvrir et d'explorer les différents drapeaux, en apprenant davantage sur chaque pays à travers des descriptions et des informations intéressantes ",
    image: countryFlagsCadrage,
    image2: countryFlagsScreen2,
    application: 'desktop',
    screenshots: [
        countryFlagsScreen1,
        countryFlagsScreen2,
        countryFlagsScreen3,
      ]
    ,
    technologies: ['React', 'Rest Countries', 'Axios'],
    github: 'https://github.com',
    type: 'personal',
    features: [
      'Prise de notes vocales',
      'Notifications de rappel',
      'Thèmes personnalisables',
      'Recherche avancée',
      'Partage de notes'
    ],
    objectif: "L’application vise à offrir une expérience éducative et intuitive permettant aux utilisateurs de découvrir et d’explorer les pays du monde facilement. Que ce soit pour des raisons académiques, culturelles ou par simple curiosité, Country Flags met à disposition des informations claires et accessibles sur chaque pays, avec une interface moderne et responsive.",
    public: "Country Flags est destiné à :✅ Les passionnés de géographie, curieux d’en apprendre plus sur les pays.✅ Les étudiants, qui recherchent un outil interactif pour enrichir leurs connaissances.✅ Les voyageurs, souhaitant obtenir des informations rapides avant un départ à l’étranger.✅ Tout utilisateur recherchant une application simple et esthétique pour explorer les drapeaux du monde.",
    architecture: "Country Flags repose sur une architecture orientée données, utilisant React.js pour l’interface utilisateur et une API publique comme REST Countries pour récupérer les informations des pays (drapeaux, capitales, populations, langues, devises, etc.). Les données sont affichées de manière dynamique et peuvent être filtrées ou recherchées grâce à un système de requêtes interactif."

  },
  {
    title: 'Modern school',
    description: 'Solution complète de gestion d\'établissement scolaire avec gestion des notes génération des rapports',
    image: projectJpg,
    technologies: ['Flutter', 'Dart', 'Objectbox'],
    type: 'professional',
    screenshots:  [
      modernSchoolScreen1,
      modernSchoolScreen1,
      modernSchoolScreen2,
      modernSchoolScreen3,
      modernSchoolScreen4
    ],
    
    objectif: "",
    architecture: "",
    public: ""
  },
  {
    title: 'Saloonprived',
    description: 'Développeur frond-end sur le projet saloonprived',
    image: projectJpg,
    technologies: ['Flutter'],
    type: 'professional',
    screenshots:  [
      saloonprivedScreen1,
      saloonprivedScreen2,
      saloonprivedScreen3,
      saloonprivedScreen4,
      saloonprivedScreen5
    ],
    objectif: "",
    architecture: "",
    public: ""
  },
];