"use client";

import clsx from "clsx";
import { VideoFramePlaceholder } from "@/components/atoms/VideoFramePlaceholder";
import { Caption } from "@/components/atoms/Caption";
import type { VideoAsset } from "@/types/narrative";

interface VideoFrameProps {
  asset: VideoAsset;
}

const aspectClass: Record<NonNullable<VideoAsset["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

/**
 * asset.src doluysa → gerçek HTML5 <video>
 * asset.src boşsa   → Figma-grade placeholder çerçevesi
 *
 * Video dosyalarını public/assets/video/ altına koyun.
 */
export function VideoFrame({ asset }: VideoFrameProps) {
  return (
    <figure className="flex flex-col gap-3">
      {asset.src ? (
        <div
          className={clsx(
            "relative w-full overflow-hidden bg-ink",
            aspectClass[asset.aspect ?? "16/9"],
          )}
        >
          <video
            src={asset.src}
            poster={asset.posterSrc}
            controls
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <VideoFramePlaceholder
          aspect={asset.aspect ?? "16/9"}
          label={asset.label}
        />
      )}

      <figcaption className="flex items-start justify-between gap-6">
        <div>
          <Caption label="Video" />
          <h4 className="mt-1 font-display text-lg leading-snug text-ink">
            {asset.label}
          </h4>
          {asset.description && (
            <p className="mt-1 font-ui text-xs leading-relaxed text-ink-muted">
              {asset.description}
            </p>
          )}
        </div>
        {!asset.src && (
          <span className="whitespace-nowrap font-ui text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            public/assets/video/
          </span>
        )}
      </figcaption>
    </figure>
  );
}
