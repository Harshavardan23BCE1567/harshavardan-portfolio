"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import TechTag from "./TechTag";
import { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-border-subtle/50 bg-surface-dark/60 backdrop-blur-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      {/* Glow border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.05), transparent)",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-medium text-signal-blue uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="mt-2 text-xl font-semibold text-text-primary font-display">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              {project.subtitle}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-light/50 text-text-secondary hover:text-signal-blue hover:bg-signal-blue/10 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-light/50 text-text-secondary hover:text-signal-blue hover:bg-signal-blue/10 transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-void/50">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-signal-blue font-mono">
                  {metric.value}
                </div>
                <div className="text-xs text-text-muted mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs text-text-muted self-center">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
