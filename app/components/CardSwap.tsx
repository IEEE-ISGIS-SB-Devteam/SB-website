"use client";

import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: ReturnType<typeof makeSlot>, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  speed?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: React.ReactNode;
  className?: string;
}

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 1500,
  speed = 1.0,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
  className = "",
}: CardSwapProps) => {
  const s = speed > 0 ? 1 / speed : 1;

  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2 * s,
          durMove: 2 * s,
          durReturn: 2 * s,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8 * s,
          durMove: 0.8 * s,
          durReturn: 0.8 * s,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnimatingRef = useRef(false);
  const isPausedRef = useRef(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current!, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const scheduleSwap = (swap: () => void) => {
      clearTimer();
      if (!isPausedRef.current) {
        timerRef.current = setTimeout(swap, effectiveDelay);
      }
    };

    const swap = () => {
      if (order.current.length < 2 || isAnimatingRef.current || isPausedRef.current) return;
      isAnimatingRef.current = true;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: `+=${height * 0.8}`,
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.5 * s}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, "return");
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
        isAnimatingRef.current = false;
        scheduleSwap(swap);
      });
    };

    const effectiveDelay = delay / speed;
    scheduleSwap(swap);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        isPausedRef.current = true;
        clearTimer();
      };
      const resume = () => {
        isPausedRef.current = false;
        if (!isAnimatingRef.current) scheduleSwap(swap);
      };
      node?.addEventListener("mouseenter", pause);
      node?.addEventListener("mouseleave", resume);
      return () => {
        node?.removeEventListener("mouseenter", pause);
        node?.removeEventListener("mouseleave", resume);
        clearTimer();
        tlRef.current?.kill();
        gsap.killTweensOf(refs.map((ref) => ref.current).filter(Boolean));
      };
    }
    return () => {
      clearTimer();
      tlRef.current?.kill();
      gsap.killTweensOf(refs.map((ref) => ref.current).filter(Boolean));
    };
  }, [cardDistance, verticalDistance, delay, speed, pauseOnHover, skewAmount, easing, height, refs]);

  // Fixed TypeScript errors here:
  const rendered = childArr.map((child, i) => {
    if (!isValidElement(child)) return child;
    const childElement = child as React.ReactElement<React.HTMLAttributes<HTMLDivElement>>;
    return cloneElement(childElement, {
      key: i,
      ref: refs[i],
      style: { width, height, ...(childElement.props.style ?? {}) },
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        childElement.props.onClick?.(e);
        onCardClick?.(i);
      },
    } as React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>);
  });

  return (
    <div
      ref={container}
      className={`relative w-full h-full perspective-[900px] overflow-visible ${className}`}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;