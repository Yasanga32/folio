"use client";

import React from "react";

export default function FramerBadge() {
  return (
    <aside
      aria-label="Framer attribution"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-neutral-200/80 hover:shadow-lg hover:border-neutral-300 transition-all cursor-pointer group"
    >
      {/* Official Framer geometric SVG mark */}
      <svg
        className="w-4 h-4 text-neutral-900 group-hover:scale-110 transition-transform"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
      <span className="text-[12px] font-semibold tracking-tight text-neutral-800">
        Made in Framer
      </span>
    </aside>
  );
}

