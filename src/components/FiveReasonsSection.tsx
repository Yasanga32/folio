"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FiveReasonsSection() {
  const [selectedLayout, setSelectedLayout] = useState<number>(4); // Center tile is selected by default

  const layoutTiles = [
    { id: 0, preview: "2-stack" },
    { id: 1, preview: "1-large" },
    { id: 2, preview: "split" },
    { id: 3, preview: "2-col" },
    { id: 4, preview: "center-selected" },
    { id: 5, preview: "row" },
    { id: 6, preview: "3-col" },
    { id: 7, preview: "tall" },
    { id: 8, preview: "grid" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
      {/* Centered Headline with Purple Highlight */}
      <div className="text-center mb-14 sm:mb-18">
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-neutral-950 tracking-tight leading-[1.12]">
          <span className="bg-[#eee5fc] text-[#683be8] px-3.5 py-1 rounded-2xl mr-2 inline-block shadow-2xs">
            Five reasons
          </span>{" "}
          to use <br />
          Carbonmade.
        </h2>
      </div>

      {/* 2-Column Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
        
        {/* Card 1: IT'S DAMN FAST (Dark Card) */}
        <div className="bg-[#18181b] rounded-[32px] p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl border border-neutral-800/80 min-h-[500px] sm:min-h-[540px]">
          {/* Top Visual: 3x3 Layout Grid Selector */}
          <div className="flex-1 flex items-center justify-center py-4">
            <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
              {layoutTiles.map((tile) => {
                const isSelected = selectedLayout === tile.id;
                return (
                  <button
                    key={tile.id}
                    onClick={() => setSelectedLayout(tile.id)}
                    className={`aspect-square rounded-2xl flex items-center justify-center transition-all relative ${
                      isSelected
                        ? "border-2 border-[#7c4dff] bg-[#272338] shadow-lg shadow-purple-900/40"
                        : "bg-[#232328] hover:bg-[#2b2b33] border border-neutral-800/80"
                    }`}
                  >
                    {/* Interior shapes per tile */}
                    {tile.id === 4 ? (
                      /* Center selected tile with 2 bright white blocks */
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-5 h-5 rounded-md bg-white shadow-xs" />
                        <div className="w-5 h-5 rounded-md bg-white shadow-xs translate-x-2 -translate-y-1" />
                      </div>
                    ) : (
                      /* Muted layout wireframes */
                      <div className="w-6 h-6 rounded-md bg-neutral-600/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-xs bg-neutral-500/40" />
                      </div>
                    )}

                    {/* Active cursor pointing at selected center tile */}
                    {isSelected && (
                      <div className="absolute -bottom-2 -right-2 pointer-events-none drop-shadow-md z-10">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M4 3.5L11 20.5L14 13.5L21 10.5L4 3.5Z"
                            fill="white"
                            stroke="#18181b"
                            strokeWidth="1.75"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Copy */}
          <div className="pt-6 border-t border-neutral-800/60">
            <span className="text-[11px] sm:text-xs font-bold text-[#9162ff] uppercase tracking-widest block mb-2">
              It&apos;s damn fast
            </span>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong className="text-white font-bold">
                Launch in minutes, literally.{" "}
              </strong>
              <span className="text-neutral-400 font-normal">
                The fastest portfolio you&apos;ll ever build. Try it and you see.
              </span>
            </p>
          </div>
        </div>

        {/* Card 2: NO CODING NEEDED (Light Card) */}
        <div className="bg-[#edeef3] rounded-[32px] p-8 sm:p-10 text-neutral-900 flex flex-col justify-between shadow-sm border border-neutral-200/70 min-h-[500px] sm:min-h-[540px]">
          {/* Top Visual: Vintage Off-Road 4x4 Studio Shot + Floating Settings Bar */}
          <div className="flex-1 flex flex-col items-center justify-center relative py-2">
            <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xs flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80"
                alt="Studio 4x4 vehicle"
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>

            {/* Floating Dark "Section Settings" Toolbar */}
            <div className="w-full max-w-[330px] bg-[#212126] text-white px-3.5 py-2 rounded-2xl shadow-xl border border-neutral-700/60 flex items-center justify-between -mt-6 relative z-10">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-medium text-neutral-300">
                  Section Settings
                </span>
                {/* Color swatch dot */}
                <span className="w-3.5 h-3.5 rounded-full bg-white shadow-xs" />
                {/* Control Icons */}
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                  <span className="hover:text-white cursor-pointer" title="Text">T</span>
                  <span className="hover:text-white cursor-pointer" title="Grid">▦</span>
                  <span className="hover:text-white cursor-pointer" title="Align">☷</span>
                </div>
              </div>

              {/* Save Button */}
              <button className="px-3 py-1 rounded-lg bg-[#442273] hover:bg-[#532b8a] text-purple-200 text-[10px] font-bold tracking-tight transition-colors">
                Save
              </button>
            </div>
          </div>

          {/* Bottom Copy */}
          <div className="pt-6 border-t border-neutral-200/80">
            <span className="text-[11px] sm:text-xs font-bold text-[#703ee5] uppercase tracking-widest block mb-2">
              No coding needed
            </span>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong className="text-neutral-900 font-bold">
                Everything is drag and drop,{" "}
              </strong>
              <span className="text-neutral-600 font-normal">
                every setting just a click away, because why not make it fun.
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

