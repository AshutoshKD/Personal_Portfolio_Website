"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { workExperience } from "@/lib/data";

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="work" className="py-28 md:py-36 px-6 md:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16 md:mb-20"
        >
          <p className="section-label mb-4">01 — Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] max-w-xl">
            Where I ship production systems
          </h2>
          <div className="rule w-28 mt-6" />
        </motion.div>

        <div className="space-y-10">
          {workExperience.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.55 }}
              className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-14 border-t border-[var(--line)] pt-10"
            >
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] mb-3">{job.period}</p>
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-1">
                  {job.company}
                </h3>
                <p className="text-[var(--text-secondary)] mb-3">{job.role}</p>
                <p className="font-mono text-xs text-[var(--text-muted)]">{job.location}</p>
                {job.current && (
                  <span className="inline-flex items-center gap-2 mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-dot" />
                    Current
                  </span>
                )}
              </div>

              <ul className="space-y-5">
                {job.highlights.map((highlight, hIndex) => (
                  <motion.li
                    key={hIndex}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + hIndex * 0.08, duration: 0.45 }}
                    className="flex gap-4"
                  >
                    <span className="font-mono text-xs text-[var(--accent)] mt-1 shrink-0">
                      {String(hIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{highlight}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
