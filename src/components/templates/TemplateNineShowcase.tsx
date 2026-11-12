"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface GalleryFrame {
  id: string;
  badge: string;
  projectNum: string;
  title: string;
  caption: string;
  category: string;
  stock: string;
  location: string;
  src: string;
  fallbackSrc: string;
}

const SUB_NAV_ITEMS = [
  { id: "lumeve-home", label: "HOME" },
  { id: "lumeve-about", label: "ABOUT" },
  { id: "lumeve-work", label: "WORK" },
  { id: "lumeve-services", label: "SERVICES" },
  { id: "lumeve-pricing", label: "PRICING" },
  { id: "lumeve-journal", label: "JOURNAL" },
  { id: "lumeve-contact", label: "CONTACT" },
];

const HERO_FEATURED_PORTRAIT: GalleryFrame = {
  id: "hero-crimson-portrait",
  badge: "PORTRAIT SESSION · 2025",
  projectNum: "FEATURED FRAME",
  title: "CRIMSON STUDIO STUDY",
  caption:
    "Editorial beauty & portrait lighting sculpted against rich crimson studio backdrops.",
  category: "Portrait",
  stock: "Hasselblad · Portra 400",
  location: "SoHo Daylight Loft, New York",
  src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=85",
  fallbackSrc:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
};

const HERO_POLAROIDS: GalleryFrame[] = [
  {
    id: "polaroid-own-light",
    badge: "PORTRAIT",
    projectNum: "PROJECT 02",
    title: "IN HER OWN LIGHT",
    caption:
      "Golden late-afternoon shadows casting botanical silhouettes across natural skin.",
    category: "Portrait",
    stock: "Kodak Portra 400 · 35mm",
    location: "West Village, New York",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "polaroid-togetherness",
    badge: "WEDDING",
    projectNum: "PROJECT 01",
    title: "TOGETHERNESS",
    caption:
      "Honest vows and sweeping meadow movement documented with editorial calm.",
    category: "Wedding",
    stock: "Kodak Portra 800 · 120mm",
    location: "Hudson Valley, New York",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
];

const ABOUT_COLLAGE = {
  mainCamera: {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
    alt: "Photographer holding DSLR camera in warm bokeh studio",
  },
  insetPortrait: {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    alt: "Direct flash portrait against warm ruby backdrop",
  },
};

const SELECTED_WORKS: GalleryFrame[] = [
  {
    id: "proj-togetherness",
    badge: "WEDDING PHOTOGRAPHY",
    projectNum: "PROJECT 01",
    title: "THE ART OF TOGETHERNESS",
    caption:
      "Honest emotions, intimate details, and the beauty of two lives becoming one.",
    category: "Wedding",
    stock: "Kodak Portra 800 · 35mm",
    location: "Hudson Meadow, New York",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-in-her-own-light",
    badge: "PORTRAIT PHOTOGRAPHY",
    projectNum: "PROJECT 02",
    title: "IN HER OWN LIGHT",
    caption:
      "Expressive portraits celebrating individuality, confidence, and quiet beauty.",
    category: "Portrait",
    stock: "Kodak Portra 400 · 120mm",
    location: "West Village, New York",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-modern-muse",
    badge: "FASHION & EDITORIAL",
    projectNum: "PROJECT 03",
    title: "THE MODERN MUSE",
    caption:
      "Artful imagery shaped by movement, texture, light, and contemporary style.",
    category: "Editorial",
    stock: "Ilford Delta 400 · Medium Format",
    location: "Tribeca Loft, New York",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-everyday-poetry",
    badge: "LIFESTYLE PHOTOGRAPHY",
    projectNum: "PROJECT 04",
    title: "EVERYDAY POETRY",
    caption:
      "The little moments that often mean the most, captured as they naturally unfold.",
    category: "Lifestyle",
    stock: "Cinestill 400D · 35mm",
    location: "Copenhagen & New York",
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-stoneware-forms",
    badge: "BRAND PHOTOGRAPHY",
    projectNum: "PROJECT 05",
    title: "FORMS IN DAYLIGHT",
    caption:
      "Tactile ceramics and sculptural vessels illuminated by north-facing studio glass.",
    category: "Brand",
    stock: "Mamiya 7II · Portra 160",
    location: "SoHo Atelier, New York",
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-evening-conservatory",
    badge: "WEDDING PHOTOGRAPHY",
    projectNum: "PROJECT 06",
    title: "CONSERVATORY VOWS",
    caption:
      "Golden foliage reflections and unscripted promises inside historic glasshouses.",
    category: "Wedding",
    stock: "Contax G2 · Portra 400",
    location: "Brooklyn Botanic Garden",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-sunday-knit",
    badge: "PORTRAIT PHOTOGRAPHY",
    projectNum: "PROJECT 07",
    title: "SUNDAY GOLDEN HOUR",
    caption:
      "Soft amber backlight and spontaneous movement across cobblestone terraces.",
    category: "Portrait",
    stock: "Kodak Gold 200 · 35mm",
    location: "Williamsburg, New York",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-alpine-morning",
    badge: "TRAVEL & LIFESTYLE",
    projectNum: "PROJECT 08",
    title: "MORNING IN SHIMOYOSHIDA",
    caption:
      "Quiet mountain horizons and film-toned street scenes exposed at dawn.",
    category: "Travel",
    stock: "Portra 160 · 120mm",
    location: "Fujiyoshida, Japan",
    src: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
  },
];

const SERVICES_TIERS = [
  {
    num: "01",
    name: "WEDDING STORYTELLING",
    price: "$4,800",
    summary:
      "Full-day documentary & editorial wedding coverage across 35mm film and tethered digital, 600+ edited frames, and private print gallery.",
  },
  {
    num: "02",
    name: "EDITORIAL PORTRAITS",
    price: "$1,250",
    summary:
      "2-hour daylight loft or on-location portrait session with styling notes, contact sheets within 72 hours, and 45 final hand-graded images.",
  },
  {
    num: "03",
    name: "BRAND & LOOKBOOK",
    price: "$3,400",
    summary:
      "Full creative direction, mood boarding, medium-format studio production, and commercial licensing for emerging & established houses.",
  },
];

const JOURNAL_NOTES = [
  {
    date: "AUTUMN 2026",
    title: "Why we pair medium format film with direct flash at twilight receptions",
    excerpt:
      "Holding warmth in candlelit rooms without interrupting a single toast or embrace.",
  },
  {
    date: "SUMMER 2026",
    title: "Preparing a calm wardrobe palette for outdoor editorial portraits",
    excerpt:
      "How ecru linen, muted espresso, and terracotta tones photograph best in golden hour.",
  },
];

function SafeLumeveImage({
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

export default function TemplateNineShowcase() {
  const [activeNav, setActiveNav] = useState("lumeve-home");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [lightboxFrame, setLightboxFrame] = useState<GalleryFrame | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    service: "WEDDING STORYTELLING",
    message: "",
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStoryModalOpen(false);
        setLightboxFrame(null);
        setBookingOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#141416] selection:bg-[#c4553d] selection:text-white relative">
      {/* Shared Top Workspace Navbar */}
      <div className="bg-white border-b border-[#ececf0]">
        <Navbar />
      </div>

      {/* Centered Editorial Page Sub-Navbar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#ececf0]">
        <nav
          aria-label="Template sections"
          className="max-w-5xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-center gap-4 sm:gap-7"
        >
          {SUB_NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`text-[9.5px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#c4553d]"
                    : "text-[#525259] hover:text-[#141416]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ================================================================= */}
      {/* 1. HERO: WARM TERRACOTTA "A STORY WORTH KEEPING."                 */}
      {/* ================================================================= */}
      <section
        id="lumeve-home"
        className="scroll-mt-14 w-full bg-gradient-to-b from-[#d8613f] via-[#b83f25] to-[#7c2313] text-white pt-10 sm:pt-14 pb-16 sm:pb-20"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Centered Stacked Editorial Headline */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-white/90">
              PHOTOGRAPHY THAT FEELS LIKE YOU
            </p>

            <p className="mt-2 font-serif italic text-[22px] sm:text-[26px] leading-none text-white/95">
              every moment,
            </p>

            <h1 className="mt-1 font-optic-display font-bold uppercase text-[48px] sm:text-[72px] lg:text-[82px] leading-[0.86] tracking-[-0.015em] text-white">
              A STORY WORTH
              <br />
              KEEPING.
            </h1>
          </div>

          {/* 3-Column Hero Media + CTAs Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-6 items-center">
            {/* Left Copy, Stacked Pills & Location Tag */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col items-start">
              <p className="max-w-[235px] text-[11.5px] sm:text-[12px] leading-[1.55] text-white/90">
                From intimate celebrations to extraordinary adventures, we
                capture the emotions, details, and fleeting moments that make
                your story uniquely yours.
              </p>

              <div className="mt-5 flex flex-col items-start gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setBookingSent(false);
                    setBookingOpen(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#f4f1ec] text-[#c4553d] px-5 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase shadow-sm transition-colors cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#c4553d]"
                  />
                  <span>BOOK A SESSION</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("lumeve-work")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 hover:bg-white/10 text-white px-5 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-white"
                  />
                  <span>EXPLORE MY WORK</span>
                </button>
              </div>

              <div className="mt-7 inline-flex items-center gap-1.5 text-[8.5px] font-semibold tracking-[0.14em] uppercase text-white/85">
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>BASED IN NEW YORK · AVAILABLE WORLDWIDE</span>
              </div>
            </div>

            {/* Center Featured Crimson Portrait Card */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
              <button
                type="button"
                onClick={() => setLightboxFrame(HERO_FEATURED_PORTRAIT)}
                aria-label={`Inspect ${HERO_FEATURED_PORTRAIT.title}`}
                className="group relative w-full max-w-[265px] aspect-[3/3.65] rounded-[8px] border-2 border-white bg-[#581214] overflow-hidden shadow-[0_24px_54px_rgba(32,6,4,0.45)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <SafeLumeveImage
                  src={HERO_FEATURED_PORTRAIT.src}
                  fallbackSrc={HERO_FEATURED_PORTRAIT.fallbackSrc}
                  alt={HERO_FEATURED_PORTRAIT.title}
                  priority
                  sizes="280px"
                  className="object-cover object-top contrast-115 brightness-95 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#6b1414]/65 via-transparent to-[#7b1a16]/25 mix-blend-multiply pointer-events-none"
                />

                <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white text-[#141416] px-3.5 py-1 text-[8.5px] font-semibold tracking-[0.12em] uppercase shadow-sm inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="w-1 h-1 rounded-full bg-[#c4553d]"
                  />
                  <span>{HERO_FEATURED_PORTRAIT.badge}</span>
                </span>
              </button>
            </div>

            {/* Right Tilted Polaroid Cards Pair */}
            <div className="lg:col-span-4 order-3 flex items-center justify-center lg:justify-end gap-2">
              {HERO_POLAROIDS.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setLightboxFrame(card)}
                  aria-label={`Inspect ${card.title}`}
                  className={`group text-left bg-white p-1.5 pb-2.5 rounded-[5px] shadow-[0_18px_38px_rgba(32,6,4,0.35)] w-[124px] sm:w-[134px] transition-transform duration-300 hover:scale-[1.04] hover:rotate-0 hover:z-10 cursor-pointer focus:outline-none ${
                    index === 0 ? "-rotate-6" : "rotate-3 mt-4 -ml-1"
                  }`}
                >
                  <div className="relative aspect-square w-full rounded-[3px] overflow-hidden bg-neutral-200">
                    <SafeLumeveImage
                      src={card.src}
                      fallbackSrc={card.fallbackSrc}
                      alt={card.title}
                      sizes="140px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 px-0.5">
                    <div className="font-optic-display font-bold uppercase text-[10px] tracking-[0.04em] text-[#141416] leading-tight">
                      {card.title}
                    </div>
                    <div className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-[#c4553d]">
                      {card.badge}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. A LITTLE ABOUT ME: WHITE OVERLAP COLLAGE & STORY               */}
      {/* ================================================================= */}
      <section
        id="lumeve-about"
        className="scroll-mt-14 w-full bg-white py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Camera + Flash Portrait Overlap */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[330px] sm:max-w-[360px] pb-8 pr-6 sm:pr-8">
              <div className="relative aspect-[4/4.75] w-full rounded-xl overflow-hidden bg-neutral-100 shadow-[0_14px_34px_rgba(18,18,22,0.08)]">
                <SafeLumeveImage
                  src={ABOUT_COLLAGE.mainCamera.src}
                  fallbackSrc={ABOUT_COLLAGE.mainCamera.fallbackSrc}
                  alt={ABOUT_COLLAGE.mainCamera.alt}
                  sizes="(max-width: 640px) 90vw, 360px"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-1 right-0 w-[148px] sm:w-[170px] aspect-square rounded-lg bg-white p-1.5 shadow-[0_16px_38px_rgba(16,16,20,0.16)] border border-black/5">
                <div className="relative w-full h-full rounded-[5px] overflow-hidden bg-neutral-900">
                  <SafeLumeveImage
                    src={ABOUT_COLLAGE.insetPortrait.src}
                    fallbackSrc={ABOUT_COLLAGE.insetPortrait.fallbackSrc}
                    alt={ABOUT_COLLAGE.insetPortrait.alt}
                    sizes="180px"
                    className="object-cover object-top contrast-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Bio & Italic Quote */}
          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
              A LITTLE ABOUT ME
            </p>

            <h2 className="mt-2">
              <span className="block font-serif italic text-[24px] sm:text-[31px] leading-[1.08] text-[#c4553d]">
                behind every beautiful image
              </span>
              <span className="block font-optic-display font-bold uppercase text-[42px] sm:text-[54px] leading-[0.9] tracking-[-0.015em] text-[#141416] mt-0.5">
                IS A STORY.
              </span>
            </h2>

            <p className="mt-4 max-w-[410px] text-[12.5px] sm:text-[13px] leading-[1.6] text-[#73737a]">
              I&apos;m a photographer drawn to the honest, imperfect, and
              beautifully human moments that make life meaningful. Through
              natural light, thoughtful composition, and an editorial eye, I
              create imagery that feels effortless, personal, and timeless.
            </p>

            <blockquote className="mt-5 max-w-[400px] font-serif italic text-[17px] sm:text-[20px] leading-[1.32] text-[#222226]">
              &ldquo;For me, photography isn&apos;t simply about how a moment
              looks. It&apos;s about how it feels when you look back.&rdquo;
            </blockquote>

            <button
              type="button"
              onClick={() => setStoryModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c4553d]/80 px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#c4553d] hover:bg-[#c4553d] hover:text-white transition-colors cursor-pointer group"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-current transition-transform group-hover:scale-125"
              />
              <span>GET TO KNOW ME</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. WORK: SELECTED STORIES + HONEST / TIMELESS SILHOUETTE BANNER   */}
      {/* ================================================================= */}
      <section
        id="lumeve-work"
        className="scroll-mt-14 w-full bg-[#f4f1ec] py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                SELECTED WORK
              </p>

              <h2 className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
                <span className="font-serif italic text-[24px] sm:text-[30px] leading-none text-[#c4553d]">
                  through my
                </span>
                <span className="font-optic-display font-bold uppercase text-[46px] sm:text-[58px] leading-[0.86] tracking-[-0.015em] text-[#141416]">
                  LENS.
                </span>
              </h2>

              <p className="mt-3 max-w-[375px] text-[12px] sm:text-[12.5px] leading-[1.5] text-[#73737a]">
                A collection of meaningful moments, beautiful places, and
                authentic stories captured with intention.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="w-fit inline-flex items-center gap-2 rounded-full border border-[#c4553d]/80 px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#c4553d] hover:bg-[#c4553d] hover:text-white transition-colors cursor-pointer group"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-current transition-transform group-hover:scale-125"
              />
              <span>
                {showAllProjects ? "SHOW FEATURED 4" : "EXPLORE ALL PROJECTS"}
              </span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(showAllProjects
              ? SELECTED_WORKS
              : SELECTED_WORKS.slice(0, 4)
            ).map((work) => (
              <article key={work.id} className="group">
                <button
                  type="button"
                  onClick={() => setLightboxFrame(work)}
                  aria-label={`Inspect ${work.title}`}
                  className="block w-full text-left cursor-pointer focus:outline-none"
                >
                  <div className="relative aspect-[3/3.65] w-full rounded-[6px] overflow-hidden bg-neutral-200 shadow-xs">
                    <SafeLumeveImage
                      src={work.src}
                      fallbackSrc={work.fallbackSrc}
                      alt={work.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-2.5 py-0.5 text-[8.5px] font-semibold tracking-[0.08em] uppercase text-[#141416] shadow-xs">
                      {work.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 font-optic-display font-bold uppercase text-[20px] leading-[1.04] tracking-[-0.01em] text-[#141416] group-hover:text-[#c4553d] transition-colors">
                    {work.title}
                  </h3>

                  <div className="mt-1 text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#8c8c94]">
                    {work.projectNum}
                  </div>

                  <p className="mt-1.5 text-[11px] leading-[1.45] text-[#73737a]">
                    {work.caption}
                  </p>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3B. FULL-BLEED CRIMSON MANIFESTO BAND: "HONEST / TIMELESS"        */}
      {/* ================================================================= */}
      <section
        aria-label="Honest and Timeless Photography Manifesto"
        className="relative w-full min-h-[430px] sm:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#c93f24] via-[#9c2413] to-[#6f140a] text-white flex flex-col justify-between py-10 sm:py-12"
      >
        {/* Soft Atmospheric Profile Silhouette Layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        >
          <div className="relative w-full h-full scale-105 opacity-45 mix-blend-multiply">
            <SafeLumeveImage
              src={ABOUT_COLLAGE.insetPortrait.src}
              fallbackSrc={ABOUT_COLLAGE.insetPortrait.fallbackSrc}
              alt=""
              sizes="100vw"
              className="object-cover object-center grayscale brightness-[0.28] contrast-[1.55] blur-[2px]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#6b1209]/70 via-transparent to-[#b5321a]/45" />
        </div>

        {/* Top Left "HONEST" + Supporting Caption */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
          <div className="font-optic-display font-bold uppercase text-[64px] sm:text-[90px] lg:text-[106px] leading-[0.82] tracking-[-0.02em] text-white">
            HONEST
          </div>

          <p className="max-w-[235px] pt-1 sm:pt-2 text-[11px] sm:text-[11.5px] font-medium leading-[1.48] text-white/90">
            Natural light, thoughtful composition, and an editorial eye.
            Photography that feels as good as the moment itself.
          </p>
        </div>

        {/* Bottom Right Micro Specialties + "TIMELESS" */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-start sm:items-end justify-end gap-5 sm:gap-8 mt-24 sm:mt-28">
          <div className="sm:text-right max-w-[235px] pb-1 text-[8.5px] sm:text-[9px] font-semibold tracking-[0.12em] uppercase leading-[1.5] text-white/85">
            WEDDINGS · PORTRAITS · EDITORIAL · BRAND · EVENTS · TRAVEL
          </div>

          <div className="font-optic-display font-bold uppercase text-[64px] sm:text-[90px] lg:text-[106px] leading-[0.82] tracking-[-0.02em] text-white">
            TIMELESS
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. SERVICES & PRICING                                             */}
      {/* ================================================================= */}
      <section
        id="lumeve-services"
        className="scroll-mt-14 w-full bg-white py-16 sm:py-24"
      >
        <div
          id="lumeve-pricing"
          className="scroll-mt-14 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10"
        >
          <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
            SERVICES &amp; PRICING
          </p>
          <h2 className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
            <span className="font-serif italic text-[24px] sm:text-[30px] leading-none text-[#c4553d]">
              crafted collections
            </span>
            <span className="font-optic-display font-bold uppercase text-[42px] sm:text-[52px] leading-[0.86] text-[#141416]">
              TO REMEMBER.
            </span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES_TIERS.map((tier) => (
              <div
                key={tier.num}
                className="rounded-[6px] bg-[#f3f2ee] border border-[#ebe9e3] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#c4553d]">
                      {tier.num}
                    </span>
                    <span className="font-optic-display font-bold text-lg text-[#141416]">
                      {tier.price}
                    </span>
                  </div>
                  <h3 className="mt-3 font-optic-display font-bold uppercase text-2xl leading-[1.02] text-[#141416]">
                    {tier.name}
                  </h3>
                  <p className="mt-2.5 text-[11.5px] leading-[1.55] text-[#73737a]">
                    {tier.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setBookingForm((prev) => ({ ...prev, service: tier.name }));
                    setBookingSent(false);
                    setBookingOpen(true);
                  }}
                  className="mt-6 w-fit inline-flex items-center gap-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#c4553d] hover:opacity-75 cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-current"
                  />
                  <span>RESERVE COLLECTION</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. JOURNAL & FOOTER CONTACT                                       */}
      {/* ================================================================= */}
      <section
        id="lumeve-journal"
        className="scroll-mt-14 w-full bg-[#f4f1ec] py-16 sm:py-20 border-t border-[#e5dfd6]"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
            JOURNAL
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOURNAL_NOTES.map((note) => (
              <div
                key={note.title}
                className="bg-white rounded-[6px] p-6 border border-[#ebe9e3]"
              >
                <span className="text-[9px] font-semibold tracking-[0.14em] uppercase text-[#c4553d]">
                  {note.date}
                </span>
                <h3 className="mt-2 font-serif italic text-xl text-[#141416] leading-snug">
                  {note.title}
                </h3>
                <p className="mt-2 text-xs text-[#73737a] leading-relaxed">
                  {note.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="lumeve-contact"
        className="scroll-mt-14 w-full bg-white border-t border-[#ececf0]"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-10 pb-20 sm:pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73737a]">
          <div>
            <span className="font-optic-display font-bold uppercase text-lg text-[#141416] mr-3">
              LUMEVÉ
            </span>
            <span>Based in New York · Available Worldwide</span>
          </div>

          <button
            type="button"
            onClick={() => {
              setBookingSent(false);
              setBookingOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-5 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer"
          >
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
            <span>BOOK A SESSION</span>
          </button>
        </div>
      </footer>

      <FramerBadge />

      {/* ================================================================= */}
      {/* GET TO KNOW ME STORY MODAL                                        */}
      {/* ================================================================= */}
      {storyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About Lumeve Photography"
          onClick={() => setStoryModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl bg-white text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ececf0]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                NEW YORK · AVAILABLE WORLDWIDE
              </span>
              <button
                type="button"
                onClick={() => setStoryModalOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>
            <h3 className="mt-5 font-optic-display font-bold uppercase text-3xl sm:text-4xl leading-[0.9] text-[#141416]">
              ANALOG HEART, EDITORIAL PRECISION.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#66666e]">
              Shooting on Leica 35mm, medium format film, and calibrated digital
              across intimate New York ceremonies and European destinations.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setStoryModalOpen(false);
                  setBookingSent(false);
                  setBookingOpen(true);
                }}
                className="rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-5 py-2 text-xs font-medium cursor-pointer transition-colors"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* GALLERY FRAME LIGHTBOX MODAL                                      */}
      {/* ================================================================= */}
      {lightboxFrame && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxFrame.title}
          onClick={() => setLightboxFrame(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl bg-white text-[#141416] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative aspect-[4/5] w-full bg-neutral-200">
              <SafeLumeveImage
                src={lightboxFrame.src}
                fallbackSrc={lightboxFrame.fallbackSrc}
                alt={lightboxFrame.title}
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#f4f1ec] px-3 py-1 text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#c4553d]">
                  {lightboxFrame.badge}
                </span>
                <h3 className="mt-3 font-optic-display font-bold uppercase text-2xl text-[#141416]">
                  {lightboxFrame.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#73737a]">
                  {lightboxFrame.caption}
                </p>
                <dl className="mt-5 space-y-2 border-t border-[#ececf0] pt-4 text-xs">
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#8c8c94]">Film Stock</dt>
                    <dd className="font-medium text-right">
                      {lightboxFrame.stock}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#8c8c94]">Location</dt>
                    <dd className="font-medium text-right">
                      {lightboxFrame.location}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 flex items-center justify-between gap-2 pt-4 border-t border-[#ececf0]">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxFrame(null);
                    setBookingSent(false);
                    setBookingOpen(true);
                  }}
                  className="rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-4 py-2 text-xs font-medium cursor-pointer transition-colors"
                >
                  Book Similar
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxFrame(null)}
                  className="rounded-full border border-[#e5e5ea] px-4 py-2 text-xs font-medium text-[#141416] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SESSION BOOKING MODAL                                             */}
      {/* ================================================================= */}
      {bookingOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a Session"
          onClick={() => setBookingOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md bg-white text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ececf0]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                BOOK A SESSION · NEW YORK
              </span>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>

            {bookingSent ? (
              <div className="py-10 text-center space-y-3">
                <p className="font-optic-display font-bold uppercase text-3xl text-[#141416]">
                  INQUIRY SENT.
                </p>
                <p className="text-xs text-[#73737a]">
                  Thank you, {bookingForm.name || "friend"}. We&apos;ll reply
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="mt-3 rounded-full bg-[#c4553d] text-white px-5 py-2 text-xs font-medium cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setBookingSent(true);
                }}
                className="mt-5 space-y-4 text-xs"
              >
                <label className="block">
                  <span className="block text-[#73737a] mb-1">Your Name</span>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Claire Bennett"
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  />
                </label>

                <label className="block">
                  <span className="block text-[#73737a] mb-1">Email</span>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="claire@studio.com"
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  />
                </label>

                <label className="block">
                  <span className="block text-[#73737a] mb-1">Collection</span>
                  <select
                    value={bookingForm.service}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        service: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  >
                    <option value="WEDDING STORYTELLING">
                      Wedding Storytelling
                    </option>
                    <option value="EDITORIAL PORTRAITS">
                      Editorial Portraits
                    </option>
                    <option value="BRAND & LOOKBOOK">Brand & Lookbook</option>
                  </select>
                </label>

                <label className="block">
                  <span className="block text-[#73737a] mb-1">
                    Session Details
                  </span>
                  <textarea
                    rows={3}
                    required
                    value={bookingForm.message}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell me about your date, venue, and vision..."
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white py-2.5 text-xs font-medium cursor-pointer transition-colors"
                >
                  Send Booking Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

