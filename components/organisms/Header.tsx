"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/LanguageContext";
import { LANGUAGES, type Lang } from "@/content/translations";

/* ─── Edirne Kırmızısı Paleti ─── */
const EDIRNE_RED = {
  deep: "#8B1A1A",
  base: "#A0242A",
  warm: "#C0392B",
  glow: "#E74C3C",
};

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  /* ─── Navigation Links ─── */
  const NAV_LINKS = [
    { href: "/", labelKey: "nav.home" },
    { href: "/canvas", labelKey: "nav.experience" },
    { href: "/mekan", labelKey: "nav.mekan" },
  ];

  /* ─── Scroll detection ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── Click outside to close lang dropdown ─── */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ─── Mouse tracking ─── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMouse({ x: -1000, y: -1000 });
  }, []);

  /* ─── Dynamic gradient with spotlight ─── */
  const spotlightRadius = 120;
  const bgGradient = isHovering
    ? `
      radial-gradient(
        circle ${spotlightRadius}px at ${mouse.x}px ${mouse.y}px,
        transparent 0%,
        transparent 40%,
        rgba(139, 26, 26, 0.15) 70%,
        rgba(139, 26, 26, 0.4) 100%
      ),
      linear-gradient(
        135deg,
        ${EDIRNE_RED.deep}ee 0%,
        ${EDIRNE_RED.base}dd 25%,
        ${EDIRNE_RED.warm}cc 55%,
        ${EDIRNE_RED.deep}ee 100%
      )
    `
    : `
      linear-gradient(
        135deg,
        ${EDIRNE_RED.deep}ee 0%,
        ${EDIRNE_RED.base}dd 25%,
        ${EDIRNE_RED.warm}cc 55%,
        ${EDIRNE_RED.deep}ee 100%
      )
    `;

  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? { code: "tr" as Lang, label: "Türkçe", flag: "🇹🇷" };

  return (
    <motion.header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: bgGradient,
        backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
        borderBottom: `1px solid rgba(255,255,255,${scrolled ? 0.08 : 0.05})`,
        transition: "backdrop-filter 0.4s ease",
      }}
    >
      {/* ─── Animated shimmer overlay ─── */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Slow flowing gradient animation */}
        <div
          className="header-shimmer absolute inset-0"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.03) 20%,
              rgba(255,255,255,0.06) 40%,
              transparent 60%,
              rgba(255,255,255,0.04) 80%,
              transparent 100%
            )`,
            backgroundSize: "200% 100%",
            animation: "headerShimmer 8s ease-in-out infinite",
          }}
        />

        {/* Bottom edge glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              ${EDIRNE_RED.glow}40 25%,
              ${EDIRNE_RED.warm}60 50%,
              ${EDIRNE_RED.glow}40 75%,
              transparent 100%
            )`,
          }}
        />
      </div>

      {/* ─── Cursor glow effect ─── */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: `radial-gradient(
                circle 80px at ${mouse.x}px ${mouse.y}px,
                rgba(255,255,255,0.12) 0%,
                rgba(255,255,255,0.04) 50%,
                transparent 100%
              )`,
            }}
          />
        )}
      </AnimatePresence>

      {/* ─── Content ─── */}
      <div className="relative mx-auto flex max-w-scene items-center justify-between px-8 py-4 md:px-16">
        {/* Logo / Brand */}
        <Link href="/" className="group flex items-center gap-3">
          {/* Animated dot */}
          <motion.span
            className="relative inline-block h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: EDIRNE_RED.glow }}
            animate={{
              boxShadow: [
                `0 0 4px ${EDIRNE_RED.glow}60`,
                `0 0 12px ${EDIRNE_RED.glow}90`,
                `0 0 4px ${EDIRNE_RED.glow}60`,
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2"
              >
                <span
                  className={`
                    relative z-10 font-ui text-sm tracking-wide transition-all duration-300
                    ${
                      isActive
                        ? "text-white font-medium"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {t(link.labelKey)}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="headerActiveTab"
                    className="absolute inset-0 rounded-md"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover glow */}
                {!isActive && (
                  <span
                    className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Language Selector + CTA */}
        <div className="flex items-center gap-3">
          {/* ─── Language Selector ─── */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              className="group flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              aria-label="Select language"
              aria-expanded={langOpen}
            >
              <span className="text-sm leading-none">{currentLang.flag}</span>
              <span className="font-ui text-[11px] font-medium uppercase tracking-[0.12em] text-white/80 transition-colors duration-300 group-hover:text-white">
                {currentLang.code}
              </span>
              <svg
                className={`h-3 w-3 text-white/60 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full mt-2 min-w-[160px] overflow-hidden rounded-lg shadow-xl"
                  style={{
                    background: "rgba(60, 15, 15, 0.95)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {LANGUAGES.map((option) => {
                    const isSelected = option.code === lang;
                    return (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => {
                          setLang(option.code);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-all duration-200 ${
                          isSelected
                            ? "bg-white/12 text-white"
                            : "text-white/70 hover:bg-white/8 hover:text-white"
                        }`}
                      >
                        <span className="text-base leading-none">{option.flag}</span>
                        <span className="font-ui text-sm tracking-wide">{option.label}</span>
                        {isSelected && (
                          <svg
                            className="ml-auto h-3.5 w-3.5 text-white/90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Deneyim CTA */}
          <Link
            href="/canvas"
            className="group relative overflow-hidden rounded-full px-5 py-2 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span className="relative z-10 font-ui text-xs font-medium uppercase tracking-[0.15em] text-white/90 transition-colors duration-300 group-hover:text-white">
              {t("nav.cta")}
            </span>
            {/* Hover fill animation */}
            <span
              className="absolute inset-0 -translate-x-full transform transition-transform duration-500 ease-out group-hover:translate-x-0"
              style={{
                background: `linear-gradient(90deg, ${EDIRNE_RED.glow}40, ${EDIRNE_RED.warm}30)`,
              }}
            />
          </Link>
        </div>
      </div>

      {/* ─── CSS Animations ─── */}
      <style jsx global>{`
        @keyframes headerShimmer {
          0% {
            background-position: 200% 0;
          }
          50% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </motion.header>
  );
}
