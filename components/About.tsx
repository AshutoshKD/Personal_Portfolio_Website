"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { site } from "@/lib/data";

function Word({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block pr-[0.25em]">
      {children}
    </motion.span>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const words = site.about.split(" ");

  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: photoProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const imgY = useTransform(photoProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <SectionLabel index="01">About</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 md:mt-16">
            <div
              ref={photoRef}
              className="group relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-t-full bg-paper"
            >
              <motion.div style={{ y: imgY }} className="absolute -inset-y-[10%] inset-x-0">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Ashutosh Dubey"
                  fill
                  sizes="320px"
                  className="object-cover object-top grayscale contrast-[1.05] transition duration-[1400ms] ease-[var(--ease-silk)] group-hover:grayscale-0"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-cobalt/10 mix-blend-multiply transition-opacity duration-[1400ms] group-hover:opacity-0" />
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="md:col-span-8 md:pt-24">
          <p className="font-serif text-[clamp(2rem,4.4vw,4.2rem)] leading-[1.08] tracking-[-0.02em]">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = Math.min(1, start + 1.6 / words.length);
              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </p>

          <Reveal delay={0.1} className="mt-14 md:mt-20">
            <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
              <span
                className="h-1.5 w-1.5 rounded-full bg-cobalt"
                style={{ animation: "pulse-soft 1.6s ease-in-out infinite" }}
              />
              Currently
            </p>
            <ul className="border-t border-line">
              {site.now.map((item) => (
                <li
                  key={item}
                  className="group flex items-center justify-between border-b border-line py-4 font-serif text-2xl tracking-[-0.01em] transition-colors duration-500 hover:text-cobalt md:text-3xl"
                >
                  <span className="transition-transform duration-700 ease-[var(--ease-silk)] group-hover:translate-x-2">
                    {item}
                  </span>
                  <span className="font-sans text-base text-mist transition-all duration-700 ease-[var(--ease-silk)] group-hover:translate-x-1 group-hover:text-cobalt">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
