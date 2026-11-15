"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TEMPLATE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const [dropdownPath, setDropdownPath] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileTemplateOpen, setMobileTemplateOpen] = useState(false);
  const [mobilePhotographyOpen, setMobilePhotographyOpen] = useState(true);
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
  const isPhotographyRoute =
    pathname === "/template/photography" ||
    pathname.startsWith("/template/photography/");

  const mobileMenuOpen = mobileMenuPath === pathname;
  const templateDropdownOpen = dropdownPath === pathname;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownPath(null);
        setActiveSubmenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownPath(null);
        setMobileMenuPath(null);
        setActiveSubmenu(null);
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
                      setActiveSubmenu("photography");
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setDropdownPath(null);
                      setActiveSubmenu(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={templateDropdownOpen}
                    aria-haspopup="menu"
                    onClick={() => {
                      setDropdownPath((prev) =>
                        prev === pathname ? null : pathname
                      );
                      setActiveSubmenu("photography");
                    }}
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

                  {/* Level 1: Categories Dropdown Panel */}
                  {templateDropdownOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50"
                    >
                      <div
                        className={`w-60 rounded-2xl border backdrop-blur-xl shadow-2xl p-1.5 ${
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
                          Categories
                        </div>

                        {/* First item of dropdown: Photography (opens Level 2: 1 to 10) */}
                        <div
                          className="relative"
                          onMouseEnter={() => setActiveSubmenu("photography")}
                        >
                          <button
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={activeSubmenu === "photography"}
                            onClick={() =>
                              setActiveSubmenu((prev) =>
                                prev === "photography" ? null : "photography"
                              )
                            }
                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-[13px] transition-colors cursor-pointer group ${
                              isPhotographyRoute
                                ? isDark
                                  ? "bg-[#7c5dfa]/20 text-white font-semibold"
                                  : "bg-neutral-100 text-neutral-950 font-semibold"
                                : isDark
                                ? activeSubmenu === "photography"
                                  ? "bg-[#2a223b] text-white"
                                  : "text-neutral-200 hover:bg-[#2a223b] hover:text-white"
                                : activeSubmenu === "photography"
                                ? "bg-neutral-100 text-neutral-950"
                                : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                  isDark
                                    ? "bg-[#2c2340] text-purple-300"
                                    : "bg-neutral-100 text-neutral-700"
                                }`}
                              >
                                <svg
                                  className="w-3.5 h-3.5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                  <circle cx="12" cy="13" r="3" />
                                </svg>
                              </span>
                              <div className="text-left">
                                <span className="block font-medium text-[13px] leading-tight">
                                  Photography
                                </span>
                                <span
                                  className={`block text-[10px] ${
                                    isDark
                                      ? "text-neutral-400"
                                      : "text-neutral-400"
                                  }`}
                                >
                                  10 Templates
                                </span>
                              </div>
                            </div>

                            <svg
                              className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                                activeSubmenu === "photography"
                                  ? "translate-x-0.5 text-current"
                                  : "text-neutral-400"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>

                          {/* Level 2 Submenu: Photography (1 to 10) */}
                          {activeSubmenu === "photography" && (
                            <div
                              role="menu"
                              className="absolute left-full top-0 pl-2 z-50"
                              onMouseEnter={() =>
                                setActiveSubmenu("photography")
                              }
                            >
                              <div
                                className={`w-64 max-h-[75vh] overflow-y-auto rounded-2xl border backdrop-blur-xl shadow-2xl p-1.5 ${
                                  isDark
                                    ? "bg-[#1c1729]/95 border-[#322947] text-neutral-200"
                                    : "bg-white/95 border-neutral-200/80 text-neutral-800"
                                }`}
                              >
                                <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-black/5 dark:border-white/5 mb-1">
                                  <span
                                    className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                                      isDark
                                        ? "text-neutral-400"
                                        : "text-neutral-400"
                                    }`}
                                  >
                                    Photography (1–10)
                                  </span>
                                  <Link
                                    href="/template/photography"
                                    onClick={() => {
                                      setDropdownPath(null);
                                      setActiveSubmenu(null);
                                    }}
                                    className={`text-[10px] font-semibold transition-colors hover:underline ${
                                      isDark
                                        ? "text-purple-300 hover:text-white"
                                        : "text-neutral-600 hover:text-neutral-950"
                                    }`}
                                  >
                                    All &rarr;
                                  </Link>
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
                                        onClick={() => {
                                          setDropdownPath(null);
                                          setActiveSubmenu(null);
                                        }}
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
                                        <div className="flex items-center gap-2">
                                          <span
                                            className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-bold tabular-nums shrink-0 border ${
                                              isItemActive
                                                ? "border-transparent bg-white/20 text-white"
                                                : isDark
                                                ? "border-[#322947] bg-[#221c33] text-neutral-300"
                                                : "border-neutral-200 bg-neutral-100 text-neutral-700"
                                            }`}
                                          >
                                            {num}
                                          </span>
                                          <span className="font-medium text-[12.5px]">
                                            Template {num}
                                          </span>
                                        </div>
                                        <span
                                          className={`text-[10.5px] font-mono ${
                                            isItemActive
                                              ? isDark
                                                ? "text-purple-200"
                                                : "text-neutral-300"
                                              : isDark
                                              ? "text-neutral-400"
                                              : "text-neutral-400"
                                          }`}
                                        >
                                          /photography/{num}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* All Templates Directory Link */}
                        <div className="mt-1 pt-1 border-t border-black/5 dark:border-white/5">
                          <Link
                            href="/templates"
                            role="menuitem"
                            onClick={() => {
                              setDropdownPath(null);
                              setActiveSubmenu(null);
                            }}
                            onMouseEnter={() => setActiveSubmenu(null)}
                            className={`flex items-center justify-between px-2.5 py-2 rounded-xl text-[13px] transition-colors ${
                              pathname === "/templates"
                                ? isDark
                                  ? "bg-[#7c5dfa]/20 text-white font-semibold"
                                  : "bg-neutral-100 text-neutral-950 font-semibold"
                                : isDark
                                ? "text-neutral-200 hover:bg-[#2a223b] hover:text-white"
                                : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                  isDark
                                    ? "bg-[#2c2340] text-purple-300"
                                    : "bg-neutral-100 text-neutral-700"
                                }`}
                              >
                                <svg
                                  className="w-3.5 h-3.5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect x="3" y="3" width="7" height="7" rx="1" />
                                  <rect x="14" y="3" width="7" height="7" rx="1" />
                                  <rect x="14" y="14" width="7" height="7" rx="1" />
                                  <rect x="3" y="14" width="7" height="7" rx="1" />
                                </svg>
                              </span>
                              <span className="font-medium text-[13px]">
                                All Templates Directory
                              </span>
                            </div>
                            <span
                              className={`text-[10px] font-mono ${
                                isDark ? "text-neutral-400" : "text-neutral-400"
                              }`}
                            >
                              /templates
                            </span>
                          </Link>
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
                    <div className="pl-3 pr-1 pt-1 space-y-2 border-l-2 border-neutral-200/50 dark:border-neutral-800 ml-2">
                      {/* Level 1 Item: Photography */}
                      <div className="space-y-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            setMobilePhotographyOpen((prev) => !prev)
                          }
                          className={`w-full flex items-center justify-between text-sm font-medium px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                            isDark
                              ? isPhotographyRoute
                                ? "bg-[#2c253d] text-white font-semibold"
                                : "text-neutral-300 hover:text-white hover:bg-[#251f33]"
                              : isPhotographyRoute
                              ? "bg-neutral-100 text-neutral-950 font-semibold"
                              : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-purple-400 shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                              <circle cx="12" cy="13" r="3" />
                            </svg>
                            <span>Photography</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold">
                              10
                            </span>
                          </div>
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              mobilePhotographyOpen ? "rotate-180" : ""
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

                        {/* Level 2 Items: 10 Photography Templates */}
                        {mobilePhotographyOpen && (
                          <div className="pl-2 pt-1 pb-1 space-y-2">
                            <div className="grid grid-cols-5 gap-1.5">
                              {TEMPLATE_NUMBERS.map((num) => {
                                const href = `/template/photography/${num}`;
                                const isItemActive = pathname === href;
                                return (
                                  <Link
                                    key={num}
                                    href={href}
                                    onClick={() => setMobileMenuPath(null)}
                                    className={`py-2 rounded-lg text-center text-xs font-semibold tabular-nums transition-colors ${
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

                            <Link
                              href="/template/photography"
                              onClick={() => setMobileMenuPath(null)}
                              className={`block text-xs py-1 px-1 transition-colors ${
                                isDark
                                  ? "text-purple-300 hover:text-white"
                                  : "text-neutral-600 hover:text-neutral-950"
                              }`}
                            >
                              All Photography Templates &rarr;
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Level 1 Item: All Templates Directory */}
                      <Link
                        href="/templates"
                        onClick={() => setMobileMenuPath(null)}
                        className={`block text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                          isDark
                            ? "text-neutral-300 hover:text-white hover:bg-[#251f33]"
                            : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50"
                        }`}
                      >
                        All Templates Directory
                      </Link>
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
