"use client";

import React from "react";

export default function Home2FloatingBadges() {
  return (
    <aside
      aria-label="Action shortcuts and attribution"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* 1. GET THIS TEMPLATE Button */}
      <button className="px-5 py-2.5 rounded-full bg-white text-neutral-900 border border-neutral-200/90 shadow-md hover:shadow-lg text-xs font-bold uppercase tracking-wider transition-all hover:bg-neutral-50 active:scale-95">
        Get This Template
      </button>

      {/* 2. UNLOCK 350+ TEMPLATES Button */}
      <button className="px-5 py-2.5 rounded-full bg-[#151518] hover:bg-black text-white shadow-md hover:shadow-lg text-xs font-bold uppercase tracking-wider transition-all active:scale-95">
        Unlock 350+ Templates
      </button>

      {/* 3. HIRE FOR CUSTOM WEBSITE Button */}
      <button className="px-5 py-2.5 rounded-full bg-[#4151f7] hover:bg-[#3242ea] text-white shadow-md hover:shadow-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95">
        <span>✨</span>
        <span>Hire For Custom Website</span>
      </button>

      {/* 4. Made in Framer Badge */}
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-neutral-200/80 hover:shadow-lg transition-all cursor-pointer mt-1">
        <svg
          className="w-3.5 h-3.5 text-neutral-900"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
        <span className="text-[11px] font-semibold tracking-tight text-neutral-800">
          Made in Framer
        </span>
      </div>
    </aside>
  );
}

