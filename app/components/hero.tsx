"use client";

import React from "react";
import ScrollExpand from "./ScrollExpand";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  scrollHint?: string;
  children?: React.ReactNode;
  className?: string;
  /** Minimum height – defaults to full viewport. The actual height grows with the scroll track. */
  minHeight?: string;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  scrollHint = "Scroll",
  children,
  className = "",
  minHeight = "100dvh", // dynamic viewport height
}: HeroProps) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ minHeight, height: "auto" }} // allow container to grow with track
    >
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