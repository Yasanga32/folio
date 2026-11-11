"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface FeaturedShot {
  id: string;
  badge: string;
  title: string;
  tag: string;
  src: string;
  fallbackSrc: string;
}

const FEATURED_SHOTS: FeaturedShot[] = [
  {
    id: "crimson-portrait",
    badge: "PORTRAIT SESSION · 2025",
    title: "Studio Crimson",
    tag: "PORTRAIT",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "in-her-own-light",
    badge: "IN HER OWN LIGHT · 2025",
    title: "IN HER OWN LIGHT",
    tag: "PORTRAIT",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "togetherness",
    badge: "TOGETHERNESS · 2025",
    title: "TOGETHERNESS",
    tag: "WEDDING",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  },
];

function SafePortraitImage({
  src,
  fallbackSrc,
  alt,
  sizes,
  priority = false,
  className,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority={priority}
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

export default function Home4Showcase() {
  const [activeShotIdx, setActiveShotIdx] = useState(0);
  const [activeSubNav, setActiveSubNav] = useState("HOME");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  const centerShot = FEATURED_SHOTS[activeShotIdx];
  const polaroidCards = FEATURED_SHOTS.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      {/* Main Portfolio Marketplace Navbar */}
      <Navbar />

      {/* LUMEVÉ White Editorial Sub-Header */}
      <div className="w-full bg-white border-y border-neutral-100 py-3.5 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <button
            type="button"
            onClick={() => {
              setActiveSubNav("HOME");
              setActiveShotIdx(0);
            }}
            className="font-black uppercase tracking-[-0.03em] text-[20px] sm:text-[22px] text-[#c23b26] cursor-pointer"
          >
            LUMEVÉ
          </button>

          {/* Center Mini Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {[
              "HOME",
              "ABOUT",
              "WORK",
              "SERVICES",
              "PRICING",
              "JOURNAL",
              "CONTACT",
            ].map((item) => {
              const isCurrent = activeSubNav === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setActiveSubNav(item);
                    if (item === "CONTACT") {
                      setBookingSent(false);
                      setBookingOpen(true);
                    }
                  }}
                  className={`text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                    isCurrent
                      ? "text-[#c23b26]"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Top-Right CTA Pill */}
          <button
            type="button"
            onClick={() => {
              setBookingSent(false);
              setBookingOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#b83220] hover:bg-[#9c2818] text-white px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase shadow-xs transition-colors cursor-pointer shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>BOOK A SESSION</span>
          </button>
        </div>
      </div>

      {/* Main Vermilion-Crimson Full Hero Canvas */}
      <main className="flex-1 bg-gradient-to-br from-[#d9582e] via-[#be3a24] to-[#7a1d14] relative overflow-hidden flex flex-col justify-between px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 pb-16 sm:pb-20">
        {/* Ambient Warm Light Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(246,132,74,0.34),_transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(68,12,8,0.45),_transparent_60%)]"
        />

        {/* Top Centered Editorial Headline */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/85 mb-3">
            PHOTOGRAPHY THAT FEELS LIKE YOU
          </p>

          <p className="font-serif italic text-[22px] sm:text-[26px] font-normal text-white leading-tight mb-1">
            every moment,
          </p>

          <h1 className="font-black uppercase tracking-[-0.045em] leading-[0.87] text-[44px] sm:text-[64px] lg:text-[76px] text-white">
            A STORY WORTH
            <br />
            KEEPING.
          </h1>
        </div>

        {/* Bottom 3-Column Hero Content Grid */}
        <div className="relative z-10 w-full max-w-[1160px] mx-auto mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end">
          {/* Left Narrative & Dual CTAs */}
          <div className="lg:col-span-4 flex flex-col items-start text-left pb-1">
            <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-white/90 max-w-[270px]">
              From intimate celebrations to extraordinary adventures, we capture
              the emotions, details, and fleeting moments that make your story
              uniquely yours.
            </p>

            <div className="mt-6 flex flex-col items-start gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setBookingSent(false);
                  setBookingOpen(true);
                }}
                className="inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-[#faf5f2] text-[#a62d1b] px-6 py-3 text-[10.5px] font-bold tracking-[0.14em] uppercase shadow-md transition-all cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2412d]" />
                <span>BOOK A SESSION</span>
              </button>

              <Link
                href="/template/photography/2"
                className="inline-flex items-center gap-2.5 rounded-full bg-black/15 hover:bg-white/15 border border-white/45 text-white px-6 py-3 text-[10.5px] font-bold tracking-[0.14em] uppercase transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>EXPLORE MY WORK</span>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] uppercase text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block shrink-0" />
              <span>BASED IN NEW YORK · AVAILABLE WORLDWIDE</span>
            </div>
          </div>

          {/* Center Framed Crimson Studio Portrait */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              onClick={() =>
                setActiveShotIdx((prev) => (prev + 1) % FEATURED_SHOTS.length)
              }
              title="Click to cycle featured portrait"
              className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[3/3.65] rounded-2xl overflow-hidden border-[2.5px] border-white/90 bg-[#641212] shadow-[0_24px_60px_rgba(38,6,4,0.45)] cursor-pointer group"
            >
              <SafePortraitImage
                key={centerShot.id}
                src={centerShot.src}
                fallbackSrc={centerShot.fallbackSrc}
                alt={centerShot.title}
                priority
                sizes="(max-width: 1024px) 90vw, 330px"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
              {/* Deep crimson ambient glaze */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5e0d0d]/55 via-transparent to-[#7c1715]/25" />

              {/* Bottom-Left White Session Pill */}
              <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-xs text-[#221917] px-3.5 py-1.5 text-[9.5px] font-bold tracking-[0.12em] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2412d]" />
                <span>{centerShot.badge}</span>
              </div>
            </div>
          </div>

          {/* Right Dual Tilted Polaroid Cards */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end pb-1">
            <div className="flex items-start">
              {polaroidCards.map((card, i) => {
                const shotIndex = i + 1;
                const isFirst = i === 0;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setActiveShotIdx(shotIndex)}
                    className={`bg-white rounded-xl p-2 pb-3 shadow-[0_18px_36px_rgba(30,6,4,0.38)] w-[132px] sm:w-[146px] text-left transition-transform duration-300 cursor-pointer ${
                      isFirst
                        ? "-rotate-3 hover:rotate-0 relative z-10"
                        : "rotate-3 hover:rotate-0 -ml-2 mt-4 relative z-20"
                    }`}
                  >
                    <div className="relative aspect-[1/1.08] w-full rounded-lg overflow-hidden bg-neutral-900">
                      <SafePortraitImage
                        src={card.src}
                        fallbackSrc={card.fallbackSrc}
                        alt={card.title}
                        sizes="150px"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 px-0.5">
                      <p className="text-[9px] font-bold tracking-[0.06em] uppercase text-[#191716] leading-tight">
                        {card.title}
                      </p>
                      <p className="text-[8.5px] font-bold tracking-[0.12em] uppercase text-[#c2412d] mt-0.5">
                        {card.tag}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Clean White Floor Strip matching Screenshot Framing */}
      <div className="w-full bg-white h-10 sm:h-12" />

      {/* Book a Session Modal */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white text-neutral-900 p-6 sm:p-8 shadow-2xl border border-neutral-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#c23b26]">
                  LUMEVÉ STUDIO · NYC
                </p>
                <h2 className="font-black uppercase tracking-tight text-2xl mt-1">
                  Book a Session
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-400 flex items-center justify-center text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            {bookingSent ? (
              <div className="py-4 space-y-3">
                <p className="font-serif italic text-xl text-[#c23b26]">
                  Inquiry received.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Thank you for reaching out to LUMEVÉ Studio. We respond within
                  two business days with dates and session guides.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="mt-2 rounded-full bg-[#b83220] text-white px-6 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase cursor-pointer"
                >
                  Done
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
                  <label className="block text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Maya Lin"
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c23b26]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c23b26]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500 mb-1">
                    Session Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Portrait session, intimate wedding, or destination story..."
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c23b26] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#b83220] hover:bg-[#9c2818] text-white py-3 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

