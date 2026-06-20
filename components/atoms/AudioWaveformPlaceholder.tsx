"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface AudioWaveformPlaceholderProps {
  /** Dalga formunun renk şiddeti — "loud" interaksiyon için, "soft" arşiv için */
  tone?: "loud" | "soft";
  bars?: number;
}

/**
 * Saha ses kaydı gelene kadar yerini tutan, Figma stili dalga formu.
 * Deterministik (Math.random yok) — SSR/CSR arası farklılık üretmez.
 */
export function AudioWaveformPlaceholder({
  tone = "soft",
  bars = 48,
}: AudioWaveformPlaceholderProps) {
  const heights = useMemo(() => {
    return Array.from({ length: bars }, (_, i) => {
      const v = Math.sin(i * 0.4) * 0.4 + Math.sin(i * 0.17) * 0.35 + 0.5;
      return Math.max(0.12, Math.min(0.96, v));
    });
  }, [bars]);

  const color = tone === "loud" ? "bg-ink" : "bg-ink/40";

  return (
    <div className="flex h-16 w-full items-center gap-[3px]">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`block w-[3px] rounded-full ${color}`}
          initial={{ scaleY: 0.3, opacity: 0.6 }}
          animate={{ scaleY: h, opacity: 0.9 }}
          transition={{
            duration: 0.9,
            delay: i * 0.012,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ height: "100%", transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}
