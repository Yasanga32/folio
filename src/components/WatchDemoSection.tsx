"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export default function WatchDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      {/* Outer Monitor / Laptop Screen Bezel */}
      <div className="bg-[#0b0b0e] p-3 sm:p-5 lg:p-7 rounded-[28px] sm:rounded-[36px] shadow-2xl shadow-black/60 border border-neutral-800/90 relative">
        {/* Inner App Window Frame */}
        <div className="bg-[#121216] rounded-2xl overflow-hidden flex border border-neutral-800/80 min-h-[520px] sm:min-h-[640px] lg:min-h-[720px] relative">
          
          {/* 1. Far Left Slim Tool Bar */}
          <div className="w-11 sm:w-12 bg-[#0e0e11] border-r border-neutral-800/80 py-4 flex flex-col items-center justify-between flex-shrink-0 select-none">
            {/* Top Logo */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[11px] font-black text-neutral-300">
                C
              </div>
              <span
                className="text-[9px] font-black tracking-[0.2em] text-neutral-500 uppercase py-2"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                CARBON
              </span>
            </div>

            {/* Middle Nav Icons */}
            <div className="flex flex-col items-center gap-5 text-neutral-500">
              <button className="hover:text-neutral-200 transition-colors" title="Blocks">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
              <button className="hover:text-neutral-200 transition-colors" title="Store">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
                </svg>
              </button>
              <button className="hover:text-neutral-200 transition-colors" title="Media">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </button>
            </div>

            {/* Bottom Settings Icons */}
            <div className="flex flex-col items-center gap-4 text-neutral-500">
              <button className="hover:text-neutral-200 transition-colors" title="Help">
                <span className="text-xs font-semibold">?</span>
              </button>
              <button className="hover:text-neutral-200 transition-colors" title="Settings">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 2. Left Sidebar: Blocks & Page Settings */}
          <div className="w-48 sm:w-56 bg-[#16161a] border-r border-neutral-800/80 p-3 hidden md:flex flex-col flex-shrink-0 select-none">
            {/* Currently Editing Dropdown */}
            <div className="bg-[#1f1f25] px-3 py-2 rounded-lg border border-neutral-700/60 mb-3 flex items-center justify-between cursor-pointer">
              <div className="text-left">
                <div className="text-[8px] uppercase tracking-wider text-neutral-400 font-medium">
                  Currently Editing
                </div>
                <div className="text-xs font-bold text-neutral-200">
                  Work
                </div>
              </div>
              <span className="text-[10px] text-neutral-400">▾</span>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-neutral-800 text-[11px] mb-3">
              <button className="pb-2 text-neutral-100 font-semibold border-b-2 border-white px-2">
                Blocks
              </button>
              <button className="pb-2 text-neutral-500 hover:text-neutral-300 px-3">
                Page Settings
              </button>
            </div>

            {/* Blocks Thumbnail List */}
            <div className="flex-1 space-y-2.5 overflow-y-auto no-scrollbar pr-0.5">
              {/* Thumbnail 1 */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-neutral-700/80 bg-neutral-900 group cursor-pointer hover:border-neutral-500 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Block 1"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>

              {/* Thumbnail 2: Your Project Title */}
              <div className="aspect-[16/8] rounded-lg border border-neutral-700/80 bg-[#1f1f25] p-2 flex flex-col justify-center items-center text-center cursor-pointer hover:border-neutral-500 transition-colors">
                <span className="text-[10px] font-serif font-bold text-neutral-300">
                  Your Project Title
                </span>
                <span className="text-[7px] text-neutral-500 mt-0.5">
                  Editorial Layout Block
                </span>
              </div>

              {/* Thumbnail 3 */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-neutral-700/80 bg-neutral-900 cursor-pointer hover:border-neutral-500 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="Block 3"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>

              {/* Thumbnail 4 */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-neutral-700/80 bg-neutral-900 cursor-pointer hover:border-neutral-500 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
                  alt="Block 4"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>
          </div>

          {/* 3. Main Workspace Area */}
          <div className="flex-1 flex flex-col relative bg-[#f1eff4]">
            {/* Top Workspace Header */}
            <div className="h-12 bg-[#eae7f0] border-b border-neutral-300/80 px-4 flex items-center justify-between select-none z-20">
              <div className="w-16" />

              {/* Center URL bar */}
              <div className="px-4 py-1 rounded-full bg-white/70 border border-neutral-300/60 text-[10px] sm:text-[11px] text-neutral-600 font-medium tracking-tight">
                Go live to claim your URL
              </div>

              {/* Right Tools & Go Live */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 text-neutral-500 text-xs">
                  <span className="cursor-pointer hover:text-neutral-900">⇅</span>
                  <span className="cursor-pointer hover:text-neutral-900">📱</span>
                </div>
                <button className="px-3.5 py-1 rounded-full bg-[#6c40e4] hover:bg-[#5b32d2] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all">
                  Go Live
                </button>
              </div>
            </div>

            {/* Canvas / Video Screen Area */}
            <div className="flex-1 relative overflow-hidden bg-neutral-100 flex items-center justify-center">
              
              {/* Background Video / Animated Looping Media Placeholder */}
              <div className="absolute inset-0 z-0">
                {/* Looping video placeholder */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                  poster="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              </div>

              {/* High-Fidelity Website Grid Layout (Matching Screenshot UI) */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-3 pointer-events-none opacity-90">
                {/* Top-Left Quadrant: Model in denim suit with red bag */}
                <div className="relative bg-neutral-200 rounded-sm overflow-hidden flex flex-col justify-between p-3">
                  <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
                    alt="Fashion Photography"
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                  <div className="relative z-10 text-[13px] font-serif font-bold text-neutral-900">
                    Work
                  </div>
                  <div className="relative z-10 text-[10px] font-medium text-neutral-800 bg-white/70 backdrop-blur-xs px-2 py-0.5 rounded self-center shadow-xs">
                    Fashion Photography
                  </div>
                </div>

                {/* Top-Right Quadrant: ACQUA shoot swimwear model */}
                <div className="relative bg-neutral-200 rounded-sm overflow-hidden flex flex-col justify-between p-3">
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                    alt="ACQUA Shoot"
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                  <div className="relative z-10 text-[13px] font-serif font-bold text-neutral-900 self-end">
                    About
                  </div>
                  <div className="relative z-10 text-[10px] font-medium text-neutral-800 bg-white/70 backdrop-blur-xs px-2 py-0.5 rounded self-center shadow-xs">
                    ACQUA Shoot
                  </div>
                </div>

                {/* Bottom-Left Quadrant: Clean architectural / white backdrop */}
                <div className="relative bg-neutral-100 rounded-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 via-neutral-100 to-white" />
                  <div className="absolute inset-x-0 bottom-2 text-center text-[10px] text-neutral-500 font-medium">
                    Editorial Architecture
                  </div>
                </div>

                {/* Bottom-Right Quadrant: Blonde portrait model touching hair */}
                <div className="relative bg-neutral-200 rounded-sm overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                    alt="Portrait Series"
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                </div>
              </div>

              {/* Center Floating CTA Button: "Watch Demo 1:44" */}
              <div className="relative z-30 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#9150f8] hover:bg-[#803deb] active:scale-95 text-white font-bold text-sm sm:text-base tracking-tight shadow-xl shadow-purple-600/35 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-600/50"
                >
                  {/* Subtle pulsing background glow */}
                  <span className="absolute -inset-1 rounded-full bg-purple-500 opacity-40 blur-sm group-hover:opacity-75 transition-opacity pointer-events-none" />

                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      {isPlaying ? (
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      ) : (
                        <path d="M8 5v14l11-7z" />
                      )}
                    </svg>
                    <span>Watch Demo 1:44</span>
                  </span>
                </button>
              </div>

              {/* Bottom Right Floating Presenter / Guide Video Avatar */}
              <div className="absolute bottom-4 right-4 z-30 group cursor-pointer">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white/90 shadow-2xl bg-neutral-900 transform transition-transform group-hover:scale-105">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Demo Presenter"
                    fill
                    className="object-cover"
                    sizes="70px"
                  />
                  {/* Lilac hair / glow overlay */}
                  <div className="absolute inset-0 bg-purple-500/20 mix-blend-color pointer-events-none" />
                </div>
                {/* Active live indicator dot */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

