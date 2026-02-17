export type ProjectType = "web" | "mobile" | "desktop";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  application?: ProjectType;
  type: "personal" | "professional";
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
  public?: string[];
  architecture: string;
}

export const projects: Project[] = [
  // Projets Personnels
  {
    title: "AI Commit Gen",
    description:
      "Assistant de développement pour VS Code qui transforme les changements de code en messages de commit sémantiques et conventionnels, grâce à une analyse profonde des diffs par IA.",
    image: "/images/projects-images/aicommit/img.png",
    technologies: [
      "TypeScript",
      "VS Code Extension API",
      "Git Internal API",
      "Groq SDK (LLM)",
      "Serverless Architecture",
    ],
    type: "personal",
    screenshots: ["/images/projects-images/aicommit/img.png"],
    github: "https://github.com/ARROKO/AI-COMMIT-GEN",
    live: "https://marketplace.visualstudio.com/items?itemName=arroko.ai-commit-gen",
    features: [
      "Analyse Sémantique Profonde : Ne se contente pas de résumer, mais comprend la logique du code (fonctions ajoutées, refactoring, fix).",
      "Mode Caméléon : Analyse l'historique Git local pour imiter le style et les conventions de l'équipe existante.",
      "Guardian System : Détecte proactivement les oublis critiques avant le commit (secrets, console.log, TODOs).",
      "Smart Splitter : Suggère de découper intelligemment les gros diffs en plusieurs commits atomiques logiques.",
      "i18n Natif : S'adapte automatiquement à la langue de l'UI de l'utilisateur (FR/EN).",
    ],
    objectif:
      "Éliminer la friction cognitive de la rédaction de commits tout en augmentant drastiquement la qualité et la traçabilité de l\'historique Git des équipes.",
    public: [
      "Développeurs individuels soucieux de la propreté de leur historique Git.",
      "Tech Leads souhaitant standardiser les messages de commit de leur équipe.",
      "DevOps cherchant à automatiser la documentation des changements.",
    ],
    architecture:
      "Architecture hybride optimisée : Extension VS Code native pour l\'interaction système (Git/File System) couplée à un backend Serverless pour l\'inférence IA ultra-rapide (Groq), assurant performance et découplage.",
  },
  {
    title: "Weather app",
    description:
      "Fournit des prévisions météo locales et globales en temps réel avec une interface simple et intuitive.",
    image: "/images/projects-images/weather-app/cadrage-weather.png",
    image2: "/images/projects-images/weather-app/Capture-ecran-1.png",
    application: "web",
    screenshots: [
      "/images/projects-images/weather-app/Capture-ecran-1.png",
      "/images/projects-images/weather-app/Capture-ecran-2.png",
      "/images/projects-images/weather-app/Capture-ecran-3.png",
    ],
    technologies: ["React", "Weather API"],
    github: "https://github.com",
    live: "https://weather-app-7c0aa.web.app/",
    type: "personal",
    features: [
      "Recherche de météo par ville",
      "Affichage des données détaillées (température, humidité, vent, pression)",
      "Intégration d'API météo externe"
    ],
    objectif:
      "Offrir aux utilisateurs une expérience fluide et intuitive pour consulter les prévisions météorologiques locales et mondiales. L\'application vise à aider les utilisateurs à planifier leurs journées, prendre des décisions adaptées à la météo (vêtements, activités extérieures)",
    public: [
      "Voyageurs souhaitant planifier leurs déplacements en fonction de la météo.",
      "Professionnels en extérieur (agriculture, bâtiment, événementiel).",
      "Toute personne recherchant une solution simple et performante pour consulter la météo.",
    ],
    architecture:
      "Weathher App repose sur une architecture modulaire et connectée, utilisant une API externe pour récupérer des données météorologiques en temps réel. Elle est construite avec un frontend en React, un backend léger en Node.js, et l\'API OpenWeatherMap pour fournir des prévisions précises.",
  },
  {
    title: "Marvel quiz",
    description:
      "Testez vos connaissance sur tous les hero et vilains de l'univers Marvel",
    image: "/images/projects-images/marvel-quiz/cadrage_marvel.png",
    image2: "/images/projects-images/marvel-quiz/page1.png",
    application: "desktop",
    screenshots: [
      "/images/projects-images/marvel-quiz/inscription.png",
      "/images/projects-images/marvel-quiz/connexion.png",
      "/images/projects-images/marvel-quiz/game2.png",
      "/images/projects-images/marvel-quiz/game3.png",
      "/images/projects-images/marvel-quiz/game4.png",
      "/images/projects-images/marvel-quiz/game5.png",
    ],
    technologies: ["React", "Marvel API", "Axios", "Firebase"],
    github: "https://github.com",
    live: "https://marvelquiz-8186f.web.app/",
    type: "personal",
    features: [
      "Authentification utilisateur avec Firebase",
      "Intégration dynamique des données via Marvel API",
      "Gestion d'état avec React Hooks",
      "System de score avec calcul automatique",
      "Persistance des données (Firestore)",
      "Architecture modulaire des composants",
    ],
    objectif:
      "L’objectif de Marvel Quiz est de proposer une expérience ludique et immersive aux fans de l’univers Marvel. Les utilisateurs peuvent tester leurs connaissances sur les héros, les films, les comics et les événements majeurs de l’univers Marvel à travers une série de questions évolutives.",
    public: [
      "Les fans de Marvel, curieux de tester leurs connaissances et découvrir de nouvelles anecdotes.",
      "Les amateurs de quiz, cherchant une application divertissante autour d’une thématique populaire.",
      "Les joueurs occasionnels, qui aiment les jeux de culture générale et les défis en ligne.",
    ],
    architecture:
      "Marvel Quiz repose sur une architecture modulaire et connectée, utilisant une API externe pour récupérer des données sur l\'univers Marvel. Elle est construite avec un frontend en React, un backend léger en Node.js, et l\'API Marvel pour fournir des questions précises.",
  },
  {
    title: "Country flags",
    description:
      " Une application éducative dédiée à la présentation des drapeaux du monde entier. Elle permet aux utilisateurs de découvrir et d'explorer les différents drapeaux, en apprenant davantage sur chaque pays à travers des descriptions et des informations intéressantes ",
    image: "/images/projects-images/country-flags/cadrage-country.png",
    image2:
      "/images/projects-images/country-flags/screencapture-localhost-5174-2024-12-31-11_55_23.png",
    live: "https://country-flags-f80f7.web.app/",
    application: "web",
    screenshots: [
      "/images/projects-images/country-flags/image.png",
      "/images/projects-images/country-flags/image2.png",
      "/images/projects-images/country-flags/image3.png",
      "/images/projects-images/country-flags/image4.png",
    ],
    technologies: [
      "React",
      "Rest Countries",
      "Tailwind CSS",
      "Lucide React",
      "Firebase",
    ],
    github: "https://github.com",
    type: "personal",
    features: [
      "Liste complète des pays avec recherche et filtre par continent",
      "Fiches complètes (capitale, monnaie, population, etc.) dans une modale",
      "Thèmes personnalisables",
      "Jeu de reconnaissance de drapeaux (10 questions) avec score final",
    ],
    objectif:
      "L’application vise à offrir une expérience éducative et intuitive permettant aux utilisateurs de découvrir et d’explorer les pays du monde facilement. Que ce soit pour des raisons académiques, culturelles ou par simple curiosité, Country Flags met à disposition des informations claires et accessibles sur chaque pays, avec une interface moderne et responsive.",
    public: [
      "Les passionnés de géographie, curieux d’en apprendre plus sur les pays.",
      "Les étudiants, qui recherchent un outil interactif pour enrichir leurs connaissances.",
      "Les voyageurs, souhaitant obtenir des informations rapides avant un départ à l’étranger.",
      "Tout utilisateur recherchant une application simple et esthétique pour explorer les drapeaux du monde.",
    ],
    architecture:
      "Country Flags repose sur une architecture orientée données, utilisant React.js pour l’interface utilisateur et une API publique comme REST Countries pour récupérer les informations des pays (drapeaux, capitales, populations, langues, devises, etc.). Les données sont affichées de manière dynamique et peuvent être filtrées ou recherchées grâce à un système de requêtes interactif.",
  },
  {
    title: "Edusity",
    description:
      "Edusity est une application web en React JS conçue pour servir de vitrine numérique pour une université. Elle présente les informations clés de l'université, les programmes académiques, les événements et les actualités, avec une interface utilisateur moderne et intuitive.",
    image: "/images/projects-images/edusity/home.png",
    longDescription:
      "Edusity est une application web en React JS offrant une vitrine numérique complète pour une université. Elle met en avant les programmes académiques, les départements, et les événements importants. L\'interface utilisateur fluide et moderne garantit une navigation aisée. L\'application est entièrement responsive, assurant une expérience utilisateur optimale sur tous les appareils, des ordinateurs de bureau aux smartphones. Grâce à des composants réutilisables et une gestion efficace de l\'état, Edusity assure une performance optimisée et une maintenance simplifiée.",
    application: "desktop",
    live: "https://edusity-ce73b.web.app/",
    screenshots: [
      "/images/projects-images/edusity/home.png",
      "/images/projects-images/edusity/program.png",
      "/images/projects-images/edusity/about.png",
      "/images/projects-images/edusity/gallery.png",
    ],
    technologies: ["React", "Vite"],
    github: "https://github.com",
    type: "personal",
    features: [],
    objectif: "",
    public: [],
    architecture: "",
  },

  // Projets Professionnels
  {
    title: "AccountState Pro",
    description:
      "Application web moderne et intuitive conçue pour simplifier la gestion financière des entreprises",
    image: "/images/projects-images/account-state/img4.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Material-UI",
    ],
    type: "professional",
    screenshots: [
      "/images/projects-images/account-state/img1.png",
      "/images/projects-images/account-state/img2.png",
      "/images/projects-images/account-state/img3.png",
      "/images/projects-images/account-state/img4.png",
    ],
    features: [
      "Création automatisée d'états de compte",
      "Calculs intelligents (excédents/manquants)",
      "Suivi en temps réel des soldes",
      "Historique complet des transactions",
      "Statuts dynamiques (Ouvert, Soldé, Excédent)",
      "Dashboard avec métriques en temps réel",
      "Export PDF automatique",
      "Enregistrement de paiements multiples",
      "Calcul automatique des soldes",
      "Gestion des excédents et remboursements",
      "Système d'authentification robuste",
      "Permissions granulaires par fonctionnalité",
      "Rôles utilisateurs (Admin, User, Viewer)",
      "Journaux d'audit complets",
      "Sessions sécurisées avec refresh tokens",
    ],
    objectif:
      "Elle permet de suivre efficacement les états de compte clients, gérer les paiements, et générer des rapports détaillés avec une interface utilisateur élégante et des fonctionnalités avancées.",
    public: [],
    architecture: "",
  },
  {
    title: "Modern school",
    description:
      "Solution complète de gestion d'établissement scolaire avec gestion des notes etgénération des rapports",
    image:
      "/images/projects-images/modern-school/photo_2025-12-02_11-26-47.jpg",
    technologies: ["Flutter", "Dart", "Objectbox"],
    type: "professional",
    screenshots: [
      "/images/projects-images/modern-school/SQActiver un compte.drawio.png",
      "/images/projects-images/modern-school/Screenshot_20231009-162951.png",
      "/images/projects-images/modern-school/Screenshot_20231009-163036.png",
      "/images/projects-images/modern-school/Screenshot_20231009-171059.png",
      "/images/projects-images/modern-school/Screenshot_20231009-171112.png",
      "/images/projects-images/modern-school/Screenshot_20231009-171300.png",
      "/images/projects-images/modern-school/Screenshot_20231009-171313.png",
      "/images/projects-images/modern-school/Screenshot_20231009-171323.png",
      "/images/projects-images/modern-school/photo_2023-08-10_16-22-19 (2).jpg",
      "/images/projects-images/modern-school/photo_2023-08-10_16-22-19.jpg",
      "/images/projects-images/modern-school/photo_2025-01-06_08-54-00.jpg",
      "/images/projects-images/modern-school/photo_2025-12-02_11-26-47.jpg",
    ],

    objectif: "",
    architecture: "",
    public: [],
  },
  {
    title: "Saloonprived",
    description: "Développeur frond-end sur le projet saloonprived",
    image: "/images/project.jpg",
    technologies: ["Flutter"],
    type: "professional",
    screenshots: [
      "/images/projects-images/saloonprived/Capture1.png",
      "/images/projects-images/saloonprived/Capture2.png",
      "/images/projects-images/saloonprived/Capture3.png",
      "/images/projects-images/saloonprived/Capture4.png",
      "/images/projects-images/saloonprived/Capture5.png",
    ],
    objectif: "",
    public: [],
    architecture: "",
  },
  {
    title: "Editions Clé",
    description:
      "Site institutionnel pour une maison d'édition professionnelle sous WordPress.",
    image: "/images/projects-images/editions-cle/acceuil.png",
    technologies: ["WordPress", "PHP", "CSS", "MySQL"],
    type: "professional",
    screenshots: [
      "/images/projects-images/editions-cle/acceuil.png",
      "/images/projects-images/editions-cle/actualite.png",
      "/images/projects-images/editions-cle/auteurs.png",
      "/images/projects-images/editions-cle/new-publications.png",
    ],
    live: "https://editions-cle.info",
    features: [
      "Gestion de catalogue de livres",
      "Interface d'administration intuitive",
      "Design responsive et professionnel",
      "Optimisation SEO",
      "Formulaire de contact sécurisé",
    ],
    objectif:
      "Présenter le catalogue et les activités de la maison d\'édition avec une image de marque forte et professionnelle.",
    public: ["Lecteurs", "Auteurs", "Partenaires de la maison d\'édition"],
    architecture:
      "Architecture CMS WordPress classique optimisée pour la performance.",
  },
  {
    title: "Doualair Catering",
    description:
      "Expérience digitale immersive pour le catering aérien de luxe, alliant storytelling visuel et performance technique de pointe.",
    image: "/images/projects-images/doualair/img1.png",
    technologies: [
      "Next.js 14 (App Router)",
      "Framer Motion (Advanced Orchestration)",
      "Tailwind CSS",
      "TypeScript",
      "Strapi Headless CMS",
      "Next-Intl",
    ],
    type: "professional",
    screenshots: [
      "/images/projects-images/doualair/img1.png",
      "/images/projects-images/doualair/img2.png",
      "/images/projects-images/doualair/img3.png",
      "/images/projects-images/doualair/img4.png",
      "/images/projects-images/doualair/img5.png",
    ],
    live: "https://doualair-frontend.vercel.app/fr",
    features: [
      'Cinematic Intro : Animation d\'introduction complexe avec effets de masque, "beam light" et typographie réactive (Framer Motion).',
      "Micro-Interactions : Effets de parallaxe à la souris (MouseParallax) et feedbacks visuels subtils pour une immersion totale.",
      "Smart Hydration : Gestion avancée du cycle de vie React et du SessionStorage pour ne pas lasser l'utilisateur régulier (Intro Skip).",
      "Internationalisation I18n : Architecture multilingue native avec Next-Intl.",
      "Adaptive Motion : Chorégraphies d'animation distinctes et optimisées pour Mobile (GPU friendly) et Desktop.",
    ],
    objectif:
      "Transposer l\'excellence et la précision du service traiteur aérien dans une interface web qui 'flotte', sans aucun compromis sur la rapidité de chargement.",
    public: ["Compagnies aériennes", "Jet privés", "Partenaires B2B exigeants"],
    architecture:
      "Stack Jamstack Premium : Frontend Next.js fortement typé orchestrant des animations lourdes via Framer Motion, alimenté par un CMS Headless (Strapi) pour l\'autonomie client, le tout servi via une stratégie de cache hybride (SSR/ISR).",
  },
];
