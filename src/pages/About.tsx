import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import PageTransition from "../components/PageTransition";
import { Stats } from "../components/About/Stats";
import { Currency } from "../components/About/Currency";
import ContentSlide from "../components/About/ContentSlide";
import StackedImages from "../components/About/StackedImages";
import { aboutContent } from "../components/About/AboutContent";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);
  return (
    <PageTransition>
      <div className="max-w-18xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="grid md:grid-cols-2 gap-12 items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Stacked Images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                <StackedImages
                  images={aboutContent}
                  currentIndex={currentIndex}
                />
              </motion.div>

              {/* Content */}
              <ContentSlide content={aboutContent[currentIndex]} />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {aboutContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-5 h-1 rounded-2xl transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 w-8"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Currency & Experience */}
        <div
          className="grid grid-cols-1 md:grid-cols-[5fr,3fr] gap-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Mes devises</h2>
            <Currency />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Parcours</h2>

            <div className="space-y-8">
              {[
                {
                  period: "Février 2024 - Présent",
                  title: "Développeur junior",
                  company: "TW Micronics",
                  description: "Direction informatique.",
                },
                // {
                //   period: "Janvier 2024 - Présent",
                //   title: "Développeur backend et mobile",
                //   company: "CCAA",
                //   description:
                //     "Développeur junior, participant au Développement et déploiement d'une application desktop de géstion d'un établissement scolaire.",
                // },
                {
                  period: "Février 2023 - Janvier 2024",
                  title: "Développeur junior",
                  company: "BRIDGE Company SARL",
                  description:
                    "Développeur junior, participant au Développement et déploiement d'une application desktop de géstion d'un établissement scolaire.",
                },
              ].map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm text-gray-400">
                    {experience.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 mt-1">{experience.company}</p>
                  <p className="text-gray-400 mt-3">{experience.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
