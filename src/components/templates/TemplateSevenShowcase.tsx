"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface FilmWorkItem {
  id: string;
  title: string;
  category: "Portraits" | "Products" | "Weddings";
  stock: string;
  location: string;
  year: string;
  src: string;
  fallbackSrc: string;
}

const STUDIO_AVATAR = {
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85",
  fallbackSrc:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85",
};

const FILM_WORKS: FilmWorkItem[] = [
  {
    id: "work-golden-knit",
    title: "Sunday Daylight — Knitwear Study",
    category: "Portraits",
    stock: "Kodak Portra 400 · 35mm",
    location: "Williamsburg Rooftop, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-blue-horizon",
    title: "Low Angle Sky & Shades",
    category: "Portraits",
    stock: "Cinestill 400D · 35mm",
    location: "DUMBO Waterfront, Brooklyn",
    year: "2026",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-pastel-cheek",
    title: "Soft Grain Window Portrait",
    category: "Portraits",
    stock: "Kodak Gold 200 · 35mm",
    location: "Greenpoint Studio, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-fuji-morning",
    title: "Shimoyoshida Morning Walk",
    category: "Weddings",
    stock: "Portra 160 · 120mm",
    location: "Fujiyoshida, Japan",
    year: "2026",
    src: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-subway-blur",
    title: "Platform Motion — Late Express",
    category: "Products",
    stock: "Ilford HP5 · Pushed 1600",
    location: "Bedford Ave Station, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-warm-flare",
    title: "Golden Hour Bride & Veil",
    category: "Weddings",
    stock: "Kodak Portra 800 · 35mm",
    location: "Prospect Park Boat House",
    year: "2026",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-ceramic-studio",
    title: "Stoneware & Linen Objects",
    category: "Products",
    stock: "Mamiya 7II · Portra 160",
    location: "Red Hook Loft, Brooklyn",
    year: "2026",
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-garden-vows",
    title: "Conservatory Ceremony",
    category: "Weddings",
    stock: "Contax G2 · Portra 400",
    location: "Brooklyn Botanic Garden",
    year: "2026",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85",
  },
];

const ABOUT_COLLAGE = {
  mainCamera: {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
    alt: "Photographer holding DSLR camera in warm fairy-light studio",
  },
  insetPortrait: {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    alt: "Moody flash-lit analog portrait against warm dark studio",
  },
};

const STORY_STATS = [
  { value: "250+", label: "STORIES CAPTURED" },
  { value: "120+", label: "HAPPY CLIENTS" },
  { value: "35+", label: "DESTINATIONS EXPLORED" },
  { value: "12+", label: "PHOTOGRAPHY AWARDS" },
];

interface StudioServiceItem {
  num: string;
  title: string;
  description: string;
  ctaLabel: string;
  shootCategory: string;
  deliverables: string;
}

const STUDIO_SERVICES: StudioServiceItem[] = [
  {
    num: "01",
    title: "WEDDING PHOTOGRAPHY",
    description:
      "From quiet exchanges to unforgettable celebrations, I document your wedding with an honest, cinematic, and timeless approach.",
    ctaLabel: "EXPLORE WEDDING PHOTOGRAPHY",
    shootCategory: "Wedding Photography",
    deliverables: "Full-day 35mm film + digital coverage, 600+ edited frames & heirloom prints.",
  },
  {
    num: "02",
    title: "PORTRAIT PHOTOGRAPHY",
    description:
      "Personal portraits that reveal your character, confidence, and individuality through natural expression and considered light.",
    ctaLabel: "EXPLORE PORTRAITS",
    shootCategory: "Portrait Photography",
    deliverables: "2-hour daylight studio or on-location session with scanned contact sheets.",
  },
  {
    num: "03",
    title: "FASHION & EDITORIAL",
    description:
      "Distinctive imagery for designers, creatives, publications, and brands seeking a refined visual identity.",
    ctaLabel: "EXPLORE EDITORIAL",
    shootCategory: "Fashion & Editorial",
    deliverables: "Art direction, lookbook sequencing, medium-format capture & color grading.",
  },
  {
    num: "04",
    title: "BRAND & COMMERCIAL",
    description:
      "Thoughtful photography that communicates your brand's personality, values, and vision through compelling visual storytelling.",
    ctaLabel: "EXPLORE BRAND PHOTOGRAPHY",
    shootCategory: "Brand & Commercial",
    deliverables: "Campaign stills, tactile product scenes & commercial licensing suite.",
  },
  {
    num: "05",
    title: "EVENTS & CELEBRATIONS",
    description:
      "From intimate gatherings to larger occasions, every meaningful detail and spontaneous moment is documented with care.",
    ctaLabel: "EXPLORE EVENT PHOTOGRAPHY",
    shootCategory: "Events & Celebrations",
    deliverables: "Candid documentary coverage with 48-hour press & gallery turnaround.",
  },
  {
    num: "06",
    title: "TRAVEL & LIFESTYLE",
    description:
      "Atmospheric imagery inspired by places, cultures, everyday rituals, and the beauty of discovering something new.",
    ctaLabel: "EXPLORE LIFESTYLE PHOTOGRAPHY",
    shootCategory: "Travel & Lifestyle",
    deliverables: "Destination storytelling for hospitality, journals, and cultural spaces.",
  },
];

interface ClientTestimonial {
  id: string;
  quote: string;
  author: string;
  meta: string;
  tone: "terracotta" | "obsidian";
}

const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: "testimonial-emma-liam",
    quote:
      "“Looking through our photographs feels like stepping back into the day itself. Every emotion, every little detail, and every unexpected moment was captured so naturally.”",
    author: "EMMA & LIAM",
    meta: "WEDDING PHOTOGRAPHY · 2025",
    tone: "terracotta",
  },
  {
    id: "testimonial-olivia-bennett",
    quote:
      "“LUMEVÉ understood our vision from the very beginning. The images feel sophisticated, authentic, and completely aligned with who we are as a brand.”",
    author: "OLIVIA BENNETT",
    meta: "CREATIVE DIRECTOR · 2025",
    tone: "obsidian",
  },
  {
    id: "testimonial-sophia-carter",
    quote:
      "“I never expected to feel so comfortable in front of the camera. The entire experience felt personal, relaxed, and genuinely inspiring.”",
    author: "SOPHIA CARTER",
    meta: "PORTRAIT SESSION · 2025",
    tone: "terracotta",
  },
];

interface StudioFaqItem {
  question: string;
  answer: string;
}

const STUDIO_FAQS: StudioFaqItem[] = [
  {
    question: "How do I book a session?",
    answer:
      "Click Book a Session or Ask a Question to share your preferred dates, location, and shoot category. We'll follow up within 24 hours with availability and a custom proposal.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Weddings are typically reserved 6 to 12 months ahead, while portraits, brand campaigns, and editorial sessions are best booked 3 to 6 weeks in advance.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Yes — our Brooklyn studio photographs weddings and editorial commissions across the US, Europe, and Japan with simplified travel flat rates.",
  },
  {
    question: "Can I request a specific photography style?",
    answer:
      "Absolutely. Before every shoot we build a collaborative mood board covering 35mm film grain preferences, flash vs. natural light, and framing direction.",
  },
  {
    question: "Do you provide edited photographs?",
    answer:
      "Every delivered gallery is individually color-graded, film-matched, and lightly retouched while preserving natural skin texture and authentic light.",
  },
  {
    question: "When will I receive my photographs?",
    answer:
      "Portrait and commercial previews arrive within 72 hours, with full high-resolution galleries ready in 2 weeks (or 4 to 6 weeks for full wedding stories).",
  },
  {
    question: "How do I receive my photos?",
    answer:
      "Images are delivered via a private online fine-art gallery with instant web & print-resolution downloads, plus optional archival cotton rag prints.",
  },
  {
    question: "Can I reschedule my session?",
    answer:
      "Yes — weather shifts and life happen. Outdoor sessions can be moved once at no extra fee with at least 48 hours' notice.",
  },
];

interface SelectedProjectCard {
  id: string;
  projectNum: string;
  badge: string;
  title: string;
  caption: string;
  category: FilmWorkItem["category"];
  stock: string;
  location: string;
  year: string;
  src: string;
  fallbackSrc: string;
}

const SELECTED_PROJECTS: SelectedProjectCard[] = [
  {
    id: "proj-art-of-togetherness",
    projectNum: "PROJECT 01",
    badge: "WEDDING PHOTOGRAPHY",
    title: "THE ART OF TOGETHERNESS",
    caption:
      "Honest emotions, intimate details, and the beauty of two lives becoming one.",
    category: "Weddings",
    stock: "Kodak Portra 800 · 35mm",
    location: "Hudson Meadow, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-in-her-own-light",
    projectNum: "PROJECT 02",
    badge: "PORTRAIT PHOTOGRAPHY",
    title: "IN HER OWN LIGHT",
    caption:
      "Expressive portraits celebrating individuality, confidence, and quiet beauty.",
    category: "Portraits",
    stock: "Kodak Portra 400 · 120mm",
    location: "Red Hook Studio, Brooklyn",
    year: "2026",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-the-modern-muse",
    projectNum: "PROJECT 03",
    badge: "FASHION & EDITORIAL",
    title: "THE MODERN MUSE",
    caption:
      "Artful imagery shaped by movement, texture, light, and contemporary style.",
    category: "Portraits",
    stock: "Ilford Delta 400 · Medium Format",
    location: "SoHo Gallery Space, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-everyday-poetry",
    projectNum: "PROJECT 04",
    badge: "LIFESTYLE PHOTOGRAPHY",
    title: "EVERYDAY POETRY",
    caption:
      "The little moments that often mean the most, captured as they naturally unfold.",
    category: "Products",
    stock: "Cinestill 400D · 35mm",
    location: "Copenhagen / Brooklyn",
    year: "2026",
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-stoneware-study",
    projectNum: "PROJECT 05",
    badge: "STILL LIFE & PRODUCT",
    title: "FORMS IN DAYLIGHT",
    caption:
      "Tactile ceramics and studio objects bathed in soft north-window grain.",
    category: "Products",
    stock: "Mamiya 7II · Portra 160",
    location: "Red Hook Loft, Brooklyn",
    year: "2026",
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-conservatory-vows",
    projectNum: "PROJECT 06",
    badge: "WEDDING PHOTOGRAPHY",
    title: "GREENHOUSE VOWS",
    caption:
      "Sun-dappled glasshouse portraits of unscripted vows and quiet laughter.",
    category: "Weddings",
    stock: "Contax G2 · Portra 400",
    location: "Brooklyn Botanic Garden",
    year: "2026",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-sunday-knit",
    projectNum: "PROJECT 07",
    badge: "PORTRAIT PHOTOGRAPHY",
    title: "SUNDAY GOLDEN HOUR",
    caption:
      "Easy afternoon light across rooftop concrete with genuine warmth and motion.",
    category: "Portraits",
    stock: "Kodak Gold 200 · 35mm",
    location: "Williamsburg, NY",
    year: "2026",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-fuji-walk",
    projectNum: "PROJECT 08",
    badge: "LIFESTYLE PHOTOGRAPHY",
    title: "MORNING IN SHIMOYOSHIDA",
    caption:
      "Quiet neighborhood streets and snow-capped horizons exposed on medium format.",
    category: "Weddings",
    stock: "Portra 160 · 120mm",
    location: "Fujiyoshida, Japan",
    year: "2026",
    src: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
  },
];

// 24 orbital slots evenly spaced every 15deg around a 560px radius arch
const ORBIT_SLOTS = Array.from({ length: 24 }, (_, idx) => {
  const angleDeg = idx * 15;
  const angleRad = (angleDeg * Math.PI) / 180;
  const radius = 560;
  const x = Math.round(radius * Math.sin(angleRad) * 100) / 100;
  const y = Math.round(-radius * Math.cos(angleRad) * 100) / 100;
  const work = FILM_WORKS[idx % 6];
  return {
    slotKey: `orbit-${idx}`,
    angleDeg,
    x,
    y,
    work,
  };
});

function SafeFilmImage({
  src,
  fallbackSrc,
  alt,
  sizes,
  priority = false,
  className = "object-cover",
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const activeSrc = failedSrc === src ? fallbackSrc : src;

  return (
    <Image
      src={activeSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => {
        if (failedSrc !== src) {
          setFailedSrc(src);
        }
      }}
      className={className}
    />
  );
}

function DiagonalArrowIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 11.5L11.5 4.5" />
      <path d="M5.5 4.5H11.5V10.5" />
    </svg>
  );
}

export default function TemplateSevenShowcase() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<StudioServiceItem | null>(
    null
  );
  const [servicesOverviewOpen, setServicesOverviewOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<FilmWorkItem | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    shootType: "Portrait Photography",
    details: "",
  });

  const displayedProjects = useMemo(
    () => (showAllProjects ? SELECTED_PROJECTS : SELECTED_PROJECTS.slice(0, 4)),
    [showAllProjects]
  );

  const allLightboxFrames = useMemo<FilmWorkItem[]>(
    () => [
      ...FILM_WORKS,
      ...SELECTED_PROJECTS.map((project) => ({
        id: project.id,
        title: project.title,
        category: project.category,
        stock: project.stock,
        location: project.location,
        year: project.year,
        src: project.src,
        fallbackSrc: project.fallbackSrc,
      })),
    ],
    []
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxItem(null);
        setInquiryOpen(false);
        setStoryModalOpen(false);
        setActiveService(null);
        setServicesOverviewOpen(false);
      }

      if (lightboxItem) {
        const index = allLightboxFrames.findIndex(
          (w) => w.id === lightboxItem.id
        );
        if (event.key === "ArrowRight" && index >= 0) {
          setLightboxItem(
            allLightboxFrames[(index + 1) % allLightboxFrames.length]
          );
        } else if (event.key === "ArrowLeft" && index >= 0) {
          setLightboxItem(
            allLightboxFrames[
              (index - 1 + allLightboxFrames.length) % allLightboxFrames.length
            ]
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem, allLightboxFrames]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-[#141416] selection:bg-[#141416] selection:text-white relative">
      {/* Shared Template Switcher Navbar */}
      <div className="border-b border-[#ececf0] bg-[#fbfbfc]">
        <Navbar />
      </div>

      {/* ================================================================= */}
      {/* 1. HERO: GALLERYFOLIO + MOVING ORBITING ARCH + ALEX SMITH         */}
      {/* ================================================================= */}
      <section
        id="alex-top"
        className="relative w-full min-h-[630px] sm:min-h-[695px] overflow-hidden pt-7 sm:pt-9 pb-14 sm:pb-16 flex flex-col justify-between"
      >
        {/* Top Floating GALLERYFOLIO Pill Bar */}
        <header className="relative z-20 px-4 sm:px-6 w-full">
          <div className="max-w-[540px] mx-auto rounded-2xl bg-white/95 backdrop-blur-md border border-[#e6e6eb] shadow-[0_2px_12px_rgba(16,16,20,0.03)] px-5 py-3 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("alex-top")}
              className="inline-flex items-center gap-2 text-[#141416] hover:opacity-75 transition-opacity cursor-pointer"
            >
              {/* 8-dot starburst mark */}
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="4.8" r="1.9" />
                <circle cx="17.1" cy="6.9" r="1.9" />
                <circle cx="19.2" cy="12" r="1.9" />
                <circle cx="17.1" cy="17.1" r="1.9" />
                <circle cx="12" cy="19.2" r="1.9" />
                <circle cx="6.9" cy="17.1" r="1.9" />
                <circle cx="4.8" cy="12" r="1.9" />
                <circle cx="6.9" cy="6.9" r="1.9" />
              </svg>
              <span className="text-[12.5px] sm:text-[13px] font-semibold tracking-[0.02em] uppercase">
                GALLERYFOLIO
              </span>
            </button>

            <nav className="flex items-center gap-5 sm:gap-6">
              <button
                type="button"
                onClick={() => scrollToSection("alex-about")}
                className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#5e5e66] hover:text-[#141416] transition-colors cursor-pointer"
              >
                ABOUT
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("alex-works")}
                className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#5e5e66] hover:text-[#141416] transition-colors cursor-pointer"
              >
                WORKS
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("alex-services")}
                className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#5e5e66] hover:text-[#141416] transition-colors cursor-pointer"
              >
                SERVICES
              </button>
            </nav>
          </div>
        </header>

        {/* Orbiting Moving Photo Cards Arch */}
        <div
          aria-label="Moving film showcase arch"
          className="pointer-events-none absolute inset-x-0 top-[96px] sm:top-[110px] h-[640px] z-10 origin-top scale-[0.58] sm:scale-[0.82] lg:scale-100"
        >
          <div className="scroll-container relative w-full h-full">
            <div className="animate-orbit-wheel absolute left-1/2 top-[614px] w-0 h-0">
              {ORBIT_SLOTS.map((slot, index) => (
                <button
                  key={slot.slotKey}
                  type="button"
                  onClick={() => setLightboxItem(slot.work)}
                  aria-label={`Open ${slot.work.title}`}
                  style={{
                    left: `${slot.x}px`,
                    top: `${slot.y}px`,
                    transform: `translate(-50%, -50%) rotate(${slot.angleDeg}deg)`,
                  }}
                  className="pointer-events-auto group absolute w-[106px] h-[106px] sm:w-[110px] sm:h-[110px] rounded-[20px] overflow-hidden bg-neutral-200 border border-white/80 shadow-[0_12px_30px_rgba(18,18,22,0.1)] hover:shadow-[0_16px_38px_rgba(18,18,22,0.2)] transition-shadow duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#141416]"
                >
                  <SafeFilmImage
                    src={slot.work.src}
                    fallbackSrc={slot.work.fallbackSrc}
                    alt={slot.work.title}
                    priority={index < 5 || index > 19}
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Artist Identity Block */}
        <div className="relative z-20 max-w-xl mx-auto px-4 text-center mt-[165px] sm:mt-[215px]">
          <button
            type="button"
            onClick={() => scrollToSection("alex-about")}
            aria-label="About Alex Smith"
            className="group relative w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full overflow-hidden bg-neutral-200 mx-auto block shadow-[0_6px_22px_rgba(0,0,0,0.08)] ring-2 ring-white cursor-pointer focus:outline-none focus-visible:ring-[#141416]"
          >
            <SafeFilmImage
              src={STUDIO_AVATAR.src}
              fallbackSrc={STUDIO_AVATAR.fallbackSrc}
              alt="Alex Smith — Brooklyn Photographer"
              priority
              sizes="80px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </button>

          <h1 className="mt-5 text-[38px] sm:text-[52px] lg:text-[60px] font-medium tracking-[-0.025em] leading-[1.04] text-[#141416]">
            ALEX SMITH
          </h1>

          <p className="mt-3.5 max-w-[335px] mx-auto text-[13px] sm:text-[14px] leading-[1.48] text-[#7c7c82]">
            Brooklyn photography studio for portraits, products and weddings,
            shot with a film-inspired eye.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-7 text-[12px] sm:text-[12.5px] font-medium text-[#18181c]">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
            >
              <span>X</span>
              <DiagonalArrowIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
            >
              <span>IG</span>
              <DiagonalArrowIcon />
            </a>
            <button
              type="button"
              onClick={() => {
                setInquirySent(false);
                setInquiryOpen(true);
              }}
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span>alex@gmail.com</span>
              <DiagonalArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. A LITTLE ABOUT ME + OVERLAP COLLAGE + TERRACOTTA STATS STRIP   */}
      {/* ================================================================= */}
      <section
        id="alex-about"
        className="scroll-mt-6 w-full bg-white border-t border-[#ececf0] py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Collage: Large Bokeh Camera Shot + Overlapping Framed Inset */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[330px] sm:max-w-[360px] pb-8 pr-6 sm:pr-8">
                <div className="relative aspect-[4/4.75] w-full rounded-xl overflow-hidden bg-neutral-100 shadow-[0_14px_34px_rgba(18,18,22,0.08)]">
                  <SafeFilmImage
                    src={ABOUT_COLLAGE.mainCamera.src}
                    fallbackSrc={ABOUT_COLLAGE.mainCamera.fallbackSrc}
                    alt={ABOUT_COLLAGE.mainCamera.alt}
                    sizes="(max-width: 640px) 90vw, 360px"
                    className="object-cover"
                  />
                </div>

                {/* Overlapping Flash Portrait Instant Inset */}
                <div className="absolute -bottom-1 right-0 w-[148px] sm:w-[170px] aspect-square rounded-lg bg-white p-1.5 shadow-[0_16px_38px_rgba(16,16,20,0.16)] border border-black/5">
                  <div className="relative w-full h-full rounded-[5px] overflow-hidden bg-neutral-900">
                    <SafeFilmImage
                      src={ABOUT_COLLAGE.insetPortrait.src}
                      fallbackSrc={ABOUT_COLLAGE.insetPortrait.fallbackSrc}
                      alt={ABOUT_COLLAGE.insetPortrait.alt}
                      sizes="180px"
                      className="object-cover object-top contrast-110"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Block: Eyebrow + Mixed Italic/Condensed Heading + Pull Quote */}
            <div className="lg:col-span-7 lg:pl-6">
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                A LITTLE ABOUT ME
              </p>

              <h2 className="mt-2">
                <span className="block font-serif italic text-[24px] sm:text-[31px] leading-[1.08] text-[#c4553d]">
                  behind every beautiful image
                </span>
                <span className="block font-optic-display font-bold uppercase text-[42px] sm:text-[54px] leading-[0.9] tracking-[-0.015em] text-[#141416] mt-0.5">
                  IS A STORY.
                </span>
              </h2>

              <p className="mt-4 max-w-[410px] text-[12.5px] sm:text-[13px] leading-[1.6] text-[#73737a]">
                I&apos;m a photographer drawn to the honest, imperfect, and
                beautifully human moments that make life meaningful. Through
                natural light, thoughtful composition, and an editorial eye, I
                create imagery that feels effortless, personal, and timeless.
              </p>

              <blockquote className="mt-5 max-w-[400px] font-serif italic text-[17px] sm:text-[20px] leading-[1.32] text-[#222226]">
                &ldquo;For me, photography isn&apos;t simply about how a moment
                looks. It&apos;s about how it feels when you look back.&rdquo;
              </blockquote>

              <button
                type="button"
                onClick={() => setStoryModalOpen(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c4553d]/80 px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#c4553d] hover:bg-[#c4553d] hover:text-white transition-colors cursor-pointer group"
              >
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-current transition-transform group-hover:scale-125"
                />
                <span>GET TO KNOW ME</span>
              </button>
            </div>
          </div>

          {/* 4-Column Terracotta Statistics Row */}
          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {STORY_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-[#18181b] pt-4"
                >
                  <div className="font-optic-display font-bold text-[38px] sm:text-[46px] leading-none tracking-[-0.01em] text-[#c4553d] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#2d2d32]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[9px] font-medium tracking-[0.12em] uppercase text-[#8c8c94]">
              DEMO STATISTICS FOR TEMPLATE PRESENTATION.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. SELECTED WORK: THROUGH MY LENS + 4-COLUMN EDITORIAL PROJECTS   */}
      {/* ================================================================= */}
      <section
        id="alex-works"
        className="scroll-mt-6 w-full bg-[#f4f1ec] py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                SELECTED WORK
              </p>

              <h2 className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
                <span className="font-serif italic text-[24px] sm:text-[30px] leading-none text-[#c4553d]">
                  through my
                </span>
                <span className="font-optic-display font-bold uppercase text-[46px] sm:text-[58px] leading-[0.86] tracking-[-0.015em] text-[#141416]">
                  LENS.
                </span>
              </h2>

              <p className="mt-3 max-w-[375px] text-[12px] sm:text-[12.5px] leading-[1.5] text-[#73737a]">
                A collection of meaningful moments, beautiful places, and
                authentic stories captured with intention.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="w-fit inline-flex items-center gap-2 rounded-full border border-[#c4553d]/80 px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#c4553d] hover:bg-[#c4553d] hover:text-white transition-colors cursor-pointer group"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-current transition-transform group-hover:scale-125"
              />
              <span>
                {showAllProjects ? "SHOW FEATURED 4" : "EXPLORE ALL PROJECTS"}
              </span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedProjects.map((project) => (
              <article key={project.id} className="group">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxItem({
                      id: project.id,
                      title: project.title,
                      category: project.category,
                      stock: project.stock,
                      location: project.location,
                      year: project.year,
                      src: project.src,
                      fallbackSrc: project.fallbackSrc,
                    })
                  }
                  aria-label={`Inspect ${project.title}`}
                  className="block w-full text-left cursor-pointer focus:outline-none"
                >
                  <div className="relative aspect-[3/3.65] w-full rounded-[6px] overflow-hidden bg-neutral-200 shadow-xs">
                    <SafeFilmImage
                      src={project.src}
                      fallbackSrc={project.fallbackSrc}
                      alt={project.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-2.5 py-0.5 text-[8.5px] font-semibold tracking-[0.08em] uppercase text-[#141416] shadow-xs">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 font-optic-display font-bold uppercase text-[20px] leading-[1.04] tracking-[-0.01em] text-[#141416] group-hover:text-[#c4553d] transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-1 text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#8c8c94]">
                    {project.projectNum}
                  </div>

                  <p className="mt-1.5 text-[11px] leading-[1.45] text-[#73737a]">
                    {project.caption}
                  </p>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. WHAT I DO: 6-CARD SERVICE MATRIX ("BEAUTIFULLY TOLD.")         */}
      {/* ================================================================= */}
      <section
        id="alex-services"
        className="scroll-mt-6 w-full bg-white py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
              WHAT I DO
            </p>

            <h2 className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
              <span className="font-serif italic text-[24px] sm:text-[30px] leading-none text-[#c4553d]">
                your story,
              </span>
              <span className="font-optic-display font-bold uppercase text-[44px] sm:text-[56px] leading-[0.86] tracking-[-0.015em] text-[#141416]">
                BEAUTIFULLY TOLD.
              </span>
            </h2>

            <p className="mt-3 max-w-[385px] text-[12px] sm:text-[12.5px] leading-[1.52] text-[#73737a]">
              Every session is approached with care, creativity, and a genuine
              appreciation for the moments that matter.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STUDIO_SERVICES.map((service) => (
              <button
                key={service.num}
                type="button"
                onClick={() => setActiveService(service)}
                className="group text-left rounded-[6px] bg-[#f3f2ee] border border-[#ebe9e3] hover:border-[#c4553d]/45 p-6 sm:p-7 min-h-[215px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(20,20,22,0.06)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4553d]"
              >
                <div>
                  <span className="block text-[10px] font-semibold tracking-[0.08em] text-[#c4553d]">
                    {service.num}
                  </span>

                  <h3 className="mt-2 font-optic-display font-bold uppercase text-[22px] sm:text-[24px] leading-[1.02] tracking-[-0.01em] text-[#141416] group-hover:text-[#c4553d] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-[11.5px] leading-[1.55] text-[#73737a]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#c4553d]">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-current transition-transform group-hover:scale-125"
                  />
                  <span>{service.ctaLabel}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => setServicesOverviewOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-6 py-2.5 text-[10px] font-semibold tracking-[0.12em] uppercase shadow-xs transition-colors cursor-pointer"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-white"
              />
              <span>VIEW ALL SERVICES</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. KIND WORDS: STORIES TOLD THROUGH THEIR EYES                    */}
      {/* ================================================================= */}
      <section
        id="alex-testimonials"
        className="scroll-mt-6 w-full bg-[#f4f1ec] py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
              KIND WORDS
            </p>

            <h2 className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
              <span className="font-serif italic text-[24px] sm:text-[30px] leading-none text-[#c4553d]">
                stories told
              </span>
              <span className="font-optic-display font-bold uppercase text-[44px] sm:text-[56px] leading-[0.86] tracking-[-0.015em] text-[#141416]">
                THROUGH THEIR EYES.
              </span>
            </h2>

            <p className="mt-3 max-w-[360px] text-[12px] sm:text-[12.5px] leading-[1.52] text-[#73737a]">
              The most meaningful part of my work is knowing that these
              photographs become part of someone&apos;s story.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLIENT_TESTIMONIALS.map((item) => {
              const isObsidian = item.tone === "obsidian";
              return (
                <article
                  key={item.id}
                  className={`rounded-[6px] p-7 sm:p-8 min-h-[285px] flex flex-col justify-between shadow-[0_14px_34px_rgba(18,18,22,0.08)] ${
                    isObsidian
                      ? "bg-gradient-to-br from-[#19191b] via-[#131315] to-[#0a0a0b] text-white"
                      : "bg-gradient-to-br from-[#cb553c] via-[#b8442c] to-[#7c2718] text-white"
                  }`}
                >
                  <div>
                    <svg
                      viewBox="0 0 28 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className={`w-6 h-4 ${
                        isObsidian ? "text-white/30" : "text-[#ea9b8a]/85"
                      }`}
                    >
                      <path d="M0 11.4C0 5.6 3.7 1.4 10.1 0l1.4 3.1C7.8 4.4 6 6.8 5.7 9.5h4.8V20H0v-8.6zm15.5 0C15.5 5.6 19.2 1.4 25.6 0L27 3.1c-3.7 1.3-5.5 3.7-5.8 6.4H26V20H15.5v-8.6z" />
                    </svg>

                    <p className="mt-5 font-serif italic text-[14.5px] sm:text-[15px] leading-[1.5] text-white/95">
                      {item.quote}
                    </p>
                  </div>

                  <div
                    className={`mt-8 pt-3.5 border-t ${
                      isObsidian ? "border-white/20" : "border-white/25"
                    }`}
                  >
                    <div className="font-optic-display font-bold uppercase text-[14px] tracking-[0.02em] text-white">
                      {item.author}
                    </div>
                    <div className="mt-0.5 text-[8.5px] font-semibold tracking-[0.12em] uppercase text-white/75">
                      {item.meta}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-[9px] font-medium tracking-[0.12em] uppercase text-[#8c8c94]">
            DEMO TESTIMONIALS FOR TEMPLATE PRESENTATION.
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 6. A FEW THINGS TO KNOW: INTERACTIVE FAQ ACCORDION                */}
      {/* ================================================================= */}
      <section
        id="alex-faq"
        className="scroll-mt-6 w-full bg-[#f4f1ec] border-t border-[#e5dfd6] py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-5">
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
              A FEW THINGS TO KNOW
            </p>

            <h2 className="mt-2">
              <span className="block font-serif italic text-[24px] sm:text-[29px] leading-[1.06] text-[#c4553d]">
                before we create
              </span>
              <span className="block font-optic-display font-bold uppercase text-[44px] sm:text-[54px] leading-[0.86] tracking-[-0.015em] text-[#141416] mt-0.5">
                SOMETHING
                <br />
                BEAUTIFUL.
              </span>
            </h2>

            <p className="mt-4 max-w-[260px] text-[12px] leading-[1.52] text-[#73737a]">
              Still curious? I&apos;m always happy to answer questions about
              your session.
            </p>

            <button
              type="button"
              onClick={() => {
                setInquirySent(false);
                setInquiryOpen(true);
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-5 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase shadow-xs transition-colors cursor-pointer"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-white"
              />
              <span>ASK A QUESTION</span>
            </button>
          </div>

          {/* Right Expandable Question Rows */}
          <div className="lg:col-span-7 border-t border-[#d7d2ca]">
            {STUDIO_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="border-b border-[#d7d2ca]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaqIndex((prev) => (prev === index ? null : index))
                    }
                    className="w-full py-4 sm:py-[18px] flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                  >
                    <span className="text-[13px] sm:text-[14px] font-medium text-[#141416] group-hover:text-[#c4553d] transition-colors">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`w-6 h-6 rounded-full bg-[#141416] group-hover:bg-[#c4553d] text-white inline-flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-[#c4553d]" : ""
                      }`}
                    >
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      >
                        <path d="M6 2.25v7.5" />
                        <path d="M2.25 6h7.5" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-4 pr-10 text-[12.5px] leading-[1.6] text-[#66666d]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 7. TERRACOTTA NEWSLETTER BANNER + STAY WITH US + STUDIO FOOTER    */}
      {/* ================================================================= */}
      <footer className="w-full bg-white pt-14 sm:pt-20 pb-20 sm:pb-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Terracotta Gradient Newsletter Card */}
          <div className="rounded-[10px] bg-gradient-to-r from-[#d45f42] via-[#b83f26] to-[#872512] text-white px-7 py-8 sm:px-11 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-7 shadow-[0_16px_38px_rgba(140,42,24,0.16)]">
            <div>
              <p className="text-[9.5px] font-semibold tracking-[0.16em] uppercase text-white/90">
                NEWSLETTER
              </p>

              <h2 className="mt-1.5">
                <span className="block font-serif italic text-[22px] sm:text-[26px] leading-[1.08] text-white/95">
                  a little inspiration,
                </span>
                <span className="block font-optic-display font-bold uppercase text-[42px] sm:text-[52px] leading-[0.86] tracking-[-0.015em] text-white">
                  DELIVERED.
                </span>
              </h2>

              <p className="mt-2.5 text-[11.5px] sm:text-[12px] text-white/85">
                Occasional stories, recent work, and creative notes from behind
                the lens.
              </p>
            </div>

            {newsletterSubscribed ? (
              <div className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs font-medium text-white flex items-center gap-3">
                <span>
                  Subscribed ({newsletterEmail}) — welcome to the film notes list.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setNewsletterSubscribed(false);
                    setNewsletterEmail("");
                  }}
                  className="underline text-white/85 hover:text-white cursor-pointer"
                >
                  Reset
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (newsletterEmail.trim()) {
                    setNewsletterSubscribed(true);
                  }
                }}
                className="flex items-center rounded-full border border-white/35 bg-white/5 p-1 sm:p-1.5 w-full lg:w-[390px]"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="flex-1 min-w-0 bg-transparent px-4 py-1.5 text-xs text-white placeholder:text-white/75 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-[#f4f1ec] text-[#c4553d] px-4 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#c4553d]"
                  />
                  <span>SUBSCRIBE</span>
                </button>
              </form>
            )}
          </div>

          {/* Dramatic Inset Portrait + Massive "the moments that STAY WITH US" */}
          <div className="mt-12 sm:mt-14 pb-12 border-b border-[#e6e6eb] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="relative w-[210px] sm:w-[235px] aspect-[16/10] rounded-[6px] overflow-hidden bg-neutral-900 shadow-sm shrink-0">
              <SafeFilmImage
                src={ABOUT_COLLAGE.insetPortrait.src}
                fallbackSrc={ABOUT_COLLAGE.insetPortrait.fallbackSrc}
                alt="Evening studio portrait frame"
                sizes="240px"
                className="object-cover object-top contrast-110"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#5c1208]/45 via-transparent to-black/25 pointer-events-none"
              />
            </div>

            <div className="md:text-right">
              <span className="block font-serif italic text-[20px] sm:text-[26px] leading-none text-[#c4553d] mb-1">
                the moments that
              </span>
              <div className="font-optic-display font-bold uppercase text-[56px] sm:text-[76px] lg:text-[88px] leading-[0.84] tracking-[-0.02em] text-[#141416]">
                STAY WITH US
              </div>
            </div>
          </div>

          {/* 4-Column Structured Footer Links */}
          <div className="py-10 sm:py-12 border-b border-[#e6e6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="font-optic-display font-bold uppercase text-[22px] tracking-[-0.01em] text-[#141416]">
                LUMEVÉ
              </div>
              <p className="mt-2 max-w-[215px] font-serif italic text-[13.5px] leading-[1.35] text-[#222226]">
                Photography for the moments that stay with us.
              </p>
              <p className="mt-3 max-w-[215px] text-[11px] leading-[1.5] text-[#73737a]">
                Capturing honest stories, beautiful details, and timeless
                memories.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[9.5px] font-semibold tracking-[0.14em] uppercase text-[#c4553d]">
                EXPLORE
              </div>
              <ul className="mt-3.5 space-y-2 text-[11.5px] text-[#55555c]">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("alex-top")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("alex-about")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("alex-works")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("alex-services")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("alex-testimonials")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Journal
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySent(false);
                      setInquiryOpen(true);
                    }}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[9.5px] font-semibold tracking-[0.14em] uppercase text-[#c4553d]">
                GET IN TOUCH
              </div>
              <ul className="mt-3.5 space-y-2 text-[11.5px] text-[#55555c]">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySent(false);
                      setInquiryOpen(true);
                    }}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    hello@lumeve.example
                  </button>
                </li>
                <li>
                  <a
                    href="tel:+12125550148"
                    className="hover:text-[#141416] transition-colors"
                  >
                    +1 (212) 555-0148
                  </a>
                </li>
                <li>New York, USA · Available Worldwide</li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[9.5px] font-semibold tracking-[0.14em] uppercase text-[#c4553d]">
                FOLLOW ALONG
              </div>
              <ul className="mt-3.5 space-y-2 text-[11.5px] text-[#55555c]">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#141416] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#141416] transition-colors"
                  >
                    Pinterest
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#141416] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("alex-about")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Awards
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setServicesOverviewOpen(true)}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal & Book a Session Bar */}
          <div className="pt-6 pb-8 sm:pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[9px] font-medium tracking-[0.08em] uppercase text-[#73737a]">
              COPYRIGHT © 2026 LUMEVÉ STUDIO. ALL RIGHTS RESERVED.
            </p>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6 sm:pr-28">
              <a
                href="#alex-faq"
                className="text-[9px] font-medium tracking-[0.08em] uppercase text-[#73737a] hover:text-[#141416] transition-colors"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#alex-faq"
                className="text-[9px] font-medium tracking-[0.08em] uppercase text-[#73737a] hover:text-[#141416] transition-colors"
              >
                TERMS &amp; CONDITIONS
              </a>
              <button
                type="button"
                onClick={() => {
                  setInquirySent(false);
                  setInquiryOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-4 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-white"
                />
                <span>BOOK A SESSION</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      <FramerBadge />

      {/* ================================================================= */}
      {/* GET TO KNOW ME / STUDIO STORY MODAL                               */}
      {/* ================================================================= */}
      {storyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About Alex Smith Studio"
          onClick={() => setStoryModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl bg-[#fbfbfc] text-[#141416] rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#e6e6eb]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                BEHIND THE LENS · BROOKLYN
              </span>
              <button
                type="button"
                onClick={() => setStoryModalOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>

            <h3 className="mt-5">
              <span className="block font-serif italic text-2xl sm:text-3xl text-[#c4553d]">
                film grain, daylight &amp;
              </span>
              <span className="block font-optic-display font-bold uppercase text-4xl sm:text-5xl leading-[0.88] text-[#141416]">
                HONEST HUMAN MOMENTS.
              </span>
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#5e5e66]">
              Operating out of a daylight loft in Red Hook, Brooklyn, Alex
              Smith photographs editorial portraits, intimate weddings, and
              tactile product campaigns across 35mm film (Leica M6, Contax G2),
              120 medium format (Mamiya 7II), and tethered digital capture.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#ececf0] pt-5 text-xs">
              <div>
                <div className="font-semibold text-[#141416] uppercase tracking-wider text-[10px]">
                  Favorite Stocks
                </div>
                <p className="mt-1 text-[#6d6d74]">
                  Kodak Portra 400, Cinestill 400D, and Ilford Tri-X 400
                </p>
              </div>
              <div>
                <div className="font-semibold text-[#141416] uppercase tracking-wider text-[10px]">
                  Studio Base
                </div>
                <p className="mt-1 text-[#6d6d74]">
                  Red Hook, Brooklyn — available worldwide for travel
                </p>
              </div>
              <div>
                <div className="font-semibold text-[#141416] uppercase tracking-wider text-[10px]">
                  Proof Turnaround
                </div>
                <p className="mt-1 text-[#6d6d74]">
                  72-hour scanned film contact sheet &amp; hand retouching
                </p>
              </div>
            </div>

            <div className="mt-7 flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setStoryModalOpen(false);
                  setInquirySent(false);
                  setInquiryOpen(true);
                }}
                className="rounded-full bg-[#c4553d] hover:bg-[#b14831] text-white px-5 py-2 text-xs font-medium transition-colors cursor-pointer"
              >
                Book a Shoot
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SINGLE SERVICE DETAIL MODAL                                       */}
      {/* ================================================================= */}
      {activeService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeService.title}
          onClick={() => setActiveService(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg bg-[#fbfbfc] text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e6e6eb]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                SERVICE {activeService.num}
              </span>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>

            <h3 className="mt-4 font-optic-display font-bold uppercase text-3xl sm:text-4xl leading-[0.9] text-[#141416]">
              {activeService.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#5e5e66]">
              {activeService.description}
            </p>

            <div className="mt-5 rounded-xl bg-[#f3f2ee] p-4 border border-[#ebe9e3]">
              <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#c4553d]">
                TYPICAL DELIVERABLES
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-[#4b4b52]">
                {activeService.deliverables}
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => {
                  const chosen = activeService.shootCategory;
                  setActiveService(null);
                  setInquiryForm((prev) => ({
                    ...prev,
                    shootType: chosen,
                  }));
                  setInquirySent(false);
                  setInquiryOpen(true);
                }}
                className="rounded-full bg-[#c4553d] hover:bg-[#b14831] text-white px-5 py-2 text-xs font-medium transition-colors cursor-pointer"
              >
                Inquire About {activeService.shootCategory}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* ALL SERVICES RATE & GUIDE MODAL                                   */}
      {/* ================================================================= */}
      {servicesOverviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All Studio Services"
          onClick={() => setServicesOverviewOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl bg-[#fbfbfc] text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e6e6eb] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                2026 COMMISSION GUIDE · ALEX SMITH
              </span>
              <button
                type="button"
                onClick={() => setServicesOverviewOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="mt-4 divide-y divide-[#ececf0]">
              {STUDIO_SERVICES.map((service) => (
                <div
                  key={service.num}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-[#c4553d]">
                        {service.num}
                      </span>
                      <h4 className="font-optic-display font-bold uppercase text-lg leading-none text-[#141416]">
                        {service.title}
                      </h4>
                    </div>
                    <p className="mt-1 text-xs text-[#6d6d74]">
                      {service.deliverables}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setServicesOverviewOpen(false);
                      setInquiryForm((prev) => ({
                        ...prev,
                        shootType: service.shootCategory,
                      }));
                      setInquirySent(false);
                      setInquiryOpen(true);
                    }}
                    className="shrink-0 w-fit rounded-full border border-[#c4553d]/80 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#c4553d] hover:bg-[#c4553d] hover:text-white transition-colors cursor-pointer"
                  >
                    Request Dates
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* FILM FRAME LIGHTBOX MODAL                                         */}
      {/* ================================================================= */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-3xl bg-[#fbfbfc] text-[#141416] rounded-3xl overflow-hidden shadow-2xl border border-white/40 grid grid-cols-1 md:grid-cols-[1.2fr_0.85fr]"
          >
            <div className="relative w-full aspect-[4/5] bg-neutral-200">
              <SafeFilmImage
                src={lightboxItem.src}
                fallbackSrc={lightboxItem.fallbackSrc}
                alt={lightboxItem.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#e6e6eb] text-[11px] font-medium text-[#5c5c64]">
                  {lightboxItem.category}
                </span>

                <h3 className="mt-4 text-2xl font-medium tracking-tight">
                  {lightboxItem.title}
                </h3>

                <dl className="mt-6 space-y-2.5 border-t border-[#ececf0] pt-4 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#7c7c82]">Film Stock</dt>
                    <dd className="font-medium text-right">{lightboxItem.stock}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#7c7c82]">Location</dt>
                    <dd className="font-medium text-right">
                      {lightboxItem.location}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#7c7c82]">Year</dt>
                    <dd className="font-medium text-right">{lightboxItem.year}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex items-center justify-between gap-2 pt-4 border-t border-[#ececf0]">
                <button
                  type="button"
                  onClick={() => {
                    setInquiryForm((prev) => ({
                      ...prev,
                      shootType: lightboxItem.category,
                    }));
                    setLightboxItem(null);
                    setInquirySent(false);
                    setInquiryOpen(true);
                  }}
                  className="rounded-full bg-[#141416] text-white px-4 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Book Similar
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="rounded-full border border-[#e5e5ea] bg-white px-4 py-2 text-xs font-medium text-[#141416] hover:border-[#141416] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* EMAIL / SESSION BOOKING MODAL                                     */}
      {/* ================================================================= */}
      {inquiryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Contact Alex Smith Studio"
          onClick={() => setInquiryOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md bg-[#fbfbfc] text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e6e6eb]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-sm font-semibold tracking-tight">
                alex@gmail.com — Booking Note
              </span>
              <button
                type="button"
                onClick={() => setInquiryOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>

            {inquirySent ? (
              <div className="py-10 text-center space-y-3">
                <p className="text-lg font-medium text-[#141416]">
                  Inquiry delivered to Alex Smith.
                </p>
                <p className="text-xs text-[#6d6d74]">
                  Expect a reply from our Brooklyn studio within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquiryOpen(false)}
                  className="mt-3 rounded-full bg-[#141416] text-white px-5 py-2 text-xs font-medium cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setInquirySent(true);
                }}
                className="mt-5 space-y-4"
              >
                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">Your Name</span>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Maya Lin"
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  />
                </label>

                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">Email</span>
                  <input
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="maya@studio.com"
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  />
                </label>

                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">Shoot Type</span>
                  <select
                    value={inquiryForm.shootType}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        shootType: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  >
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Fashion & Editorial">Fashion & Editorial</option>
                    <option value="Brand & Commercial">Brand & Commercial</option>
                    <option value="Events & Celebrations">Events & Celebrations</option>
                    <option value="Travel & Lifestyle">Travel & Lifestyle</option>
                    <option value="Portraits">Portraits (Film)</option>
                    <option value="Products">Products (Film)</option>
                    <option value="Weddings">Weddings (Film)</option>
                  </select>
                </label>

                <label className="block text-xs">
                  <span className="block text-[#6d6d74] mb-1">
                    Project Details
                  </span>
                  <textarea
                    rows={3}
                    required
                    value={inquiryForm.details}
                    onChange={(e) =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        details: e.target.value,
                      }))
                    }
                    placeholder="Dates, location, and film look..."
                    className="w-full rounded-xl bg-white border border-[#e5e5ea] px-3.5 py-2 text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#141416] hover:bg-neutral-800 text-white py-2.5 text-xs font-medium cursor-pointer transition-colors"
                >
                  Send Booking Note
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
