import { motion } from 'framer-motion';
import {
  Github,
  Database,
  Server,
  Globe,
  Code2,
  Cpu,
  Container,
  GitBranch,
  Monitor,
  Figma as FigmaIcon,
  Terminal,
  Boxes,
} from 'lucide-react';

interface SkillIconProps {
  name: string;
  progress: number;
}


const iconMap: Record<string, typeof Globe> = {
  'React': Globe,
  'Node.js': Server,
  'MongoDB': Database,
  'TypeScript': Code2,
  'Docker': Container,
  'Git': GitBranch,
  'AWS': Cpu,
  'VS Code': Monitor,
  'Figma': FigmaIcon,
  'Linux': Terminal,
  'Webpack': Boxes,
  'GitHub': Github,
};

const SkillIcon = ({ name, progress }: SkillIconProps) => {
  const Icon = iconMap[name] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="relative flex flex-col items-center p-6 bg-gray-800 rounded-lg"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative"
      >
        <svg className="w-16 h-16">
          <circle
            cx="32"
            cy="32"
            r="28"
            className="stroke-gray-700"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            className="stroke-blue-500"
            strokeWidth="8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-8 h-8 text-gray-300" />
        </div>
      </motion.div>
      <span className="mt-4 text-gray-300 font-medium">{name}</span>
      <span className="text-sm text-gray-400">{progress}%</span>
    </motion.div>
  );
};

export default SkillIcon;