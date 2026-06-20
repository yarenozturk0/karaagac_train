export type HotspotCategory =
  | "structure"   // mimari detay (pencere, saat kulesi, peron)
  | "archive"    // arşiv belgesi / gazete küpürü
  | "memory"     // kişisel/kolektif anı
  | "decision";  // karar anı tetikleyicisi

export interface Hotspot {
  id: string;
  /** Normalize edilmiş koordinatlar (0..1) — SVG viewBox'tan bağımsız yerleşim */
  x: number;
  y: number;
  title: string;
  /** Hover'da görünen kısa önizleme. Tooltip değil — ambient reveal. */
  preview: string;
  category: HotspotCategory;
  /** NarrativePlayer'a geçecek anlatı ID'si */
  narrativeId?: string;
  /** Erişilebilirlik: screen reader için zengin betimleme */
  ariaDescription: string;
}
