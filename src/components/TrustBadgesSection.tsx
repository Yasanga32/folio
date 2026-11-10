"use client";

import React from "react";

export default function TrustBadgesSection() {
  const badges = [
    {
      title: "No card required.",
      description: "Buy only if you like it.",
      icon: (
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Card Shape */}
          <div className="w-7 h-5 rounded-[4px] bg-neutral-400/80 relative overflow-hidden flex flex-col justify-start pt-1">
            <div className="w-full h-1 bg-neutral-700/80" />
          </div>
          {/* Diagonal Strike-through Bar */}
          <div className="absolute w-9 h-[2.5px] bg-white rounded-full -rotate-45 transform drop-shadow-md" />
        </div>
      ),
    },
    {
      title: "Unlimited free trial.",
      description: "Try it as long as you want.",
      icon: (
        <div className="w-8 h-8 flex flex-col items-center justify-center">
          {/* Top Bar */}
          <div className="w-6 h-1 bg-white rounded-xs" />
          {/* Hourglass Glass Shape */}
          <div className="w-4 h-5 flex flex-col justify-between items-center my-0.5">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-white" fill="currentColor">
              <path d="M6 2v4l4 4-4 4v4h12v-4l-4-4 4-4V2H6zm8 11.5l2.5 2.5H7.5L10 13.5zM10 6.5L7.5 4h9L14 6.5z" />
            </svg>
          </div>
          {/* Bottom Bar */}
          <div className="w-6 h-1 bg-white rounded-xs" />
        </div>
      ),
    },
    {
      title: "No annoying limits.",
      description: "Build it your way.",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-6 h-7 rounded-[4px] bg-neutral-400/80 relative overflow-hidden flex items-center justify-center shadow-xs">
            {/* Top-right folded corner */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-700/80 rounded-bl-[2px]" />
            {/* Cloud Icon Inside */}
            <svg
              className="w-3.5 h-3.5 text-white fill-current mt-1"
              viewBox="0 0 24 24"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0e] text-white py-16 sm:py-20 px-6 sm:px-10 lg:px-14 border-t border-b border-neutral-900 relative overflow-hidden">
      {/* Subtle ambient light gradient in the background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center relative z-10">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center space-y-3 group"
          >
            {/* Icon */}
            <div className="mb-1 transform group-hover:scale-110 transition-transform duration-200">
              {badge.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {badge.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-[15px] text-neutral-400 font-normal leading-relaxed">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

