"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AudioWaveformPlaceholder } from "@/components/atoms/AudioWaveformPlaceholder";
import { Caption } from "@/components/atoms/Caption";
import type { AudioAsset } from "@/types/narrative";

interface AudioPlayerProps {
  asset: AudioAsset;
}

/**
 * asset.src doluysa → gerçek HTML5 <audio>
 * asset.src boşsa   → Figma-grade placeholder (dalga formu + etiket)
 *
 * Ses dosyalarını public/assets/audio/ altına koyun ve
 * content/narratives.ts içindeki asset.src alanını doldurun.
 */
export function AudioPlayer({ asset }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const minutes = Math.floor(asset.durationSec / 60);
  const seconds = (asset.durationSec % 60).toString().padStart(2, "0");

  useEffect(() => {
    if (!asset.src) return;
    const el = audioRef.current;
    if (!el) return;
    if (playing) void el.play().catch(() => setPlaying(false));
    else el.pause();
  }, [playing, asset.src]);

  const toggle = () => setPlaying((p) => !p);

  return (
    <div className="flex flex-col gap-4 border border-ink/10 bg-paper-soft px-6 py-5">
      <div className="flex items-center justify-between">
        <Caption label="Ses Kaydı" />
        <span className="font-ui text-[11px] tracking-[0.2em] text-ink-muted">
          {minutes}:{seconds}
        </span>
      </div>

      <div>
        <h4 className="font-display text-xl leading-snug text-ink">
          {asset.label}
        </h4>
        {asset.description && (
          <p className="mt-1 font-ui text-xs leading-relaxed text-ink-muted">
            {asset.description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-5">
        <motion.button
          type="button"
          onClick={toggle}
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          aria-label={playing ? "Duraklat" : "Oynat"}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/40 bg-paper text-ink transition-colors hover:border-ink"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>

        <div className="flex-1">
          <AudioWaveformPlaceholder tone={playing ? "loud" : "soft"} />
        </div>
      </div>

      {asset.src ? (
        <audio
          ref={audioRef}
          src={asset.src}
          preload="metadata"
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          Placeholder — ses dosyası bekleniyor · public/assets/audio/
        </p>
      )}
    </div>
  );
}
