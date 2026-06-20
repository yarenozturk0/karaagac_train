# Karaağaç — Duvarların Dili Olsa

Edirne Karaağaç Tren Garı'nı konu alan, binanın birinci tekil şahısla konuştuğu, doğrusal olmayan bir interaktif web deneyimi.

> Karaağaç, bir zamanlar insanları sınırın öte yakasına taşırdı.
> Bugün biz onu, zamanın öte yakasından bu yakaya taşıyoruz.

## Proje Felsefesi

Bu proje bir **belgesel değildir**, bir **köprüdür**. Detaylı vizyon için [project_context.md](./project_context.md)'yi okuyun.

## Context Engineering Dosyaları

Cline metodolojisine göre proje üç çerçeve dosyasıyla çalışır:

| Dosya | Rol |
|---|---|
| [.clinerules](./.clinerules) | Estetik, etkileşim, anlatı ve kod kuralları |
| [project_context.md](./project_context.md) | Vizyon, metafor, kullanıcı yolculuğu |
| [tech_stack.md](./tech_stack.md) | Teknik mimari, dizin yapısı, komponent hiyerarşisi |

## Yerel Geliştirme

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## Mevcut Durum (MVP Boilerplate)

- ✅ Next.js 15 (App Router) + TypeScript strict
- ✅ Tailwind v4 + Figma-grade tasarım token'ları (paper/ink/brass/meric)
- ✅ Atomic design dizin yapısı (atoms/molecules/organisms/templates)
- ✅ Intro sahnesi (`/`) — Figma stili açılış
- ✅ Canvas sahnesi (`/canvas`) — zoom/pan SVG + hotspot katmanı
- ✅ 5 placeholder hotspot + 4 binanın monologu
- ✅ Erişilebilirlik temeli: `prefers-reduced-motion`, aria-label, klavye navigasyonu
- ⏳ NarrativePlayer organism (tam ses + overlay senkron oynatıcı)
- ⏳ VotingSystem organism + Supabase entegrasyonu
- ⏳ 4K drone görüntüleriyle SVG placeholder'ın değiştirilmesi

## Placeholder'lar

Tüm görseller, ses dosyaları ve tarihsel metinler şu an **placeholder**'dır.
Nihai içerik, bina sahipleri (Trakya Üniversitesi) ve yerel tarih ekibiyle
teyit sonrası [content/](./content/) altındaki data dosyalarında güncellenir —
kodda değişiklik gerekmez.
