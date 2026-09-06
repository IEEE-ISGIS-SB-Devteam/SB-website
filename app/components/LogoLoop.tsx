"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

export type LogoItem = { node: ReactNode; title: string; href?: string; ariaLabel?: string };

type LogoLoopProps = {
  logos: LogoItem[];
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  className?: string;
};

export default function LogoLoop({ logos, direction = "left", speed = 80, gap = 48, fadeOut = false, fadeOutColor = "#0a0a0a", scaleOnHover = false, className = "" }: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const animation = track.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(${direction === "left" ? "-50%" : "0"})` }],
      { duration: Math.max(1000, (logos.length * 140 / speed) * 1000), iterations: Infinity, easing: "linear", direction: direction === "left" ? "normal" : "reverse" },
    );
    return () => animation.cancel();
  }, [direction, logos.length, speed]);

  const items = [...logos, ...logos];
  const style = { "--logo-gap": `${gap}px`, "--fade-color": fadeOutColor } as CSSProperties;
  return <div className={`logo-loop ${fadeOut ? "logo-loop--fade" : ""} ${scaleOnHover ? "logo-loop--scale" : ""} ${className}`} style={style}>
    <div ref={trackRef} className="logo-loop__track">
      {items.map((logo, index) => <a key={`${logo.title}-${index}`} href={logo.href} aria-label={logo.ariaLabel || logo.title} className="logo-loop__item">{logo.node}</a>)}
    </div>
  </div>;
}
