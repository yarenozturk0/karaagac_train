"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline, CircleMarker, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Place, PLACES, CATEGORY_COLORS } from "@/content/places";
import { useLanguage } from "@/hooks/LanguageContext";

/* ─── Leaflet default icon fix (Next.js) ─── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

/* ─── Custom numbered marker ─── */
function createMarkerIcon(place: Place, isActive: boolean, isPlaying: boolean) {
  const color = CATEGORY_COLORS[place.category];
  const globalIdx = PLACES.findIndex((p) => p.id === place.id) + 1;
  const size = isActive ? 48 : 38;
  const pulse = isPlaying
    ? `<div style="
        position:absolute; inset:-8px;
        border-radius:50%;
        background:${color}33;
        animation:mapPulse 1.4s ease-out infinite;
      "></div>
      <div style="
        position:absolute; inset:-4px;
        border-radius:50%;
        background:${color}22;
        animation:mapPulse 1.4s ease-out 0.4s infinite;
      "></div>`
    : "";

  return L.divIcon({
    className: "",
    html: `
      <style>
        @keyframes mapPulse {
          0% { transform:scale(1); opacity:0.7; }
          100% { transform:scale(2.2); opacity:0; }
        }
        @keyframes markerBounce {
          0%,100% { transform:translateY(0); }
          50% { transform:translateY(-4px); }
        }
      </style>
      <div style="position:relative; width:${size}px; height:${size}px;">
        ${pulse}
        <div style="
          position:relative;
          width:${size}px;
          height:${size}px;
          background: linear-gradient(135deg, ${color}ee, ${color});
          border: ${isActive ? "3px" : "2px"} solid white;
          border-radius: 50% 50% 50% 4px;
          transform: rotate(-45deg);
          box-shadow: 0 ${isActive ? "8px 24px" : "3px 10px"} ${color}55, 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          ${isActive ? "animation: markerBounce 2s ease-in-out infinite;" : ""}
        ">
          <div style="
            position:absolute; inset:0;
            display:flex; flex-direction:column;
            align-items:center; justify-content:center;
            transform: rotate(45deg);
          ">
            <span style="
              color: white;
              font-size: ${isActive ? "14px" : "12px"};
              font-weight: 800;
              font-family: system-ui, sans-serif;
              line-height: 1;
              text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            ">${globalIdx}</span>
            ${isPlaying ? `<span style="color:white;font-size:7px;line-height:1;">♪</span>` : ""}
          </div>
        </div>
      </div>
    `,
    iconSize: [size + 16, size + 16],
    iconAnchor: [(size + 16) / 2, size + 16],
    popupAnchor: [0, -(size + 12)],
  });
}

/* ─── Pan map to active marker ─── */
function MapController({ activeId }: { activeId: string | null }) {
  const map = useMap();
  useEffect(() => {
    if (!activeId) return;
    const place = PLACES.find((p) => p.id === activeId);
    if (place) {
      map.flyTo([place.coords.lat, place.coords.lng], 17, {
        duration: 1.2,
        easeLinearity: 0.4,
      });
    }
  }, [activeId, map]);
  return null;
}

/* ─── Props ─── */
interface MapViewProps {
  places: Place[];
  activeId: string | null;
  playingId: string | null;
  onSelect: (id: string | null) => void;
}

export default function MapView({ places, activeId, playingId, onSelect }: MapViewProps) {
  const { t } = useLanguage();
  const [satellite, setSatellite] = useState(false);

  /* Route polyline: tüm noktalara çizgi */
  const routeCoords: [number, number][] = PLACES.map((p) => [p.coords.lat, p.coords.lng]);

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      {/* ── Katman değiştirici butonu ── */}
      <div style={{
        position: "absolute", top: "12px", right: "12px",
        zIndex: 1000,
        display: "flex", gap: "4px",
        background: "white",
        borderRadius: "10px",
        padding: "4px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}>
        {(["Sokak", "Uydu"] as const).map((label) => (
          <button
            key={label}
            onClick={() => setSatellite(label === "Uydu")}
            style={{
              padding: "5px 12px",
              borderRadius: "7px",
              border: "none",
              cursor: "pointer",
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
              background: (label === "Uydu") === satellite ? "#A0242A" : "transparent",
              color: (label === "Uydu") === satellite ? "white" : "#555",
            }}
          >
            {label === "Sokak" ? "🗺 " : "🛩 "}{label}
          </button>
        ))}
      </div>

    <MapContainer
      center={[41.6510, 26.5280]}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      {/* ── Tile katmanı ── */}
      {satellite ? (
        <TileLayer
          attribution='&copy; Esri &mdash; Source: Esri, Maxar, GeoEye, Earthstar Geographics'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          maxZoom={19}
        />
      ) : (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
      )}

      {/* ── Rota gölgesi (beyaz kalın, altta) ── */}
      <Polyline
        positions={routeCoords}
        pathOptions={{
          color: "#ffffff",
          weight: 6,
          opacity: 0.6,
        }}
      />

      {/* ── Rota çizgisi (kırmızı, üstte) ── */}
      <Polyline
        positions={routeCoords}
        pathOptions={{
          color: "#A0242A",
          weight: 3,
          opacity: 0.85,
          dashArray: "10 6",
          lineCap: "round",
          lineJoin: "round",
        }}
      />

      {/* ── Yol başlangıç noktası (Meriç) ── */}
      {PLACES.length > 0 && (
        <CircleMarker
          center={[PLACES[0].coords.lat, PLACES[0].coords.lng]}
          radius={5}
          pathOptions={{ color: "#2D6A4F", fillColor: "#2D6A4F", fillOpacity: 1, weight: 2 }}
        />
      )}

      {/* ── Markers ── */}
      {places.map((place) => {
        const isActive = activeId === place.id;
        const isPlaying = playingId === place.id;
        return (
          <Marker
            key={place.id}
            position={[place.coords.lat, place.coords.lng]}
            icon={createMarkerIcon(place, isActive, isPlaying)}
            eventHandlers={{
              click: () => onSelect(isActive ? null : place.id),
            }}
            zIndexOffset={isPlaying ? 2000 : isActive ? 1000 : 0}
          >
            <Popup
              offset={[0, -40]}
              closeButton={false}
              className="karagac-popup"
            >
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  minWidth: "200px",
                  maxWidth: "240px",
                  padding: "4px 2px",
                }}
              >
                {/* Kategori renk şerit */}
                <div
                  style={{
                    height: "3px",
                    borderRadius: "2px",
                    background: `linear-gradient(90deg, ${CATEGORY_COLORS[place.category]}, ${CATEGORY_COLORS[place.category]}44)`,
                    marginBottom: "10px",
                  }}
                />

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                  <div
                    style={{
                      width: "36px", height: "36px", flexShrink: 0,
                      borderRadius: "10px",
                      background: CATEGORY_COLORS[place.category] + "18",
                      border: `1.5px solid ${CATEGORY_COLORS[place.category]}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    {place.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: "9px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: CATEGORY_COLORS[place.category],
                      fontWeight: "700",
                      margin: "0 0 3px",
                    }}>
                      {place.stopLabel}
                    </p>
                    <p style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#1C1816",
                      margin: 0,
                      lineHeight: 1.25,
                    }}>
                      {t(place.titleKey)}
                    </p>
                  </div>
                </div>

                <p style={{
                  fontSize: "11.5px",
                  color: "#6B6560",
                  margin: "0 0 8px",
                  lineHeight: 1.5,
                }}>
                  🕐 {place.bestTime}
                </p>

                {/* Ses butonu ipucu */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "6px 10px",
                  background: CATEGORY_COLORS[place.category] + "12",
                  borderRadius: "8px",
                  border: `1px solid ${CATEGORY_COLORS[place.category]}30`,
                }}>
                  <span style={{ fontSize: "13px" }}>🔊</span>
                  <span style={{
                    fontSize: "10.5px",
                    color: CATEGORY_COLORS[place.category],
                    fontWeight: "600",
                  }}>
                    Karta tıkla → sesli tanıtım
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}

      <MapController activeId={activeId} />
    </MapContainer>
    </div>
  );
}
