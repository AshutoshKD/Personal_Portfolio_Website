"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { achievements } from "@/lib/data";

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const hasPlus = value.includes("+");
  const isNumeric = !Number.isNaN(numericValue) && numericValue > 0;

  useEffect(() => {
    if (!inView) return;
    if (!isNumeric) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.floor(v)}${hasPlus ? "+" : ""}`),
    });

    return () => controls.stop();
  }, [inView, numericValue, hasPlus, isNumeric, value]);

  return <>{display}</>;
}

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="py-28 md:py-36 px-6 md:px-10 lg:px-16 bg-[var(--bg-secondary)] relative">
      <div className="absolute inset-0 atmosphere opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label mb-4">04 — Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Competitive highlights
          </h2>
          <div className="rule w-28 mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label + achievement.description}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.45 }}
              className="bg-[var(--bg-elevated)] p-8 md:p-10"
            >
              <p className="font-display text-5xl md:text-6xl font-extrabold text-[var(--accent)] mb-4">
                <AnimatedNumber value={achievement.number} inView={isInView} />
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ember)] mb-3">
                {achievement.label}
              </p>
              <p className="text-[var(--text-primary)] font-medium mb-1">{achievement.description}</p>
              <p className="text-sm text-[var(--text-muted)]">{achievement.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
