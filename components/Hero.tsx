"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)] opacity-20" />
      
      <motion.div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ProfilePicture() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mb-10"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[var(--border-light)] group">
        <Image
          src="/profile.jpg"
          alt="Ashutosh Dubey"
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-110 z-10"
        />
      </div>
      
      <motion.div
        className="absolute -inset-2 rounded-full border border-[var(--border)] opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[var(--accent-emerald)] border-4 border-[var(--bg-primary)] z-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        title="Available for opportunities"
      />
    </motion.div>
  );
}

export function Hero() {
  const firstName = personalInfo.name.toUpperCase();
  const lastName = personalInfo.lastName.toUpperCase();

  const socials = [
    { name: "GitHub", url: personalInfo.github },
    { name: "LinkedIn", url: personalInfo.linkedin },
    { name: "LeetCode", url: personalInfo.leetcode },
    { name: "Resume", url: personalInfo.resumeLink },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-16">
      <GridBackground />

      <div className="w-full max-w-4xl mx-auto relative z-10 py-32">
        <div className="flex flex-col items-center text-center">
          
          <ProfilePicture />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <div className="mb-2 overflow-hidden">
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-[var(--text-primary)]">{firstName}</span>
            </motion.h1>
          </div>

          <div className="mb-10 overflow-hidden">
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-gradient"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {lastName}
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="w-24 h-[2px] mb-10 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 max-w-xl font-light leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-[var(--text-muted)] mb-8 text-base md:text-lg"
          >
            {personalInfo.title} @ <span className="text-[var(--accent)]">{personalInfo.company}</span>
            <span className="mx-3 text-[var(--border-light)]">·</span>
            {personalInfo.location}
          </motion.p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="inline-block text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-10 underline-animation font-mono text-sm"
          >
            {personalInfo.email}
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex justify-center flex-wrap gap-6 md:gap-10 mb-14"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--accent)]"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="group relative px-10 py-5 rounded-full overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 font-display text-sm uppercase tracking-[0.15em] text-white font-medium">
                View Projects
              </span>
            </motion.a>

            <motion.a
              href="#work"
              className="px-10 py-5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] font-display text-sm uppercase tracking-[0.15em] hover:border-[var(--border-light)] hover:text-[var(--text-primary)] transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Experience
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[var(--text-dim)] text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--text-dim)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
