import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEO/SEOHead';
import { seoData } from '../data/seoData';
import { skills } from "../components/Skills/data";

const Skills = () => {
  const getSkillColor = (percent: number) => {
    if (percent >= 80) return "from-green-400 to-emerald-500";
    if (percent >= 60) return "from-blue-400 to-cyan-500";
    if (percent >= 40) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend': return '🎨';
      case 'backend': return '⚙️';
      case 'devops': return '🚀';
      case 'backend as a service (baas)': return '☁️';
      case 'cross-platform development': return '📱';
      case 'programming languages': return '💻';
      case 'outils': return '🛠️';
      default: return '💡';
    }
  };

  return (
    <PageTransition>
      <SEOHead {...seoData.skills} url="/skills" />
      <div className="mt-8 md:mt-14 px-2 md:px-4">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Mes Compétences
          </h1>
          
          {/* Légende des niveaux */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6"
          >
            {[
              { level: "Expert", color: "from-green-400 to-emerald-500", range: "80%+" },
              { level: "Avancé", color: "from-blue-400 to-cyan-500", range: "60-79%" },
              { level: "Intermédiaire", color: "from-yellow-400 to-orange-500", range: "40-59%" },
              { level: "Débutant", color: "from-red-400 to-pink-500", range: "<40%" }
            ].map((item, index) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 border border-white/10"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                <span className="text-xs md:text-sm text-gray-300">
                  <span className="font-medium text-white">{item.level}</span>
                  <span className="text-gray-400 ml-1 hidden sm:inline">({item.range})</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 overflow-hidden"
            >
              {/* Particules code-style sur la card */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Symboles de code flottants */}
                {['</', '{', '}', '()'].map((symbol, i) => (
                  <motion.div
                    key={`symbol-${i}`}
                    className="absolute text-sm font-mono text-purple-400/60 font-bold"
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [-5, -12, -5],
                      rotate: [-8, 8, -8],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: groupIndex * 0.2 + i * 0.5 + Math.random() * 1
                    }}
                  >
                    {symbol}
                  </motion.div>
                ))}
                
                {/* Points lumineux tech */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`dot-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"
                    style={{
                      left: `${65 + i * 12}%`,
                      top: `${15 + i * 20}%`,
                      filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))'
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                      x: [-3, 3, -3]
                    }}
                    transition={{
                      duration: 2.5 + Math.random() * 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: groupIndex * 0.25 + i * 0.4 + Math.random() * 1
                    }}
                  />
                ))}
                
                {/* Lignes de connexion subtiles */}
                <motion.div
                  className="absolute h-0.5 bg-gradient-to-r from-purple-400/30 via-pink-400/50 to-purple-400/30 rounded-full"
                  style={{
                    left: '15%',
                    right: '15%',
                    top: '70%',
                  }}
                  animate={{
                    scaleX: [0.3, 1, 0.3],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: groupIndex * 0.3 + Math.random() * 2
                  }}
                />
              </div>
              {/* Header de catégorie */}
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <motion.div
                  className="text-lg md:text-2xl"
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {getCategoryIcon(skillGroup.category)}
                </motion.div>
                <h3 className="text-base md:text-xl font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Grille des compétences */}
              <div className="space-y-2 md:space-y-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: groupIndex * 0.1 + index * 0.05,
                      duration: 0.4
                    }}
                    className="relative bg-white/5 rounded-xl p-2 md:p-3"
                  >
                    {/* En-tête de la compétence */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <motion.img
                          src={skill.logoLink}
                          width={20}
                          height={20}
                          alt={skill.name}
                          className="rounded"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                      </div>
                      <motion.span 
                        className="text-xs md:text-sm font-bold text-white bg-white/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: groupIndex * 0.1 + index * 0.05 + 0.2 }}
                      >
                        {skill.percent}%
                      </motion.span>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className="relative h-1.5 md:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: `${skill.percent}%`, opacity: 1 }}
                        transition={{
                          width: { duration: 1, delay: groupIndex * 0.1 + index * 0.05 + 0.15, ease: "easeOut" },
                          opacity: { duration: 0.3, delay: groupIndex * 0.1 + index * 0.05 }
                        }}
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.percent)} rounded-full relative overflow-hidden`}
                      >
                        {/* Effet de brillance */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 1.5,
                            delay: groupIndex * 0.1 + index * 0.05 + 0.8,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
