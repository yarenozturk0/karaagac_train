# Tech Stack — Project Karaağaç

## 1. Framework Seçimi

### Next.js 15 (App Router) — ✅ Seçilen
**Neden Next.js?**
- Tarihsel arşivler SEO değeri taşır (araştırmacılar, yerel tarihçiler arar).
- Server Components ile arşiv içeriği SSR edilir; hafif ilk paint.
- Route-based code splitting: her "sahne" (Intro, Canvas, Decision) ayrı bundle'da.
- Image Optimization: 4K drone görüntüleri otomatik `next/image` pipeline'ından geçer.
- Edge middleware ile çok dilli (TR/EN) yönlendirme.

**Neden sadece React değil?**
Pure SPA'da arşiv içeriği crawler'a görünmez, ilk paint ağır olur, ve multi-lingual routing'i elle yazmak gerekir.

## 2. Ana Teknoloji Yığını

| Katman | Araç | Gerekçe |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR + route-level code splitting |
| Dil | **TypeScript (strict)** | Hotspot koordinatları, content schema'ları için tip güvenliği |
| Styling | **Tailwind CSS v4** | Figma-grade utility-first; custom design token'lar config üzerinden |
| Animasyon | **Framer Motion** | Sahne geçişleri, hotspot mikro-animasyonları |
| Canvas/Harita | **React-Zoom-Pan-Pinch + SVG overlay** (MVP) → **Mapbox GL** (faz 2) | MVP'de bina planı SVG; faz 2'de Edirne konum haritası |
| Realtime DB | **Supabase** | Karar anı oylamaları, gerekçe metinleri, istatistik |
| Ses | **Howler.js** | Cross-browser ses, fade/loop, user-gesture uyumu |
| Form/Validation | **Zod + React Hook Form** | Oy gerekçe metinlerinin doğrulanması |
| Fontlar | **next/font (local)** | Tarihsel serif (display) + modern sans (UI) |
| Analytics (opsiyonel) | **Plausible** | Privacy-first; kullanıcı rotalarını anonim analiz |

### Supabase vs. Firebase — Neden Supabase?
- Postgres tabanlı: oylar ve gerekçeler ilerde araştırmacılara açılabilir relational veri.
- Row Level Security ile moderasyon kolay.
- Self-hostable: projenin "kamu malı" olma potansiyeli için stratejik.

## 3. Dizin Yapısı

```
karagac_train/
├── .clinerules
├── project_context.md
├── tech_stack.md
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── package.json
│
├── /app                          # Next.js App Router
│   ├── layout.tsx                # Root layout (font, theme, audio provider)
│   ├── page.tsx                  # Açılış sahnesi (Intro)
│   ├── /canvas                   # Ana harita/canvas sahnesi
│   │   └── page.tsx
│   ├── /story/[hotspotId]        # Hotspot'a tıklayınca açılan anlatı sahnesi
│   │   └── page.tsx
│   ├── /decision                 # Karar anı sahnesi
│   │   └── page.tsx
│   └── /api                      # Route handlers (oy kaydetme vs.)
│       └── /vote
│           └── route.ts
│
├── /components
│   ├── /atoms                    # En küçük, tek sorumluluklu parçalar
│   │   ├── Button.tsx
│   │   ├── IconDot.tsx           # Hotspot noktası
│   │   ├── ScreenReaderOnly.tsx
│   │   └── Caption.tsx           # Alt-yazı atomu
│   │
│   ├── /molecules                # Atom kombinasyonları
│   │   ├── Hotspot.tsx           # IconDot + Tooltip + onClick
│   │   ├── AudioToggle.tsx       # Button + mute state
│   │   ├── ArchiveCard.tsx       # Görsel + metin + kaynak
│   │   └── VoteOption.tsx        # Radio + label + live %
│   │
│   ├── /organisms                # İş mantığı barındıran compose'lar
│   │   ├── MapContainer.tsx      # Zoom/pan + SVG overlay + hotspot yerleşimi
│   │   ├── NarrativePlayer.tsx   # Metin + ses + görsel senkron oynatıcı
│   │   ├── VotingSystem.tsx      # Supabase'e yazan karar formu
│   │   ├── SoundscapeLayer.tsx   # Arka plan ses atmosferi
│   │   └── OverlayToggle.tsx     # "Şimdi/O zaman" kaydırıcısı
│   │
│   └── /templates                # Sayfa iskeletleri
│       ├── SceneTemplate.tsx
│       └── DecisionTemplate.tsx
│
├── /content                      # Ham içerik — koddan ayrı
│   ├── manifest.ts               # Tüm varlıkların alt-metin/kaynak/telif
│   ├── narratives.ts             # Bina monologları (TR/EN)
│   ├── hotspots.ts               # Koordinatlar + ilişkili anlatı ID'leri
│   ├── archive.ts                # Gazete küpürleri, belgeler
│   └── decisions.ts              # Karar anı soruları ve seçenekler
│
├── /lib
│   ├── supabase.ts               # Supabase client singleton
│   ├── audio.ts                  # Howler wrapper
│   └── analytics.ts
│
├── /hooks
│   ├── useReducedMotion.ts
│   ├── useSoundscape.ts
│   └── useHotspotNavigation.ts
│
├── /types
│   ├── hotspot.ts
│   ├── narrative.ts
│   └── vote.ts
│
├── /public
│   └── /assets
│       ├── /images               # Drone, arşiv, overlay (webp + blur placeholder)
│       ├── /audio                # Soundscape, monologlar
│       └── /svg                  # Bina planı, mimari çizimler
│
└── /styles
    └── globals.css               # Tailwind + CSS değişkenleri
```

## 4. Komponent Hiyerarşisi (Kritik Organism'ler)

### `MapContainer` (organism)
Ana canvas. Zoom/pan eden bir SVG kabı. İçinde bina planı + koordinat tabanlı `Hotspot` listesi.

**Props**: `hotspots: Hotspot[]`, `onHotspotSelect: (id: string) => void`

**İçerdiği**: `React-Zoom-Pan-Pinch` + `<svg>` overlay + `<Hotspot />` [] + `<SoundscapeLayer />`

### `Hotspot` (molecule)
Bir nokta + hover'da metadata önizlemesi + tıklamada `onHotspotSelect` tetikler.

**Props**: `id`, `x`, `y`, `title`, `preview`, `onClick`

**İçerdiği**: `<IconDot />` + `<motion.div>` preview + `<button aria-label>`

### `NarrativePlayer` (organism)
Bir hotspot seçildiğinde açılan anlatı sahnesi. Metin + eşzamanlı ses + görsel overlay.

**Props**: `narrative: Narrative` (metin segmentleri + ses URL + görsel timeline)

**İçerdiği**: `<ArchiveCard />` + Howler player + `<Caption />` + `<OverlayToggle />`

### `VotingSystem` (organism)
Karar anı formu. Supabase'e yazar, cevap sonrası global istatistiği döner.

**Props**: `question: Decision`

**İçerdiği**: `<VoteOption />` [] + gerekçe textarea + sonuç ekranı

## 5. Tasarım Token'ları (Tailwind Config)

```ts
// tailwind.config.ts - aksiyon çağrısı (boilerplate'te uygulanacak)
colors: {
  paper: '#F4EDE0',      // solmuş arşiv kağıdı
  ink: '#1C1816',        // tren karası
  brass: '#B08D3C',      // aksan: pirinç/bakır
  meric: '#6B7D74',      // Meriç suyu (soğuk gri-yeşil)
  dust: '#C9BFAF'        // toz/sıva
},
fontFamily: {
  display: ['"Cormorant Garamond"', 'serif'],  // tarihsel
  ui:      ['Inter', 'system-ui', 'sans-serif']
}
```

## 6. Performans & Erişilebilirlik Bütçesi

- **LCP < 2.5s** (3G): Intro sahnesi statik + 1 preload görsel.
- **Ses asla autoplay değil**: Kullanıcı "Deneyime başla" tıklayana kadar sessiz.
- **`prefers-reduced-motion`** tüm Framer Motion animasyonlarında respect edilir (`useReducedMotion` hook).
- **Klavye navigasyonu**: Hotspot'lar arası Tab + Enter ile geçilebilir.
- **Screen reader**: Her hotspot'un görsel/ses karşılığı metinle de sunulur.

## 7. Faz Planı

| Faz | Kapsam |
|---|---|
| **MVP** | Intro + Canvas (SVG bina planı) + 3 hotspot + 1 karar anı + Supabase |
| **Faz 2** | Mapbox (Edirne konumu) + çoklu dil (TR/EN) + overlay kaydırıcı |
| **Faz 3** | Kullanıcı gerekçeleri galerisi + araştırmacı API'si + BG/GR dilleri |

## 8. Geliştirme Komutları (hedef)

```bash
pnpm install
pnpm dev           # localhost:3000
pnpm typecheck
pnpm lint
pnpm build
```
