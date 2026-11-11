"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface VideoReelItem {
  id: string;
  label: string;
  videoSrc: string;
  poster: string;
  fallbackPoster: string;
}

const VIDEO_REELS: VideoReelItem[] = [
  {
    id: "reel-1",
    label: "REEL 01 · NY PORTRAIT",
    videoSrc:
      "https://videos.pexels.com/video-files/4494789/4494789-hd_1920_1080_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=85",
    fallbackPoster:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "reel-2",
    label: "REEL 02 · MONOCHROME STUDY",
    videoSrc:
      "https://videos.pexels.com/video-files/5496775/5496775-uhd_2560_1440_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1800&q=85",
    fallbackPoster:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "reel-3",
    label: "REEL 03 · DAYLIGHT SERIES",
    videoSrc:
      "https://videos.pexels.com/video-files/6706926/6706926-hd_1920_1080_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1800&q=85",
    fallbackPoster:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=85",
  },
];

interface FinneganFrame {
  id: string;
  frameNumber: string;
  title: string;
  category: "Street" | "Portrait" | "Editorial";
  location: string;
  year: string;
  src: string;
  fallbackSrc: string;
  isColor?: boolean;
}

interface LensProjectItem {
  id: string;
  projectLabel: string;
  badge: string;
  titleLineOne: string;
  titleLineTwo?: string;
  description: string;
  category: "Street" | "Portrait" | "Editorial";
  location: string;
  year: string;
  src: string;
  fallbackSrc: string;
}

const LENS_PROJECTS: LensProjectItem[] = [
  {
    id: "art-of-togetherness",
    projectLabel: "PROJECT 01",
    badge: "WEDDING PHOTOGRAPHY",
    titleLineOne: "THE ART OF",
    titleLineTwo: "TOGETHERNESS",
    description:
      "Honest emotions, intimate details, and the beauty of two lives becoming one.",
    category: "Editorial",
    location: "Hudson Valley, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "in-her-own-light",
    projectLabel: "PROJECT 02",
    badge: "PORTRAIT PHOTOGRAPHY",
    titleLineOne: "IN HER OWN LIGHT",
    description:
      "Expressive portraits celebrating individuality, confidence, and quiet beauty.",
    category: "Portrait",
    location: "SoHo, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "the-modern-muse",
    projectLabel: "PROJECT 03",
    badge: "FASHION & EDITORIAL",
    titleLineOne: "THE MODERN MUSE",
    description:
      "Artful imagery shaped by movement, texture, light, and contemporary style.",
    category: "Editorial",
    location: "Chelsea, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "everyday-poetry",
    projectLabel: "PROJECT 04",
    badge: "LIFESTYLE PHOTOGRAPHY",
    titleLineOne: "EVERYDAY POETRY",
    description:
      "The little moments that often mean the most, captured as they naturally unfold.",
    category: "Street",
    location: "Copenhagen / NY",
    year: "2025",
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
  },
];

const FINNEGAN_FRAMES: FinneganFrame[] = [
  {
    id: "hudson-dawn",
    frameNumber: "01",
    title: "Hudson Pier at 6:10 AM",
    category: "Street",
    location: "West Village, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "canal-street-rain",
    frameNumber: "02",
    title: "Canal Street After Rain",
    category: "Street",
    location: "Lower Manhattan, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "soho-casting",
    frameNumber: "03",
    title: "Mercer Loft Casting",
    category: "Portrait",
    location: "SoHo, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "dumbo-overcast",
    frameNumber: "04",
    title: "DUMBO Overcast Profile",
    category: "Editorial",
    location: "Brooklyn, NY",
    year: "2025",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chelsea-monolith",
    frameNumber: "05",
    title: "Chelsea Gallery Steps",
    category: "Editorial",
    location: "Chelsea, NY",
    year: "2025",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "greenpoint-window",
    frameNumber: "06",
    title: "Greenpoint Window Light",
    category: "Portrait",
    location: "Greenpoint, Brooklyn",
    year: "2025",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
];

interface ClientReviewItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
  fallbackAvatarSrc: string;
  warmTone: boolean;
}

const CLIENT_REVIEWS: ClientReviewItem[] = [
  {
    id: "adrian-holt",
    name: "Adrian Holt",
    role: "FOUNDER, COPPER & CLAY",
    quote:
      "Thank you, our product images have never looked better! They have a keen eye for detail and a talent for capturing our products in the best possible light. We couldn't be happier with the results!",
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85",
    fallbackAvatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85",
    warmTone: true,
  },
  {
    id: "gavin-moreau",
    name: "Gavin Moreau",
    role: "CREATIVE DIRECTOR, NORTHLINE APPAREL",
    quote:
      "He provided exceptional product photography services for our latest collection. Their attention to detail and creative approach resulted in images that perfectly showcased our products. Highly recommended!",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85",
    fallbackAvatarSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=240&q=85",
    warmTone: false,
  },
  {
    id: "malik-owens",
    name: "Malik Owens",
    role: "BRAND LEAD, FERRO COFFEE",
    quote:
      "It was a fantastic experience! They brought a level of professionalism and creativity to our product photography that truly set our brand apart. We look forward to working with them again in the future!",
    avatarSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=240&q=85",
    fallbackAvatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85",
    warmTone: true,
  },
  {
    id: "marcus-tate",
    name: "Marcus Tate",
    role: "MARKETING MANAGER, BLISSED CO.",
    quote:
      "We are thrilled with the product photography provided by Finnegan. They captured our products beautifully, highlighting their unique features and enhancing their appeal.",
    avatarSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=240&q=85",
    fallbackAvatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85",
    warmTone: true,
  },
];

function SafeGrayImage({
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

export default function TemplateFourShowcase() {
  const [reelIndex, setReelIndex] = useState(0);
  const [failedReels, setFailedReels] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Street" | "Portrait" | "Editorial"
  >("All");
  const [selectedFrame, setSelectedFrame] = useState<FinneganFrame | null>(
    null
  );

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeReel = VIDEO_REELS[reelIndex];

  const handleTogglePlayback = () => {
    const vid = videoRef.current;
    if (!vid) {
      setIsPlaying((prev) => !prev);
      return;
    }
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const handleCycleReel = () => {
    setVideoReady(false);
    setReelIndex((prev) => (prev + 1) % VIDEO_REELS.length);
    setIsPlaying(true);
  };

  const handleVideoError = () => {
    setVideoReady(false);
    if (failedReels < VIDEO_REELS.length - 1) {
      setFailedReels((prev) => prev + 1);
      setReelIndex((prev) => (prev + 1) % VIDEO_REELS.length);
    }
  };

  const visibleFrames =
    activeCategory === "All"
      ? FINNEGAN_FRAMES
      : FINNEGAN_FRAMES.filter((f) => f.category === activeCategory);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#f4f4f2] text-neutral-900 relative">
      {/* Main Marketplace Navigation */}
      <Navbar />

      {/* Continuous Full-Bleed B&W Video Canvas (Hero + Translucent Stats Grid) */}
      <div className="relative isolate w-full bg-[#1a1a1c] [overflow-x:clip]">
        {/* Sticky Monochrome Background Viewport */}
        <div
          aria-hidden="true"
          className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none select-none"
        >
          {/* Background Motion Layer 1: Monochrome Portrait Backdrop (Instant + Fallback Motion) */}
          <div className="absolute inset-0">
            <div
              className={`relative w-full h-full animate-kenburns ${
                isPlaying ? "" : "[animation-play-state:paused]"
              }`}
            >
              <SafeGrayImage
                key={activeReel.poster}
                src={activeReel.poster}
                fallbackSrc={activeReel.fallbackPoster}
                alt="Black and white portrait motion backdrop"
                priority
                sizes="100vw"
                className="object-cover object-top grayscale contrast-125 brightness-105"
              />
            </div>
          </div>

          {/* Background Motion Layer 2: Live Looping B&W HTML5 Video */}
          <video
            ref={videoRef}
            key={activeReel.id}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={activeReel.poster}
            onCanPlay={() => setVideoReady(true)}
            onError={handleVideoError}
            className={`absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.18] brightness-105 transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={activeReel.videoSrc} type="video/mp4" />
          </video>

          {/* Atmospheric Overcast Sky Top & Deep Bottom Vignette Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#e4e5e7]/55 via-black/15 to-black/75" />
        </div>

        {/* Scrollable Foreground Pulling Up Over the Sticky B&W Video */}
        <div className="-mt-[100vh]">
          {/* Section 1: Hero Viewport */}
          <section
            aria-label="Finnegan Monroe full-screen monochrome video hero"
            className="min-h-[calc(100vh-76px)] flex flex-col justify-between px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 pb-7"
          >
            {/* Hero Internal Header: Finnegan Wordmark + Minimal 2-Bar Toggle */}
            <div className="relative flex items-center justify-between gap-4">
              <a
                href="#top"
                className="text-[19px] sm:text-[21px] font-medium tracking-[-0.03em] text-neutral-950 hover:opacity-75 transition-opacity"
              >
                Finnegan
              </a>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open Finnegan studio menu"
                className="p-2 -mr-2 flex flex-col items-end justify-center gap-[6px] cursor-pointer group"
              >
                <span className="w-7 h-[1.5px] bg-neutral-950 group-hover:w-8 transition-all duration-200" />
                <span className="w-7 h-[1.5px] bg-neutral-950 group-hover:w-5 transition-all duration-200" />
              </button>
            </div>

            {/* Middle-Right Bio Intro & Sharp-Bordered GET TEMPLATE Button */}
            <div className="relative my-auto pt-8 sm:pt-10 pb-6 flex justify-end">
              <div className="max-w-[305px] text-right flex flex-col items-end">
                <p className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.04em] leading-[1.45] text-neutral-950">
                  HI, FINNEGAN MONROE HERE. I&apos;M A FREELANCE PHOTOGRAPHER
                  IN NY AND THE SHUTTERBUG CAPTURING LIFE&apos;S MAGICAL
                  MOMENTS ONE CLICK AT A TIME.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setInquirySent(false);
                    setWorkModalOpen(true);
                  }}
                  className="mt-5 inline-flex items-stretch border border-neutral-950/70 bg-white/10 backdrop-blur-[2px] hover:bg-neutral-950 hover:text-white text-neutral-950 transition-colors cursor-pointer group"
                >
                  <span className="px-4 py-2.5 text-[10.5px] font-medium uppercase tracking-[0.1em] border-r border-neutral-950/70 group-hover:border-white/25">
                    GET TEMPLATE
                  </span>
                  <span className="px-3.5 py-2.5 flex items-center justify-center text-xs">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Lower Oversized Mix-Blend Display Headline + Bottom Controls */}
            <div>
              {/* Contrast-Inverting Headline Blending Directly Over Sticky B&W Video */}
              <h1 className="mix-blend-difference text-[#ededef] font-normal tracking-[-0.048em] leading-[0.87] text-[13vw] sm:text-[10.4vw] lg:text-[9.6vw] xl:text-[128px] select-none mb-5 sm:mb-7">
                Capturing Life&apos;s
                <br />
                Best Moments
              </h1>

              {/* Hero Bottom Row */}
              <div className="relative flex flex-wrap items-center justify-between gap-4 pt-1">
                {/* Interactive B&W Reel Playback & Templates Pill (Bottom-Left) */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleTogglePlayback}
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 hover:bg-neutral-950 text-white backdrop-blur-md px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.12em] transition-colors cursor-pointer"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isPlaying
                          ? "bg-emerald-400 animate-pulse"
                          : "bg-neutral-400"
                      }`}
                    />
                    <span>{isPlaying ? "B&W VIDEO · LIVE" : "PAUSED"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCycleReel}
                    title="Switch monochrome video reel"
                    className="inline-flex items-center gap-1 rounded-full bg-white/80 hover:bg-white text-neutral-900 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.1em] transition-colors cursor-pointer"
                  >
                    <span>{`0${reelIndex + 1}/0${VIDEO_REELS.length}`}</span>
                    <span aria-hidden="true">↻</span>
                  </button>

                  <Link
                    href="/templates"
                    className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#6d4aff] hover:bg-[#5c39f2] text-white px-3.5 py-1.5 text-[10.5px] font-medium shadow-md transition-colors"
                  >
                    <span>Similar templates</span>
                    <span aria-hidden="true">^</span>
                  </Link>
                </div>

                {/* Center Scroll Anchor */}
                <a
                  href="#finnegan-stats"
                  className="mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 inline-flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/90 hover:text-white transition-colors"
                >
                  <span aria-hidden="true">↓</span>
                  <span>SCROLL TO EXPLORE</span>
                </a>

                {/* Bottom-Right Work With Me Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    setInquirySent(false);
                    setWorkModalOpen(true);
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/85 hover:text-white transition-colors cursor-pointer mr-36"
                >
                  <span>WORK WITH ME</span>
                </button>
              </div>
            </div>
          </section>

          {/* Section 2: Translucent Frosted 4-Card Staggered Stats Bento Over B&W Video */}
          <section
            id="finnegan-stats"
            aria-label="Photography career metrics"
            className="relative px-4 sm:px-8 lg:px-10 pt-10 sm:pt-16 pb-16 sm:pb-24"
          >
            <div className="max-w-7xl mx-auto space-y-3">
              {/* Row 1: Wider Left (7 cols) + Narrower Right (5 cols) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-7 bg-[#242428]/45 backdrop-blur-md border border-white/20 px-6 sm:px-8 py-5 sm:py-6 flex flex-col justify-between min-h-[155px] sm:min-h-[175px]">
                  <p className="text-[11px] sm:text-[12px] text-white/80 font-normal border-b border-white/15 pb-3">
                    Hours Behind the Lens
                  </p>
                  <div className="pt-5 text-[46px] sm:text-[58px] lg:text-[66px] font-normal tracking-[-0.03em] leading-none text-white tabular-nums">
                    9<span className="text-[#ef6a24]">K+</span>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#242428]/45 backdrop-blur-md border border-white/20 px-6 sm:px-8 py-5 sm:py-6 flex flex-col justify-between min-h-[155px] sm:min-h-[175px]">
                  <p className="text-[11px] sm:text-[12px] text-white/80 font-normal border-b border-white/15 pb-3">
                    Years of Experience
                  </p>
                  <div className="pt-5 text-[46px] sm:text-[58px] lg:text-[66px] font-normal tracking-[-0.03em] leading-none text-white tabular-nums">
                    15<span className="text-[#ef6a24]">+</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Narrower Left (5 cols) + Wider Right (7 cols) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-5 bg-[#242428]/45 backdrop-blur-md border border-white/20 px-6 sm:px-8 py-5 sm:py-6 flex flex-col justify-between min-h-[155px] sm:min-h-[175px]">
                  <p className="text-[11px] sm:text-[12px] text-white/80 font-normal border-b border-white/15 pb-3">
                    Awards and Recognitions
                  </p>
                  <div className="pt-5 text-[46px] sm:text-[58px] lg:text-[66px] font-normal tracking-[-0.03em] leading-none text-white tabular-nums">
                    13<span className="text-[#ef6a24]">+</span>
                  </div>
                </div>

                <div className="md:col-span-7 bg-[#242428]/45 backdrop-blur-md border border-white/20 px-6 sm:px-8 py-5 sm:py-6 flex flex-col justify-between min-h-[155px] sm:min-h-[175px]">
                  <p className="text-[11px] sm:text-[12px] text-white/80 font-normal border-b border-white/15 pb-3">
                    Happy Clients Served
                  </p>
                  <div className="pt-5 text-[46px] sm:text-[58px] lg:text-[66px] font-normal tracking-[-0.03em] leading-none text-white tabular-nums">
                    200<span className="text-[#ef6a24]">+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Pitch-Black Editorial Statement Section ("I am...") */}
      <section
        id="finnegan-about"
        aria-label="About Finnegan Monroe"
        className="w-full bg-black text-white py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-14"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-[64px] sm:text-[82px] lg:text-[96px] font-normal tracking-[-0.045em] leading-[0.95] text-[#ef6a24]">
              I am...
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-12 flex flex-col items-start">
            <p className="indent-14 sm:indent-20 text-[20px] sm:text-[24px] lg:text-[27px] font-normal leading-[1.32] tracking-[-0.02em] text-neutral-100 max-w-xl">
              a passionate photographer dedicated to capturing life&apos;s most
              precious moments. With a keen eye for detail and a{" "}
              <span className="text-[#ef6a24]">love for storytelling</span>, I
              strive to create images that are not just beautiful, but that also
              evoke emotion and tell a compelling story.
            </p>

            <button
              type="button"
              onClick={() => setAboutModalOpen(true)}
              className="mt-9 inline-flex items-stretch border border-white/40 hover:border-white hover:bg-white hover:text-black text-white transition-colors cursor-pointer group"
            >
              <span className="px-5 py-3 text-[10px] sm:text-[10.5px] font-mono font-medium uppercase tracking-[0.14em] border-r border-white/40 group-hover:border-black/25">
                MORE ABOUT ME
              </span>
              <span className="px-4 py-3 flex items-center justify-center text-xs">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Warm Cream Selected Work ("through my LENS.") 4-Project Showcase */}
      <section
        id="finnegan-lens"
        aria-label="Selected work through my lens"
        className="w-full bg-[#f5f3ee] text-[#141312] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-14"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#c8432b] mb-3">
            SELECTED WORK
          </p>

          <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-serif italic text-[32px] sm:text-[40px] lg:text-[44px] font-normal text-[#c8432b] leading-none">
              through my
            </span>
            <span className="font-black uppercase text-[48px] sm:text-[66px] lg:text-[74px] leading-[0.86] tracking-[-0.055em] text-[#141312]">
              LENS.
            </span>
          </h2>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <p className="text-[13px] sm:text-[13.5px] leading-[1.55] text-neutral-600 max-w-[390px]">
              A collection of meaningful moments, beautiful places, and
              authentic stories captured with intention.
            </p>

            <a
              href="#finnegan-gallery"
              onClick={() => setActiveCategory("All")}
              className="inline-flex items-center gap-2 rounded-full border border-[#c8432b] hover:bg-[#c8432b] text-[#c8432b] hover:text-white px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors shrink-0 self-start sm:self-auto"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-current"
                aria-hidden="true"
              />
              <span>EXPLORE ALL PROJECTS</span>
            </a>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LENS_PROJECTS.map((project) => {
              const fullTitle = project.titleLineTwo
                ? `${project.titleLineOne} ${project.titleLineTwo}`
                : project.titleLineOne;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() =>
                    setSelectedFrame({
                      id: project.id,
                      frameNumber: project.projectLabel.replace("PROJECT ", ""),
                      title: fullTitle,
                      category: project.category,
                      location: project.location,
                      year: project.year,
                      src: project.src,
                      fallbackSrc: project.fallbackSrc,
                      isColor: true,
                    })
                  }
                  className="group text-left cursor-pointer focus:outline-none flex flex-col"
                >
                  <div className="relative aspect-[4/4.3] w-full rounded-lg overflow-hidden bg-neutral-200">
                    <SafeGrayImage
                      src={project.src}
                      fallbackSrc={project.fallbackSrc}
                      alt={fullTitle}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[#f8f6f2] px-3 py-1 text-[8.5px] sm:text-[9px] font-bold tracking-[0.12em] uppercase text-[#c8432b] shadow-xs">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-black uppercase text-[21px] sm:text-[23px] leading-[0.98] tracking-[-0.04em] text-[#141312] group-hover:text-[#c8432b] transition-colors">
                    {project.titleLineOne}
                    {project.titleLineTwo && (
                      <>
                        <br />
                        {project.titleLineTwo}
                      </>
                    )}
                  </h3>

                  <p className="mt-2 font-mono text-[9.5px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                    {project.projectLabel}
                  </p>

                  <p className="mt-1.5 text-[12px] leading-[1.55] text-neutral-600">
                    {project.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pitch-Black Client Reviews Marquee ("Smiles and Stories from / My Clients") */}
      <section
        id="finnegan-clients"
        aria-label="Client testimonials"
        className="w-full bg-[#050506] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 mb-12 sm:mb-14">
          <div className="relative inline-block pr-8 sm:pr-12 pb-3 sm:pb-4">
            {/* Viewfinder Top-Left & Bottom-Right Orange Corner Brackets */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-2 -left-4 sm:-left-6 w-12 sm:w-16 h-10 sm:h-12 border-t border-l border-[#ef6a24]/60"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 w-10 sm:w-12 h-9 sm:h-11 border-b border-r border-[#ef6a24]/60"
            />

            <p className="relative pl-6 sm:pl-12 text-[13px] sm:text-[15px] text-neutral-300 font-normal tracking-[-0.01em] mb-1">
              Smiles and Stories from
            </p>
            <h2 className="text-[52px] sm:text-[68px] lg:text-[78px] font-normal tracking-[-0.045em] leading-[0.94] text-[#ef6a24]">
              My Clients
            </h2>
          </div>
        </div>

        {/* Continuous Left-Moving Testimonial Cards Track */}
        <div className="w-full overflow-hidden scroll-container horizontal-fade-mask">
          <div className="flex w-max animate-scroll-left">
            {[0, 1].map((loopIdx) => (
              <div
                key={loopIdx}
                aria-hidden={loopIdx === 1}
                className="flex items-stretch gap-5 pr-5"
              >
                {CLIENT_REVIEWS.map((review) => (
                  <article
                    key={`${loopIdx}-${review.id}`}
                    className="w-[275px] sm:w-[305px] lg:w-[325px] shrink-0 bg-[#0b0b0c] border border-white/[0.06] p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      {/* Viewfinder Bracket Framed Avatar */}
                      <div className="relative w-12 h-12 p-1 flex items-center justify-center">
                        <span
                          aria-hidden="true"
                          className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-400/70"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-400/70"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-400/70"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-400/70"
                        />

                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-900">
                          <SafeGrayImage
                            src={review.avatarSrc}
                            fallbackSrc={review.fallbackAvatarSrc}
                            alt={review.name}
                            sizes="48px"
                            className={`object-cover object-top ${
                              review.warmTone
                                ? "sepia contrast-125 brightness-90"
                                : "grayscale contrast-125 brightness-95"
                            }`}
                          />
                          {review.warmTone && (
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 bg-[#ef6a24]/30 mix-blend-color"
                            />
                          )}
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <p className="mt-6 text-[12.5px] sm:text-[13px] leading-[1.6] text-neutral-300">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    {/* Footer Attribution + 5 Orange Stars */}
                    <div className="mt-7 pt-4 border-t border-white/10">
                      <h3 className="text-[15px] sm:text-[16px] font-normal tracking-tight text-white">
                        {review.name}
                      </h3>
                      <p className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-[0.14em] text-neutral-400 mt-1">
                        {review.role}
                      </p>

                      <div
                        className="mt-2.5 flex items-center gap-1 text-[#ef6a24]"
                        aria-label="5 out of 5 stars"
                      >
                        {[0, 1, 2, 3, 4].map((starIdx) => (
                          <svg
                            key={starIdx}
                            className="w-3 h-3 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 1.5l2.57 5.21 5.75.84-4.16 4.05.98 5.73L10 14.62l-5.14 2.71.98-5.73-4.16-4.05 5.75-.84L10 1.5z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Centered View All Reviews CTA */}
        <div className="mt-11 sm:mt-14 flex justify-center px-6">
          <button
            type="button"
            onClick={() => setReviewsModalOpen(true)}
            className="inline-flex items-stretch border border-white/40 hover:border-white hover:bg-white hover:text-black text-white transition-colors cursor-pointer group"
          >
            <span className="px-5 py-3 text-[10px] sm:text-[10.5px] font-mono font-medium uppercase tracking-[0.14em] border-r border-white/40 group-hover:border-black/25">
              VIEW ALL REVIEWS
            </span>
            <span className="px-4 py-3 flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>
      </section>

      {/* Editorial Monochrome Portfolio Archive Section Below Hero */}
      <main id="finnegan-gallery" className="bg-[#f4f4f2] text-neutral-950">
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8 mb-12">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-500 mb-2">
                NEW YORK · STREET & EDITORIAL ARCHIVE
              </p>
              <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-neutral-950">
                Selected Frames
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {(["All", "Street", "Portrait", "Editorial"] as const).map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
                      activeCategory === cat
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-neutral-950"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleFrames.map((frame) => (
              <button
                key={frame.id}
                type="button"
                onClick={() => setSelectedFrame(frame)}
                className="group text-left cursor-pointer focus:outline-none"
              >
                <div className="relative aspect-[4/4.8] w-full bg-neutral-200 overflow-hidden">
                  <SafeGrayImage
                    src={frame.src}
                    fallbackSrc={frame.fallbackSrc}
                    alt={frame.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-top grayscale contrast-125 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-neutral-300 pt-2.5">
                  <div>
                    <span className="text-[10.5px] font-mono text-neutral-500 mr-2.5">
                      {frame.frameNumber}
                    </span>
                    <span className="text-sm font-medium tracking-tight text-neutral-950 group-hover:underline">
                      {frame.title}
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-neutral-500 shrink-0">
                    {frame.location}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Minimal Finnegan Footer */}
        <footer className="border-t border-neutral-300 bg-[#ededeb]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-lg font-medium tracking-[-0.03em] text-neutral-950">
                Finnegan Monroe
              </div>
              <p className="text-xs text-neutral-600 mt-1">
                Freelance street & editorial photographer based in New York City.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setInquirySent(false);
                  setWorkModalOpen(true);
                }}
                className="inline-flex items-stretch border border-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors cursor-pointer"
              >
                <span className="px-4 py-2 text-[10.5px] font-medium uppercase tracking-[0.12em] border-r border-neutral-950">
                  BOOK FINNEGAN
                </span>
                <span className="px-3 py-2 text-xs">→</span>
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Studio Slide-Over Navigation Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-neutral-950 text-white h-full p-8 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <span className="text-lg font-medium tracking-[-0.03em]">
                Finnegan
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-400 hover:text-white cursor-pointer"
              >
                CLOSE ✕
              </button>
            </div>

            <nav className="space-y-6 my-auto">
              <a
                href="#top"
                onClick={() => setDrawerOpen(false)}
                className="block text-3xl font-medium tracking-tight hover:text-neutral-400 transition-colors"
              >
                01. Video Reel Hero
              </a>
              <a
                href="#finnegan-stats"
                onClick={() => setDrawerOpen(false)}
                className="block text-3xl font-medium tracking-tight hover:text-neutral-400 transition-colors"
              >
                02. Stats &amp; Overview
              </a>
              <a
                href="#finnegan-about"
                onClick={() => setDrawerOpen(false)}
                className="block text-3xl font-medium tracking-tight hover:text-neutral-400 transition-colors"
              >
                03. About Finnegan
              </a>
              <a
                href="#finnegan-gallery"
                onClick={() => setDrawerOpen(false)}
                className="block text-3xl font-medium tracking-tight hover:text-neutral-400 transition-colors"
              >
                04. Selected Frames
              </a>
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  setInquirySent(false);
                  setWorkModalOpen(true);
                }}
                className="block text-3xl font-medium tracking-tight hover:text-neutral-400 transition-colors cursor-pointer text-left"
              >
                05. Commission NY
              </button>
            </nav>

            <div className="border-t border-white/15 pt-5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>hello@finnegan.studio</span>
              <span>NYC · E 74°</span>
            </div>
          </div>
        </div>
      )}

      {/* Frame Lightbox Modal */}
      {selectedFrame && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedFrame(null)}
        >
          <div
            className="w-full max-w-2xl bg-neutral-950 border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3.2] w-full bg-black">
              <SafeGrayImage
                key={selectedFrame.id}
                src={selectedFrame.src}
                fallbackSrc={selectedFrame.fallbackSrc}
                alt={selectedFrame.title}
                sizes="(max-width: 1024px) 100vw, 720px"
                className={
                  selectedFrame.isColor
                    ? "object-contain"
                    : "object-contain grayscale contrast-125"
                }
              />
            </div>
            <div className="p-5 sm:p-6 flex items-center justify-between gap-4 text-white border-t border-white/15">
              <div>
                <h3 className="text-lg font-medium">{selectedFrame.title}</h3>
                <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-400 mt-1">
                  {selectedFrame.category} · {selectedFrame.location} ·{" "}
                  {selectedFrame.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFrame(null)}
                className="border border-white/25 hover:border-white px-3.5 py-1.5 text-xs font-mono uppercase cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Commission / Get Template Modal */}
      {workModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setWorkModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#f4f4f2] text-neutral-950 border border-neutral-950 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-500">
                  FINNEGAN MONROE · NEW YORK
                </p>
                <h2 className="text-2xl font-medium tracking-tight mt-1">
                  Work With Finnegan
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setWorkModalOpen(false)}
                className="text-neutral-500 hover:text-neutral-950 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {inquirySent ? (
              <div className="space-y-4 py-2">
                <p className="text-lg font-medium">Brief sent to New York.</p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Thanks for reaching out. Finnegan replies to shoot inquiries
                  and licensing requests within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setWorkModalOpen(false)}
                  className="border border-neutral-950 bg-neutral-950 text-white px-5 py-2 text-xs font-mono uppercase tracking-[0.14em] cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-600 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Claire Bennett"
                    className="w-full border border-neutral-400 bg-white px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="claire@studio.nyc"
                    className="w-full border border-neutral-400 bg-white px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-600 mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Editorial shoot dates, template license, or campaign location..."
                    className="w-full border border-neutral-400 bg-white px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-neutral-950 bg-neutral-950 hover:bg-neutral-800 text-white py-3 text-[11px] font-mono uppercase tracking-[0.16em] transition-colors cursor-pointer"
                >
                  SEND INQUIRY →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* About Finnegan Bio Modal */}
      {aboutModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setAboutModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-black text-white border border-white/20 p-7 sm:p-9 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-4">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ef6a24]">
                  FINNEGAN MONROE · NEW YORK
                </p>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mt-1">
                  15+ Years Behind the Lens
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setAboutModalOpen(false)}
                className="text-neutral-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              Working across Lower Manhattan, Brooklyn rooftops, and editorial
              sets worldwide, Finnegan pairs 35mm monochrome craft with fluid
              street intuition — capturing unguarded moments for musicians,
              architects, athletes, and independent labels.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-4 text-xs font-mono">
              <div>
                <div className="text-neutral-500">BASE</div>
                <div className="text-white mt-1">SoHo, NY</div>
              </div>
              <div>
                <div className="text-neutral-500">MEDIUM</div>
                <div className="text-white mt-1">Leica &amp; 35mm</div>
              </div>
              <div>
                <div className="text-neutral-500">CLIENTS</div>
                <div className="text-[#ef6a24] mt-1">200+ Worldwide</div>
              </div>
            </div>
            <div className="pt-1 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setAboutModalOpen(false);
                  setInquirySent(false);
                  setWorkModalOpen(true);
                }}
                className="inline-flex items-stretch border border-white/40 hover:border-white hover:bg-white hover:text-black text-white transition-colors cursor-pointer"
              >
                <span className="px-4 py-2 text-[10px] font-mono uppercase tracking-[0.14em] border-r border-white/40">
                  BOOK SESSION
                </span>
                <span className="px-3 py-2 text-xs">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* All Client Reviews Modal */}
      {reviewsModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setReviewsModalOpen(false)}
        >
          <div
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0b0b0c] text-white border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-4">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ef6a24]">
                  CLIENT TESTIMONIALS · 5.0 AVG
                </p>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mt-1">
                  Smiles &amp; Stories
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setReviewsModalOpen(false)}
                className="text-neutral-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLIENT_REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="bg-black/60 border border-white/10 p-5 flex flex-col justify-between"
                >
                  <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-300">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-white">
                        {review.name}
                      </div>
                      <div className="text-[9px] font-mono uppercase tracking-[0.12em] text-neutral-400">
                        {review.role}
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-[#ef6a24]">
                      {[0, 1, 2, 3, 4].map((starIdx) => (
                        <svg
                          key={starIdx}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1.5l2.57 5.21 5.75.84-4.16 4.05.98 5.73L10 14.62l-5.14 2.71.98-5.73-4.16-4.05 5.75-.84L10 1.5z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <FramerBadge />
    </div>
  );
}
