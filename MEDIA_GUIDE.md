# Medya Yerleştirme Rehberi

Tek bakışta: **Hangi dosya nereye gider? Hangi satırı doldurursun?**

---

## 📂 Klasörler

```
public/
└── assets/
    ├── audio/                      ← .mp3 / .wav ses kayıtları
    │   └── README.md
    ├── video/                      ← .mp4 videolar
    │   └── README.md
    └── images/
        ├── archive/                ← Hotspot arşiv fotoğrafları
        │   └── README.md
        └── intro/                  ← Anasayfa/marka görselleri
            └── README.md
```

## 🎯 Dolduracağın tek dosya

Tüm medya referansları [content/narratives.ts](./content/narratives.ts)
içindedir. Her slotun üstünde bir `// EKLE: <path>` yorumu var — o
yorumun hemen altına `src: "<path>"` şeklinde yapıştırmaniz yeterli.

## 🧭 Hotspot → Dosya Haritası

### 🕰️ `clock-tower` — Saat Kulesi

| Tür | Hedef Klasör | Dosya Adı | narratives.ts alanı |
|---|---|---|---|
| 🎙️ Ses | `public/assets/audio/` | `clock-tower-bell.mp3` | `media.audio.src` |
| 🎬 Video | `public/assets/video/` | `clock-tower-mechanism.mp4` | `media.video.src` |
| 🖼️ Foto 1 | `public/assets/images/archive/` | `clock-tower-1918.webp` | `media.photos[0].src` |
| 🖼️ Foto 2 | `public/assets/images/archive/` | `clock-tower-1952.webp` | `media.photos[1].src` |

### 🚂 `last-train` — Son Tren

| Tür | Hedef Klasör | Dosya Adı | narratives.ts alanı |
|---|---|---|---|
| 🎙️ Ses | `public/assets/audio/` | `last-train-platform.mp3` | `media.audio.src` |
| 🎬 Video | `public/assets/video/` | `last-train-platform.mp4` | `media.video.src` |
| 🖼️ Foto 1 | `public/assets/images/archive/` | `platform-morning-1970.webp` | `media.photos[0].src` |
| 🖼️ Foto 2 | `public/assets/images/archive/` | `passengers-1968.webp` | `media.photos[1].src` |
| 🖼️ Foto 3 | `public/assets/images/archive/` | `railway-workers-1969.webp` | `media.photos[2].src` |

### 🎫 `ticket-booth` — Bilet Gişesi

| Tür | Hedef Klasör | Dosya Adı | narratives.ts alanı |
|---|---|---|---|
| 🎙️ Ses | `public/assets/audio/` | `ticket-booth-stamp.mp3` | `media.audio.src` |
| 🖼️ Foto 1 | `public/assets/images/archive/` | `booth-queue-1930.webp` | `media.photos[0].src` |
| 🖼️ Foto 2 | `public/assets/images/archive/` | `ticket-one-way-1923.webp` | `media.photos[1].src` |

### 🏛️ `east-facade` — Doğu Cephesi

| Tür | Hedef Klasör | Dosya Adı | narratives.ts alanı |
|---|---|---|---|
| 🎬 Video | `public/assets/video/` | `east-facade-sunrise.mp4` | `media.video.src` |
| 🖼️ Foto 1 | `public/assets/images/archive/` | `east-facade-2024.webp` | `media.photos[0].src` |
| 🖼️ Foto 2 | `public/assets/images/archive/` | `plaster-aging-2024.webp` | `media.photos[1].src` |

---

## ✍️ Nasıl bağlarsın — 3 Adım

### 1️⃣ Dosyayı klasöre bırak

Örnek:
```
public/assets/audio/clock-tower-bell.mp3
```

### 2️⃣ `content/narratives.ts` dosyasını aç

İlgili `// EKLE:` yorumunu bul. Örnek:

```ts
audio: {
  label: "Saat Çanı, 1963 Kaydı",
  description: "…",
  durationSec: 42,
  // EKLE: "/assets/audio/clock-tower-bell.mp3"
},
```

### 3️⃣ `src` alanını ekle

```ts
audio: {
  label: "Saat Çanı, 1963 Kaydı",
  description: "…",
  durationSec: 42,
  src: "/assets/audio/clock-tower-bell.mp3",  // ← satır eklendi
},
```

✅ **Tarayıcıyı yenile** — placeholder gider, gerçek oynatıcı gelir.

> **Not**: Next.js `public/` altındakini `/` kökünden sunar.
> `public/assets/audio/x.mp3` → `/assets/audio/x.mp3` olarak yazılır.

---

## 📐 Format özeti

| Tür | Format | Ek kısıt |
|---|---|---|
| Ses | `.mp3` (tercih) / `.ogg` / `.wav` | 128–192 kbps, -16 LUFS |
| Video | `.mp4` (H.264 + AAC) | 1280×720, < 10 MB, 15–60 sn |
| Fotoğraf | `.webp` (tercih) / `.jpg` | Uzun kenar ≤ 1600 px |

Detay için her klasörün içindeki README'ye bakınız.

---

## 🪄 Ne değişir, ne değişmez

- ✅ **Değiştirmen gereken tek yer**: `content/narratives.ts`'in ilgili `src:` alanları
- ❌ Bileşen kodlarına (AudioPlayer, VideoFrame, PhotoGallery) dokunmana gerek yok
- ❌ MapContainer / hotspot konumları / sayfa yapısı sabit
- ✅ Dosya adını beğenmezsen değiştir — sadece `src:` içindeki yolu da aynı yazmayı unutma

---

## 🧪 Hızlı test

1. `public/assets/audio/test.mp3` (herhangi bir mp3) koy.
2. `content/narratives.ts`'de `clock-tower.media.audio.src: "/assets/audio/test.mp3"` yap.
3. `http://localhost:3000/canvas` → saat kulesi hotspot'una tıkla.
4. Placeholder waveform kayboldu, play butonu gerçek sesi çalıyor ✅
