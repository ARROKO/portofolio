'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  icon: string;
  color: string;
}

const stats: Stat[] = [
  { value: "2", label: "Années d'expérience", icon: "⚡", color: "text-yellow-400" },
  { value: "4+", label: "Projets réalisés", icon: "🚀", color: "text-blue-400" },
  { value: "10+", label: "Technologies maîtrisées", icon: "💻", color: "text-green-400" },
  { value: "100%", label: "Satisfaction client", icon: "🎯", color: "text-pink-400" },
];

export const Stats = () => (
  <div className="my-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
        >
          <div className="text-4xl mb-3">{stat.icon}</div>
          <h3 className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
          <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
);