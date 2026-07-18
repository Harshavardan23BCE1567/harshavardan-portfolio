"use client";

import { motion } from "framer-motion";
import { Award, FolderGit, Target, Layers, BadgeCheck, FlaskConical } from "lucide-react";
import CountUp from "@/app/components/CountUp";
import PatentBadge from "@/app/components/PatentBadge";
import { metrics, patent, certifications } from "@/app/lib/data";

const metricIcons = [Award, FolderGit, Target, Layers, BadgeCheck, FlaskConical];

export default function CredibilityBar() {
  return (
    <section id="credibility" className="relative py-16 md:py-20">
      <div className="content-max-width">
        {/* Patent Badge */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PatentBadge
            title={patent.title}
            status={patent.status}
            date={patent.date}
          />
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            const numericValue = parseFloat(metric.value);
            const isNumeric = !isNaN(numericValue);

            return (
              <motion.div
                key={metric.label}
                className="rounded-xl bg-surface-dark/40 border border-border-subtle/30 p-4 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="h-5 w-5 text-signal-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary font-mono">
                  {isNumeric ? (
                    <CountUp
                      end={numericValue}
                      suffix={metric.suffix || ""}
                      decimals={metric.value.includes(".") ? 1 : 0}
                    />
                  ) : (
                    metric.value
                  )}
                </div>
                <div className="text-xs text-text-muted mt-1">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="inline-flex items-center gap-2 rounded-lg bg-surface-dark/40 border border-border-subtle/30 px-4 py-2 text-sm text-text-secondary"
              >
                <BadgeCheck className="h-4 w-4 text-cyan-wave" />
                <span>{cert.name}</span>
                <span className="text-xs text-text-muted">• {cert.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
