import { FaDesktop, FaMobile, FaGlobe } from "react-icons/fa";
import type { DeveloperType } from "./types";

export const developerTypes: DeveloperType[] = [
  {
    title: "Développeur Web",
    subtitle: "Applications web modernes et réactives",
    technologies: ["React.js", "TypeScript", "Next.js", "TailwindCSS"],
    technologiesIconsLinks: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    ],
    icon: FaGlobe,
    color: "#61DAFB",
  },
  {
    title: "Développeur Mobile",
    subtitle: "Applications mobiles cross-platform",
    technologies: ["Flutter", "Firebase", "REST APIs"],
    technologiesIconsLinks: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    ],
    icon: FaMobile,
    color: "#3DDC84",
  },
  {
    title: "Développeur Desktop",
    subtitle: "Applications bureau performantes",
    technologies: ["Flutter", "Dart", "Objectbox"],
    technologiesIconsLinks: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg'
    ],
    icon: FaDesktop,
    color: "#764ABC",
  },
];
