"use client";

import { motion } from "framer-motion";
import { FolderOpen, ArrowRight } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import ProjectCard from "@/app/components/ProjectCard";
import { projects, additionalProjects } from "@/app/lib/data";

export default function ProjectShowcase() {
  const mainProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="bg-void">
      <div className="content-max-width">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <motion.span
              className="text-sm font-medium text-signal-blue uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.span>
            <motion.h2
              className="mt-4 text-3xl md:text-4xl font-bold text-text-primary font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Selected Work
            </motion.h2>
            <motion.p
              className="mt-2 text-text-secondary max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              End-to-end projects spanning AI/ML, cloud infrastructure, edge computing, and cybersecurity.
            </motion.p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
            Additional Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group rounded-xl bg-surface-dark/30 border border-border-subtle/20 p-5 hover:border-signal-blue/20 hover:bg-surface-dark/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-sm font-semibold text-text-primary group-hover:text-signal-blue transition-colors">
                    {project.title}
                  </h4>
                  <FolderOpen className="h-4 w-4 text-text-muted shrink-0" />
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-surface-light/30 px-2 py-0.5 text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
