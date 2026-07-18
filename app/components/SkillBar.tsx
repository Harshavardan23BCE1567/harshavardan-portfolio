"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";

interface SkillBarProps {
  name: string;
  level: number;
  category: string;
  index: number;
}

const categoryColors: Record<string, string> = {
  "ai-ml": "bg-signal-blue",
  cloud: "bg-cyan-wave",
  backend: "bg-electric-indigo",
  frontend: "bg-research-cyan",
  "edge-iot": "bg-phase-gold",
  languages: "bg-text-secondary",
  tools: "bg-text-muted",
};

export default function SkillBar({ name, level, category, index }: SkillBarProps) {
  const { ref, isInView } = useInView();
  const colorClass = categoryColors[category] || "bg-signal-blue";

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <span className="text-xs font-mono text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-light overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorClass}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
