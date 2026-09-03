"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const dropdownRef = useRef<HTMLElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const insideDesktopDropdown = dropdownRef.current?.contains(target);
      const insideMobileDropdown = mobileDropdownRef.current?.contains(target);

      if (!insideDesktopDropdown && !insideMobileDropdown) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => setDropdownOpen(false);
    if (dropdownOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [dropdownOpen]);

  // Show top bar ONLY at the very top (scrollY === 0)
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* IEEE.org Meta-Navigation – collapses smoothly */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showTopBar ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full bg-[#111827] py-1.5 dark:bg-black">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-3 md:px-4 flex-wrap">
            {/* Left-aligned links */}
            <div className="flex items-center gap-2 md:gap-5 flex-wrap">
              <a
                href="https://www.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-[10px] md:text-xs font-medium tracking-wide transition hover:underline"
              >
                IEEE.org
              </a>
              <span className="text-white/30 text-[10px]">|</span>
              <a
                href="https://ieeexplore.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-[10px] md:text-xs font-medium tracking-wide transition hover:underline"
              >
                IEEE Xplore®
              </a>
              <span className="text-white/30 text-[10px] hidden sm:inline">|</span>
              <a
                href="https://standards.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-[10px] md:text-xs font-medium tracking-wide transition hover:underline hidden sm:inline"
              >
                Standards
              </a>
              <span className="text-white/30 text-[10px] hidden sm:inline">|</span>
              <a
                href="https://spectrum.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-[10px] md:text-xs font-medium tracking-wide transition hover:underline hidden md:inline"
              >
                Spectrum
              </a>
              <span className="text-white/30 text-[10px] hidden md:inline">|</span>
              <a
                href="https://www.ieee.org/sitemap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-[10px] md:text-xs font-medium tracking-wide transition hover:underline hidden lg:inline"
              >
                More Sites
              </a>
            </div>

            {/* Right-aligned links */}
            <div className="flex items-center gap-2 md:gap-5 flex-wrap">
              <a
                href="https://www.ieee.org/join"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-[10px] md:text-xs font-medium tracking-wide transition hover:underline"
              >
                Join IEEE
              </a>
              <span className="text-white/30 text-[10px]">|</span>
              <a
                href="https://www.ieee.org/give"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-[10px] md:text-xs font-medium tracking-wide transition hover:underline"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-(--background) border-b border-(--card-border)">
        <div className="container mx-auto px-3 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          {/* Logo – properly constrained on mobile */}
          <div className="flex h-8 w-[140px] flex-shrink-0 items-center overflow-hidden sm:h-12 sm:w-[220px]">
            <Link href="/" className="flex h-full w-full items-center">
              <img
                src="https://i.postimg.cc/SNfyWwDL/Copie-de-Posts-(1)-Photoroom.png"
                alt="IEEE|Tunisia"
                className="theme-logo h-auto w-auto max-h-full max-w-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold uppercase tracking-[0.08em]">
            <li>
              <Link href="/" className="text-(--foreground) hover:text-(--ieee-blue) transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-(--foreground) hover:text-(--ieee-blue) transition">
                About Us
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-(--foreground) hover:text-(--ieee-blue) transition"
              >
                Our Work <span className="text-xs">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-56 bg-(--card-bg) border border-(--card-border) rounded-lg shadow-lg py-2">
                  <li>
                    <Link
                      href="/events"
                      className="block px-4 py-2 text-(--foreground) hover:bg-(--surface-subtle) hover:text-(--ieee-blue) transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awards"
                      className="block px-4 py-2 text-(--foreground) hover:bg-(--surface-subtle) hover:text-(--ieee-blue) transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Awards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chapters"
                      className="block px-4 py-2 text-(--foreground) hover:bg-(--surface-subtle) hover:text-(--ieee-blue) transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Chapters &amp; Affinity Groups
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/contact" className="text-(--foreground) hover:text-(--ieee-blue) transition">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center border border-(--card-border) hover:border-(--ieee-blue) hover:text-(--ieee-blue) transition text-(--foreground)"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="h-4 w-4" />
            </button>
            <Link
              href="/join"
              className="group flex items-center gap-2 border-b-2 border-(--ieee-blue) bg-(--ieee-blue) px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-(--ieee-blue-hover) whitespace-nowrap"
            >
              Join Us
              <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger + toggle */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center border border-(--card-border) hover:border-(--ieee-blue) hover:text-(--ieee-blue) transition text-(--foreground)"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="h-4 w-4" />
            </button>
            <button
              className="flex flex-col gap-1 p-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-0.5 bg-(--foreground)"></span>
              <span className="block w-5 h-0.5 bg-(--foreground)"></span>
              <span className="block w-5 h-0.5 bg-(--foreground)"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-(--background) border-t border-(--card-border) px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-(--foreground) hover:text-(--ieee-blue) transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-(--foreground) hover:text-(--ieee-blue) transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div ref={mobileDropdownRef}>
              <button
                type="button"
                aria-expanded={mobileDropdownOpen}
                onClick={() => setMobileDropdownOpen((previous) => !previous)}
                className="flex w-full items-center gap-1 py-1 text-left text-(--foreground) hover:text-(--ieee-blue) transition"
              >
                Our Work <span className="text-xs">▾</span>
              </button>
              {mobileDropdownOpen && (
                <ul className="mt-2 space-y-1 border-l border-(--card-border) pl-3">
                  <li>
                    <Link
                      href="/events"
                      className="block py-2 text-(--foreground) hover:text-(--ieee-blue) transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awards"
                      className="block py-2 text-(--foreground) hover:text-(--ieee-blue) transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Awards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chapters"
                      className="block py-2 text-(--foreground) hover:text-(--ieee-blue) transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Chapters &amp; Affinity Groups
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              href="/contact"
              className="block text-(--foreground) hover:text-(--ieee-blue) transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/join"
              className="group flex items-center justify-center gap-2 border-b-2 border-(--ieee-blue) bg-(--ieee-blue) px-5 py-2 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-(--ieee-blue-hover)"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
              <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}