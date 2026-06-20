# public/assets/images/intro/

Anasayfa (/) ve genel marka görselleri buraya gelir.

## Beklenen / opsiyonel dosyalar

| Amaç | Dosya adı (önerilen) | Notlar |
|---|---|---|
| OpenGraph / sosyal paylaşım | `og-cover.jpg` | 1200×630, JPG |
| Favicon | `favicon.ico` + `icon-512.png` | Kök `/public/`'a değil buraya koyun, `app/icon.tsx`'ten yönetiriz |
| Hero arka plan (opsiyonel) | `intro-hero.webp` | 1920×1080 üstü, 4/5 oranına da kırpılabilir |

> Anasayfadaki Medya Arşivi önizleme bölümü şu an sadece placeholder bileşenleri
> kullanıyor; gerçek hero görseli eklenirse `app/page.tsx`'e `next/image` ile
> bağlanabilir.
