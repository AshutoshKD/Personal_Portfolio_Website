"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

function MetroLine({ 
  title, 
  items, 
  color, 
  lineIndex, 
  isInView 
}: { 
  title: string; 
  items: string[]; 
  color: string; 
  lineIndex: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: lineIndex * 0.15 + 0.3, duration: 0.6 }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {title.charAt(0)}
        </div>
        <span className="font-mono text-sm uppercase tracking-wider text-[var(--text-muted)]">
          {title}
        </span>
      </div>

      <div className="relative ml-4">
        <div 
          className="absolute top-4 left-0 right-0 h-1 rounded-full"
          style={{ backgroundColor: `${color}30` }}
        />
        
        <motion.div 
          className="absolute top-4 left-0 h-1 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ delay: lineIndex * 0.15 + 0.5, duration: 1, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-[0.25rem] w-3 h-3 rounded-full z-50"
          style={{ 
            backgroundColor: color,
            boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
          }}
          animate={isInView ? {
            left: ["0%", "100%", "0%"],
          } : {}}
          transition={{
            duration: 8 + lineIndex,
            repeat: Infinity,
            ease: "linear",
            delay: lineIndex * 0.5 + 1,
          }}
        />

        <div className="flex justify-between items-start pt-0 relative z-10">
          {items.map((skill, skillIndex) => {
            const totalItems = items.length;
            const trainDuration = 8 + lineIndex;
            const stationDelay = (skillIndex / (totalItems - 1)) * trainDuration;
            
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: lineIndex * 0.15 + skillIndex * 0.08 + 0.6, 
                  duration: 0.4 
                }}
                className="flex flex-col items-center group cursor-default"
                style={{ flex: 1 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-5 h-5 rounded-full border-4 relative z-10"
                    style={{ borderColor: color }}
                    animate={isInView ? {
                      backgroundColor: [
                        "var(--bg-primary)",
                        color,
                        "var(--bg-primary)",
                      ],
                      scale: [1, 1.2, 1],
                    } : {}}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: trainDuration - 0.6,
                      delay: stationDelay + lineIndex * 0.5 + 1,
                      ease: "easeInOut",
                    }}
                    whileHover={{ 
                      scale: 1.5, 
                      boxShadow: `0 0 20px ${color}`,
                    }}
                  />
                </div>
                
                <motion.span
                  className="mt-4 text-sm text-center font-medium text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const metroLines = [
    { title: "Languages", items: skills.languages, color: "#f97316" },
    { title: "Frameworks", items: skills.frameworks, color: "#8b5cf6" },
    { title: "Databases", items: skills.databases, color: "#06b6d4" },
    { title: "Cloud & DevOps", items: skills.cloudDevOps, color: "#10b981" },
    { title: "Concepts", items: skills.concepts, color: "#eab308" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-40 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      
      
      <div className="w-full max-w-5xl mx-auto relative z-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-number">05 — EXPERTISE</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
            Skill <span className="text-gradient">Transit</span>
          </h2>
          <p className="text-[var(--text-muted)] font-mono text-sm">
            Navigate through my technical expertise
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />
        </motion.div>

        <div className="space-y-16">
          {metroLines.map((line, index) => (
            <MetroLine
              key={line.title}
              title={line.title}
              items={line.items}
              color={line.color}
              lineIndex={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-20 flex items-center justify-center gap-8 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-[var(--accent)]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-[var(--text-muted)] font-mono">Active Station</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-6 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-[var(--text-muted)] font-mono">Skill Line</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
