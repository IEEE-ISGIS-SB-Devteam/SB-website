"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

type ParticlesProps = {
  className?: string;
  quantity?: number;
  opacity?: number;
};

export default function Particles({ className = "", quantity = 40, opacity = 0.24 }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const opacityRef = useRef(opacity);

  useEffect(() => {
    opacityRef.current = opacity * (theme === "dark" ? 1.15 : 1);
  }, [opacity, theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particleColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--ieee-blue")
      .trim();
    const particleCount = Math.min(quantity, Math.round((window.innerWidth * window.innerHeight) / 9000));
    const particles = Array.from({ length: Math.max(12, particleCount) }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.8 + 0.8,
      speed: Math.random() * 0.00015 + 0.00005,
      phase: Math.random() * Math.PI * 2,
    }));
    let animationFrame = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = particleColor;
      particles.forEach((particle) => {
        const drift = Math.sin(time * particle.speed + particle.phase) * 12;
        const x = particle.x * window.innerWidth + drift;
        const y = particle.y * window.innerHeight;
        context.globalAlpha = opacityRef.current * (0.75 + Math.sin(time * 0.001 + particle.phase) * 0.2);
        context.beginPath();
        context.arc(x, y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [quantity]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}