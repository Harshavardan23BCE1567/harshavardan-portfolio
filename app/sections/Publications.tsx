"use client";

import { motion } from "framer-motion";
import { Award, FileText, ExternalLink, Brain, Activity, HeartPulse } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { patent } from "@/app/lib/data";

export default function Publications() {
  return (
    <SectionWrapper id="publications" className="bg-void">
      <div className="content-max-width">
        <motion.span
          className="text-sm font-medium text-signal-blue uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Publications & Patents
        </motion.span>

        <motion.h2
          className="mt-4 text-3xl md:text-4xl font-bold text-text-primary font-display mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Research Contributions
        </motion.h2>

        <motion.p
          className="text-text-secondary max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Published research at the intersection of neuroinformatics, medical AI, 
          and stroke rehabilitation.
        </motion.p>

        {/* Patent Card */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-patent-gold/30 bg-gradient-to-br from-patent-gold/5 to-phase-gold/5 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Shimmer */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-patent-gold/5 to-transparent" />

          <div className="relative">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-patent-gold/20">
                  <Award className="h-6 w-6 text-patent-gold" />
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-patent-gold/20 px-3 py-1 text-xs font-medium text-patent-gold">
                    {patent.status}
                  </span>
                  <p className="text-xs text-text-muted mt-1">{patent.section} • {patent.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-lg bg-surface-dark/60 flex items-center justify-center text-text-muted">
                  <Brain className="h-5 w-5" />
                </div>
                <div className="h-10 w-10 rounded-lg bg-surface-dark/60 flex items-center justify-center text-text-muted">
                  <Activity className="h-5 w-5" />
                </div>
                <div className="h-10 w-10 rounded-lg bg-surface-dark/60 flex items-center justify-center text-text-muted">
                  <HeartPulse className="h-5 w-5" />
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-text-primary font-display mb-4">
              {patent.title}
            </h3>

            <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
              {patent.description} This work was conducted at the Centre of Neuro Informatics, 
              VIT Chennai, involving EEG dataset simulations and complex calculations to validate 
              technical claims for the patent application.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <FileText className="h-4 w-4 text-patent-gold" />
                <span>Co-author</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="text-text-muted">Domain:</span>
                <span>{patent.domain}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Stats */}
        <motion.div
          className="mt-8 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { label: "Patents Published", value: "1" },
            { label: "Research Labs", value: "2" },
            { label: "Domains Covered", value: "5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-surface-dark/40 border border-border-subtle/30 p-4 text-center"
            >
              <div className="text-2xl font-bold text-patent-gold font-mono">{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
