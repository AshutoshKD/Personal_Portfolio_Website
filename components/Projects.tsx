"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";

function ProjectVisual({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (src === "animated" || error) {
    return (
      <div className="absolute inset-0 atmosphere flex items-center justify-center">
        <div className="topo-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 text-center px-6">
          <p className="font-display text-3xl font-bold text-[var(--text-primary)] mb-2">Median</p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Publish · Read · Share
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setError(true)}
    />
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-28 md:py-36 px-6 md:px-10 lg:px-16 relative bg-[var(--bg-secondary)]">
      <div className="absolute inset-0 atmosphere opacity-60 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16 md:mb-20"
        >
          <p className="section-label mb-4">02 — Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] max-w-xl">
            Projects built for concurrency and scale
          </h2>
          <div className="rule w-28 mt-6" />
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-4xl font-extrabold text-[var(--text-dim)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    {project.status === "live" ? "Live" : "Source"}
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {project.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)] mb-5">
                  {project.tagline}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{project.description}</p>
                <p className="text-[var(--text-muted)] leading-relaxed mb-6">{project.longDescription}</p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ink-link inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em]"
                >
                  {project.status === "github" ? "View on GitHub" : "Open Project"}
                  <span className="text-[var(--accent)]">→</span>
                </a>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative aspect-[16/10] overflow-hidden border border-[var(--line)] bg-[var(--bg-elevated)] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <ProjectVisual src={project.image} alt={`${project.name} screenshot`} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
