'use client';

import dynamic from "next/dynamic";
import { useEffect } from "react";

const LocationMap = dynamic(() => import("./LocationMap"), { ssr: false });

export default function ContactMap() {
  useEffect(() => {
    const updateCardTheme = () => {
      const card = document.querySelector<HTMLElement>(".contact-card");
      if (!card) return;
      const isDark = document.documentElement.classList.contains("dark");
      card.style.setProperty("background-color", isDark ? "#101112" : "#f7f8fa", "important");
      card.style.setProperty("color", isDark ? "#f1f5f9" : "#0a0a0a", "important");
      card.querySelectorAll<HTMLElement>("h2, label").forEach((element) => {
        element.style.setProperty("color", isDark ? "#f1f5f9" : "#0a0a0a", "important");
        element.style.setProperty("transition", "none", "important");
      });
      card.style.setProperty("transition", "none", "important");
    };

    updateCardTheme();
    const observer = new MutationObserver(updateCardTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return <LocationMap />;
}
