"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { project } from "@/lib/data";

export function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1]);

  return (
    <section id="project" className="bg-paper px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="03">Selected project</SectionLabel>
        </Reveal>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-serif text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.04em]">
                Pion<span className="italic text-cobalt">Bid</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{project.kind}</p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">{project.description}</p>
              <p className="mt-8 font-mono text-[11px] uppercase leading-loose tracking-[0.18em] text-mist">
                {project.stack.join("  /  ")}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-porcelain transition-colors duration-500 hover:bg-cobalt"
                >
                  Open live
                  <span className="transition-transform duration-500 ease-[var(--ease-silk)] group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line pb-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          <div ref={ref} className="md:col-span-7">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PionBid live"
              style={{ y, scale }}
              className="block overflow-hidden rounded-[6px] border border-ink/80 bg-porcelain p-2 shadow-[0_40px_80px_-30px_rgba(16,18,22,0.35)] md:p-3"
            >
              <div className="mb-2 flex items-center gap-1.5 px-1 md:mb-3">
                <span className="h-2 w-2 rounded-full border border-ink/40" />
                <span className="h-2 w-2 rounded-full border border-ink/40" />
                <span className="h-2 w-2 rounded-full border border-ink/40" />
              </div>
              <Image
                src={project.image}
                alt="PionBid real-time bidding interface"
                width={2940}
                height={1664}
                sizes="(min-width: 768px) 56vw, 100vw"
                className="h-auto w-full rounded-[2px]"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
