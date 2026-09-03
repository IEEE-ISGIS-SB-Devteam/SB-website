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
  onMobileComplete?: () => void; // 🔔 called after mobile intro ends
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
  const [phase, setPhase] = useState<"hidden" | "fade-in" | "fade-out" | "gone">("hidden");

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile sequence
  useEffect(() => {
    if (!isMobile) return;

    // Lock scroll
    document.body.style.overflow = "hidden";

    const timer1 = setTimeout(() => setPhase("fade-in"), 50);
    const timer2 = setTimeout(() => setPhase("fade-out"), 3000);
    const timer3 = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
      onMobileComplete?.(); // 👈 notify parent that intro is done
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      document.body.style.overflow = "";
    };
  }, [isMobile, onMobileComplete]);

  // ── MOBILE ──
  if (isMobile) {
    if (phase === "gone") return null;

    let animationClass = "";
    if (phase === "fade-in") animationClass = "animate-fade-up-in";
    else if (phase === "fade-out") animationClass = "animate-fade-up-out";

    return (
      <div
        className={`relative w-full flex flex-col items-center justify-center overflow-hidden ${className}`}
        style={{ minHeight, height: "auto" }}
      >
        <div className="text-center px-4 max-w-md mx-auto">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] ${
              phase === "hidden" ? "opacity-0" : animationClass
            }`}
          >
            Welcome to IEEE ISGIS
          </h1>
        </div>
      </div>
    );
  }

  // ── DESKTOP ──
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