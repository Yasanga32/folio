"use client";

import React, { useState } from "react";
import Image from "next/image";

interface DirectoryTemplate {
  id: string;
  name: string;
  professions: string[];
  gallery: string;
  description: string;
  renderPreview: (isMobile: boolean) => React.ReactNode;
}

const PROFESSIONS = [
  "Photographers",
  "Artists & Illustrators",
  "Graphic Designers",
  "UI/UX Designers",
  "Developers & IT",
  "AI/Software engineers",
  "Engineers",
  "Students & Graduates",
  "Videographers & Filmmakers",
  "Fashion Designers & Stylists",
  "Models & Actors",
  "Architects & Interior Designers",
];

const GALLERIES = [
  {
    name: "Horizontal Scroll",
    icon: (
      <svg className="w-4 h-3.5" viewBox="0 0 20 14" fill="currentColor">
        <rect x="0" y="1" width="5" height="12" rx="1" opacity="0.6" />
        <rect x="7" y="1" width="6" height="12" rx="1" />
        <rect x="15" y="1" width="5" height="12" rx="1" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Tiled",
    icon: (
      <svg className="w-4 h-3.5" viewBox="0 0 20 14" fill="currentColor">
        <rect x="1" y="1" width="8" height="6" rx="1" />
        <rect x="11" y="1" width="8" height="4" rx="1" opacity="0.7" />
        <rect x="1" y="9" width="8" height="4" rx="1" opacity="0.7" />
        <rect x="11" y="7" width="8" height="6" rx="1" />
      </svg>
    ),
  },
  {
    name: "Vertical Scroll",
    icon: (
      <svg className="w-4 h-3.5" viewBox="0 0 20 14" fill="currentColor">
        <rect x="3" y="0.5" width="14" height="3.5" rx="0.8" opacity="0.6" />
        <rect x="3" y="5.2" width="14" height="3.5" rx="0.8" />
        <rect x="3" y="10" width="14" height="3.5" rx="0.8" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Slideshow",
    icon: (
      <svg className="w-4 h-3.5" viewBox="0 0 20 14" fill="currentColor">
        <rect x="1" y="1" width="18" height="9.5" rx="1.2" />
        <circle cx="7" cy="12.5" r="1" opacity="0.5" />
        <circle cx="10" cy="12.5" r="1" />
        <circle cx="13" cy="12.5" r="1" opacity="0.5" />
      </svg>
    ),
  },
];

const TEMPLATES: DirectoryTemplate[] = [
  {
    id: "bloom",
    name: "Bloom",
    professions: ["Artists & Illustrators", "Graphic Designers"],
    gallery: "Slideshow",
    description:
      "An atmospheric botanical portfolio template built for digital artists, illustrators, and expressive visual storytellers.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full relative bg-[#1c231f] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80"
          alt="Bloom botanical artwork"
          fill
          className="object-cover brightness-75 saturate-75"
          sizes="400px"
        />
        {/* Sculpted mood overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161e1a]/80 via-[#2a2232]/25 to-transparent" />
        <span
          className={`relative z-10 font-serif tracking-[0.14em] text-[#e5d2aa] font-semibold drop-shadow-md ${
            isMobile ? "text-xl" : "text-2xl sm:text-3xl"
          }`}
        >
          BLOOM
        </span>
      </div>
    ),
  },
  {
    id: "reflex",
    name: "Reflex",
    professions: [
      "Photographers",
      "Fashion Designers & Stylists",
      "Models & Actors",
    ],
    gallery: "Tiled",
    description:
      "A sharp editorial masonry layout tailored for fashion photographers, stylists, models, and creative directors.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full bg-white text-neutral-900 p-2.5 flex flex-col gap-1.5 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between text-[7px] border-b border-neutral-100 pb-1">
          <span className="font-bold tracking-tight text-neutral-950">
            Julien Moreau
          </span>
          {!isMobile && (
            <div className="flex items-center gap-2 text-neutral-400">
              <span>Work</span>
              <span>Project</span>
              <span>Services</span>
              <span>Info</span>
              <span>Store</span>
            </div>
          )}
        </div>
        {/* Editorial Photo Mosaic */}
        <div
          className={`flex-1 grid gap-1.5 ${
            isMobile ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          <div className="relative rounded-xs overflow-hidden bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80"
              alt="Fashion Look 1"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div className="relative rounded-xs overflow-hidden bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80"
              alt="Fashion Look 2"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          {!isMobile && (
            <div className="relative rounded-xs overflow-hidden bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Fashion Look 3"
                fill
                className="object-cover grayscale contrast-125"
                sizes="200px"
              />
            </div>
          )}
          <div className="relative rounded-xs overflow-hidden bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
              alt="Fashion Look 4"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div className="relative rounded-xs overflow-hidden bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Fashion Look 5"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          {!isMobile && (
            <div className="relative rounded-xs overflow-hidden bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
                alt="Fashion Look 6"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    id: "symmetry",
    name: "Symmetry",
    professions: ["Architects & Interior Designers", "Engineers"],
    gallery: "Horizontal Scroll",
    description:
      "Clean geometric spacing and wide architectural image bands designed for modern studios and spatial designers.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full bg-white text-neutral-900 p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between text-[7px] text-neutral-500">
          <span className="font-semibold text-neutral-800">Symmetry 2.0</span>
          <span>Projects · Studio · Contact</span>
        </div>
        {/* Short intro */}
        <p className="text-[7px] text-neutral-500 leading-tight max-w-[210px] mx-auto text-center my-1">
          Every project begins with a clean line, a quiet proportion, and a space crafted for calm light.
        </p>
        {/* Two architectural showcases */}
        <div
          className={`grid gap-2 flex-1 ${
            isMobile ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <div className="relative rounded-xs overflow-hidden bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
              alt="Modern Glass House"
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
          {!isMobile && (
            <div className="relative rounded-xs overflow-hidden bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
                alt="Geometric Architecture"
                fill
                className="object-cover grayscale contrast-125"
                sizes="240px"
              />
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    id: "retreat-co",
    name: "Retreat & Co",
    professions: ["Architects & Interior Designers", "Graphic Designers"],
    gallery: "Vertical Scroll",
    description:
      "An inviting editorial showcase for interior architecture practices, hospitality spaces, and studio brands.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full bg-[#faf9f7] text-neutral-900 p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="text-center border-b border-neutral-100 pb-1">
          <div className="text-[8px] font-semibold text-neutral-900">
            Retreat & Co
          </div>
          <div className="text-[6px] text-neutral-400">
            Portfolio · Process · About · Contact
          </div>
        </div>
        {/* Tagline */}
        <p className="text-[8px] sm:text-[9px] text-neutral-700 text-center leading-snug max-w-[200px] mx-auto py-1">
          Transforming environments into inviting, unforgettable, and motivational spaces.
        </p>
        {/* 3 Columns Interior Spaces */}
        <div
          className={`grid gap-1.5 flex-1 ${
            isMobile ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          <div className="relative rounded-xs overflow-hidden bg-neutral-200 flex items-end p-1.5">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80"
              alt="Residential Design"
              fill
              className="object-cover"
              sizes="150px"
            />
            <span className="relative z-10 text-[6px] font-medium text-white bg-black/45 px-1 py-0.5 rounded-xs">
              Residential
            </span>
          </div>
          <div className="relative rounded-xs overflow-hidden bg-neutral-200 flex items-end p-1.5">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80"
              alt="Hospitality Design"
              fill
              className="object-cover"
              sizes="150px"
            />
            <span className="relative z-10 text-[6px] font-medium text-white bg-black/45 px-1 py-0.5 rounded-xs">
              Hospitality
            </span>
          </div>
          {!isMobile && (
            <div className="relative rounded-xs overflow-hidden bg-neutral-200 flex items-end p-1.5">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
                alt="Commercial Design"
                fill
                className="object-cover"
                sizes="150px"
              />
              <span className="relative z-10 text-[6px] font-medium text-white bg-black/45 px-1 py-0.5 rounded-xs">
                Commercial
              </span>
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    id: "amanda-smith",
    name: "Amanda Smith",
    professions: [
      "Artists & Illustrators",
      "Photographers",
      "Students & Graduates",
    ],
    gallery: "Tiled",
    description:
      "A split-sidebar showcase pairing minimalist index navigation with vivid full-bleed photography and textile art.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full bg-white text-neutral-900 flex overflow-hidden">
        {/* Left White Sidebar */}
        {!isMobile && (
          <div className="w-1/4 p-2.5 border-r border-neutral-100 flex flex-col justify-between text-[7px]">
            <div>
              <div className="font-bold uppercase tracking-tight leading-tight text-neutral-950">
                Amanda <br /> Smith
              </div>
              <div className="text-[6px] text-neutral-400 mt-1">
                Mixed Media Artist
              </div>
            </div>
            <div className="space-y-0.5 text-[6px] text-neutral-500">
              <div>Works</div>
              <div>Exhibitions</div>
              <div>Bio</div>
            </div>
          </div>
        )}
        {/* Right Vibrant Blue-Sky Textile Art Photo */}
        <div className="flex-1 relative bg-sky-500">
          <Image
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
            alt="Colorful textile and street art"
            fill
            className="object-cover"
            sizes="320px"
          />
          {isMobile && (
            <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded text-[8px] font-bold text-neutral-900">
              AMANDA SMITH
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    id: "hemetsberger",
    name: "Hemetsberger",
    professions: [
      "Graphic Designers",
      "UI/UX Designers",
      "Artists & Illustrators",
    ],
    gallery: "Tiled",
    description:
      "Bold editorial introduction statement paired with modular geometric artwork tiles for standout brand designers.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full bg-white text-neutral-900 p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between text-[7px] text-neutral-500">
          <span className="font-bold text-neutral-900">Hemetsberger</span>
          <span>Menu ≡</span>
        </div>
        {/* Intro Statement */}
        <p className="text-[8px] sm:text-[9px] font-medium text-neutral-900 leading-snug py-1">
          Hey I&apos;m Ottilie, currently a designer at FLAHN NEW YORK. I love to shape the look and feel of iconic brands.
        </p>
        {/* Colorful Geometric Bauhaus Grid */}
        <div
          className={`grid gap-1.5 flex-1 ${
            isMobile ? "grid-cols-2" : "grid-cols-12"
          }`}
        >
          {/* Left Dark Geometric Shapes */}
          <div
            className={`${
              isMobile ? "col-span-1" : "col-span-7"
            } bg-[#102d1d] rounded-xs p-2 flex items-center justify-center relative overflow-hidden`}
          >
            <div className="w-8 h-8 rounded-full bg-amber-400/90 -translate-x-2" />
            <div className="w-7 h-7 bg-pink-400/90 rotate-45 translate-x-1" />
            <div className="w-5 h-5 rounded-full bg-sky-400/90 -translate-y-2" />
          </div>
          {/* Right Optical B&W Pattern + Blue Tile */}
          <div
            className={`${
              isMobile ? "col-span-1" : "col-span-5"
            } grid grid-rows-2 gap-1.5`}
          >
            <div className="bg-neutral-950 rounded-xs p-1 grid grid-cols-4 gap-0.5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full ${
                    i % 2 === 0 ? "bg-white" : "bg-red-500"
                  }`}
                />
              ))}
            </div>
            <div className="bg-[#3867f5] rounded-xs flex items-center justify-center text-white text-[10px] font-bold">
              ✦ ✧ ✦
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "veloce",
    name: "Veloce",
    professions: ["Videographers & Filmmakers", "Photographers"],
    gallery: "Horizontal Scroll",
    description:
      "Cinematic widescreen showcase tailored for film directors, DOPs, motion designers, and production houses.",
    renderPreview: () => (
      <div className="w-full h-full bg-[#0d0d11] text-white p-3 flex flex-col justify-between overflow-hidden relative">
        <div className="flex items-center justify-between text-[7px] text-neutral-400 z-10">
          <span className="font-bold text-white tracking-widest uppercase">
            VELOCE REEL
          </span>
          <span>2026</span>
        </div>
        <div className="relative flex-1 my-1.5 rounded-sm overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
            alt="Cinema Frame"
            fill
            className="object-cover brightness-75"
            sizes="320px"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white text-[10px]">
              ▶
            </div>
          </div>
        </div>
        <div className="text-[7px] text-neutral-400 flex justify-between">
          <span>DIRECTED BY MARCO V.</span>
          <span>4K HDR</span>
        </div>
      </div>
    ),
  },
  {
    id: "lumina",
    name: "Lumina",
    professions: [
      "Photographers",
      "Fashion Designers & Stylists",
      "Models & Actors",
      "Videographers & Filmmakers",
    ],
    gallery: "Slideshow",
    description:
      "Timeless light-filled gallery built for editorial photographers, fashion stylists, models, and visual storytellers.",
    renderPreview: () => (
      <div className="w-full h-full bg-[#faf6f0] text-neutral-900 p-3 flex flex-col justify-between overflow-hidden">
        <div className="text-center text-[8px] font-serif italic text-neutral-700">
          Lumina Atelier
        </div>
        <div className="relative flex-1 my-1.5 rounded-sm overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
            alt="Editorial Gallery"
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>
        <div className="text-center text-[7px] text-neutral-500 tracking-widest uppercase">
          Destination Stories
        </div>
      </div>
    ),
  },
  {
    id: "monograph",
    name: "Monograph",
    professions: [
      "Students & Graduates",
      "UI/UX Designers",
      "Developers & IT",
    ],
    gallery: "Vertical Scroll",
    description:
      "Clean typographic editorial portfolio crafted for UX writers, students, graduates, and product thinkers.",
    renderPreview: () => (
      <div className="w-full h-full bg-[#f7f5f0] text-neutral-900 p-4 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[7px] text-neutral-400 border-b border-neutral-200 pb-1">
          <span className="font-serif font-bold text-neutral-900">MONOGRAPH</span>
          <span>ESSAYS · CASE STUDIES</span>
        </div>
        <div className="my-auto space-y-1.5">
          <h4 className="font-serif text-sm font-bold text-neutral-950 leading-tight">
            Systems that shape products &amp; culture.
          </h4>
          <p className="text-[7px] text-neutral-500 leading-relaxed">
            Selected UX research case studies, technical write-ups, and graduate capstone projects for modern teams.
          </p>
        </div>
        <div className="text-[7px] text-neutral-700 font-semibold">
          Read Featured Case Study →
        </div>
      </div>
    ),
  },
  {
    id: "kinetix-ux",
    name: "Kinetix UI",
    professions: [
      "UI/UX Designers",
      "Graphic Designers",
      "Developers & IT",
    ],
    gallery: "Tiled",
    description:
      "Modular bento case-study layout built for UI/UX designers, product strategists, and front-end builders.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full bg-[#0f1016] text-white p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[7px] text-neutral-400">
          <span className="font-semibold text-white">KINETIX.DESIGN</span>
          <span className="text-violet-400">● Open to Roles</span>
        </div>
        <div
          className={`grid gap-1.5 flex-1 my-1.5 ${
            isMobile ? "grid-cols-1" : "grid-cols-3"
          }`}
        >
          <div className="col-span-2 rounded-sm bg-gradient-to-br from-[#2a2146] to-[#171424] border border-white/10 p-2.5 flex flex-col justify-between">
            <span className="text-[6px] uppercase tracking-wider text-violet-300">
              Case Study · 01
            </span>
            <div className="text-[9px] font-semibold leading-tight">
              Design System &amp; Component Architecture
            </div>
          </div>
          {!isMobile && (
            <div className="rounded-sm bg-[#191b24] border border-white/10 p-2 flex flex-col justify-between">
              <div className="w-4 h-4 rounded-full bg-emerald-400/20 border border-emerald-400/50" />
              <div className="text-[7px] text-neutral-300 font-medium">
                +42% Task Flow
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between text-[6.5px] text-neutral-500">
          <span>FIGMA · TOKENS · PROTOTYPES</span>
          <span>2026</span>
        </div>
      </div>
    ),
  },
  {
    id: "terminal-ai",
    name: "Tensor Grid",
    professions: [
      "AI/Software engineers",
      "Developers & IT",
      "Students & Graduates",
    ],
    gallery: "Vertical Scroll",
    description:
      "Sleek technical showcase highlighting ML pipelines, system benchmarks, open-source repos, and developer docs.",
    renderPreview: () => (
      <div className="w-full h-full bg-[#0c1118] text-emerald-300 p-3 flex flex-col justify-between font-mono overflow-hidden">
        <div className="flex items-center justify-between text-[6.5px] text-slate-400 border-b border-slate-800 pb-1">
          <span>~/portfolio/inference</span>
          <span className="text-emerald-400">v2.4.0</span>
        </div>
        <div className="my-auto space-y-1.5">
          <div className="text-[9px] font-bold text-white leading-tight">
            &gt; Distributed LLM Router &amp; Eval Suite
          </div>
          <div className="flex gap-1.5 text-[6px]">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              PyTorch
            </span>
            <span className="px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
              TypeScript
            </span>
            <span className="px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">
              CUDA
            </span>
          </div>
        </div>
        <div className="flex justify-between text-[6.5px] text-slate-500">
          <span>GITHUB · PAPERS · DEMOS</span>
          <span>1.4k ★</span>
        </div>
      </div>
    ),
  },
  {
    id: "cadence-eng",
    name: "Cadence Lab",
    professions: [
      "Engineers",
      "AI/Software engineers",
      "Developers & IT",
    ],
    gallery: "Horizontal Scroll",
    description:
      "Structured blueprint layout tailored for mechanical, hardware, robotics, and systems engineers.",
    renderPreview: (isMobile) => (
      <div className="w-full h-full bg-[#f2f4f7] text-neutral-900 p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[7px] font-mono text-neutral-500">
          <span className="font-bold text-neutral-900">CADENCE // R&amp;D</span>
          <span>SPEC-09</span>
        </div>
        <div
          className={`grid gap-1.5 flex-1 my-1.5 ${
            isMobile ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <div className="bg-white border border-neutral-200 rounded-xs p-2 flex flex-col justify-between">
            <span className="text-[6px] font-mono text-blue-600 uppercase">
              Kinematics
            </span>
            <div className="text-[8px] font-semibold text-neutral-900">
              6-DOF Actuator Rig
            </div>
          </div>
          {!isMobile && (
            <div className="bg-[#182235] text-white rounded-xs p-2 flex flex-col justify-between">
              <span className="text-[6px] font-mono text-sky-300 uppercase">
                Telemetry
              </span>
              <div className="text-[8px] font-semibold">
                99.4% Loop Precision
              </div>
            </div>
          )}
        </div>
        <div className="text-[6.5px] font-mono text-neutral-500 flex justify-between">
          <span>CAD · EMBEDDED · CONTROL</span>
          <span>PATENTED</span>
        </div>
      </div>
    ),
  },
];

export default function TemplateDirectory() {
  const [selectedProfession, setSelectedProfession] = useState<string | null>(
    null
  );
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [deviceModes, setDeviceModes] = useState<Record<string, "desktop" | "mobile">>({});
  const [activeTemplate, setActiveTemplate] = useState<DirectoryTemplate | null>(null);

  const toggleAll = () => {
    setSelectedProfession(null);
    setSelectedGallery(null);
  };

  const toggleProfession = (prof: string) => {
    setSelectedProfession((prev) => (prev === prof ? null : prof));
  };

  const toggleGallery = (galleryName: string) => {
    setSelectedGallery((prev) => (prev === galleryName ? null : galleryName));
  };

  const setCardDevice = (id: string, mode: "desktop" | "mobile") => {
    setDeviceModes((prev) => ({ ...prev, [id]: mode }));
  };

  const filteredTemplates = TEMPLATES.filter((t) => {
    const matchesProf =
      !selectedProfession || t.professions.includes(selectedProfession);
    const matchesGallery =
      !selectedGallery || t.gallery === selectedGallery;
    return matchesProf && matchesGallery;
  });

  const isAllSelected = !selectedProfession && !selectedGallery;

  return (
    <div className="flex-1 flex flex-col lg:flex-row bg-[#1b1726] text-white min-h-[calc(100vh-76px)]">
      {/* Left Sidebar Filters */}
      <aside className="w-full lg:w-72 bg-[#16121f] border-b lg:border-b-0 lg:border-r border-[#2b2438] p-6 sm:p-7 flex-shrink-0">
        {/* All Templates Header Link */}
        <div className="pb-3.5 border-b border-[#2b2438]">
          <button
            type="button"
            onClick={toggleAll}
            className={`text-sm sm:text-[15px] font-semibold tracking-tight transition-colors cursor-pointer ${
              isAllSelected ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            All Templates
          </button>
        </div>

        {/* Professions List */}
        <div className="mt-6">
          <h2 className="text-[11px] font-bold tracking-[0.14em] text-neutral-400 uppercase mb-3.5">
            Professions
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-2.5 gap-x-4">
            {PROFESSIONS.map((prof) => {
              const active = selectedProfession === prof;
              return (
                <li key={prof}>
                  <button
                    type="button"
                    onClick={() => toggleProfession(prof)}
                    className={`flex items-center gap-2.5 text-left text-[13px] leading-snug transition-colors cursor-pointer ${
                      active
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        active ? "bg-[#8868fa]" : "bg-neutral-400"
                      }`}
                    />
                    <span>{prof}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Galleries Layout Filters */}
        <div className="mt-8 pt-6 border-t border-[#2b2438]">
          <h2 className="text-[11px] font-bold tracking-[0.14em] text-neutral-400 uppercase mb-4">
            Galleries
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-y-3.5 gap-x-3">
            {GALLERIES.map((gal) => {
              const active = selectedGallery === gal.name;
              return (
                <li key={gal.name}>
                  <button
                    type="button"
                    onClick={() => toggleGallery(gal.name)}
                    className={`flex items-center gap-3 text-[13px] transition-colors cursor-pointer ${
                      active
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span
                      className={active ? "text-[#8868fa]" : "text-neutral-400"}
                    >
                      {gal.icon}
                    </span>
                    <span>{gal.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Templates Grid */}
      <main className="flex-1 p-6 sm:p-10 lg:p-12">
        {filteredTemplates.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-center border border-dashed border-[#342c44] rounded-2xl p-8">
            <p className="text-neutral-300 text-base font-medium">
              No templates match that exact filter combination.
            </p>
            <button
              type="button"
              onClick={toggleAll}
              className="mt-4 px-5 py-2 rounded-full bg-[#7c5dfa] hover:bg-[#6a48ee] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Show All Templates
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-11">
            {filteredTemplates.map((template) => {
              const mode = deviceModes[template.id] || "desktop";
              const isMobile = mode === "mobile";

              return (
                <div key={template.id} className="flex flex-col group">
                  {/* Template Thumbnail Card */}
                  <div
                    onClick={() => setActiveTemplate(template)}
                    className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#14101c] border border-[#2c253d] shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-[#4b3e68] group-hover:-translate-y-0.5"
                  >
                    {isMobile ? (
                      <div className="h-[90%] aspect-[9/16] rounded-xl border-[3px] border-neutral-800 shadow-2xl overflow-hidden bg-white">
                        {template.renderPreview(true)}
                      </div>
                    ) : (
                      <div className="w-full h-full">
                        {template.renderPreview(false)}
                      </div>
                    )}
                  </div>

                  {/* Centered Desktop / Mobile Switcher Icons */}
                  <div className="flex items-center justify-center gap-2.5 mt-3.5">
                    {/* Desktop Monitor Icon */}
                    <button
                      type="button"
                      onClick={() => setCardDevice(template.id, "desktop")}
                      aria-label={`Desktop view for ${template.name}`}
                      className={`p-0.5 transition-colors cursor-pointer ${
                        !isMobile
                          ? "text-[#7c5dfa]"
                          : "text-neutral-500 hover:text-neutral-300"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                      </svg>
                    </button>

                    {/* Mobile Phone Icon */}
                    <button
                      type="button"
                      onClick={() => setCardDevice(template.id, "mobile")}
                      aria-label={`Mobile view for ${template.name}`}
                      className={`p-0.5 transition-colors cursor-pointer ${
                        isMobile
                          ? "text-[#7c5dfa]"
                          : "text-neutral-500 hover:text-neutral-300"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.4" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Card Footer: Template Name + Learn More */}
                  <div className="flex items-center justify-between mt-1.5">
                    <h3 className="text-lg font-normal text-white tracking-tight">
                      {template.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveTemplate(template)}
                      className="text-xs text-neutral-300 underline underline-offset-4 hover:text-white transition-colors cursor-pointer"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Learn More Template Modal */}
      {activeTemplate && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveTemplate(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#1a1625] border border-[#342c47] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] w-full bg-[#120e1a] border-b border-[#2b2438]">
              {activeTemplate.renderPreview(false)}
            </div>
            <div className="p-6 sm:p-7 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {activeTemplate.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activeTemplate.professions.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-0.5 rounded-full bg-[#29223a] text-purple-200 text-[11px] font-medium"
                      >
                        {p}
                      </span>
                    ))}
                    <span className="px-2.5 py-0.5 rounded-full bg-[#242f2a] text-emerald-300 text-[11px] font-medium">
                      {activeTemplate.gallery}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTemplate(null)}
                  className="text-neutral-400 hover:text-white text-xl leading-none p-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeTemplate.description}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTemplate(null)}
                  className="px-6 py-2.5 rounded-full bg-[#7c5dfa] hover:bg-[#6a48ee] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Use This Template
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTemplate(null)}
                  className="px-5 py-2.5 rounded-full bg-[#262035] hover:bg-[#322a45] text-neutral-200 text-sm font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

