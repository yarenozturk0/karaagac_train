/**
 * Multimedya varlıklarının kaynak/telif/alt-metin kaydı.
 * Her placeholder nihai varlıkla değiştirilirken bu kayıt güncellenir.
 * Bu dosya hem erişilebilirlik (alt metin), hem de etik şeffaflık
 * (kaynak & telif) için tek doğruluk kaynağıdır.
 */

export interface AssetRecord {
  key: string;
  path: string;
  alt: string;
  source: string;
  license: string;
}

export const assetManifest: AssetRecord[] = [
  {
    key: "gar-cephe-placeholder",
    path: "/assets/images/placeholder-cephe.webp",
    alt: "Edirne Karaağaç Tren Garı'nın ön cephesi — placeholder görsel.",
    source: "placeholder",
    license: "placeholder — nihai görsel ile değiştirilecek",
  },
  {
    key: "soundscape-meric-placeholder",
    path: "/assets/audio/meric-wind-placeholder.mp3",
    alt: "Meriç rüzgârı — atmosferik arka plan sesi (placeholder).",
    source: "placeholder",
    license: "placeholder — orijinal saha kaydı ile değiştirilecek",
  },
];
