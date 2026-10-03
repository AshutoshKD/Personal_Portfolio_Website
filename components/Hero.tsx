"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mask } from "./Reveal";
import { WaveField } from "./WaveField";
import { site } from "@/lib/data";

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: site.timezone,
      }).format(new Date());
    const first = setTimeout(() => setTime(format()), 0);
    const id = setInterval(() => setTime(format()), 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return <span className="tabular-nums">{time ? `${time} IST` : "\u00A0"}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-10 pt-32 md:px-12">
      <WaveField />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft md:mb-12"
        >
          Portfolio — {new Date().getFullYear()}
        </motion.p>

        <h1 className="font-serif text-[clamp(4.6rem,16.5vw,17rem)] leading-[0.84] tracking-[-0.035em]">
          <Mask inView={false} delay={0.25}>
            {site.first}
          </Mask>
          <Mask inView={false} delay={0.4} className="md:pl-[14vw]">
            <span className="italic text-cobalt">{site.last}</span>
          </Mask>
        </h1>

        <div className="mt-14 grid gap-10 border-t border-line pt-6 md:mt-20 md:grid-cols-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-ink-soft md:col-span-3"
          >
            <p className="text-ink">{site.role}</p>
            <p>
              {site.company} · {site.location.split(",")[0]}
            </p>
            <p className="mt-3 text-mist">
              <LocalTime />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-snug text-ink-soft md:col-span-6 md:col-start-5 md:text-xl"
          >
            {site.intro}
          </motion.p>

          <motion.a
            href="#experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="hidden items-end justify-end gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft md:col-span-2 md:col-start-11 md:flex"
          >
            Scroll
            <span className="relative h-10 w-px overflow-hidden bg-line">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-ink" style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
