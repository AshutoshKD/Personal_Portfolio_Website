"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import Image from "next/image";

function PlayfulWidget() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-card)]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] opacity-20"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1, 0.9, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/4 right-12 w-12 h-12 rounded-full bg-[var(--accent-tertiary)] opacity-30"
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-12 left-1/4 w-8 h-8 rounded-lg bg-[var(--accent-gold)] opacity-25"
          animate={{
            rotate: [0, -45, 0, 45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[var(--accent-emerald)] opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          className="mb-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center shadow-lg">
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              📝
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {["☕", "→", "💻", "→", "🚀"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-xl"
              animate={{ 
                y: i % 2 === 0 ? [0, -5, 0] : [0, 5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut" 
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-[var(--text-muted)] text-sm font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Blog · Read · Write · Share
        </motion.p>
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10" viewBox="0 0 400 100" preserveAspectRatio="none">
        <motion.path
          d="M 0 50 Q 100 20 200 50 T 400 50 L 400 100 L 0 100 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              "M 0 50 Q 100 20 200 50 T 400 50 L 400 100 L 0 100 Z",
              "M 0 50 Q 100 80 200 50 T 400 50 L 400 100 L 0 100 Z",
              "M 0 50 Q 100 20 200 50 T 400 50 L 400 100 L 0 100 Z",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string; index: number }) {
  const [error, setError] = useState(false);

  if (src === "animated") {
    return <PlayfulWidget />;
  }

  if (error) {
    return <PlayfulWidget />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setError(true)}
    />
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="min-h-screen py-40 px-6 md:px-12 lg:px-16 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent-glow),transparent)]" />
      
      <div className="w-full max-w-5xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="section-number">02 — FEATURED WORK</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.7 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-6xl lg:text-7xl font-display font-bold text-[var(--text-dim)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--border)] to-transparent" />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">
                      {project.name}
                    </h3>
                    <motion.span
                      className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-medium ${
                        project.status === "live"
                          ? "bg-[var(--accent-emerald)] bg-opacity-10 text-[var(--accent-emerald)] border border-[var(--accent-emerald)] border-opacity-30"
                          : "bg-[var(--text-muted)] bg-opacity-10 text-[var(--text-muted)] border border-[var(--text-muted)] border-opacity-30"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.status}
                    </motion.span>
                  </div>

                  <p className="text-lg lg:text-xl text-[var(--text-secondary)] mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, tIndex) => (
                      <motion.span
                        key={tIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 + tIndex * 0.05 + 0.7 }}
                        className="skill-tag px-3 py-1.5 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group/link"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-base font-medium text-[var(--text-secondary)] group-hover/link:text-[var(--accent)] transition-colors">
                      {project.status === "github" ? "View on GitHub" : "View Project"}
                    </span>
                    <motion.span
                      className="text-[var(--accent)] text-xl"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>

                <motion.div
                  className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.7 }}
                >
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="premium-border rounded-2xl overflow-hidden bg-[var(--bg-card)] relative group-hover:shadow-2xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                      
                      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)]">
                        <ProjectImage 
                          src={project.image} 
                          alt={`${project.name} screenshot`}
                          index={index}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-40 pointer-events-none" />
                      </div>
                      
                      <div className="p-4 text-center border-t border-[var(--border)]">
                        <p className="text-[var(--text-dim)] text-xs uppercase tracking-[0.2em]">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
