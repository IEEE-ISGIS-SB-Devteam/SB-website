"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import "./ParticleText.css";

type ParticleTextProps = {
  text?: string;
  particleSize?: number;
  density?: number;
  color?: string;
  highlightColor?: string;
  scatter?: number;
  gatherDuration?: number;
  stagger?: number;
  pointerRepel?: number;
  repelRadius?: number;
  idleDrift?: number;
  trigger?: "mount" | "hover" | "click";
  fontSize?: number | string;
  fontWeight?: number | string;
  fontFamily?: string;
  glow?: boolean;
  className?: string;
  style?: CSSProperties;
};

type Particle = { x: number; y: number; targetX: number; targetY: number; startX: number; startY: number; seed: number; delay: number; depth: number };

export default function ParticleText({
  text = "React Bits", particleSize = 2, density = 4, color = "#2b74e1", highlightColor = "#2b74e1",
  scatter = 180, gatherDuration = 1600, stagger = 420, pointerRepel = 46, repelRadius = 120,
  idleDrift = 0.7, trigger = "mount", fontSize = "clamp(3rem, 12vw, 8rem)", fontWeight = 800,
  fontFamily = "inherit", glow = true, className = "", style,
}: ParticleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let particles: Particle[] = [];
    let frame = 0;
    let resizeFrame = 0;
    let width = 0;
    let height = 0;
    let gathering = false;
    let started = 0;
    let reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { active: false, x: 0, y: 0 };
    const resolveColor = (value: string) => {
      if (!value.startsWith("var(")) return value;
      const variableName = value.slice(4, -1).trim();
      return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    };
    const cssColor = resolveColor(color);
    const cssHighlight = resolveColor(highlightColor);
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const gather = () => {
      const now = performance.now();
      particles.forEach((particle) => {
        const angle = particle.seed * Math.PI * 2;
        const distance = reduced ? 0 : scatter * (0.35 + particle.depth * 0.75);
        particle.x = particle.targetX + Math.cos(angle) * distance;
        particle.y = particle.targetY + Math.sin(angle) * distance;
        particle.startX = particle.x;
        particle.startY = particle.y;
        particle.delay = reduced ? 0 : particle.seed * stagger;
      });
      started = now;
      gathering = true;
    };

    const sample = () => {
      const rect = container.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const offscreen = document.createElement("canvas");
      const offscreenContext = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offscreenContext) return;
      const probe = document.createElement("span");
      probe.textContent = "M";
      probe.style.cssText = `position:absolute;visibility:hidden;font-size:${typeof fontSize === "number" ? `${fontSize}px` : fontSize};font-weight:${fontWeight};font-family:${fontFamily === "inherit" ? getComputedStyle(container).fontFamily : fontFamily}`;
      container.appendChild(probe);
      const resolvedSize = parseFloat(getComputedStyle(probe).fontSize) || 96;
      probe.remove();
      const family = fontFamily === "inherit" ? getComputedStyle(container).fontFamily : fontFamily;
      offscreenContext.font = `${fontWeight} ${resolvedSize}px ${family}`;
      const measured = offscreenContext.measureText(text);
      const scale = Math.min(1, width * 0.9 / Math.max(1, measured.width));
      const finalSize = resolvedSize * scale;
      offscreenContext.font = `${fontWeight} ${finalSize}px ${family}`;
      const metrics = offscreenContext.measureText(text);
      const padding = Math.ceil(finalSize * 0.15);
      offscreen.width = Math.ceil(metrics.width + padding * 2);
      offscreen.height = Math.ceil(finalSize * 1.3 + padding * 2);
      offscreenContext.font = `${fontWeight} ${finalSize}px ${family}`;
      offscreenContext.fillStyle = "white";
      offscreenContext.textBaseline = "middle";
      offscreenContext.fillText(text, padding, offscreen.height / 2);
      const pixels = offscreenContext.getImageData(0, 0, offscreen.width, offscreen.height).data;
      const step = Math.max(2, Math.floor(density));
      particles = [];
      for (let y = 0; y < offscreen.height; y += step) for (let x = 0; x < offscreen.width; x += step) {
        if (pixels[(y * offscreen.width + x) * 4 + 3] > 40) {
          const index = particles.length;
          const seed = ((index * 9301 + 49297) % 233280) / 233280;
          particles.push({ x: 0, y: 0, targetX: width / 2 - offscreen.width / 2 + x, targetY: height / 2 - offscreen.height / 2 + y, startX: 0, startY: 0, seed, delay: 0, depth: 0.45 + (index % 1000) / 1000 });
        }
      }
      gather();
    };

    const render = (now: number) => {
      context.clearRect(0, 0, width, height);
      context.shadowBlur = glow && !reduced ? particleSize * 3 : 0;
      context.shadowColor = cssHighlight;
      let complete = true;
      particles.forEach((particle) => {
        let x = particle.targetX;
        let y = particle.targetY;
        let progress = 1;
        if (gathering) {
          progress = clamp((now - started - particle.delay) / Math.max(1, reduced ? 1 : gatherDuration), 0, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          x = particle.startX + (particle.targetX - particle.startX) * eased;
          y = particle.startY + (particle.targetY - particle.startY) * eased;
          if (progress < 1) complete = false;
        } else if (!reduced) {
          x += Math.sin(now * 0.0009 + particle.seed * 10) * idleDrift * particle.depth;
          y += Math.cos(now * 0.00075 + particle.depth * 10) * idleDrift * particle.depth;
        }
        if (pointer.active && !reduced) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < repelRadius) {
            const force = Math.pow(1 - distance / repelRadius, 2) * pointerRepel;
            x += dx / distance * force;
            y += dy / distance * force;
          }
        }
        context.globalAlpha = clamp(0.35 + progress * 0.65, 0, 1);
        context.fillStyle = cssColor;
        context.fillRect(x - particleSize / 2, y - particleSize / 2, particleSize, particleSize);
      });
      context.globalAlpha = 1;
      context.shadowBlur = 0;
      if (complete) gathering = false;
      frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top; pointer.active = true; };
    const leave = () => { pointer.active = false; };
    const enter = (event: PointerEvent) => { move(event); if (trigger === "hover") gather(); };
    const click = () => { if (trigger === "click") gather(); };
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceChanged = (event: MediaQueryListEvent) => { reduced = event.matches; sample(); };
    const resize = () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(sample); };
    query.addEventListener("change", reduceChanged);
    canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerleave", leave); canvas.addEventListener("pointerenter", enter); canvas.addEventListener("click", click);
    const observer = new ResizeObserver(resize); observer.observe(container); sample(); frame = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frame); cancelAnimationFrame(resizeFrame); observer.disconnect(); query.removeEventListener("change", reduceChanged); canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave); canvas.removeEventListener("pointerenter", enter); canvas.removeEventListener("click", click); };
  }, [color, density, fontFamily, fontSize, fontWeight, gatherDuration, glow, highlightColor, idleDrift, particleSize, pointerRepel, repelRadius, scatter, stagger, text, trigger]);

  return <div ref={containerRef} className={`particle-text ${className}`} style={style} aria-label={text}><canvas ref={canvasRef} className="particle-text__canvas" aria-hidden="true" /><span className="particle-text__sr">{text}</span></div>;
}
