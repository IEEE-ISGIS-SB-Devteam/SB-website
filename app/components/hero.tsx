"use client";

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
}: HeroProps) {
  return (
    <>
      <div className="relative flex min-h-[60svh] w-full items-center justify-center overflow-hidden bg-[#071b2b] text-white md:hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="mobile-hero-image absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-md px-5 text-center text-white">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-white/90">{subtitle}</p>
          )}
          {children}
        </div>
      </div>

      <div className={`relative hidden w-full md:block ${className}`} style={{ minHeight, height: "auto" }}>
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
    </>
  );
}