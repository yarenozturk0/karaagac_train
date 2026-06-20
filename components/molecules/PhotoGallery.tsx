"use client";

import { motion } from "framer-motion";
import { PhotoFramePlaceholder } from "@/components/atoms/PhotoFramePlaceholder";
import { Caption } from "@/components/atoms/Caption";
import type { PhotoAsset } from "@/types/narrative";

interface PhotoGalleryProps {
  photos: PhotoAsset[];
}

/**
 * Her fotoğraf için: src doluysa → gerçek <img>, boşsa → placeholder.
 * Fotoğrafları public/assets/images/archive/ altına koyun.
 */
export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between">
        <Caption label="Arşiv Fotoğrafları" />
        <span className="font-ui text-[11px] tracking-[0.2em] text-ink-muted">
          {photos.length.toString().padStart(2, "0")} kare
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {photos.map((p, i) =>
          p.src ? (
            <PhotoCard key={`${p.caption}-${i}`} photo={p} />
          ) : (
            <PhotoFramePlaceholder
              key={`${p.caption}-${i}`}
              caption={p.caption}
              year={p.year}
              seed={i + 1}
            />
          ),
        )}
      </div>
    </div>
  );
}

function PhotoCard({ photo }: { photo: PhotoAsset }) {
  return (
    <motion.figure
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.caption}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {photo.year && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-paper-soft/90 px-3 py-2 font-ui text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            <span>Arşiv</span>
            <span>{photo.year}</span>
          </div>
        )}
      </div>
      <figcaption className="font-ui text-xs leading-relaxed text-ink-soft">
        {photo.caption}
        {photo.source && (
          <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            {photo.source}
          </span>
        )}
      </figcaption>
    </motion.figure>
  );
}
