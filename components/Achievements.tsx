"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { achievements } from "@/lib/data";

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const hasPlus = value.includes("+");
  const isNumeric = !isNaN(numericValue) && numericValue > 0;

  useEffect(() => {
    if (!inView) return;
    
    if (!isNumeric) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 2.5,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(Math.floor(v).toString() + (hasPlus ? "+" : "")),
    });

    return () => controls.stop();
  }, [inView, numericValue, hasPlus, isNumeric, value]);

  return <>{display}</>;
}

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const gradients = [
    "from-[var(--accent)] to-[var(--accent-secondary)]",
    "from-[var(--accent-secondary)] to-[var(--accent-tertiary)]",
    "from-[var(--accent-tertiary)] to-[var(--accent-emerald)]",
    "from-[var(--accent-gold)] to-[var(--accent)]",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-40 px-6 md:px-12 lg:px-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,var(--accent-glow),transparent)] opacity-20" />
      
      <div className="w-full max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="section-number">04 — RECOGNITION</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Competitive <span className="text-gradient">Achievements</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring" }}
              className="achievement-card premium-border rounded-3xl bg-[var(--bg-card)] p-10 md:p-12 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index]} opacity-60`} />
              
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <motion.span
                  className="text-6xl md:text-7xl font-display font-bold text-gradient block mb-6"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
                >
                  <AnimatedNumber value={achievement.number} inView={isInView} />
                </motion.span>
                
                <span className="text-sm uppercase tracking-[0.25em] text-[var(--accent)] block mb-4 font-medium">
                  {achievement.label}
                </span>
                
                <p className="text-[var(--text-secondary)] text-lg mb-3">{achievement.description}</p>
                <p className="text-[var(--text-muted)] text-sm">{achievement.subtext}</p>
              </div>
              
              <motion.div
                className="absolute bottom-6 right-6 w-20 h-20 rounded-full border border-[var(--border)] opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
