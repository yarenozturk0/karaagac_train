"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Caption } from "@/components/atoms/Caption";
import { AudioWaveformPlaceholder } from "@/components/atoms/AudioWaveformPlaceholder";
import { VideoFramePlaceholder } from "@/components/atoms/VideoFramePlaceholder";
import { PhotoFramePlaceholder } from "@/components/atoms/PhotoFramePlaceholder";
import { useLanguage } from "@/hooks/LanguageContext";

export default function IntroPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ============= FULL-PAGE BACKGROUND ============= */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/edirne-gar.jpg"
          alt="Edirne Karaağaç Tren Garı arka plan"
          fill
          className="object-cover scale-[1.15] origin-center"
          sizes="100vw"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="mx-auto flex w-full max-w-scene flex-col gap-32 px-8 py-10 md:px-16 md:py-14">
        {/* ============= HERO ============= */}
        <section className="flex min-h-[85vh] flex-col justify-between gap-20">
          <motion.header
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between"
          >
            <Caption label={t("hero.tag")} />
            <Caption label={t("hero.subtitle")} />
          </motion.header>

          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl md:max-w-2xl md:text-center"
            >
              <Caption label={t("hero.caption")} />
              <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.05] tracking-display-tight text-white drop-shadow-lg">
                {t("hero.heading")}
              </h1>
              <p className="mt-8 max-w-read font-ui text-base leading-relaxed text-white/80 md:text-lg md:mx-auto">
                {t("hero.body")}
              </p>
            </motion.div>
          </div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="grid grid-cols-2 gap-8 border-t border-white/20 pt-6 md:grid-cols-4"
          >
            <div>
              <Caption label={t("stat.location.label")} />
              <p className="mt-2 font-ui text-sm text-white/90">{t("stat.location.value")}</p>
            </div>
            <div>
              <Caption label={t("stat.year.label")} />
              <p className="mt-2 font-ui text-sm text-white/90">{t("stat.year.value")}</p>
            </div>
            <div>
              <Caption label={t("stat.current.label")} />
              <p className="mt-2 font-ui text-sm text-white/90">{t("stat.current.value")}</p>
            </div>
            <div>
              <Caption label={t("stat.narrator.label")} />
              <p className="mt-2 font-ui text-sm text-white/90">{t("stat.narrator.value")}</p>
            </div>
          </motion.footer>
        </section>

        {/* ============= MEDYA ARŞİVİ ÖNİZLEME ============= */}
        <section className="flex flex-col gap-12">
          {/* Video — Fotoğraf önizlemesi */}
          <div className="mx-auto w-full max-w-4xl grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Video slotu */}
            <article className="flex flex-1 flex-col gap-5 border border-white/15 bg-black/30 backdrop-blur-md p-8 rounded-lg">
              <div className="flex items-center justify-between">
                <Caption label={t("media.video.tag")} />
                <span className="font-ui text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {t("media.slot.video")}
                </span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <VideoFramePlaceholder />
              </div>
              <h3 className="font-display text-2xl leading-snug text-white">
                {t("media.video.title")}
              </h3>
              <p className="mt-auto font-ui text-sm leading-relaxed text-white/60">
                {t("media.video.body")}
              </p>
            </article>

            {/* Fotoğraf slotu — carousel */}
            <PhotoCarousel t={t} />
          </div>
        </section>

        {/* ============= SAHNE ÖNİZLEME ============= */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Caption label={t("journey.tag")} />
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-display-tight text-white">
                {t("journey.title")}
              </h2>
            </div>
            <p className="max-w-md font-ui text-sm leading-relaxed text-white/70">
              {t("journey.body")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { step: "01", titleKey: "journey.step1.title", bodyKey: "journey.step1.body" },
              { step: "02", titleKey: "journey.step2.title", bodyKey: "journey.step2.body" },
              { step: "03", titleKey: "journey.step3.title", bodyKey: "journey.step3.body" },
            ].map((s) => (
              <div
                key={s.step}
                className="flex flex-col gap-4 border-t border-white/20 pt-5"
              >
                <span className="font-ui text-[11px] uppercase tracking-[0.25em] text-brass-deep">
                  {s.step}
                </span>
                <h3 className="font-display text-2xl leading-snug text-white">
                  {t(s.titleKey)}
                </h3>
                <p className="font-ui text-sm leading-relaxed text-white/60">
                  {t(s.bodyKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 border-t border-white/20 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-2xl leading-snug text-white/80 md:max-w-md">
              {t("journey.cta.text")}
            </p>
            <Link href="/canvas">
              <Button variant="primary">{t("journey.cta.button")}</Button>
            </Link>
          </div>
        </section>

        {/* ============= ALT BİLGİ ============= */}
        <footer className="flex flex-col gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
          <Caption label={t("footer.copyright")} />
          <Caption label={t("footer.note")} />
        </footer>
      </div>
    </main>
  );
}

/* ─── Photo Carousel Component ─── */
const PHOTOS = [
  { src: "/assets/images/edirne-gar.jpg", caption: "Edirne Karaağaç Tren Garı", year: "Tarihi Gar Binası" },
  { src: "/assets/images/edirne-gar-bina.jpg", caption: "Edirne Gar Binası", year: "İstasyon Cephesi" },
  { src: "/assets/images/lokomotif.jpg", caption: "Buharlı Lokomotif", year: "Karaağaç İstasyonu" },
];

function PhotoCarousel({ t }: { t: (key: string) => string }) {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    setCurrent(index);
    scrollRef.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, []);

  const prev = () => scrollTo(current > 0 ? current - 1 : PHOTOS.length - 1);
  const next = () => scrollTo(current < PHOTOS.length - 1 ? current + 1 : 0);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setCurrent(index);
  }, []);

  return (
    <article className="flex flex-1 flex-col gap-5 border border-white/15 bg-black/30 backdrop-blur-md p-8 rounded-lg">
      <div className="flex items-center justify-between">
        <Caption label={t("media.photo.tag")} />
        <span className="font-ui text-[10px] uppercase tracking-[0.25em] text-white/50">
          {t("media.slot.photo")}
        </span>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-0 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PHOTOS.map((photo, i) => (
            <div key={i} className="w-full flex-shrink-0 snap-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="font-ui text-sm font-medium text-white">{photo.caption}</p>
                  <p className="font-ui text-xs text-white/60">{photo.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white/70 shadow-sm backdrop-blur-sm transition-all hover:bg-white/30 hover:text-white"
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white/70 shadow-sm backdrop-blur-sm transition-all hover:bg-white/30 hover:text-white"
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-brass"
                : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>

      <h3 className="font-display text-2xl leading-snug text-white">
        {t("media.photo.title")}
      </h3>
      <p className="mt-auto font-ui text-sm leading-relaxed text-white/60">
        {t("media.photo.body")}
      </p>
    </article>
  );
}
