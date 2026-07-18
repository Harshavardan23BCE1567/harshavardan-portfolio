"use client";

import { motion } from "framer-motion";
import { Shield, Beaker, BarChart3 } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { aboutContent } from "@/app/lib/data";

const valueIcons: Record<string, React.ReactNode> = {
  Shield: <Shield className="h-5 w-5" />,
  Beaker: <Beaker className="h-5 w-5" />,
  BarChart3: <BarChart3 className="h-5 w-5" />,
};

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-void">
      <div className="content-max-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <motion.span
              className="text-sm font-medium text-signal-blue uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              About
            </motion.span>

            <motion.h2
              className="mt-4 text-3xl md:text-4xl font-bold text-text-primary font-display leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {aboutContent.headline}
            </motion.h2>

            <div className="mt-8 space-y-6">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 rounded-xl bg-surface-dark/40 border border-border-subtle/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="text-signal-blue font-medium">What drives me:</span>{" "}
                building intelligent systems that preserve privacy, process at the edge, 
                and deliver measurable impact. I believe the best AI is invisible, secure, 
                and ethically deployed.
              </p>
            </motion.div>
          </div>

          {/* Right: Values */}
          <div className="space-y-6">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group rounded-xl bg-surface-dark/40 border border-border-subtle/30 p-6 backdrop-blur-sm hover:border-signal-blue/20 transition-colors"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-blue/10 text-signal-blue group-hover:bg-signal-blue/20 transition-colors">
                    {valueIcons[value.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
