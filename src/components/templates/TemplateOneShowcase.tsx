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

const ALL_PHOTOS = [...COLUMN_1, ...COLUMN_2, ...COLUMN_3, ...COLUMN_4];

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
            <div className="max-w-2xl py-6 sm:py-10 space-y-8">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400 mb-3">
                  BIOGRAPHY &amp; PRACTICE
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white leading-tight">
                  Quiet monochrome studies of wilderness, light, and elemental form.
                </h2>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Since 2014, Aven Halogy has documented remote coastlines, alpine
                massifs, and botanical forms across five continents using medium
                format monochrome film and archival silver gelatin printing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-white/10 pt-6">
                <div>
                  <div className="font-serif text-2xl text-white">20+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                    Limited Editions
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-white">5</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                    Continents Explored
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-white">12 yrs</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                    Darkroom Craft
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab("work")}
                className="border border-white/25 hover:border-white px-5 py-2.5 text-xs tracking-wide text-white transition-colors cursor-pointer"
              >
                ← Back to Selected work
              </button>
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
