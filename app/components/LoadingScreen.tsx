"use client";

import { useEffect, useState } from "react";
import Particles from "./Particles";

type LoadingScreenProps = {
  logoPath: string;
  logoAlt?: string;
  minimumDisplayTime?: number;
};

const traces = [
  "M0 120H280V340H470",
  "M1000 180H720V380H520",
  "M0 860H260V620H480",
  "M1000 820H740V600H510",
  "M150 0V220H400V455",
  "M850 1000V760H600V545",
];

const nodes = [
  [280, 340], [720, 380], [260, 620], [740, 600], [400, 220], [600, 760],
];

export default function LoadingScreen({
  logoPath,
  logoAlt = "IEEE ISGIS",
  minimumDisplayTime = 2400,
}: LoadingScreenProps) {
  const [sessionState, setSessionState] = useState<"checking" | "show" | "skip">("checking");
  const [progress, setProgress] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let nextState: "show" | "skip" = "show";

    try {
      if (sessionStorage.getItem("hasSeenLoader") === "true") {
        nextState = "skip";
      }
    } catch {
      // Continue showing the loader when storage is unavailable.
    }

    const stateTimer = window.setTimeout(() => setSessionState(nextState), 0);
    return () => window.clearTimeout(stateTimer);
  }, []);

  useEffect(() => {
    if (sessionState !== "show") return;

    let minimumTimer = 0;
    let progressTimer = 0;

    const markLoaded = () => setPageLoaded(true);
    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded, { once: true });
    }

    minimumTimer = window.setTimeout(() => setMinimumTimeElapsed(true), minimumDisplayTime);

    progressTimer = window.setInterval(() => {
      setProgress((currentProgress) => {
        const canFinish = pageLoaded && minimumTimeElapsed;
        const target = canFinish ? 100 : 92;
        const increment = canFinish ? 8 + Math.random() * 8 : 3 + Math.random() * 7;
        return Math.min(target, currentProgress + increment);
      });
    }, 140);

    return () => {
      window.removeEventListener("load", markLoaded);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(progressTimer);
      window.clearInterval(progressTimer);
    };
  }, [minimumDisplayTime, minimumTimeElapsed, pageLoaded, sessionState]);

  useEffect(() => {
    if (sessionState !== "show") return;
    if (!pageLoaded || !minimumTimeElapsed || progress < 100) return;

    const exitTimer = window.setTimeout(() => {
      try {
        sessionStorage.setItem("hasSeenLoader", "true");
      } catch {
        // The loader can still dismiss when session storage is unavailable.
      }
      setIsVisible(false);
    }, 650);
    return () => window.clearTimeout(exitTimer);
  }, [pageLoaded, minimumTimeElapsed, progress, sessionState]);

  if (sessionState !== "show" || !isVisible) return null;

  const isExiting = pageLoaded && minimumTimeElapsed && progress >= 100;

  return (
    <div
      className={`loading-screen fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-(--background) text-(--foreground) ${isExiting ? "loading-screen--exit" : ""}`}
      role="status"
      aria-label="Loading IEEE ISGIS website"
      aria-live="polite"
      style={{ "--loading-progress": `${progress}%` } as React.CSSProperties}
    >
      <Particles className="absolute inset-0 z-0 h-full w-full" quantity={100} opacity={0.55} />
      <svg className="loading-screen__traces absolute inset-0 z-[1] h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        {traces.map((trace, index) => (
          <path key={trace} d={trace} pathLength="1000" style={{ "--trace-index": index } as React.CSSProperties} />
        ))}
        {nodes.map(([cx, cy], index) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" style={{ "--node-index": index } as React.CSSProperties} />
        ))}
      </svg>

      <div className="relative z-10 flex w-full flex-col items-center px-6">
        <div className="loading-screen__ring relative flex aspect-square w-56 items-center justify-center sm:w-72 md:w-80 lg:w-96">
          <div className="loading-screen__ring-line absolute inset-[8%] rounded-full border border-(--ieee-blue)/60" />
          <img src={logoPath} alt={logoAlt} className="loading-screen__logo relative z-10 h-auto w-40 object-contain sm:w-56 md:w-80 lg:w-96" />
        </div>
        <div className="loading-screen__progress mt-10 w-full max-w-xs sm:mt-12 sm:max-w-sm">
          <div className="flex items-center justify-between text-base font-semibold tracking-[0.12em] text-(--foreground) md:text-lg">
            <span>INITIALIZING</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="mt-3 h-px w-full overflow-hidden bg-(--card-border)">
            <div className="h-full bg-(--ieee-blue) transition-[width] duration-100 ease-linear" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}