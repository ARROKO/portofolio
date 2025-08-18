import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { skills } from "../components/Skills/data";
// import { JavaScriptPlain } from 'devicons-react';

const Skills = () => {
  return (
    <PageTransition>
      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {skillGroup.category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skillGroup.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                  className="bg-gray-700 rounded-lg p-4"
                >
                  <div className="text-gray-300 flex">
                    <img
                      src={skill.logoLink}
                      width={20}
                      className="mr-2"
                      alt={skill.name}
                    />
                    {skill.name}
                  </div>
                  <div className="mt-2 h-1 bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percent}%` }}
                      transition={{
                        duration: 1,
                        delay: groupIndex * 0.1 + index * 0.05,
                      }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Skills;
