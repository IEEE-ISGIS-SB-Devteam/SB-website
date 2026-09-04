'use client';

import { useEffect, useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

const campusPosition: [number, number] = [34.7398574, 10.7618239];
const lightTiles = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
const darkTiles = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

function InteractionHint() {
  const map = useMap();
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const enableScrollZoom = () => {
      setHasInteracted(true);
      map.scrollWheelZoom.enable();
      map.off("click", enableScrollZoom);
      map.off("touchstart", enableScrollZoom);
    };

    map.scrollWheelZoom.disable();
    map.on("click", enableScrollZoom);
    map.on("touchstart", enableScrollZoom);
    return () => {
      map.off("click", enableScrollZoom);
      map.off("touchstart", enableScrollZoom);
    };
  }, [map]);

  return hasInteracted ? null : (
    <div className="pointer-events-none absolute left-1/2 top-3 z-[1000] -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs text-white shadow-sm">
      Click or tap to explore
    </div>
  );
}

function ThemeTiles() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return <TileLayer key={isDark ? "dark" : "light"} url={isDark ? darkTiles : lightTiles} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO' maxZoom={20} />;
}

export default function LocationMap() {
  return (
    <div className="relative mt-8 h-[240px] w-full overflow-hidden rounded-3xl shadow-(--shadow-sm) sm:h-[280px]">
      <MapContainer
        center={campusPosition}
        zoom={15}
        scrollWheelZoom={false}
        dragging
        touchZoom
        doubleClickZoom
        zoomControl
        className="h-full w-full"
      >
        <ThemeTiles />
        <CircleMarker center={campusPosition} radius={9} pathOptions={{ color: "#00629B", fillColor: "#00629B", fillOpacity: 1, weight: 3 }}>
          <Popup closeButton>
            <strong>ISGIS - IEEE Student Branch</strong><br />
            Technopole de Sfax, Tunisia
          </Popup>
        </CircleMarker>
        <InteractionHint />
      </MapContainer>
    </div>
  );
}
