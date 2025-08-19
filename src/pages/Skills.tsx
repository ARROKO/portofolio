import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { skills } from "../components/Skills/data";

const Skills = () => {
  return (
    <PageTransition>
      <div className="relative">
        {/* Particules flottantes subtiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
              style={{
                left: `${65 + i * 12}%`,
                top: `${15 + i * 20}%`,
                filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-14">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: groupIndex * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              {/* Effet de lueur au hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-lg font-semibold text-white mb-6 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: groupIndex * 0.1 + 0.2 }}
                >
                  {skillGroup.category}
                </motion.h3>
                
                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: groupIndex * 0.1 + index * 0.05,
                        duration: 0.4
                      }}
                      className="flex items-center justify-between group/item"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.img
                          src={skill.logoLink}
                          width={24}
                          height={24}
                          className="rounded-sm"
                          alt={skill.name}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percent}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: groupIndex * 0.1 + index * 0.05 + 0.3,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                          />
                        </div>
                        <span className="text-xs text-gray-400 font-medium w-8 text-right">
                          {skill.percent}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
