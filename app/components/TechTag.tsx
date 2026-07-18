"use client";

import { motion } from "framer-motion";

interface TechTagProps {
  name: string;
  className?: string;
}

export default function TechTag({ name, className = "" }: TechTagProps) {
  return (
    <motion.span
      className={`inline-flex items-center rounded-full bg-surface-light/50 px-3 py-1 text-xs font-medium text-text-secondary border border-border-subtle/30 backdrop-blur-sm ${className}`}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderColor: "rgba(59, 130, 246, 0.3)",
      }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.span>
  );
}
