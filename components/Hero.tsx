"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const socials = [
    { name: "GitHub", url: personalInfo.github },
    { name: "LinkedIn", url: personalInfo.linkedin },
    { name: "LeetCode", url: personalInfo.leetcode },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 atmosphere" />
      <div className="absolute inset-0 topo-grid" />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20 py-28 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse-dot" />
            <span className="section-label">
              {personalInfo.title} · {personalInfo.company}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.2rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--text-primary)] mb-1"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.2rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--accent)] mb-8"
          >
            {personalInfo.lastName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="max-w-md text-lg md:text-xl text-[var(--text-secondary)] mb-3"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="max-w-lg text-[var(--text-muted)] mb-10"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a href="#projects" className="cta-primary">
              View Projects
            </a>
            <a href="#contact" className="cta-ghost">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-link font-mono text-xs uppercase tracking-[0.18em]"
              >
                {s.name}
              </a>
            ))}
            <span className="hidden sm:inline text-[var(--line-strong)]">/</span>
            <span className="font-mono text-xs text-[var(--text-muted)]">{personalInfo.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[48vh] lg:min-h-screen border-t lg:border-t-0 lg:border-l border-[var(--line)]"
        >
          <Image
            src="/profile.jpg"
            alt="Ashutosh Dubey"
            fill
            priority
            unoptimized
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--bg-primary)]/35 lg:via-transparent lg:to-transparent" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--ember)] to-transparent"
      />
    </section>
  );
}
