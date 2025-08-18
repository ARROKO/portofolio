import { lazy } from 'react';

// Lazy load des pages principales avec code splitting
export const Home = lazy(() => import('../pages/Home'));
export const About = lazy(() => import('../pages/About'));
export const Skills = lazy(() => import('../pages/Skills'));
export const Projects = lazy(() => import('../pages/Projects'));
export const Contact = lazy(() => import('../pages/Contact'));
export const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));

// Lazy load des composants lourds pour optimiser le bundle
export const ProjectGallery = lazy(() => import('../components/ProjectDetails/ProjectGallery'));
