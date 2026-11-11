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
}

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

      {/* Full-Bleed Black & White Video Hero */}
      <section
        aria-label="Finnegan Monroe full-screen monochrome video hero"
        className="relative isolate w-full min-h-[calc(100vh-76px)] bg-[#d7d8da] overflow-hidden flex flex-col justify-between px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 pb-7"
      >
        {/* Background Motion Layer 1: Monochrome Portrait Backdrop (Instant + Fallback Motion) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        >
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
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none grayscale contrast-[1.18] brightness-105 transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={activeReel.videoSrc} type="video/mp4" />
        </video>

        {/* Atmospheric Overcast Sky Top & Moody Bottom Vignette Scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#e4e5e7]/55 via-transparent to-black/60"
        />

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
              HI, FINNEGAN MONROE HERE. I&apos;M A FREELANCE PHOTOGRAPHER IN NY
              AND THE SHUTTERBUG CAPTURING LIFE&apos;S MAGICAL MOMENTS ONE
              CLICK AT A TIME.
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
        <div className="relative">
          {/* Contrast-Inverting Headline Blending Directly Over B&W Video */}
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
                    isPlaying ? "bg-emerald-400 animate-pulse" : "bg-neutral-400"
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
              href="#finnegan-gallery"
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
                href="#finnegan-gallery"
                onClick={() => setDrawerOpen(false)}
                className="block text-3xl font-medium tracking-tight hover:text-neutral-400 transition-colors"
              >
                02. Selected Frames
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
                03. Commission NY
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
                className="object-contain grayscale contrast-125"
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

      <FramerBadge />
    </div>
  );
}
