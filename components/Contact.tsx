"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 atmosphere" />
      <div className="absolute inset-0 topo-grid opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="border-t border-[var(--line)] pt-16"
        >
          <p className="section-label mb-4">06 — Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] max-w-2xl mb-6">
            Let&apos;s build something reliable
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mb-10">
            Open to backend engineering roles, distributed systems work, and interesting side collaborations.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a href={`mailto:${personalInfo.email}`} className="cta-primary">
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost"
            >
              GitHub
            </a>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="ink-link font-mono text-sm md:text-base text-[var(--text-muted)]"
          >
            {personalInfo.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
