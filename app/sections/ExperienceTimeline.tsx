"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";
import TimelineItem from "@/app/components/TimelineItem";
import { experiences } from "@/app/lib/data";

export default function ExperienceTimeline() {
  return (
    <SectionWrapper id="experience" className="bg-void">
      <div className="content-max-width">
        <motion.span
          className="text-sm font-medium text-signal-blue uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.span>

        <motion.h2
          className="mt-4 text-3xl md:text-4xl font-bold text-text-primary font-display mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Journey & Milestones
        </motion.h2>

        <motion.p
          className="text-text-secondary max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From research labs to cloud architectures — a timeline of continuous 
          learning and building.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
