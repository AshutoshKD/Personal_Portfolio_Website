"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { award, numbers } from "@/lib/data";

function Count({ prefix, value, decimals, suffix }: (typeof numbers)[number]) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span className="font-serif text-[clamp(3.4rem,6.6vw,6.4rem)] leading-none tracking-[-0.04em]">
      {prefix && <span className="mr-2 text-[0.4em] italic text-mist">{prefix}</span>}
      <span ref={ref}>{(0).toFixed(decimals)}</span>
      <span className="italic text-cobalt">{suffix}</span>
    </span>
  );
}

export function Numbers() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="04">In numbers</SectionLabel>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.08}>
              <div className="border-t border-ink pt-6">
                <Count {...n} />
                <p className="mt-5 max-w-[16rem] text-sm leading-snug text-ink-soft">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 md:mt-28">
          <div className="flex flex-col gap-3 border-t border-line pt-8 md:flex-row md:items-baseline md:gap-10">
            <p className="font-serif text-3xl italic tracking-tight md:text-4xl">{award.title}</p>
            <p className="max-w-xl text-ink-soft">{award.detail}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
