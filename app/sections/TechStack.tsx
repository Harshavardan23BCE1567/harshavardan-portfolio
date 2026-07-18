"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, Server, Monitor, Wifi, Code2, Wrench } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import SkillBar from "@/app/components/SkillBar";
import { skills } from "@/app/lib/data";

const categories = [
  { id: "all", label: "All Skills", icon: Code2 },
  { id: "ai-ml", label: "AI / ML", icon: Cpu },
  { id: "cloud", label: "Cloud", icon: Cloud },
  { id: "backend", label: "Backend", icon: Server },
  { id: "frontend", label: "Frontend", icon: Monitor },
  { id: "edge-iot", label: "Edge / IoT", icon: Wifi },
  { id: "languages", label: "Languages", icon: Code2 },
  { id: "tools", label: "Tools", icon: Wrench },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="tech-stack" className="bg-void">
      <div className="content-max-width">
        <motion.span
          className="text-sm font-medium text-signal-blue uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.span>

        <motion.h2
          className="mt-4 text-3xl md:text-4xl font-bold text-text-primary font-display mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies & Tools
        </motion.h2>

        <motion.p
          className="text-text-secondary max-w-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A T-shaped skill profile with deep expertise in AI/ML and broad 
          capability across cloud, backend, and edge systems.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-signal-blue text-white"
                    : "bg-surface-dark/40 text-text-secondary hover:bg-surface-light/50 hover:text-text-primary border border-border-subtle/30"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-x-12 gap-y-4"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level || 80}
              category={skill.category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { label: "AI / ML Skills", value: "11" },
            { label: "Cloud Services", value: "6" },
            { label: "Programming Languages", value: "6" },
            { label: "Total Technologies", value: "30+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-surface-dark/40 border border-border-subtle/30 p-4 text-center"
            >
              <div className="text-2xl font-bold text-signal-blue font-mono">{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
