"use client";

import React from "react";
import Image from "next/image";

/* Designer pointer cursor icon */
function EditorCursor({
  color = "#8c6bfb",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none drop-shadow-md ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 3.5L11 20.5L14 13.5L21 10.5L4 3.5Z"
          fill={color}
          stroke="white"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function PortfolioEditorSection() {
  const checklist = [
    "200+ designer-made, responsive portfolio templates",
    "Full visual editor, with layout, style and custom CSS controls",
    "Free domain for the first year on annual plans",
    "24/7  live chat with real people",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-20 pt-6">
      <div className="bg-[#eeedf5] rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 border border-neutral-200/50 relative overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Overline Tag */}
            <span className="text-[12px] sm:text-[13px] font-semibold text-neutral-500 uppercase tracking-[0.16em]">
              Portfolio Websites
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.12] mt-3 sm:mt-4">
              Build your portfolio website. <br />
              Exactly the way you want.
            </h2>

            {/* Paragraph */}
            <p className="mt-5 text-neutral-600 text-base sm:text-[17px] font-normal leading-relaxed max-w-xl">
              Drag sections into place, set type, spacing and color, then publish.
              Your portfolio website runs on a visual editor with layout controls
              on every block, and custom CSS and HTML are there when you want the
              portfolio to do something the interface does not expose.
            </p>

            {/* Checklist */}
            <div className="mt-7 sm:mt-8 space-y-3.5">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ded6fa] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-[#6338f2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[15px] sm:text-base font-normal text-neutral-800 tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-9 sm:mt-10">
              <a
                href="#trial"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#19191c] hover:bg-black active:scale-[0.98] text-white text-[15px] font-medium tracking-tight shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Start Your Free Trial</span>
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Interactive Editor Mockup */}
          <div className="lg:col-span-6 w-full relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none py-6 sm:py-8">
              {/* Underlying Browser Canvas Window */}
              <div className="bg-white rounded-2xl shadow-xl shadow-neutral-300/40 border border-neutral-200/80 overflow-hidden relative min-h-[360px] sm:min-h-[400px]">
                {/* Browser top header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 bg-neutral-50/70">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  </div>
                  <div className="w-32 h-2 rounded-full bg-neutral-200/70" />
                  <div className="w-6" />
                </div>

                {/* Canvas Body Content */}
                <div className="p-6 sm:p-8">
                  {/* Website mini header */}
                  <div className="flex items-center justify-between pb-6">
                    <span className="text-xs font-bold text-neutral-800">
                      Alex Roi
                    </span>
                    <div className="flex items-center gap-3 text-[10px] text-neutral-400">
                      <span>Home</span>
                      <span>About</span>
                    </div>
                  </div>

                  {/* Webpage Layout Inside Editor */}
                  <div className="grid grid-cols-12 gap-4 items-center pt-2">
                    {/* Left space reserved for the selected resizable photo */}
                    <div className="col-span-5 hidden sm:block opacity-0">
                      <div className="aspect-square" />
                    </div>

                    {/* Right text inside website */}
                    <div className="col-span-12 sm:col-span-7 space-y-2.5 pl-0 sm:pl-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                        Hello, I am Alex Roi.
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        An illustrator and graphic designer based in New Orleans.
                      </p>
                      <div className="pt-2">
                        <button className="px-3.5 py-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-[11px] font-medium text-neutral-800 shadow-2xs transition-colors">
                          Say Hello
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Layer 1: Selected Resizable Photo with Handles */}
              <div className="absolute top-14 sm:top-16 left-2 sm:-left-3 z-20 w-[190px] sm:w-[220px]">
                <div className="relative border-2 border-dashed border-neutral-400 rounded-lg p-0.5 bg-white/40 shadow-lg">
                  {/* 4 Corner Resize Handles */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-700 rounded-[1px]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-700 rounded-[1px]" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-700 rounded-[1px]" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-700 rounded-[1px]" />

                  {/* Photo of Alex Roi */}
                  <div className="relative aspect-[4/5] rounded overflow-hidden bg-neutral-100">
                    <Image
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
                      alt="Alex Roi Portrait"
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>

                  {/* Active Designer Cursor near resize boundary */}
                  <div className="absolute -bottom-4 right-1/3">
                    <EditorCursor color="#8c6bfb" />
                  </div>
                </div>
              </div>

              {/* Floating Layer 2: Floating Font Set Card (Top Right) */}
              <div className="absolute -top-2 sm:top-2 -right-2 sm:-right-4 z-30 w-44 sm:w-48 bg-white rounded-xl shadow-xl border border-neutral-200/90 p-3.5 space-y-3">
                <div className="flex items-center justify-between pb-1.5 border-b border-neutral-100">
                  <span className="text-[11px] font-bold text-neutral-800">
                    Font Set
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                    <span>Aa</span>
                    <span>▾</span>
                  </div>
                </div>

                {/* Font Choice 1: Inter */}
                <div className="space-y-0.5">
                  <div className="text-[12px] font-bold text-neutral-900">
                    Inter
                  </div>
                  <div className="text-[9px] text-neutral-400 leading-tight">
                    Inter is used for paragraphs & secondary text.
                  </div>
                </div>

                {/* Font Choice 2: Oswald */}
                <div className="space-y-0.5 pt-1 border-t border-neutral-100 relative">
                  <div className="text-[13px] font-extrabold uppercase tracking-tight text-neutral-950 font-sans">
                    Oswald
                  </div>
                  <div className="text-[9px] text-neutral-400 leading-tight">
                    Oswald is used for headings & secondary text.
                  </div>

                  {/* Cursor pointing at Oswald */}
                  <div className="absolute -bottom-2 -right-2">
                    <EditorCursor color="#8c6bfb" />
                  </div>
                </div>
              </div>

              {/* Floating Layer 3: Floating Color Palette Card (Bottom Right) */}
              <div className="absolute -bottom-3 sm:bottom-0 right-2 sm:right-4 z-30 w-52 sm:w-56 bg-white rounded-xl shadow-xl border border-neutral-200/90 p-3 space-y-2.5">
                {/* Palette 1: Mood */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-semibold text-neutral-400 w-8">
                    Mood
                  </span>
                  <div className="flex-1 grid grid-cols-4 gap-1.5">
                    <div className="h-6 rounded bg-[#202738]" />
                    <div className="h-6 rounded bg-[#8e7666]" />
                    <div className="h-6 rounded bg-[#d6bfae]" />
                    <div className="h-6 rounded bg-[#f6eee8]" />
                  </div>
                </div>

                {/* Palette 2: Fresh */}
                <div className="flex items-center gap-2 relative">
                  <span className="text-[9px] font-semibold text-neutral-400 w-8">
                    Fresh
                  </span>
                  <div className="flex-1 grid grid-cols-4 gap-1.5">
                    <div className="h-6 rounded bg-[#f5eedc]" />
                    <div className="h-6 rounded bg-[#a2ccd1]" />
                    <div className="h-6 rounded bg-[#6b757e]" />
                    <div className="h-6 rounded bg-[#1e2321]" />
                  </div>

                  {/* Cursor pointing at color swatches */}
                  <div className="absolute -bottom-3 -right-2">
                    <EditorCursor color="#8c6bfb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

