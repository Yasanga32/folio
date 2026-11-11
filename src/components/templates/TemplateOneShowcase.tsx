"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  edition: string;
  src: string;
  fallbackSrc: string;
  aspectClass: string;
}

const COLUMN_1: GalleryPhoto[] = [
  {
    id: "dolomites-mist",
    title: "Alpine Cathedral",
    location: "Dolomites, Italy",
    edition: "Edition 4 / 15 · Silver Gelatin",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[1/0.92]",
  },
  {
    id: "abyssal-drift",
    title: "Abyssal Drift",
    location: "Monterey Bay, USA",
    edition: "Edition 2 / 10 · Archival Pigment",
    src: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-square",
  },
  {
    id: "pacific-dusk",
    title: "Big Sur Horizon",
    location: "California Coast, USA",
    edition: "Edition 7 / 20 · Silver Gelatin",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[1/0.9]",
  },
];

const COLUMN_2: GalleryPhoto[] = [
  {
    id: "still-lotus",
    title: "Stillness in Bloom",
    location: "Kyoto, Japan",
    edition: "Edition 5 / 12 · Hahnemuhle Baryta",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[3/3.75]",
  },
  {
    id: "silent-summit",
    title: "Winter Ridge",
    location: "Patagonia, Chile",
    edition: "Edition 1 / 10 · Archival Pigment",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[3/4.2]",
  },
];

const COLUMN_3: GalleryPhoto[] = [
  {
    id: "flight-study",
    title: "Above the Tide",
    location: "Lofoten, Norway",
    edition: "Edition 6 / 15 · Silver Gelatin",
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[1/0.86]",
  },
  {
    id: "canopy-fern",
    title: "Woodland Relief",
    location: "Olympic Peninsula, USA",
    edition: "Edition 3 / 15 · Platinum Print",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[4/4.3]",
  },
  {
    id: "earth-vessel",
    title: "Quiet Form IV",
    location: "Oaxaca, Mexico",
    edition: "Edition 2 / 8 · Silver Gelatin",
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[4/4.5]",
  },
];

const COLUMN_4: GalleryPhoto[] = [
  {
    id: "coastal-reeds",
    title: "Dawn Through Reeds",
    location: "Camargue, France",
    edition: "Edition 8 / 20 · Archival Pigment",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[3/3.7]",
  },
  {
    id: "solitary-pine",
    title: "Solitary Cliff Pine",
    location: "Huangshan, China",
    edition: "Edition 1 / 5 · Platinum Print",
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
    aspectClass: "aspect-[3/4.3]",
  },
];

interface ArchiveStripItem extends GalleryPhoto {
  year: string;
}

const ARCHIVE_STRIP: ArchiveStripItem[] = [
  {
    id: "atelier-vane-ss26",
    title: "Atelier Vane SS26",
    year: "2026",
    location: "Paris, France",
    edition: "Series · 18 Plates · Silver Gelatin",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    aspectClass: "aspect-[1/1.05]",
  },
  {
    id: "lume-cosmetics",
    title: "Lume Cosmetics launch",
    year: "2026",
    location: "London, UK",
    edition: "Editorial Beauty · Macro Series",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
    aspectClass: "aspect-[1/1.05]",
  },
  {
    id: "sam-furniture-maker",
    title: "Sam, furniture maker",
    year: "2025",
    location: "Copenhagen, Denmark",
    edition: "Portrait Study · 35mm Tri-X",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=85",
    aspectClass: "aspect-[1/1.05]",
  },
  {
    id: "soho-after-rain",
    title: "Soho after rain",
    year: "2025",
    location: "London, UK",
    edition: "Night Study · Medium Format",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    aspectClass: "aspect-[1/1.05]",
  },
  {
    id: "martha-late-august",
    title: "Martha in late August",
    year: "2025",
    location: "Suffolk, UK",
    edition: "Edition 3 / 12 · Hand-Printed",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=85",
    aspectClass: "aspect-[1/1.05]",
  },
];

const ALL_PHOTOS: GalleryPhoto[] = [
  ...COLUMN_1,
  ...COLUMN_2,
  ...COLUMN_3,
  ...COLUMN_4,
  ...ARCHIVE_STRIP,
];

function LightboxImage({ photo }: { photo: GalleryPhoto }) {
  const [src, setSrc] = useState(photo.src);

  return (
    <Image
      src={src}
      alt={photo.title}
      fill
      sizes="(max-width: 1024px) 100vw, 800px"
      onError={() => {
        if (src !== photo.fallbackSrc) {
          setSrc(photo.fallbackSrc);
        }
      }}
      className="object-contain grayscale contrast-125"
    />
  );
}

function MonochromePhoto({
  photo,
  onSelect,
}: {
  photo: GalleryPhoto;
  onSelect: (photo: GalleryPhoto) => void;
}) {
  const [imgSrc, setImgSrc] = useState(photo.src);

  return (
    <button
      type="button"
      onClick={() => onSelect(photo)}
      className={`group relative w-full ${photo.aspectClass} overflow-hidden bg-neutral-900 cursor-pointer focus:outline-none`}
    >
      <Image
        src={imgSrc}
        alt={photo.title}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        onError={() => {
          if (imgSrc !== photo.fallbackSrc) {
            setImgSrc(photo.fallbackSrc);
          }
        }}
        className="object-cover grayscale contrast-125 brightness-95 group-hover:scale-[1.04] group-hover:brightness-105 transition-all duration-500 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-left">
        <div>
          <p className="font-serif text-sm text-white leading-tight">
            {photo.title}
          </p>
          <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 mt-0.5">
            {photo.location}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function TemplateOneShowcase() {
  const [activeTab, setActiveTab] = useState<"work" | "about" | "contact">(
    "work"
  );
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [bookingSent, setBookingSent] = useState(false);

  const [portraitSrc, setPortraitSrc] = useState(
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=85"
  );

  const selectedIndex = selectedPhoto
    ? ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const stepPhoto = (dir: -1 | 1) => {
    if (selectedIndex < 0) return;
    const nextIdx =
      (selectedIndex + dir + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    setSelectedPhoto(ALL_PHOTOS[nextIdx]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0d] text-white relative">
      {/* Main Portfolio Marketplace Navbar */}
      <Navbar dark />

      {/* Full-Bleed Editorial Template Canvas */}
      <div className="flex-1 flex flex-col lg:flex-row bg-[#0b0b0d]">
        {/* Left Sidebar Profile Column */}
        <aside className="w-full lg:w-[310px] xl:w-[340px] shrink-0 bg-[#121215] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
          {/* Top Template Micro-Navigation */}
          <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-2 relative z-20">
            <button
              type="button"
              onClick={() => setActiveTab("work")}
              className="font-serif font-bold text-[19px] tracking-tight text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              O.
            </button>

            <nav className="flex items-center gap-1.5">
              {(["work", "about", "contact"] as const).map((tab) => {
                const isCurrent = activeTab === tab;
                const label =
                  tab === "work" ? "Work" : tab === "about" ? "About" : "Contact";
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      setBookingSent(false);
                    }}
                    className={`border px-3 py-1.5 text-[11.5px] tracking-wide transition-colors cursor-pointer ${
                      isCurrent
                        ? "border-white/50 bg-white/10 text-white"
                        : "border-white/15 bg-white/[0.02] text-neutral-300 hover:border-white/35 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Moody Studio Portrait */}
          <div className="relative w-full h-[360px] sm:h-[420px] lg:flex-1 lg:min-h-[340px] overflow-hidden">
            <Image
              src={portraitSrc}
              alt="Aven Halogy — Nature & fine art photographer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 340px"
              onError={() =>
                setPortraitSrc(
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85"
                )
              }
              className="object-cover object-top brightness-90 contrast-105"
            />
            {/* Top & Bottom atmospheric blend into dark sidebar */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#121215]/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#121215] via-[#121215]/75 to-transparent" />
          </div>

          {/* Profile Info & Book CTA */}
          <div className="px-6 pb-6 pt-2 -mt-10 relative z-20 bg-[#121215]">
            <div className="flex items-center gap-1.5 text-[10px] tracking-[0.14em] uppercase text-neutral-300 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              <span>AVAILABLE FOR ASSIGNMENT</span>
            </div>

            <h1 className="font-serif text-[34px] xl:text-[38px] font-normal leading-[1.05] tracking-tight text-white">
              Aven Halogy
            </h1>

            <p className="mt-2 text-[13.5px] text-neutral-300 font-normal">
              Nature &amp; fine art photographer
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveTab("contact");
                setBookingSent(false);
              }}
              className="mt-5 w-full border border-white/35 hover:border-white hover:bg-white hover:text-black py-3 px-4 text-[12.5px] font-medium text-white flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
            >
              <span>Book a shoot</span>
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </aside>

        {/* Vertical Metadata Spine (Desktop) */}
        <div className="hidden lg:flex w-10 xl:w-11 shrink-0 border-r border-white/10 bg-[#0b0b0d] flex-col items-center justify-between py-24 select-none">
          <span className="-rotate-90 whitespace-nowrap font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400">
            20+ EDITIONS
          </span>
          <span className="-rotate-90 whitespace-nowrap font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400">
            5 CONTINENTS
          </span>
          <span className="-rotate-90 whitespace-nowrap font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400">
            EST. 2014
          </span>
        </div>

        {/* Mobile Metadata Strip */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0d0d10] font-mono text-[10px] tracking-[0.16em] uppercase text-neutral-400">
          <span>20+ EDITIONS</span>
          <span>5 CONTINENTS</span>
          <span>EST. 2014</span>
        </div>

        {/* Right Main Content Panel */}
        <main className="flex-1 bg-[#0b0b0d] p-5 sm:p-7 flex flex-col">
          {activeTab === "work" && (
            <>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-serif text-[20px] sm:text-[22px] font-normal text-white tracking-tight">
                  Selected work
                </h2>
              </div>

              {/* 4-Column Staggered Monochrome Fine-Art Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-start">
                <div className="flex flex-col gap-3">
                  {COLUMN_1.map((photo) => (
                    <MonochromePhoto
                      key={photo.id}
                      photo={photo}
                      onSelect={setSelectedPhoto}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {COLUMN_2.map((photo) => (
                    <MonochromePhoto
                      key={photo.id}
                      photo={photo}
                      onSelect={setSelectedPhoto}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {COLUMN_3.map((photo) => (
                    <MonochromePhoto
                      key={photo.id}
                      photo={photo}
                      onSelect={setSelectedPhoto}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {COLUMN_4.map((photo) => (
                    <MonochromePhoto
                      key={photo.id}
                      photo={photo}
                      onSelect={setSelectedPhoto}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "about" && (
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-serif text-[20px] sm:text-[22px] font-normal text-white tracking-tight">
                  About
                </h2>
              </div>

              <div className="flex-1 border border-white/10 bg-[#0d0d10] p-6 sm:p-8 lg:p-10">
                <div className="max-w-2xl space-y-8 sm:space-y-9">
                  {/* Experience */}
                  <section>
                    <h3 className="font-serif text-[19px] sm:text-[21px] font-normal text-white tracking-tight mb-3.5">
                      Experience
                    </h3>
                    <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-[#c7c7cc]">
                      Field-based since 2014. Aven photographs the natural world
                      — landscapes, wildlife, and quiet still life — across five
                      continents, with work held in private collections and
                      printed in limited editions for collectors and galleries.
                    </p>
                  </section>

                  {/* Approach */}
                  <section>
                    <h3 className="font-serif text-[19px] sm:text-[21px] font-normal text-white tracking-tight mb-3.5">
                      Approach
                    </h3>
                    <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-[#c7c7cc]">
                      Aven prefers to work quietly — allowing landscapes and
                      subjects to reveal themselves in their own time, rather
                      than forcing a frame. Most images are the result of
                      returning to the same location across several mornings,
                      waiting for the light and the moment to align.
                    </p>
                  </section>

                  {/* Working across */}
                  <section>
                    <h3 className="font-serif text-[19px] sm:text-[21px] font-normal text-white tracking-tight mb-4">
                      Working across
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "Editorial",
                        "Commercial",
                        "Fine Art",
                        "Documentary",
                      ].map((category) => (
                        <span
                          key={category}
                          className="border border-white/15 bg-white/[0.02] hover:border-white/35 px-4 py-2 text-[12.5px] text-neutral-200 tracking-wide transition-colors"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Let's connect */}
                  <section>
                    <h3 className="font-serif text-[19px] sm:text-[21px] font-normal text-white tracking-tight mb-3.5">
                      Let&apos;s connect
                    </h3>
                    <a
                      href="#instagram"
                      aria-label="Instagram"
                      className="inline-flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  </section>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="max-w-lg py-6 sm:py-10 space-y-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400 mb-2">
                  COMMISSION INQUIRY
                </p>
                <h2 className="font-serif text-3xl font-normal text-white">
                  Book an editorial or fine-art assignment
                </h2>
              </div>

              {bookingSent ? (
                <div className="border border-white/20 bg-white/[0.04] p-6 space-y-3">
                  <p className="font-serif text-xl text-white">
                    Inquiry received.
                  </p>
                  <p className="text-sm text-neutral-300">
                    Thank you for reaching out. Aven&apos;s studio responds to
                    assignment and print inquiries within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab("work")}
                    className="mt-2 border border-white/30 px-4 py-2 text-xs text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    Return to gallery
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingSent(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      className="w-full bg-[#121215] border border-white/15 focus:border-white/50 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@editorial.com"
                      className="w-full bg-[#121215] border border-white/15 focus:border-white/50 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Project Brief
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Dates, location, and assignment or archival print details..."
                      className="w-full bg-[#121215] border border-white/15 focus:border-white/50 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none resize-none"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="border border-white bg-white text-black hover:bg-neutral-200 px-6 py-2.5 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                    >
                      Send Inquiry &gt;
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("work")}
                      className="border border-white/20 hover:border-white/40 px-5 py-2.5 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Horizontal Editorial Commissions Carousel Strip */}
      <section
        aria-label="Recent commissions archive"
        className="w-full bg-black border-t border-white/10 py-14 sm:py-16 overflow-hidden scroll-container"
      >
        <div className="flex w-max animate-scroll-left">
          {[0, 1].map((loopIndex) => (
            <div
              key={loopIndex}
              aria-hidden={loopIndex === 1}
              className="flex items-start gap-4 sm:gap-5 pr-4 sm:pr-5"
            >
              {ARCHIVE_STRIP.map((item) => (
                <div
                  key={`${loopIndex}-${item.id}`}
                  className="w-[240px] sm:w-[280px] lg:w-[310px] shrink-0 group"
                >
                  <div className="rounded-md overflow-hidden bg-neutral-900">
                    <MonochromePhoto photo={item} onSelect={setSelectedPhoto} />
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between gap-3">
                    <span className="text-[12px] text-neutral-400 group-hover:text-neutral-200 transition-colors truncate">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 tabular-nums shrink-0">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Editorial CTA & Footer */}
      <footer className="w-full bg-black px-6 sm:px-10 lg:px-14 pt-14 sm:pt-20 pb-20 sm:pb-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-serif font-normal text-[42px] sm:text-[58px] lg:text-[66px] leading-[0.98] tracking-[-0.03em] text-white">
            Let&apos;s make
            <br />
            something honest
          </h2>

          {/* Pill Email / Contact CTA */}
          <button
            type="button"
            onClick={() => {
              setActiveTab("contact");
              setBookingSent(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-8 sm:mt-10 inline-flex items-center gap-6 sm:gap-8 rounded-full border border-white/15 hover:border-white/35 bg-[#060608] pl-7 sm:pl-8 pr-2 py-2 transition-all duration-300 group cursor-pointer"
          >
            <span className="font-serif text-[18px] sm:text-[21px] text-white tracking-tight">
              hello@example.com
            </span>
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 11.5L11.5 4.5" />
                <path d="M5.5 4.5h6v6" />
              </svg>
            </span>
          </button>

          {/* 3-Column Studio Info Metadata */}
          <div className="mt-11 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full max-w-xl text-center">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-500">
                RESPONSE
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-neutral-200">
                Within 2 working days
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-500">
                STUDIO
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-neutral-200">
                Hackney, East London
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-500">
                TRAVEL
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-neutral-200">
                Anywhere, on request
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Social Links Bar */}
        <div className="max-w-6xl mx-auto mt-20 sm:mt-24 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-neutral-200">
            FOCAL POINT
          </div>

          <p className="text-[12px] text-neutral-500 text-center">
            © 2026 Still Frame Studio. Made by{" "}
            <span className="text-neutral-200 underline underline-offset-4">
              Sebadam
            </span>
          </p>

          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#pinterest"
              aria-label="Pinterest"
              className="hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.5 14.5c-.6-2.5.4-5.5 3.3-6.2 2.8-.7 5.2 1.2 5.2 3.8 0 2.5-1.5 4.4-3.3 4.4-1 0-1.7-.7-1.5-1.7l.7-2.8" />
                <path d="M10.8 14.5L9.2 21" />
                <circle cx="12" cy="12" r="9.5" />
              </svg>
            </a>
            <a
              href="#tiktok"
              aria-label="TikTok"
              className="hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5c.3 0 .6 0 .9.1" />
                <path d="M14 4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Archival Fine-Art Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="w-full max-w-3xl bg-[#111114] border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/11] w-full bg-black">
              <LightboxImage key={selectedPhoto.id} photo={selectedPhoto} />
            </div>
            <div className="p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div>
                <h3 className="font-serif text-xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                  {selectedPhoto.location} · {selectedPhoto.edition}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stepPhoto(-1)}
                  className="border border-white/20 hover:border-white/50 px-3 py-1.5 text-xs text-neutral-200 cursor-pointer"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={() => stepPhoto(1)}
                  className="border border-white/20 hover:border-white/50 px-3 py-1.5 text-xs text-neutral-200 cursor-pointer"
                >
                  Next →
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="border border-white/20 hover:border-white/50 px-3 py-1.5 text-xs text-neutral-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Made in Framer Attribution Badge */}
      <FramerBadge />
    </div>
  );
}
