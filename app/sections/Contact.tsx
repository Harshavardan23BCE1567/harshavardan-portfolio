"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { personalInfo } from "@/app/lib/data";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-void">
      <div className="content-max-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.span
              className="text-sm font-medium text-signal-blue uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.span>

            <motion.h2
              className="mt-4 text-3xl md:text-4xl font-bold text-text-primary font-display mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let&apos;s build something intelligent.
            </motion.h2>

            <motion.p
              className="text-text-secondary max-w-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Open to AI/ML engineering roles, research collaborations, and
              open-source contributions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-signal-blue px-6 py-3 text-sm font-semibold text-white hover:bg-signal-blue/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border-subtle/50 bg-surface-dark/60 px-6 py-3 text-sm font-semibold text-text-primary hover:bg-surface-light/50 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </motion.div>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/harshavardan-n", href: personalInfo.linkedin },
              { icon: Github, label: "GitHub", value: "github.com/harshavardan23bce1567", href: personalInfo.github },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark/40 border border-border-subtle/30">
                <div className="h-10 w-10 rounded-lg bg-signal-blue/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-signal-blue" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-primary hover:text-signal-blue transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text-primary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
