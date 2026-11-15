"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

/* --- Tech Icons (SVGs matching user reference) --- */

function Html5Icon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4 3l1.8 18 6.2 1.7 6.2-1.7L20 3H4z" fill="#E34F26" />
      <path d="M12 4.6v16.3l4.7-1.3 1.4-15H12z" fill="#EF652A" />
      <path
        d="M12 8.4H7.6l.3 3.3h4.1V8.4zm0 6.1l-2.4-.6-.2-1.7H7.7l.3 3.3 4 1.1v-2.1z"
        fill="#ffffff"
      />
      <path
        d="M12 8.4v3.3h3.8l-.4 3.9-3.4.9v2.1l4.9-1.4.6-6.7-.1-2.1H12z"
        fill="#EBEBEB"
      />
    </svg>
  );
}

function Css3Icon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4 3l1.8 18 6.2 1.7 6.2-1.7L20 3H4z" fill="#1572B6" />
      <path d="M12 4.6v16.3l4.7-1.3 1.4-15H12z" fill="#33A9DC" />
      <path
        d="M12 8.4H7.6l.3 3.3h4.1V8.4zm0 6.1l-2.4-.6-.2-1.7H7.7l.3 3.3 4 1.1v-2.1z"
        fill="#ffffff"
      />
      <path
        d="M12 8.4v3.3h3.8l-.4 3.9-3.4.9v2.1l4.9-1.4.6-6.7-.1-2.1H12z"
        fill="#EBEBEB"
      />
    </svg>
  );
}

function JavaScriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7 17.5c0 1.4.9 2.2 2.3 2.2 1.3 0 2.2-.7 2.2-2.1V10h-2.1v7.4c0 .5-.3.8-.8.8s-.8-.3-.8-.8v-3.2H5.6v3.3zm7.6-3.8c.8.5 1.5.8 2.2.8.8 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.5-1.3l-.7-.3c-1.6-.7-2.3-1.6-2.3-2.9 0-1.6 1.3-2.8 3.3-2.8 1.4 0 2.4.4 3.2 1l-1 1.7c-.7-.5-1.4-.7-2.1-.7-.7 0-1.1.4-1.1.8 0 .5.4.8 1.4 1.2l.7.3c1.8.7 2.5 1.7 2.5 3 0 1.8-1.4 2.9-3.5 2.9-1.6 0-2.8-.5-3.6-1.3l1.4-1.8z"
        fill="#000000"
      />
    </svg>
  );
}

function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextjsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className}>
      <circle cx="90" cy="90" fill="#000000" r="90" />
      <circle cx="90" cy="90" r="88" stroke="#333333" strokeWidth="3" fill="none" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="#ffffff"
      />
      <rect fill="#ffffff" height="72" width="12" x="114" y="54" />
    </svg>
  );
}

function ReduxIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="3" fill="#764ABC" />
      <path
        d="M12 4.5C7.8 4.5 4.5 7.8 4.5 12S7.8 19.5 12 19.5s7.5-3.3 7.5-7.5"
        stroke="#764ABC"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 8.5C18.5 10 20 12.5 19.5 15.5"
        stroke="#9B72CF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="19.5" cy="15.5" r="1.5" fill="#764ABC" />
      <circle cx="4.5" cy="12" r="1.5" fill="#764ABC" />
      <circle cx="12" cy="4.5" r="1.5" fill="#764ABC" />
    </svg>
  );
}

function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1.37.34 2.35 1.34 3.43 2.44 1.77 1.8 3.87 3.96 8.37 3.96 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-1.37-.34-2.35-1.34-3.43-2.44-1.77-1.8-3.87-3.96-8.37-3.96zm-8.4 9.6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1.37.34 2.35 1.34 3.43 2.44 1.77 1.8 3.87 3.96 8.37 3.96 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-1.37-.34-2.35-1.34-3.43-2.44-1.77-1.8-3.87-3.96-8.37-3.96z"
        fill="#38BDF8"
        transform="scale(0.7) translate(5, 4)"
      />
    </svg>
  );
}

function SassIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#CF649A" fillOpacity="0.18" />
      <path
        d="M7 16.5c-.8-.5-1.2-1.3-1.2-2.3 0-1.8 1.6-2.6 3.2-3.1 1.4-.4 2.3-.7 2.3-1.3 0-.5-.4-.9-1.2-.9-.8 0-1.5.3-2.1.8l-.9-1.3c.9-.7 2-1.1 3.2-1.1 1.9 0 3.2 1 3.2 2.6 0 1.8-1.6 2.5-3.3 3-.9.3-2.1.6-2.1 1.3 0 .5.5.9 1.3.9.9 0 1.8-.4 2.4-1.1l.9 1.2c-.8 1-2 1.5-3.4 1.5-.9 0-1.7-.2-2.3-.6z"
        fill="#CF649A"
      />
      <circle cx="17.5" cy="8.5" r="1.5" fill="#CF649A" />
      <path
        d="M17 11.5c-1 0-1.8.8-1.8 1.8v3.2h1.6v-2.8c0-.4.3-.7.7-.7s.7.3.7.7v2.8h1.6v-3.2c0-1-.8-1.8-1.8-1.8z"
        fill="#CF649A"
      />
    </svg>
  );
}

function GsapIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#0AE448" fillOpacity="0.15" />
      {/* GSAP Green superhero silhouette / icon */}
      <circle cx="12" cy="7.5" r="3" fill="#0AE448" />
      <path
        d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="#0AE448"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M9 14l3-3 3 3"
        stroke="#0AE448"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TypeScriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M12.2 11.2h-6.8v2h2.2v6h2.4v-6h2.2v-2zm6 2.2c-.6-.4-1.3-.6-2-.6-.8 0-1.3.4-1.3.9 0 .6.5.9 1.5 1.3l.7.3c1.7.7 2.4 1.6 2.4 2.9 0 1.9-1.5 3-3.6 3-1.6 0-2.8-.5-3.7-1.3l1.3-1.8c.7.6 1.5.9 2.3.9.8 0 1.3-.4 1.3-.9 0-.6-.5-.9-1.5-1.3l-.7-.3c-1.7-.7-2.4-1.6-2.4-2.9 0-1.8 1.4-2.9 3.4-2.9 1.4 0 2.5.4 3.3 1l-1 1.7z"
        fill="#ffffff"
      />
    </svg>
  );
}

function NetlifyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#00C7B7" fillOpacity="0.12" />
      <path
        d="M12 3l-7 7 7 7 7-7-7-7z"
        stroke="#00C7B7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" fill="#00C7B7" />
      <circle cx="8" cy="14" r="1.2" fill="#00C7B7" />
      <circle cx="16" cy="14" r="1.2" fill="#00C7B7" />
    </svg>
  );
}

function GitIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="4" fill="#F05032" fillOpacity="0.15" />
      <path
        d="M18.8 10.6l-5.4-5.4a1.8 1.8 0 0 0-2.6 0l-5.4 5.4a1.8 1.8 0 0 0 0 2.6l5.4 5.4c.7.7 1.9.7 2.6 0l5.4-5.4c.7-.7.7-1.9 0-2.6z"
        fill="#F05032"
      />
      <circle cx="12" cy="12" r="1.4" fill="#ffffff" />
      <circle cx="9.8" cy="14.2" r="1.4" fill="#ffffff" />
      <circle cx="14.2" cy="9.8" r="1.4" fill="#ffffff" />
      <path
        d="M9.8 14.2l2.2-2.2m0 0l2.2-2.2"
        stroke="#ffffff"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* --- Hero Marquee Programming Logos (Moving to Left) --- */
const HERO_MARQUEE_ITEMS = [
  { name: "GSAP", icon: GsapIcon, color: "#0AE448" },
  { name: "Next.js", icon: NextjsIcon, color: "#ffffff" },
  { name: "JavaScript", icon: JavaScriptIcon, color: "#F7DF1E" },
  { name: "React", icon: ReactIcon, color: "#61DAFB" },
  { name: "Redux", icon: ReduxIcon, color: "#764ABC" },
  { name: "TypeScript", icon: TypeScriptIcon, color: "#3178C6" },
  { name: "TailwindCSS", icon: TailwindIcon, color: "#38BDF8" },
  { name: "HTML5", icon: Html5Icon, color: "#E34F26" },
  { name: "CSS3", icon: Css3Icon, color: "#1572B6" },
  { name: "Sass", icon: SassIcon, color: "#CF649A" },
  { name: "Git", icon: GitIcon, color: "#F05032" },
  { name: "Netlify", icon: NetlifyIcon, color: "#00C7B7" },
];

/* --- Tools I Build With Section Pills --- */
const TECH_STACK_ROW_1 = [
  { name: "HTML5", icon: Html5Icon },
  { name: "CSS3", icon: Css3Icon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Nextjs", icon: NextjsIcon },
];

const TECH_STACK_ROW_2 = [
  { name: "Redux", icon: ReduxIcon },
  { name: "TailwindCSS", icon: TailwindIcon },
  { name: "Sass", icon: SassIcon },
  { name: "GSAP", icon: GsapIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
];

const TECH_STACK_ROW_3 = [
  { name: "Netlify", icon: NetlifyIcon },
  { name: "Git", icon: GitIcon },
];

/* --- Projects I've Shipped (matching user reference screenshot) --- */
const SHIPPED_PROJECTS = [
  {
    id: "clouddesk",
    title: "CloudDesk",
    description:
      "A modern dashboard interface designed to help teams manage tasks, track progress, and collaborate seamlessly in real time.",
    image: "/images/developers/project-clouddesk.jpg",
    alt: "CloudDesk 3D tablet dashboard mockup",
    sourceUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "matcha-haven",
    title: "Matcha Haven",
    description:
      "A clean, calming website for a matcha brand, designed to showcase products, tell the brand story, and create a smooth, delightful shopping experience.",
    image: "/images/developers/project-matcha.jpg",
    alt: "Matcha Haven glass mockup with iced latte",
    sourceUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "finova",
    title: "Finova",
    description:
      "A sleek fintech platform designed to simplify payments, track expenses, and give users clear insights into their financial activity.",
    image: "/images/developers/project-finova.jpg",
    alt: "Finova paper design brochure mockup with blue cone",
    sourceUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "eventra",
    title: "Eventra",
    description:
      "A modern event discovery platform that helps users find, explore, buy tickets, and stay updated on events happening around them.",
    image: "/images/developers/project-eventra.jpg",
    alt: "Eventra dual iPhone mobile event ticket app mockup",
    sourceUrl: "https://github.com",
    liveUrl: "#",
  },
];

/* --- Where I've Worked (matching user reference screenshot) --- */
const WORK_EXPERIENCES = [
  {
    role: "Frontend Engineer — Paystack",
    period: "2023 — Present",
    bullets: [
      "Built and maintained responsive user interfaces using modern JavaScript frameworks",
      "Collaborated with designers to deliver clean, user-focused experiences",
      "Optimized performance and improved page load times across key products",
    ],
  },
  {
    role: "Frontend Engineer — Hubtel",
    period: "2022 — 2023",
    bullets: [
      "Built and maintained responsive user interfaces using modern JavaScript frameworks",
      "Collaborated with designers to deliver clean, user-focused experiences",
      "Optimized performance and improved page load times across key products",
    ],
  },
  {
    role: "UI Engineer — Meta",
    period: "2021 — 2022",
    bullets: [
      "Built and maintained responsive user interfaces using modern JavaScript frameworks",
      "Collaborated with designers to deliver clean, user-focused experiences",
      "Optimized performance and improved page load times across key products",
    ],
  },
  {
    role: "Frontend Lead — Google",
    period: "2020 — 2021",
    bullets: [
      "Built and maintained responsive user interfaces using modern JavaScript frameworks",
      "Collaborated with designers to deliver clean, user-focused experiences",
      "Optimized performance and improved page load times across key products",
    ],
  },
];

/* --- Testimonials --- */
const DEVELOPER_TESTIMONIALS = [
  {
    quote:
      "Snilloc is the rare frontend engineer who bridges the gap between high-level architectural performance and pixel-perfect design sensibilities seamlessly.",
    author: "Elena Rostova",
    role: "VP of Engineering at LayerZero Labs",
  },
  {
    quote:
      "Our web app load time dropped by 64% after Snilloc re-architected our client state and component hydration pipeline. An absolute game changer.",
    author: "Marcus Vance",
    role: "Product Lead at Veloce Digital",
  },
];

export default function DeveloperTemplateOneShowcase() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedExpIndex, setExpandedExpIndex] = useState<number | null>(0);
  const [downloadingCV, setDownloadingCV] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("snilloc@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-100 selection:bg-neutral-100 selection:text-neutral-900 relative font-sans overflow-x-hidden">
      {/* Global Embedded Styles for Infinite Marquee Motion to the Left */}
      <style jsx global>{`
        @keyframes devMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: devMarqueeLeft 22s linear infinite;
        }
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Workspace Navbar */}
      <div className="bg-[#09090b] border-b border-[#1c1c24]">
        <Navbar dark={true} />
      </div>

      {/* Developer Sub-Header / Portfolio Navigation (matches reference screenshot) */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#09090b]/85 border-b border-[#181820]/80 transition-all">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
          {/* Left: Avatar + Name */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group transition-transform active:scale-95"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20 shadow-xs bg-[#1a1a22]">
              <Image
                src="/images/developers/hero-portrait.jpg"
                alt="Snilloc Hemingson"
                fill
                sizes="32px"
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="text-sm font-semibold text-white tracking-tight group-hover:text-neutral-300 transition-colors">
              Snilloc Hemingson
            </span>
          </Link>

          {/* Right: Nav Links + Contact Me CTA */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-neutral-400">
              <a
                href="#skills"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Experience
              </a>
              <a
                href="#testimonials"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Testimonials
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-neutral-950 font-semibold text-xs tracking-tight hover:bg-neutral-200 transition-all active:scale-95 shadow-sm"
            >
              <span>Contact Me</span>
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Hero Section (2-Column Layout matching reference) */}
      <section
        id="hero"
        className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 pb-20 sm:pt-20 sm:pb-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bio & Left-Moving Tech Logos */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131317] border border-[#23232c] text-xs font-medium text-neutral-300 shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08]">
              Frontend Engineer.
            </h1>

            {/* Bio paragraph */}
            <p className="mt-5 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Hi, I&apos;m Snilloc Hemingson, a frontend engineer in the United
              States building fast, accessible web experiences. I focus on
              modern JavaScript frameworks and clean, scalable interfaces.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm transition-all active:scale-95 shadow-sm"
              >
                See my works
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-all active:scale-95 shadow-md"
              >
                <span>Contact Me</span>
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Animated Marquee: Programming Languages Moving to the Left */}
            <div className="w-full mt-10">
              <div className="relative overflow-hidden w-full max-w-lg [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="animate-marquee-left flex gap-3.5 py-1">
                  {/* First set of cards */}
                  {HERO_MARQUEE_ITEMS.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={`hero-logo-1-${idx}`}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#131317] border border-[#22222a] hover:border-neutral-500 hover:bg-[#1a1a22] flex items-center justify-center p-3 shadow-md transition-all hover:scale-105 group shrink-0"
                        title={item.name}
                      >
                        <IconComp className="w-7 h-7 transition-transform group-hover:scale-110" />
                      </div>
                    );
                  })}
                  {/* Second duplicate set for seamless continuous leftward scroll */}
                  {HERO_MARQUEE_ITEMS.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={`hero-logo-2-${idx}`}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#131317] border border-[#22222a] hover:border-neutral-500 hover:bg-[#1a1a22] flex items-center justify-center p-3 shadow-md transition-all hover:scale-105 group shrink-0"
                        title={item.name}
                      >
                        <IconComp className="w-7 h-7 transition-transform group-hover:scale-110" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-[32px] overflow-hidden bg-gradient-to-b from-[#181820] to-[#0d0d12] border border-[#23232c] shadow-2xl aspect-[4/5] p-3 sm:p-4 group">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#121217]">
                <Image
                  src="/images/developers/hero-portrait.jpg"
                  alt="Snilloc Hemingson - Frontend Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle vignette / inner shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section ("Tools I Build With" - matches reference screenshot) */}
      <section
        id="skills"
        className="py-20 sm:py-28 border-t border-[#181820] bg-[#0c0c0e]/60 relative"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center">
          {/* Small Top Label */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#131317] border border-[#23232c] text-[10.5px] font-mono uppercase tracking-[0.16em] text-neutral-400 shadow-xs mb-3">
            <span>TECH STACK</span>
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tools I Build With
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            A curated set of technologies I rely on to build modern web experiences
          </p>

          {/* Tech Stack Pills Cloud (3 neat rows matching screenshot) */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3.5 sm:gap-4 w-full">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
              {TECH_STACK_ROW_1.map((tech) => {
                const IconComp = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#131317] border border-[#23232c] hover:border-neutral-500 hover:bg-[#1a1a22] text-neutral-200 text-xs sm:text-sm font-medium transition-all shadow-xs cursor-default hover:scale-105"
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
              {TECH_STACK_ROW_2.map((tech) => {
                const IconComp = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#131317] border border-[#23232c] hover:border-neutral-500 hover:bg-[#1a1a22] text-neutral-200 text-xs sm:text-sm font-medium transition-all shadow-xs cursor-default hover:scale-105"
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
              {TECH_STACK_ROW_3.map((tech) => {
                const IconComp = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#131317] border border-[#23232c] hover:border-neutral-500 hover:bg-[#1a1a22] text-neutral-200 text-xs sm:text-sm font-medium transition-all shadow-xs cursor-default hover:scale-105"
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects I've Shipped Section (matches reference screenshot) */}
      <section
        id="projects"
        className="py-20 sm:py-28 border-t border-[#181820] max-w-5xl mx-auto px-6 sm:px-10 lg:px-12"
      >
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#131317] border border-[#23232c] text-[10.5px] font-mono uppercase tracking-[0.16em] text-neutral-400 shadow-xs mb-3">
            <span>PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects I&apos;ve Shipped
          </h2>
          <p className="mt-2 text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            A range of projects demonstrating how I turn ideas into functional experiences
          </p>
        </div>

        {/* 2x2 Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {SHIPPED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-[28px] bg-[#121217] border border-[#22222a] p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-500 hover:bg-[#15151c] transition-all group shadow-md"
            >
              <div>
                {/* Card Mockup Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#181820]">
                  <Image
                    src={proj.image}
                    alt={proj.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-5 tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed min-h-[44px]">
                  {proj.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center gap-2.5">
                <a
                  href={proj.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  Source Code
                </a>
                <a
                  href={proj.liveUrl}
                  className="px-4 py-1.5 rounded-full bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Live Website</span>
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where I've Worked Section (matches reference screenshot) */}
      <section
        id="experience"
        className="py-20 sm:py-28 border-t border-[#181820] max-w-4xl mx-auto px-6 sm:px-10"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#131317] border border-[#23232c] text-[10.5px] font-mono uppercase tracking-[0.16em] text-neutral-400 shadow-xs mb-3">
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Where I&apos;ve Worked
          </h2>
          <p className="mt-2 text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            A summary of my professional journey and the impact I&apos;ve made
          </p>
        </div>

        {/* Accordion Cards Stack */}
        <div className="space-y-4">
          {WORK_EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedExpIndex === idx;
            return (
              <div
                key={idx}
                onClick={() =>
                  setExpandedExpIndex((prev) => (prev === idx ? null : idx))
                }
                className={`rounded-2xl sm:rounded-3xl bg-[#111115] border transition-all cursor-pointer p-6 sm:p-7 ${
                  isExpanded
                    ? "border-neutral-500/70 bg-[#131318]"
                    : "border-[#202028] hover:border-neutral-600 hover:bg-[#141419]"
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Expanded Bullets */}
                {isExpanded && (
                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed pl-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Toggle Circle Icon (at bottom-left matching screenshot) */}
                <div className="mt-4 pt-1">
                  <span className="w-6 h-6 rounded-full border border-neutral-600/90 flex items-center justify-center text-neutral-300 group-hover:border-white transition-colors">
                    {isExpanded ? (
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                      </svg>
                    ) : (
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download My CV CTA Button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDownloadingCV(true);
              setTimeout(() => setDownloadingCV(false), 2000);
            }}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>{downloadingCV ? "Downloading CV..." : "Download My CV"}</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 sm:py-24 border-t border-[#181820] max-w-5xl mx-auto px-6 sm:px-10 lg:px-12"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#131317] border border-[#23232c] text-[10.5px] font-mono uppercase tracking-[0.16em] text-neutral-400 shadow-xs mb-3">
            <span>RECOMMENDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Leaders Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEVELOPER_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#121217] border border-[#23232c] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-500 transition-colors"
            >
              <p className="text-sm sm:text-base text-neutral-300 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-[#22222a]">
                <div className="font-semibold text-sm text-white">{t.author}</div>
                <div className="text-xs text-neutral-400">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 sm:py-28 border-t border-[#181820] bg-gradient-to-b from-[#0c0c0e] to-[#08080a]"
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#131317] border border-[#23232c] text-[10.5px] font-mono uppercase tracking-[0.16em] text-neutral-400 shadow-xs mb-4">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Build Something Fast.
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
            Available for selected contract work, architecture reviews, and full-time
            opportunities.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>{copiedEmail ? "Email Copied!" : "snilloc@example.com"}</span>
              <svg
                className="w-4 h-4 text-neutral-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#141419] border border-[#272733] text-white font-medium text-sm hover:bg-[#1d1d24] transition-all"
            >
              GitHub Profile &rarr;
            </a>
          </div>

          <div className="mt-14 pt-8 border-t border-[#181820] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <span>&copy; {new Date().getFullYear()} Snilloc Hemingson. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/templates" className="hover:text-white transition-colors">
                All Templates
              </Link>
              <span>&middot;</span>
              <Link href="/template/developers-it" className="hover:text-white transition-colors">
                Developers Directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Template Switcher Bar for Quick Testing (1 to 10) */}
      <aside aria-label="Template quick switcher" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#141419]/90 backdrop-blur-md border border-[#292938] rounded-full px-4 py-2 shadow-2xl flex items-center gap-2 text-xs">
        <span className="text-neutral-400 font-mono pr-1 text-[11px]">
          Dev Template:
        </span>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <Link
            key={num}
            href={`/template/developers-it/${num}`}
            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold tabular-nums text-[11px] transition-all ${
              num === 1
                ? "bg-white text-black shadow-xs"
                : "text-neutral-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {num}
          </Link>
        ))}
      </aside>

      <FramerBadge />
    </div>
  );
}
