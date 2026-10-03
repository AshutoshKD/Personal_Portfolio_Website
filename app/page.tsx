"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { personalInfo } from "@/lib/data";

function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 pb-12">
      <div className="max-w-6xl mx-auto border-t border-[var(--line)] pt-8 flex flex-col md:flex-row justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-[0.16em]"
        >
          © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[var(--text-dim)]"
        >
          Designed & built in Mumbai
        </motion.p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] relative">
      <Navigation />
      <Hero />
      <Work />
      <Projects />
      <Education />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
