# public/assets/audio/

Ses kayıtları buraya gelir. Dosyaları eklemeniz yeterli — [content/narratives.ts](../../../content/narratives.ts)
içindeki `media.audio.src` alanına ilgili yolu yazdığınızda UI otomatik olarak
placeholder yerine gerçek `<audio>` öğesini oynatır.

## Beklenen dosyalar (şu an `src` boş)

| Hotspot / Anlatı | Dosya adı (önerilen) | Süre | Açıklama |
|---|---|---|---|
| `clock-tower` — Saat Kulesi | `clock-tower-bell.mp3` | 42s | Kulenin çan kaydı |
| `last-train` — Son Tren | `last-train-platform.mp3` | 55s | Peron atmosferi, 1971 |
| `ticket-booth` — Bilet Gişesi | `ticket-booth-stamp.mp3` | 38s | Damga ritmi |

## Atmosferik / genel sesler (opsiyonel)

| Amaç | Dosya adı (önerilen) |
|---|---|
| Arka plan soundscape (intro) | `soundscape-meric.mp3` |
| Klik mikro-etkileşim | `ui-tap.wav` |

## Format gereksinimleri

- **Format**: `.mp3` (tercih) veya `.ogg` / `.wav`
- **Bit rate**: 128–192 kbps (diyalog için 96 kbps yeter)
- **Kanal**: Mono (saha kayıtları) veya stereo (atmosferik)
- **Loudness**: -16 LUFS civarı (web için normalize)
- **Dosya adı**: küçük harf, tire, ASCII — `clock-tower-bell.mp3` ✅ `Saat Kulesi.mp3` ❌

## Dosyayı ekledikten sonra

1. Dosyayı bu klasöre koyun.
2. [content/narratives.ts](../../../content/narratives.ts) açın, ilgili
   hotspot'un `media.audio.src` alanına `"/assets/audio/clock-tower-bell.mp3"`
   yazın (public prefix'i kaldırılır, yol `/assets/` ile başlar).
3. Tarayıcıyı yenileyin — placeholder dalga formu yerini gerçek oynatıcıya bırakır.
