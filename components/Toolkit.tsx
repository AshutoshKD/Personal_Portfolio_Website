"use client";

import { Reveal, SectionLabel } from "./Reveal";
import { education, toolkit } from "@/lib/data";

export function Toolkit() {
  return (
    <section className="bg-paper px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="05">Toolkit</SectionLabel>
        </Reveal>

        <div className="mt-14 md:mt-20">
          {toolkit.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.06} y={18}>
              <div className="group grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-8 md:py-9">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors duration-500 group-hover:text-cobalt md:col-span-3 md:pt-3">
                  {row.label}
                </p>
                <p className="font-serif text-[clamp(1.7rem,3.2vw,3rem)] leading-[1.15] tracking-[-0.02em] md:col-span-9">
                  {row.items.map((item, j) => (
                    <span key={item}>
                      {item}
                      {j < row.items.length - 1 && <span className="mx-[0.35em] text-cobalt">·</span>}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.1} y={18}>
            <div className="grid gap-3 border-y border-line py-7 md:grid-cols-12 md:gap-8 md:py-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist md:col-span-3">Education</p>
              <div className="md:col-span-9">
                <p className="font-serif text-[clamp(1.7rem,3.2vw,3rem)] leading-[1.15] tracking-[-0.02em]">
                  {education.degree}
                </p>
                <p className="mt-2 text-ink-soft">
                  {education.school} · {education.period} · GPA {education.gpa}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
