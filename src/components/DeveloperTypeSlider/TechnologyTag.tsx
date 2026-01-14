'use client';

import { motion } from "framer-motion";
import LazyImage from "../LazyImage";

interface TechnologyTagProps {
  name: string;
  icon: string;
  delay: number;
}

export const TechnologyTag = ({ name, icon, delay }: TechnologyTagProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    className="px-3 flex gap-1 py-1 bg-white/10 rounded-full text-sm font-medium"
  >
    {
      icon && <LazyImage src={icon} alt="" className="w-5 h-5"/>
    }
    {name}
  </motion.span>
);