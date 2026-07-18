"use client";

import { Award } from "lucide-react";
import { motion } from "framer-motion";

interface PatentBadgeProps {
  title: string;
  status: string;
  date: string;
  className?: string;
}

export default function PatentBadge({ title, status, date, className = "" }: PatentBadgeProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-patent-gold/30 bg-gradient-to-br from-patent-gold/10 to-phase-gold/5 p-6 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-patent-gold/10 to-transparent" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-patent-gold/20">
          <Award className="h-6 w-6 text-patent-gold" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center rounded-full bg-patent-gold/20 px-2.5 py-0.5 text-xs font-medium text-patent-gold">
              {status}
            </span>
            <span className="text-xs text-text-muted">{date}</span>
          </div>

          <h3 className="text-sm font-semibold text-text-primary leading-snug">
            {title}
          </h3>

          <p className="mt-1 text-xs text-text-secondary">
            Published under Section 11A • Co-author
          </p>
        </div>
      </div>
    </motion.div>
  );
}
