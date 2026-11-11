"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

interface FocalSeriesItem {
  id: string;
  title: string;
  year: string;
  location: string;
  category: string;
  src: string;
  fallbackSrc: string;
}

const FOCAL_SERIES: FocalSeriesItem[] = [
  {
    id: "holden-partners",
    title: "Holden & Co. partners",
    year: "2026",
    location: "City of London, UK",
    category: "Corporate Portrait",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "studio-test-12",
    title: "Studio test no. 12",
    year: "2026",
    location: "Hackney Studio, London",
    category: "Portrait Study",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "nova-ray-album",
    title: "Nova Ray, album cover",
    year: "2026",
    location: "Bethnal Green, London",
    category: "Music Editorial",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "theo-at-home",
    title: "Theo at home",
    year: "2026",
    location: "Dalston, East London",
    category: "Environmental Portrait",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "atelier-vane-ss26",
    title: "Atelier Vane SS26",
    year: "2026",
    location: "Paris, France",
    category: "Fashion Editorial",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "lume-cosmetics",
    title: "Lume Cosmetics launch",
    year: "2026",
    location: "Shoreditch, London",
    category: "Beauty Campaign",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "sam-furniture-maker",
    title: "Sam, furniture maker",
    year: "2025",
    location: "Copenhagen, Denmark",
    category: "Artisan Documentary",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "martha-late-august",
    title: "Martha in late August",
    year: "2025",
    location: "Suffolk Coast, UK",
    category: "Editorial Feature",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "soho-after-rain",
    title: "Soho after rain",
    year: "2025",
    location: "Soho, London",
    category: "Night Street Portrait",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
  },
];

const SEASON_FEATURED_IDS = [
  "nova-ray-album",
  "theo-at-home",
  "atelier-vane-ss26",
  "lume-cosmetics",
  "sam-furniture-maker",
] as const;

const SEASON_BOTTOM_IDS = [
  "soho-after-rain",
  "martha-late-august",
  "holden-partners",
] as const;

function SafeMonoImage({
  src,
  fallbackSrc,
  alt,
  sizes,
  className,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      className={className}
    />
  );
}

export default function TemplateThreeShowcase() {
  const [selectedItem, setSelectedItem] = useState<FocalSeriesItem | null>(
    null
  );
  const [bookingOpen, setBookingOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  const selectedIndex = selectedItem
    ? FOCAL_SERIES.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const stepItem = (dir: -1 | 1) => {
    if (selectedIndex < 0) return;
    const nextIdx =
      (selectedIndex + dir + FOCAL_SERIES.length) % FOCAL_SERIES.length;
    setSelectedItem(FOCAL_SERIES[nextIdx]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      {/* Main Portfolio Marketplace Navbar */}
      <Navbar dark />

      {/* FOCAL POINT Minimalist Internal Top Bar */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 pt-8 pb-4 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-neutral-200 hover:text-white transition-colors"
        >
          FOCAL POINT
        </a>

        <nav className="flex items-center gap-6 sm:gap-8 text-[10.5px] font-mono tracking-[0.18em] uppercase text-neutral-400">
          <a
            href="#focal-work"
            className="hover:text-white transition-colors"
          >
            WORK
          </a>
          <button
            type="button"
            onClick={() => setAboutOpen(true)}
            className="hover:text-white transition-colors cursor-pointer uppercase"
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={() => {
              setBookingSent(false);
              setBookingOpen(true);
            }}
            className="hover:text-white transition-colors cursor-pointer uppercase"
          >
            CONTACT
          </button>
        </nav>
      </div>

      {/* Centered Editorial Hero Copy & CTAs */}
      <main className="flex-1 flex flex-col justify-between">
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-12 sm:pt-16 pb-14 sm:pb-16">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-5">
            YOU, CAPTURED PROPERLY
          </p>

          <h1 className="font-serif font-normal text-[42px] sm:text-[60px] lg:text-[74px] leading-[0.98] tracking-[-0.03em] text-white max-w-3xl">
            Portrait and editorial
            <br />
            photography
          </h1>

          <p className="mt-5 max-w-[390px] text-[13.5px] sm:text-[14.5px] leading-[1.6] text-neutral-400 font-normal">
            Natural light sessions for people, brands and publications. Studio
            in East London, travel on request.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setBookingSent(false);
                setBookingOpen(true);
              }}
              className="rounded-full bg-white hover:bg-neutral-200 text-black px-6 py-3 inline-flex items-center gap-2 text-[10.5px] font-mono font-medium tracking-[0.16em] uppercase transition-colors cursor-pointer"
            >
              <span>BOOK A SESSION</span>
              <span aria-hidden="true">↗</span>
            </button>

            <a
              href="#focal-work"
              className="rounded-full bg-[#0a0a0c] hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-6 py-3 inline-flex items-center gap-2 text-[10.5px] font-mono font-medium tracking-[0.16em] uppercase transition-colors"
            >
              <span>VIEW PORTFOLIO</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Bottom Live Left-Moving Monochrome Portrait Marquee */}
        <section
          id="focal-work"
          aria-label="Selected portrait commissions"
          className="w-full pb-10 sm:pb-14 overflow-hidden scroll-container"
        >
          <div className="flex w-max animate-scroll-left">
            {[0, 1].map((loopIdx) => (
              <div
                key={loopIdx}
                aria-hidden={loopIdx === 1}
                className="flex items-start gap-3 sm:gap-4 pr-3 sm:pr-4"
              >
                {FOCAL_SERIES.map((item) => (
                  <button
                    key={`${loopIdx}-${item.id}`}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="w-[185px] sm:w-[215px] lg:w-[235px] shrink-0 group text-left cursor-pointer focus:outline-none"
                  >
                    <div className="relative w-full aspect-[4/4.7] rounded-xs overflow-hidden bg-neutral-900">
                      <SafeMonoImage
                        src={item.src}
                        fallbackSrc={item.fallbackSrc}
                        alt={item.title}
                        sizes="240px"
                        className="object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-[1.04] group-hover:brightness-105 transition-all duration-500 ease-out"
                      />
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors truncate">
                        {item.title}
                      </span>
                      <span className="text-[10.5px] font-mono text-neutral-500 tabular-nums shrink-0">
                        {item.year}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work / This Season Asymmetric Bento Showcase */}
        <section
          id="focal-season"
          aria-label="Selected work this season"
          className="w-full max-w-5xl mx-auto px-6 sm:px-10 pt-12 sm:pt-16 pb-20 sm:pb-24"
        >
          {/* Section Header Row */}
          <div className="border-t border-white/15 pt-7 mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
                SELECTED WORK
              </p>
              <h2 className="font-serif font-normal text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.05] tracking-[-0.02em] text-white">
                This season
              </h2>
            </div>

            <p className="text-[12px] leading-[1.6] text-neutral-400 max-w-[260px]">
              Recent portrait, editorial and brand work, shot in natural light
              across London and beyond.
            </p>
          </div>

          {/* Upper Asymmetric Bento (Left 2-Row Portrait + Right 2x2 Stack) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SEASON_FEATURED_IDS.map((seriesId, index) => {
              const item = FOCAL_SERIES.find((s) => s.id === seriesId);
              if (!item) return null;

              const isLeadFeature = index === 0;
              const isUpperPair = index === 1 || index === 2;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className={`relative w-full rounded-[4px] overflow-hidden bg-neutral-900 group cursor-pointer focus:outline-none text-left ${
                    isLeadFeature
                      ? "md:row-span-2 aspect-[4/4.6] md:aspect-auto md:h-full min-h-[300px]"
                      : isUpperPair
                      ? "aspect-[1/0.86]"
                      : "aspect-[1/1.05]"
                  }`}
                >
                  <SafeMonoImage
                    src={item.src}
                    fallbackSrc={item.fallbackSrc}
                    alt={item.title}
                    sizes={
                      isLeadFeature
                        ? "(max-width: 768px) 100vw, 340px"
                        : "(max-width: 768px) 100vw, 320px"
                    }
                    className="object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="font-serif text-base text-white leading-tight">
                        {item.title}
                      </p>
                      <p className="font-mono text-[10px] tracking-wider uppercase text-neutral-300 mt-0.5">
                        {item.location} · {item.year}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom 3-Column Equal Editorial Portraits Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
            {SEASON_BOTTOM_IDS.map((seriesId) => {
              const item = FOCAL_SERIES.find((s) => s.id === seriesId);
              if (!item) return null;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="relative w-full aspect-[4/4.9] rounded-[4px] overflow-hidden bg-neutral-900 group cursor-pointer focus:outline-none text-left"
                >
                  <SafeMonoImage
                    src={item.src}
                    fallbackSrc={item.fallbackSrc}
                    alt={item.title}
                    sizes="(max-width: 640px) 100vw, 340px"
                    className="object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="font-serif text-base text-white leading-tight">
                        {item.title}
                      </p>
                      <p className="font-mono text-[10px] tracking-wider uppercase text-neutral-300 mt-0.5">
                        {item.location} · {item.year}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {/* Editorial Series Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#0d0d10] border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3.2] w-full bg-black">
              <SafeMonoImage
                key={selectedItem.id}
                src={selectedItem.src}
                fallbackSrc={selectedItem.fallbackSrc}
                alt={selectedItem.title}
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-contain grayscale contrast-125"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div>
                <h2 className="font-serif text-xl text-white">
                  {selectedItem.title}
                </h2>
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1">
                  {selectedItem.category} · {selectedItem.location} ·{" "}
                  {selectedItem.year}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stepItem(-1)}
                  className="border border-white/20 hover:border-white/50 px-3 py-1.5 text-xs font-mono text-neutral-200 cursor-pointer"
                >
                  ← PREV
                </button>
                <button
                  type="button"
                  onClick={() => stepItem(1)}
                  className="border border-white/20 hover:border-white/50 px-3 py-1.5 text-xs font-mono text-neutral-200 cursor-pointer"
                >
                  NEXT →
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="border border-white/20 hover:border-white/50 px-3 py-1.5 text-xs font-mono text-neutral-200 cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Studio Modal */}
      {aboutOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setAboutOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#0d0d10] border border-white/15 p-6 sm:p-8 space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                  FOCAL POINT · EAST LONDON
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1.5">
                  Honest light, unhurried portraits.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setAboutOpen(false)}
                className="text-neutral-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-sm leading-relaxed text-neutral-300">
              Working primarily with directional daylight in Hackney, Focal
              Point creates calm, enduring portraits for founders, musicians,
              editorial publications, and independent fashion houses across the
              UK and Europe.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4 text-[11px] font-mono">
              <div>
                <div className="text-neutral-500">STUDIO</div>
                <div className="text-neutral-200 mt-1">Hackney, E8</div>
              </div>
              <div>
                <div className="text-neutral-500">RESPONSE</div>
                <div className="text-neutral-200 mt-1">Within 48 hrs</div>
              </div>
              <div>
                <div className="text-neutral-500">TRAVEL</div>
                <div className="text-neutral-200 mt-1">On request</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book a Session Modal */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#0d0d10] border border-white/15 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                  STUDIO BOOKING
                </p>
                <h2 className="font-serif text-2xl text-white mt-1">
                  Book a Session
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="text-neutral-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {bookingSent ? (
              <div className="space-y-3 py-2">
                <p className="font-serif text-xl text-white">
                  Request received.
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Thanks for getting in touch with Focal Point. We&apos;ll reply
                  within two working days with studio availability.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="mt-2 rounded-full bg-white text-black px-5 py-2 text-[10.5px] font-mono font-medium uppercase tracking-[0.14em] cursor-pointer"
                >
                  Close
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
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Holden Reed"
                    className="w-full bg-black border border-white/15 focus:border-white/45 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="holden@studio.co.uk"
                    className="w-full bg-black border border-white/15 focus:border-white/45 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 mb-1.5">
                    Commission Brief
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Portrait, editorial campaign, or travel commission dates..."
                    className="w-full bg-black border border-white/15 focus:border-white/45 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-white hover:bg-neutral-200 text-black py-3 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] transition-colors cursor-pointer"
                >
                  SEND REQUEST ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

