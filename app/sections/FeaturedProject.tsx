"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, GitBranch, Layers, Zap } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import TechTag from "@/app/components/TechTag";
import { projects } from "@/app/lib/data";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured);
  if (!project) return null;

  return (
    <SectionWrapper id="featured-project" className="bg-void">
      <div className="content-max-width">
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Star className="h-5 w-5 text-phase-gold" />
          <span className="text-sm font-medium text-phase-gold uppercase tracking-wider">
            Featured Project
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Content */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-text-primary font-display leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h2>

            <motion.p
              className="text-lg text-text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.subtitle}
            </motion.p>

            {/* Problem */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                <Zap className="h-4 w-4 text-signal-blue" />
                Problem
              </h3>
              <p className="text-text-secondary leading-relaxed">{project.problem}</p>
            </motion.div>

            {/* Architecture */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                <GitBranch className="h-4 w-4 text-cyan-wave" />
                Architecture
              </h3>
              <ul className="space-y-2">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-wave shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Impact */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                <Layers className="h-4 w-4 text-phase-gold" />
                Impact
              </h3>
              <ul className="space-y-2">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-phase-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {project.technologies.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </motion.div>

            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-signal-blue hover:text-signal-blue/80 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Right: Visual / Metrics */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sticky top-24">
              {/* Architecture visualization placeholder */}
              <div className="rounded-2xl bg-surface-dark/60 border border-border-subtle/30 p-8 backdrop-blur-xl">
                <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
                  System Architecture
                </h3>

                <div className="space-y-4">
                  {/* Edge Devices */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-void/50 border border-border-subtle/30">
                    <div className="h-10 w-10 rounded-lg bg-cyan-wave/20 flex items-center justify-center">
                      <span className="text-xs font-mono text-cyan-wave">ESP</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Edge Devices</p>
                      <p className="text-xs text-text-muted">Local model training</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="h-8 w-px bg-gradient-to-b from-cyan-wave/50 to-signal-blue/50" />
                  </div>

                  {/* Aggregation Server */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-void/50 border border-signal-blue/30">
                    <div className="h-10 w-10 rounded-lg bg-signal-blue/20 flex items-center justify-center">
                      <span className="text-xs font-mono text-signal-blue">AGG</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Secure Aggregation</p>
                      <p className="text-xs text-text-muted">Privacy-preserving model merge</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="h-8 w-px bg-gradient-to-b from-signal-blue/50 to-electric-indigo/50" />
                  </div>

                  {/* Global Model */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-void/50 border border-electric-indigo/30">
                    <div className="h-10 w-10 rounded-lg bg-electric-indigo/20 flex items-center justify-center">
                      <span className="text-xs font-mono text-electric-indigo">GLB</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Global Model</p>
                      <p className="text-xs text-text-muted">Distributed to all devices</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="rounded-xl bg-surface-dark/40 border border-border-subtle/30 p-4 text-center">
                    <div className="text-xl font-bold text-signal-blue font-mono">{metric.value}</div>
                    <div className="text-xs text-text-muted mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
