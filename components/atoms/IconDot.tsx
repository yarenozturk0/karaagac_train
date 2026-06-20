"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { HotspotCategory } from "@/types/hotspot";

const categoryAccent: Record<HotspotCategory, string> = {
  structure: "bg-brass",
  archive: "bg-meric",
  memory: "bg-ink",
  decision: "bg-brass-soft",
};

interface IconDotProps {
  category: HotspotCategory;
  active?: boolean;
}

export function IconDot({ category, active = false }: IconDotProps) {
  return (
    <span className="relative inline-flex h-3 w-3 items-center justify-center">
      <motion.span
        aria-hidden
        className={clsx(
          "absolute inset-0 rounded-full opacity-30",
          categoryAccent[category],
        )}
        animate={
          active
            ? { scale: [1, 1.9, 1], opacity: [0.35, 0, 0.35] }
            : { scale: 1, opacity: 0.3 }
        }
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />
      <span
        className={clsx(
          "relative h-2 w-2 rounded-full ring-1 ring-paper-soft",
          categoryAccent[category],
        )}
      />
    </span>
  );
}
