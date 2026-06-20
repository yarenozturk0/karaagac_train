"use client";

import dynamic from "next/dynamic";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/LanguageContext";
import { Place, PLACES, CATEGORY_COLORS } from "@/content/places";

/* ─── Leaflet SSR fix ─── */
const MapView = dynamic(() => import("@/components/organisms/MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-stone-100">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#A0242A] border-t-transparent" />
        <span className="font-ui text-xs uppercase tracking-[0.2em] text-stone-400">Harita Yükleniyor…</span>
      </div>
    </div>
  ),
});

const EDIRNE_RED = { deep: "#8B1A1A", base: "#A0242A", warm: "#C0392B", glow: "#E74C3C" };





/* ══════════════════════════════════════════════════════ */

/* ─── Sesli anlatı metinleri (Türkçe) ─── */
const AUDIO_NARRATIONS: Record<string, string> = {
  "meric-river": "Meriç Nehri sahili. Edirne'nin batı sınırını çizen bu köklü nehir, yüzyıllardır bölgenin tanığı olmuştur. Bisiklet yolları ve gün batımı manzarasıyla huzur dolu bir durak. Sabah saatlerinde kuş gözlemi için ideal.",
  "lozan-monument": "Lozan Anıtı. Bin dokuz yüz yirmi üç yılında imzalanan Lozan Barış Antlaşması ile Karaağaç'ın Türkiye sınırlarına dahil edilmesini simgeleyen bu anıt, tarihin sessiz bir tanığıdır.",
  "lozan-museum": "Milli Mücadele ve Lozan Müzesi. Lozan Barış Antlaşması'na dair belgeler, İsmet İnönü'ye ait eşyalar ve döneme ait tarihi materyaller burada sergilenmektedir. Ücretsiz girişli, rehberli turlar mevcuttur.",
  "train-station": "Tarihi Karaağaç Tren Garı. Bin dokuz yüz on dört yılında inşa edilen bu ikonik gar binası, Osmanlı-Avrupa hattının son durağıydı. Bugün Trakya Üniversitesi'nin kalbinde yaşamaya devam ediyor.",
  "ilhan-koman": "İlhan Koman Heykel ve Resim Müzesi. Ünlü Türk heykeltıraş İlhan Koman'ın muhteşem eserlerinin sergilendiği bu müze, Trakya Üniversitesi yerleşkesi içinde sanatın kucağında yer alıyor.",
  "doga-tarihi-museum": "Trakya Üniversitesi Doğa Tarihi Müzesi. Trakya bölgesinin zengin biyolojik çeşitliliğini keşfedebileceğiniz bu müzede fosiller, mineral koleksiyonları ve yöresel fauna örnekleri sizi karşılıyor.",
  "trakya-campus": "Trakya Üniversitesi Karaağaç Yerleşkesi. Tarihi dokusu ve muhteşem peyzajıyla gerçek bir müze kampüs. Güzel Sanatlar Fakültesi'nin efsanevi binaları, sizi başka bir çağa taşır.",
  "historic-houses": "Tarihi Karaağaç Evleri. Küçük Paris olarak anılan bu semtte, tescilli Osmanlı tarzı ahşap evler ve eski konsolosluk binaları sizi tarihin içine çeker. Her köşede bir hikâye sizi bekliyor.",
  "jandarma-memorial": "Jandarma Şehitliği. Bölgenin tarihi önemiyle derin bir bağı olan bu anıt alan, saygıyla ziyaret edilmesi gereken manevi bir mekândır.",
};

export default function RoutePage() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<Place["category"] | "all">("all");
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const listRef = useRef<HTMLDivElement>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const filtered = filter === "all" ? PLACES : PLACES.filter((p) => p.category === filter);
  const activePlace = PLACES.find((p) => p.id === activeId) ?? null;
  const totalMin = PLACES.reduce((s, p) => s + p.durationMin, 0);

  /* Konuşmayı durdur */
  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setPlayingId(null);
  }, []);

  /* Sesli anlatı başlat */
  const speak = useCallback((placeId: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const text = AUDIO_NARRATIONS[placeId];
    if (!text) return;

    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "tr-TR";
    utter.rate = 0.92;
    utter.pitch = 1.05;
    utter.volume = 1;

    // Türkçe ses varsa seç
    const voices = window.speechSynthesis.getVoices();
    const trVoice = voices.find((v) => v.lang.startsWith("tr"));
    if (trVoice) utter.voice = trVoice;

    utter.onstart = () => setPlayingId(placeId);
    utter.onend = () => setPlayingId(null);
    utter.onerror = () => setPlayingId(null);

    utteranceRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, []);

  /* Kart seçilince ses başlat */
  const handleSelect = useCallback((id: string | null) => {
    if (id === null) {
      stopSpeech();
      setActiveId(null);
      return;
    }
    setActiveId(id);
    speak(id);
  }, [speak, stopSpeech]);

  /* Sayfa kapanınca durdur */
  useEffect(() => {
    return () => stopSpeech();
  }, [stopSpeech]);

  /* Seçilen kart görünür alana kaydır */
  useEffect(() => {
    if (activeId && cardRefs.current[activeId]) {
      cardRefs.current[activeId]!.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeId]);

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
      {/* ── Top bar ── */}
      <div
        className="relative z-20 shrink-0"
        style={{
          background: `linear-gradient(135deg, ${EDIRNE_RED.deep} 0%, ${EDIRNE_RED.base} 60%, ${EDIRNE_RED.warm}cc 100%)`,
        }}
      >
        {/* shimmer overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,0.02) 40px,rgba(255,255,255,0.02) 80px)`,
          }}
        />
        <div className="relative mx-auto flex max-w-full items-center justify-between px-6 py-3 md:px-10">
          {/* Left */}
          <div className="flex items-center gap-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-white/40 transition-all duration-300 group-hover:w-10 group-hover:bg-white/80" />
              <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-white/70 group-hover:text-white transition-colors">
                {t("route.back")}
              </span>
            </Link>
            <span className="h-4 w-px bg-white/20" />
            <span className="font-display text-sm font-medium text-white">
              {t("route.title")}
            </span>
          </div>

          {/* Stats */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="text-center">
              <span className="font-display text-xl font-semibold text-white">{PLACES.length}</span>
              <span className="ml-1 font-ui text-[10px] uppercase tracking-[0.2em] text-white/50">
                {t("route.stops")}
              </span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-center">
              <span className="font-display text-xl font-semibold text-white">
                ~{Math.floor(totalMin / 60)}{t("route.hours")}{totalMin % 60 > 0 ? `${totalMin % 60}${t("route.min")}` : ""}
              </span>
              <span className="ml-1 font-ui text-[10px] uppercase tracking-[0.2em] text-white/50">
                {t("route.total")}
              </span>
            </div>

          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5">
            {(["all", "museum", "landmark", "nature", "culture"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-3 py-1 font-ui text-[10px] uppercase tracking-[0.15em] transition-all duration-200 ${
                  filter === cat
                    ? "bg-white text-[#8B1A1A] font-semibold shadow-sm"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {t(`route.filter.${cat}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main: Map + Sidebar ── */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* ── LEFT: Interactive Map ── */}
        <div className="relative flex-1">
          <MapView
            places={filtered}
            activeId={activeId}
            playingId={playingId}
            onSelect={handleSelect}
          />

          {/* Kategori legend */}
          <div className="absolute bottom-4 left-4 z-[999] rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
            <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2">{t("route.categoryLabel")}</p>
            <div className="flex flex-col gap-1.5">
              {(["museum", "landmark", "nature", "culture"] as const).map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[cat] }} />
                  <span className="font-ui text-[11px] text-stone-600">{t(`route.filter.${cat}`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Floating Audio Player ── */}
          <AnimatePresence>
            {playingId && (() => {
              const pl = PLACES.find((p) => p.id === playingId);
              if (!pl) return null;
              const col = CATEGORY_COLORS[pl.category];
              return (
                <motion.div
                  key="audio-bar"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 80, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute bottom-4 right-4 z-[1000] flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${col}f0, ${col}cc)`, backdropFilter: "blur(12px)" }}
                >
                  {/* Ses dalgası animasyonu */}
                  <div className="flex items-end gap-0.5" style={{ height: "20px" }}>
                    {[1,2,3,4,3,2,1].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          width: "3px",
                          height: `${h * 4}px`,
                          background: "white",
                          borderRadius: "2px",
                          animation: `audioWave 0.8s ease-in-out ${i * 0.1}s infinite alternate`,
                        }}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-ui text-[9px] uppercase tracking-[0.18em] text-white/70">{t("route.audioNarrative")}</p>
                    <p className="font-ui text-[12px] font-semibold text-white leading-tight">{t(pl.titleKey)}</p>
                  </div>
                  <button
                    onClick={stopSpeech}
                    className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors text-xs"
                    title={t("route.stopAudio")}
                  >
                    ✕
                  </button>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          {/* CSS animasyonları */}
          <style>{`
            @keyframes audioWave {
              from { transform: scaleY(0.4); }
              to   { transform: scaleY(1.6); }
            }
          `}</style>
        </div>

        {/* ── RIGHT: Place List Sidebar ── */}
        <div
          ref={listRef}
          className="relative z-10 flex w-[380px] shrink-0 flex-col overflow-y-auto bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.06)]"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#e0d8d0 transparent" }}
        >
          {/* Sidebar header */}
          <div className="sticky top-0 z-10 border-b border-stone-100 bg-white/95 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-stone-400">
                {filtered.length} {t("route.placesCount")}
              </p>
              {activeId && (
                <button
                  onClick={() => setActiveId(null)}
                  className="font-ui text-[10px] uppercase tracking-[0.15em] text-stone-400 hover:text-stone-700 transition-colors"
                >
                  {t("route.clear")} ✕
                </button>
              )}
            </div>
            {/* Mini route line */}
            <div className="mt-3 flex items-center gap-1 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
              {filtered.map((p, i) => (
                <div key={p.id} className="flex shrink-0 items-center">
                  <button
                    onClick={() => handleSelect(p.id)}
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold transition-all duration-200 ${
                      activeId === p.id
                        ? "scale-125 text-white shadow-md"
                        : "text-white/90 hover:scale-110"
                    } ${playingId === p.id ? "ring-2 ring-white ring-offset-1" : ""}`}
                    style={{
                      backgroundColor:
                        activeId === p.id
                          ? CATEGORY_COLORS[p.category]
                          : CATEGORY_COLORS[p.category] + "bb",
                    }}
                    title={t(p.titleKey)}
                  >
                    {playingId === p.id ? "♪" : PLACES.findIndex((x) => x.id === p.id) + 1}
                  </button>
                  {i < filtered.length - 1 && (
                    <div className="h-px w-3 bg-stone-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Place cards */}
          <div className="flex flex-col divide-y divide-stone-50">
            {filtered.map((place) => {
              const isActive = activeId === place.id;
              const globalIdx = PLACES.findIndex((p) => p.id === place.id);
              const catColor = CATEGORY_COLORS[place.category];

              return (
                <article
                  key={place.id}
                  ref={(el) => { cardRefs.current[place.id] = el; }}
                  onClick={() => handleSelect(isActive ? null : place.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive ? "bg-stone-50" : "bg-white hover:bg-stone-50/60"
                  }`}
                >
                  <div className="relative px-5 py-4">
                    {/* Active left bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-r-sm transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                      style={{ backgroundColor: catColor }}
                    />

                    <div className="flex items-start gap-3">
                      {/* Number + icon — tıklanabilir ses butonu */}
                      <div className="shrink-0">
                        <button
                          onClick={(e) => { e.stopPropagation(); playingId === place.id ? stopSpeech() : speak(place.id); }}
                          className={`flex h-10 w-10 flex-col items-center justify-center rounded-xl transition-all duration-300 ${isActive ? "scale-110" : ""} group relative`}
                          style={{
                            backgroundColor: catColor + (playingId === place.id ? "28" : "12"),
                            border: `1.5px solid ${catColor}${isActive ? "50" : "20"}`,
                          }}
                          title={t("route.audioIntro")}
                        >
                          {playingId === place.id ? (
                            <>
                              <span className="text-[10px]" style={{ color: catColor }}>■</span>
                              <span className="font-ui text-[7px] font-bold" style={{ color: catColor }}>{t("route.stop")}</span>
                            </>
                          ) : (
                            <>
                              <span className="text-base leading-none">{place.icon}</span>
                              <span className="font-ui text-[8px] font-bold" style={{ color: catColor }}>
                                {String(globalIdx + 1).padStart(2, "0")}
                              </span>
                              {/* hover: ses simgesi */}
                              <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity text-base">
                                🔊
                              </span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span
                              className="font-ui text-[9px] font-semibold uppercase tracking-[0.18em]"
                              style={{ color: catColor }}
                            >
                              {globalIdx + 1}. {t("route.stopSingle")}
                            </span>
                            <h3 className="font-display text-[15px] font-medium leading-snug text-stone-800">
                              {t(place.titleKey)}
                            </h3>
                          </div>
                          <span className="shrink-0 font-ui text-[10px] text-stone-400 mt-0.5">
                            ~{place.durationMin} dk
                          </span>
                        </div>

                        {!isActive && (
                          <p className="mt-1 line-clamp-2 font-ui text-xs leading-relaxed text-stone-500">
                            {t(place.descKey)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Expanded detail */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 ml-13 pl-0">
                            {/* Photo */}
                            {place.image && (
                              <div className="mb-3 overflow-hidden rounded-lg">
                                <div className="relative aspect-[16/9] w-full">
                                  <Image
                                    src={place.image}
                                    alt={t(place.titleKey)}
                                    fill
                                    className="object-cover"
                                    sizes="340px"
                                  />
                                </div>
                              </div>
                            )}

                            <p className="font-ui text-xs leading-relaxed text-stone-600 mb-3">
                              {t(place.descKey)}
                            </p>

                            {/* Best time */}
                            <div className="mb-3 flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-100 px-3 py-2">
                              <span className="text-sm">🕐</span>
                              <div>
                                <p className="font-ui text-[9px] uppercase tracking-[0.15em] text-amber-600">
                                  {t("route.bestTimeLabel")}
                                </p>
                                <p className="font-ui text-xs font-medium text-amber-800">
                                  {t(place.bestTimeKey)}
                                </p>
                              </div>
                            </div>

                            {/* Tips */}
                            <div className="mb-4">
                              <p className="mb-1.5 font-ui text-[9px] uppercase tracking-[0.15em] text-stone-400">
                                🧭 {t("route.tipsLabel")}
                              </p>
                              <ul className="space-y-1">
                                {place.tipKeys.map((tipKey, ti) => (
                                  <li key={ti} className="flex items-start gap-1.5">
                                    <span
                                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                      style={{ backgroundColor: catColor }}
                                    />
                                    <span className="font-ui text-[11px] leading-relaxed text-stone-600">
                                      {t(tipKey)}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Map link */}
                            <a
                              href={`https://www.google.com/maps?q=${place.coords.lat},${place.coords.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 font-ui text-[10px] uppercase tracking-[0.12em] transition-all duration-200 hover:shadow-sm"
                              style={{
                                borderColor: catColor + "40",
                                color: catColor,
                                backgroundColor: catColor + "08",
                              }}
                            >
                              📍 {t("route.viewMap")}
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Sidebar footer */}
          <div className="shrink-0 border-t border-stone-100 px-5 py-4">
            <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-stone-400 text-center">
              🌊 {t("route.footerHint")}
            </p>
            <div className="mt-3 text-center">
              <Link
                href="/"
                className="font-ui text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-stone-700 transition-colors"
              >
                ← {t("route.summary.cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
