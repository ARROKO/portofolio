// Fonction simplifiée pour dossier public
const getImageUrl = (path: string) => {
  return `/images/${path}`;
};


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
  // Projets Personnels
  // {
  //   title: 'Note App - Application de Notes Avancée',
  //   description: 'Application de prise de notes multiplateforme avec support vocal.',
  //   longDescription: 'Une application de prise de notes moderne et puissante construite avec Flutter et Firebase. Elle offre une expérience utilisateur fluide avec des animations soignées et une interface intuitive.',
  //   image: '/src/images/project.jpg',
  //   application: 'mobile',
  //   screenshots: {
  //     mobile: [
  //       'https://private-user-images.githubusercontent.com/84386958/380646167-84d5d01e-f0f9-437a-bc78-36207a5b680a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzUyMDM4NDksIm5iZiI6MTczNTIwMzU0OSwicGF0aCI6Ii84NDM4Njk1OC8zODA2NDYxNjctODRkNWQwMWUtZjBmOS00MzdhLWJjNzgtMzYyMDdhNWI2ODBhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjI2VDA4NTkwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEwNDZjNWQ3MzcyYjk4YzhkOGQxNTE4MjRjNGRiZGQ2ZWIxYTY0NDgzMDI5ZDA5OTE2YTQwMDBiODVjNmJjNzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.XJiGxavthzQRW18Q-AwSFW65diRjv1_oI3rpnNqucsk',
  //       'https://private-user-images.githubusercontent.com/84386958/380646167-84d5d01e-f0f9-437a-bc78-36207a5b680a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzUyMDM4NDksIm5iZiI6MTczNTIwMzU0OSwicGF0aCI6Ii84NDM4Njk1OC8zODA2NDYxNjctODRkNWQwMWUtZjBmOS00MzdhLWJjNzgtMzYyMDdhNWI2ODBhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjI2VDA4NTkwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEwNDZjNWQ3MzcyYjk4YzhkOGQxNTE4MjRjNGRiZGQ2ZWIxYTY0NDgzMDI5ZDA5OTE2YTQwMDBiODVjNmJjNzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.XJiGxavthzQRW18Q-AwSFW65diRjv1_oI3rpnNqucsk',
  //       'https://cdn.dribbble.com/userupload/3991631/file/original-c4525bde314462e69016eff6bd25f81d.png?resize=1024x768&vertical=center',
  //       'https://cdn.dribbble.com/userupload/3991833/file/original-a4c5e52044d6d9b90e842093bac21e30.png?resize=752x&vertical=center'
  //     ]
  //   },
  //   features: [
  //     'Prise de notes vocales',
  //     'Notifications de rappel',
  //     'Thèmes personnalisables',
  //     'Recherche avancée',
  //     'Partage de notes'
  //   ],
  //   technologies: ['Flutter', 'Hive', 'Provider'],
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   type: "personal"
  // },
  {
    title: 'Weather app',
    description: "Fournit des prévisions météo locales et globales en temps réel avec une interface simple et intuitive.",
    image: getImageUrl('projects-images/weather-app/cadrage-weather.png'),
    image2: getImageUrl('projects-images/weather-app/Capture-ecran-1.png'),
    application: 'web',
    screenshots: [
      getImageUrl('projects-images/weather-app/Capture-ecran-1.png'),
      getImageUrl('projects-images/weather-app/Capture-ecran-2.png'),
      getImageUrl('projects-images/weather-app/Capture-ecran-3.png')
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
    image: getImageUrl('projects-images/marvel-quiz/cadrage_marvel.png'),
    image2: getImageUrl('projects-images/marvel-quiz/page1.png'),
    application: 'desktop',
    screenshots: [
        getImageUrl('projects-images/marvel-quiz/inscription.png'),
        getImageUrl('projects-images/marvel-quiz/connexion.png'),
        getImageUrl('projects-images/marvel-quiz/game2.png'),
        getImageUrl('projects-images/marvel-quiz/game3.png'),
        getImageUrl('projects-images/marvel-quiz/game4.png'),
        getImageUrl('projects-images/marvel-quiz/game5.png'),
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
    image: getImageUrl('projects-images/country-flags/cadrage-country.png'),
    image2: getImageUrl('projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_55_23.png'),
    application: 'desktop',
    screenshots: [
        getImageUrl('projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_55_00.png'),
        getImageUrl('projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_55_23.png'),
        getImageUrl('projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_56_57.png'),
      ]
    ,
    technologies: ['React', 'Rest Countries', 'Axios'],
    github: 'https://github.com',
    // live: 'https://marvelquiz-8186f.web.app/',
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
  // {
  //   title: 'Edusity',
  //   description: "Edusity est une application web en React JS conçue pour servir de vitrine numérique pour une université. Elle présente les informations clés de l'université, les programmes académiques, les événements et les actualités, avec une interface utilisateur moderne et intuitive.",
  //   image: '/src/images/projects-images/edusity/home.png',
  //   longDescription: "Edusity est une application web en React JS offrant une vitrine numérique complète pour une université. Elle met en avant les programmes académiques, les départements, et les événements importants. L'interface utilisateur fluide et moderne garantit une navigation aisée. L'application est entièrement responsive, assurant une expérience utilisateur optimale sur tous les appareils, des ordinateurs de bureau aux smartphones. Grâce à des composants réutilisables et une gestion efficace de l'état, Edusity assure une performance optimisée et une maintenance simplifiée.",
  //   application: 'desktop',
  //   screenshots:  [
  //       'https://cdn.dribbble.com/userupload/5774261/file/original-bec5908d93d9c047ef55205b501879bf.png?resize=1024x768&vertical=center',
  //       'https://cdn.dribbble.com/userupload/3991631/file/original-c4525bde314462e69016eff6bd25f81d.png?resize=1024x768&vertical=center',
  //       'https://cdn.dribbble.com/userupload/3991833/file/original-a4c5e52044d6d9b90e842093bac21e30.png?resize=752x&vertical=center'
  //     ],
  //   technologies: ['React', 'Vite'],
  //   github: 'https://github.com',
  //   // live: 'https://example.com',
  //   type: 'personal',
  //   features: [
  //     'Prise de notes vocales',
  //     'Notifications de rappel',
  //     'Thèmes personnalisables',
  //     'Recherche avancée',
  //     'Partage de notes'
  //   ],
  // },
  
  // Projets Professionnels
  {
    title: 'Modern school',
    description: 'Solution complète de gestion d\'établissement scolaire avec gestion des notes génération des rapports',
    image: getImageUrl('project.jpg'),
    technologies: ['Flutter', 'Dart', 'Objectbox'],
    type: 'professional',
    screenshots:  [
      getImageUrl('projects-images/modern-school/Screenshot_20231009-171300.png'),
      getImageUrl('projects-images/modern-school/Screenshot_20231009-171300.png'),
      getImageUrl('projects-images/modern-school/Screenshot_20231009-171313.png'),
      getImageUrl('projects-images/modern-school/Screenshot_20231009-171323.png'),
      getImageUrl('projects-images/modern-school/Screenshot_20231009-171421.png')
    ],
    
    objectif: "",
    architecture: "",
    public: ""
  },
  {
    title: 'Saloonprived',
    description: 'Développeur frond-end sur le projet saloonprived',
    image: getImageUrl('project.jpg'),
    technologies: ['Flutter'],
    type: 'professional',
    screenshots:  [
      getImageUrl('projects-images/saloonprived/Capture1.png'),
      getImageUrl('projects-images/saloonprived/Capture2.png'),
      getImageUrl('projects-images/saloonprived/Capture3.png'),
      getImageUrl('projects-images/saloonprived/Capture4.png'),
      getImageUrl('projects-images/saloonprived/Capture5.png')
    ],
    objectif: "",
    architecture: "",
    public: ""
  },
  
  
];