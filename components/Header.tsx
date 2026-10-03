"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

/**
 * White text with mix-blend-difference: reads as ink on porcelain
 * and flips to porcelain on the dark contact section automatically.
 */
export function Header() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12">
        <a href="#top" aria-label="Back to top" className="font-serif text-2xl leading-none tracking-tight">
          A<span className="italic">D</span>
        </a>
        <nav className="flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.2em] md:gap-10">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-line pb-1">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-white" />
    </motion.header>
  );
}
