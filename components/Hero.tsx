"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mask } from "./Reveal";
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

/** A hand-drawn ink circle (ensō) that draws itself, then breathes with the cursor. */
function Enso() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  const x = useTransform(sx, (v) => v * 26);
  const y = useTransform(sy, (v) => v * 26);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  const draw = (delay: number, duration: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration, delay, ease: [0.65, 0, 0.35, 1] as const },
      opacity: { duration: 0.2, delay },
    },
  });

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none absolute -right-[12vw] top-[7vh] w-[min(88vw,760px)] md:-right-[2vw] md:top-[9vh]"
    >
      <svg viewBox="0 0 600 600" className="h-auto w-full overflow-visible text-ink">
        <defs>
          <filter id="brush" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="16" />
          </filter>
          <filter id="dry" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="g" />
            <feDisplacementMap in="SourceGraphic" in2="g" scale="5" />
          </filter>
        </defs>
        <g filter="url(#brush)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d="M 452 108 C 566 188 590 366 478 470 C 368 572 160 560 92 402 C 28 252 128 78 304 56 C 392 46 462 78 498 128"
            strokeWidth={34}
            {...draw(0.5, 2.4)}
          />
          <g filter="url(#dry)" opacity={0.55}>
            <motion.path
              d="M 440 100 C 560 176 584 372 470 478 C 360 578 150 566 80 402 C 14 250 124 66 304 44"
              strokeWidth={13}
              {...draw(0.55, 2.3)}
            />
          </g>
        </g>
        {/* the seal */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "532px 540px" }}
        >
          <rect x="500" y="508" width="64" height="64" rx="4" fill="#2a46a3" />
          <text
            x="532"
            y="553"
            textAnchor="middle"
            fontSize="38"
            fill="#f5f3ee"
            style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic" }}
          >
            AD
          </text>
        </motion.g>
      </svg>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-10 pt-32 md:px-12">
      {/* soft glaze */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] top-[12%] h-[70vh] w-[70vh] rounded-full opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(42,70,163,0.13), transparent)",
          animation: "drift 18s ease-in-out infinite",
        }}
      />
      <Enso />

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
