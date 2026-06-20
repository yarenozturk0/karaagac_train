"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";
import { Hotspot } from "@/components/molecules/Hotspot";
import type { Hotspot as HotspotData } from "@/types/hotspot";

interface MapContainerProps {
  hotspots: HotspotData[];
  onHotspotSelect: (id: string) => void;
}

/**
 * Ana canvas: zoom/pan edilebilir bir "bina yüzeyi" kabı.
 * Arkaplan — illüstratif/şematik bir cephe çizimi. Drone görüntüsü
 * kullanılmıyor; onun yerine mimari bir çizim dili ile yapı
 * silueti veriliyor.
 */
export function MapContainer({ hotspots, onHotspotSelect }: MapContainerProps) {
  return (
    <div className="relative h-[min(78vh,720px)] w-full overflow-hidden border border-ink/10 bg-paper-deep/40">
      <TransformWrapper
        initialScale={1}
        minScale={0.85}
        maxScale={2.4}
        doubleClick={{ disabled: false, mode: "toggle" }}
        wheel={{ step: 0.08 }}
        panning={{ velocityDisabled: true }}
      >
        <TransformComponent
          wrapperClass="!h-full !w-full"
          contentClass="!h-full !w-full"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
            style={{ aspectRatio: "16 / 9" }}
          >
            <StationIllustration />

            {hotspots.map((h) => (
              <Hotspot key={h.id} data={h} onSelect={onHotspotSelect} />
            ))}
          </motion.div>
        </TransformComponent>
      </TransformWrapper>

      {/* Zoom/pan hint şeridi */}
      <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-3 font-ui text-[10px] uppercase tracking-[0.25em] text-ink-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass" />
        Sürükle · Yakınlaştır · Tıkla
      </div>
    </div>
  );
}

/**
 * Karaağaç Garı'nın şematik illüstrasyonu.
 * Drone fotoğrafı yok; yerine bir mimari çizim dili: kurşun kalem
 * hatları, kesikli çizgiler, yumuşak taş tonu. Figma "wireframe"
 * estetiğinin mimari uyarlaması.
 */
function StationIllustration() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFE4CE" />
          <stop offset="100%" stopColor="#F4EDE0" />
        </linearGradient>
        <pattern id="ground-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#1C1816" strokeOpacity="0.08" strokeWidth="0.6" />
        </pattern>
      </defs>

      {/* Gökyüzü */}
      <rect width="1600" height="900" fill="url(#sky)" />

      {/* Ufuk çizgisi */}
      <line x1="0" y1="600" x2="1600" y2="600" stroke="#1C1816" strokeOpacity="0.15" strokeDasharray="8 12" />

      {/* Zemin — hatch */}
      <rect x="0" y="600" width="1600" height="300" fill="url(#ground-hatch)" />

      {/* Ray izleri */}
      <g stroke="#1C1816" strokeOpacity="0.2">
        <line x1="0" y1="780" x2="1600" y2="780" strokeWidth="1" />
        <line x1="0" y1="800" x2="1600" y2="800" strokeWidth="1" />
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={i}
            x1={i * 40}
            y1={775}
            x2={i * 40}
            y2={805}
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Ana bina — simetrik kütle */}
      <g>
        {/* Sol kanat */}
        <rect x="240" y="400" width="480" height="240" fill="#EFE4CE" stroke="#1C1816" strokeOpacity="0.35" strokeWidth="1.2" />
        {/* Sağ kanat */}
        <rect x="880" y="400" width="480" height="240" fill="#EFE4CE" stroke="#1C1816" strokeOpacity="0.35" strokeWidth="1.2" />
        {/* Orta blok */}
        <rect x="720" y="340" width="160" height="300" fill="#E8DEC9" stroke="#1C1816" strokeOpacity="0.45" strokeWidth="1.2" />
      </g>

      {/* Çatılar */}
      <g stroke="#1C1816" strokeOpacity="0.35" strokeWidth="1.2" fill="#C9A857" fillOpacity="0.28">
        <polygon points="220,400 740,400 700,360 260,360" />
        <polygon points="860,400 1380,400 1340,360 900,360" />
        <polygon points="700,340 900,340 870,300 730,300" />
      </g>

      {/* Saat kulesi — orta blok üstünde */}
      <g>
        <rect x="770" y="140" width="60" height="200" fill="#E8DEC9" stroke="#1C1816" strokeOpacity="0.5" strokeWidth="1.2" />
        <polygon points="760,140 840,140 800,100" fill="#B08D3C" fillOpacity="0.5" stroke="#1C1816" strokeOpacity="0.4" strokeWidth="1.2" />
        <circle cx="800" cy="205" r="22" fill="#F4EDE0" stroke="#1C1816" strokeOpacity="0.55" strokeWidth="1.2" />
        <line x1="800" y1="205" x2="800" y2="189" stroke="#1C1816" strokeOpacity="0.7" strokeWidth="1.6" />
        <line x1="800" y1="205" x2="812" y2="210" stroke="#1C1816" strokeOpacity="0.7" strokeWidth="1.6" />
        <circle cx="800" cy="205" r="1.5" fill="#1C1816" />
      </g>

      {/* Pencere gridleri */}
      <g stroke="#1C1816" strokeOpacity="0.35" strokeWidth="0.9" fill="#F4EDE0">
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={`lw-${i}`} x={280 + i * 70} y={450} width={40} height={80} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={`rw-${i}`} x={920 + i * 70} y={450} width={40} height={80} />
        ))}
      </g>

      {/* Ana kapı */}
      <g stroke="#1C1816" strokeOpacity="0.55" strokeWidth="1.2">
        <path d="M 760 640 L 760 480 Q 760 440 800 440 Q 840 440 840 480 L 840 640 Z" fill="#3A3330" fillOpacity="0.55" />
        <line x1="800" y1="440" x2="800" y2="640" strokeOpacity="0.3" />
      </g>

      {/* Peron gölgesi */}
      <rect x="0" y="640" width="1600" height="60" fill="#6B7D74" fillOpacity="0.12" />

      {/* Kurşun kalem işaret çizgisi — Figma tarzı anotasyon */}
      <g stroke="#B08D3C" strokeOpacity="0.7" strokeWidth="1" fill="none">
        <line x1="800" y1="205" x2="960" y2="160" />
        <line x1="960" y1="160" x2="1040" y2="160" />
      </g>
      <text x="1050" y="164" fontFamily="var(--font-ui), sans-serif" fontSize="11" fill="#6B625B" letterSpacing="2">
        SAAT KULESİ
      </text>

      <g stroke="#B08D3C" strokeOpacity="0.7" strokeWidth="1" fill="none">
        <line x1="600" y1="620" x2="560" y2="680" />
        <line x1="560" y1="680" x2="470" y2="680" />
      </g>
      <text x="310" y="684" fontFamily="var(--font-ui), sans-serif" fontSize="11" fill="#6B625B" letterSpacing="2">
        ANA PERON
      </text>
    </svg>
  );
}
