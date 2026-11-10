"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TemplateItem {
  id: string;
  title: string;
  category: string;
  isFree: boolean;
  type: "free" | "premium";
  renderPreview: () => React.ReactNode;
}

export default function TemplatesGridSection() {
  const [filter, setFilter] = useState<"free" | "premium">("free");

  const templates: TemplateItem[] = [
    {
      id: "influix",
      title: "Influix",
      category: "Influencer & Creator Template",
      isFree: true,
      type: "free",
      renderPreview: () => (
        <div className="relative w-full h-full bg-[#151518] text-white flex overflow-hidden">
          {/* Left Vertical Brand Ribbon */}
          <div className="w-14 sm:w-16 bg-[#2d2822] flex items-center justify-center border-r border-[#3f3830] select-none">
            <span
              className="text-2xl sm:text-3xl font-extrabold tracking-widest text-[#f5f2eb] -rotate-90 whitespace-nowrap"
              style={{ fontFamily: "serif" }}
            >
              Influix
            </span>
          </div>

          {/* Right Website Showcase */}
          <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between relative bg-gradient-to-b from-[#18181c] to-[#0f0f11]">
            {/* Top Bar Mock */}
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <span className="text-[9px] font-bold tracking-wider text-neutral-400">
                ✦ CREATIVE
              </span>
              <div className="flex items-center gap-1.5 text-[8px] text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Available</span>
              </div>
            </div>

            {/* Headline */}
            <div className="py-2 text-center">
              <h4 className="text-xs sm:text-sm font-bold text-neutral-100 leading-snug">
                Create change that <br />
                delivers real influence
              </h4>
              <div className="flex justify-center gap-1 pt-1 text-[9px] text-amber-400">
                ★★★★★
              </div>
            </div>

            {/* 3 Photos Row */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-neutral-800 border border-neutral-700/50">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80"
                  alt="Influencer 1"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-neutral-800 border border-neutral-700/50">
                <Image
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
                  alt="Influencer 2"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-neutral-800 border border-neutral-700/50">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Influencer 3"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "courso",
      title: "Courso",
      category: "Online Course & Education Template",
      isFree: true,
      type: "free",
      renderPreview: () => (
        <div className="relative w-full h-full bg-[#5289cb] text-white flex flex-col justify-between overflow-hidden">
          {/* Subtle clouds backdrop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4a84c8] via-[#6597d3] to-[#8eb5e6] opacity-90" />

          {/* Top Bar Mock */}
          <div className="relative z-10 flex items-center justify-between px-4 py-2.5 border-b border-white/15">
            <span className="text-[11px] font-bold text-white flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-white" /> Courso
            </span>
            <div className="flex items-center gap-2 text-[9px] text-white/80">
              <span>Courses</span>
              <span>Mentors</span>
              <span className="px-2 py-0.5 rounded-full bg-white text-blue-900 font-semibold text-[8px]">
                Sign In
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="relative z-10 px-4 pt-1 text-center">
            <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
              Master low-code <br />
              development to create <br />
              <span className="underline decoration-white/40">high-converting sites</span>
            </h4>
          </div>

          {/* Video Preview Card with 3D elements */}
          <div className="relative z-10 px-4 pb-3 pt-2">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                alt="Courso Student"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                <span className="text-[9px] font-medium text-white/90">
                  ▶ Watch Free Intro Class
                </span>
              </div>
            </div>

            {/* Cloud footer effect */}
            <div className="absolute -bottom-1 inset-x-0 h-6 bg-gradient-to-t from-white/70 via-white/30 to-transparent blur-[3px]" />
          </div>
        </div>
      ),
    },
    {
      id: "agencox",
      title: "Agencox",
      category: "AI Integration Framer Template",
      isFree: true,
      type: "free",
      renderPreview: () => (
        <div className="relative w-full h-full bg-[#0a0a0c] p-3 sm:p-4 flex items-center justify-center overflow-hidden">
          {/* Inner Light Browser Mockup */}
          <div className="w-full h-full bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden flex flex-col justify-between">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-100 bg-neutral-50/70">
              <span className="text-[10px] font-bold text-neutral-900">
                ✦ Ainet
              </span>
              <div className="flex items-center gap-2 text-[8px] text-neutral-400">
                <span>Features</span>
                <span>Pricing</span>
                <span className="px-2 py-0.5 rounded-full bg-black text-white font-medium">
                  Try Now
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-3 sm:p-4 grid grid-cols-12 gap-2 items-center flex-1">
              <div className="col-span-6 space-y-1.5">
                <h4 className="text-[11px] sm:text-xs font-bold text-neutral-900 leading-snug">
                  Redefining automation with powerful AI
                </h4>
                <p className="text-[8px] text-neutral-400 leading-tight">
                  Everything you need to ship AI apps faster.
                </p>
                <div className="pt-1">
                  <span className="px-2 py-0.5 rounded bg-neutral-900 text-white text-[8px] font-medium">
                    Explore Now
                  </span>
                </div>
              </div>

              {/* 3D Crystal AI Graphic */}
              <div className="col-span-6 relative aspect-square rounded-lg overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                  alt="3D AI artwork"
                  fill
                  className="object-cover opacity-80"
                  sizes="150px"
                />
                <span className="relative z-10 text-2xl font-black text-white/95 drop-shadow-md">
                  AI
                </span>
              </div>
            </div>

            {/* Bottom partner logos */}
            <div className="px-3 py-1.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-around text-[7px] text-neutral-400 font-semibold tracking-wider">
              <span>GOOGLE</span>
              <span>VERCEL</span>
              <span>FRAMER</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "portfix",
      title: "Portfix",
      category: "Personal Portfolio Framer Template",
      isFree: true,
      type: "free",
      renderPreview: () => (
        <div className="relative w-full h-full bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
          {/* Inner Editorial Portfolio Mock */}
          <div className="w-full h-full bg-white rounded-xl shadow-lg border border-neutral-200/90 p-4 flex flex-col justify-between relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[8px] text-neutral-400 border-b border-neutral-100 pb-1.5">
              <span>SELECTED WORK</span>
              <span className="font-bold text-neutral-800">◇ M.H</span>
              <span>2026</span>
            </div>

            {/* Big Headline */}
            <div className="pt-1">
              <h3 className="text-base sm:text-lg font-black tracking-tight text-neutral-900 uppercase">
                MIRANDA HALIM
              </h3>
            </div>

            {/* Portrait Photo with Pink Drop Card */}
            <div className="relative flex items-center justify-center py-1">
              {/* Pink accent tilted card behind */}
              <div className="absolute w-28 h-32 bg-pink-200/70 rounded-md rotate-6 transform" />
              {/* Photo */}
              <div className="relative w-28 h-32 rounded-md overflow-hidden shadow-md border border-neutral-200 bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Miranda Halim"
                  fill
                  className="object-cover grayscale contrast-125"
                  sizes="160px"
                />
              </div>
            </div>

            {/* Mini Footer bio */}
            <div className="flex items-center justify-between pt-1 border-t border-neutral-100 text-[8px] text-neutral-500">
              <span>Art Director & Stylist</span>
              <span>View Projects →</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ainet",
      title: "AiNet",
      category: "AI, SaaS, Technology & AI Agency",
      isFree: true,
      type: "free",
      renderPreview: () => (
        <div className="relative w-full h-full bg-[#1e2024] p-3 sm:p-4 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[#f8f9fb] rounded-xl shadow-md border border-neutral-200 overflow-hidden flex flex-col justify-between">
            {/* Top header */}
            <div className="bg-white px-3 py-2 border-b border-neutral-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-neutral-800">
                ● Agencox
              </span>
              <div className="w-16 h-1.5 rounded-full bg-neutral-200" />
            </div>

            {/* 3D Isometric background hero */}
            <div className="p-3 text-center space-y-1">
              <span className="text-[8px] font-semibold text-purple-600 uppercase tracking-widest">
                AI Solutions
              </span>
              <h4 className="text-[11px] sm:text-xs font-bold text-neutral-900 leading-tight">
                Empowering businesses with intelligent ai solutions
              </h4>
            </div>

            {/* UI blocks */}
            <div className="px-3 pb-3 grid grid-cols-3 gap-1.5">
              <div className="bg-white rounded-lg p-1.5 border border-neutral-200 shadow-2xs space-y-1">
                <div className="w-4 h-4 rounded bg-purple-100 text-[8px] flex items-center justify-center text-purple-600">
                  ✦
                </div>
                <div className="w-full h-1 bg-neutral-200 rounded" />
              </div>
              <div className="bg-white rounded-lg p-1.5 border border-neutral-200 shadow-2xs space-y-1">
                <div className="w-4 h-4 rounded bg-blue-100 text-[8px] flex items-center justify-center text-blue-600">
                  ⚡
                </div>
                <div className="w-full h-1 bg-neutral-200 rounded" />
              </div>
              <div className="bg-white rounded-lg p-1.5 border border-neutral-200 shadow-2xs space-y-1">
                <div className="w-4 h-4 rounded bg-emerald-100 text-[8px] flex items-center justify-center text-emerald-600">
                  ◈
                </div>
                <div className="w-full h-1 bg-neutral-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "portfolin",
      title: "Portfolin",
      category: "Single Product Framer Template",
      isFree: true,
      type: "free",
      renderPreview: () => (
        <div className="relative w-full h-full bg-[#101014] text-white p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
          {/* Faded Watermark */}
          <div className="absolute top-2 inset-x-0 text-center select-none opacity-20 pointer-events-none">
            <span className="text-3xl sm:text-4xl font-black tracking-widest font-mono">
              ROOXIA
            </span>
          </div>

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-[9px] text-neutral-400 border-b border-neutral-800 pb-2">
            <span className="font-bold text-white tracking-wider">ROOXIA ONE</span>
            <span>Shop Now</span>
          </div>

          {/* Center Product Showcase */}
          <div className="relative z-10 py-1">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-neutral-800 bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
                alt="Booxia Headphones"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Unleash powerful sound. <br />
                  Anywhere you go.
                </h4>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between text-[8px] text-neutral-400 pt-1">
            <span>High-Res Audio · ANC</span>
            <span className="text-white font-medium">Explore Specs →</span>
          </div>
        </div>
      ),
    },
  ];

  const displayedTemplates =
    filter === "free"
      ? templates
      : templates.filter((t) => t.type === "premium");

  return (
    <section
      id="templates"
      className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20"
    >
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        {/* Left Headline & Subtitle */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 tracking-tight leading-[1.12]">
            Best Framer{" "}
            {/* Rotated "Each $49" badge */}
            <span className="inline-block px-3 py-1 bg-[#85c9aa] text-neutral-950 text-xs sm:text-sm font-bold rounded-full transform -rotate-6 shadow-xs mx-1 align-middle">
              Each $49
            </span>{" "}
            templates for <br />
            designers & agencies
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base font-normal">
            Framer components to level up your website experience
          </p>
        </div>

        {/* Right Filter Pills */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <button
            onClick={() => setFilter("free")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "free"
                ? "bg-[#e8c83b] text-neutral-950 font-semibold shadow-xs"
                : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200"
            }`}
          >
            Free
          </button>
          <button
            onClick={() => setFilter("premium")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "premium"
                ? "bg-[#e8c83b] text-neutral-950 font-semibold shadow-xs"
                : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200"
            }`}
          >
            Premium
          </button>
        </div>
      </div>

      {/* 3-Column Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {displayedTemplates.map((template) => (
          <div key={template.id} className="group flex flex-col cursor-pointer">
            {/* Card Preview Window */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 bg-neutral-100 transition-all duration-300 group-hover:shadow-md group-hover:border-neutral-300">
              {template.renderPreview()}
            </div>

            {/* Title & Tag */}
            <div className="mt-4 flex items-center gap-2">
              <h3 className="text-xl font-bold text-neutral-950 tracking-tight group-hover:text-purple-600 transition-colors">
                {template.title}
              </h3>
              {template.isFree && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#82a44f] text-white text-[11px] font-semibold tracking-wide">
                  Free
                </span>
              )}
            </div>

            {/* Subtitle / Category */}
            <p className="mt-1 text-xs sm:text-[13px] text-neutral-500 font-normal">
              {template.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

