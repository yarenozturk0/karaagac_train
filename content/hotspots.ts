import type { Hotspot } from "@/types/hotspot";

/**
 * Hotspot koordinatları bina cephesinin normalize edilmiş (0..1) uzayında.
 * Gerçek drone görüntüsü/SVG planı geldiğinde bu değerler rafine edilir.
 * İçerik kasıtlı olarak placeholder — nihai metinler tarih araştırması
 * ve bina sahipleri (Trakya Üniversitesi) ile teyitten sonra yazılır.
 */
export const hotspots: Hotspot[] = [
  {
    id: "saat-kulesi",
    x: 0.5,
    y: 0.18,
    title: "Saat Kulesi",
    preview: "Zamanı hep ben tuttum. Ama zaman beni tutmadı.",
    category: "structure",
    narrativeId: "clock-tower",
    ariaDescription:
      "Binanın saat kulesine yerleştirilmiş etkileşim noktası. Saat kulesinin hikâyesini açar.",
  },
  {
    id: "ana-peron",
    x: 0.32,
    y: 0.62,
    title: "Ana Peron",
    preview: "1971 kışında son treni buradan uğurladım.",
    category: "memory",
    narrativeId: "last-train",
    ariaDescription:
      "Ana peron üzerinde etkileşim noktası. Son tren anısını açar.",
  },
  {
    id: "bilet-gisesi",
    x: 0.68,
    y: 0.55,
    title: "Bilet Gişesi",
    preview: "Sofya'ya, Selanik'e, Viyana'ya — parmaklarım delik deşikti.",
    category: "archive",
    narrativeId: "ticket-booth",
    ariaDescription:
      "Bilet gişesi üzerinde etkileşim noktası. Rotaların arşivini açar.",
  },
  {
    id: "dogu-cephe",
    x: 0.85,
    y: 0.38,
    title: "Doğu Cephesi",
    preview: "Meriç'ten gelen sabah ışığı, önce benim taşıma değer.",
    category: "structure",
    narrativeId: "east-facade",
    ariaDescription:
      "Doğu cephesi üzerinde etkileşim noktası. Mimari detayları açar.",
  },
  {
    id: "karar-ani",
    x: 0.5,
    y: 0.86,
    title: "Geleceğim",
    preview: "Ben ne olmalıyım? Seçim senin.",
    category: "decision",
    ariaDescription: "Karar anını başlatan etkileşim noktası.",
  },
];
