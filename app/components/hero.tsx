"use client";

import { useState, useEffect } from "react";
import ScrollExpand from "./ScrollExpand";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  scrollHint?: string;
  children?: React.ReactNode;
  className?: string;
  minHeight?: string;
  onMobileComplete?: () => void;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  scrollHint = "Scroll",
  children,
  className = "",
  minHeight = "100dvh",
  onMobileComplete,
}: HeroProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    // Lock scroll
    document.body.style.overflow = "hidden";

    // Start fade‑out after 2.8s
    const fadeOutTimer = setTimeout(() => {
      setPhase("fading");
    }, 2800);

    // After 3.8s, hide completely and unlock scroll
    const hideTimer = setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
      onMobileComplete?.(); // 👈 notify parent AFTER hiding
    }, 3800);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [isMobile, onMobileComplete]);

  if (isMobile) {
    if (phase === "hidden") return null;

    const isVisible = phase === "visible";
    const opacity = isVisible ? "opacity-100" : "opacity-0";
    const translate = isVisible ? "translate-y-0" : "-translate-y-6";

    return (
      <div
        className={`
          absolute inset-x-0 top-0 w-full h-screen flex flex-col items-center justify-center
          transition-all duration-700 ease-in-out
          ${opacity} ${translate}
        `}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-md px-5 text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-white/90">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    );
  }

  // ── Desktop ──
  return (
    <div className={`relative w-full ${className}`} style={{ minHeight, height: "auto" }}>
      <ScrollExpand
        src={imageSrc}
        alt={imageAlt}
        title={title}
        scrollHint={scrollHint}
        useWindowScroll
        overlayScrim={0.55}
        startWidth={46}
        startHeight={32}
        startRadius={20}
        mediaZoom={1.4}
        scrollDistance={1.4}
        holdDistance={0.4}
      >
        {subtitle && (
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </ScrollExpand>
    </div>
  );
}