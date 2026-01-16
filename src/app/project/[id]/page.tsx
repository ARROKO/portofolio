'use client';

import { useEffect, useRef, use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { Code2 } from 'lucide-react';
import { projects } from '@/data/projectsData';
import type { Project } from '@/data/projectsData';
import ProjectHero from '@/components/ProjectDetails/ProjectHero';
import ProjectOverview from '@/components/ProjectDetails/ProjectOverview';
import ProjectGallery from '@/components/ProjectDetails/ProjectGallery';
import SEOHead from '@/components/SEO/SEOHead';
import { getProjectSEO } from '@/data/seoData';
import Navbar from '@/components/Navbar';
import { Footer } from '@/views/Footer';

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const project = projects.find((p: Project) => p.title.toLowerCase().replace(/\s+/g, '-') === id);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
    }
    
    if (!project) {
      router.push('/');
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to('body', {
        background: project.type === 'personal'
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #1a1a2e 0%, #1e2a4a 50%, #1a1a2e 100%)',
        duration: 1,
        ease: 'power2.inOut',
      });

      gsap.from('.content-section', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.content-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => ctx.revert();
  }, [project, router]);

  if (!project) return null;

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />
      <SEOHead 
        {...getProjectSEO(project.title, project.description)} 
        url={`/project/${id}`}
        image={project.image}
      />
      {/* Hero Section with Parallax */}
      <ProjectHero 
        project={project}
        opacity={opacity}
        scale={scale}
      />
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-8 md:py-20 space-y-16 md:space-y-32">
        {project.public && (<ProjectOverview project={project} />)}
        <ProjectGallery screenshots={project.screenshots} type={project.type}/>
        
        {/* Technologies Section */}
        <section className="content-section">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 flex items-center gap-2 md:gap-4">
            <Code2 className="text-pink-500 w-6 h-6 md:w-10 md:h-10" />
            <span>Technologies Utilisées</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {project.technologies.map((tech: string, index: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 md:p-6 rounded-lg md:rounded-xl backdrop-blur-md border ${
                  project.type === 'personal'
                    ? 'border-pink-500/20 bg-pink-500/5'
                    : 'border-blue-500/20 bg-blue-500/5'
                }`}
              >
                <h3 className="text-sm md:text-xl font-semibold mb-2 text-center">{tech}</h3>
                <div className={`h-0.5 md:h-1 rounded-full ${
                  project.type === 'personal'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <section className="content-section">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 flex items-center gap-2 md:gap-4">
              <Code2 className="text-purple-500 w-6 h-6 md:w-10 md:h-10" />
              <span>Fonctionnalités Clés</span>
            </h2>
            <div className={`p-6 md:p-8 rounded-xl backdrop-blur-md border ${
              project.type === 'personal'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/5 border-white/10'
            }`}>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className={`mt-1.5 min-w-[6px] h-1.5 rounded-full ${
                      project.type === 'personal' ? 'bg-pink-500' : 'bg-blue-500'
                    }`} />
                    <span className="text-gray-300 text-sm md:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
