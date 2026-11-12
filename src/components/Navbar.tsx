"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TEMPLATE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const [dropdownPath, setDropdownPath] = useState<string | null>(null);
  const [mobileTemplateOpen, setMobileTemplateOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isDark =
    dark ||
    pathname === "/templates" ||
    pathname === "/home3" ||
    pathname === "/template/photography/1" ||
    pathname === "/template/photography/3" ||
    pathname === "/template/photography/5" ||
    pathname === "/template/photography/8";
  const isTemplateRoute =
    pathname === "/template" || pathname.startsWith("/template/");

  const mobileMenuOpen = mobileMenuPath === pathname;
  const templateDropdownOpen = dropdownPath === pathname;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownPath(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownPath(null);
        setMobileMenuPath(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Home#2", href: "/home2" },
    { label: "Home#3", href: "/home3" },
    { label: "#4", href: "/home4" },
    { label: "Templates", href: "/templates" },
    { label: "Template", href: "/template", hasDropdown: true },
    { label: "Pricing", href: "/#pricing" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`w-full relative z-30 pt-5 pb-4 px-6 sm:px-10 lg:px-14 ${
        isDark ? "border-b border-[#2a2438]" : "max-w-7xl mx-auto"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group" aria-label="Home">
          <svg
            className={`w-8 h-8 group-hover:scale-105 transition-transform ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
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
        <nav className="hidden md:flex items-center gap-3.5 lg:gap-5 xl:gap-7">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setDropdownPath(pathname);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setDropdownPath(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={templateDropdownOpen}
                    aria-haspopup="menu"
                    onClick={() =>
                      setDropdownPath((prev) =>
                        prev === pathname ? null : pathname
                      )
                    }
                    className={`inline-flex items-center gap-1 text-[14px] lg:text-[15px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      isDark
                        ? isTemplateRoute
                          ? "text-white font-semibold"
                          : "text-neutral-300 hover:text-white"
                        : isTemplateRoute
                        ? "text-neutral-950 font-semibold"
                        : "text-neutral-700 hover:text-neutral-950"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        templateDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Panel (1 to 10) */}
                  {templateDropdownOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50"
                    >
                      <div
                        className={`w-60 rounded-2xl border backdrop-blur-xl shadow-xl p-1.5 ${
                          isDark
                            ? "bg-[#1c1729]/95 border-[#322947] text-neutral-200"
                            : "bg-white/95 border-neutral-200/80 text-neutral-800"
                        }`}
                      >
                        <div
                          className={`px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${
                            isDark ? "text-neutral-400" : "text-neutral-400"
                          }`}
                        >
                          Photography (1–10)
                        </div>
                        <div className="space-y-0.5">
                          {TEMPLATE_NUMBERS.map((num) => {
                            const href = `/template/photography/${num}`;
                            const isItemActive = pathname === href;
                            return (
                              <Link
                                key={num}
                                href={href}
                                role="menuitem"
                                onClick={() => setDropdownPath(null)}
                                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] transition-colors ${
                                  isDark
                                    ? isItemActive
                                      ? "bg-[#7c5dfa]/25 text-white font-semibold"
                                      : "text-neutral-200 hover:bg-[#2a223b] hover:text-white"
                                    : isItemActive
                                    ? "bg-neutral-900 text-white font-semibold"
                                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                                }`}
                              >
                                <span className="font-medium tabular-nums">
                                  {num}
                                </span>
                                <span
                                  className={`text-[11px] font-mono ${
                                    isItemActive
                                      ? isDark
                                        ? "text-purple-200"
                                        : "text-neutral-300"
                                      : isDark
                                      ? "text-neutral-400"
                                      : "text-neutral-400"
                                  }`}
                                >
                                  /template/photography/{num}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] lg:text-[15px] font-medium whitespace-nowrap transition-colors ${
                  isDark
                    ? isActive
                      ? "text-white font-semibold"
                      : "text-neutral-300 hover:text-white"
                    : isActive
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
            className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full active:scale-95 text-[14px] font-medium tracking-tight whitespace-nowrap shadow-sm hover:shadow transition-all duration-200 ${
              isDark
                ? "bg-[#7c5dfa] hover:bg-[#6a48ee] text-white"
                : "bg-[#1e1e21] hover:bg-neutral-900 text-white"
            }`}
          >
            Buy Template
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenuPath((prev) => (prev === pathname ? null : pathname))
            }
            className={`md:hidden p-2 focus:outline-none ${
              isDark
                ? "text-neutral-200 hover:text-white"
                : "text-neutral-800 hover:text-neutral-950"
            }`}
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
        <div
          className={`md:hidden mt-4 pt-4 pb-3 border-t backdrop-blur-md rounded-2xl p-4 shadow-lg space-y-2 ${
            isDark
              ? "border-[#2a2438] bg-[#1e192a]/95"
              : "border-neutral-200/60 bg-white/90"
          }`}
        >
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.label} className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setMobileTemplateOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between text-base font-medium px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                      isDark
                        ? isTemplateRoute
                          ? "bg-[#2c253d] text-white font-bold"
                          : "text-neutral-300 hover:text-white hover:bg-[#251f33]"
                        : isTemplateRoute
                        ? "bg-neutral-100 text-neutral-950 font-bold"
                        : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileTemplateOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {mobileTemplateOpen && (
                    <div className="grid grid-cols-5 gap-1.5 px-3 pb-1">
                      {TEMPLATE_NUMBERS.map((num) => {
                        const href = `/template/photography/${num}`;
                        const isItemActive = pathname === href;
                        return (
                          <Link
                            key={num}
                            href={href}
                            onClick={() => setMobileMenuPath(null)}
                            className={`py-2 rounded-lg text-center text-sm font-semibold tabular-nums transition-colors ${
                              isDark
                                ? isItemActive
                                  ? "bg-[#7c5dfa] text-white"
                                  : "bg-[#282138] text-neutral-200 hover:bg-[#342b47]"
                                : isItemActive
                                ? "bg-neutral-900 text-white"
                                : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                            }`}
                          >
                            {num}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuPath(null)}
                className={`block text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                  isDark
                    ? isActive
                      ? "bg-[#2c253d] text-white font-bold"
                      : "text-neutral-300 hover:text-white hover:bg-[#251f33]"
                    : isActive
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
