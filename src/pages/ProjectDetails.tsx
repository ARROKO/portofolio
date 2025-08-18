import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Code2 } from 'lucide-react';
import { projects } from '../components/Projects/data';
import ProjectHero from '../components/ProjectDetails/ProjectHero';
import ProjectOverview from '../components/ProjectDetails/ProjectOverview';
import ProjectGallery from '../components/ProjectDetails/ProjectGallery';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === id);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/');
      return;
    }

    // Scroll to top when component mounts

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
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ProjectHero 
        project={project}
        opacity={opacity}
        scale={scale}
      />
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {project.public && (<ProjectOverview project={project} />)}
        <ProjectGallery screenshots={project.screenshots} type={project.type}/>
        {/* <ProjectTechnologies project={project} /> */}
        {/* Technologies Section */}
        <section className="content-section">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <Code2 className="text-pink-500" size={40} />
            <span>Technologies Utilisées</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl backdrop-blur-md border ${
                  project.type === 'personal'
                    ? 'border-pink-500/20 bg-pink-500/5'
                    : 'border-blue-500/20 bg-blue-500/5'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{tech}</h3>
                <div className={`h-1 rounded-full ${
                  project.type === 'personal'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="content-section">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <Users className="text-purple-500" size={40} />
            <span>Fonctionnalités Clés</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Interface utilisateur intuitive et responsive",
              "Performances optimisées",
              "Sécurité renforcée",
              "Expérience utilisateur fluide"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10
                  hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Timeline Section */}
        {/* <section className="content-section">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <Calendar className="text-purple-500" size={40} />
            <span>Évolution du Projet</span>
          </h2>
          <div className="space-y-8">
            {[
              { date: "Janvier 2024", title: "Lancement du Projet" },
              { date: "Février 2024", title: "Développement des Fonctionnalités Principales" },
              { date: "Mars 2024", title: "Phase de Test et Optimisation" },
              { date: "Avril 2024", title: "Déploiement" }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-32 text-gray-400">{milestone.date}</div>
                <div className="flex-grow">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 
                    shadow-lg shadow-pink-500/50 mb-2" />
                  <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default ProjectDetails;


/*
le whileInvView : refaire l'animation a chaque fois que le visuel n'est plus l'element

<motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl backdrop-blur-md border ${
                  project.type === 'personal'
                    ? 'border-pink-500/20 bg-pink-500/5'
                    : 'border-blue-500/20 bg-blue-500/5'
                }`}
              >

*/