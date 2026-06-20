"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface VideoFramePlaceholderProps {
  aspect?: "16/9" | "4/3" | "1/1";
  label?: string;
}

const aspectClass: Record<NonNullable<VideoFramePlaceholderProps["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

/**
 * Video kaynağı gelene kadar yerini tutan, Figma tarzı
 * "hazır tasarım bölgesi". İçerik manifest'te src doldurulunca
 * bu bileşen <video> ile değiştirilir.
 */
export function VideoFramePlaceholder({
  aspect = "16/9",
  label = "Video",
}: VideoFramePlaceholderProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "group relative w-full overflow-hidden bg-paper-deep/60",
        aspectClass[aspect],
      )}
    >
      {/* Arşiv şeridi dokusu */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full text-ink/10"
        viewBox="0 0 400 225"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="film-strip" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="transparent" />
            <circle cx="6" cy="6" r="0.8" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="400" height="225" fill="url(#film-strip)" />
        <rect x="0" y="0" width="400" height="18" fill="currentColor" fillOpacity="0.35" />
        <rect x="0" y="207" width="400" height="18" fill="currentColor" fillOpacity="0.35" />
      </svg>

      {/* Play işareti */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-ink/40 bg-paper-soft/80 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-ink">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Köşe etiketleri — Figma-grade meta */}
      <div className="absolute left-4 top-4 flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.25em] text-ink-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass" />
        {label}
      </div>
      <div className="absolute right-4 top-4 font-ui text-[10px] uppercase tracking-[0.25em] text-ink-muted">
        {aspect}
      </div>
      <div className="absolute bottom-4 left-4 font-ui text-[10px] uppercase tracking-[0.25em] text-ink-muted">
        Video slot — içerik bekleniyor
      </div>
    </motion.div>
  );
}
