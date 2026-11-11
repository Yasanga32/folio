import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const FEATURE_CARDS = [
  {
    title: "Online Portfolio",
    description:
      "Showcase your work effortlessly with a professional portfolio website — no coding required.",
  },
  {
    title: "Client Management",
    description:
      "Grow your business with branded client galleries, seamless file transfers, and secure contracts.",
  },
  {
    title: "E-Commerce",
    description:
      "Sell products, services, and digital downloads. Commission free.",
  },
];

export default function Home3Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#120d1b] text-white relative overflow-hidden">
      {/* Dark Purple Atmospheric Wavy Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      >
        {/* Soft ambient violet glow */}
        <div className="absolute -top-24 right-[-10%] w-[680px] h-[520px] rounded-full bg-[#38265c]/30 blur-[120px]" />
        <div className="absolute top-[22%] left-[12%] w-[460px] h-[360px] rounded-full bg-[#2b1e48]/25 blur-[110px]" />

        {/* Sweeping satin wave layers */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 820"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="home3WaveTop"
              x1="280"
              y1="0"
              x2="1380"
              y2="460"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#3b2b5e" stopOpacity="0.34" />
              <stop offset="55%" stopColor="#261b3d" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#120d1b" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="home3WaveBottom"
              x1="120"
              y1="660"
              x2="1440"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1b142a" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#352555" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#46326e" stopOpacity="0.24" />
            </linearGradient>

            <linearGradient
              id="home3WaveSheen"
              x1="360"
              y1="140"
              x2="1280"
              y2="520"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#5a418f" stopOpacity="0" />
              <stop offset="48%" stopColor="#4e397a" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#281c40" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Upper sweeping wave ribbon */}
          <path
            d="M320 -20C430 140 620 265 890 250C1140 236 1310 130 1460 15V390C1320 420 1120 435 880 410C560 375 350 215 190 -20H320Z"
            fill="url(#home3WaveTop)"
          />

          {/* Lower curving fold sweeping up behind the hero showcase */}
          <path
            d="M0 780C180 730 330 590 540 480C760 365 1080 390 1460 220V840H0V780Z"
            fill="url(#home3WaveBottom)"
          />

          {/* Soft highlight ribbon along the curve */}
          <path
            d="M170 675C340 605 460 465 690 425C950 380 1200 355 1460 185V260C1220 400 960 445 705 480C495 508 360 635 170 700V675Z"
            fill="url(#home3WaveSheen)"
          />
        </svg>

        {/* Bottom fade into deep plum base */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#120d1b] via-[#120d1b]/70 to-transparent" />
      </div>

      {/* Navigation Header */}
      <Navbar dark />

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full max-w-[1060px] mx-auto px-6 sm:px-10 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 flex flex-col justify-between gap-14 sm:gap-16 lg:gap-20">
        {/* Top Hero Split Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left Hero Copy & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Mint Promo Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ccf4cb] text-[#142614] px-4 py-1.5 text-[11px] sm:text-xs shadow-sm mb-7">
              <span className="italic font-serif font-medium">50% off</span>
              <span className="font-semibold uppercase tracking-[0.06em]">
                CYBER NOVEMBER
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] leading-[1.06] tracking-[-0.025em]">
              <span className="block font-normal text-white">The Portfolio</span>
              <span className="block font-normal text-white">Builder for</span>
              <span className="block font-serif italic font-normal text-[#7f63ce] mt-0.5">
                Photographers
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[14.5px] sm:text-[15.5px] leading-[1.55] text-[#d6d1e0] max-w-[300px]">
              With all the tools you need to support your creative business.
            </p>

            {/* Primary CTA + Micro-copy */}
            <div className="mt-8 inline-flex flex-col items-center">
              <Link
                href="/templates"
                className="group inline-flex items-center justify-center gap-6 rounded-full bg-[#e8ef6b] hover:bg-[#f0f77d] text-[#17161c] px-8 sm:px-9 py-3.5 sm:py-4 min-w-[232px] shadow-[0_14px_34px_rgba(232,239,107,0.16)] active:scale-[0.98] transition-all duration-200"
              >
                <span className="flex flex-col items-center leading-[1.2] text-[15px] font-medium tracking-tight">
                  <span>Start Building</span>
                  <span>Today</span>
                </span>
                <svg
                  className="w-4 h-4 text-[#17161c] group-hover:translate-x-0.5 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10" />
                  <path d="M9.5 4.5L13 8l-3.5 3.5" />
                </svg>
              </Link>
              <p className="mt-3 text-[11px] font-normal tracking-wide text-[#d4cfe0]">
                No credit card required.
              </p>
            </div>
          </div>

          {/* Right 3D Tilted Portfolio Mockup */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] pr-2 sm:pr-4">
              {/* Angled Portfolio Frame */}
              <div className="relative w-full aspect-[16/10.5] bg-white shadow-[0_32px_70px_rgba(0,0,0,0.68)] [transform:perspective(1050px)_rotateY(-8deg)_rotateX(1deg)] md:[transform:perspective(1100px)_rotateY(-18deg)_rotateX(1.5deg)] hover:[transform:perspective(1100px)_rotateY(-12deg)_rotateX(1deg)] transition-transform duration-500 ease-out overflow-hidden flex border border-white/15">
                {/* Left White Minimalist Sidebar */}
                <div className="w-[16%] sm:w-[15%] bg-white px-2 sm:px-3 py-4 sm:py-5 flex flex-col justify-between text-neutral-900 select-none shrink-0">
                  <div>
                    <div className="text-[6.5px] sm:text-[7.5px] font-bold tracking-[0.07em] uppercase leading-[1.15] text-neutral-950">
                      LOUIS
                      <br />
                      KERCKHOF
                    </div>
                    <ul className="mt-4 space-y-1 text-[5px] sm:text-[5.5px] tracking-wider uppercase text-neutral-500">
                      <li className="text-neutral-900 font-semibold">
                        Editorial
                      </li>
                      <li>Fashion Week</li>
                      <li>Portraits</li>
                      <li>Archive</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </div>

                  <div className="text-[4.5px] sm:text-[5px] uppercase tracking-widest text-neutral-400">
                    Paris / NYC
                  </div>
                </div>

                {/* Editorial Vertical Photographs */}
                <div className="flex-1 flex gap-[5px] sm:gap-[6px] bg-white pb-1.5 pr-1.5">
                  {/* B&W Portrait Panel */}
                  <div className="relative w-[54%] h-full bg-neutral-950 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                      alt="Monochrome editorial portrait"
                      fill
                      priority
                      sizes="(max-width: 1024px) 55vw, 300px"
                      className="object-cover object-top grayscale contrast-125 brightness-95"
                    />
                  </div>

                  {/* Street Fashion Trench Panel */}
                  <div className="relative w-[46%] h-full bg-neutral-200 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
                      alt="Fashion week architectural editorial"
                      fill
                      priority
                      sizes="(max-width: 1024px) 45vw, 250px"
                      className="object-cover object-top contrast-110 saturate-75"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Portfolio Caption Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 right-0 z-20 bg-[#0b0911]/80 backdrop-blur-md px-4 py-3 border border-white/10 shadow-2xl max-w-[210px] sm:max-w-[235px]">
                <p className="text-[11px] sm:text-xs font-semibold text-white tracking-tight">
                  Louis Kerckhof
                </p>
                <p className="text-[10px] sm:text-[11px] text-neutral-300 leading-snug break-all mt-0.5">
                  www.louiskerckhof.com/fashion-week
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom 3 Feature Cards Row */}
        <section
          aria-label="Key platform capabilities"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-[#211a2e]/85 backdrop-blur-md border border-[#332948] hover:border-[#6f57b8]/65 hover:bg-[#271f36]/90 px-7 py-7 sm:px-8 sm:py-8 text-center transition-all duration-300"
            >
              <h2 className="text-[17px] sm:text-[18px] font-normal text-[#7f64c8] tracking-tight mb-3">
                {card.title}
              </h2>
              <p className="text-[13.5px] leading-[1.55] text-[#e1dce9]">
                {card.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
