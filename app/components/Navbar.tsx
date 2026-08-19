"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0a0a0a] border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center gap-1">
          <span className="text-[#00629B]">IEEE</span> ISGIS
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-[#00629B] transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-[#00629B] transition">About Us</Link></li>
          <li className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-[#00629B] transition"
            >
              Our Work <span className="text-xs">▾</span>
            </button>
            <ul className={`absolute left-0 top-full mt-2 w-56 bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-lg shadow-lg py-2 ${dropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
              <li><Link href="/events" className="block px-4 py-2 hover:bg-[#00629B]/10 dark:hover:bg-[#00629B]/20">Events</Link></li>
              <li><Link href="/awards" className="block px-4 py-2 hover:bg-[#00629B]/10 dark:hover:bg-[#00629B]/20">Awards</Link></li>
              <li><Link href="/chapters" className="block px-4 py-2 hover:bg-[#00629B]/10 dark:hover:bg-[#00629B]/20">Chapters &amp; Affinity Groups</Link></li>
            </ul>
          </li>
          <li><Link href="/contact" className="hover:text-[#00629B] transition">Contact Us</Link></li>
        </ul>

        {/* Join Us Button */}
        <div className="hidden md:block">
          <Link href="/join" className="bg-[#00629B] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#004b78] transition">
            Join Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 px-4 py-4 space-y-3">
          <Link href="/" className="block hover:text-[#00629B]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-[#00629B]" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <div>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 hover:text-[#00629B]">
              Our Work <span className="text-xs">▾</span>
            </button>
            {dropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li><Link href="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link></li>
                <li><Link href="/awards" onClick={() => setMobileMenuOpen(false)}>Awards</Link></li>
                <li><Link href="/chapters" onClick={() => setMobileMenuOpen(false)}>Chapters &amp; Affinity Groups</Link></li>
              </ul>
            )}
          </div>
          <Link href="/contact" className="block hover:text-[#00629B]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          <Link href="/join" className="block bg-[#00629B] text-white text-center px-5 py-2 rounded-full text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
}