"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Ref for the dropdown container (to detect clicks outside)
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center gap-1 text-gray-900 dark:text-white">
          <span className="text-[#00629B]">IEEE</span> ISGIS
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition">
              About Us
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
            >
              Our Work <span className="text-xs">▾</span>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-lg shadow-lg py-2">
                <li>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] hover:text-[#00629B] dark:hover:text-[#00629B] transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/awards"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] hover:text-[#00629B] dark:hover:text-[#00629B] transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Awards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chapters"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] hover:text-[#00629B] dark:hover:text-[#00629B] transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Chapters &amp; Affinity Groups
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right side: Join button + Theme toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition text-xl text-gray-700 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <Link
            href="/join"
            className="bg-[#00629B] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#004b78] transition"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile hamburger + toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition text-xl text-gray-700 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/10 px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
            >
              Our Work <span className="text-xs">▾</span>
            </button>
            {dropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link
                    href="/events"
                    className="block text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/awards"
                    className="block text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    Awards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chapters"
                    className="block text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setDropdownOpen(false);
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
            className="block text-gray-700 dark:text-gray-200 hover:text-[#00629B] dark:hover:text-[#00629B] transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/join"
            className="block bg-[#00629B] text-white text-center px-5 py-2 rounded-full text-sm font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
}