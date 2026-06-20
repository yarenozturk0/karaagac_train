# public/assets/images/archive/

Arşiv fotoğrafları (hotspot'lara bağlı tarihsel kareler) buraya gelir.
[content/narratives.ts](../../../../content/narratives.ts) içindeki
`media.photos[i].src` dolduğunda UI, soyut placeholder'ı gerçek
`<img>` öğesiyle değiştirir.

## Beklenen dosyalar (şu an `src` boş)

### `clock-tower` — Saat Kulesi
- `clock-tower-1918.webp` — "Kulenin ilk yılları"
- `clock-tower-1952.webp` — "Bakım onarımı"

### `last-train` — Son Tren
- `platform-morning-1970.webp` — "Peronda bir kış sabahı"
- `passengers-1968.webp` — "Kalkışı bekleyen yolcular"
- `railway-workers-1969.webp` — "Demiryolu işçileri"

### `ticket-booth` — Bilet Gişesi
- `booth-queue-1930.webp` — "Gişe önünde sıra"
- `ticket-one-way-1923.webp` — "Tek yön bilet"

### `east-facade` — Doğu Cephesi
- `east-facade-2024.webp` — "Doğu cephesi detay"
- `plaster-aging-2024.webp` — "Sıva yaşlanması"

## Format gereksinimleri

- **Format**: `.webp` (tercih) — `%30–50` daha küçük, kalite kaybı minimal
- **Fallback**: `.jpg` kabul
- **Çözünürlük**: Uzun kenar 1600 px yeter (Retina için)
- **Aspect**: Placeholder'lar `4/5` (portrait arşiv görünümü); farklı aspect de çalışır, `object-cover` otomatik sığdırır
- **Dosya adı**: `<hotspot-id>-<tanım>-<yıl>.webp` — `clock-tower-bell-1918.webp`

## Dönüştürme örnekleri

```bash
# JPG → WebP (ImageMagick)
magick convert input.jpg -quality 82 output.webp

# ffmpeg ile (video'dan kare çıkarma + webp)
ffmpeg -i source.mp4 -ss 00:00:05 -vframes 1 -vf "scale=1600:-1" frame.webp
```

## Dosyayı ekledikten sonra

1. `.webp` dosyasını bu klasöre koyun.
2. [content/narratives.ts](../../../../content/narratives.ts) içinde ilgili
   hotspot'un `media.photos[i].src` alanına
   `"/assets/images/archive/clock-tower-1918.webp"` yazın.
3. `caption`, `year` ve `source` alanlarını da güncelleyin (telif / erişilebilirlik).
4. Tarayıcıyı yenileyin.
