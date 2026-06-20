"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface PhotoFramePlaceholderProps {
  caption: string;
  year?: string;
  /** Sepya/siyah-beyaz/kağıdı için ton — arşiv zamanına göre */
  tone?: "archive" | "present";
  /** Stabil "imge" hissi için bir seed — iki placeholder aynı görünmesin */
  seed?: number;
}

/**
 * Arşiv fotoğrafı gelene kadar yerini tutan, deterministik bir
 * soyut kompozisyon. Gerçek görsel src verildiğinde değiştirilir.
 */
export function PhotoFramePlaceholder({
  caption,
  year,
  tone = "archive",
  seed = 0,
}: PhotoFramePlaceholderProps) {
  const shapes = useMemo(() => {
    const rng = mulberry32(seed + 1);
    return Array.from({ length: 4 }, () => ({
      x: 10 + rng() * 70,
      y: 10 + rng() * 70,
      r: 10 + rng() * 40,
      o: 0.08 + rng() * 0.18,
    }));
  }, [seed]);

  const frameTone = tone === "archive" ? "bg-[#E6D8BD]" : "bg-paper-deep";
  const inkTone = tone === "archive" ? "text-ink/60" : "text-ink/80";

  return (
    <motion.figure
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3"
    >
      <div className={`relative aspect-[4/5] w-full overflow-hidden ${frameTone}`}>
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className={`h-full w-full ${inkTone}`}
        >
          {shapes.map((s, i) => (
            <circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="currentColor"
              fillOpacity={s.o}
            />
          ))}
          {/* Arşiv çerçevesi — solmuş kenar */}
          <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 font-ui text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          <span>Fotoğraf slotu</span>
          {year && <span>{year}</span>}
        </div>
      </div>
      <figcaption className="font-ui text-xs leading-relaxed text-ink-soft">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

/** Deterministik PRNG — SSR hydration uyumu için Math.random yerine */
function mulberry32(seed: number) {
  let a = seed | 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
