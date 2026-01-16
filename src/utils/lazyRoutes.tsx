import { lazy } from 'react';

// Lazy load des pages principales avec code splitting
export const Home = lazy(() => import('../views/Home'));
export const About = lazy(() => import('../views/About'));
export const Skills = lazy(() => import('../views/Skills'));
export const Projects = lazy(() => import('../views/Projects'));
export const Contact = lazy(() => import('../views/Contact'));
export const ProjectDetails = lazy(() => import('../views/ProjectDetails'));

// Lazy load des composants lourds pour optimiser le bundle
export const ProjectGallery = lazy(() => import('../components/ProjectDetails/ProjectGallery'));
