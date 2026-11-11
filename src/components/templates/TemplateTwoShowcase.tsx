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

interface ServiceCategory {
  number: string;
  title: string;
  description: string;
  src: string;
  fallbackSrc: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    number: "01",
    title: "Portraits & Personal Branding",
    description:
      "Natural portraits that show your personality, confidence, and point of view.",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
  },
  {
    number: "02",
    title: "Weddings & Celebrations",
    description:
      "The quiet glances, happy tears, wild dancing, and everything in between.",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85",
  },
  {
    number: "03",
    title: "Lifestyle & Families",
    description:
      "Unscripted photographs of the people, places, and everyday rituals you love.",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
  },
  {
    number: "04",
    title: "Editorial & Campaigns",
    description:
      "Visual storytelling for creative teams, independent brands, and thoughtful businesses.",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
  },
];

const CLIENT_NOTES = [
  {
    initials: "JT",
    name: "Jamie & Taylor",
    role: "Wedding clients",
    quote:
      "“Alex made the whole experience feel easy. We forgot about the camera and just enjoyed being together. The photographs feel exactly like us.”",
  },
  {
    initials: "ML",
    name: "Morgan Lee",
    role: "Founder, Field & Fern Studio",
    quote:
      "“Thoughtful, professional, and full of ideas. The final images gave our small brand a visual identity we're proud to share.”",
  },
  {
    initials: "RF",
    name: "The Rivera Family",
    role: "Lifestyle session",
    quote:
      "“Every time we look through the gallery, we notice something new. These are photographs we'll keep coming back to.”",
  },
];

const FAQ_ITEMS = [
  {
    q: "How do I book a session?",
    a: "Click any Book a Session button to share your preferred dates, location, and session type. Once confirmed, a signed agreement and retainer reserve your date on the studio calendar.",
  },
  {
    q: "How far in advance should I book?",
    a: "For intimate weddings and destination celebrations, 6 to 12 months ahead is ideal. Portrait, branding, and family lifestyle sessions are typically scheduled 3 to 6 weeks in advance.",
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Yes — while based between London and New York, destination commissions across Europe and worldwide are welcomed with simple flat-rate travel arrangements.",
  },
  {
    q: "Can I request a specific photography style?",
    a: "Absolutely. Before your shoot we share a calm visual moodboard covering light, film grain, color warmth, and candid vs. guided pacing tailored around your story.",
  },
  {
    q: "Do you provide edited photographs?",
    a: "Every delivered photograph is carefully hand-selected and individually color-graded to achieve true-to-life skin tones, soft highlights, and cohesive editorial character.",
  },
  {
    q: "When will I receive my photographs?",
    a: "Portrait and branding galleries arrive within 10 business days. Wedding clients receive a curated sneak peek within 72 hours and the full gallery within 4 to 6 weeks.",
  },
  {
    q: "How do I receive my photos?",
    a: "You receive a private, password-protected online gallery with full-resolution archival downloads, web-sized sharing files, and optional museum-grade heirloom prints.",
  },
  {
    q: "Can I reschedule my session?",
    a: "Life happens — portrait and outdoor sessions can be rescheduled smoothly up to 48 hours ahead, or adjusted free of charge if weather brings heavy rain.",
  },
];

function SafePhoto({
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

export default function TemplateTwoShowcase() {
  const [heroSrc, setHeroSrc] = useState(HERO_IMAGE);
  const [thumbSrc, setThumbSrc] = useState(GALLERY_PREVIEWS[0].src);
  const [previewIdx, setPreviewIdx] = useState(0);
  const [activeNav, setActiveNav] = useState<NavSection>("Home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

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

      {/* Section 2: Hello, I'm Alex (About Bento Section) */}
      <section
        id="pixenora-about"
        className="w-full bg-[#f8f6f2] py-20 sm:py-24 px-5 sm:px-8 lg:px-10"
      >
        <div className="max-w-[1040px] mx-auto">
          {/* Centered Header */}
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[10.5px] font-medium tracking-[0.18em] uppercase text-[#7b6c61]">
              <span className="w-5 h-px bg-[#b8aba0] inline-block" />
              <span>HELLO, I&apos;M ALEX</span>
            </div>

            <h2 className="mt-3 font-serif font-normal text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-[#2a211b]">
              Real moments.
              <br />
              Beautifully remembered.
            </h2>
          </div>

          {/* 3-Column Asymmetric Bio Bento */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Left Vertical Photographer Portrait */}
            <div className="md:col-span-3 relative min-h-[260px] md:min-h-[300px] rounded-2xl overflow-hidden bg-neutral-200 shadow-xs">
              <SafePhoto
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=700&q=85"
                fallbackSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85"
                alt="Alex Morgan holding DSLR camera"
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover"
              />
            </div>

            {/* Center Bio Statement & Approach Card */}
            <div className="md:col-span-6 rounded-2xl bg-[#fbfaf7] border border-[#e8e1d7] shadow-[0_8px_28px_rgba(38,28,20,0.04)] p-7 sm:p-9 lg:p-10 flex flex-col items-center justify-center text-center">
              <p className="text-[13.5px] sm:text-[14.5px] leading-[1.72] text-[#4c4139] max-w-md">
                I&apos;m Alex Morgan, the photographer behind Pixenora. I create
                relaxed, story-led photographs for people and brands who want
                images with feeling, not just a perfect pose. My approach is
                simple: make space for real connection, notice the little
                things, and turn them into photographs you&apos;ll want to keep.
              </p>

              {/* 3 Approach Feature Pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                {["Connection", "Natural light", "Gentle direction"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#efeae2] border border-[#e3dcd1] px-3 py-1 text-[11px] font-medium text-[#5c4f45]"
                    >
                      <svg
                        className="w-3 h-3 text-[#7a6b60]"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <circle cx="8" cy="8" r="6" />
                        <path
                          d="M5.5 8.2L7.2 9.8L10.7 6.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{tag}</span>
                    </span>
                  )
                )}
              </div>

              {/* A Little More About Me Pill CTA */}
              <button
                type="button"
                onClick={() => {
                  setActiveNav("About");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#faf8f4] hover:bg-white border border-[#cbbeb0] text-[#2c221b] pl-5 pr-1.5 py-1.5 text-[12px] font-medium shadow-xs transition-all cursor-pointer group"
              >
                <span>A Little More About Me</span>
                <span className="w-7 h-7 rounded-full bg-[#2c221b] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ApertureIcon className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Right Vertical Vintage Camera Card */}
            <div className="md:col-span-3 relative min-h-[260px] md:min-h-[300px] rounded-2xl overflow-hidden bg-neutral-900 shadow-xs">
              <SafePhoto
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85"
                fallbackSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85"
                alt="Vintage analog camera on wooden table"
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What I Photograph (Services 4-Card Showcase) */}
      <section
        id="pixenora-services"
        className="w-full bg-[#efeae2] py-20 sm:py-24 px-5 sm:px-8 lg:px-10"
      >
        <div className="max-w-[1040px] mx-auto">
          {/* Centered Header */}
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[10.5px] font-medium tracking-[0.18em] uppercase text-[#7b6c61]">
              <span className="w-5 h-px bg-[#b8aba0] inline-block" />
              <span>WHAT I PHOTOGRAPH</span>
            </div>

            <h2 className="mt-3 font-serif font-normal text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.08] tracking-[-0.02em] text-[#2a211b]">
              Made for your kind of story.
            </h2>
          </div>

          {/* 4-Column Portrait Cards Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SERVICE_CATEGORIES.map((service) => (
              <div
                key={service.number}
                onClick={() => setPortfolioOpen(true)}
                className="group relative aspect-[3/4.2] rounded-2xl overflow-hidden bg-neutral-900 shadow-sm cursor-pointer"
              >
                <SafePhoto
                  src={service.src}
                  fallbackSrc={service.fallbackSrc}
                  alt={service.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Bottom Gradient Scrim */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Card Copy */}
                <div className="relative z-10 h-full p-5 flex flex-col justify-end text-left">
                  <span className="inline-flex self-start items-center justify-center rounded-full bg-white/85 backdrop-blur-xs text-[#2a211b] px-2.5 py-0.5 text-[10px] font-semibold tabular-nums mb-2.5">
                    {service.number}
                  </span>
                  <h3 className="font-serif text-[20px] leading-[1.15] font-normal text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[11.5px] leading-[1.5] text-white/85">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Pill CTA */}
          <div className="mt-11 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setBookingSubmitted(false);
                setBookingOpen(true);
              }}
              className="inline-flex items-center gap-3 rounded-full bg-[#faf8f4] hover:bg-white border border-[#cbbeb0] text-[#2c221b] pl-5 pr-1.5 py-1.5 text-[12px] font-medium shadow-xs transition-all cursor-pointer group"
            >
              <span>View All Services</span>
              <span className="w-7 h-7 rounded-full bg-[#2c221b] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ApertureIcon className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Why Pixenora (Experience Split & Stacked Pillars) */}
      <section
        id="pixenora-why"
        className="w-full bg-[#f8f6f2] py-20 sm:py-24 px-5 sm:px-8 lg:px-10"
      >
        <div className="max-w-[1000px] mx-auto">
          {/* Centered Header */}
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[10.5px] font-medium tracking-[0.18em] uppercase text-[#7b6c61]">
              <span className="w-5 h-px bg-[#b8aba0] inline-block" />
              <span>WHY PIXENORA</span>
            </div>

            <h2 className="mt-3 font-serif font-normal text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.08] tracking-[-0.02em] text-[#2a211b]">
              A calm experience, from
              <br />
              first hello to final gallery.
            </h2>
          </div>

          {/* Asymmetric Collage + Stacked Cards */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            {/* Left Overlapping Photography Collage */}
            <div className="lg:col-span-6 relative px-2 sm:px-6 lg:px-2">
              <div className="relative w-[68%] aspect-[1/1.05] rounded-2xl overflow-hidden bg-neutral-200 shadow-md">
                <SafePhoto
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
                  alt="Warm natural family storytelling session"
                  sizes="(max-width: 1024px) 65vw, 340px"
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 w-[58%] aspect-[3/3.65] ml-auto -mt-24 sm:-mt-32 rounded-2xl overflow-hidden bg-neutral-200 border-[5px] border-[#f8f6f2] shadow-[0_22px_48px_rgba(32,24,18,0.16)]">
                <SafePhoto
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                  alt="Natural light close-up portrait"
                  sizes="(max-width: 1024px) 55vw, 300px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right 3 Stacked Approach Pillar Cards */}
            <div className="lg:col-span-6 space-y-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl bg-[#efeae2]/85 border border-[#e3dcd0] p-5 sm:p-6 shadow-[0_4px_18px_rgba(38,28,20,0.03)]">
                <div className="w-8 h-8 rounded-full bg-[#2c221b] text-white flex items-center justify-center mb-3.5">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-4 5 5 0 0 1 9 4c-2 4.5-9 9-9 9z" />
                  </svg>
                </div>
                <h3 className="font-serif text-[18px] font-normal text-[#2a211b]">
                  Comfort comes first
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#6a5d53]">
                  You don&apos;t need to know how to pose. I&apos;ll offer gentle
                  direction and leave room for the moments that happen
                  naturally.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl bg-[#efeae2]/85 border border-[#e3dcd0] p-5 sm:p-6 shadow-[0_4px_18px_rgba(38,28,20,0.03)]">
                <div className="w-8 h-8 rounded-full bg-[#2c221b] text-white flex items-center justify-center mb-3.5">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2V5z" />
                    <path d="M22 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2V5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-[18px] font-normal text-[#2a211b]">
                  Story over perfection
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#6a5d53]">
                  The small gestures and in-between moments matter just as much
                  as the big ones.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl bg-[#efeae2]/85 border border-[#e3dcd0] p-5 sm:p-6 shadow-[0_4px_18px_rgba(38,28,20,0.03)]">
                <div className="w-8 h-8 rounded-full bg-[#2c221b] text-white flex items-center justify-center mb-3.5">
                  <ApertureIcon className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-[18px] font-normal text-[#2a211b]">
                  Made with intention
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#6a5d53]">
                  Every gallery is carefully selected and edited to feel
                  cohesive, personal, and true to the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Client Notes (Testimonials Grid) */}
      <section
        id="pixenora-notes"
        className="w-full bg-[#efeae2] py-20 sm:py-24 px-5 sm:px-8 lg:px-10"
      >
        <div className="max-w-[1000px] mx-auto">
          {/* Centered Header & Rating Pill */}
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2.5 text-[10.5px] font-medium tracking-[0.18em] uppercase text-[#7b6c61]">
              <span className="w-5 h-px bg-[#b8aba0] inline-block" />
              <span>CLIENT NOTES</span>
            </div>

            <h2 className="mt-3 font-serif font-normal text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.08] tracking-[-0.02em] text-[#2a211b]">
              Kind words from good people.
            </h2>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#f8f6f2] border border-[#e4ddd2] px-4 py-1.5 text-[11px] font-medium text-[#5c4f45] shadow-xs">
              <span className="text-[11px] tracking-wider text-[#2c221b]">
                ★★★★★
              </span>
              <span>Rated 5.0 by 120+ happy clients</span>
            </div>
          </div>

          {/* 2-Column Editorial Testimonials */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Featured Dark Photo Testimonial */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-[#332720] text-white flex flex-col justify-between shadow-lg">
              <div className="relative aspect-[4/3.1] w-full bg-neutral-900 overflow-hidden">
                <SafePhoto
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85"
                  alt="Hannah & James wedding portrait"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover grayscale contrast-115"
                />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#a9988c]">
                  <span className="font-serif text-2xl leading-none select-none">
                    &ldquo;
                  </span>
                  <span className="text-[11px] tracking-widest text-[#e9dfd5]">
                    ★★★★★
                  </span>
                </div>

                <blockquote className="my-5 font-serif text-[18px] sm:text-[20px] leading-[1.45] text-[#f9f6f1] font-normal">
                  &ldquo;We were nervous about being in front of a camera all
                  day. Alex put us at ease from the first minute and caught every
                  glance and laugh we didn&apos;t know had happened. Opening our
                  gallery felt like living the day all over again.&rdquo;
                </blockquote>

                <div className="pt-2">
                  <p className="text-[12.5px] font-semibold text-white">
                    Hannah &amp; James
                  </p>
                  <p className="text-[11px] text-[#c7b9ae]">
                    Wedding · The Cotswolds
                  </p>
                </div>
              </div>
            </div>

            {/* Right 3 Stacked Client Quote Cards */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              {CLIENT_NOTES.map((note) => (
                <div
                  key={note.initials}
                  className="rounded-2xl bg-[#f8f6f2] border border-[#e5ded3] p-5 sm:p-6 shadow-[0_6px_22px_rgba(38,28,20,0.03)] flex-1 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl leading-none text-[#b8a99b] select-none">
                      &ldquo;
                    </span>
                    <span className="text-[10.5px] tracking-widest text-[#2c221b]">
                      ★★★★★
                    </span>
                  </div>

                  <p className="my-3 text-[13px] sm:text-[13.5px] leading-[1.6] text-[#3a3029]">
                    {note.quote}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="w-8 h-8 rounded-full bg-[#e6dfd4] text-[#4c4037] text-[10.5px] font-semibold flex items-center justify-center shrink-0">
                      {note.initials}
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-[#2a211b] leading-tight">
                        {note.name}
                      </p>
                      <p className="text-[10.5px] text-[#7a6b60] mt-0.5">
                        {note.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Accordion ("Before We Create Something Beautiful") */}
      <section
        id="pixenora-faq"
        className="w-full bg-[#f5f3ee] py-20 sm:py-24 px-5 sm:px-8 lg:px-10 border-t border-[#e6dfd5]"
      >
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Sticky Editorial Headline & CTA */}
          <div className="lg:col-span-5">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#c2412d] mb-4">
              A FEW THINGS TO KNOW
            </p>

            <p className="font-serif italic text-[24px] sm:text-[28px] font-normal text-[#c2412d] leading-tight mb-1">
              before we create
            </p>

            <h2 className="font-black uppercase tracking-[-0.04em] leading-[0.88] text-[44px] sm:text-[54px] lg:text-[58px] text-[#111113]">
              SOMETHING
              <br />
              BEAUTIFUL.
            </h2>

            <p className="mt-5 text-[13.5px] leading-[1.55] text-[#6d655e] max-w-[270px]">
              Still curious? I&apos;m always happy to answer questions about your
              session.
            </p>

            <button
              type="button"
              onClick={() => {
                setBookingSubmitted(false);
                setBookingOpen(true);
              }}
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#c2412d] hover:bg-[#ad3623] text-white px-6 py-3 text-[10.5px] font-bold tracking-[0.14em] uppercase transition-colors shadow-sm cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>ASK A QUESTION</span>
            </button>
          </div>

          {/* Right Expandable Question Rows */}
          <div className="lg:col-span-7 border-t border-[#ddd6ca]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={item.q} className="border-b border-[#ddd6ca]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaqIdx((prev) => (prev === idx ? null : idx))
                    }
                    className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-[14.5px] sm:text-[15.5px] font-medium text-[#1b1918] group-hover:text-[#c2412d] transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#111113] text-white flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-45 bg-[#c2412d]" : ""
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      >
                        <path d="M8 3.5v9M3.5 8h9" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pr-10 text-[13.5px] leading-[1.65] text-[#5e5650]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Newsletter Banner, Editorial Statement & Studio Footer */}
      <footer className="w-full bg-white px-5 sm:px-8 lg:px-10 pt-10 sm:pt-14 pb-8">
        {/* Newsletter Terracotta Gradient Card */}
        <div className="max-w-[1120px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-[#d4572a] via-[#bc3924] to-[#982518] p-7 sm:p-10 lg:p-12 text-white shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/85 mb-3">
                NEWSLETTER
              </p>
              <p className="font-serif italic text-[22px] sm:text-[26px] font-normal text-white leading-tight">
                a little inspiration,
              </p>
              <h2 className="font-black uppercase tracking-[-0.04em] leading-[0.9] text-[42px] sm:text-[52px] text-white mt-0.5">
                DELIVERED.
              </h2>
              <p className="mt-3.5 text-[12.5px] text-white/90">
                Occasional stories, recent work, and creative notes from behind
                the lens.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubscribed(true);
                setNewsletterEmail("");
              }}
              className="w-full lg:w-[400px] xl:w-[420px] rounded-full bg-white/12 border border-white/30 p-1.5 pl-5 flex items-center justify-between gap-2 backdrop-blur-xs"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={
                  newsletterSubscribed
                    ? "Thank you for subscribing!"
                    : "Your email address"
                }
                className="flex-1 bg-transparent text-xs sm:text-[13px] text-white placeholder:text-white/75 focus:outline-none min-w-0"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#faf5f2] text-[#a62d1b] px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2412d]" />
                <span>{newsletterSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Mid Visual Statement: "the moments that STAY WITH US" */}
        <div className="max-w-[1120px] mx-auto pt-12 sm:pt-14 pb-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="relative w-[220px] sm:w-[240px] aspect-[16/11] rounded-xl overflow-hidden bg-neutral-950 shadow-sm shrink-0">
            <SafePhoto
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85"
              fallbackSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85"
              alt="Atmospheric studio fashion portrait"
              sizes="260px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#631715]/60 via-transparent to-black/35" />
          </div>

          <div className="text-left md:text-right flex-1">
            <p className="font-serif italic text-[20px] sm:text-[24px] text-[#c2412d] leading-none mb-1">
              the moments that
            </p>
            <div className="font-black uppercase tracking-[-0.045em] leading-[0.86] text-[44px] sm:text-[66px] lg:text-[84px] text-[#111113]">
              STAY WITH US
            </div>
          </div>
        </div>

        {/* Bottom 4-Column LUMEVÉ Directory */}
        <div className="max-w-[1120px] mx-auto border-t border-[#e7e2da] pt-10 sm:pt-12 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Studio Brand */}
          <div className="lg:col-span-4">
            <div className="font-black uppercase tracking-[-0.03em] text-[22px] text-[#111113]">
              LUMEVÉ
            </div>
            <p className="mt-2 font-serif italic text-[14px] leading-snug text-[#2c2522]">
              Photography for the moments that
              <br />
              stay with us.
            </p>
            <p className="mt-3 text-[11.5px] leading-relaxed text-[#7c746e] max-w-[230px]">
              Capturing honest stories, beautiful details, and timeless
              memories.
            </p>
          </div>

          {/* Col 2: Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#c2412d] mb-4">
              EXPLORE
            </h3>
            <ul className="space-y-2 text-[12.5px] text-[#5e5650]">
              <li>
                <a href="#" className="hover:text-[#111113] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#pixenora-about"
                  className="hover:text-[#111113] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPortfolioOpen(true)}
                  className="hover:text-[#111113] transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <a
                  href="#pixenora-services"
                  className="hover:text-[#111113] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pixenora-faq"
                  className="hover:text-[#111113] transition-colors"
                >
                  Journal
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setBookingSubmitted(false);
                    setBookingOpen(true);
                  }}
                  className="hover:text-[#111113] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Get In Touch */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#c2412d] mb-4">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2 text-[12.5px] text-[#5e5650]">
              <li>
                <a
                  href="mailto:hello@lumeve.example"
                  className="hover:text-[#111113] transition-colors"
                >
                  hello@lumeve.example
                </a>
              </li>
              <li>+1 (212) 555-0148</li>
              <li>New York, USA · Available Worldwide</li>
            </ul>
          </div>

          {/* Col 4: Follow Along */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#c2412d] mb-4">
              FOLLOW ALONG
            </h3>
            <ul className="space-y-2 text-[12.5px] text-[#5e5650]">
              {["Instagram", "Pinterest", "LinkedIn", "Awards", "Pricing"].map(
                (label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      className="hover:text-[#111113] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="max-w-[1120px] mx-auto border-t border-[#eae5dd] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.12em] uppercase text-[#6e6761]">
          <p>COPYRIGHT © 2026 LUMEVÉ STUDIO. ALL RIGHTS RESERVED.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-[#111113] transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#terms" className="hover:text-[#111113] transition-colors">
              TERMS &amp; CONDITIONS
            </a>
            <button
              type="button"
              onClick={() => {
                setBookingSubmitted(false);
                setBookingOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#c2412d] hover:bg-[#ad3623] text-white px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>BOOK A SESSION</span>
            </button>
          </div>
        </div>
      </footer>

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

