"use client";

import React from "react";
import Link from "next/link";

function MiniEnvelopeIcon() {
  return (
    <span className="inline-flex items-center ml-1.5 align-middle" aria-hidden="true">
      <svg className="w-3.5 h-2.5" viewBox="0 0 16 12" fill="none">
        <rect width="16" height="12" rx="1.5" fill="#e5e1ee" />
        <path
          d="M1.5 2L8 7L14.5 2"
          stroke="#9d95b5"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function StickerCollage() {
  return (
    <div
      className="relative w-[280px] sm:w-[320px] h-[165px] sm:h-[180px] select-none ml-auto mt-8 md:mt-0"
      aria-hidden="true"
    >
      {/* 1. Gold Stretching Cat Sticker (bottom-left of pile) */}
      <div className="absolute bottom-1 left-0 z-10 -rotate-6 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-[0_3px_4px_rgba(0,0,0,0.18)]">
        <svg width="68" height="58" viewBox="0 0 72 60" fill="none">
          {/* White sticker border */}
          <path
            d="M10 49 C12 39 18 32 25 27 C24 22 25 18 28 16 C28 13 30 11 32 14 C34 11 36 13 36 16 C40 18 42 23 41 28 C47 33 52 40 55 47 C58 49 62 49 63 51 C62 54 55 54 50 51 C44 48 40 44 37 42 C33 44 26 48 18 52 C14 54 9 53 10 49 Z"
            fill="white"
            stroke="white"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="goldCatGrad" x1="10" y1="12" x2="60" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#a67c00" />
              <stop offset="100%" stopColor="#6b5103" />
            </linearGradient>
          </defs>
          <path
            d="M10 49 C12 39 18 32 25 27 C24 22 25 18 28 16 C28 13 30 11 32 14 C34 11 36 13 36 16 C40 18 42 23 41 28 C47 33 52 40 55 47 C58 49 62 49 63 51 C62 54 55 54 50 51 C44 48 40 44 37 42 C33 44 26 48 18 52 C14 54 9 53 10 49 Z"
            fill="url(#goldCatGrad)"
          />
          {/* Cat tail curl */}
          <path
            d="M23 30 C16 23 18 14 25 14"
            stroke="#b48a18"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* 2. Mini Retro Notebook / Magazine Sticker */}
      <div className="absolute bottom-[54px] left-[42px] z-20 -rotate-12 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <div className="bg-white p-[2px] rounded-md">
          <div className="w-7 h-8 rounded-[4px] bg-neutral-100 border border-neutral-300 flex flex-col items-center justify-between p-1">
            <div className="w-full h-1 bg-neutral-800 rounded-xs" />
            <span className="text-[11px] font-black text-red-600 leading-none">A</span>
            <div className="w-full space-y-0.5">
              <div className="w-full h-[1.5px] bg-neutral-400" />
              <div className="w-2/3 h-[1.5px] bg-neutral-400" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Dark Green # Hash Circle Sticker */}
      <div className="absolute top-[28px] left-[66px] z-20 -rotate-12 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <div className="w-12 h-12 rounded-full bg-[#1e402a] border-[3px] border-white flex items-center justify-center">
          <span className="text-2xl font-black text-[#c7ed45] leading-none">#</span>
        </div>
      </div>

      {/* 4. Royal Blue @ Speech Bubble Sticker */}
      <div className="absolute bottom-1 left-[68px] z-30 -rotate-6 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <svg width="62" height="58" viewBox="0 0 64 60" fill="none">
          <path
            d="M32 6C17.6 6 6 16.5 6 29.5C6 35.8 8.7 41.5 13.2 45.7L10 55L20.5 51.3C24.1 52.4 28 53 32 53C46.4 53 58 42.5 58 29.5C58 16.5 46.4 6 32 6Z"
            fill="#232de0"
            stroke="white"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <text
            x="32"
            y="38"
            textAnchor="middle"
            fill="white"
            fontSize="26"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            @
          </text>
        </svg>
      </div>

      {/* 5. Coral Heart Speech Bubble Sticker */}
      <div className="absolute top-[30px] left-[112px] z-30 rotate-6 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <svg width="56" height="54" viewBox="0 0 58 56" fill="none">
          <path
            d="M10 8H48C50.2 8 52 9.8 52 12V38C52 40.2 50.2 42 48 42H26L16 50V42H10C7.8 42 6 40.2 6 38V12C6 9.8 7.8 8 10 8Z"
            fill="#ed6a4c"
            stroke="white"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M29 32.5C29 32.5 21 27.3 21 21.8C21 19.2 23 17.5 25.3 17.5C27 17.5 28.4 18.5 29 19.8C29.6 18.5 31 17.5 32.7 17.5C35 17.5 37 19.2 37 21.8C37 27.3 29 32.5 29 32.5Z"
            stroke="white"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 6. Purple lowercase 'p' Sticker */}
      <div className="absolute top-0 right-[105px] z-20 -rotate-12 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <span
          className="text-4xl font-black text-[#4c42d9] leading-none block"
          style={{
            WebkitTextStroke: "3px white",
            paintOrder: "stroke fill",
          }}
        >
          p
        </span>
      </div>

      {/* 7. Dark Green 'C' Stamp Circle Sticker */}
      <div className="absolute top-[22px] right-[52px] z-20 rotate-6 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <div className="w-13 h-13 rounded-full bg-[#22472e] border-[3px] border-white flex items-center justify-center">
          <span className="text-2xl font-serif font-bold text-[#f4f1e6] leading-none">
            C
          </span>
        </div>
      </div>

      {/* 8. Pink 3D Piggy Bank Sticker */}
      <div className="absolute bottom-1 right-[68px] z-30 -rotate-3 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <svg width="62" height="54" viewBox="0 0 64 56" fill="none">
          {/* White Sticker Backing */}
          <path
            d="M16 28C16 18 24 12 34 12C43 12 50 17 52 24H56C57.5 24 58.5 25.5 58.5 27.5V31.5C58.5 33.5 57.5 35 56 35H52C50.5 39 48 42 44 44V49C44 50.5 42.8 51.5 41.2 51.5H37.5C36 51.5 35 50.5 35 49V45.5H27V49C27 50.5 26 51.5 24.5 51.5H20.8C19.2 51.5 18 50.5 18 49V42.5C16.6 39.2 16 34 16 28Z"
            fill="white"
            stroke="white"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <defs>
            <radialGradient id="piggyGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffc8bc" />
              <stop offset="70%" stopColor="#f4978e" />
              <stop offset="100%" stopColor="#e07a70" />
            </radialGradient>
          </defs>
          {/* Ear */}
          <path d="M40 13L45 7L49 14Z" fill="#e58379" />
          {/* Body */}
          <path
            d="M16 28C16 18 24 12 34 12C43 12 50 17 52 24H56C57.5 24 58.5 25.5 58.5 27.5V31.5C58.5 33.5 57.5 35 56 35H52C50.5 39 48 42 44 44V49C44 50.5 42.8 51.5 41.2 51.5H37.5C36 51.5 35 50.5 35 49V45.5H27V49C27 50.5 26 51.5 24.5 51.5H20.8C19.2 51.5 18 50.5 18 49V42.5C16.6 39.2 16 34 16 28Z"
            fill="url(#piggyGrad)"
          />
          {/* Coin Slot */}
          <rect x="29" y="14.5" width="9" height="2" rx="1" fill="#7c2d26" />
          {/* Eye */}
          <circle cx="47" cy="24" r="1.6" fill="#3a1c1a" />
          {/* Tail */}
          <path d="M16 26C12 24 12 20 15 20" stroke="#e58379" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* 9. Classic Pixel Hand Cursor Sticker (top right) */}
      <div className="absolute top-[12px] right-[4px] z-30 rotate-12 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-md">
        <svg width="46" height="52" viewBox="0 0 24 28" fill="none">
          {/* Outer pixel outline */}
          <path
            d="M9 1H12V10H14V8H17V10H19V9H22V12H23V20H22V23H20V26H7V23H5V20H3V17H1V14H4V13H7V15H9V1Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 2H11V11H13V9H16V11H18V10H21V13H22V20H21V23H19V25H8V22H6V19H4V16H2V14H5V15H7V17H9V2Z"
            fill="white"
            stroke="#111111"
            strokeWidth="1.6"
            strokeLinejoin="miter"
          />
          <line x1="13" y1="11" x2="13" y2="16" stroke="#111111" strokeWidth="1.4" />
          <line x1="17" y1="11" x2="17" y2="16" stroke="#111111" strokeWidth="1.4" />
        </svg>
      </div>

      {/* 10. Mind-Blown Emoji Sticker (bottom right) */}
      <div className="absolute bottom-0 right-[6px] z-40 rotate-6 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-pointer drop-shadow-[0_3px_5px_rgba(0,0,0,0.2)]">
        <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center p-0.5">
          <span className="text-[42px] leading-none" role="img" aria-label="mind blown">
            🤯
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const columns = [
    {
      title: "Meet Copyfolio",
      links: [
        { label: "Build a portfolio", href: "#" },
        { label: "Create a website", href: "#" },
        { label: "Write a blog", href: "#" },
        { label: "Define your brand", href: "#" },
        { label: "For Copywriters", href: "#" },
        { label: "For Social Media Marketers", href: "#" },
        { label: "For UGC Creators", href: "#" },
        { label: "For Digital Marketers", href: "#" },
        { label: "Made with Copyfolio", href: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "Sign Up", href: "#" },
        { label: "Log In", href: "#" },
        { label: "Pricing", href: "#pricing" },
        { label: "Blog", href: "#" },
        { label: "Affiliate Program", href: "#", arrow: true },
        { label: "Support", href: "#support", envelope: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Imprint", href: "#" },
        { label: "Contact Us", href: "#contact", envelope: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "The best social media portfolios", href: "#" },
        { label: "Marketing portfolio examples", href: "#" },
        { label: "Your copywriting portfolio guide", href: "#" },
        { label: "Your UGC portfolio inspo", href: "#" },
        { label: "Freelancer personal brands", href: "#" },
        { label: "What’s your USP?", href: "#" },
        { label: "Tone of voice examples", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-20 pt-6">
      <div className="bg-[#fbfaf5] rounded-[28px] sm:rounded-[36px] border border-neutral-200/80 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xs">
        {/* Top 4-Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-serif font-bold text-lg sm:text-[19px] text-[#1c3926] tracking-tight mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center text-[13px] sm:text-sm text-neutral-700 hover:text-neutral-950 transition-colors"
                    >
                      <span>{link.label}</span>
                      {link.arrow && (
                        <span className="ml-1 text-xs text-neutral-500">↗</span>
                      )}
                      {link.envelope && <MiniEnvelopeIcon />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row: Brand / Socials (Left) + Sticker Collage (Right) */}
        <div className="mt-14 sm:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8 relative">
          {/* Left: Socials, Logo & Copyright */}
          <div className="flex flex-col items-start z-10">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3.5 text-[#98958d] mb-5">
              {/* TikTok */}
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="hover:text-neutral-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="hover:text-neutral-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="hover:text-neutral-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="hover:text-neutral-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.18-5.01 1.18-5.01s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.42 0 .86-.55 2.15-.84 3.35-.24 1 .5 1.81 1.48 1.81 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.18-4.08-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.78.75 2.28.08.1.09.19.07.29-.08.31-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.26-.59-2.05-2.43-2.05-3.91 0-3.18 2.31-6.1 6.66-6.1 3.5 0 6.22 2.49 6.22 5.82 0 3.47-2.19 6.27-5.23 6.27-1.02 0-1.98-.53-2.31-1.16l-.63 2.39c-.23.87-.84 1.97-1.25 2.64.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
            </div>

            {/* Copyfolio Brand Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-[#e8674e] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6a5 5 0 1 0 0 10" />
                  <circle cx="15" cy="12" r="2.5" />
                  <path d="M17.5 12v2.5" />
                </svg>
              </div>
              <span className="text-[21px] font-bold tracking-tight text-neutral-950">
                copyfolio
              </span>
            </Link>

            {/* Copyright */}
            <p className="text-xs text-[#9c9a92] mt-3 font-normal">
              © 2013 - 2025 UXfolio LLC
            </p>
          </div>

          {/* Right: Playful Sticker Collage */}
          <StickerCollage />
        </div>
      </div>
    </footer>
  );
}
