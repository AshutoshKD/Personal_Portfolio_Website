"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const groups = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Databases", items: skills.databases },
    { title: "Cloud & DevOps", items: skills.cloudDevOps },
    { title: "Concepts", items: skills.concepts },
  ];

  return (
    <section id="skills" className="py-28 md:py-36 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label mb-4">05 — Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Tools I reach for daily
          </h2>
          <div className="rule w-28 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.45 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-col">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
