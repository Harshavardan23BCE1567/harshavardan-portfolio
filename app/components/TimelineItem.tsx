"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, BookOpen, Clock } from "lucide-react";
import { Experience } from "@/app/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
  course: BookOpen,
};

const typeColors = {
  work: "bg-signal-blue",
  education: "bg-electric-indigo",
  certification: "bg-phase-gold",
  course: "bg-cyan-wave",
};

export default function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const Icon = typeIcons[experience.type];
  const colorClass = typeColors[experience.type];

  return (
    <motion.div
      className="relative flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[19px] top-12 w-px h-[calc(100%+2rem)] bg-border-subtle/50" />
      )}

      {/* Icon */}
      <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}/20 border border-${colorClass}/30`}>
        <Icon className={`h-4 w-4 text-${colorClass.replace("bg-", "")}`} />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}/10 text-${colorClass.replace("bg-", "")} border border-${colorClass.replace("bg-", "")}/20`}>
            {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
          </span>
          <span className="text-xs text-text-muted flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {experience.date}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-text-primary">
          {experience.title}
        </h3>
        <p className="text-sm text-text-secondary">
          {experience.organization} • {experience.location}
        </p>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}
