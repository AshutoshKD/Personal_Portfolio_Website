"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-40 px-6 md:px-12 lg:px-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent opacity-30" />
      
      <div className="w-full max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="section-number">03 — EDUCATION</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="premium-border rounded-3xl bg-[var(--bg-card)] p-10 md:p-14"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-4 h-4 rounded-full bg-[var(--accent-tertiary)]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  {education.institution}
                </h3>
              </div>
              
              <p className="text-xl text-[var(--text-secondary)] mb-2">{education.degree}</p>
              <p className="text-sm text-[var(--text-muted)] mb-10 font-mono">{education.period}</p>

              <div className="flex flex-wrap gap-3">
                {education.relevantCoursework.map((course, cIndex) => (
                  <motion.span
                    key={cIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + cIndex * 0.05 }}
                    className="skill-tag px-4 py-2 text-sm text-[var(--text-muted)] border border-[var(--border)] rounded-full hover:border-[var(--accent-tertiary)] hover:text-[var(--accent-tertiary)] transition-all cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="lg:w-48 flex-shrink-0"
            >
              <div className="border border-[var(--accent-tertiary)] border-opacity-30 rounded-2xl p-8 text-center">
                <motion.span
                  className="text-5xl font-display font-bold text-[var(--accent-tertiary)]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  {education.gpa}
                </motion.span>
                <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mt-3">GPA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
