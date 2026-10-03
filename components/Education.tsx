"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="py-28 md:py-36 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label mb-4">03 — Education</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Academic foundation
          </h2>
          <div className="rule w-28 mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="grid md:grid-cols-[1fr_180px] gap-10 border-t border-[var(--line)] pt-10"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
              {education.institution}
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-2">{education.degree}</p>
            <p className="font-mono text-xs text-[var(--text-muted)] mb-8">{education.period}</p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {education.relevantCoursework.map((course) => (
                <span key={course} className="skill-chip">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-[var(--line)] p-6 flex flex-col justify-center items-start md:items-center text-left md:text-center">
            <span className="font-display text-4xl font-extrabold text-[var(--accent)]">
              {education.gpa}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] mt-2">
              GPA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
