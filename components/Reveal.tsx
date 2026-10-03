"use client";

import { motion } from "framer-motion";

const silk = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into place once they enter the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, delay, ease: silk }}
    >
      {children}
    </motion.div>
  );
}

/** Slides a line of text up from behind a mask. */
export function Mask({
  children,
  delay = 0,
  className,
  inView = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}) {
  const animation = inView
    ? { whileInView: { y: "0%" }, viewport: { once: true, margin: "0px 0px -10% 0px" } }
    : { animate: { y: "0%" } };

  return (
    <span className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        {...animation}
        transition={{ duration: 1.2, delay, ease: silk }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
      <span className="text-cobalt">{index}</span>
      <span className="h-px w-10 bg-line" />
      <span>{children}</span>
    </div>
  );
}
