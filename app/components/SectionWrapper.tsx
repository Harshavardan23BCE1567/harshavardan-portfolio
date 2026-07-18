"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  const { ref, isInView } = useInView();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section-padding ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
}
