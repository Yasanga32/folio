"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

type OpticModal = "portfolio" | "blog" | "about" | "contact" | null;

interface OpticSeries {
  id: string;
  code: string;
  title: string;
  location: string;
  year: string;
  src: string;
  fallbackSrc: string;
}

const OPTIC_SERIES: OpticSeries[] = [
  {
    id: "iris-study",
    code: "01",
    title: "Aperture & Iris — Macro Series",
    location: "Berlin Studio",
    year: "2026",
    src: "/images/optic-eye-hero.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "silence-in-shadow",
    code: "02",
    title: "Silence in Shadow",
    location: "Tokyo, Japan",
    year: "2026",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "raw-contrast",
    code: "03",
    title: "Unscripted Form",
    location: "Zurich, Switzerland",
    year: "2025",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "coastal-falloff",
    code: "04",
    title: "Light Falloff IX",
    location: "Reykjavik, Iceland",
    year: "2025",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85",
  },
];

interface VisionCard {
  id: string;
  title: string;
  src: string;
  fallbackSrc: string;
  imgClassName: string;
}

interface StudioLensProject {
  id: string;
  title: string;
  year: string;
  category: string;
  location: string;
  notes: string;
  src: string;
  fallbackSrc: string;
  imgClassName: string;
}

const STUDIO_LENS_PROJECTS: StudioLensProject[] = [
  {
    id: "built-environment",
    title: "BUILT ENVIRONMENT",
    year: "2023",
    category: "Environmental Photography",
    location: "Valencia, Spain",
    notes:
      "Hard afternoon geometry meets unfiltered skin texture — studying how organic foliage breaks architectural sunlight across human subjects.",
    src: "/images/optic-lens-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=85",
    imgClassName: "object-cover object-[50%_42%]",
  },
  {
    id: "light-in-practice",
    title: "LIGHT IN PRACTICE",
    year: "2022",
    category: "Studio Research",
    location: "Lisbon, Portugal",
    notes:
      "An ongoing optical study investigating high-contrast leaf shadow projection, cool teal fill light, and close-range 85mm depth compression.",
    src: "/images/optic-lens-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=85",
    imgClassName: "object-cover object-[50%_45%]",
  },
  {
    id: "material-language",
    title: "MATERIAL LANGUAGE",
    year: "2022",
    category: "Product & Still Life",
    location: "Kyoto, Japan",
    notes:
      "Exploring tactile saturation between warm mineral pigments, botanical blossoms, and close macro iris reflectivity in natural daylight.",
    src: "/images/optic-lens-3.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=85",
    imgClassName: "object-cover object-[50%_42%]",
  },
  {
    id: "spatial-stillness",
    title: "SPATIAL STILLNESS",
    year: "2021",
    category: "Editorial Series",
    location: "Copenhagen, Denmark",
    notes:
      "Open-sky ambient exposure paired with early spring magnolia studies, emphasizing breathing room and quiet tonal gradients.",
    src: "/images/optic-lens-4.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=85",
    imgClassName: "object-cover object-[50%_40%]",
  },
];

interface OpticService {
  id: string;
  title: string;
  description: string;
  deliverables: string;
  src: string;
  fallbackSrc: string;
  imgClassName: string;
}

const OPTIC_SERVICES: OpticService[] = [
  {
    id: "studio-portraits",
    title: "Studio Portraits",
    description:
      "Polished portrait photography for professionals, creatives, and contemporary brands.",
    deliverables: "Tethered Studio Direction · Color Grading · Print Retouching",
    src: "/images/optic-service-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    imgClassName: "object-cover object-[50%_18%] group-hover:scale-[1.04]",
  },
  {
    id: "brand-campaigns",
    title: "Brand & Campaigns",
    description:
      "Concept-driven imagery crafted for brands, campaigns, and visual identities.",
    deliverables: "Art Direction · Campaign Production · Multi-Format Delivery",
    src: "/images/optic-service-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    imgClassName:
      "object-cover object-[50%_14%] scale-[1.52] origin-[50%_16%] group-hover:scale-[1.58]",
  },
  {
    id: "editorial",
    title: "Editorial",
    description:
      "Narrative-led photography created for publications, features, and editorial platforms.",
    deliverables: "On-Location Essays · Film & Digital Hybrid · Feature Layouts",
    src: "/images/optic-service-3.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    imgClassName: "object-cover object-[50%_22%] group-hover:scale-[1.04]",
  },
  {
    id: "product-still-life",
    title: "Product & Still Life",
    description:
      "Precise studio imagery highlighting form, material, and refined details.",
    deliverables: "Macro Optics · Custom Set Styling · Surface Lighting",
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
    imgClassName: "object-cover object-center group-hover:scale-[1.04]",
  },
  {
    id: "architecture",
    title: "Architecture",
    description:
      "Photographing interiors and architecture with focus on structure.",
    deliverables: "Tilt-Shift Perspective · Twilight Exposures · Spatial Studies",
    src: "/images/optic-service-5.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
    imgClassName:
      "object-cover object-[50%_62%] scale-[1.12] group-hover:scale-[1.17]",
  },
  {
    id: "events-culture",
    title: "Events & Culture",
    description:
      "Documentary-style coverage capturing events with clarity and intention.",
    deliverables: "Runway & Exhibitions · Backstage Dispatches · Rapid Press Feed",
    src: "/images/optic-service-6.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    imgClassName: "object-cover object-[50%_35%] group-hover:scale-[1.04]",
  },
];

function FeaturedPressLogos() {
  const logos = (
    <div className="flex items-center gap-8 sm:gap-10 px-4 sm:px-5 shrink-0 text-[#73737a]">
      {/* Double Circle Mark */}
      <div className="flex items-center opacity-70" aria-label="Press partner">
        <svg className="w-6 h-4" viewBox="0 0 36 20" fill="currentColor">
          <circle cx="13" cy="10" r="8" fillOpacity="0.45" />
          <circle cx="21" cy="10" r="8" />
        </svg>
      </div>

      {/* Infinity Chain Mark */}
      <div className="flex items-center opacity-75" aria-label="Optical Press">
        <svg
          className="w-7 h-4"
          viewBox="0 0 40 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        >
          <path d="M10.5 14C6.9 14 4 11.76 4 9s2.9-5 6.5-5c2.6 0 4.8 1.5 6.8 3.6L22.7 12.4C24.7 14.5 26.9 16 29.5 16c3.6 0 6.5-2.24 6.5-5s-2.9-5-6.5-5c-2.6 0-4.8 1.5-6.8 3.6l-5.4 4.8C15.3 12.5 13.1 14 10.5 14z" />
        </svg>
      </div>

      {/* LOGO Wordmark */}
      <div className="flex items-center font-black tracking-[-0.04em] text-[13px] text-[#3f3f46]">
        <span>LO</span>
        <span className="inline-flex items-center mx-[1px]">
          <svg className="w-4 h-3.5" viewBox="0 0 28 20" fill="currentColor">
            <path d="M8 2a8 8 0 1 0 0 16h12a8 8 0 1 0 0-16H8zm2 4h8a4 4 0 1 1 0 8h-8a4 4 0 1 1 0-8z" />
          </svg>
        </span>
        <span>O</span>
      </div>

      {/* Acme Corp */}
      <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[-0.01em] text-[#52525b]">
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 14L9 4l3 4.5-4.5 5.5H2zm7.5 0L14 7.5 18 14h-8.5z" />
        </svg>
        <span>Acme Corp</span>
      </div>

      {/* Quantum */}
      <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[-0.01em] text-[#6b6b73]">
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="4.5" r="2.2" />
          <circle cx="10" cy="15.5" r="2.2" />
          <circle cx="4.5" cy="10" r="2.2" />
          <circle cx="15.5" cy="10" r="2.2" />
          <rect x="8.8" y="8.8" width="2.4" height="2.4" rx="0.5" />
        </svg>
        <span>Quantum</span>
      </div>

      {/* Atelier Geometric */}
      <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[-0.01em] text-[#808088]">
        <svg className="w-3.5 h-3.5" viewBox="0 0 18 18" fill="currentColor">
          <path d="M3 2l6 4-6 4V2zm0 8l6 4-6 4v-8zm8-4l5 3-5 3V6z" />
        </svg>
        <span>Aperture</span>
      </div>
    </div>
  );

  return (
    <div
      className="mt-4 w-full max-w-[540px] mx-auto overflow-hidden scroll-container"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <div className="flex w-max items-center animate-scroll-left-fast">
        {logos}
        {logos}
      </div>
    </div>
  );
}

const VISION_CARDS: VisionCard[] = [
  {
    id: "golden-profile",
    title: "Golden Hour Profile Study",
    src: "/images/optic-card-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    imgClassName: "object-cover object-center",
  },
  {
    id: "botanical-gaze",
    title: "Botanical Studio Study",
    src: "/images/optic-card-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    imgClassName: "object-cover object-center scale-[1.06]",
  },
  {
    id: "slate-ranunculus",
    title: "Slate & Amber Blossom Portrait",
    src: "/images/optic-card-3.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    imgClassName: "object-cover object-[50%_20%]",
  },
];

const STACK_SLOTS = [
  {
    positionClass: "left-[2%] sm:left-[4%] w-[38%] sm:w-[37%] h-[62%] sm:h-[64%]",
    zIndex: 10,
    rotateY: 16,
    depth: 0.45,
  },
  {
    positionClass: "left-[15%] sm:left-[16%] w-[43%] sm:w-[42%] h-[76%] sm:h-[80%]",
    zIndex: 20,
    rotateY: 16,
    depth: 0.8,
  },
  {
    positionClass: "left-[44%] sm:left-[45%] w-[53%] sm:w-[52%] h-[92%] sm:h-[96%]",
    zIndex: 30,
    rotateY: 16,
    depth: 1.15,
  },
] as const;

const OPTIC_JOURNAL = [
  {
    date: "OCT 2026",
    readTime: "4 MIN",
    title: "Restrained Composition in High-Contrast Light",
    summary:
      "Why leaving two-thirds of a frame in deliberate shadow sharpens emotional attention.",
  },
  {
    date: "SEP 2026",
    readTime: "6 MIN",
    title: "Shooting Human Presence Without Performance",
    summary:
      "Notes from recent documentary commissions on patience, lens distance, and silence.",
  },
  {
    date: "AUG 2026",
    readTime: "5 MIN",
    title: "Color Temperature & Optical Character",
    summary:
      "Pairing cool cyan shadow falloff with warm tungsten catchlights in studio portraiture.",
  },
];

function SafeOpticImage({
  src,
  fallbackSrc,
  alt,
  sizes,
  className,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      className={className}
    />
  );
}

const BENTO_AVATARS = [
  {
    name: "Client 01",
    src: "/images/optic-service-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Client 02",
    src: "/images/optic-service-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Client 03",
    src: "/images/optic-card-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Client 04",
    src: "/images/optic-card-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85",
  },
];

interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  polaroidSrc: string;
  fallbackSrc: string;
  tiltClass: string;
}

const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: "daniel-wright",
    name: "Daniel Wright",
    role: "Marketing Lead",
    quote:
      '"The studio delivered refined imagery on time, translating our brief into cohesive visuals that strengthened our brand identity."',
    polaroidSrc: "/images/optic-service-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85",
    tiltClass: "-rotate-6",
  },
  {
    id: "sofia-klein",
    name: "Sofia Klein",
    role: "Creative Producer",
    quote:
      '"Optic Studio combines technical precision with creative insight, making collaboration efficient, focused, and genuinely enjoyable for our team."',
    polaroidSrc: "/images/optic-card-3.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85",
    tiltClass: "-rotate-3",
  },
  {
    id: "marcus-hale",
    name: "Marcus Hale",
    role: "Communications Manager",
    quote:
      '"From concept to delivery, the process felt structured and thoughtful, resulting in visuals we confidently use across platforms."',
    polaroidSrc: "/images/optic-service-6.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
    tiltClass: "rotate-3",
  },
  {
    id: "john-rossi",
    name: "John Rossi",
    role: "Product Designer",
    quote:
      '"Their studio approach brought consistency and depth to our product imagery, aligning perfectly with our design language system."',
    polaroidSrc: "/images/optic-service-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
    tiltClass: "rotate-6",
  },
  {
    id: "thomas-reyes",
    name: "Thomas Reyes",
    role: "Art Director",
    quote:
      '"A reliable creative partner who understands visual needs, communicates clearly, and consistently delivers high quality work."',
    polaroidSrc: "/images/optic-lens-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=85",
    tiltClass: "-rotate-6",
  },
];

const STORY_POLAROIDS = [
  {
    id: "story-polaroid-left",
    alt: "Daylight portrait polaroid study",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85",
    fallbackSrc: "/images/optic-card-2.jpg",
    wrapperClass:
      "-rotate-[11deg] translate-x-4 sm:translate-x-5 translate-y-2 z-10 w-[104px] sm:w-[124px]",
    imgPosition: "object-cover object-[50%_20%]",
  },
  {
    id: "story-polaroid-center",
    alt: "Fashion outdoor portrait polaroid study",
    src: "/images/optic-service-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=85",
    wrapperClass: "rotate-0 z-30 w-[112px] sm:w-[132px]",
    imgPosition: "object-cover object-[50%_15%] scale-[1.4]",
  },
  {
    id: "story-polaroid-right",
    alt: "Warm golden side profile polaroid study",
    src: "/images/optic-card-1.jpg",
    fallbackSrc: "/images/optic-lens-3.jpg",
    wrapperClass:
      "rotate-[11deg] -translate-x-4 sm:-translate-x-5 translate-y-2 z-20 w-[104px] sm:w-[124px]",
    imgPosition: "object-cover object-center",
  },
];

export default function TemplateFiveShowcase() {
  const [activeModal, setActiveModal] = useState<OpticModal>(null);
  const [activeProject, setActiveProject] = useState<StudioLensProject | null>(
    null
  );
  const [activeService, setActiveService] = useState<OpticService | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [deckOffset, setDeckOffset] = useState(0);
  const [stackMotion, setStackMotion] = useState({ x: 0, y: 0, active: false });
  const [workflowSplit, setWorkflowSplit] = useState(50);
  const [postProdSplit, setPostProdSplit] = useState(50);

  const handleStackPointerMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setStackMotion({ x: nx, y: ny, active: true });
  };

  const getSplitPercentage = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    return Math.min(88, Math.max(12, pct));
  };

  return (
    <div
      id="optic-top"
      className="min-h-screen flex flex-col bg-[#080706] text-white relative"
    >
      {/* Top Marketplace Navigation */}
      <Navbar />

      {/* Full-Bleed Optic Studio Macro Eye Hero */}
      <section
        aria-label="Optic Studio photography hero"
        className="relative flex-1 min-h-[calc(100vh-76px)] w-full overflow-hidden bg-[#080706] flex flex-col justify-between"
      >
        {/* Background Macro Eye Photograph */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
        >
          <Image
            src="/images/optic-eye-hero.jpg"
            alt="Extreme close-up macro photograph of a human eye with softbox reflection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[54%_48%] brightness-[0.88] contrast-[1.06]"
          />

          {/* Moody Chiaroscuro Side & Vertical Vignette Scrims for Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090706]/85 via-[#090706]/15 to-[#090706]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090706]/65 via-transparent to-[#090706]/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_48%,transparent_24%,rgba(8,6,5,0.68)_88%)]" />
        </div>

        {/* Internal Optic Studio Navigation Bar */}
        <header className="relative z-20 w-full px-6 sm:px-10 lg:px-14 pt-6 sm:pt-7">
          <div className="w-full flex items-center justify-between gap-6">
            {/* Far-Left Condensed Brand Wordmark */}
            <a
              href="#optic-top"
              onClick={(e) => {
                e.preventDefault();
                setActiveModal(null);
              }}
              className="font-optic-display font-bold uppercase text-[25px] sm:text-[29px] leading-none tracking-[0.015em] text-white hover:opacity-80 transition-opacity shrink-0"
            >
              OPTIC
            </a>

            {/* Spread Center Navigation Links (Desktop) */}
            <nav
              aria-label="Optic Studio navigation"
              className="hidden md:flex flex-1 items-center justify-evenly max-w-3xl mx-auto px-6"
            >
              {(
                [
                  { label: "PORTFOLIO", key: "portfolio" },
                  { label: "BLOG", key: "blog" },
                  { label: "ABOUT", key: "about" },
                ] as const
              ).map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveModal(item.key)}
                  className="text-[11px] lg:text-[11.5px] font-medium tracking-[0.08em] uppercase text-white/90 hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Far-Right Viewfinder Bracketed CONTACT Button */}
            <button
              type="button"
              onClick={() => {
                setContactSubmitted(false);
                setActiveModal("contact");
              }}
              className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-2.5 text-[11px] lg:text-[11.5px] font-medium tracking-[0.08em] uppercase text-white/95 hover:text-white transition-colors cursor-pointer shrink-0 group"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 w-2 h-2 border-t border-l border-white/75 group-hover:border-white transition-colors"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 w-2 h-2 border-t border-r border-white/75 group-hover:border-white transition-colors"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/75 group-hover:border-white transition-colors"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/75 group-hover:border-white transition-colors"
              />
              <span>CONTACT</span>
            </button>
          </div>

          {/* Mobile Compact Navigation Row */}
          <nav
            aria-label="Optic Studio mobile navigation"
            className="flex md:hidden items-center justify-center gap-6 mt-4 pt-3 border-t border-white/15"
          >
            {(
              [
                { label: "PORTFOLIO", key: "portfolio" },
                { label: "BLOG", key: "blog" },
                { label: "ABOUT", key: "about" },
              ] as const
            ).map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveModal(item.key)}
                className="text-[11px] font-medium tracking-[0.08em] uppercase text-white/85 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        {/* Bottom Display Headline + Studio Statement */}
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 pt-16 pb-16 sm:pb-12 md:pb-10 lg:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 lg:gap-12">
          {/* Bottom-Left Monumental Condensed Title */}
          <h1 className="font-optic-display font-bold uppercase text-white text-[86px] sm:text-[124px] md:text-[152px] lg:text-[180px] xl:text-[196px] leading-[0.86] tracking-[0.005em] select-none">
            OPTIC
            <br />
            STUDIO.
          </h1>

          {/* Bottom-Right Manifesto Paragraph (offset cleanly left of Framer badge) */}
          <p className="text-[14px] sm:text-[15.5px] lg:text-[16.5px] leading-[1.48] tracking-[-0.005em] text-white/92 font-normal max-w-[390px] md:max-w-[385px] lg:max-w-[405px] md:mr-32 lg:mr-36 pb-1">
            We document moments as they unfold, preserving emotion, atmosphere,
            and authenticity through thoughtful composition and restrained
            storytelling.
          </p>
        </div>
      </section>

      {/* Section 2: Vision. Precision. Depth. (White Editorial Cascading 3D Stack) */}
      <section
        id="optic-vision"
        aria-label="Vision. Precision. Depth."
        onMouseMove={handleStackPointerMove}
        onMouseLeave={() => setStackMotion({ x: 0, y: 0, active: false })}
        className="w-full bg-white text-[#0d0d0f] pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-10 overflow-hidden"
      >
        <div className="max-w-[920px] mx-auto flex flex-col items-center">
          {/* 3-Card 3D Perspective Fan Stack */}
          <div className="relative w-full max-w-[780px] h-[270px] sm:h-[380px] md:h-[430px] select-none">
            {VISION_CARDS.map((card, cardIndex) => {
              const slotIndex =
                (cardIndex - deckOffset + VISION_CARDS.length) %
                VISION_CARDS.length;
              const slot = STACK_SLOTS[slotIndex];
              const translateX = stackMotion.x * 16 * slot.depth;
              const translateY = stackMotion.y * 10 * slot.depth;
              const rotY = slot.rotateY + stackMotion.x * 5 * slot.depth;
              const rotX = stackMotion.y * -4 * slot.depth;

              return (
                <button
                  key={card.id}
                  type="button"
                  aria-label={`Focus ${card.title}`}
                  onClick={() =>
                    setDeckOffset((prev) =>
                      slotIndex === 2
                        ? (prev + 1) % VISION_CARDS.length
                        : (cardIndex + 1) % VISION_CARDS.length
                    )
                  }
                  style={{
                    zIndex: slot.zIndex,
                    transform: `perspective(1100px) translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg)`,
                  }}
                  className={`group absolute top-1/2 -translate-y-1/2 ${slot.positionClass} rounded-[12px] sm:rounded-[14px] overflow-hidden bg-neutral-200 shadow-[0_24px_55px_rgba(12,12,16,0.2)] cursor-pointer focus:outline-none ${
                    stackMotion.active
                      ? "transition-[transform,left,width,height] duration-150 ease-out"
                      : "transition-[transform,left,width,height] duration-500 ease-out"
                  }`}
                >
                  <SafeOpticImage
                    src={card.src}
                    fallbackSrc={card.fallbackSrc}
                    alt={card.title}
                    sizes="(max-width: 640px) 60vw, 440px"
                    className={`${card.imgClassName} group-hover:scale-[1.03] transition-transform duration-500`}
                  />
                </button>
              );
            })}

            {/* Minimalist Black Geometric Square Control Beneath Front Card */}
            <button
              type="button"
              aria-label="Cycle portrait showcase stack"
              onClick={() =>
                setDeckOffset((prev) => (prev + 1) % VISION_CARDS.length)
              }
              className="absolute bottom-0 right-[8%] sm:right-[7%] z-40 w-7 h-7 sm:w-9 sm:h-9 bg-[#0a0a0c] hover:bg-[#232328] transition-colors shadow-sm cursor-pointer"
            />
          </div>

          {/* Centered Bold Condensed Headline */}
          <h2 className="mt-10 sm:mt-12 font-optic-display font-bold uppercase text-[42px] sm:text-[58px] md:text-[68px] lg:text-[74px] leading-[0.94] tracking-[0.005em] text-[#0d0d0f] text-center">
            VISION. PRECISION. DEPTH.
          </h2>

          {/* Editorial Description */}
          <p className="mt-4 sm:mt-5 max-w-[495px] mx-auto text-center text-[13.5px] sm:text-[14.5px] leading-[1.6] text-[#73737a]">
            Add fluid simulations for stunning realism and Motion Fx that
            respond to your moves. Layer effects to create your own custom
            filters.
          </p>

          {/* Viewfinder-Bracketed Dark CTA Button ("MORE ABOUT US") */}
          <button
            type="button"
            onClick={() => setActiveModal("about")}
            className="mt-7 sm:mt-8 relative inline-flex items-center justify-center bg-[#0d0d0f] hover:bg-[#1e1e23] text-white px-9 py-3.5 text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.08em] shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition-all cursor-pointer group"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/75 group-hover:border-white transition-colors"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/75 group-hover:border-white transition-colors"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/75 group-hover:border-white transition-colors"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/75 group-hover:border-white transition-colors"
            />
            <span>MORE ABOUT US</span>
          </button>
        </div>
      </section>

      {/* Section 3: A Look Through The Studio Lens (Featured Logo Ticker & Widescreen Editorial Photo Stack) */}
      <section
        id="optic-studio-lens"
        aria-label="A look through the studio lens"
        className="w-full bg-white text-[#0d0d0f] pt-4 sm:pt-8 pb-20 sm:pb-28 px-4 sm:px-8"
      >
        <div className="max-w-[780px] mx-auto flex flex-col items-center text-center">
          {/* Condensed Uppercase Two-Line Heading */}
          <h2 className="font-optic-display font-bold uppercase text-[38px] sm:text-[52px] md:text-[62px] lg:text-[68px] leading-[0.94] tracking-[0.005em] text-[#0d0d0f]">
            A LOOK THROUGH THE
            <br />
            STUDIO LENS
          </h2>

          {/* Editorial Description */}
          <p className="mt-4 sm:mt-5 max-w-[445px] mx-auto text-[12px] sm:text-[13px] leading-[1.58] text-[#8c8c94]">
            We balance creative vision with technical precision, shaping depth
            through light, composition, and restraint to create timeless
            photographic experiences across mediums.
          </p>

          {/* Featured On + Edge-Faded Horizontal Press Strip */}
          <p className="mt-8 sm:mt-10 text-[11px] font-semibold tracking-[-0.01em] text-[#18181b]">
            Featured on
          </p>
          <FeaturedPressLogos />
        </div>

        {/* Stacked Widescreen Botanical & Macro Portrait Banners */}
        <div className="mt-9 sm:mt-11 w-full max-w-[1160px] mx-auto flex flex-col gap-[3px]">
          {STUDIO_LENS_PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              aria-label={`Open ${project.title} (${project.year})`}
              className="group relative w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[330px] rounded-[2px] overflow-hidden bg-neutral-900 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0d0f]"
            >
              <SafeOpticImage
                src={project.src}
                fallbackSrc={project.fallbackSrc}
                alt={`${project.title} — ${project.category}`}
                sizes="(max-width: 768px) 100vw, 1160px"
                className={`${project.imgClassName} group-hover:scale-[1.03] transition-transform duration-700 ease-out`}
              />

              {/* Subtle Bottom Scrim for Crisp White Label Contrast */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
              />

              {/* Bottom-Left Title & Year */}
              <div className="absolute bottom-3.5 sm:bottom-5 left-4 sm:left-6 z-10">
                <h3 className="font-optic-display font-bold uppercase text-white text-[22px] sm:text-[28px] md:text-[32px] leading-[0.95] tracking-[0.01em] drop-shadow-sm">
                  {project.title}
                </h3>
                <p className="mt-1 text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.02em] text-white/95">
                  {project.year}
                </p>
              </div>

              {/* Bottom-Right Frosted Category Pill */}
              <div className="absolute bottom-3.5 sm:bottom-5 right-4 sm:right-6 z-10">
                <span className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-white/18 backdrop-blur-md border border-white/25 text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.01em] text-white shadow-sm group-hover:bg-white/28 transition-colors">
                  {project.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Section 4: Services / Creative Work We Offer */}
      <section
        id="optic-services"
        aria-label="Creative work we offer"
        className="w-full bg-white text-[#0d0d0f] pt-8 sm:pt-12 lg:pt-16 pb-20 sm:pb-28 px-4 sm:px-8"
      >
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Sticky Services Header & Portfolio CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#b43c32]">
              SERVICES
            </p>

            <h2 className="mt-2 font-optic-display font-bold uppercase text-[44px] sm:text-[54px] lg:text-[62px] leading-[0.94] tracking-[0.005em] text-[#0d0d0f]">
              CREATIVE WORK
              <br />
              WE OFFER
            </h2>

            <p className="mt-4 sm:mt-5 max-w-[335px] text-[12.5px] sm:text-[13.5px] leading-[1.58] text-[#7b7b82]">
              A focused set of creative services covering photography, direction,
              and production, tailored to brands, campaigns, and editorial
              projects.
            </p>

            <button
              type="button"
              onClick={() => setActiveModal("portfolio")}
              className="mt-6 sm:mt-7 relative inline-flex items-center justify-center bg-[#0d0d0f] hover:bg-[#1e1e23] text-white px-7 py-3 text-[10px] font-medium uppercase tracking-[0.06em] shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all cursor-pointer group"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/75 group-hover:border-white transition-colors"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/75 group-hover:border-white transition-colors"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/75 group-hover:border-white transition-colors"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/75 group-hover:border-white transition-colors"
              />
              <span>VIEW PORTFOLIO</span>
            </button>
          </div>

          {/* Right Column: 2x3 Service Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {OPTIC_SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveService(service)}
                className="group bg-[#f4f4f7] border border-[#ebebef] border-b-[#e2e2e8] rounded-[4px] p-2.5 sm:p-3 flex flex-col text-left transition-all duration-300 hover:border-[#d4d4dd] hover:shadow-[0_10px_28px_rgba(12,12,16,0.06)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0d0f]"
              >
                {/* Square Thumbnail with Corner Viewfinder Reticles */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[2px] bg-neutral-200">
                  <SafeOpticImage
                    src={service.src}
                    fallbackSrc={service.fallbackSrc}
                    alt={service.title}
                    sizes="(max-width: 640px) 100vw, 320px"
                    className={`${service.imgClassName} transition-transform duration-500 ease-out`}
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white/80 group-hover:border-white transition-colors"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-white/80 group-hover:border-white transition-colors"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-white/80 group-hover:border-white transition-colors"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white/80 group-hover:border-white transition-colors"
                  />
                </div>

                {/* Card Copy */}
                <div className="pt-3 pb-1.5 px-1">
                  <h3 className="text-[13.5px] sm:text-[14px] font-semibold tracking-[-0.015em] text-[#0d0d0f]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[11.5px] sm:text-[12px] leading-[1.48] text-[#7b7b82]">
                    {service.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Benefits / Why Choose Our Studio? Bento Grid */}
      <section
        id="optic-benefits"
        aria-label="Why choose our studio"
        className="w-full bg-white text-[#0d0d0f] pt-6 sm:pt-10 pb-20 sm:pb-28 px-4 sm:px-8"
      >
        {/* Centered Header Block */}
        <div className="max-w-[740px] mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#b43c32]">
            BENEFITS
          </p>

          <h2 className="mt-2 font-optic-display font-bold uppercase text-[40px] sm:text-[54px] md:text-[62px] lg:text-[68px] leading-[0.94] tracking-[0.005em] text-[#0d0d0f]">
            WHY CHOOSE OUR
            <br />
            STUDIO?
          </h2>

          <p className="mt-4 max-w-[435px] mx-auto text-[12px] sm:text-[13px] leading-[1.58] text-[#8c8c94]">
            From thoughtful direction to seamless execution, our studio delivers
            a refined, stress-free creative experience from start to finish.
          </p>
        </div>

        {/* Bento Showcase Grid */}
        <div className="mt-10 sm:mt-12 w-full max-w-[1160px] mx-auto">
          {/* Top Row: 2 Equal 50/50 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Top-Left: Macro Optical Lens Barrel Calibration Detail */}
            <div className="group relative h-[225px] sm:h-[260px] lg:h-[285px] rounded-[6px] overflow-hidden bg-[#09090b] select-none">
              <SafeOpticImage
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85"
                fallbackSrc="/images/optic-eye-hero.jpg"
                alt="Macro detail of optical prime lens markings"
                sizes="(max-width: 768px) 100vw, 570px"
                className="object-cover object-center grayscale contrast-125 brightness-[0.35] group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_45%_42%,rgba(255,255,255,0.08)_0%,rgba(9,9,11,0.88)_72%)]"
              />
              {/* Precision Engraved Barrel Scale Graphic */}
              <svg
                aria-hidden="true"
                viewBox="0 0 420 240"
                className="pointer-events-none absolute inset-0 w-full h-full opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-rotate-1"
              >
                <g transform="rotate(-17 210 120)">
                  {/* Knurled outer barrel rings */}
                  <rect
                    x="-40"
                    y="12"
                    width="500"
                    height="48"
                    fill="#141417"
                    opacity="0.88"
                  />
                  <line
                    x1="-40"
                    y1="62"
                    x2="460"
                    y2="62"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="1"
                  />
                  <rect
                    x="-40"
                    y="64"
                    width="500"
                    height="82"
                    fill="#101013"
                    opacity="0.9"
                  />
                  <line
                    x1="-40"
                    y1="147"
                    x2="460"
                    y2="147"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="1"
                  />
                  {/* Focus distance numbers */}
                  <text
                    x="48"
                    y="92"
                    fill="rgba(255,255,255,0.52)"
                    fontSize="14"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    letterSpacing="2"
                  >
                    1.5
                  </text>
                  <text
                    x="104"
                    y="92"
                    fill="rgba(255,255,255,0.72)"
                    fontSize="15"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    1
                  </text>
                  <text
                    x="154"
                    y="92"
                    fill="rgba(255,255,255,0.88)"
                    fontSize="16"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    0.7
                  </text>
                  <text
                    x="224"
                    y="92"
                    fill="rgba(255,255,255,0.68)"
                    fontSize="15"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    0.5
                  </text>
                  {/* Focal length & aperture label */}
                  <text
                    x="120"
                    y="134"
                    fill="rgba(255,255,255,0.72)"
                    fontSize="20"
                    fontWeight="600"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    letterSpacing="3"
                  >
                    mm  1:3.5
                  </text>
                  {/* Aperture index mark */}
                  <line
                    x1="286"
                    y1="66"
                    x2="286"
                    y2="144"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="2.5"
                  />
                  {/* Aperture scale numbers */}
                  <text
                    x="198"
                    y="176"
                    fill="rgba(255,255,255,0.65)"
                    fontSize="15"
                    fontWeight="600"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    11   8   5.6   3.5
                  </text>
                </g>
              </svg>
            </div>

            {/* Top-Right: Streamlined Studio Process (Interactive Monochrome RAW <-> Color Split) */}
            <div
              role="region"
              aria-label="Streamlined studio process interactive color split comparison"
              onMouseMove={(e) => setWorkflowSplit(getSplitPercentage(e))}
              onMouseLeave={() => setWorkflowSplit(50)}
              className="group relative h-[225px] sm:h-[260px] lg:h-[285px] rounded-[6px] overflow-hidden bg-[#181715] select-none cursor-ew-resize"
            >
              {/* Color Graded Layer (Right Side) */}
              <SafeOpticImage
                src="/images/optic-lens-1.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85"
                alt="Streamlined studio process color graded frame"
                sizes="(max-width: 768px) 100vw, 570px"
                className="object-cover object-[50%_38%] saturate-[1.15] contrast-[1.05]"
              />

              {/* Monochrome RAW Layer (Left Clipped Side) */}
              <div
                aria-hidden="true"
                style={{ clipPath: `inset(0 ${100 - workflowSplit}% 0 0)` }}
                className="absolute inset-0 transition-[clip-path] duration-75 ease-out"
              >
                <SafeOpticImage
                  src="/images/optic-lens-1.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85"
                  alt=""
                  sizes="(max-width: 768px) 100vw, 570px"
                  className="object-cover object-[50%_38%] grayscale contrast-[1.2] brightness-[0.94]"
                />
              </div>

              {/* Split Line & Plus Handle */}
              <div
                aria-hidden="true"
                style={{ left: `${workflowSplit}%` }}
                className="pointer-events-none absolute top-0 bottom-0 w-px bg-white/65 -translate-x-1/2 z-10 transition-[left] duration-75 ease-out"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/25 backdrop-blur-md border border-white/60 flex items-center justify-center text-white text-xs font-light shadow-sm">
                  +
                </div>
              </div>

              {/* Bottom Legibility Gradient & Text */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
              />
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 z-10 pointer-events-none">
                <h3 className="text-[15px] sm:text-[17px] font-semibold tracking-[-0.015em] text-white">
                  Streamlined studio process
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-[11.5px] text-white/80">
                  A clear, organized workflow from briefing to final delivery
                </p>
              </div>
            </div>
          </div>

          {/* Lower Row: 3-Column Bento Grid with Flush Aligning Heights */}
          <div className="mt-3.5 grid grid-cols-1 md:grid-cols-3 md:h-[468px] gap-3.5">
            {/* Column 1: 10+ Years Experience + Industry-Leading Equipment */}
            <div className="flex flex-col gap-3.5 h-full">
              {/* Col 1 Top: 10+ Years Botanical Stillness Card */}
              <div className="group relative h-[285px] md:h-auto md:flex-1 rounded-[6px] overflow-hidden bg-[#2b2620]">
                <SafeOpticImage
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85"
                  alt="10+ years of studio retouching and photographic craft"
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center brightness-[0.65] saturate-[0.78] group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/55"
                />

                {/* Centered Framed Text Block */}
                <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
                  <div className="px-5 py-7 border border-white/35 bg-black/20 backdrop-blur-[2px] rounded-[2px] flex flex-col items-center">
                    <p className="text-[24px] sm:text-[26px] font-bold tracking-[-0.02em] text-white leading-none drop-shadow-sm">
                      10+ years
                    </p>
                    <p className="mt-2 max-w-[215px] text-[10.5px] sm:text-[11px] leading-[1.45] text-white/90">
                      Careful retouching and color grading delivered to studio
                      standards
                    </p>
                  </div>
                </div>
              </div>

              {/* Col 1 Bottom: Shot With Industry-Leading Equipment */}
              <div className="group relative h-[125px] md:h-[132px] shrink-0 rounded-[6px] overflow-hidden bg-[#121215]">
                <SafeOpticImage
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85"
                  alt="Shot with industry-leading medium format optics"
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15"
                />
                <div className="absolute bottom-3.5 left-4 right-4 z-10">
                  <h3 className="text-[14px] sm:text-[15.5px] font-semibold leading-[1.2] tracking-[-0.015em] text-white max-w-[235px]">
                    Shot with industry-leading equipment
                  </h3>
                </div>
              </div>
            </div>

            {/* Column 2: Full-Height Interactive Post-Production Comparison Card */}
            <div
              role="region"
              aria-label="Professional post-production interactive comparison"
              onMouseMove={(e) => setPostProdSplit(getSplitPercentage(e))}
              onMouseLeave={() => setPostProdSplit(50)}
              className="group relative h-[410px] md:h-full rounded-[6px] overflow-hidden bg-[#171615] select-none cursor-ew-resize"
            >
              {/* Color Graded Portrait Layer */}
              <SafeOpticImage
                src="/images/optic-lens-3.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
                alt="Professional post-production color retouching comparison"
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-[50%_26%] saturate-[1.12] contrast-[1.04]"
              />

              {/* Monochrome Unretouched Left Side */}
              <div
                aria-hidden="true"
                style={{ clipPath: `inset(0 ${100 - postProdSplit}% 0 0)` }}
                className="absolute inset-0 transition-[clip-path] duration-75 ease-out"
              >
                <SafeOpticImage
                  src="/images/optic-lens-3.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
                  alt=""
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-[50%_26%] grayscale contrast-[1.16] brightness-[0.95]"
                />
              </div>

              {/* Split Line & Center Reticle */}
              <div
                aria-hidden="true"
                style={{ left: `${postProdSplit}%` }}
                className="pointer-events-none absolute top-0 bottom-0 w-px bg-white/65 -translate-x-1/2 z-10 transition-[left] duration-75 ease-out"
              >
                <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/25 backdrop-blur-md border border-white/60 flex items-center justify-center text-white text-xs font-light shadow-sm">
                  +
                </div>
              </div>

              {/* Bottom Scrim & Headline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 z-10 pointer-events-none">
                <h3 className="text-[15px] sm:text-[17px] font-semibold leading-[1.18] tracking-[-0.015em] text-white">
                  Professional post-production included
                </h3>
                <p className="mt-1.5 text-[10.5px] sm:text-[11px] leading-[1.42] text-white/80 max-w-[260px]">
                  Careful retouching and color grading delivered to studio
                  standards
                </p>
              </div>
            </div>

            {/* Column 3: 600+ Projects Delivered + Triple Editorial Triptych + Tailored Direction */}
            <div className="flex flex-col gap-3.5 h-full">
              {/* Col 3 Top: 600+ Projects Social Proof Tile */}
              <div className="bg-[#f4f4f7] border border-[#ebebef] border-b-[#e2e2e8] rounded-[6px] px-5 py-4 h-[96px] md:h-[104px] shrink-0 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[25px] sm:text-[27px] font-semibold tracking-[-0.025em] text-[#0d0d0f] leading-none">
                    600+
                  </p>
                  <p className="mt-1.5 text-[11px] text-[#7b7b82]">
                    Projects delivered
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex -space-x-2">
                    {BENTO_AVATARS.map((avatar) => (
                      <div
                        key={avatar.name}
                        className="relative w-7 h-7 rounded-full overflow-hidden ring-2 ring-[#f4f4f7] bg-neutral-300"
                      >
                        <SafeOpticImage
                          src={avatar.src}
                          fallbackSrc={avatar.fallbackSrc}
                          alt={avatar.name}
                          sizes="28px"
                          className="object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    aria-label="5 out of 5 star studio rating"
                    className="mt-2 flex items-center gap-0.5 text-[#d95344]"
                  >
                    {[0, 1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 3 Middle: Three-Panel Editorial Triptych */}
              <div className="group relative h-[195px] md:h-auto md:flex-1 rounded-[6px] overflow-hidden grid grid-cols-3 bg-[#151412]">
                <div className="relative h-full w-full overflow-hidden">
                  <SafeOpticImage
                    src="/images/optic-service-3.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85"
                    alt="Editorial triptych frame 1"
                    sizes="140px"
                    className="object-cover object-[35%_22%] hue-rotate-[-8deg] contrast-[1.08] group-hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>
                <div className="relative h-full w-full overflow-hidden">
                  <SafeOpticImage
                    src="/images/optic-card-3.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85"
                    alt="Editorial triptych frame 2"
                    sizes="140px"
                    className="object-cover object-[50%_18%] group-hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>
                <div className="relative h-full w-full overflow-hidden">
                  <SafeOpticImage
                    src="/images/optic-lens-2.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=85"
                    alt="Editorial triptych frame 3"
                    sizes="140px"
                    className="object-cover object-[50%_42%] brightness-[0.92] group-hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Col 3 Bottom: Tailored Creative Direction */}
              <div className="group relative h-[125px] md:h-[132px] shrink-0 rounded-[6px] overflow-hidden bg-[#181715]">
                <SafeOpticImage
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
                  fallbackSrc="/images/optic-service-1.jpg"
                  alt="Tailored creative direction portrait"
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-[50%_24%] group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                />
                <div className="absolute bottom-3.5 left-4 right-4 z-10">
                  <h3 className="text-[14px] sm:text-[15.5px] font-semibold leading-[1.2] tracking-[-0.015em] text-white">
                    Tailored creative direction
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials / Words From Clients (Leftward Infinite Polaroid Reviews Marquee) */}
      <section
        id="optic-testimonials"
        aria-label="Words from clients"
        className="w-full bg-white text-[#0d0d0f] pt-6 sm:pt-10 pb-20 sm:pb-24 overflow-hidden"
      >
        {/* Centered Header Block */}
        <div className="max-w-[740px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#b43c32]">
            TESTIMONIALS
          </p>

          <h2 className="mt-2 font-optic-display font-bold uppercase text-[40px] sm:text-[54px] md:text-[62px] lg:text-[68px] leading-[0.94] tracking-[0.005em] text-[#0d0d0f]">
            WORDS FROM
            <br />
            CLIENTS
          </h2>

          <p className="mt-4 max-w-[445px] mx-auto text-[12px] sm:text-[13px] leading-[1.58] text-[#8c8c94]">
            Feedback from brands and creative partners who have collaborated
            with our studio across campaigns, editorials, and commercial
            projects.
          </p>
        </div>

        {/* Continuous Leftward Scrolling Polaroid Review Track */}
        <div className="mt-8 sm:mt-10 w-full overflow-hidden scroll-container pt-8 pb-4">
          <div className="flex w-max animate-scroll-left">
            {[0, 1].map((dupIndex) => (
              <div
                key={dupIndex}
                aria-hidden={dupIndex === 1}
                className="flex items-stretch gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0"
              >
                {CLIENT_TESTIMONIALS.map((review) => (
                  <article
                    key={`${dupIndex}-${review.id}`}
                    className="group relative w-[255px] sm:w-[275px] shrink-0 bg-[#f4f4f7] border border-[#ebebef] border-b-[#e2e2e8] rounded-[6px] pt-11 pb-5 px-5 flex flex-col justify-between min-h-[195px] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(12,12,16,0.06)]"
                  >
                    {/* Floating Tilted Miniature Polaroid Portrait */}
                    <div
                      className={`absolute -top-6 left-4 w-[48px] bg-white p-[3px] pb-[10px] rounded-[2px] shadow-[0_6px_16px_rgba(0,0,0,0.14)] border border-black/5 ${review.tiltClass} group-hover:rotate-0 transition-transform duration-300`}
                    >
                      <div className="relative aspect-square w-full overflow-hidden bg-neutral-200">
                        <SafeOpticImage
                          src={review.polaroidSrc}
                          fallbackSrc={review.fallbackSrc}
                          alt={dupIndex === 0 ? review.name : ""}
                          sizes="56px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* 5-Star Coral Rating + Quote */}
                    <div>
                      <div
                        aria-label="5 out of 5 stars"
                        className="flex items-center gap-0.5 text-[#d95344]"
                      >
                        {[0, 1, 2, 3, 4].map((star) => (
                          <svg
                            key={star}
                            className="w-3.5 h-3.5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="mt-3 text-[11.5px] sm:text-[12px] leading-[1.48] text-[#606068]">
                        {review.quote}
                      </p>
                    </div>

                    {/* Author & Role */}
                    <div className="mt-5 pt-2">
                      <p className="text-[11.5px] font-semibold text-[#0d0d0f] leading-tight">
                        {review.name}
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#8c8c94]">
                        {review.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Moody Visual Stories Banner + Fanned 3-Polaroid Cluster */}
      <section
        id="optic-visual-stories"
        aria-label="Visual stories that hold feeling and intention"
        className="relative w-full overflow-hidden bg-[#281e17] text-white"
      >
        {/* Intimate Warm Backdrop Photography & Scrims */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
        >
          <SafeOpticImage
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85"
            fallbackSrc="/images/optic-eye-hero.jpg"
            alt=""
            sizes="100vw"
            className="object-cover object-center sepia-[0.25] contrast-[1.08] brightness-[0.58]"
          />
          <div className="absolute inset-0 bg-[#2a1e17]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a120e]/60 via-transparent to-[#150f0b]/70" />
        </div>

        {/* Centered Editorial Layout */}
        <div className="relative z-10 max-w-[900px] mx-auto px-5 sm:px-10 py-24 sm:py-32 lg:py-36">
          <h2 className="font-optic-display font-bold uppercase text-white text-[34px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[0.94] tracking-[0.005em] max-w-[660px]">
            VISUAL STORIES THAT HOLD
            <br />
            FEELING AND INTENTION
          </h2>

          <div className="mt-8 sm:mt-10 flex flex-col md:flex-row md:items-center gap-8 sm:gap-12">
            {/* Fanned 3-Polaroid Showcase Cluster */}
            <div className="flex items-center justify-center md:justify-start shrink-0 pt-2 pb-1">
              {STORY_POLAROIDS.map((polaroid) => (
                <button
                  key={polaroid.id}
                  type="button"
                  onClick={() => setActiveModal("portfolio")}
                  aria-label="Explore Optic Studio portfolio stories"
                  className={`relative bg-white p-1.5 pb-4 rounded-[3px] shadow-[0_14px_32px_rgba(0,0,0,0.48)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:z-40 cursor-pointer focus:outline-none ${polaroid.wrapperClass}`}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-[2px] bg-neutral-800">
                    <SafeOpticImage
                      src={polaroid.src}
                      fallbackSrc={polaroid.fallbackSrc}
                      alt={polaroid.alt}
                      sizes="160px"
                      className={polaroid.imgPosition}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Statement & Viewfinder White CONTACT US Button */}
            <div className="max-w-[330px]">
              <p className="text-[12px] sm:text-[13px] leading-[1.52] text-white/90">
                We document moments as they unfold, preserving emotion,
                atmosphere, and authenticity through thoughtful composition and
                restrained visual storytelling.
              </p>

              <button
                type="button"
                onClick={() => {
                  setContactSubmitted(false);
                  setActiveModal("contact");
                }}
                className="mt-5 relative inline-flex items-center justify-center bg-white hover:bg-neutral-100 text-[#0d0d0f] px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-all cursor-pointer group"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#0d0d0f]/75 group-hover:border-[#0d0d0f] transition-colors"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#0d0d0f]/75 group-hover:border-[#0d0d0f] transition-colors"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#0d0d0f]/75 group-hover:border-[#0d0d0f] transition-colors"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#0d0d0f]/75 group-hover:border-[#0d0d0f] transition-colors"
                />
                <span>CONTACT US</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Viewfinder Modal (Portfolio / Blog / About / Contact) */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[86vh] overflow-y-auto bg-[#0d0c0b] border border-white/20 p-6 sm:p-9 text-white shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/15">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                  OPTIC STUDIO ARCHIVE
                </p>
                <h2 className="mt-1 font-optic-display font-bold uppercase text-3xl sm:text-4xl tracking-[0.02em]">
                  {activeModal === "portfolio" && "Selected Commissions"}
                  {activeModal === "blog" && "Field Notes & Essays"}
                  {activeModal === "about" && "About Optic Studio"}
                  {activeModal === "contact" && "Start a Commission"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="relative px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/80 hover:text-white cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/60"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/60"
                />
                CLOSE ✕
              </button>
            </div>

            {/* Portfolio Content */}
            {activeModal === "portfolio" && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {OPTIC_SERIES.map((series) => (
                  <div
                    key={series.id}
                    className="group border border-white/15 bg-black/50 overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                      <SafeOpticImage
                        src={series.src}
                        fallbackSrc={series.fallbackSrc}
                        alt={series.title}
                        sizes="(max-width: 640px) 100vw, 340px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-white/50">
                          SERIES {series.code} · {series.year}
                        </p>
                        <h3 className="mt-0.5 text-sm font-medium text-white">
                          {series.title}
                        </h3>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.12em] text-white/60">
                        {series.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Blog Content */}
            {activeModal === "blog" && (
              <div className="mt-6 divide-y divide-white/15">
                {OPTIC_JOURNAL.map((post) => (
                  <article key={post.title} className="py-5 first:pt-1 last:pb-1">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                      {post.date} · {post.readTime} READ
                    </p>
                    <h3 className="mt-1.5 font-optic-display font-bold uppercase text-2xl tracking-[0.02em] text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      {post.summary}
                    </p>
                  </article>
                ))}
              </div>
            )}

            {/* About Content */}
            {activeModal === "about" && (
              <div className="mt-6 space-y-5 text-sm sm:text-[15px] leading-[1.7] text-white/80">
                <p>
                  Optic Studio is an independent visual practice focused on
                  macro studies, intimate portraiture, and long-form
                  documentary photography. Rather than staging perfection, our
                  work leans into real ambient light, optical character, and the
                  quiet space between frames.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                      PRACTICE
                    </p>
                    <p className="mt-1 text-white font-medium">
                      Berlin · Tokyo
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                      DISCIPLINES
                    </p>
                    <p className="mt-1 text-white font-medium">
                      Editorial &amp; Macro Film
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                      AVAILABILITY
                    </p>
                    <p className="mt-1 text-white font-medium">
                      Worldwide Commissions
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Inquiry Form */}
            {activeModal === "contact" && (
              <div className="mt-6">
                {contactSubmitted ? (
                  <div className="py-6 space-y-4">
                    <p className="font-optic-display font-bold uppercase text-3xl tracking-[0.02em] text-white">
                      TRANSMISSION RECEIVED.
                    </p>
                    <p className="text-sm text-white/75 leading-relaxed max-w-md">
                      Thank you for writing to Optic Studio. We review every
                      commission inquiry personally and reply within 48 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveModal(null)}
                      className="px-6 py-2.5 border border-white/60 hover:bg-white hover:text-black text-[11px] font-medium uppercase tracking-[0.12em] transition-colors cursor-pointer"
                    >
                      RETURN TO STUDIO
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="optic-name"
                          className="block text-[10px] uppercase tracking-[0.14em] text-white/60 mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          id="optic-name"
                          type="text"
                          required
                          placeholder="Alexei Lind"
                          className="w-full bg-black/70 border border-white/25 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="optic-email"
                          className="block text-[10px] uppercase tracking-[0.14em] text-white/60 mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="optic-email"
                          type="email"
                          required
                          placeholder="studio@optic.example"
                          className="w-full bg-black/70 border border-white/25 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="optic-brief"
                        className="block text-[10px] uppercase tracking-[0.14em] text-white/60 mb-1.5"
                      >
                        Project Brief &amp; Timeline
                      </label>
                      <textarea
                        id="optic-brief"
                        rows={4}
                        required
                        placeholder="Editorial assignment, exhibition commission, or commercial campaign..."
                        className="w-full bg-black/70 border border-white/25 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-white resize-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-4">
                      <span className="text-[11px] text-white/50">
                        hello@opticstudio.example
                      </span>
                      <button
                        type="submit"
                        className="relative px-7 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute top-0 left-0 w-2 h-2 border-t border-l border-white"
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute top-0 right-0 w-2 h-2 border-t border-r border-white"
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"
                        />
                        SEND INQUIRY
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Studio Lens Series Lightbox Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-4xl bg-[#0d0c0b] border border-white/20 text-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/7] w-full bg-neutral-900">
              <SafeOpticImage
                src={activeProject.src}
                fallbackSrc={activeProject.fallbackSrc}
                alt={activeProject.title}
                sizes="(max-width: 1024px) 100vw, 900px"
                className={activeProject.imgClassName}
              />
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 px-3.5 py-1.5 bg-black/65 backdrop-blur-md border border-white/25 text-[10px] font-medium uppercase tracking-[0.14em] text-white/90 hover:text-white cursor-pointer"
              >
                CLOSE ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/55">
                  {activeProject.category} · {activeProject.location} ·{" "}
                  {activeProject.year}
                </p>
                <h3 className="mt-1.5 font-optic-display font-bold uppercase text-3xl sm:text-4xl tracking-[0.015em] text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-2.5 max-w-xl text-sm text-white/75 leading-relaxed">
                  {activeProject.notes}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  setContactSubmitted(false);
                  setActiveModal("contact");
                }}
                className="relative shrink-0 px-6 py-2.5 text-[10.5px] font-medium uppercase tracking-[0.12em] text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 w-2 h-2 border-t border-l border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-0 w-2 h-2 border-t border-r border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/80"
                />
                COMMISSION SIMILAR WORK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Service Detail Lightbox Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveService(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#0d0c0b] border border-white/20 text-white shadow-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sm:col-span-5 relative aspect-square bg-neutral-900 overflow-hidden">
              <SafeOpticImage
                src={activeService.src}
                fallbackSrc={activeService.fallbackSrc}
                alt={activeService.title}
                sizes="(max-width: 640px) 100vw, 280px"
                className={activeService.imgClassName}
              />
            </div>

            <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#e05b4f]">
                    SERVICES · OPTIC STUDIO
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveService(null)}
                    className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/70 hover:text-white cursor-pointer"
                  >
                    CLOSE ✕
                  </button>
                </div>

                <h3 className="mt-2 font-optic-display font-bold uppercase text-3xl sm:text-4xl tracking-[0.015em] text-white">
                  {activeService.title}
                </h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  {activeService.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/15">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/45">
                    DELIVERABLES
                  </p>
                  <p className="mt-1 text-xs text-white/85 font-medium">
                    {activeService.deliverables}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveService(null);
                  setContactSubmitted(false);
                  setActiveModal("contact");
                }}
                className="relative self-start px-6 py-2.5 text-[10.5px] font-medium uppercase tracking-[0.12em] text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 w-2 h-2 border-t border-l border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-0 w-2 h-2 border-t border-r border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/80"
                />
                INQUIRE ABOUT SERVICE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Made in Framer Badge */}
      <FramerBadge />
    </div>
  );
}

