"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import WaveCanvas from "@/app/components/WaveCanvas";
import AnimatedText from "@/app/components/AnimatedText";
import { personalInfo } from "@/app/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Wave Background */}
      <WaveCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/50 via-transparent to-void/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 content-max-width w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-signal-blue/10 border border-signal-blue/20 px-4 py-1.5 text-sm font-medium text-signal-blue mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-blue" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-4">
              <AnimatedText text={personalInfo.name} delay={0.3} />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-signal-blue font-medium mb-4">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              className="text-sm text-text-muted leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {personalInfo.subTagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-signal-blue px-6 py-3 text-sm font-semibold text-white hover:bg-signal-blue/90 transition-colors"
              >
                <FolderOpen className="h-4 w-4" />
                View Projects
              </a>
              <a
                href="/harshavardan-portfolio/resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-border-subtle/50 bg-surface-dark/60 px-6 py-3 text-sm font-semibold text-text-primary hover:bg-surface-light/50 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-signal-blue/20 to-cyan-wave/20 blur-3xl opacity-60" />

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-border-subtle/30 bg-surface-dark/80 backdrop-blur-sm">
                <img
                  src="/harshavardan-portfolio/images/profile.png"
                  alt="Harshavardan N"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-xl bg-surface-dark/90 border border-patent-gold/30 p-3 md:p-4 backdrop-blur-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-patent-gold animate-pulse" />
                  <span className="text-xs font-medium text-patent-gold">Published Patent</span>
                </div>
                <p className="text-xs text-text-muted mt-1">tFUS System</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors">
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
