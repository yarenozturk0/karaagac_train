"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Caption } from "@/components/atoms/Caption";
import { AudioPlayer } from "@/components/molecules/AudioPlayer";
import { VideoFrame } from "@/components/molecules/VideoFrame";
import { PhotoGallery } from "@/components/molecules/PhotoGallery";
import type { Narrative } from "@/types/narrative";
import { useLanguage } from "@/hooks/LanguageContext";

interface NarrativePlayerProps {
  narrative: Narrative;
  onClose: () => void;
  onNext?: () => void;
}

/**
 * Hotspot seçildiğinde sağdan kayan panelde açılan tam anlatı sahnesi.
 * Dört blok: (1) başlık/meta, (2) binanın monologu, (3) medya bölgeleri
 * (ses + video + fotoğraf galerisi), (4) alt aksiyon şeridi.
 *
 * Medya src alanları boşken, her bileşen kendi Figma-grade placeholder'ını
 * gösterir — nihai içerik geldiğinde data güncellenir, UI değişmez.
 */
export function NarrativePlayer({
  narrative,
  onClose,
  onNext,
}: NarrativePlayerProps) {
  const m = narrative.media;
  const { t } = useLanguage();

  return (
    <motion.aside
      role="dialog"
      aria-label={`${narrative.title} anlatısı`}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[720px] flex-col bg-paper-soft shadow-[-30px_0_60px_-30px_rgba(28,24,22,0.35)]"
    >
      {/* Üst şerit — kapat + meta */}
      <header className="flex items-center justify-between border-b border-ink/10 px-10 py-6">
        <button
          type="button"
          onClick={onClose}
          className="group inline-flex items-center gap-3 font-ui text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink"
        >
          <span className="inline-block h-px w-6 bg-ink/30 transition-all duration-300 group-hover:w-10 group-hover:bg-ink" />
          {t("narrative.back")}
        </button>
        <span className="font-ui text-[11px] uppercase tracking-[0.25em] text-ink-muted">
          Anlatı · {Math.floor(narrative.durationSec / 60)}:
          {(narrative.durationSec % 60).toString().padStart(2, "0")}
        </span>
      </header>

      {/* İçerik — scroll edilebilir */}
      <div className="flex-1 overflow-y-auto px-10 py-10">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Caption label={`Bölüm · ${narrative.id}`} />
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.2vw,3.25rem)] font-medium leading-[1.05] tracking-display-tight text-ink">
            {narrative.title}
          </h2>
          <p className="mt-3 font-ui text-xs uppercase tracking-[0.25em] text-ink-muted">
            {t("narrative.voice")}
          </p>
        </motion.section>

        {/* Bina monologu */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-5 border-l border-brass/50 pl-6"
        >
          {narrative.segments.map((seg, i) => (
            <p
              key={i}
              className="font-display text-[1.35rem] leading-[1.5] text-ink-soft"
            >
              {seg.text}
            </p>
          ))}
        </motion.section>

        {/* Medya bölgeleri */}
        {m && (
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex flex-col gap-10"
          >
            <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
              <Caption label={t("narrative.mediaLayer")} />
              <span className="font-ui text-[11px] tracking-[0.2em] text-ink-muted">
                {[m.audio, m.video, m.photos?.length].filter(Boolean).length} slot
              </span>
            </div>

            {m.audio && <AudioPlayer asset={m.audio} />}
            {m.video && <VideoFrame asset={m.video} />}
            {m.photos && m.photos.length > 0 && (
              <PhotoGallery photos={m.photos} />
            )}
          </motion.section>
        )}
      </div>

      {/* Alt aksiyon şeridi */}
      <footer className="flex items-center justify-between border-t border-ink/10 px-10 py-6">
        <Button variant="ghost" onClick={onClose}>
          {t("narrative.backToMap")}
        </Button>
        {onNext && (
          <Button variant="primary" onClick={onNext}>
            {t("narrative.next")}
          </Button>
        )}
      </footer>
    </motion.aside>
  );
}
