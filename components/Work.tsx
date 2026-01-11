"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { workExperience } from "@/lib/data";

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="work" className="min-h-screen flex items-center justify-center py-40 px-6 md:px-12 lg:px-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent opacity-50" />
      
      <div className="w-full max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="section-number">01 — EXPERIENCE</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />
        </motion.div>

        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
          >
            <div className="premium-border rounded-3xl bg-[var(--bg-card)] p-10 md:p-14">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-[var(--accent)]"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                      {job.company}
                    </h3>
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border border-[var(--accent)] border-opacity-20">
                      Current
                    </span>
                  </div>
                  
                  <p className="text-xl text-[var(--text-secondary)] mb-2">{job.role}</p>
                  <p className="text-sm text-[var(--text-muted)] mb-10 font-mono">{job.period}</p>

                  <div className="space-y-6">
                    {job.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + hIndex * 0.1, duration: 0.5 }}
                        className="flex gap-5 group"
                      >
                        <span className="text-[var(--accent)] font-mono text-sm mt-0.5 group-hover:text-[var(--accent-secondary)] transition-colors">
                          {String(hIndex + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="lg:w-56 flex-shrink-0"
                >
                  <div className="border border-[var(--border)] rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                    <motion.span
                      className="text-5xl font-display font-bold text-gradient block mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 }}
                    >
                      4+
                    </motion.span>
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-8">Key Achievements</p>
                    <div className="h-[1px] bg-[var(--border)] mb-8" />
                    <div className="space-y-6">
                      <div>
                        <span className="text-2xl font-bold text-[var(--accent)]">99.9%</span>
                        <p className="text-[var(--text-muted)] text-xs mt-1">Uptime</p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-[var(--accent-secondary)]">30%</span>
                        <p className="text-[var(--text-muted)] text-xs mt-1">Efficiency Gain</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
