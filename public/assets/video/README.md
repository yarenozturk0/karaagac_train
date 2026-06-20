# public/assets/video/

Video dosyaları buraya gelir. [content/narratives.ts](../../../content/narratives.ts)
içindeki `media.video.src` dolduğunda UI otomatik olarak placeholder çerçeveyi
gerçek `<video>` öğesiyle değiştirir.

## Beklenen dosyalar (şu an `src` boş)

| Hotspot / Anlatı | Dosya adı (önerilen) | Aspect | Açıklama |
|---|---|---|---|
| `clock-tower` — Saat Kulesi | `clock-tower-mechanism.mp4` | 16/9 | Saat mekanizması slow-motion |
| `last-train` — Son Tren | `last-train-platform.mp4` | 16/9 | Arşiv veya yeniden canlandırma |
| `east-facade` — Doğu Cephesi | `east-facade-sunrise.mp4` | 16/9 | Güneşin yükselişi — zaman sıkıştırması |

## Opsiyonel

| Amaç | Dosya adı (önerilen) |
|---|---|
| Hotspot hover mikro-video | `teaser-<hotspot-id>.mp4` |
| Intro arka plan (muted loop) | `intro-loop.mp4` |

## Poster görselleri

Her videonun yanında bir **poster** (kapak) koymak iyi bir pratik:

```
clock-tower-mechanism.mp4
clock-tower-mechanism-poster.jpg   ← aynı isim + "-poster"
```

`media.video.posterSrc` alanına yolu yazın. Poster gelmese de video çalışır —
ilk kare fallback olur.

## Format gereksinimleri

- **Format**: `.mp4` (H.264 + AAC) — tüm tarayıcılarda güvenli
- **Çözünürlük**: 1280×720 yeter; 1920×1080 üstü gereksiz
- **Süre**: Hotspot içi videolar 15–60 saniye arası önerilir
- **Ses**: Genelde sessiz (muted) oynatılacağı için ses track opsiyonel
- **Dosya boyutu**: 10 MB altında tutmaya çalışın (video optimizer: HandBrake / ffmpeg)

```bash
# ffmpeg örneği — web için optimize
ffmpeg -i input.mov -vcodec libx264 -crf 28 -preset medium -vf "scale=1280:-2" output.mp4
```

## Dosyayı ekledikten sonra

1. `.mp4` dosyasını bu klasöre koyun.
2. [content/narratives.ts](../../../content/narratives.ts) içinde ilgili
   hotspot'un `media.video.src` alanına `"/assets/video/clock-tower-mechanism.mp4"`
   yazın.
3. Poster varsa `posterSrc` da doldurun.
4. Tarayıcıyı yenileyin.
