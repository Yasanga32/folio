import React from "react";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

export default function TemplatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] relative">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center text-center py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 mb-3">
          Template
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08]">
          Template Showcase
        </h1>
        <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-xl">
          This page is linked to the Template navbar tab and is ready for your template layout.
        </p>
      </main>

      <FramerBadge />
    </div>
  );
}

