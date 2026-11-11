"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

function ApertureIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9.5" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </svg>
  );
}

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=85";
const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85";

const GALLERY_PREVIEWS = [
  {
    label: "Weddings",
    title: "Claire & Julian — Tuscany",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85",
  },
  {
    label: "Portraits",
    title: "Soft Light Portrait Series",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
  },
  {
    label: "Editorial",
    title: "Summer Botanical Study",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85",
  },
  {
    label: "Lifestyle",
    title: "Golden Hour Stories",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
  },
];

type NavSection = "Home" | "Portfolio" | "Journal" | "About" | "Contact";

export default function TemplateTwoShowcase() {
  const [heroSrc, setHeroSrc] = useState(HERO_IMAGE);
  const [thumbSrc, setThumbSrc] = useState(GALLERY_PREVIEWS[0].src);
  const [previewIdx, setPreviewIdx] = useState(0);
  const [activeNav, setActiveNav] = useState<NavSection>("Home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const cyclePreview = () => {
    const next = (previewIdx + 1) % GALLERY_PREVIEWS.length;
    setPreviewIdx(next);
    setThumbSrc(GALLERY_PREVIEWS[next].src);
  };

  const handleNavClick = (item: NavSection) => {
    setActiveNav(item);
    if (item === "Portfolio") {
      setPortfolioOpen(true);
    } else if (item === "Contact") {
      setBookingSubmitted(false);
      setBookingOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ef] text-neutral-900 relative">
      {/* Main Site Navbar */}
      <Navbar />

      {/* Pixenora Full-Bleed Hero Showcase */}
      <section className="relative flex-1 min-h-[calc(100vh-77px)] w-full overflow-hidden flex flex-col justify-between">
        {/* Background Editorial Photography */}
        <Image
          src={heroSrc}
          alt="Bride holding pastel floral bouquet in soft natural light"
          fill
          priority
          sizes="100vw"
          onError={() => {
            if (heroSrc !== HERO_FALLBACK) {
              setHeroSrc(HERO_FALLBACK);
            }
          }}
          className="object-cover object-center scale-[1.01]"
        />

        {/* Atmospheric Readability Gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#241c17]/60 via-[#241c17]/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1410]/65 via-transparent to-black/15" />

        {/* Floating Cream Pill Navbar inside Template */}
        <div className="relative z-20 w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 pt-5 sm:pt-7">
          <div className="w-full rounded-full bg-[#faf8f4]/92 backdrop-blur-md border border-white/60 shadow-[0_14px_38px_rgba(24,18,14,0.14)] pl-2.5 sm:pl-3 pr-1.5 sm:pr-2 py-1.5 flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <button
              type="button"
              onClick={() => setActiveNav("Home")}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <span className="w-8 h-8 rounded-full bg-[#2c221b] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <ApertureIcon className="w-4 h-4" />
              </span>
              <span className="font-serif text-[19px] font-normal tracking-tight text-[#2a211b]">
                Pixenora
              </span>
            </button>

            {/* Right Links + CTA */}
            <div className="flex items-center gap-5 lg:gap-7">
              <nav className="hidden md:flex items-center gap-6 lg:gap-7">
                {(
                  ["Home", "Portfolio", "Journal", "About", "Contact"] as const
                ).map((item) => {
                  const isActive = activeNav === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={`text-[13px] transition-colors cursor-pointer ${
                        isActive
                          ? "text-[#221a14] font-medium underline underline-offset-4 decoration-[#2c221b]/80"
                          : "text-[#4c4037] hover:text-[#221a14]"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </nav>

              <button
                type="button"
                onClick={() => {
                  setBookingSubmitted(false);
                  setBookingOpen(true);
                }}
                className="inline-flex items-center gap-3 rounded-full bg-[#2c221b] hover:bg-[#1e1712] text-white pl-4 pr-1.5 py-1.5 text-[12.5px] font-medium transition-colors cursor-pointer shrink-0 group"
              >
                <span>Book a Session</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#2c221b] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ApertureIcon className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Optional Info Drawer when Journal or About is clicked */}
        {(activeNav === "Journal" || activeNav === "About") && (
          <div className="relative z-20 max-w-[1240px] mx-auto w-full px-5 sm:px-8 lg:px-10 mt-6">
            <div className="max-w-lg rounded-2xl bg-[#faf8f4]/92 backdrop-blur-md border border-white/70 p-5 sm:p-6 text-[#2c221b] shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7a6657]">
                  {activeNav === "Journal"
                    ? "RECENT FIELD NOTES"
                    : "ABOUT PIXENORA STUDIO"}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveNav("Home")}
                  className="text-xs text-[#6a584b] hover:text-[#2c221b] cursor-pointer"
                >
                  ✕
                </button>
              </div>
              {activeNav === "Journal" ? (
                <p className="text-sm leading-relaxed text-[#43362d]">
                  <em>Morning Mist in Amalfi</em> — Notes on shooting 120mm
                  medium-format film during an intimate sunrise ceremony by the
                  sea.
                </p>
              ) : (
                <p className="text-sm leading-relaxed text-[#43362d]">
                  Founded on honest storytelling and natural light, Pixenora
                  pairs timeless editorial portraiture with documentary wedding
                  coverage worldwide.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Bottom Hero Copy & Frosted Thumbnail Card */}
        <div className="relative z-20 w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 pt-20 sm:pt-28 pb-8 sm:pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          {/* Left Hero Typography & Dual CTAs */}
          <div className="max-w-2xl">
            {/* Eyebrow Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-white/75 inline-block" />
              <span className="text-[10.5px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-white/90">
                PHOTOGRAPHY · PEOPLE · STORIES
              </span>
            </div>

            {/* Display Serif Headline */}
            <h1 className="font-serif font-normal text-[44px] sm:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.025em] text-white">
              The art of seeing
              <br />
              what matters.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-[440px] text-[14.5px] sm:text-[15.5px] leading-[1.6] text-white/90 font-normal">
              Honest moments, thoughtful details, and photographs that bring you
              back to how it felt.
            </p>

            {/* Dual Action Pills */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => setPortfolioOpen(true)}
                className="inline-flex items-center gap-3.5 rounded-full bg-[#faf8f4] hover:bg-white text-[#2c221b] pl-5 pr-1.5 py-1.5 text-[13px] font-medium shadow-md transition-all cursor-pointer group"
              >
                <span>Explore the Portfolio</span>
                <span className="w-8 h-8 rounded-full bg-[#2c221b] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ApertureIcon className="w-4 h-4" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setBookingSubmitted(false);
                  setBookingOpen(true);
                }}
                className="inline-flex items-center gap-3.5 rounded-full bg-[#2b211a]/90 hover:bg-[#1e1712] border border-white/15 text-white pl-5 pr-1.5 py-1.5 text-[13px] font-medium shadow-md transition-all cursor-pointer group"
              >
                <span>Book a Session</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#2c221b] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ApertureIcon className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Floating Frosted Preview Card */}
          <button
            type="button"
            onClick={cyclePreview}
            aria-label="Cycle portfolio preview category"
            className="self-start lg:self-end rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/45 p-2.5 w-[240px] sm:w-[270px] shadow-2xl transition-all cursor-pointer group text-left"
          >
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-900">
              <Image
                src={thumbSrc}
                alt={GALLERY_PREVIEWS[previewIdx].title}
                fill
                sizes="270px"
                onError={() => setThumbSrc(HERO_FALLBACK)}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="pt-2.5 pb-1 text-center text-[11px] font-normal tracking-wide text-white/95">
              Portraits · Weddings · Lifestyle · Editorial
            </p>
          </button>
        </div>
      </section>

      {/* Portfolio Lightbox Drawer / Modal */}
      {portfolioOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPortfolioOpen(false)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl bg-[#faf8f4] text-[#2c221b] border border-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a6657]">
                  PIXENORA PORTFOLIO
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal mt-1">
                  Selected Series
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setPortfolioOpen(false)}
                className="w-9 h-9 rounded-full border border-[#2c221b]/15 hover:border-[#2c221b]/40 flex items-center justify-center text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GALLERY_PREVIEWS.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#2c221b]/10"
                >
                  <div className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="360px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3.5 flex items-center justify-between">
                    <span className="font-serif text-base">{item.title}</span>
                    <span className="text-[11px] uppercase tracking-wider text-[#7a6657]">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Book a Session Modal */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#faf8f4] text-[#2c221b] border border-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a6657]">
                  PIXENORA STUDIO
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal mt-1">
                  Book a Session
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="w-8 h-8 rounded-full border border-[#2c221b]/15 hover:border-[#2c221b]/40 flex items-center justify-center text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="py-4 space-y-3">
                <p className="font-serif text-xl text-[#2c221b]">
                  Session request received.
                </p>
                <p className="text-sm text-[#5b4d42] leading-relaxed">
                  Thank you for sharing your story. We&apos;ll reply within two
                  business days with availability and package details.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="mt-2 rounded-full bg-[#2c221b] text-white px-6 py-2.5 text-xs font-medium cursor-pointer"
                >
                  Back to Pixenora
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#6a584b] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Clara Bennett"
                    className="w-full rounded-xl bg-white border border-[#2c221b]/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#2c221b]/50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#6a584b] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="clara@example.com"
                    className="w-full rounded-xl bg-white border border-[#2c221b]/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#2c221b]/50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#6a584b] mb-1">
                    Session Type &amp; Date
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Intimate wedding, editorial portrait, or lifestyle session details..."
                    className="w-full rounded-xl bg-white border border-[#2c221b]/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#2c221b]/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#2c221b] hover:bg-[#1e1712] text-white py-3 text-sm font-medium transition-colors cursor-pointer"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

