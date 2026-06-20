"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconDot } from "@/components/atoms/IconDot";
import { Caption } from "@/components/atoms/Caption";
import type { Hotspot as HotspotData } from "@/types/hotspot";

interface HotspotProps {
  data: HotspotData;
  onSelect: (id: string) => void;
}

/**
 * Hotspot: koordinat uzayındaki (0..1) noktaya yerleşen etkileşim atomu.
 * Hover'da metadata'yı tooltip olarak değil, ambient bir kart olarak
 * kaydırarak ortaya çıkarır — .clinerules: "tooltip değil, ambient reveal".
 */
export function Hotspot({ data, onSelect }: HotspotProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${data.x * 100}%`, top: `${data.y * 100}%` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <button
        type="button"
        onClick={() => onSelect(data.id)}
        aria-label={data.ariaDescription}
        className="group relative flex items-center justify-center rounded-full p-3 outline-none"
      >
        <IconDot category={data.category} active={hovered} />
      </button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            role="presentation"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-6 top-1/2 w-64 -translate-y-1/2 bg-paper-soft/95 px-5 py-4 shadow-[0_2px_20px_-12px_rgba(28,24,22,0.35)] backdrop-blur-sm"
          >
            <Caption label={data.category} />
            <h4 className="mt-2 font-display text-xl leading-tight text-ink">
              {data.title}
            </h4>
            <p className="mt-2 font-ui text-sm leading-relaxed text-ink-soft">
              {data.preview}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
