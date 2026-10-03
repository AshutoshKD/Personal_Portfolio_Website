"use client";

import { useState } from "react";
import { Mask, Reveal } from "./Reveal";
import { links, site } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-6 pb-8 pt-28 text-porcelain md:px-12 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] -top-[20%] h-[80vh] w-[80vh] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(42,70,163,0.55), transparent)", animation: "drift 20s ease-in-out infinite" }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-porcelain/50">
            <span className="text-[#8ea2ec]">06</span>
            <span className="mx-4 inline-block h-px w-10 bg-porcelain/20 align-middle" />
            Contact
          </p>
        </Reveal>

        <h2 className="mt-12 font-serif text-[clamp(4rem,14vw,13rem)] leading-[0.88] tracking-[-0.04em]">
          <Mask>Let&rsquo;s</Mask>
          <Mask delay={0.12}>
            <span className="italic text-[#8ea2ec]">talk.</span>
          </Mask>
        </h2>

        <Reveal delay={0.2} className="mt-16 md:mt-24">
          <div className="flex flex-col gap-6 border-t border-porcelain/15 pt-8 md:flex-row md:items-center md:justify-between">
            <a
              href={`mailto:${site.email}`}
              className="link-line w-fit pb-1 font-serif text-[clamp(1.5rem,3.6vw,3.4rem)] tracking-[-0.02em] break-all"
            >
              {site.email}
            </a>
            <button
              onClick={copy}
              className="w-fit cursor-pointer rounded-full border border-porcelain/25 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 hover:bg-porcelain hover:text-ink"
            >
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-8 border-t border-porcelain/15 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-porcelain/60 md:mt-32 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-line pb-1 text-porcelain transition-opacity hover:opacity-70">
                {l.label} ↗
              </a>
            ))}
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="link-line pb-1 text-porcelain transition-opacity hover:opacity-70">
              Résumé ↗
            </a>
          </div>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </section>
  );
}
