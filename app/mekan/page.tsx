"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/LanguageContext";
import { Caption } from "@/components/atoms/Caption";

const PLACES_COUNT = 9;

export default function MekanlarPage() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Helper to get tips for a place
  const getTips = (placeIndex: number) => {
    const tips = [];
    for (let i = 0; i < 3; i++) {
      const tip = t(`route.place${placeIndex}.tips.${i}`);
      // If the translation key is returned (meaning no translation exists), ignore it
      if (tip && !tip.includes(`route.place`)) {
        tips.push(tip);
      }
    }
    return tips;
  };

  return (
    <main className="min-h-screen bg-ink pt-32 pb-24">
      {/* Background glow effect */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brass-deep/10 via-ink to-ink" />

      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <header className="mb-20 text-center">
          <Caption label={t("nav.mekan")} className="mx-auto" />
          <h1 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-tight tracking-display-tight text-white drop-shadow-md">
            {t("route.title")}
          </h1>
          <p className="mt-6 mx-auto max-w-2xl font-ui text-base md:text-lg leading-relaxed text-white/70">
            {t("route.body")}
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {Array.from({ length: PLACES_COUNT }).map((_, i) => {
            const index = i + 1;
            const isExpanded = expandedId === index;
            const tips = getTips(index);
            const bestTime = t(`route.place${index}.bestTime`);

            return (
              <motion.div
                key={index}
                layout
                onClick={() => setExpandedId(isExpanded ? null : index)}
                className={`cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? "border-white/20 bg-white/10 shadow-lg"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between p-6 md:p-8">
                  <div className="flex items-center gap-6 md:gap-8">
                    <span className="font-display text-2xl font-light text-brass-soft/80 md:text-3xl">
                      0{index}
                    </span>
                    <h2 className="font-display text-xl leading-snug text-white md:text-2xl">
                      {t(`route.place${index}.title`)}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-8 pt-2 md:px-8 md:pl-[6.5rem]">
                        <div className="h-px w-full bg-white/10 mb-8" />
                        <p className="font-ui text-base md:text-lg leading-relaxed text-white/90">
                          {t(`route.place${index}.desc`)}
                        </p>
                        
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                          {bestTime && !bestTime.includes("route.place") && (
                            <div className="flex flex-col gap-3">
                              <Caption label={t("route.bestTimeLabel")} className="text-white/50" />
                              <p className="font-ui text-sm text-white/80">
                                {bestTime}
                              </p>
                            </div>
                          )}
                          
                          {tips.length > 0 && (
                            <div className="flex flex-col gap-3">
                              <Caption label={t("route.tipsLabel")} className="text-white/50" />
                              <ul className="flex flex-col gap-2.5">
                                {tips.map((tip, idx) => (
                                  <li key={idx} className="flex items-start gap-3 font-ui text-sm text-white/80">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-soft" />
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
