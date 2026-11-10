"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Home#2", href: "/home2" },
    { label: "Shop", href: "#shop" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full relative z-30 pt-6 pb-4 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group" aria-label="Home">
          <svg
            className="w-8 h-8 text-neutral-900 group-hover:scale-105 transition-transform"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 4-loop geometric interlocking knot logo */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 5a4.5 4.5 0 0 0-4.5 4.5v1A4.5 4.5 0 0 0 5 12.5a4.5 4.5 0 0 0 0 5 4.5 4.5 0 0 0 3 2v1a4.5 4.5 0 0 0 4.5 4.5 4.5 4.5 0 0 0 5 0 4.5 4.5 0 0 0 4.5-4.5v-1a4.5 4.5 0 0 0 3-2 4.5 4.5 0 0 0 0-5 4.5 4.5 0 0 0-3-2v-1A4.5 4.5 0 0 0 17.5 5a4.5 4.5 0 0 0-5 0zm-2 4.5a2 2 0 1 1 4 0v1h-4v-1zm7 0a2 2 0 1 1 4 0v1h-4v-1zm-7 13a2 2 0 1 1 4 0v-1h-4v1zm7 0a2 2 0 1 1 4 0v-1h-4v1zM7.5 14.5a2 2 0 1 1 0 3h1v-3h-1zm16 0a2 2 0 1 1 0 3h-1v-3h1z"
            />
          </svg>
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-neutral-950 font-semibold"
                    : "text-neutral-700 hover:text-neutral-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="#buy"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1e1e21] hover:bg-neutral-900 active:scale-95 text-white text-[14px] font-medium tracking-tight shadow-sm hover:shadow transition-all duration-200"
          >
            Buy Template
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-neutral-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 pb-3 border-t border-neutral-200/60 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-neutral-100 text-neutral-950 font-bold"
                    : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
