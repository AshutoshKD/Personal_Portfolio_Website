"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { experience } from "@/lib/data";

const silk = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="02">Experience</SectionLabel>
        </Reveal>

        <div className="mt-14 border-t border-ink md:mt-20">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={job.company} delay={i * 0.08} y={20}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group grid w-full cursor-pointer grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-3 py-8 text-left md:grid-cols-12 md:py-12"
                  >
                    <span className="order-2 col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist md:order-none md:col-span-3">
                      {job.period}
                    </span>
                    <span className="order-1 md:order-none md:col-span-7">
                      <span
                        className={`block font-serif text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] transition-all duration-700 ease-[var(--ease-silk)] group-hover:translate-x-3 ${
                          isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink"
                        }`}
                      >
                        {job.company}
                      </span>
                      <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">
                        {job.role} · {job.place}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="order-1 flex h-11 w-11 items-center justify-center self-center justify-self-end rounded-full border border-line transition-colors duration-500 group-hover:border-ink md:order-none md:col-span-2"
                    >
                      <span className="relative block h-3 w-3">
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
                        <span
                          className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink transition-transform duration-500 ease-[var(--ease-silk)] ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: silk }}
                        className="overflow-hidden"
                      >
                        <ul className="grid gap-6 pb-12 md:grid-cols-12 md:gap-0 md:pb-16">
                          {job.points.map((point, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, y: 14 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.1 + j * 0.08, ease: silk }}
                              className="flex gap-4 text-base leading-relaxed text-ink-soft md:col-span-7 md:col-start-4"
                            >
                              <span className="mt-[0.7em] h-px w-5 shrink-0 bg-cobalt" />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
