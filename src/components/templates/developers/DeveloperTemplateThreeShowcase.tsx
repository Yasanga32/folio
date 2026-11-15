"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

/* --- Social Icons Matching Reference Screenshot --- */

function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14 9h-2a2 2 0 0 0-2 2v2H8v3h2v6h3v-6h2.5l.5-3H13v-1.5a.5.5 0 0 1 .5-.5H14V9z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <line x1="8" y1="11" x2="8" y2="17" />
      <line x1="8" y1="8" x2="8.01" y2="8" />
      <path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" />
      <line x1="12" y1="11" x2="12" y2="17" />
    </svg>
  );
}

/* --- Tech Stack Icons Dataset with Motions --- */
interface TechStackItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const TECH_STACK_ROW_1: TechStackItem[] = [
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3178c6]" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#3178c6" />
        <path
          d="M6 10h4v2H8.5v6h-2v-6H5v-2h1zm7 0h4v2h-2.5v1h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4v-2h2.5v-1h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-black" fill="currentColor">
        <circle cx="12" cy="12" r="11" fill="black" />
        <path
          d="M15.5 8.5v7l-6-7.5V16h-1.5V8.5h1.5l6 7.5V8.5z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Library",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#61dafb]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#539e43]" fill="currentColor">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.3 7.2-4.3v-7L12 4.3z" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3776ab]" fill="currentColor">
        <path d="M11.9 2c-3.1 0-4.9.4-4.9 2.5v2.5h5v.8H5.7C3.6 7.8 2 9.4 2 12.5s1.6 4.7 3.7 4.7h1.4v-2c0-2.3 2-4.2 4.4-4.2h5V9.4C16.5 4 15 2 11.9 2zm-1.4 1.7a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm7.8 4.6h-1.4v2c0 2.3-2 4.2-4.4 4.2h-5v1.6c0 5.4 1.5 7.4 4.6 7.4 3.1 0 4.9-.4 4.9-2.5v-2.5h-5v-.8h6.3c2.1 0 3.7-1.6 3.7-4.7s-1.6-4.7-3.7-4.7zm-2.2 12.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#336791]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 8a6 6 0 0 1 12 0c0 4-3 7-6 12-3-5-6-8-6-12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#2496ed]" fill="currentColor">
        <path d="M22 13.5c-.5-.1-1.3-.1-1.8.2-.4-1.2-1.4-2.1-2.6-2.3l-.3-.6c-.3-.6-.8-1-1.4-1.3l-.6-.2c.2-.7 0-1.5-.5-2-.6-.6-1.5-.7-2.3-.4l-.2.1c-.2-.7-.9-1.2-1.7-1.2H2v10c0 3.3 2.7 6 6 6h8c3.3 0 6-2.7 6-6 0-.7-.1-1.4-.4-2-.1-.1 0-.2.4-.3zM4 9h2v2H4V9zm3 0h2v2H7V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm-9 3h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" />
      </svg>
    ),
  },
];

const TECH_STACK_ROW_2: TechStackItem[] = [
  {
    name: "AWS",
    category: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#ff9900]" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-4-3 1.4-1.4 2.6 2 5.6-5.6 1.4 1.4-7 6.6z" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "API",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e10098]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
        <circle cx="12" cy="2" r="1.5" fill="currentColor" />
        <circle cx="21" cy="7" r="1.5" fill="currentColor" />
        <circle cx="21" cy="17" r="1.5" fill="currentColor" />
        <circle cx="12" cy="22" r="1.5" fill="currentColor" />
        <circle cx="3" cy="17" r="1.5" fill="currentColor" />
        <circle cx="3" cy="7" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#06b6d4]" fill="currentColor">
        <path d="M12 6c-3 0-4.5 1.5-4.5 4.5 1-1.5 2.2-2 3.8-1.5 1 .3 1.8 1.1 2.6 2 1.3 1.3 2.7 2.8 6.1 2.8 3 0 4.5-1.5 4.5-4.5-1 1.5-2.2 2-3.8 1.5-1-.3-1.8-1.1-2.6-2-1.3-1.3-2.7-2.8-6.1-2.8zM4.5 13.5c-3 0-4.5 1.5-4.5 4.5 1-1.5 2.2-2 3.8-1.5 1 .3 1.8 1.1 2.6 2 1.3 1.3 2.7 2.8 6.1 2.8 3 0 4.5-1.5 4.5-4.5-1 1.5-2.2 2-3.8 1.5-1-.3-1.8-1.1-2.6-2-1.3-1.3-2.7-2.8-6.1-2.8z" />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "Cache",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#dc382d]" fill="currentColor">
        <polygon points="12 2 22 7 12 12 2 7" />
        <polygon points="12 8 22 13 12 18 2 13" />
        <polygon points="12 14 22 19 12 24 2 19" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#326ce5]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <polygon points="12 6 17 15 7 15" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "Version Control",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#f05032]" fill="currentColor">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.8 2.8c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.7 2.7c.6-.2 1.3 0 1.8.5.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.4-2.1L12.5 11v4.8c.3.2.6.5.7.8.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2c.3-.3.6-.5.9-.6V11c-.3-.2-.5-.3-.7-.5-.6-.6-.7-1.4-.4-2.1L8.1 5.6 2.4 11.3c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.6.6-1.5 0-2.5z" />
      </svg>
    ),
  },
  {
    name: "Linux",
    category: "OS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-neutral-800" fill="currentColor">
        <circle cx="12" cy="8" r="4" />
        <path d="M7 16c0-2.5 2.2-4 5-4s5 1.5 5 4v4H7v-4z" />
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="15" cy="21" r="1.5" />
      </svg>
    ),
  },
];

/* --- Selected Work Dataset --- */
const FEATURED_PROJECTS = [
  {
    title: "Nexus Distributed Engine",
    description:
      "A high-throughput distributed message broker processing 500k+ events/sec with sub-millisecond p99 latency.",
    tags: ["Go", "Kubernetes", "AWS", "gRPC"],
    link: "https://github.com",
    metrics: "500k req/sec · 99.99% uptime",
  },
  {
    title: "HyperScale DB",
    description:
      "Custom columnar time-series storage engine with automatic partitioning, adaptive index compression, and SIMD queries.",
    tags: ["Rust", "PostgreSQL", "SIMD", "C++"],
    link: "https://github.com",
    metrics: "10x query speedup · 65% memory reduction",
  },
  {
    title: "OmniFlow Cloud Platform",
    description:
      "Enterprise workflow automation platform enabling visual event-driven pipelines across third-party microservices.",
    tags: ["Next.js", "TypeScript", "Tailwind", "GraphQL"],
    link: "https://github.com",
    metrics: "120 enterprise orgs · 4.9 rating",
  },
  {
    title: "Pulse Metrics Telemetry",
    description:
      "Real-time observability platform aggregating traces, distributed logs, and anomaly detection alerts.",
    tags: ["React", "Redis", "Docker", "Node.js"],
    link: "https://github.com",
    metrics: "2.4B events ingested daily",
  },
];

/* --- Professional Journey Dataset --- */
const WORK_EXPERIENCE = [
  {
    role: "Staff Software Engineer",
    company: "Vercel",
    period: "2023 — Present",
    description:
      "Leading core infrastructure engineering for edge compute routing, cold-start latency reduction, and multi-region failover protocols.",
  },
  {
    role: "Senior Backend Engineer",
    company: "Stripe",
    period: "2020 — 2023",
    description:
      "Designed and scaled mission-critical payment ledgering services handling billions in global transaction volume with zero data loss.",
  },
  {
    role: "Software Engineer",
    company: "GitHub",
    period: "2017 — 2020",
    description:
      "Built resilient developer tooling, Git hook execution engines, and web-scale repository search APIs.",
  },
];

export default function DeveloperTemplateThreeShowcase() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    setDownloadSuccess(true);
    // Trigger real download or simulated feedback
    const blob = new Blob(
      [
        "JOHN DOE - Senior Software Engineer\n\nEmail: contact.johndoe@example.com\nSpecialization: Distributed Systems, Web Applications, Cloud Architecture\n\nExperience:\n- Staff Software Engineer at Vercel (2023 - Present)\n- Senior Backend Engineer at Stripe (2020 - 2023)\n- Software Engineer at GitHub (2017 - 2020)\n\nTech Stack:\nTypeScript, Next.js, React, Node.js, Go, Python, PostgreSQL, AWS, Docker, Kubernetes, GraphQL",
      ],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "John_Doe_Software_Engineer_CV.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Global CSS for Infinite Tech Marquee Motion */}
      <style jsx global>{`
        @keyframes techMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes techMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-tech-left {
          display: flex;
          width: max-content;
          animation: techMarqueeLeft 24s linear infinite;
        }
        .animate-tech-right {
          display: flex;
          width: max-content;
          animation: techMarqueeRight 24s linear infinite;
        }
        .animate-tech-left:hover,
        .animate-tech-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Workspace Navbar */}
      <div className="bg-white border-b border-neutral-100">
        <Navbar />
      </div>

      {/* ========================================================================= */}
      {/* MAIN TOP BAR (Matches Reference Screenshot Top)                           */}
      {/* ========================================================================= */}
      <header className="w-full border-b border-neutral-200/80 sticky top-0 bg-white/95 backdrop-blur-md z-30 transition-all">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
          {/* Left: Bold Wordmark */}
          <Link
            href="/developers-it/3"
            className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 hover:opacity-80 transition-opacity"
          >
            John Doe
          </Link>

          {/* Right: Black Pill Action Button */}
          <button
            type="button"
            onClick={handleDownloadCV}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            {downloadSuccess ? "Downloaded ✓" : "Download CV"}
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* HERO SECTION (Matches Reference Screenshot Hero Area)                     */}
      {/* ========================================================================= */}
      <section className="pt-16 sm:pt-24 pb-16 sm:pb-20 text-center px-6 sm:px-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Circular Portrait Photo */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl ring-2 ring-neutral-200/90 bg-neutral-900 group">
          <Image
            src="/images/developers/johndoe-portrait.png"
            alt="John Doe - Software Engineer"
            fill
            priority
            sizes="230px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Giant Bold Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black text-neutral-950 tracking-tighter mt-7 sm:mt-9 mb-4 leading-none select-none">
          John Doe
        </h1>

        {/* Subtitle Bio */}
        <p className="max-w-2xl text-neutral-600 text-sm sm:text-base sm:leading-relaxed leading-normal font-normal mb-7">
          Software Engineer specializing in scalable software, modern web applications,
          and high-performance systems that deliver exceptional user experiences.
        </p>

        {/* 4 Outline Social Icons (Twitter, Instagram, Facebook, LinkedIn) */}
        <div className="flex items-center gap-4 text-neutral-800 mb-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="p-1 hover:text-black hover:scale-110 transition-all cursor-pointer"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-1 hover:text-black hover:scale-110 transition-all cursor-pointer"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-1 hover:text-black hover:scale-110 transition-all cursor-pointer"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1 hover:text-black hover:scale-110 transition-all cursor-pointer"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Main CTA Button: Download CV */}
        <button
          type="button"
          onClick={handleDownloadCV}
          className="px-8 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-sm transition-all active:scale-95 shadow-md cursor-pointer inline-flex items-center gap-2"
        >
          <span>{downloadSuccess ? "✓ CV Downloaded" : "Download CV"}</span>
        </button>

        {/* Toast confirmation */}
        {downloadSuccess && (
          <div className="mt-4 text-xs font-mono text-emerald-600 animate-fadeIn font-semibold">
            ✓ John Doe resume downloaded successfully!
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* TECH STACK ICONS WITH MOTIONS (User Explicit Request)                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 border-y border-neutral-200/80 bg-neutral-50/70 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-mono uppercase tracking-[0.16em] text-neutral-600 shadow-xs mb-3">
            <span>TECH STACK &amp; TOOLS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
            Engineered with Modern Stacks
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
            Hover over any technology badge to pause motion and inspect details
          </p>
        </div>

        {/* Motion Track Container with subtle fade masks */}
        <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Row 1: Moves Left Continuously */}
          <div className="animate-tech-left flex gap-3.5 sm:gap-4 py-1">
            {[...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1].map((tech, idx) => (
              <div
                key={`t1-${idx}`}
                className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                    {tech.name}
                  </span>
                  <span className="block text-[10.5px] font-mono text-neutral-400">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Moves Right Continuously */}
          <div className="animate-tech-right flex gap-3.5 sm:gap-4 py-1">
            {[...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2].map((tech, idx) => (
              <div
                key={`t2-${idx}`}
                className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                    {tech.name}
                  </span>
                  <span className="block text-[10.5px] font-mono text-neutral-400">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED WORK / PROJECTS SECTION                                          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Selected Systems &amp; Software
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
              Featured Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm">
            Architecting fault-tolerant backend infrastructure and responsive client interfaces.
          </p>
        </div>

        {/* 2x2 Clean Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-neutral-200/90 p-7 sm:p-9 hover:border-neutral-400 hover:shadow-lg transition-all flex flex-col justify-between group bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-black">
                    {proj.title}
                  </h3>
                  <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Metrics */}
                <div className="text-xs font-mono font-semibold text-neutral-950 mb-4 pb-3 border-b border-neutral-100">
                  {proj.metrics}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 font-mono text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WORK EXPERIENCE SECTION                                                   */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 border-t border-neutral-200/80 bg-neutral-50/50">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Career Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 shadow-xs hover:border-neutral-400 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                      {exp.role}
                    </h3>
                    <span className="text-neutral-400">·</span>
                    <span className="font-semibold text-neutral-800 text-sm sm:text-base">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CALL TO ACTION & CONTACT SECTION                                         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <div className="rounded-[36px] sm:rounded-[44px] bg-neutral-950 text-white p-10 sm:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-4">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Let&apos;s build something exceptional.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-8 leading-relaxed">
            Available for selected senior engineering contracts, technical advisory, and full-stack product builds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {downloadSuccess ? "✓ CV Downloaded" : "Download CV"}
            </button>
            <a
              href="mailto:contact.johndoe@example.com"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-sm transition-all text-center"
            >
              contact.johndoe@example.com
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER BAR                                                                */}
      {/* ========================================================================= */}
      <footer className="w-full border-t border-neutral-200/80 py-8 text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-medium text-neutral-600">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-neutral-700">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-black font-semibold transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Template Switcher Bar for Quick Testing (1 to 10) */}
      <aside
        aria-label="Template quick switcher"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#141419]/90 backdrop-blur-md border border-[#292938] rounded-full px-4 py-2 shadow-2xl flex items-center gap-2 text-xs"
      >
        <span className="text-neutral-400 font-mono pr-1 text-[11px]">
          Dev Template:
        </span>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <Link
            key={num}
            href={`/template/developers-it/${num}`}
            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold tabular-nums text-[11px] transition-all ${
              num === 3
                ? "bg-white text-black shadow-xs font-extrabold"
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
