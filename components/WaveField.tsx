"use client";

import { useEffect, useRef } from "react";

const INK = [16, 18, 22] as const;
const COBALT = [42, 70, 163] as const;
const PORCELAIN = "#f5f3ee";

type Ripple = { x: number; t0: number; strength: number };

const mix = (a: readonly number[], b: readonly number[], t: number) =>
  `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)}, ${Math.round(a[1] + (b[1] - a[1]) * t)}, ${Math.round(a[2] + (b[2] - a[2]) * t)})`;

/**
 * A field of layered signal lines. They breathe in sync, swell as you move
 * across them (the "load"), ripple when you click, and settle back to calm.
 */
export function WaveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LINES = 30;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let load = 0;
    let lastReadout = 0;
    let nextAmbient = 2.2;
    const pointer = { x: -9999, y: -9999, px: 0, py: 0, active: false };
    const ripples: Ripple[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (pointer.active) {
        const speed = Math.hypot(x - pointer.px, y - pointer.py);
        load = Math.min(1, load + speed * 0.0022);
      }
      pointer.px = pointer.x = x;
      pointer.py = pointer.y = y;
      pointer.active = true;
    };

    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY - rect.top > h) return;
      ripples.push({ x: e.clientX - rect.left, t0: performance.now() / 1000, strength: 1 });
      load = Math.min(1, load + 0.25);
    };

    const onLeave = () => {
      pointer.active = false;
      pointer.x = pointer.y = -9999;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      const step = Math.max(5, Math.round(w / 220));
      const top = h * 0.1;
      const span = h * 0.86;
      const loadBoost = 1 + load * 1.7;

      for (let i = 0; i < LINES; i++) {
        const depth = i / (LINES - 1); // 0 far .. 1 near
        const baseY = top + span * depth;
        const amp = (10 + 46 * depth) * loadBoost;

        // how close this line sits to the cursor, vertically
        const dy = baseY - pointer.y;
        const nearY = Math.exp(-(dy * dy) / (2 * 90 * 90));

        ctx.beginPath();
        ctx.moveTo(-step, h + 4);

        for (let x = -step; x <= w + step; x += step) {
          const u = x / w;
          // two travelling waves; the per-line phase shift is what makes it read as rhythm
          let y =
            Math.sin(x * 0.011 + time * 0.9 - i * 0.34) * 0.55 +
            Math.sin(x * 0.027 - time * 1.35 + i * 0.21) * 0.28 +
            Math.sin(x * 0.0045 + time * 0.4) * 0.4;

          // a slow envelope so the field swells in the middle and calms at the edges
          y *= 0.35 + 0.65 * Math.sin(Math.PI * Math.min(1, Math.max(0, u)));

          // cursor pushes the surface up
          const dx = x - pointer.x;
          const bump = Math.exp(-(dx * dx) / (2 * 120 * 120)) * nearY;
          y += bump * (1.4 + load * 1.2);

          // click + ambient ripples
          for (const r of ripples) {
            const age = time - r.t0;
            const dist = Math.abs(x - r.x);
            const front = age * 380;
            const wave = Math.exp(-((dist - front) ** 2) / (2 * 70 * 70));
            y += wave * Math.exp(-age * 0.75) * 1.5 * r.strength * Math.cos((dist - front) * 0.05);
          }

          ctx.lineTo(x, baseY - y * amp * 0.5);
        }

        ctx.lineTo(w + step, h + 4);
        ctx.closePath();

        // fill occludes the lines behind it — gives the field depth
        ctx.fillStyle = PORCELAIN;
        ctx.fill();

        const tint = Math.min(1, load * 0.85 + nearY * 0.9);
        ctx.strokeStyle = mix(INK, COBALT, tint);
        ctx.globalAlpha = 0.28 + 0.62 * depth;
        ctx.lineWidth = 0.8 + depth * 0.7;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const time = now / 1000;

      load *= 0.965; // the system settles
      if (load < 0.002) load = 0;

      // gentle heartbeat when nobody is touching it
      if (time > nextAmbient) {
        ripples.push({ x: w * (0.15 + Math.random() * 0.7), t0: time, strength: 0.55 });
        nextAmbient = time + 4.5 + Math.random() * 2.5;
      }
      while (ripples.length && time - ripples[0].t0 > 5) ripples.shift();

      draw(time);

      if (readoutRef.current && now - lastReadout > 120) {
        lastReadout = now;
        const pct = Math.round(load * 100);
        const sync = (99.99 - load * 6.4).toFixed(1);
        readoutRef.current.textContent =
          pct < 3 ? "steady · move across to add load" : `load ${String(pct).padStart(2, "0")}% · sync ${sync}%`;
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0 });
    io.observe(canvas);

    if (reduced) {
      draw(4);
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[66svh]">
      <div className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_62%,transparent)]">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
      <p className="absolute right-6 top-[76px] font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft md:right-12">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cobalt align-middle" style={{ animation: "pulse-soft 1.6s ease-in-out infinite" }} />
        <span ref={readoutRef}>&nbsp;</span>
      </p>
    </div>
  );
}
