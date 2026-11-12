"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface FilmWorkItem {
  id: string;
  title: string;
  category: "Portraits" | "Products" | "Weddings";
  stock: string;
  location: string;
  year: string;
  src: string;
  fallbackSrc: string;
}

const STUDIO_AVATAR = {
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85",
  fallbackSrc:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85",
};

const FILM_WORKS: FilmWorkItem[] = [
  {
    id: "work-golden-knit",
    title: "Sunday Daylight — Knitwear Study",
    category: "Portraits",
    stock: "Kodak Portra 400 · 35mm",
    location: "Williamsburg Rooftop, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-blue-horizon",
    title: "Low Angle Sky & Shades",
    category: "Portraits",
    stock: "Cinestill 400D · 35mm",
    location: "DUMBO Waterfront, Brooklyn",
    year: "2026",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-pastel-cheek",
    title: "Soft Grain Window Portrait",
    category: "Portraits",
    stock: "Kodak Gold 200 · 35mm",
    location: "Greenpoint Studio, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-fuji-morning",
    title: "Shimoyoshida Morning Walk",
    category: "Weddings",
    stock: "Portra 160 · 120mm",
    location: "Fujiyoshida, Japan",
    year: "2026",
    src: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-subway-blur",
    title: "Platform Motion — Late Express",
    category: "Products",
    stock: "Ilford HP5 · Pushed 1600",
    location: "Bedford Ave Station, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-warm-flare",
    title: "Golden Hour Bride & Veil",
    category: "Weddings",
    stock: "Kodak Portra 800 · 35mm",
    location: "Prospect Park Boat House",
    year: "2026",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-ceramic-studio",
    title: "Stoneware & Linen Objects",
    category: "Products",
    stock: "Mamiya 7II · Portra 160",
    location: "Red Hook Loft, Brooklyn",
    year: "2026",
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-garden-vows",
    title: "Conservatory Ceremony",
    category: "Weddings",
    stock: "Contax G2 · Portra 400",
    location: "Brooklyn Botanic Garden",
    year: "2026",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85",
  },
];

// 24 orbital slots evenly spaced every 15deg around a 560px radius arch
const ORBIT_SLOTS = Array.from({ length: 24 }, (_, idx) => {
  const angleDeg = idx * 15;
  const angleRad = (angleDeg * Math.PI) / 180;
  const radius = 560;
  const x = Math.round(radius * Math.sin(angleRad) * 100) / 100;
  const y = Math.round(-radius * Math.cos(angleRad) * 100) / 100;
  const work = FILM_WORKS[idx % 6];
  return {
    slotKey: `orbit-${idx}`,
    angleDeg,
    x,
    y,
    work,
  };
});

function SafeFilmImage({
  src,
  fallbackSrc,
  alt,
  sizes,
  priority = false,
  className = "object-cover",
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const activeSrc = failedSrc === src ? fallbackSrc : src;

  return (
    <Image
      src={activeSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => {
        if (failedSrc !== src) {
          setFailedSrc(src);
        }
      }}
      className={className}
    />
  );
}

function DiagonalArrowIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 11.5L11.5 4.5" />
      <path d="M5.5 4.5H11.5V10.5" />
    </svg>
  );
}

export default function TemplateSevenShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | FilmWorkItem["category"]
  >("All");
  const [lightboxItem, setLightboxItem] = useState<FilmWorkItem | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    shootType: "Portraits",
    details: "",
  });

  const visibleWorks = useMemo(() => {
    if (selectedCategory === "All") {
      return FILM_WORKS;
    }
    return FILM_WORKS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxItem(null);
        setInquiryOpen(false);
      }

      if (lightboxItem) {
        const index = FILM_WORKS.findIndex((w) => w.id === lightboxItem.id);
        if (event.key === "ArrowRight" && index >= 0) {
          setLightboxItem(FILM_WORKS[(index + 1) % FILM_WORKS.length]);
        } else if (event.key === "ArrowLeft" && index >= 0) {
          setLightboxItem(
            FILM_WORKS[(index - 1 + FILM_WORKS.length) % FILM_WORKS.length]
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-[#141416] selection:bg-[#141416] selection:text-white relative">
      {/* Shared Template Switcher Navbar */}
      <div className="border-b border-[#ececf0] bg-[#fbfbfc]">
        <Navbar />
      </div>

      {/* ================================================================= */}
      {/* 1. HERO: GALLERYFOLIO + MOVING ORBITING ARCH + ALEX SMITH         */}
      {/* ================================================================= */}
      <section
        id="alex-top"
        className="relative w-full min-h-[630px] sm:min-h-[695px] overflow-hidden pt-7 sm:pt-9 pb-14 sm:pb-16 flex flex-col justify-between"
      >
        {/* Top Floating GALLERYFOLIO Pill Bar */}
        <header className="relative z-20 px-4 sm:px-6 w-full">
          <div className="max-w-[540px] mx-auto rounded-2xl bg-white/95 backdrop-blur-md border border-[#e6e6eb] shadow-[0_2px_12px_rgba(16,16,20,0.03)] px-5 py-3 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("alex-top")}
              className="inline-flex items-center gap-2 text-[#141416] hover:opacity-75 transition-opacity cursor-pointer"
            >
              {/* 8-dot starburst mark */}
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="4.8" r="1.9" />
                <circle cx="17.1" cy="6.9" r="1.9" />
                <circle cx="19.2" cy="12" r="1.9" />
                <circle cx="17.1" cy="17.1" r="1.9" />
                <circle cx="12" cy="19.2" r="1.9" />
                <circle cx="6.9" cy="17.1" r="1.9" />
                <circle cx="4.8" cy="12" r="1.9" />
                <circle cx="6.9" cy="6.9" r="1.9" />
              </svg>
              <span className="text-[12.5px] sm:text-[13px] font-semibold tracking-[0.02em] uppercase">
                GALLERYFOLIO
              </span>
            </button>

            <nav className="flex items-center gap-5 sm:gap-6">
              <button
                type="button"
                onClick={() => scrollToSection("alex-about")}
                className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#5e5e66] hover:text-[#141416] transition-colors cursor-pointer"
              >
                ABOUT
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("alex-works")}
                className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#5e5e66] hover:text-[#141416] transition-colors cursor-pointer"
              >
                WORKS
              </button>
            </nav>
          </div>
        </header>

        {/* Orbiting Moving Photo Cards Arch */}
        <div
          aria-label="Moving film showcase arch"
          className="pointer-events-none absolute inset-x-0 top-[96px] sm:top-[110px] h-[640px] z-10 origin-top scale-[0.58] sm:scale-[0.82] lg:scale-100"
        >
          <div className="scroll-container relative w-full h-full">
            <div className="animate-orbit-wheel absolute left-1/2 top-[614px] w-0 h-0">
              {ORBIT_SLOTS.map((slot, index) => (
                <button
                  key={slot.slotKey}
                  type="button"
                  onClick={() => setLightboxItem(slot.work)}
                  aria-label={`Open ${slot.work.title}`}
                  style={{
                    left: `${slot.x}px`,
                    top: `${slot.y}px`,
                    transform: `translate(-50%, -50%) rotate(${slot.angleDeg}deg)`,
                  }}
                  className="pointer-events-auto group absolute w-[106px] h-[106px] sm:w-[110px] sm:h-[110px] rounded-[20px] overflow-hidden bg-neutral-200 border border-white/80 shadow-[0_12px_30px_rgba(18,18,22,0.1)] hover:shadow-[0_16px_38px_rgba(18,18,22,0.2)] transition-shadow duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#141416]"
                >
                  <SafeFilmImage
                    src={slot.work.src}
                    fallbackSrc={slot.work.fallbackSrc}
                    alt={slot.work.title}
                    priority={index < 5 || index > 19}
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Artist Identity Block */}
        <div className="relative z-20 max-w-xl mx-auto px-4 text-center mt-[165px] sm:mt-[215px]">
          <button
            type="button"
            onClick={() => scrollToSection("alex-about")}
            aria-label="About Alex Smith"
            className="group relative w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full overflow-hidden bg-neutral-200 mx-auto block shadow-[0_6px_22px_rgba(0,0,0,0.08)] ring-2 ring-white cursor-pointer focus:outline-none focus-visible:ring-[#141416]"
          >
            <SafeFilmImage
              src={STUDIO_AVATAR.src}
              fallbackSrc={STUDIO_AVATAR.fallbackSrc}
              alt="Alex Smith — Brooklyn Photographer"
              priority
              sizes="80px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </button>

          <h1 className="mt-5 text-[38px] sm:text-[52px] lg:text-[60px] font-medium tracking-[-0.025em] leading-[1.04] text-[#141416]">
            ALEX SMITH
          </h1>

          <p className="mt-3.5 max-w-[335px] mx-auto text-[13px] sm:text-[14px] leading-[1.48] text-[#7c7c82]">
            Brooklyn photography studio for portraits, products and weddings,
            shot with a film-inspired eye.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-7 text-[12px] sm:text-[12.5px] font-medium text-[#18181c]">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
            >
              <span>X</span>
              <DiagonalArrowIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
            >
              <span>IG</span>
              <DiagonalArrowIcon />
            </a>
            <button
              type="button"
              onClick={() => {
                setInquirySent(false);
                setInquiryOpen(true);
              }}
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span>alex@gmail.com</span>
              <DiagonalArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. WORKS ARCHIVE (SCROLL TARGET FROM TOP PILL NAV)                */}
      {/* ================================================================= */}
      <section
        id="alex-works"
        className="scroll-mt-6 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24 border-t border-[#ececf0]"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7c7c82]">
              Selected Rolls · 2026
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#141416]">
              Works captured on 35mm &amp; Medium Format
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {(["All", "Portraits", "Products", "Weddings"] as const).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-[11.5px] font-medium transition-colors cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#141416] text-white"
                      : "bg-white border border-[#e5e5ea] text-[#5c5c64] hover:text-[#141416]"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleWorks.map((work) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setLightboxItem(work)}
              className="group text-left cursor-pointer focus:outline-none"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-200 border border-[#e6e6eb]">
                <SafeFilmImage
                  src={work.src}
                  fallbackSrc={work.fallbackSrc}
                  alt={work.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-2.5 flex items-baseline justify-between gap-2">
                <span className="text-[13px] font-medium text-[#141416] truncate">
                  {work.title}
                </span>
                <span className="text-[11px] text-[#7c7c82] shrink-0">
                  {work.category}
                </span>
              </div>
              <p className="text-[11px] text-[#8e8e94] mt-0.5">{work.stock}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. ABOUT STUDIO SECTION (SCROLL TARGET FROM TOP PILL NAV)         */}
      {/* ================================================================= */}
      <section
        id="alex-about"
        className="scroll-mt-6 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24 border-t border-[#ececf0]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7c7c82]">
              Brooklyn Studio · Est. 2019
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#141416] leading-tight">
              Natural daylight, tactile grain, and honest framing.
            </h2>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-[#5e5e66]">
              Working out of a south-facing loft in Red Hook, Brooklyn, Alex
              Smith photographs editorial portraits, tactile product studies,
              and intimate celebrations on Portra 400 and Ilford Tri-X alongside
              tethered medium-format capture.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setInquirySent(false);
                  setInquiryOpen(true);
                }}
                className="rounded-full bg-[#141416] hover:bg-neutral-800 text-white px-5 py-2 text-[12px] font-medium transition-colors cursor-pointer"
              >
                Book a Session
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("alex-top")}
                className="rounded-full bg-white border border-[#e5e5ea] hover:border-[#141416] text-[#141416] px-5 py-2 text-[12px] font-medium transition-colors cursor-pointer"
              >
                Back to Top Arch
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-[#e6e6eb] p-5">
              <div className="text-2xl font-medium tracking-tight text-[#141416]">
                35mm &amp; 120
              </div>
              <p className="mt-1.5 text-[12px] text-[#6d6d74] leading-relaxed">
                Leica M6, Contax G2, and Mamiya 7II film workflows scanned on
                Noritsu HS-1800.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#e6e6eb] p-5">
              <div className="text-2xl font-medium tracking-tight text-[#141416]">
                180+ Shoots
              </div>
              <p className="mt-1.5 text-[12px] text-[#6d6d74] leading-relaxed">
                Lookbooks, ceramic &amp; fragrance objects, and destination
                weddings across NY &amp; Tokyo.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#e6e6eb] p-5">
              <div className="text-2xl font-medium tracking-tight text-[#141416]">
                72h Proofing
              </div>
              <p className="mt-1.5 text-[12px] text-[#6d6d74] leading-relaxed">
                Private online contact sheet turnaround for every commercial or
                portrait booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Minimal Footer */}
      <footer className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 pb-20 border-t border-[#ececf0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#6e6e75]">
        <span>© 2026 Alex Smith · Galleryfolio Brooklyn</span>
        <div className="flex items-center gap-6 text-[#141416] font-medium">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:opacity-65"
          >
            <span>X</span>
            <DiagonalArrowIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:opacity-65"
          >
            <span>IG</span>
            <DiagonalArrowIcon />
          </a>
          <button
            type="button"
            onClick={() => {
              setInquirySent(false);
              setInquiryOpen(true);
            }}
            className="inline-flex items-center gap-1 hover:opacity-65 cursor-pointer"
          >
            <span>alex@gmail.com</span>
            <DiagonalArrowIcon />
          </button>
        </div>
      </footer>

      <FramerBadge />

      {/* ================================================================= */}
      {/* FILM FRAME LIGHTBOX MODAL                                         */}
      {/* ================================================================= */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-3xl bg-[#fbfbfc] text-[#141416] rounded-3xl overflow-hidden shadow-2xl border border-white/40 grid grid-cols-1 md:grid-cols-[1.2fr_0.85fr]"
          >
            <div className="relative w-full aspect-[4/5] bg-neutral-200">
              <SafeFilmImage
                src={lightboxItem.src}
                fallbackSrc={lightboxItem.fallbackSrc}
                alt={lightboxItem.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#e6e6eb] text-[11px] font-medium text-[#5c5c64]">
                  {lightboxItem.category}
                </span>

                <h3 className="mt-4 text-2xl font-medium tracking-tight">
                  {lightboxItem.title}
                </h3>

                <dl className="mt-6 space-y-2.5 border-t border-[#ececf0] pt-4 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#7c7c82]">Film Stock</dt>
                    <dd className="font-medium text-right">{lightboxItem.stock}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#7c7c82]">Location</dt>
                    <dd className="font-medium text-right">
                      {lightboxItem.location}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#7c7c82]">Year</dt>
                    <dd className="font-medium text-right">{lightboxItem.year}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex items-center justify-between gap-2 pt-4 border-t border-[#ececf0]">
                <button
                  type="button"
                  onClick={() => {
                    setInquiryForm((prev) => ({
                      ...prev,
                      shootType: lightboxItem.category,
                    }));
                    setLightboxItem(null);
                    setInquirySent(false);
                    setInquiryOpen(true);
                  }}
                  className="rounded-full bg-[#141416] text-white px-4 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Book Similar
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="rounded-full border border-[#e5e5ea] bg-white px-4 py-2 text-xs font-medium text-[#141416] hover:border-[#141416] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* EMAIL / SESSION BOOKING MODAL                                     */}
      {/* ================================================================= */}
      {inquiryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Contact Alex Smith Studio"
          onClick={() => setInquiryOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md bg-[#fbfbfc] text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e6e6eb]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-sm font-semibold tracking-tight">
                alex@gmail.com — Booking Note
              </span>
              <button
                type="button"
                onClick={() => setInquiryOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>

            {inquirySent ? (
              <div className="py-10 text-center space-y-3">
                <p className="text-lg font-medium text-[#141416]">
                  Inquiry delivered to Alex Smith.
                </p>
                <p className="text-xs text-[#6d6d74]">
                  Expect a reply from our Brooklyn studio within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquiryOpen(false)}
                  className="mt-3 rounded-full bg-[#141416] text-white px-5 py-2 text-xs font-medium cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setInquirySent(true);
                }}
                className="mt-5 space-y-4"
              >
                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">Your Name</span>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Maya Lin"
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  />
                </label>

                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">Email</span>
                  <input
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="maya@studio.com"
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  />
                </label>

                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">Shoot Type</span>
                  <select
                    value={inquiryForm.shootType}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        shootType: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  >
                    <option value="Portraits">Portraits</option>
                    <option value="Products">Products</option>
                    <option value="Weddings">Weddings</option>
                  </select>
                </label>

                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">
                    Project Details
                  </span>
                  <textarea
                    rows={3}
                    required
                    value={inquiryForm.details}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        details: e.target.value,
                      }))
                    }
                    placeholder="Dates, location, and film look..."
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#141416] hover:bg-neutral-800 text-white py-2.5 text-xs font-medium cursor-pointer transition-colors"
                >
                  Send Booking Note
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
