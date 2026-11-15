"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

/* --- Brand & Tool Icons Matching Reference Screenshot --- */

function AndroLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      {/* Neon lime geometric double-bracket monogram */}
      <path
        d="M6 6C6 4.89543 6.89543 4 8 4H12C13.1046 4 14 4.89543 14 6V11H6V6Z"
        fill="#c8f53c"
      />
      <path
        d="M18 4H22C23.1046 4 24 4.89543 24 6V11H16V6C16 4.89543 16.8954 4 18 4Z"
        fill="#c8f53c"
      />
      <path
        d="M6 21H14V26C14 27.1046 13.1046 28 12 28H8C6.89543 28 6 27.1046 6 26V21Z"
        fill="#c8f53c"
      />
      <path
        d="M16 21H24V26C24 27.1046 23.1046 28 22 28H18C16.8954 28 16 27.1046 16 26V21Z"
        fill="#c8f53c"
      />
      <rect x="11" y="13" width="10" height="6" rx="2" fill="#c8f53c" />
    </svg>
  );
}

function DiamondIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <polygon points="6 3 18 3 22 9 12 21 2 9 6 3" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="12" y1="21" x2="6" y2="3" />
      <line x1="12" y1="21" x2="18" y2="3" />
    </svg>
  );
}

function FramerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
}

function FigmaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" />
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" />
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" />
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" />
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
    </svg>
  );
}

function WebflowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.8 8.6c-.6 0-1.1.2-1.5.6l-3.3 5.4-2.1-5.4c-.4-.9-1.2-1.5-2.2-1.5s-1.8.6-2.2 1.5l-3.2 8h2.3l1.8-4.8 1.8 4.8h2.2l3-5.2 2.2 5.2h2.3l-3.4-8.6h-2.1z" />
    </svg>
  );
}

/* --- Services Accordion Dataset (Matching Reference Image 2) --- */
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "creative-design",
    title: "Creative Design",
    description:
      "My creative strategy and branding service focuses on developing distinctive brand identities that resonate with your audience and communicate your vision effectively. We combine research, storytelling, and design thinking.",
    image: "/images/developers/service-creative-design.jpg",
    stats: [
      { value: "100+", label: "Work done" },
      { value: "97+", label: "Positive reviews" },
      { value: "50+", label: "Repeat clients" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Specializing in high-performance web applications, responsive frontend architecture, and robust CMS integration. Built with Next.js, React, TypeScript, and modern styling solutions for lightning-fast speeds.",
    image: "/images/developers/service-web-dev.jpg",
    stats: [
      { value: "140+", label: "Projects shipped" },
      { value: "99%", label: "Clean code score" },
      { value: "45+", label: "Modern stacks" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven growth strategies, conversion rate optimization, technical SEO, and organic reach tactics tailored to scale your brand presence globally and turn casual traffic into loyal customers.",
    image: "/images/developers/service-creative-design.jpg",
    stats: [
      { value: "350%", label: "Avg ROI" },
      { value: "12M+", label: "Reach generated" },
      { value: "85+", label: "Growth campaigns" },
    ],
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    description:
      "Advising startups and established enterprises on digital product strategy, tech architecture reviews, design system scalability, and streamlined workflow operations.",
    image: "/images/developers/service-web-dev.jpg",
    stats: [
      { value: "30+", label: "Startups advised" },
      { value: "98%", label: "Client satisfaction" },
      { value: "15+", label: "Scaleups funded" },
    ],
  },
];

/* --- Projects I've Shipped Dataset --- */
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
      "A clean, calming website for a matcha brand, designed to showcase products, tell the brand story, and create a smooth shopping experience.",
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

/* --- Testimonials Dataset (Dual-Direction Motion) --- */
const TESTIMONIALS_ROW_1 = [
  {
    name: "Michael Brown",
    role: "UI/UX Designer, Adobe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    quote:
      "He has a strong eye for design and knows how to bring ideas to life on the web. Collaboration with him is always easy and productive.",
  },
  {
    name: "Emily Watson",
    role: "Frontend Developer, Shopify",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    quote:
      "Andro writes some of the cleanest code I've seen. He's thoughtful, consistent, and always focused on performance and user experience.",
  },
  {
    name: "Alex Rivera",
    role: "Lead Designer, Webflow",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    quote:
      "His attention to detail translates into interfaces that feel natural, fluid, and polished across every breakpoint.",
  },
  {
    name: "David Chen",
    role: "VP Engineering, Stripe",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    quote:
      "Exceptional engineer who consistently delivers ahead of deadlines without ever compromising code quality or accessibility.",
  },
];

const TESTIMONIALS_ROW_2 = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer, Microsoft",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    quote:
      "Andro is reliable and detail-oriented. He takes feedback well and continuously improves both the product and his workflow.",
  },
  {
    name: "James Wilson",
    role: "Product Manager, Atlassian",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    quote:
      "He understands product thinking, not just code. That makes a big difference when building features that actually matter to users.",
  },
  {
    name: "Sophia Martinez",
    role: "Design Director, Figma",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    quote:
      "The ideal engineering partner for any design team. He respects subtle motion nuance and builds robust design tokens.",
  },
  {
    name: "Daniel Lee",
    role: "Tech Lead, Vercel",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    quote:
      "An absolute master of modern Next.js patterns, hydration optimizations, and responsive layouts. Highly recommended.",
  },
];

export default function DeveloperTemplateOneShowcase() {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [expandedService, setExpandedService] = useState<string>("creative-design");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "about", "services", "portfolio", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveNav(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveNav(id);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("andro@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070708] text-neutral-100 font-sans selection:bg-[#c8f53c] selection:text-black relative overflow-x-hidden">
      {/* Global CSS for Dual Marquee motion */}
      <style jsx global>{`
        @keyframes devMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes devMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: devMarqueeLeft 28s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: devMarqueeRight 28s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Folio Workspace Navbar */}
      <div className="bg-[#09090b] border-b border-[#1c1c24]">
        <Navbar dark={true} />
      </div>

      {/* ========================================================================= */}
      {/* HERO SECTION (Matches Reference Image 1)                                */}
      {/* ========================================================================= */}
      <section
        id="home"
        className="relative bg-[#060607] min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden border-b border-neutral-800/40"
      >
        {/* Top Floating Andro Pill Navigation Bar */}
        <header className="relative z-30 pt-6 px-6 sm:px-10 lg:px-14">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left: Brand Monogram Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="flex items-center gap-2 group transition-transform active:scale-95"
              aria-label="Andro Home"
            >
              <AndroLogo className="w-8 h-8 sm:w-9 sm:h-9 text-[#c8f53c]" />
            </a>

            {/* Center: Rounded Pill Navigation Bar (Matching Screenshot) */}
            <nav className="flex items-center bg-[#151518]/90 backdrop-blur-md border border-neutral-700/60 p-1 sm:p-1.5 rounded-full shadow-2xl">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Blog", id: "services" },
              ].map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#c8f53c] text-black shadow-md scale-102"
                        : "bg-white/95 text-neutral-900 hover:bg-white active:scale-95"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Pill Outline Action Button */}
            <div className="hidden sm:flex items-center">
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="w-24 sm:w-28 h-9 sm:h-10 rounded-full border border-neutral-700/80 hover:border-neutral-500 bg-[#121215]/60 text-xs sm:text-sm text-neutral-300 hover:text-white font-medium transition-all flex items-center justify-center cursor-pointer active:scale-95"
              >
                Hire Me
              </button>
            </div>
          </div>
        </header>

        {/* Hero Stage: Portrait Background & Content Overlays */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-center pt-8 pb-12">
          {/* Centered Dramatic Portrait Image (Young man with glasses in dark hoodie) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
            <div className="relative w-full max-w-[620px] sm:max-w-[720px] lg:max-w-[840px] h-[550px] sm:h-[680px] lg:h-[760px] opacity-90">
              <Image
                src="/images/developers/andro-portrait.jpg"
                alt="Andro - Designer & Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 840px"
                className="object-cover object-top mask-image-radial"
              />
              {/* Radial gradient vignettes to blend into the pure dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060607] via-transparent to-[#060607]" />
            </div>
          </div>

          {/* Hero Foreground Grid: Left Headline & Right Tool Card */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
            {/* Left Side: Hey I'm Andro, Designer & Developer, Hire Me */}
            <div className="lg:col-span-8 flex flex-col items-start pt-6 sm:pt-10">
              {/* Salutation */}
              <div className="inline-flex items-center gap-1.5 text-base sm:text-lg lg:text-xl font-medium tracking-tight mb-2 sm:mb-3">
                <span className="text-white">Hey</span>
                <span className="inline-block animate-wave origin-bottom-right">👋</span>
                <span className="text-[#c8f53c] font-semibold">I&apos;m Andro</span>
              </div>

              {/* Massive Bold Headline (Matching reference) */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] text-white leading-[0.94] drop-shadow-lg">
                Designer &amp; <br />
                Developer
              </h1>

              {/* Hire Me CTA Button */}
              <div className="mt-8 sm:mt-10">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#c8f53c] hover:bg-[#d8fb54] text-black font-extrabold text-sm sm:text-base tracking-tight transition-all transform active:scale-95 shadow-xl shadow-lime-400/15 cursor-pointer"
                >
                  Hire Me
                </button>
              </div>
            </div>

            {/* Right Side: Floating "Experienced in" Glass Card (Matching reference) */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="w-56 sm:w-64 rounded-3xl bg-[#141417]/85 backdrop-blur-xl border border-white/10 p-5 sm:p-6 shadow-2xl hover:border-white/20 transition-all">
                <span className="text-xs font-semibold text-neutral-300 block mb-4 tracking-tight">
                  Experienced in
                </span>
                {/* 5 Tool Icons Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Diamond / Sketch */}
                  <div
                    title="Sketch"
                    className="w-12 h-12 rounded-2xl bg-[#202025] hover:bg-[#282830] border border-white/5 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-105"
                  >
                    <DiamondIcon className="w-5 h-5" />
                  </div>
                  {/* Framer */}
                  <div
                    title="Framer"
                    className="w-12 h-12 rounded-2xl bg-[#202025] hover:bg-[#282830] border border-white/5 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-105"
                  >
                    <FramerIcon className="w-4 h-4" />
                  </div>
                  {/* Figma */}
                  <div
                    title="Figma"
                    className="w-12 h-12 rounded-2xl bg-[#202025] hover:bg-[#282830] border border-white/5 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-105"
                  >
                    <FigmaIcon className="w-4 h-4" />
                  </div>
                  {/* Webflow */}
                  <div
                    title="Webflow"
                    className="w-12 h-12 rounded-2xl bg-[#202025] hover:bg-[#282830] border border-white/5 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-105"
                  >
                    <WebflowIcon className="w-5 h-5" />
                  </div>
                  {/* After Effects */}
                  <div
                    title="Adobe After Effects"
                    className="w-12 h-12 rounded-2xl bg-[#202025] hover:bg-[#282830] border border-white/5 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-105"
                  >
                    <span className="text-[12px] font-black text-white tracking-tighter">
                      Ae
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Bio snippet, Centered Stats Counter & Framer Badge */}
          <div className="relative z-10 pt-10 sm:pt-14 mt-auto border-t border-neutral-800/40 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            {/* Left Bio Tagline */}
            <div className="md:col-span-4">
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xs leading-relaxed font-normal">
                Lead product designer and developer based in manchester, with over 10
                years of experience.
              </p>
            </div>

            {/* Center Stats (20+, 2k+, 160+) */}
            <div className="md:col-span-5 flex items-center justify-center gap-10 sm:gap-14">
              <div className="text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  20+
                </span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                  Projects
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  2k+
                </span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                  Reviews
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  160+
                </span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                  Awards
                </span>
              </div>
            </div>

            {/* Right: Badge cluster */}
            <div className="md:col-span-3 flex md:justify-end items-center gap-2 text-xs">
              <div className="px-3 py-1 rounded-full bg-[#151518] border border-neutral-700/60 text-neutral-400 text-[11px]">
                Made in Framer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT & SERVICES SECTION (Matches Reference Image 2 - Clean White Canvas) */}
      {/* ========================================================================= */}
      <div id="about" className="bg-white text-neutral-950 scroll-mt-20">
        {/* Intro Block: "(Available for work)" & Large Welcome Copy */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Available for work */}
            <div className="lg:col-span-3">
              <span className="text-xs sm:text-sm font-medium text-neutral-600 font-mono tracking-tight">
                (Available for work)
              </span>
            </div>

            {/* Right Column: Welcome Copy & See My Latest Work Link */}
            <div className="lg:col-span-9 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 leading-[1.25]">
                Welcome to my portfolio! I&apos;m Andro, a passionate and innovative
                web designer and developer based in Manchester. With over 10 years of
                professional experience, I specialize in creating visually stunning and
                highly functional websites that deliver exceptional user experiences.
              </h2>

              <div className="mt-8">
                <a
                  href="#portfolio"
                  onClick={(e) => scrollToSection(e, "portfolio")}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-950 hover:text-neutral-600 transition-colors group cursor-pointer"
                >
                  <span className="underline underline-offset-4">See my latest work</span>
                  <span className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section: "The coolest services I provide!" */}
        <section id="services" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32 scroll-mt-20">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
                The coolest <br />
                services I provide!
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-md">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                With over 10 years in web design and development. I&apos;m here to
                help bring your business to life with top-notch service.
              </p>
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="px-6 py-2.5 rounded-full border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-950 hover:bg-neutral-100 transition-all shrink-0 active:scale-95 cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Interactive Expandable Accordion Cards Stack (Matches Image 2) */}
          <div className="space-y-4 sm:space-y-5">
            {SERVICES_DATA.map((srv) => {
              const isExpanded = expandedService === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() =>
                    setExpandedService((prev) => (prev === srv.id ? "" : srv.id))
                  }
                  className={`rounded-[28px] sm:rounded-[36px] border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isExpanded
                      ? "border-neutral-300 bg-white p-6 sm:p-10 shadow-lg"
                      : "border-neutral-200/90 bg-[#fafafa] hover:bg-white hover:border-neutral-300 px-6 sm:px-10 py-5 sm:py-6 shadow-xs"
                  }`}
                >
                  {/* Top Bar / Header of Card */}
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-neutral-950 tracking-tight">
                      {srv.title}
                    </h4>

                    {/* Circular Action Arrow Button */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-sm font-semibold transition-transform duration-300 shrink-0 ${
                        isExpanded
                          ? "bg-neutral-950 text-white rotate-0"
                          : "text-neutral-700 bg-white hover:border-neutral-500"
                      }`}
                    >
                      {isExpanded ? "↗" : "↘"}
                    </div>
                  </div>

                  {/* Expanded Content Grid: Left Description & Stats, Right Flatlay Image */}
                  {isExpanded && (
                    <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fadeIn">
                      {/* Left Column: Description & 3 Stats */}
                      <div className="lg:col-span-6 flex flex-col justify-between h-full">
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg mb-8">
                          {srv.description}
                        </p>

                        {/* 3 Metric Columns with Underlines */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-neutral-200">
                          {srv.stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight pb-1">
                                {stat.value}
                              </span>
                              <span className="text-[11px] sm:text-xs text-neutral-500 font-medium">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: Flatlay Photo with rounded corners */}
                      <div className="lg:col-span-6">
                        <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                          <Image
                            src={srv.image}
                            alt={srv.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 540px"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* SHIPPED PROJECTS SECTION (Matches Portfolio Tab)                          */}
      {/* ========================================================================= */}
      <section
        id="portfolio"
        className="py-20 sm:py-28 border-t border-[#181820] max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 scroll-mt-20"
      >
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#131317] border border-[#23232c] text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#c8f53c] shadow-xs mb-3">
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Projects I&apos;ve Shipped
          </h2>
          <p className="mt-2.5 text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            A range of projects demonstrating how I turn ideas into functional,
            high-converting digital experiences
          </p>
        </div>

        {/* 2x2 Clean Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SHIPPED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-[#111114] border border-[#1f1f26] hover:border-neutral-600 transition-all p-5 sm:p-6 flex flex-col justify-between shadow-xl group"
            >
              <div className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden mb-6 bg-[#1a1a20]">
                <Image
                  src={proj.image}
                  alt={proj.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {proj.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1d1d24] flex items-center gap-3">
                <a
                  href={proj.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-xs transition-all active:scale-95"
                >
                  Source Code
                </a>
                <a
                  href={proj.liveUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    setContactModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Live Website</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TESTIMONIALS SECTION (Dual-Direction Motion Marquee)                       */}
      {/* ========================================================================= */}
      <section
        id="testimonials"
        className="py-20 sm:py-28 border-t border-[#181820] overflow-hidden scroll-mt-20"
      >
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 px-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#131317] border border-[#23232c] text-[10.5px] font-mono uppercase tracking-[0.16em] text-neutral-400 shadow-xs mb-3">
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Don&apos;t just take my words for it
          </h2>
          <p className="mt-2 text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Words from people who&apos;ve worked with me and experienced my process
            and results firsthand
          </p>
        </div>

        {/* Dual-Direction Motion Marquees */}
        <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {/* Row 1: Moves Left */}
          <div className="animate-marquee-left flex gap-4 py-1">
            {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map((t, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[340px] sm:w-[380px] md:w-[420px] rounded-2xl sm:rounded-3xl bg-[#121217] border border-[#22222a] p-5 sm:p-6 shrink-0 flex flex-col justify-between shadow-md hover:border-neutral-500 hover:bg-[#15151c] transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/10 bg-[#1c1c24] shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-600 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: Moves Right */}
          <div className="animate-marquee-right flex gap-4 py-1">
            {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map((t, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[340px] sm:w-[380px] md:w-[420px] rounded-2xl sm:rounded-3xl bg-[#121217] border border-[#22222a] p-5 sm:p-6 shrink-0 flex flex-col justify-between shadow-md hover:border-neutral-500 hover:bg-[#15151c] transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/10 bg-[#1c1c24] shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-600 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Large Call to Action Banner ("Let's Build Something Great") */}
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 mt-20 sm:mt-24">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#23232c] shadow-2xl p-10 sm:p-16 lg:p-20 text-center min-h-[300px] sm:min-h-[380px] flex items-center justify-center">
            <Image
              src="/images/developers/collab-banner.jpg"
              alt="Collaboration banner"
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/85" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Let&apos;s Build Something Great
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-md">
                Let&apos;s bring your ideas to life with thoughtful design and code
              </p>
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="mt-7 px-8 py-3 rounded-full bg-[#c8f53c] hover:bg-[#d8fb54] text-black font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Hire Me</span>
                <span className="text-base">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER SECTION                                                           */}
      {/* ========================================================================= */}
      <footer id="contact" className="border-t border-[#181820] bg-[#070709] pt-14 pb-12 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left: Bio + Social Links */}
            <div>
              <div className="flex items-center gap-2.5">
                <AndroLogo className="w-6 h-6 text-[#c8f53c]" />
                <span className="text-sm font-semibold text-white tracking-tight">
                  Andro &mdash; Designer &amp; Developer
                </span>
              </div>
              <p className="text-xs text-neutral-400 max-w-xs mt-3 leading-relaxed">
                Lead product designer and developer based in Manchester. Building fast,
                polished web experiences that deliver real value.
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full bg-[#17171d] border border-[#262633] text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedEmail ? "Email Copied!" : "andro@example.com"}
                </button>
              </div>
            </div>

            {/* Right: Vertical Navigation links */}
            <div className="flex flex-col sm:items-end gap-2.5 text-xs font-medium text-neutral-400">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, "portfolio")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, "testimonials")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Testimonials
              </a>
            </div>
          </div>

          {/* Copyright notice at bottom */}
          <div className="mt-12 pt-6 border-t border-[#181820]/80 text-center">
            <p className="text-[11px] font-mono text-neutral-500">
              &copy; {new Date().getFullYear()} Andro. All Rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* HIRE ME / CONTACT MODAL                                                  */}
      {/* ========================================================================= */}
      {contactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-[#121217] border border-[#262633] p-6 sm:p-8 shadow-2xl text-neutral-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white text-xl font-bold cursor-pointer"
              aria-label="Close dialog"
            >
              &times;
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8f53c] animate-pulse" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#c8f53c]">
                Available for work
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Let&apos;s work together
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              I&apos;m currently available for selected web design and development
              contracts, full builds, and advisory roles.
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full py-3 px-4 rounded-xl bg-[#c8f53c] hover:bg-[#d8fb54] text-black font-bold text-sm transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{copiedEmail ? "✓ Email Copied!" : "Copy Email (andro@example.com)"}</span>
              </button>

              <a
                href="mailto:andro@example.com"
                className="w-full py-3 px-4 rounded-xl border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 text-center"
              >
                Open Email Client &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

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
              num === 1
                ? "bg-[#c8f53c] text-black shadow-xs font-extrabold"
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
