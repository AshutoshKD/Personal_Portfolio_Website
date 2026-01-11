"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { personalInfo } from "@/lib/data";

function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-8"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-[var(--text-dim)] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            Built with passion & coffee ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] relative">
      <div className="noise-bg" />
      <Navigation />
      <Hero />
      <Work />
      <Projects />
      <Education />
      <Achievements />
      <Skills />
      <Footer />
    </main>
  );
}
