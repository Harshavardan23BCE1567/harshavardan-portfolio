"use client";

import { motion } from "framer-motion";
import { Github, GitCommit, GitPullRequest, Star, ExternalLink } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { personalInfo } from "@/app/lib/data";

export default function GitHubActivity() {
  return (
    <SectionWrapper id="github" className="bg-void">
      <div className="content-max-width">
        <motion.span
          className="text-sm font-medium text-signal-blue uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Open Source
        </motion.span>

        <motion.h2
          className="mt-4 text-3xl md:text-4xl font-bold text-text-primary font-display mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          GitHub Activity
        </motion.h2>

        <motion.p
          className="text-text-secondary max-w-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Active contributor with 10+ repositories spanning AI/ML, full-stack 
          development, and cloud infrastructure.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Profile Card */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-surface-dark/60 border border-border-subtle/30 p-8 backdrop-blur-xl hover:border-signal-blue/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-surface-light/50 flex items-center justify-center">
                  <Github className="h-6 w-6 text-text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">harshavardan23bce1567</h3>
                  <p className="text-sm text-text-muted">GitHub Profile</p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-text-muted group-hover:text-signal-blue transition-colors" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-signal-blue font-mono">10+</div>
                <div className="text-xs text-text-muted mt-1">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-wave font-mono">5+</div>
                <div className="text-xs text-text-muted mt-1">AI/ML Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-phase-gold font-mono">3</div>
                <div className="text-xs text-text-muted mt-1">Domains</div>
              </div>
            </div>
          </motion.a>

          {/* Contribution Stats */}
          <motion.div
            className="rounded-2xl bg-surface-dark/60 border border-border-subtle/30 p-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">Contribution Focus</h3>

            <div className="space-y-4">
              {[
                { label: "AI / Machine Learning", value: 40, color: "bg-signal-blue" },
                { label: "Cloud & Serverless", value: 25, color: "bg-cyan-wave" },
                { label: "Full-Stack Development", value: 20, color: "bg-electric-indigo" },
                { label: "Edge / IoT Systems", value: 15, color: "bg-phase-gold" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-text-secondary">{item.label}</span>
                    <span className="text-xs font-mono text-text-muted">{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface-light overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
