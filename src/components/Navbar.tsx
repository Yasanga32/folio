"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TEMPLATE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface TemplateCategory {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  badge?: string;
  href: string;
  hasSubmenu: boolean;
}

const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: "developers-it",
    name: "Developers & IT Professionals",
    shortName: "Developers & IT",
    slug: "developers-it",
    badge: "10 Templates",
    href: "/template/developers-it",
    hasSubmenu: true,
  },
  {
    id: "students-graduates",
    name: "Students & Graduates",
    shortName: "Students & Graduates",
    slug: "students-graduates",
    badge: "10 Templates",
    href: "/template/students-graduates",
    hasSubmenu: true,
  },
  {
    id: "photographers",
    name: "Photographers",
    shortName: "Photography",
    slug: "photography",
    badge: "10 Templates",
    href: "/template/photography",
    hasSubmenu: true,
  },
  {
    id: "graphic-designers",
    name: "Graphic Designers",
    shortName: "Graphic Designers",
    slug: "graphic-designers",
    badge: "10 Templates",
    href: "/template/graphic-designers",
    hasSubmenu: true,
  },
  {
    id: "ui-ux-designers",
    name: "UI/UX Designers",
    shortName: "UI/UX Designers",
    slug: "ui-ux-designers",
    badge: "10 Templates",
    href: "/template/ui-ux-designers",
    hasSubmenu: true,
  },
  {
    id: "freelancers-consultants",
    name: "Freelancers & Consultants",
    shortName: "Freelancers & Consultants",
    slug: "freelancers-consultants",
    badge: "10 Templates",
    href: "/template/freelancers-consultants",
    hasSubmenu: true,
  },
  {
    id: "videographers-filmmakers",
    name: "Videographers & Filmmakers",
    shortName: "Videographers & Filmmakers",
    slug: "videographers-filmmakers",
    badge: "10 Templates",
    href: "/template/videographers-filmmakers",
    hasSubmenu: true,
  },
  {
    id: "artists-illustrators",
    name: "Artists & Illustrators",
    shortName: "Artists & Illustrators",
    slug: "artists-illustrators",
    badge: "10 Templates",
    href: "/template/artists-illustrators",
    hasSubmenu: true,
  },
  {
    id: "fashion-designers-stylists",
    name: "Fashion Designers & Stylists",
    shortName: "Fashion Designers",
    slug: "fashion-designers-stylists",
    badge: "10 Templates",
    href: "/template/fashion-designers-stylists",
    hasSubmenu: true,
  },
  {
    id: "models-actors",
    name: "Models & Actors",
    shortName: "Models & Actors",
    slug: "models-actors",
    badge: "10 Templates",
    href: "/template/models-actors",
    hasSubmenu: true,
  },
  {
    id: "architects-interior-designers",
    name: "Architects & Interior Designers",
    shortName: "Architects & Interior",
    slug: "architects-interior-designers",
    badge: "10 Templates",
    href: "/template/architects-interior-designers",
    hasSubmenu: true,
  },
  {
    id: "musicians-performers",
    name: "Musicians & Performers",
    shortName: "Musicians & Performers",
    slug: "musicians-performers",
    badge: "10 Templates",
    href: "/template/musicians-performers",
    hasSubmenu: true,
  },
  {
    id: "writers-authors",
    name: "Writers & Authors",
    shortName: "Writers & Authors",
    slug: "writers-authors",
    badge: "10 Templates",
    href: "/template/writers-authors",
    hasSubmenu: true,
  },
  {
    id: "marketing-professionals",
    name: "Marketing Professionals",
    shortName: "Marketing Professionals",
    slug: "marketing-professionals",
    badge: "10 Templates",
    href: "/template/marketing-professionals",
    hasSubmenu: true,
  },
  {
    id: "teachers-coaches",
    name: "Teachers & Coaches",
    shortName: "Teachers & Coaches",
    slug: "teachers-coaches",
    badge: "10 Templates",
    href: "/template/teachers-coaches",
    hasSubmenu: true,
  },
];

function CategoryIcon({
  id,
  className = "w-3.5 h-3.5",
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case "developers-it":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "students-graduates":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "photographers":
      return (
        <svg
          className={className}
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
      );
    case "graphic-designers":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "ui-ux-designers":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "freelancers-consultants":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "videographers-filmmakers":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      );
    case "artists-illustrators":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 11-4-4L2 19v3h3z" />
          <path d="m14 7 3-3a2.5 2.5 0 0 1 3.5 3.5L17.5 10.5" />
        </svg>
      );
    case "fashion-designers-stylists":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a3 3 0 0 0-3 3c0 1.3.8 2.4 2 2.8V9L4 14v2h16v-2l-7-5V7.8c1.2-.4 2-1.5 2-2.8a3 3 0 0 0-3-3z" />
        </svg>
      );
    case "models-actors":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "architects-interior-designers":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2 22 10-20 10 20" />
          <path d="M6 14h12" />
        </svg>
      );
    case "musicians-performers":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "writers-authors":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10M6 10h10M6 14h6" />
        </svg>
      );
    case "marketing-professionals":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 11 18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case "teachers-coaches":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16v11H4z" />
          <path d="M12 15v5M8 20h8" />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const [dropdownPath, setDropdownPath] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>("photographers");
  const [mobileTemplateOpen, setMobileTemplateOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>("photographers");
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

  const activeCategory =
    TEMPLATE_CATEGORIES.find((c) => c.id === activeSubmenu) ||
    TEMPLATE_CATEGORIES.find(
      (c) =>
        pathname === c.href ||
        pathname.startsWith(`/template/${c.slug}/`)
    ) ||
    TEMPLATE_CATEGORIES[0];

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

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

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
                      setActiveSubmenu((prev) => prev || "photographers");
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
                      setDropdownPath((prev) => {
                        if (prev === pathname) return null;
                        setActiveSubmenu((sub) => sub || "photographers");
                        return pathname;
                      });
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
                      <div className="relative">
                        {/* Level 1: Categories Panel */}
                        <div
                          className={`w-72 sm:w-80 rounded-2xl border backdrop-blur-xl shadow-2xl p-1.5 ${
                            isDark
                              ? "bg-[#1c1729]/95 border-[#322947] text-neutral-200"
                              : "bg-white/95 border-neutral-200/80 text-neutral-800"
                          }`}
                        >
                          <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400">
                            <span>Categories ({TEMPLATE_CATEGORIES.length})</span>
                            <Link
                              href="/templates"
                              onClick={() => {
                                setDropdownPath(null);
                                setActiveSubmenu(null);
                              }}
                              className={`hover:underline lowercase font-mono ${
                                isDark ? "text-purple-300" : "text-neutral-600"
                              }`}
                            >
                              view all
                            </Link>
                          </div>

                          {/* Scrollable list of 15 categories */}
                          <div className="max-h-[min(480px,calc(100vh-140px))] overflow-y-auto space-y-0.5 pr-0.5">
                            {TEMPLATE_CATEGORIES.map((cat) => {
                              const isCatActive =
                                pathname === cat.href ||
                                pathname.startsWith(`/template/${cat.slug}/`);
                              const isSubOpen = activeSubmenu === cat.id;

                              return (
                                <Link
                                  key={cat.id}
                                  href={cat.href}
                                  role="menuitem"
                                  aria-haspopup="menu"
                                  aria-expanded={isSubOpen}
                                  onClick={() => {
                                    setDropdownPath(null);
                                    setActiveSubmenu(null);
                                  }}
                                  onMouseEnter={() => setActiveSubmenu(cat.id)}
                                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-[13px] transition-colors cursor-pointer group ${
                                    isCatActive
                                      ? isDark
                                        ? "bg-[#7c5dfa]/20 text-white font-semibold"
                                        : "bg-neutral-100 text-neutral-950 font-semibold"
                                      : isDark
                                      ? isSubOpen
                                        ? "bg-[#2a223b] text-white"
                                        : "text-neutral-200 hover:bg-[#2a223b] hover:text-white"
                                      : isSubOpen
                                      ? "bg-neutral-100 text-neutral-950"
                                      : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <span
                                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                                        isDark
                                          ? "bg-[#2c2340] text-purple-300"
                                          : "bg-neutral-100 text-neutral-700"
                                      }`}
                                    >
                                      <CategoryIcon id={cat.id} />
                                    </span>
                                    <span className="font-medium text-[12.5px] truncate">
                                      {cat.name}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-1.5 shrink-0">
                                    <span
                                      className={`text-[9.5px] px-1.5 py-0.5 rounded-full font-medium ${
                                        isDark
                                          ? "bg-purple-500/20 text-purple-300"
                                          : "bg-neutral-200/70 text-neutral-700"
                                      }`}
                                    >
                                      10
                                    </span>
                                    <svg
                                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                        isSubOpen
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
                                  </div>
                                </Link>
                              );
                            })}
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
                              className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-[12.5px] transition-colors ${
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
                                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
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
                                <span className="font-medium text-[12.5px]">
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

                        {/* Level 2 Submenu: Dynamic for whichever category is active/hovered (1 to 10) */}
                        {activeSubmenu && activeCategory && (
                          <div
                            role="menu"
                            className="absolute left-full top-0 pl-2 z-50"
                            onMouseEnter={() =>
                              setActiveSubmenu(activeCategory.id)
                            }
                          >
                            <div
                              className={`w-64 sm:w-72 max-h-[min(480px,calc(100vh-140px))] overflow-y-auto rounded-2xl border backdrop-blur-xl shadow-2xl p-1.5 ${
                                isDark
                                  ? "bg-[#1c1729]/95 border-[#322947] text-neutral-200"
                                  : "bg-white/95 border-neutral-200/80 text-neutral-800"
                              }`}
                            >
                              <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-black/5 dark:border-white/5 mb-1">
                                <span
                                  className={`text-[10px] font-bold uppercase tracking-[0.14em] truncate pr-2 ${
                                    isDark
                                      ? "text-neutral-400"
                                      : "text-neutral-400"
                                  }`}
                                >
                                  {activeCategory.shortName} (1–10)
                                </span>
                                <Link
                                  href={activeCategory.href}
                                  onClick={() => {
                                    setDropdownPath(null);
                                    setActiveSubmenu(null);
                                  }}
                                  className={`text-[10px] font-semibold transition-colors hover:underline shrink-0 ${
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
                                  const href = `/template/${activeCategory.slug}/${num}`;
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
                                        /{activeCategory.slug}/{num}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}
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
                onClick={(e) => handleNavClick(e, link.href)}
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
                    <div className="pl-3 pr-1 pt-1 space-y-2 border-l-2 border-neutral-200/50 dark:border-neutral-800 ml-2 max-h-[60vh] overflow-y-auto">
                      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400 px-2 flex items-center justify-between">
                        <span>Categories ({TEMPLATE_CATEGORIES.length})</span>
                        <Link
                          href="/templates"
                          onClick={() => setMobileMenuPath(null)}
                          className="text-[10px] lowercase font-mono underline text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                        >
                          view all
                        </Link>
                      </div>

                      {TEMPLATE_CATEGORIES.map((cat) => {
                        const isCatActive =
                          pathname === cat.href ||
                          pathname.startsWith(`/template/${cat.slug}/`);
                        const isExpanded = mobileExpandedCat === cat.id;

                        return (
                          <div key={cat.id} className="space-y-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                setMobileExpandedCat((prev) =>
                                  prev === cat.id ? null : cat.id
                                )
                              }
                              className={`w-full flex items-center justify-between text-sm font-medium px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                                isDark
                                  ? isCatActive
                                    ? "bg-[#2c253d] text-white font-semibold"
                                    : "text-neutral-300 hover:text-white hover:bg-[#251f33]"
                                  : isCatActive
                                  ? "bg-neutral-100 text-neutral-950 font-semibold"
                                  : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50"
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="w-5 h-5 rounded-md flex items-center justify-center shrink-0">
                                  <CategoryIcon id={cat.id} />
                                </span>
                                <span className="truncate">{cat.name}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold shrink-0">
                                  10
                                </span>
                              </div>
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                                  isExpanded ? "rotate-180" : ""
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

                            {/* Level 2 Items: 10 Templates */}
                            {isExpanded && (
                              <div className="pl-2 pt-1 pb-1 space-y-2">
                                <div className="grid grid-cols-5 gap-1.5">
                                  {TEMPLATE_NUMBERS.map((num) => {
                                    const href = `/template/${cat.slug}/${num}`;
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
                                  href={cat.href}
                                  onClick={() => setMobileMenuPath(null)}
                                  className={`block text-xs py-1 px-1 transition-colors ${
                                    isDark
                                      ? "text-purple-300 hover:text-white"
                                      : "text-neutral-600 hover:text-neutral-950"
                                  }`}
                                >
                                  All {cat.shortName} Templates &rarr;
                                </Link>
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Level 1 Item: All Templates Directory */}
                      <div className="pt-1 border-t border-neutral-200/50 dark:border-neutral-800">
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
                onClick={(e) => {
                  setMobileMenuPath(null);
                  handleNavClick(e, link.href);
                }}
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
