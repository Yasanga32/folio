"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface WeddingStory {
  id: string;
  couple: string;
  location: string;
  format: string;
  year: string;
  duration: string;
  src: string;
  fallbackSrc: string;
  summary: string;
}

const HERO_FILM_FRAMES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=85",
    alt: "Bride and groom close embrace in monochrome cinema grain",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    alt: "Couple walking hand in hand across meadow on Super 8 film",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",
    alt: "Intimate ceremony portrait captured on black and white 35mm",
  },
];

const EVERMORE_STATS = [
  { value: "120+", label: "Weddings photographed" },
  { value: "8+", label: "Years of experience" },
  { value: "18+", label: "Destinations" },
  { value: "35K+", label: "Moments captured" },
];

const EVERMORE_ABOUT_IMAGE = {
  src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
  fallbackSrc:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
  alt: "Bride and groom holding soft rose wedding bouquet shot on 35mm film",
};

const WEDDING_STORIES: WeddingStory[] = [
  {
    id: "story-claire-julian",
    couple: "CLAIRE & JULIAN",
    location: "Villa Balbiano · Lake Como",
    format: "35mm Film + Super 8 Reel",
    year: "2026",
    duration: "04:18",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Three candlelit evenings beside the lake — champagne toasts on stone terraces, silver-gelatin portraits, and a hand-spliced Super 8 highlight film.",
  },
  {
    id: "story-elena-marcus",
    couple: "ELENA & MARCUS",
    location: "Provence Conservatory · France",
    format: "Medium Format + 16mm Motion",
    year: "2026",
    duration: "05:06",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Wind in olive groves, linen vows exchanged under late afternoon sun, and unscripted dancefloor frames shot on Ilford HP5.",
  },
  {
    id: "story-noelle-theo",
    couple: "NOELLE & THEO",
    location: "Hudson Valley Conservatory · NY",
    format: "Leica M6 + Super 8",
    year: "2026",
    duration: "03:54",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    summary:
      "An intimate autumn celebration framed through glasshouse rain, velvet candlelight, and classic Kodak Tri-X tonal depth.",
  },
  {
    id: "story-camille-henri",
    couple: "CAMILLE & HENRI",
    location: "Place des Vosges · Paris",
    format: "Contax G2 + Digital Cinema",
    year: "2026",
    duration: "04:42",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Morning espresso before the civil ceremony, cobbled arcade portraits, and black-tie twilight reels along the Seine.",
  },
];

const HOW_WE_WORK_PILLARS = [
  {
    num: "01",
    title: "Relaxed",
    description:
      "We keep things easy and comfortable, so you can enjoy your day without thinking about the camera.",
  },
  {
    num: "02",
    title: "Observant",
    description:
      "We notice the little moments, genuine reactions, and emotions that naturally unfold throughout your day.",
  },
  {
    num: "03",
    title: "Personal",
    description:
      "We take time to understand your story, creating photographs and films that feel personal, honest, and true to you.",
  },
];

const HOW_WE_WORK_IMAGE = {
  src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  fallbackSrc:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  alt: "Bride and groom embracing gently with white wedding bouquet",
};

interface CinemaReelItem {
  id: string;
  num: string;
  couple: string;
  location: string;
  format: string;
  duration: string;
  posterSrc: string;
  fallbackSrc: string;
  directorNote: string;
  sequenceFrames: string[];
}

const FILM_SHOWREELS: CinemaReelItem[] = [
  {
    id: "reel-groom-anthem",
    num: "01",
    couple: "CLAIRE & JULIAN",
    location: "Villa Balbiano · Lake Como",
    format: "Kodak Vision3 500T · 16mm",
    duration: "04:18",
    posterSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=85",
    directorNote:
      "Quiet morning vows beside the stone boathouse scored to live strings and Super-8 camera motor hum.",
    sequenceFrames: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "reel-provence-twilight",
    num: "02",
    couple: "ELENA & MARCUS",
    location: "Gordes Estate · Provence",
    format: "Super 8mm · Tri-X Reversal",
    duration: "05:06",
    posterSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    directorNote:
      "Candlelit olive grove dinner, spontaneous champagne toasts, and midnight dancing under linen festoons.",
    sequenceFrames: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "reel-hudson-rain",
    num: "03",
    couple: "NOELLE & THEO",
    location: "Hudson Conservatory · NY",
    format: "16mm + Digital Cinema",
    duration: "03:54",
    posterSrc:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",
    directorNote:
      "Raindrops along glasshouse ironwork paired with handheld Super-8 portraits and vinyl cellar reception audio.",
    sequenceFrames: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "reel-studio-anthem",
    num: "04",
    couple: "EVERMORE ANTHEM",
    location: "Italy · France · New York",
    format: "2026 Studio Showreel",
    duration: "02:45",
    posterSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=85",
    directorNote:
      "Selected highlights from our 2025–2026 Super-8 and 16mm wedding commissions across Europe and the Hudson Valley.",
    sequenceFrames: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=85",
    ],
  },
];

const EVERMORE_SERVICES = [
  {
    title: "Photography",
    description:
      "From getting ready to the final dance, we document the people, details, emotions, and in-between moments without turning your day into a photoshoot.",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    alt: "Soft veiled bridal portrait captured on 35mm film",
  },
  {
    title: "Film",
    description:
      "Our wedding films bring your celebration back to life through movement, sound, emotion, and the little moments that might otherwise fade with time.",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    alt: "Joyful wedding recessional down the aisle captured on cinema reel",
  },
  {
    title: "Photo + Film",
    description:
      "Combine timeless photography with cinematic film to preserve both the moments you see and the feelings you remember – from the quietest glance to the loudest celebration.",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    alt: "Couple celebrating first dance under warm twilight",
  },
];

function SafeCinemaImage({
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

export default function TemplateEightShowcase() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [featuredFilmIndex, setFeaturedFilmIndex] = useState(0);
  const [cinemaModalOpen, setCinemaModalOpen] = useState(false);
  const [cinemaPlaying, setCinemaPlaying] = useState(true);
  const [cinemaFrameStep, setCinemaFrameStep] = useState(0);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);
  const [inlineSent, setInlineSent] = useState(false);
  const [inlineForm, setInlineForm] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    details: "",
  });
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    couple: "",
    email: "",
    dateLocation: "",
    collection: "Photo + Film",
    notes: "",
  });

  // Smoothly cycle the background wedding motion placeholder scenes like a film reel
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReelIndex((prev) => (prev + 1) % HERO_FILM_FRAMES.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  // Advance simulated motion frames inside the cinema player modal while playing
  useEffect(() => {
    if (!cinemaModalOpen || !cinemaPlaying) {
      return;
    }
    const filmTimer = window.setInterval(() => {
      setCinemaFrameStep((prev) => prev + 1);
    }, 3200);

    return () => window.clearInterval(filmTimer);
  }, [cinemaModalOpen, cinemaPlaying]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedStory(null);
        setContactOpen(false);
        setAboutModalOpen(false);
        setCinemaModalOpen(false);
      }

      if (selectedStory) {
        const index = WEDDING_STORIES.findIndex(
          (item) => item.id === selectedStory.id
        );
        if (event.key === "ArrowRight" && index >= 0) {
          setSelectedStory(
            WEDDING_STORIES[(index + 1) % WEDDING_STORIES.length]
          );
        } else if (event.key === "ArrowLeft" && index >= 0) {
          setSelectedStory(
            WEDDING_STORIES[
              (index - 1 + WEDDING_STORIES.length) % WEDDING_STORIES.length
            ]
          );
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedStory]);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f3ef] selection:bg-white selection:text-[#0c0c0e] relative">
      {/* Shared Template Switcher Bar */}
      <div className="bg-[#0c0c0e]">
        <Navbar dark />
      </div>

      {/* ================================================================= */}
      {/* 1. HERO: EVERMORE FULL-BLEED MONOCHROME WEDDING FILM PLACEHOLDER  */}
      {/* ================================================================= */}
      <section
        id="evermore-top"
        className="relative w-full h-[calc(100vh-68px)] min-h-[580px] max-h-[960px] overflow-hidden flex flex-col justify-between bg-black"
      >
        {/* Background Video Placeholder Layers (crossfading Ken Burns cinema frames + grain) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
        >
          {HERO_FILM_FRAMES.map((frame, index) => (
            <div
              key={frame.src}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                index === activeReelIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full animate-ken-burns">
                <SafeCinemaImage
                  src={frame.src}
                  fallbackSrc={frame.fallbackSrc}
                  alt={frame.alt}
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center grayscale contrast-125 brightness-[0.68]"
                />
              </div>
            </div>
          ))}

          {/* Analog 35mm / Super-8 cinema vignette & texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 0)",
              backgroundSize: "3px 3px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />
        </div>

        {/* Hero Overlay Header */}
        <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-6 sm:pt-7 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("evermore-top")}
            className="font-evermore-serif uppercase tracking-[0.04em] text-[20px] sm:text-[23px] font-normal text-white hover:opacity-80 transition-opacity cursor-pointer"
          >
            EVERMORE
          </button>

          <nav className="flex items-center gap-5 sm:gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("evermore-work")}
              className="text-[12px] sm:text-[13px] font-normal text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <span>Work</span>
              <sup className="ml-1 text-[9px] text-white/60 tabular-nums">
                01
              </sup>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("evermore-about")}
              className="text-[12px] sm:text-[13px] font-normal text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <span>About</span>
              <sup className="ml-1 text-[9px] text-white/60 tabular-nums">
                02
              </sup>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("evermore-services")}
              className="text-[12px] sm:text-[13px] font-normal text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <span>Services</span>
              <sup className="ml-1 text-[9px] text-white/60 tabular-nums">
                03
              </sup>
            </button>

            <button
              type="button"
              onClick={() => {
                setContactSent(false);
                setContactOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-neutral-200 text-[#111113] px-4 py-1.5 text-[12px] font-medium shadow-sm transition-colors cursor-pointer"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-[#111113]"
              />
              <span>Contact</span>
            </button>
          </nav>
        </header>

        {/* Center Hero Wordmark Lockup */}
        <div className="relative z-20 px-4 text-center my-auto">
          <h1 className="font-evermore-serif font-normal uppercase text-[52px] sm:text-[84px] lg:text-[106px] leading-[0.95] tracking-[0.06em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]">
            EVERMORE
          </h1>
          <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-white/85">
            WEDDING PHOTO &amp; FILM STUDIO
          </p>
        </div>

        {/* Bottom Center Scroll Prompt */}
        <div className="relative z-20 pb-7 sm:pb-8 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection("evermore-about")}
            className="group flex flex-col items-center gap-1.5 text-white/85 hover:text-white transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-2 text-white/75 group-hover:translate-y-0.5 transition-transform"
              viewBox="0 0 28 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M2 2.5C8 4.8 20 4.8 26 2.5" />
            </svg>
            <span className="text-[11px] font-medium tracking-[0.03em]">
              Scroll to explore
            </span>
          </button>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. ABOUT (01): EDITORIAL MANIFESTO, BOUQUET PORTRAIT & STATS      */}
      {/* ================================================================= */}
      <section
        id="evermore-about"
        className="scroll-mt-6 w-full bg-black text-white py-14 sm:py-20 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          {/* Top Index Bar: • About ... (01) */}
          <div className="flex items-center justify-between text-[11px] font-medium">
            <span className="inline-flex items-center gap-2 text-white/90 tracking-[0.02em]">
              <span
                aria-hidden="true"
                className="w-1 h-1 rounded-full bg-white"
              />
              <span>About</span>
            </span>
            <span className="font-mono text-white/40">(01)</span>
          </div>

          {/* Asymmetric Editorial Split: Left Bouquet Image + Right Indented Copy */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/4.35] w-full max-w-[330px] overflow-hidden bg-neutral-900">
                <SafeCinemaImage
                  src={EVERMORE_ABOUT_IMAGE.src}
                  fallbackSrc={EVERMORE_ABOUT_IMAGE.fallbackSrc}
                  alt={EVERMORE_ABOUT_IMAGE.alt}
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-center contrast-[1.04] saturate-[0.78] brightness-[0.9]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 0)",
                    backgroundSize: "3px 3px",
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-8 lg:pl-6">
              <p className="indent-16 sm:indent-24 lg:indent-36 text-[22px] sm:text-[29px] lg:text-[34px] font-normal leading-[1.2] tracking-[-0.02em] text-[#f5f5f5]">
                Evermore is a wedding photo and film studio capturing
                celebrations as they naturally unfold. From quiet glances to
                loud celebrations, we create photographs and films that preserve
                not just how your day looked, but how it fel
                <span className="text-white/45">t.</span>
              </p>

              <button
                type="button"
                onClick={() => setAboutModalOpen(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#242427] hover:bg-[#323236] border border-white/10 text-white px-5 py-2 text-[11px] font-medium transition-colors cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>Learn more</span>
              </button>
            </div>
          </div>

          {/* 4-Column Statistics Row with Left Vertical Hairlines */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {EVERMORE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-white/20 pl-4 sm:pl-5 py-0.5"
              >
                <div className="text-[28px] sm:text-[32px] font-medium tracking-[-0.02em] leading-none text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2.5 text-[11px] sm:text-[11.5px] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. WORK (02): SELECTED WEDDING STORIES & FILM STILLS              */}
      {/* ================================================================= */}
      <section
        id="evermore-work"
        className="scroll-mt-6 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t border-white/10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-white/50">
              02 · Selected Stories
            </p>
            <h2 className="mt-2 font-evermore-serif uppercase text-3xl sm:text-5xl font-normal tracking-[0.03em] text-white">
              Motion &amp; Stills
            </h2>
          </div>

          <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-white/60">
            Documentary wedding photography and Super-8 cinema filmed in monochrome
            and warm natural grain across Italy, France, and New York.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WEDDING_STORIES.map((story) => (
            <article key={story.id} className="group">
              <button
                type="button"
                onClick={() => setSelectedStory(story)}
                className="block w-full text-left cursor-pointer focus:outline-none"
              >
                <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-neutral-900 border border-white/10">
                  <SafeCinemaImage
                    src={story.src}
                    fallbackSrc={story.fallbackSrc}
                    alt={`${story.couple} wedding film frame`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale contrast-115 brightness-90 transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/75 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 text-[10px] font-mono text-white/85">
                    {story.duration}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-evermore-serif text-xl sm:text-2xl tracking-[0.04em] text-white group-hover:text-white/80 transition-colors">
                    {story.couple}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                    {story.format}
                  </span>
                </div>
                <p className="mt-1 text-xs text-white/55">{story.location}</p>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. HOW WE WORK (03): KEEPING THINGS NATURAL                       */}
      {/* ================================================================= */}
      <section
        id="evermore-how"
        className="scroll-mt-6 w-full bg-black text-white py-20 sm:py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/90 tracking-[0.02em]">
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>How we work</span>
              </span>
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-evermore-serif font-normal uppercase text-[32px] sm:text-[42px] lg:text-[46px] leading-[0.95] tracking-[0.02em] text-white">
                KEEPING THINGS
                <br />
                NATURAL
              </h2>
            </div>

            <div className="lg:col-span-2 lg:text-right">
              <span className="text-[11px] font-mono text-white/40">(03)</span>
            </div>
          </div>

          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {HOW_WE_WORK_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-[#0d0d0f] border border-white/15 p-5 sm:p-6 min-h-[240px] flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono text-white/40">
                  {pillar.num}
                </span>

                <div>
                  <h3 className="text-[17px] sm:text-[18px] font-medium tracking-[-0.01em] text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-[11.5px] leading-[1.52] text-white/55">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="relative min-h-[240px] overflow-hidden bg-neutral-900">
              <SafeCinemaImage
                src={HOW_WE_WORK_IMAGE.src}
                fallbackSrc={HOW_WE_WORK_IMAGE.fallbackSrc}
                alt={HOW_WE_WORK_IMAGE.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover contrast-[1.04] saturate-[0.75] brightness-[0.88]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 0)",
                  backgroundSize: "3px 3px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. OUR SERVICES (04): FROM STILL TO MOTION.                       */}
      {/* ================================================================= */}
      <section
        id="evermore-services"
        className="scroll-mt-6 w-full bg-black text-white py-20 sm:py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/90 tracking-[0.02em]">
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>Our services</span>
              </span>
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-evermore-serif font-normal uppercase text-[32px] sm:text-[42px] lg:text-[46px] leading-[0.95] tracking-[0.02em] text-white">
                FROM STILL
                <br />
                TO MOTION.
              </h2>
            </div>

            <div className="lg:col-span-2 lg:text-right">
              <span className="text-[11px] font-mono text-white/40">(04)</span>
            </div>
          </div>

          <div className="mt-12 sm:mt-14 max-w-4xl mx-auto space-y-5">
            {EVERMORE_SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-[#09090b] border border-white/15 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-stretch"
              >
                <div className="sm:col-span-4 relative aspect-[4/3.6] w-full overflow-hidden bg-neutral-900">
                  <SafeCinemaImage
                    src={service.src}
                    fallbackSrc={service.fallbackSrc}
                    alt={service.alt}
                    sizes="(max-width: 640px) 100vw, 260px"
                    className="object-cover contrast-[1.05] saturate-[0.72] brightness-[0.88]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.16] mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 0)",
                      backgroundSize: "3px 3px",
                    }}
                  />
                </div>

                <div className="sm:col-span-3 flex items-start pt-1">
                  <h3 className="text-[15px] sm:text-[16px] font-medium tracking-[-0.01em] text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="sm:col-span-5 flex flex-col justify-between pt-1">
                  <p className="text-[11.5px] sm:text-[12px] leading-[1.55] text-white/60">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => {
                        setContactForm((prev) => ({
                          ...prev,
                          collection: service.title,
                        }));
                        setContactSent(false);
                        setContactOpen(true);
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-neutral-200 text-[#111113] px-4 py-1.5 text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1 h-1 rounded-full bg-[#111113]"
                      />
                      <span>Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 6. WATCH FILM (05): FULL-BLEED CINEMA SHOWREEL & FILM SWITCHER     */}
      {/* ================================================================= */}
      {(() => {
        const activeFilm = FILM_SHOWREELS[featuredFilmIndex];
        return (
          <section
            id="evermore-films"
            className="scroll-mt-6 relative w-full h-[540px] sm:h-[640px] lg:h-[720px] overflow-hidden bg-black border-t border-white/10 flex flex-col justify-between"
          >
            {/* Full-bleed Moody Film Still Background + Slow Camera Drift */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden pointer-events-none select-none"
            >
              <div
                key={activeFilm.id}
                className="relative w-full h-full animate-ken-burns"
              >
                <SafeCinemaImage
                  src={activeFilm.posterSrc}
                  fallbackSrc={activeFilm.fallbackSrc}
                  alt={`${activeFilm.couple} wedding cinema film`}
                  sizes="100vw"
                  className="object-cover object-top contrast-[1.06] saturate-[0.55] brightness-[0.62]"
                />
              </div>

              <div
                className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.24) 1px, transparent 0)",
                  backgroundSize: "3px 3px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/75" />
            </div>

            {/* Top Index Row */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-8 flex items-center justify-between text-[11px] font-medium">
              <span className="inline-flex items-center gap-2 text-white/85 tracking-[0.02em]">
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>Motion Reels</span>
              </span>
              <span className="font-mono text-white/45">
                {activeFilm.format}
              </span>
            </div>

            {/* Center Minimal Frosted Play Button + "Watch film" Label */}
            <div className="relative z-20 my-auto flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setCinemaFrameStep(0);
                  setCinemaPlaying(true);
                  setCinemaModalOpen(true);
                }}
                aria-label={`Watch ${activeFilm.couple} film reel`}
                className="group flex flex-col items-center cursor-pointer focus:outline-none"
              >
                <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/15 group-hover:bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 text-white ml-0.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.25 2.75a.75.75 0 0 1 1.13-.65l8.25 4.75a.75.75 0 0 1 0 1.3l-8.25 4.75a.75.75 0 0 1-1.13-.65v-9.5z" />
                  </svg>
                </span>

                <span className="mt-2.5 text-[11px] font-medium tracking-[0.04em] text-white/90 group-hover:text-white transition-colors">
                  Watch film
                </span>
              </button>
            </div>

            {/* Subtle Bottom Film Switcher Rail */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-7 sm:pb-9">
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-5">
                  {FILM_SHOWREELS.map((reel, index) => {
                    const isActive = index === featuredFilmIndex;
                    return (
                      <button
                        key={reel.id}
                        type="button"
                        onClick={() => setFeaturedFilmIndex(index)}
                        className={`text-left transition-colors cursor-pointer pb-1 border-b ${
                          isActive
                            ? "border-white text-white"
                            : "border-transparent text-white/45 hover:text-white/80"
                        }`}
                      >
                        <span className="text-[10px] font-mono mr-1.5 opacity-70">
                          {reel.num}
                        </span>
                        <span className="font-evermore-serif uppercase tracking-[0.06em] text-xs sm:text-sm">
                          {reel.couple}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-white/60">
                  {activeFilm.location} · {activeFilm.duration}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ================================================================= */}
      {/* 7. LET'S TALK (05): TELL US ABOUT YOUR DAY + EVERMORE FOOTER      */}
      {/* ================================================================= */}
      <footer
        id="evermore-contact"
        className="scroll-mt-6 w-full bg-black text-white pt-20 sm:pt-28 pb-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          {/* Top Index & Heading Row: • Lets talk ... TELL US ABOUT YOUR DAY. ... (05) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/90 tracking-[0.02em]">
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>Lets talk</span>
              </span>
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-evermore-serif font-normal uppercase text-[32px] sm:text-[42px] lg:text-[46px] leading-[0.95] tracking-[0.02em] text-white">
                TELL US ABOUT
                <br />
                YOUR DAY.
              </h2>
            </div>

            <div className="lg:col-span-2 lg:text-right">
              <span className="text-[11px] font-mono text-white/40">(05)</span>
            </div>
          </div>

          {/* Two Outlined Direct Info & Inquiry Form Panels */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Direct Contact Panel */}
            <div className="lg:col-span-4 bg-[#070708] border border-white/15 p-6 sm:p-8 flex flex-col justify-between min-h-[410px]">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-normal leading-[1.2] tracking-[-0.01em] text-white">
                  Prefer a
                  <br />
                  quick response?
                </h3>
                <p className="mt-3 max-w-[230px] text-[11.5px] leading-[1.52] text-white/50">
                  Here are a few simple ways to reach us and get the
                  conversation started.
                </p>
              </div>

              <div className="mt-12 space-y-5 text-[11.5px]">
                <div>
                  <div className="text-[10px] text-white/45 mb-1">Email</div>
                  <a
                    href="mailto:hello@evermore.com"
                    className="text-white font-medium hover:opacity-75 transition-opacity"
                  >
                    hello@evermore.com
                  </a>
                </div>

                <div>
                  <div className="text-[10px] text-white/45 mb-1">
                    Phone number
                  </div>
                  <a
                    href="tel:+14155550186"
                    className="text-white font-medium hover:opacity-75 transition-opacity"
                  >
                    +1 415 555 0186
                  </a>
                </div>

                <div>
                  <div className="text-[10px] text-white/45 mb-1">Based in</div>
                  <p className="text-white font-medium leading-[1.45] max-w-[225px]">
                    14 Mercer Street SoHo, New York, NY 10013 United States
                  </p>
                </div>
              </div>
            </div>

            {/* Right Clean Underline Form Panel */}
            <div className="lg:col-span-8 bg-[#070708] border border-white/15 p-6 sm:p-8 flex flex-col justify-center">
              {inlineSent ? (
                <div className="py-16 text-center space-y-3">
                  <p className="font-evermore-serif uppercase text-3xl tracking-[0.04em] text-white">
                    Inquiry Received
                  </p>
                  <p className="text-xs text-white/60 max-w-md mx-auto">
                    Thank you, {inlineForm.name || "friend"}. Our studio team in
                    SoHo will respond within 24 hours with date availability.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInlineSent(false);
                      setInlineForm({
                        name: "",
                        email: "",
                        date: "",
                        location: "",
                        details: "",
                      });
                    }}
                    className="mt-4 bg-white hover:bg-neutral-200 text-[#0c0c0e] px-6 py-2.5 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setInlineSent(true);
                  }}
                  className="space-y-5"
                >
                  <label className="block">
                    <span className="block text-[10.5px] font-medium text-white/85 mb-1">
                      Name
                    </span>
                    <input
                      type="text"
                      required
                      value={inlineForm.name}
                      onChange={(e) =>
                        setInlineForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Jane Smith"
                      className="w-full bg-transparent border-b border-white/15 focus:border-white py-2 text-xs text-white placeholder:text-white/35 focus:outline-none transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-[10.5px] font-medium text-white/85 mb-1">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      value={inlineForm.email}
                      onChange={(e) =>
                        setInlineForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="jane@framer.com"
                      className="w-full bg-transparent border-b border-white/15 focus:border-white py-2 text-xs text-white placeholder:text-white/35 focus:outline-none transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-[10.5px] font-medium text-white/85 mb-1">
                      Date
                    </span>
                    <input
                      type="text"
                      value={inlineForm.date}
                      onChange={(e) =>
                        setInlineForm((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      placeholder="mm/dd/yyyy"
                      className="w-full bg-transparent border-b border-white/15 focus:border-white py-2 text-xs text-white placeholder:text-white/35 focus:outline-none transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-[10.5px] font-medium text-white/85 mb-1">
                      location
                    </span>
                    <input
                      type="text"
                      required
                      value={inlineForm.location}
                      onChange={(e) =>
                        setInlineForm((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                      placeholder="Where are you celebrating?"
                      className="w-full bg-transparent border-b border-white/15 focus:border-white py-2 text-xs text-white placeholder:text-white/35 focus:outline-none transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-[10.5px] font-medium text-white/85 mb-1">
                      Tell us more
                    </span>
                    <textarea
                      rows={3}
                      value={inlineForm.details}
                      onChange={(e) =>
                        setInlineForm((prev) => ({
                          ...prev,
                          details: e.target.value,
                        }))
                      }
                      placeholder="A little about your plans..."
                      className="w-full bg-transparent border-b border-white/15 focus:border-white py-2 text-xs text-white placeholder:text-white/35 focus:outline-none transition-colors resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full bg-white hover:bg-neutral-200 text-[#0c0c0e] py-3 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Send inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 4-Column Minimal Footer Directory */}
          <div className="mt-20 sm:mt-24 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="col-span-2 lg:col-span-5">
              <div className="font-evermore-serif uppercase tracking-[0.04em] text-lg text-white">
                EVERMORE
              </div>
              <p className="mt-1.5 text-[11px] text-white/45">
                Wedding Photo &amp; Film Studio.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10.5px] font-medium text-white/45">
                Explore
              </div>
              <ul className="mt-3.5 space-y-2 text-[11.5px] text-white/85">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("evermore-top")}
                    className="hover:text-white/60 transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("evermore-about")}
                    className="hover:text-white/60 transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("evermore-work")}
                    className="hover:text-white/60 transition-colors cursor-pointer"
                  >
                    Works
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("evermore-services")}
                    className="hover:text-white/60 transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("evermore-contact")}
                    className="hover:text-white/60 transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10.5px] font-medium text-white/45">
                Legal
              </div>
              <ul className="mt-3.5 space-y-2 text-[11.5px] text-white/85">
                <li>
                  <a
                    href="#evermore-contact"
                    className="hover:text-white/60 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#evermore-contact"
                    className="hover:text-white/60 transition-colors"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#evermore-contact"
                    className="hover:text-white/60 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[10.5px] font-medium text-white/45">
                Connect
              </div>
              <ul className="mt-3.5 space-y-2 text-[11.5px] text-white/85">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/60 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/60 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/60 transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Meta Row */}
          <div className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] text-white/45">
            <span>© 2026 Evermore. All rights reserved.</span>
            <span>Evermore Studio · 14 Mercer St, SoHo NY</span>
          </div>

          {/* Massive Viewfinder-Framed Fading EVERMORE Wordmark */}
          <div
            aria-hidden="true"
            className="relative mt-8 sm:mt-10 py-3 sm:py-5 px-3 sm:px-6 overflow-hidden select-none"
          >
            {/* Viewfinder 4 Corner Brackets */}
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/60" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/60" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/60" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/60" />

            <div className="text-center font-evermore-serif uppercase font-normal text-[15vw] sm:text-[13.5vw] lg:text-[148px] leading-[0.82] tracking-[0.06em] bg-gradient-to-b from-white/90 via-white/35 to-white/5 bg-clip-text text-transparent">
              EVERMORE
            </div>
          </div>
        </div>
      </footer>

      <FramerBadge />

      {/* ================================================================= */}
      {/* CINEMA SHOWREEL PLAYER MODAL                                      */}
      {/* ================================================================= */}
      {cinemaModalOpen && (() => {
        const currentFilm = FILM_SHOWREELS[featuredFilmIndex];
        const frameIdx = cinemaFrameStep % currentFilm.sequenceFrames.length;
        return (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${currentFilm.couple} wedding film player`}
            onClick={() => setCinemaModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl bg-[#0e0e11] text-white rounded-xl overflow-hidden border border-white/15 shadow-2xl"
            >
              {/* Letterboxed 16:9 Cinema Frame with Live Multi-Scene Playback */}
              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                {currentFilm.sequenceFrames.map((src, idx) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                      idx === frameIdx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`relative w-full h-full ${
                        cinemaPlaying ? "animate-ken-burns" : ""
                      }`}
                    >
                      <SafeCinemaImage
                        src={src}
                        fallbackSrc={currentFilm.fallbackSrc}
                        alt={`${currentFilm.couple} scene ${idx + 1}`}
                        sizes="(max-width: 1024px) 100vw, 900px"
                        className="object-cover object-top contrast-[1.06] saturate-[0.65] brightness-[0.82]"
                      />
                    </div>
                  </div>
                ))}

                {/* Subtle Top Film Stock Badge + Close */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-white/80">
                  <span className="rounded-full bg-black/60 backdrop-blur-sm border border-white/15 px-3 py-1">
                    {currentFilm.format} · 24 FPS
                  </span>
                  <button
                    type="button"
                    onClick={() => setCinemaModalOpen(false)}
                    className="rounded-full bg-black/60 hover:bg-white hover:text-[#111113] backdrop-blur-sm border border-white/20 px-3 py-1 transition-colors cursor-pointer"
                  >
                    Close Reel
                  </button>
                </div>

                {/* Bottom Timeline Control Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCinemaPlaying((prev) => !prev)}
                      aria-label={cinemaPlaying ? "Pause reel" : "Play reel"}
                      className="w-8 h-8 rounded-full bg-white text-[#111113] flex items-center justify-center shrink-0 hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      {cinemaPlaying ? (
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                        >
                          <rect x="2.5" y="2" width="2.2" height="8" />
                          <rect x="7.3" y="2" width="2.2" height="8" />
                        </svg>
                      ) : (
                        <svg
                          className="w-3 h-3 ml-0.5"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                        >
                          <path d="M3 2l7 4-7 4V2z" />
                        </svg>
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="grid grid-cols-3 gap-1.5">
                        {currentFilm.sequenceFrames.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            aria-label={`Jump to scene ${idx + 1}`}
                            onClick={() => setCinemaFrameStep(idx)}
                            className={`h-1 rounded-full transition-colors cursor-pointer ${
                              idx <= frameIdx ? "bg-white" : "bg-white/25"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <span className="text-[10.5px] font-mono text-white/75 tabular-nums">
                      0{frameIdx + 1}:12 / {currentFilm.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Film Synopsis + Reel Switcher Footer */}
              <div className="p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 border-t border-white/10">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/50">
                    {currentFilm.location}
                  </div>
                  <h3 className="mt-1 font-evermore-serif text-2xl sm:text-3xl tracking-[0.04em]">
                    {currentFilm.couple}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-xs text-white/65 leading-relaxed">
                    {currentFilm.directorNote}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setCinemaModalOpen(false);
                      setContactForm((prev) => ({
                        ...prev,
                        collection: "Film",
                      }));
                      setContactSent(false);
                      setContactOpen(true);
                    }}
                    className="rounded-full bg-white hover:bg-neutral-200 text-[#111113] px-4 py-2 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Request Full Film
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ================================================================= */}
      {/* STUDIO MANIFESTO / ABOUT LEARN MORE MODAL                         */}
      {/* ================================================================= */}
      {aboutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About Evermore Studio"
          onClick={() => setAboutModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl bg-[#141417] text-white rounded-2xl p-6 sm:p-9 border border-white/15 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/80">
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>About Evermore · (01)</span>
              </span>
              <button
                type="button"
                onClick={() => setAboutModalOpen(false)}
                className="text-xs text-white/60 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>

            <h3 className="mt-5 font-evermore-serif uppercase text-3xl tracking-[0.04em] text-white">
              Quiet observation, held in motion.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Founded eight years ago between New York and Northern Italy,
              Evermore documents fewer than twenty celebrations each season so
              every couple receives hand-sequenced 35mm contact sheets, archival
              linen prints, and Super-8 cinema reels scored to authentic room
              audio.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-5">
              {EVERMORE_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-medium text-white">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[10px] text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setAboutModalOpen(false);
                  setContactSent(false);
                  setContactOpen(true);
                }}
                className="rounded-full bg-white hover:bg-neutral-200 text-[#111113] px-5 py-2 text-xs font-medium cursor-pointer transition-colors"
              >
                Check 2026–27 Dates
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* WEDDING FILM STILL LIGHTBOX MODAL                                 */}
      {/* ================================================================= */}
      {selectedStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedStory.couple}
          onClick={() => setSelectedStory(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-3xl bg-[#141417] text-white rounded-xl overflow-hidden border border-white/15 shadow-2xl"
          >
            <div className="relative aspect-[16/9] w-full bg-black">
              <SafeCinemaImage
                src={selectedStory.src}
                fallbackSrc={selectedStory.fallbackSrc}
                alt={selectedStory.couple}
                sizes="(max-width: 768px) 100vw, 820px"
                className="object-cover grayscale contrast-115"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {selectedStory.location} · {selectedStory.format}
                </div>
                <h3 className="mt-1 font-evermore-serif text-2xl sm:text-3xl tracking-[0.04em]">
                  {selectedStory.couple}
                </h3>
                <p className="mt-2 max-w-lg text-xs sm:text-sm text-white/70 leading-relaxed">
                  {selectedStory.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="shrink-0 w-fit rounded-full bg-white text-[#111113] px-5 py-2 text-xs font-medium cursor-pointer"
              >
                Close Reel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* COMMISSION / CONTACT MODAL                                        */}
      {/* ================================================================= */}
      {contactOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Inquire with Evermore Studio"
          onClick={() => setContactOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md bg-[#141417] text-white rounded-2xl p-6 sm:p-8 border border-white/15 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-evermore-serif uppercase tracking-[0.1em] text-lg">
                EVERMORE — INQUIRE
              </span>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="text-xs text-white/60 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>

            {contactSent ? (
              <div className="py-10 text-center space-y-3">
                <p className="font-evermore-serif text-2xl">
                  Thank you, {contactForm.couple || "friends"}.
                </p>
                <p className="text-xs text-white/65">
                  Our producers will respond within 24 hours with full collection
                  availability and sample reels.
                </p>
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  className="mt-3 rounded-full bg-white text-[#111113] px-5 py-2 text-xs font-medium cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setContactSent(true);
                }}
                className="mt-5 space-y-4 text-xs"
              >
                <label className="block">
                  <span className="block text-white/60 mb-1">Names</span>
                  <input
                    type="text"
                    required
                    value={contactForm.couple}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        couple: e.target.value,
                      }))
                    }
                    placeholder="Claire & Julian"
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3.5 py-2 text-white placeholder:text-white/35 focus:outline-none focus:border-white"
                  />
                </label>

                <label className="block">
                  <span className="block text-white/60 mb-1">Email</span>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="claire@example.com"
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3.5 py-2 text-white placeholder:text-white/35 focus:outline-none focus:border-white"
                  />
                </label>

                <label className="block">
                  <span className="block text-white/60 mb-1">
                    Wedding Date &amp; Location
                  </span>
                  <input
                    type="text"
                    required
                    value={contactForm.dateLocation}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        dateLocation: e.target.value,
                      }))
                    }
                    placeholder="September 2026 · Lake Como"
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3.5 py-2 text-white placeholder:text-white/35 focus:outline-none focus:border-white"
                  />
                </label>

                <label className="block">
                  <span className="block text-white/60 mb-1">Notes</span>
                  <textarea
                    rows={3}
                    value={contactForm.notes}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }
                    placeholder="Tell us about your celebration..."
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3.5 py-2 text-white placeholder:text-white/35 focus:outline-none focus:border-white"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white hover:bg-neutral-200 text-[#111113] py-2.5 text-xs font-medium cursor-pointer transition-colors"
                >
                  Send Commission Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

