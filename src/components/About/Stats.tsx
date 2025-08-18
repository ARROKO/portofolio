import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: "2", label: "Années d'expérience", icon: "⚡" },
  { value: "4+", label: "Projets réalisés", icon: "🚀" },
  { value: "10+", label: "Technologies maîtrisées", icon: "💻" },
  { value: "100%", label: "Satisfaction client", icon: "🎯" },
];

export const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
      >
        <span className="text-3xl mb-2 block">{stat.icon}</span>
        <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
        <p className="text-sm text-gray-400">{stat.label}</p>
      </motion.div>
    ))}
  </div>
);