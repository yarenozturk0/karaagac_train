"use client";

import { useEffect, useState } from "react";

/**
 * Kullanıcının işletim sistemi düzeyinde "azaltılmış hareket" tercihini
 * okur. Framer Motion'un kendi `useReducedMotion`'ı da mevcut, ancak
 * projenin CSS/SVG animasyonları (IconDot pulse, hatched patterns) için
 * aynı bilgiyi UI katmanında da referans alabilmek gerekiyor.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return reduced;
}
