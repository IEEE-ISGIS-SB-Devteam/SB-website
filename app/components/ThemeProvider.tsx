"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";

    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    document.body.style.setProperty(
      "background-color",
      theme === "dark" ? "#0a0a0a" : "#ffffff",
      "important",
    );

    document.querySelectorAll<HTMLElement>(".theme-input").forEach((input) => {
      input.style.setProperty("background-color", theme === "dark" ? "#1a1a1a" : "#f9fafb", "important");
      input.style.setProperty("border-color", theme === "dark" ? "#2a2a2a" : "#e5e7eb", "important");
      input.style.setProperty("color", theme === "dark" ? "#f1f5f9" : "#0a0a0a", "important");
    });
  }, [theme]);

  useEffect(() => {
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      setTheme(event.matches ? "dark" : "light");
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}