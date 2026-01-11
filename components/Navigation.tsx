"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`max-w-6xl mx-auto ${scrolled ? "glass rounded-full px-6 mx-6" : "px-6"}`}>
        <div className={`flex justify-between items-center ${scrolled ? "py-3 px-4" : ""}`}>
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-display text-xl font-bold tracking-wider text-[var(--text-primary)]">
              AD
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link text-sm font-medium uppercase tracking-wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="w-[1px] h-5 bg-[var(--border)]" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
