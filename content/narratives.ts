import type { Narrative } from "@/types/narrative";

/**
 * Her medya slotunun `src` alanı boş → ilgili bileşen placeholder gösterir.
 * `src` doldurulduğunda UI otomatik olarak gerçek <audio>/<video>/<img>
 * öğesine geçer. Hedef klasörler:
 *   • Ses       → public/assets/audio/        (README: dosya adı kuralı)
 *   • Video     → public/assets/video/
 *   • Fotoğraf  → public/assets/images/archive/
 *
 * Bu dosyadaki "EKLE:" satırları, dosyayı klasöre koyduktan sonra
 * `src:` olarak yapıştırılacak hedef yolunun şablonudur.
 */
export const narratives: Record<string, Narrative> = {
  "clock-tower": {
    id: "clock-tower",
    title: "Saat Kulesi",
    voice: "building",
    durationSec: 42,
    segments: [
      { startAt: 0, text: "1914'te doğdum. Ustalar benden önce kuleyi diktiler, sonra beni o kulenin yüreğine astılar." },
      { startAt: 14, text: "İlk zillerim Fransızcaydı. Sonra Türkçe öğrendim. Sonra sessizliği." },
      { startAt: 30, text: "Şimdi zamanı tutmuyorum — zamanı anımsatıyorum." },
    ],
    media: {
      audio: {
        label: "Saat Çanı, 1963 Kaydı",
        description: "Kulenin çanının son çalınan saha kaydı (placeholder).",
        durationSec: 42,
        // EKLE: "/assets/audio/clock-tower-bell.mp3"
      },
      video: {
        label: "Saat Kulesi — Dönen Mekanizma",
        description: "İç mekanizmanın slow-motion çekimi burada yer alacak.",
        aspect: "16/9",
        // EKLE: "/assets/video/clock-tower-mechanism.mp4"
        // posterSrc EKLE: "/assets/video/clock-tower-mechanism-poster.jpg"
      },
      photos: [
        {
          caption: "Kulenin ilk yılları",
          year: "c. 1918",
          // EKLE: "/assets/images/archive/clock-tower-1918.webp"
        },
        {
          caption: "Bakım onarımı",
          year: "1952",
          // EKLE: "/assets/images/archive/clock-tower-1952.webp"
        },
      ],
    },
  },

  "last-train": {
    id: "last-train",
    title: "Son Tren",
    voice: "building",
    durationSec: 55,
    segments: [
      { startAt: 0, text: "1971 kışıydı. Kar, ray üstünde daha yumuşak düşer." },
      { startAt: 18, text: "Bir demiryolu işçisi çocuğunu omzunda taşıyordu. Bana el salladılar — sanki ben de yolcuydum." },
      { startAt: 38, text: "O tren bir daha gelmedi. Perondaki kar, o günden beri erimedi içimde." },
    ],
    media: {
      audio: {
        label: "Peron Atmosferi, 1971",
        description: "Son tren kalkışından önceki perondaki fısıltılar (placeholder).",
        durationSec: 55,
        // EKLE: "/assets/audio/last-train-platform.mp3"
      },
      video: {
        label: "Perondan Geçen Son Tren",
        description: "Arşiv görüntüsü veya yeniden canlandırma burada yer alacak.",
        aspect: "16/9",
        // EKLE: "/assets/video/last-train-platform.mp4"
      },
      photos: [
        {
          caption: "Peronda bir kış sabahı",
          year: "c. 1970",
          // EKLE: "/assets/images/archive/platform-morning-1970.webp"
        },
        {
          caption: "Kalkışı bekleyen yolcular",
          year: "1968",
          // EKLE: "/assets/images/archive/passengers-1968.webp"
        },
        {
          caption: "Demiryolu işçileri",
          year: "1969",
          // EKLE: "/assets/images/archive/railway-workers-1969.webp"
        },
      ],
    },
  },

  "ticket-booth": {
    id: "ticket-booth",
    title: "Bilet Gişesi",
    voice: "building",
    durationSec: 38,
    segments: [
      { startAt: 0, text: "Sofya, Selanik, Viyana... isimler bir süre kaldı dilimde, sonra mühre dönüştü." },
      { startAt: 20, text: "Mübadele yılları. Bazı biletler tek yön basıldı. O basımı hâlâ duyarım gece." },
    ],
    media: {
      audio: {
        label: "Gişe Zili ve Damga",
        description: "Mekanik bilet damgasının ritmi (placeholder).",
        durationSec: 38,
        // EKLE: "/assets/audio/ticket-booth-stamp.mp3"
      },
      photos: [
        {
          caption: "Gişe önünde sıra",
          year: "c. 1930",
          // EKLE: "/assets/images/archive/booth-queue-1930.webp"
        },
        {
          caption: "Tek yön bilet",
          year: "1923",
          source: "Mübadele arşivi",
          // EKLE: "/assets/images/archive/ticket-one-way-1923.webp"
        },
      ],
    },
  },

  "east-facade": {
    id: "east-facade",
    title: "Doğu Cephesi",
    voice: "building",
    durationSec: 34,
    segments: [
      { startAt: 0, text: "Meriç'ten gelen sabah ışığı önce benim taşıma değer, sonra içeri girer." },
      { startAt: 16, text: "Bu yüzden doğu cephemdeki sıva, batıdakinden farklı yaşlanır." },
    ],
    media: {
      video: {
        label: "Sabah Işığı — Zaman Sıkıştırması",
        description: "Doğu cephesinde güneşin yükselişi (placeholder).",
        aspect: "16/9",
        // EKLE: "/assets/video/east-facade-sunrise.mp4"
      },
      photos: [
        {
          caption: "Doğu cephesi detay",
          year: "2024",
          // EKLE: "/assets/images/archive/east-facade-2024.webp"
        },
        {
          caption: "Sıva yaşlanması",
          year: "2024",
          // EKLE: "/assets/images/archive/plaster-aging-2024.webp"
        },
      ],
    },
  },
};
