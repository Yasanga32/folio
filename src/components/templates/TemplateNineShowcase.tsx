"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface GalleryFrame {
  id: string;
  badge: string;
  projectNum: string;
  title: string;
  caption: string;
  category: string;
  filterKey?:
    | "WEDDINGS"
    | "PORTRAITS"
    | "FASHION & EDITORIAL"
    | "BRAND & COMMERCIAL"
    | "EVENTS"
    | "TRAVEL & LIFESTYLE";
  stock: string;
  location: string;
  src: string;
  fallbackSrc: string;
}

type WorkFilterKey =
  | "ALL WORK"
  | "WEDDINGS"
  | "PORTRAITS"
  | "FASHION & EDITORIAL"
  | "BRAND & COMMERCIAL"
  | "EVENTS"
  | "TRAVEL & LIFESTYLE";

const WORK_FILTER_TABS: WorkFilterKey[] = [
  "ALL WORK",
  "WEDDINGS",
  "PORTRAITS",
  "FASHION & EDITORIAL",
  "BRAND & COMMERCIAL",
  "EVENTS",
  "TRAVEL & LIFESTYLE",
];

const SUB_NAV_ITEMS = [
  { id: "lumeve-home", label: "HOME" },
  { id: "lumeve-about", label: "ABOUT" },
  { id: "lumeve-work", label: "WORK" },
  { id: "lumeve-services", label: "SERVICES" },
  { id: "lumeve-pricing", label: "PRICING" },
  { id: "lumeve-journal", label: "JOURNAL" },
  { id: "lumeve-contact", label: "CONTACT" },
];

const HERO_FEATURED_PORTRAIT: GalleryFrame = {
  id: "hero-crimson-portrait",
  badge: "PORTRAIT SESSION · 2025",
  projectNum: "FEATURED FRAME",
  title: "CRIMSON STUDIO STUDY",
  caption:
    "Editorial beauty & portrait lighting sculpted against rich crimson studio backdrops.",
  category: "Portrait",
  stock: "Hasselblad · Portra 400",
  location: "SoHo Daylight Loft, New York",
  src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=85",
  fallbackSrc:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
};

const HERO_POLAROIDS: GalleryFrame[] = [
  {
    id: "polaroid-own-light",
    badge: "PORTRAIT",
    projectNum: "PROJECT 02",
    title: "IN HER OWN LIGHT",
    caption:
      "Golden late-afternoon shadows casting botanical silhouettes across natural skin.",
    category: "Portrait",
    stock: "Kodak Portra 400 · 35mm",
    location: "West Village, New York",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "polaroid-togetherness",
    badge: "WEDDING",
    projectNum: "PROJECT 01",
    title: "TOGETHERNESS",
    caption:
      "Honest vows and sweeping meadow movement documented with editorial calm.",
    category: "Wedding",
    stock: "Kodak Portra 800 · 120mm",
    location: "Hudson Valley, New York",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
];

const ABOUT_COLLAGE = {
  bwCameraHands: {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85",
    alt: "Hands holding film camera in monochrome profile",
  },
  mainCamera: {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
    alt: "Photographer holding DSLR camera in warm bokeh studio",
  },
  insetPortrait: {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    alt: "Direct flash portrait against warm ruby backdrop",
  },
};

const SELECTED_WORKS: GalleryFrame[] = [
  {
    id: "proj-togetherness",
    badge: "WEDDING",
    projectNum: "PROJECT 01",
    title: "THE ART OF TOGETHERNESS",
    caption:
      "A celebration of connection, quiet gestures, and the joy of beginning a new chapter.",
    category: "Wedding",
    filterKey: "WEDDINGS",
    stock: "Kodak Portra 800 · 35mm",
    location: "HUDSON VALLEY, NEW YORK",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "proj-in-her-own-light",
    badge: "PORTRAIT",
    projectNum: "PROJECT 02",
    title: "IN HER OWN LIGHT",
    caption:
      "An intimate portrait series exploring confidence, individuality, and natural expression.",
    category: "Portrait",
    filterKey: "PORTRAITS",
    stock: "Kodak Portra 400 · 120mm",
    location: "BROOKLYN, NEW YORK",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-form-and-feeling",
    badge: "FASHION EDITORIAL",
    projectNum: "PROJECT 03",
    title: "FORM & FEELING",
    caption:
      "A study of movement, shape, texture, and the relationship between fashion and light.",
    category: "Editorial",
    filterKey: "FASHION & EDITORIAL",
    stock: "Ilford Delta 400 · Medium Format",
    location: "NEW YORK, USA",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-everyday-poetry",
    badge: "LIFESTYLE",
    projectNum: "PROJECT 04",
    title: "EVERYDAY POETRY",
    caption:
      "Quiet mornings, warm architecture, and unhurried daily scenes captured as they naturally unfold.",
    category: "Lifestyle",
    filterKey: "TRAVEL & LIFESTYLE",
    stock: "Cinestill 400D · 35mm",
    location: "COPENHAGEN, DENMARK",
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-stoneware-forms",
    badge: "BRAND PHOTOGRAPHY",
    projectNum: "PROJECT 05",
    title: "FORMS IN DAYLIGHT",
    caption:
      "Tactile ceramics and sculptural vessels illuminated by north-facing studio glass.",
    category: "Brand",
    filterKey: "BRAND & COMMERCIAL",
    stock: "Mamiya 7II · Portra 160",
    location: "SOHO ATELIER, NEW YORK",
    src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-streets-of-tuscany",
    badge: "TRAVEL",
    projectNum: "PROJECT 06",
    title: "STREETS OF TUSCANY",
    caption:
      "Warm ochre facades, weathered shutters, and afternoon light drifting down quiet village lanes.",
    category: "Travel",
    filterKey: "TRAVEL & LIFESTYLE",
    stock: "Portra 160 · 120mm",
    location: "SIENA, ITALY",
    src: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-evening-soiree",
    badge: "EVENTS",
    projectNum: "PROJECT 07",
    title: "CANDLELIT DINNER SOCIETY",
    caption:
      "Unscripted toasts, clinking glasses, and warm ambient light across an intimate supper table.",
    category: "Events",
    filterKey: "EVENTS",
    stock: "Cinestill 800T · 35mm",
    location: "WEST VILLAGE, NEW YORK",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-evening-conservatory",
    badge: "WEDDING",
    projectNum: "PROJECT 08",
    title: "CONSERVATORY VOWS",
    caption:
      "Golden foliage reflections and unscripted promises inside historic glasshouses.",
    category: "Wedding",
    filterKey: "WEDDINGS",
    stock: "Contax G2 · Portra 400",
    location: "BROOKLYN BOTANIC GARDEN",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "work-sunday-knit",
    badge: "PORTRAIT",
    projectNum: "PROJECT 09",
    title: "SUNDAY GOLDEN HOUR",
    caption:
      "Soft amber backlight and spontaneous movement across quiet cobblestone terraces.",
    category: "Portrait",
    filterKey: "PORTRAITS",
    stock: "Kodak Gold 200 · 35mm",
    location: "WILLIAMSBURG, NEW YORK",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
];

interface StudioServiceItem {
  num: string;
  title: string;
  description: string;
  ctaLabel: string;
  shootCategory: string;
  rate: string;
  deliverables: string;
}

const STUDIO_SERVICES: StudioServiceItem[] = [
  {
    num: "01",
    title: "WEDDING PHOTOGRAPHY",
    description:
      "From quiet exchanges to unforgettable celebrations, I document your wedding with an honest, cinematic, and timeless approach.",
    ctaLabel: "EXPLORE WEDDING PHOTOGRAPHY",
    shootCategory: "WEDDING STORYTELLING",
    rate: "$4,800",
    deliverables:
      "Full-day 35mm film + digital coverage, 600+ graded frames & archival gallery.",
  },
  {
    num: "02",
    title: "PORTRAIT PHOTOGRAPHY",
    description:
      "Personal portraits that reveal your character, confidence, and individuality through natural expression and considered light.",
    ctaLabel: "EXPLORE PORTRAITS",
    shootCategory: "EDITORIAL PORTRAITS",
    rate: "$1,250",
    deliverables:
      "2-hour daylight loft or on-location session with scanned contact sheets.",
  },
  {
    num: "03",
    title: "FASHION & EDITORIAL",
    description:
      "Distinctive imagery for designers, creatives, publications, and brands seeking a refined visual identity.",
    ctaLabel: "EXPLORE EDITORIAL",
    shootCategory: "EDITORIAL PORTRAITS",
    rate: "$2,900",
    deliverables:
      "Mood boarding, creative direction, medium-format capture & publication grading.",
  },
  {
    num: "04",
    title: "BRAND & COMMERCIAL",
    description:
      "Thoughtful photography that communicates your brand's personality, values, and vision through compelling visual storytelling.",
    ctaLabel: "EXPLORE BRAND PHOTOGRAPHY",
    shootCategory: "BRAND & LOOKBOOK",
    rate: "$3,400",
    deliverables:
      "Campaign lookbooks, tactile product scenes & commercial licensing suite.",
  },
  {
    num: "05",
    title: "EVENTS & CELEBRATIONS",
    description:
      "From intimate gatherings to larger occasions, every meaningful detail and spontaneous moment is documented with care.",
    ctaLabel: "EXPLORE EVENT PHOTOGRAPHY",
    shootCategory: "WEDDING STORYTELLING",
    rate: "$1,950",
    deliverables:
      "Candid documentary coverage with 48-hour press & gallery turnaround.",
  },
  {
    num: "06",
    title: "TRAVEL & LIFESTYLE",
    description:
      "Atmospheric imagery inspired by places, cultures, everyday rituals, and the beauty of discovering something new.",
    ctaLabel: "EXPLORE LIFESTYLE PHOTOGRAPHY",
    shootCategory: "BRAND & LOOKBOOK",
    rate: "$2,400",
    deliverables:
      "Destination visual essays for hospitality, journals, and cultural spaces.",
  },
];

const CLIENT_TESTIMONIALS = [
  {
    id: "testimonial-emma-liam",
    quote:
      "“Looking through our photographs feels like stepping back into the day itself. Every emotion, every little detail, and every unexpected moment was captured so naturally.”",
    author: "EMMA & LIAM",
    meta: "WEDDING PHOTOGRAPHY · 2025",
    tone: "terracotta" as const,
  },
  {
    id: "testimonial-olivia-bennett",
    quote:
      "“LUMEVÉ understood our vision from the very beginning. The images feel sophisticated, authentic, and completely aligned with who we are as a brand.”",
    author: "OLIVIA BENNETT",
    meta: "CREATIVE DIRECTOR · 2025",
    tone: "obsidian" as const,
  },
  {
    id: "testimonial-sophia-carter",
    quote:
      "“I never expected to feel so comfortable in front of the camera. The entire experience felt personal, relaxed, and genuinely inspiring.”",
    author: "SOPHIA CARTER",
    meta: "PORTRAIT SESSION · 2025",
    tone: "terracotta" as const,
  },
];

interface JournalArticle {
  id: string;
  meta: string;
  title: string;
  excerpt: string;
  fullText: string;
  src: string;
  fallbackSrc: string;
  isDarkChiaroscuro?: boolean;
}

const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "article-unposed-moments",
    meta: "PHOTOGRAPHY TIPS · 5 MIN",
    title: "THE BEAUTY OF UNPOSED MOMENTS",
    excerpt:
      "The most memorable photographs aren't always the ones we plan. Discover how natural interactions, unexpected expressions, and moments between moments can tell a deeper story.",
    fullText:
      "Instead of over-directing hands and chins, leaving pockets of quiet space during a celebration allows real gestures to emerge — a deep breath before walking down the aisle, laughter echoing down a stone hallway, or a parent reaching out to straighten a veil.",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "article-finding-light",
    meta: "CREATIVE PROCESS · 4 MIN",
    title: "FINDING YOUR LIGHT",
    excerpt:
      "Light shapes the feeling of every photograph. Explore the simple ways natural light, shadows, and timing can transform an ordinary scene.",
    fullText:
      "Directional window light and dappled late-afternoon shadows lend sculptural warmth without heavy modifiers. Before raising the shutter, watch how reflections move across linens, skin, and glass over three slow minutes.",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "article-first-portrait",
    meta: "PORTRAIT PHOTOGRAPHY · 5 MIN",
    title: "YOUR FIRST PORTRAIT SESSION",
    excerpt:
      "Feeling nervous in front of a camera is completely normal. Here's how to prepare for a relaxed portrait session and feel more comfortable being yourself.",
    fullText:
      "Arrive in fabrics you genuinely move easily in, play an album you love on the walk over, and remember that our favorite portrait frames usually happen right after you stop trying to pose for them.",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    isDarkChiaroscuro: true,
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
      "Yes — our New York studio photographs weddings and editorial commissions across the US, Europe, and Japan with simplified travel flat rates.",
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

function SafeLumeveImage({
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

export default function TemplateNineShowcase() {
  const [activeNav, setActiveNav] = useState("lumeve-home");
  const [workFilter, setWorkFilter] = useState<WorkFilterKey>("ALL WORK");
  const [activeServiceNum, setActiveServiceNum] = useState("05");
  const [selectedService, setSelectedService] =
    useState<StudioServiceItem | null>(null);
  const [allServicesOpen, setAllServicesOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(
    null
  );
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [lightboxFrame, setLightboxFrame] = useState<GalleryFrame | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    lookingFor: "Wedding Photography",
    preferredDate: "",
    location: "",
    budget: "",
    projectDetails: "",
  });
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    service: "WEDDING STORYTELLING",
    message: "",
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStoryModalOpen(false);
        setLightboxFrame(null);
        setBookingOpen(false);
        setSelectedService(null);
        setAllServicesOpen(false);
        setActiveArticle(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#141416] selection:bg-[#c4553d] selection:text-white relative">
      {/* Shared Top Workspace Navbar */}
      <div className="bg-white border-b border-[#ececf0]">
        <Navbar />
      </div>

      {/* Centered Editorial Page Sub-Navbar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#ececf0]">
        <nav
          aria-label="Template sections"
          className="max-w-5xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-center gap-4 sm:gap-7"
        >
          {SUB_NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`text-[9.5px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#c4553d]"
                    : "text-[#525259] hover:text-[#141416]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ================================================================= */}
      {/* 1. HERO: WARM TERRACOTTA "A STORY WORTH KEEPING."                 */}
      {/* ================================================================= */}
      <section
        id="lumeve-home"
        className="scroll-mt-14 w-full bg-gradient-to-b from-[#d8613f] via-[#b83f25] to-[#7c2313] text-white pt-10 sm:pt-14 pb-16 sm:pb-20"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Centered Stacked Editorial Headline */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-white/90">
              PHOTOGRAPHY THAT FEELS LIKE YOU
            </p>

            <p className="mt-2 font-serif italic text-[22px] sm:text-[26px] leading-none text-white/95">
              every moment,
            </p>

            <h1 className="mt-1 font-optic-display font-bold uppercase text-[48px] sm:text-[72px] lg:text-[82px] leading-[0.86] tracking-[-0.015em] text-white">
              A STORY WORTH
              <br />
              KEEPING.
            </h1>
          </div>

          {/* 3-Column Hero Media + CTAs Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-6 items-center">
            {/* Left Copy, Stacked Pills & Location Tag */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col items-start">
              <p className="max-w-[235px] text-[11.5px] sm:text-[12px] leading-[1.55] text-white/90">
                From intimate celebrations to extraordinary adventures, we
                capture the emotions, details, and fleeting moments that make
                your story uniquely yours.
              </p>

              <div className="mt-5 flex flex-col items-start gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setBookingSent(false);
                    setBookingOpen(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#f4f1ec] text-[#c4553d] px-5 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase shadow-sm transition-colors cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#c4553d]"
                  />
                  <span>BOOK A SESSION</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("lumeve-work")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 hover:bg-white/10 text-white px-5 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-white"
                  />
                  <span>EXPLORE MY WORK</span>
                </button>
              </div>

              <div className="mt-7 inline-flex items-center gap-1.5 text-[8.5px] font-semibold tracking-[0.14em] uppercase text-white/85">
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-white"
                />
                <span>BASED IN NEW YORK · AVAILABLE WORLDWIDE</span>
              </div>
            </div>

            {/* Center Featured Crimson Portrait Card */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
              <button
                type="button"
                onClick={() => setLightboxFrame(HERO_FEATURED_PORTRAIT)}
                aria-label={`Inspect ${HERO_FEATURED_PORTRAIT.title}`}
                className="group relative w-full max-w-[265px] aspect-[3/3.65] rounded-[8px] border-2 border-white bg-[#581214] overflow-hidden shadow-[0_24px_54px_rgba(32,6,4,0.45)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <SafeLumeveImage
                  src={HERO_FEATURED_PORTRAIT.src}
                  fallbackSrc={HERO_FEATURED_PORTRAIT.fallbackSrc}
                  alt={HERO_FEATURED_PORTRAIT.title}
                  priority
                  sizes="280px"
                  className="object-cover object-top contrast-115 brightness-95 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#6b1414]/65 via-transparent to-[#7b1a16]/25 mix-blend-multiply pointer-events-none"
                />

                <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white text-[#141416] px-3.5 py-1 text-[8.5px] font-semibold tracking-[0.12em] uppercase shadow-sm inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="w-1 h-1 rounded-full bg-[#c4553d]"
                  />
                  <span>{HERO_FEATURED_PORTRAIT.badge}</span>
                </span>
              </button>
            </div>

            {/* Right Tilted Polaroid Cards Pair */}
            <div className="lg:col-span-4 order-3 flex items-center justify-center lg:justify-end gap-2">
              {HERO_POLAROIDS.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setLightboxFrame(card)}
                  aria-label={`Inspect ${card.title}`}
                  className={`group text-left bg-white p-1.5 pb-2.5 rounded-[5px] shadow-[0_18px_38px_rgba(32,6,4,0.35)] w-[124px] sm:w-[134px] transition-transform duration-300 hover:scale-[1.04] hover:rotate-0 hover:z-10 cursor-pointer focus:outline-none ${
                    index === 0 ? "-rotate-6" : "rotate-3 mt-4 -ml-1"
                  }`}
                >
                  <div className="relative aspect-square w-full rounded-[3px] overflow-hidden bg-neutral-200">
                    <SafeLumeveImage
                      src={card.src}
                      fallbackSrc={card.fallbackSrc}
                      alt={card.title}
                      sizes="140px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 px-0.5">
                    <div className="font-optic-display font-bold uppercase text-[10px] tracking-[0.04em] text-[#141416] leading-tight">
                      {card.title}
                    </div>
                    <div className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-[#c4553d]">
                      {card.badge}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. ABOUT: TERRACOTTA "ROOTED IN FEELING." BANNER + INTRO COLLAGE  */}
      {/* ================================================================= */}
      <section
        id="lumeve-about"
        className="scroll-mt-14 w-full bg-white py-14 sm:py-20"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 space-y-16 sm:space-y-20">
          {/* Top Terracotta Statement Card */}
          <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-br from-[#d95f3c] via-[#b83f25] to-[#7c2313] text-white px-6 py-12 sm:px-12 sm:py-16 text-center shadow-[0_20px_48px_rgba(140,42,24,0.16)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-14 w-44 h-44 rounded-full border border-white/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/[0.04] blur-2xl"
            />

            <p className="relative text-[9px] sm:text-[9.5px] font-semibold tracking-[0.18em] uppercase text-white/90">
              THE PERSON BEHIND THE CAMERA
            </p>

            <h2 className="relative mt-2.5">
              <span className="block font-serif italic text-[22px] sm:text-[26px] leading-[1.08] text-white/95">
                photography
              </span>
              <span className="mt-1 block font-optic-display font-bold uppercase text-[46px] sm:text-[68px] lg:text-[78px] leading-[0.86] tracking-[-0.015em] text-white">
                ROOTED IN FEELING.
              </span>
            </h2>

            <p className="relative mt-4 max-w-[430px] mx-auto text-[11px] sm:text-[12px] leading-[1.55] text-white/85">
              I believe the most beautiful photographs are the ones that bring
              you back to a feeling, a place, or a moment you never want to
              forget.
            </p>
          </div>

          {/* Bottom Split: Tall B&W Hands + Warm Camera + 12+ Stat Card & Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 2-Column Asymmetric Media Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 items-stretch">
              <div className="relative min-h-[340px] sm:min-h-[380px] rounded-[10px] overflow-hidden bg-neutral-200 shadow-[0_14px_34px_rgba(18,18,22,0.08)]">
                <SafeLumeveImage
                  src={ABOUT_COLLAGE.bwCameraHands.src}
                  fallbackSrc={ABOUT_COLLAGE.bwCameraHands.fallbackSrc}
                  alt={ABOUT_COLLAGE.bwCameraHands.alt}
                  sizes="(max-width: 1024px) 45vw, 240px"
                  className="object-cover grayscale contrast-125"
                />
              </div>

              <div className="flex flex-col gap-3.5">
                <div className="relative flex-1 min-h-[205px] rounded-[10px] overflow-hidden bg-neutral-100 shadow-[0_14px_34px_rgba(18,18,22,0.08)]">
                  <SafeLumeveImage
                    src={ABOUT_COLLAGE.mainCamera.src}
                    fallbackSrc={ABOUT_COLLAGE.mainCamera.fallbackSrc}
                    alt={ABOUT_COLLAGE.mainCamera.alt}
                    sizes="(max-width: 1024px) 45vw, 240px"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-[10px] bg-[#c4452b] text-white px-5 py-5 flex flex-col justify-between min-h-[125px] shadow-[0_12px_28px_rgba(160,52,28,0.18)]">
                  <div className="font-optic-display font-bold text-[38px] sm:text-[42px] leading-none tracking-[-0.01em]">
                    12+
                  </div>
                  <div className="mt-4 text-[8.5px] font-semibold tracking-[0.14em] uppercase text-white/90">
                    YEARS BEHIND THE LENS
                  </div>
                </div>
              </div>
            </div>

            {/* Right Personal Introduction Copy */}
            <div className="lg:col-span-6 lg:pl-4">
              <p className="text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                A PERSONAL INTRODUCTION
              </p>

              <h3 className="mt-2">
                <span className="block font-serif italic text-[22px] sm:text-[26px] leading-[1.08] text-[#c4553d]">
                  a curious eye,
                </span>
                <span className="block font-optic-display font-bold uppercase text-[42px] sm:text-[52px] leading-[0.88] tracking-[-0.015em] text-[#141416] mt-0.5">
                  A LOVE FOR
                  <br />
                  STORIES.
                </span>
              </h3>

              <p className="mt-5 max-w-[430px] font-serif italic text-[17px] sm:text-[19.5px] leading-[1.34] text-[#222226]">
                My journey with photography began with a simple fascination: the
                way light changes an ordinary scene into something
                extraordinary.
              </p>

              <p className="mt-4 max-w-[420px] text-[12px] sm:text-[12.5px] leading-[1.6] text-[#73737a]">
                Over time, that curiosity grew into a deeper appreciation for
                people, places, and the small details that make every story
                different. Today, I approach each project with the same sense of
                wonder, combining natural light, thoughtful composition, and
                quiet editorial honesty.
              </p>

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
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. WORK: FILTERABLE 3-COLUMN GALLERY + HONEST / TIMELESS BANNER   */}
      {/* ================================================================= */}
      <section
        id="lumeve-work"
        className="scroll-mt-14 w-full bg-white border-t border-[#ececf0] py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header Row: Serif Editorial Lead + Filter Pill Matrix */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-7">
            <h2 className="max-w-[390px] font-serif italic text-[20px] sm:text-[23px] leading-[1.32] text-[#141416]">
              Every project begins with a story. Explore the people, places, and
              moments that have inspired my work.
            </h2>

            <div
              role="tablist"
              aria-label="Filter projects by photography category"
              className="flex flex-wrap lg:justify-end gap-2 max-w-[490px]"
            >
              {WORK_FILTER_TABS.map((tab) => {
                const isActive = workFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setWorkFilter(tab)}
                    className={`rounded-full px-4 py-2 text-[8.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#c4452b] text-white shadow-xs"
                        : "bg-[#f4f1ec] hover:bg-[#e9e4dc] text-[#222226]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Tall Portrait Cards */}
          <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-11">
            {(workFilter === "ALL WORK"
              ? SELECTED_WORKS.slice(0, 6)
              : SELECTED_WORKS.filter((work) => work.filterKey === workFilter)
            ).map((work) => (
              <article key={work.id} className="group">
                <button
                  type="button"
                  onClick={() => setLightboxFrame(work)}
                  aria-label={`Inspect ${work.title}`}
                  className="block w-full text-left cursor-pointer focus:outline-none"
                >
                  <div className="relative aspect-[3/3.65] w-full rounded-[6px] overflow-hidden bg-neutral-200 shadow-xs">
                    <SafeLumeveImage
                      src={work.src}
                      fallbackSrc={work.fallbackSrc}
                      alt={work.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="pointer-events-none absolute top-3 left-3 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-[8px] font-semibold tracking-[0.1em] uppercase text-[#c4452b] shadow-xs">
                      {work.badge}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-optic-display font-bold uppercase text-[22px] sm:text-[24px] leading-[0.98] tracking-[-0.01em] text-[#141416] group-hover:text-[#c4553d] transition-colors">
                    {work.title}
                  </h3>

                  <div className="mt-1 text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#8c8c94]">
                    {work.location}
                  </div>

                  <p className="mt-2 text-[11px] leading-[1.52] text-[#66666d] max-w-[300px]">
                    {work.caption}
                  </p>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3B. FULL-BLEED CRIMSON MANIFESTO BAND: "HONEST / TIMELESS"        */}
      {/* ================================================================= */}
      <section
        aria-label="Honest and Timeless Photography Manifesto"
        className="relative w-full min-h-[430px] sm:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#c93f24] via-[#9c2413] to-[#6f140a] text-white flex flex-col justify-between py-10 sm:py-12"
      >
        {/* Soft Atmospheric Profile Silhouette Layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        >
          <div className="relative w-full h-full scale-105 opacity-45 mix-blend-multiply">
            <SafeLumeveImage
              src={ABOUT_COLLAGE.insetPortrait.src}
              fallbackSrc={ABOUT_COLLAGE.insetPortrait.fallbackSrc}
              alt=""
              sizes="100vw"
              className="object-cover object-center grayscale brightness-[0.28] contrast-[1.55] blur-[2px]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#6b1209]/70 via-transparent to-[#b5321a]/45" />
        </div>

        {/* Top Left "HONEST" + Supporting Caption */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
          <div className="font-optic-display font-bold uppercase text-[64px] sm:text-[90px] lg:text-[106px] leading-[0.82] tracking-[-0.02em] text-white">
            HONEST
          </div>

          <p className="max-w-[235px] pt-1 sm:pt-2 text-[11px] sm:text-[11.5px] font-medium leading-[1.48] text-white/90">
            Natural light, thoughtful composition, and an editorial eye.
            Photography that feels as good as the moment itself.
          </p>
        </div>

        {/* Bottom Right Micro Specialties + "TIMELESS" */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-start sm:items-end justify-end gap-5 sm:gap-8 mt-24 sm:mt-28">
          <div className="sm:text-right max-w-[235px] pb-1 text-[8.5px] sm:text-[9px] font-semibold tracking-[0.12em] uppercase leading-[1.5] text-white/85">
            WEDDINGS · PORTRAITS · EDITORIAL · BRAND · EVENTS · TRAVEL
          </div>

          <div className="font-optic-display font-bold uppercase text-[64px] sm:text-[90px] lg:text-[106px] leading-[0.82] tracking-[-0.02em] text-white">
            TIMELESS
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. WHAT I DO: 6-CARD SERVICE MATRIX ("BEAUTIFULLY TOLD.")         */}
      {/* ================================================================= */}
      <section
        id="lumeve-services"
        className="scroll-mt-14 w-full bg-white py-16 sm:py-24"
      >
        <div
          id="lumeve-pricing"
          className="scroll-mt-14 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10"
        >
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
            {STUDIO_SERVICES.map((service) => {
              const isHighlighted = activeServiceNum === service.num;
              return (
                <button
                  key={service.num}
                  type="button"
                  onMouseEnter={() => setActiveServiceNum(service.num)}
                  onFocus={() => setActiveServiceNum(service.num)}
                  onClick={() => setSelectedService(service)}
                  className={`group text-left rounded-[6px] border p-6 sm:p-7 min-h-[215px] flex flex-col justify-between transition-all duration-300 cursor-pointer focus:outline-none ${
                    isHighlighted
                      ? "bg-[#c03e26] border-[#b0341e] text-white shadow-[0_16px_34px_rgba(192,62,38,0.22)]"
                      : "bg-[#f3f2ee] border-[#ebe9e3] text-[#141416] hover:border-[#c4553d]/45"
                  }`}
                >
                  <div>
                    <span
                      className={`block text-[10px] font-semibold tracking-[0.08em] ${
                        isHighlighted ? "text-white/90" : "text-[#c4553d]"
                      }`}
                    >
                      {service.num}
                    </span>

                    <h3
                      className={`mt-2 font-optic-display font-bold uppercase text-[22px] sm:text-[24px] leading-[1.02] tracking-[-0.01em] ${
                        isHighlighted ? "text-white" : "text-[#141416]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-2.5 text-[11.5px] leading-[1.55] ${
                        isHighlighted ? "text-white/90" : "text-[#73737a]"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`mt-8 inline-flex items-center gap-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase ${
                      isHighlighted ? "text-white" : "text-[#c4553d]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`rounded-full transition-all ${
                        isHighlighted
                          ? "w-3.5 h-1 bg-white"
                          : "w-1.5 h-1.5 bg-current"
                      }`}
                    />
                    <span>{service.ctaLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => setAllServicesOpen(true)}
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
        id="lumeve-testimonials"
        className="scroll-mt-14 w-full bg-[#f4f1ec] py-16 sm:py-24"
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
      {/* 6. NOTES FROM BEHIND THE LENS: "stories BEYOND THE FRAME."        */}
      {/* ================================================================= */}
      <section
        id="lumeve-journal"
        className="scroll-mt-14 w-full bg-white py-16 sm:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                NOTES FROM BEHIND THE LENS
              </p>

              <h2 className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
                <span className="font-serif italic text-[24px] sm:text-[30px] leading-none text-[#c4553d]">
                  stories
                </span>
                <span className="font-optic-display font-bold uppercase text-[44px] sm:text-[56px] leading-[0.86] tracking-[-0.015em] text-[#141416]">
                  BEYOND THE FRAME.
                </span>
              </h2>

              <p className="mt-3 max-w-[385px] text-[12px] sm:text-[12.5px] leading-[1.5] text-[#73737a]">
                Thoughts on creativity, meaningful moments, the art of
                photography, and the stories that inspire the way I see the
                world.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveArticle(JOURNAL_ARTICLES[0])}
              className="w-fit inline-flex items-center gap-2 rounded-full border border-[#c4553d]/80 px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#c4553d] hover:bg-[#c4553d] hover:text-white transition-colors cursor-pointer group"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-current transition-transform group-hover:scale-125"
              />
              <span>READ THE JOURNAL</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {JOURNAL_ARTICLES.map((article) => (
              <article key={article.id} className="group">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="block w-full text-left cursor-pointer focus:outline-none"
                >
                  <div className="relative aspect-[16/11] w-full rounded-[6px] overflow-hidden bg-neutral-900 shadow-xs">
                    <SafeLumeveImage
                      src={article.src}
                      fallbackSrc={article.fallbackSrc}
                      alt={article.title}
                      sizes="(max-width: 768px) 100vw, 330px"
                      className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                        article.isDarkChiaroscuro
                          ? "object-top brightness-[0.62] contrast-135"
                          : ""
                      }`}
                    />
                    {article.isDarkChiaroscuro && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/95 pointer-events-none"
                      />
                    )}
                  </div>

                  <div className="mt-3.5 text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#c4553d]">
                    {article.meta}
                  </div>

                  <h3 className="mt-1.5 font-optic-display font-bold uppercase text-[20px] sm:text-[21px] leading-[1.04] tracking-[-0.01em] text-[#141416] group-hover:text-[#c4553d] transition-colors">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.52] text-[#73737a]">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.12em] uppercase text-[#141416] group-hover:text-[#c4553d] transition-colors">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#c4553d]"
                    />
                    <span>READ ARTICLE</span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 8. A FEW THINGS TO KNOW — INTERACTIVE FAQ ACCORDION               */}
      {/* ================================================================= */}
      <section
        id="lumeve-faq"
        className="scroll-mt-14 w-full bg-[#f4f1ec] py-20 sm:py-24"
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
                setBookingSent(false);
                setBookingOpen(true);
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
      {/* 9. CONTACT INFORMATION + INQUIRY FORM ("ABOUT YOUR STORY.")       */}
      {/* ================================================================= */}
      <section
        id="lumeve-contact"
        className="scroll-mt-14 w-full bg-white py-16 sm:py-24 border-b border-[#ececf0]"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Contact Information Stack + Ruby Portrait */}
          <div className="lg:col-span-4">
            <p className="text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#c4553d] mb-3.5">
              CONTACT INFORMATION
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@lumeve.example"
                className="block rounded-[8px] bg-[#c4452b] hover:bg-[#ad3a22] text-white px-5 py-4 transition-colors shadow-[0_12px_26px_rgba(160,52,28,0.16)]"
              >
                <span className="block text-[8.5px] font-semibold tracking-[0.14em] uppercase text-white/85">
                  EMAIL
                </span>
                <span className="mt-0.5 block font-optic-display font-bold text-[19px] sm:text-[21px] tracking-[0.01em] leading-tight">
                  hello@lumeve.example
                </span>
              </a>

              <a
                href="tel:+12125550148"
                className="block rounded-[8px] bg-[#f4f1ec] hover:bg-[#ebe6dd] text-[#141416] px-5 py-4 transition-colors"
              >
                <span className="block text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[#8c8c94]">
                  PHONE
                </span>
                <span className="mt-0.5 block font-optic-display font-bold text-[19px] sm:text-[21px] leading-tight">
                  +1 (212) 555-0148
                </span>
              </a>

              <div className="rounded-[8px] bg-[#f4f1ec] text-[#141416] px-5 py-4">
                <span className="block text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[#8c8c94]">
                  LOCATION
                </span>
                <span className="mt-0.5 block font-optic-display font-bold text-[19px] sm:text-[21px] leading-tight">
                  New York, USA
                </span>
              </div>

              <div className="rounded-[8px] bg-[#f4f1ec] text-[#141416] px-5 py-4">
                <span className="block text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[#8c8c94]">
                  AVAILABILITY
                </span>
                <span className="mt-0.5 block font-optic-display font-bold text-[18px] sm:text-[20px] leading-tight">
                  Worldwide inquiries welcome
                </span>
              </div>
            </div>

            <p className="mt-4 text-[8.5px] leading-[1.45] tracking-[0.08em] uppercase text-[#8c8c94]">
              THE CONTACT DETAILS ABOVE ARE PLACEHOLDERS FOR THE TEMPLATE DEMO.
            </p>

            <div className="mt-5 relative w-full aspect-[16/11] rounded-[8px] overflow-hidden bg-neutral-900 shadow-sm">
              <SafeLumeveImage
                src={ABOUT_COLLAGE.insetPortrait.src}
                fallbackSrc={ABOUT_COLLAGE.insetPortrait.fallbackSrc}
                alt={ABOUT_COLLAGE.insetPortrait.alt}
                sizes="(max-width: 1024px) 90vw, 320px"
                className="object-cover object-top contrast-110"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#5c1208]/45 via-transparent to-black/25 pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column: Detailed Inquiry Form Card */}
          <div className="lg:col-span-8 rounded-[12px] bg-[#f4f1ec] p-6 sm:p-9 lg:p-11">
            <p className="text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
              INQUIRY FORM
            </p>

            <h2 className="mt-2">
              <span className="block font-serif italic text-[22px] sm:text-[26px] leading-[1.08] text-[#c4553d]">
                tell me a little
              </span>
              <span className="block font-optic-display font-bold uppercase text-[42px] sm:text-[52px] leading-[0.86] tracking-[-0.015em] text-[#141416] mt-0.5">
                ABOUT YOUR
                <br />
                STORY.
              </span>
            </h2>

            <p className="mt-3 max-w-[435px] text-[11.5px] sm:text-[12px] leading-[1.55] text-[#66666d]">
              The more I know about your plans, the better I can understand your
              needs and prepare a thoughtful response.
            </p>

            {contactSubmitted ? (
              <div className="mt-8 rounded-[10px] bg-white border border-[#e3dfd8] p-7 sm:p-8 text-left">
                <p className="text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                  INQUIRY RECEIVED
                </p>
                <h3 className="mt-2 font-optic-display font-bold uppercase text-2xl sm:text-3xl text-[#141416]">
                  THANK YOU, {contactForm.fullName || "FRIEND"}.
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#66666d]">
                  We received your{" "}
                  <span className="font-medium text-[#141416]">
                    {contactForm.lookingFor}
                  </span>{" "}
                  note and will reply to{" "}
                  <span className="font-medium text-[#141416]">
                    {contactForm.email || "your inbox"}
                  </span>{" "}
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactSubmitted(false);
                    setContactForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      lookingFor: "Wedding Photography",
                      preferredDate: "",
                      location: "",
                      budget: "",
                      projectDetails: "",
                    });
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c4452b] hover:bg-[#ad3a22] text-white px-5 py-2 text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer"
                >
                  <span>SEND ANOTHER INQUIRY</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setContactSubmitted(true);
                }}
                className="mt-7 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                    >
                      FULL NAME
                    </label>
                    <input
                      id="contact-full-name"
                      type="text"
                      required
                      value={contactForm.fullName}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          fullName: e.target.value,
                        })
                      }
                      placeholder="Your full name"
                      className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] placeholder:text-[#9c9ca4] focus:outline-none focus:border-[#c4553d]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] placeholder:text-[#9c9ca4] focus:outline-none focus:border-[#c4553d]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                    >
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+1 (000) 000-0000"
                      className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] placeholder:text-[#9c9ca4] focus:outline-none focus:border-[#c4553d]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                    >
                      WHAT ARE YOU LOOKING FOR?
                    </label>
                    <select
                      id="contact-service"
                      value={contactForm.lookingFor}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          lookingFor: e.target.value,
                        })
                      }
                      className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] focus:outline-none focus:border-[#c4553d]"
                    >
                      <option value="Wedding Photography">
                        Wedding Photography
                      </option>
                      <option value="Portrait Photography">
                        Portrait Photography
                      </option>
                      <option value="Fashion & Editorial">
                        Fashion &amp; Editorial
                      </option>
                      <option value="Brand & Commercial">
                        Brand &amp; Commercial
                      </option>
                      <option value="Events & Celebrations">
                        Events &amp; Celebrations
                      </option>
                      <option value="Travel & Lifestyle">
                        Travel &amp; Lifestyle
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-date"
                      className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                    >
                      PREFERRED DATE
                    </label>
                    <input
                      id="contact-date"
                      type="text"
                      value={contactForm.preferredDate}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          preferredDate: e.target.value,
                        })
                      }
                      placeholder="mm/dd/yyyy"
                      className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] placeholder:text-[#9c9ca4] focus:outline-none focus:border-[#c4553d]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                    >
                      EVENT OR SHOOT LOCATION
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      value={contactForm.location}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          location: e.target.value,
                        })
                      }
                      placeholder="City, venue, or region"
                      className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] placeholder:text-[#9c9ca4] focus:outline-none focus:border-[#c4553d]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                  >
                    ESTIMATED BUDGET
                  </label>
                  <input
                    id="contact-budget"
                    type="text"
                    value={contactForm.budget}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        budget: e.target.value,
                      })
                    }
                    placeholder="e.g. $1,500 – $3,000"
                    className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] placeholder:text-[#9c9ca4] focus:outline-none focus:border-[#c4553d]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#55555c] mb-1.5"
                  >
                    TELL ME ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    required
                    value={contactForm.projectDetails}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        projectDetails: e.target.value,
                      })
                    }
                    placeholder="Share your ideas, the mood you love, and anything I should know..."
                    className="w-full rounded-[6px] bg-white border border-[#e3dfd8] px-3.5 py-2.5 text-xs text-[#141416] placeholder:text-[#9c9ca4] focus:outline-none focus:border-[#c4553d] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c4452b] hover:bg-[#ad3a22] text-white px-6 py-2.5 text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer shrink-0 shadow-xs"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                    <span>SEND YOUR INQUIRY</span>
                  </button>

                  <p className="text-[8.5px] leading-[1.4] tracking-[0.08em] uppercase text-[#8c8c94]">
                    YOUR INFORMATION WILL ONLY BE USED TO RESPOND TO YOUR
                    INQUIRY.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 10. TERRACOTTA NEWSLETTER BANNER + STAY WITH US + STUDIO FOOTER   */}
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
                  Subscribed ({newsletterEmail}) — welcome to our creative notes
                  list.
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
              <SafeLumeveImage
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
                    onClick={() => scrollToSection("lumeve-home")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("lumeve-about")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("lumeve-work")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("lumeve-services")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("lumeve-journal")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Journal
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingSent(false);
                      setBookingOpen(true);
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
                      setBookingSent(false);
                      setBookingOpen(true);
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
                    onClick={() => scrollToSection("lumeve-about")}
                    className="hover:text-[#141416] transition-colors cursor-pointer"
                  >
                    Awards
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setAllServicesOpen(true)}
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
                href="#lumeve-faq"
                className="text-[9px] font-medium tracking-[0.08em] uppercase text-[#73737a] hover:text-[#141416] transition-colors"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#lumeve-faq"
                className="text-[9px] font-medium tracking-[0.08em] uppercase text-[#73737a] hover:text-[#141416] transition-colors"
              >
                TERMS &amp; CONDITIONS
              </a>
              <button
                type="button"
                onClick={() => {
                  setBookingSent(false);
                  setBookingOpen(true);
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
      {/* SINGLE SERVICE DETAIL MODAL                                       */}
      {/* ================================================================= */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedService.title}
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg bg-white text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ececf0]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                SERVICE {selectedService.num} · STARTING AT{" "}
                {selectedService.rate}
              </span>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>
            <h3 className="mt-4 font-optic-display font-bold uppercase text-3xl text-[#141416]">
              {selectedService.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#66666e]">
              {selectedService.description}
            </p>
            <div className="mt-5 rounded-xl bg-[#f4f1ec] p-4">
              <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#c4553d]">
                INCLUDED DELIVERABLES
              </div>
              <p className="mt-1.5 text-xs text-[#4b4b52]">
                {selectedService.deliverables}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  const chosen = selectedService.shootCategory;
                  setSelectedService(null);
                  setBookingForm((prev) => ({ ...prev, service: chosen }));
                  setBookingSent(false);
                  setBookingOpen(true);
                }}
                className="rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-5 py-2 text-xs font-medium cursor-pointer transition-colors"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* ALL SERVICES & COMMISSION GUIDE MODAL                             */}
      {/* ================================================================= */}
      {allServicesOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All Services and Pricing"
          onClick={() => setAllServicesOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl bg-white text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ececf0] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                2026 COMMISSION &amp; PRICING GUIDE
              </span>
              <button
                type="button"
                onClick={() => setAllServicesOpen(false)}
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
                      <h4 className="font-optic-display font-bold uppercase text-lg text-[#141416]">
                        {service.title}
                      </h4>
                      <span className="text-xs font-semibold text-[#73737a]">
                        · {service.rate}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#6d6d74]">
                      {service.deliverables}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setAllServicesOpen(false);
                      setBookingForm((prev) => ({
                        ...prev,
                        service: service.shootCategory,
                      }));
                      setBookingSent(false);
                      setBookingOpen(true);
                    }}
                    className="shrink-0 w-fit rounded-full border border-[#c4553d]/80 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#c4553d] hover:bg-[#c4553d] hover:text-white transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* JOURNAL ARTICLE READER MODAL                                      */}
      {/* ================================================================= */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeArticle.title}
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl bg-white text-[#141416] rounded-3xl overflow-hidden shadow-2xl border border-[#ececf0]"
          >
            <div className="relative aspect-[16/9] w-full bg-neutral-900">
              <SafeLumeveImage
                src={activeArticle.src}
                fallbackSrc={activeArticle.fallbackSrc}
                alt={activeArticle.title}
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[9.5px] font-semibold tracking-[0.14em] uppercase text-[#c4553d]">
                  {activeArticle.meta}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
                >
                  Close
                </button>
              </div>
              <h3 className="mt-2 font-optic-display font-bold uppercase text-2xl sm:text-3xl text-[#141416]">
                {activeArticle.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#55555c]">
                {activeArticle.excerpt}
              </p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#73737a]">
                {activeArticle.fullText}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* GET TO KNOW ME STORY MODAL                                        */}
      {/* ================================================================= */}
      {storyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About Lumeve Photography"
          onClick={() => setStoryModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl bg-white text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ececf0]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                NEW YORK · AVAILABLE WORLDWIDE
              </span>
              <button
                type="button"
                onClick={() => setStoryModalOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>
            <h3 className="mt-5 font-optic-display font-bold uppercase text-3xl sm:text-4xl leading-[0.9] text-[#141416]">
              ANALOG HEART, EDITORIAL PRECISION.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#66666e]">
              Shooting on Leica 35mm, medium format film, and calibrated digital
              across intimate New York ceremonies and European destinations.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setStoryModalOpen(false);
                  setBookingSent(false);
                  setBookingOpen(true);
                }}
                className="rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-5 py-2 text-xs font-medium cursor-pointer transition-colors"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* GALLERY FRAME LIGHTBOX MODAL                                      */}
      {/* ================================================================= */}
      {lightboxFrame && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxFrame.title}
          onClick={() => setLightboxFrame(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl bg-white text-[#141416] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative aspect-[4/5] w-full bg-neutral-200">
              <SafeLumeveImage
                src={lightboxFrame.src}
                fallbackSrc={lightboxFrame.fallbackSrc}
                alt={lightboxFrame.title}
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#f4f1ec] px-3 py-1 text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#c4553d]">
                  {lightboxFrame.badge}
                </span>
                <h3 className="mt-3 font-optic-display font-bold uppercase text-2xl text-[#141416]">
                  {lightboxFrame.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#73737a]">
                  {lightboxFrame.caption}
                </p>
                <dl className="mt-5 space-y-2 border-t border-[#ececf0] pt-4 text-xs">
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#8c8c94]">Film Stock</dt>
                    <dd className="font-medium text-right">
                      {lightboxFrame.stock}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#8c8c94]">Location</dt>
                    <dd className="font-medium text-right">
                      {lightboxFrame.location}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 flex items-center justify-between gap-2 pt-4 border-t border-[#ececf0]">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxFrame(null);
                    setBookingSent(false);
                    setBookingOpen(true);
                  }}
                  className="rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white px-4 py-2 text-xs font-medium cursor-pointer transition-colors"
                >
                  Book Similar
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxFrame(null)}
                  className="rounded-full border border-[#e5e5ea] px-4 py-2 text-xs font-medium text-[#141416] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SESSION BOOKING MODAL                                             */}
      {/* ================================================================= */}
      {bookingOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a Session"
          onClick={() => setBookingOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md bg-white text-[#141416] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ececf0]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ececf0]">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#c4553d]">
                BOOK A SESSION · NEW YORK
              </span>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="text-xs font-medium text-[#5e5e66] hover:text-[#141416] cursor-pointer"
              >
                Close
              </button>
            </div>

            {bookingSent ? (
              <div className="py-10 text-center space-y-3">
                <p className="font-optic-display font-bold uppercase text-3xl text-[#141416]">
                  INQUIRY SENT.
                </p>
                <p className="text-xs text-[#73737a]">
                  Thank you, {bookingForm.name || "friend"}. We&apos;ll reply
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="mt-3 rounded-full bg-[#c4553d] text-white px-5 py-2 text-xs font-medium cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setBookingSent(true);
                }}
                className="mt-5 space-y-4 text-xs"
              >
                <label className="block">
                  <span className="block text-[#73737a] mb-1">Your Name</span>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Claire Bennett"
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  />
                </label>

                <label className="block">
                  <span className="block text-[#73737a] mb-1">Email</span>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="claire@studio.com"
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  />
                </label>

                <label className="block">
                  <span className="block text-[#73737a] mb-1">Collection</span>
                  <select
                    value={bookingForm.service}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        service: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  >
                    <option value="WEDDING STORYTELLING">
                      Wedding Storytelling
                    </option>
                    <option value="EDITORIAL PORTRAITS">
                      Editorial Portraits
                    </option>
                    <option value="BRAND & LOOKBOOK">Brand & Lookbook</option>
                  </select>
                </label>

                <label className="block">
                  <span className="block text-[#73737a] mb-1">
                    Session Details
                  </span>
                  <textarea
                    rows={3}
                    required
                    value={bookingForm.message}
                    onChange={(e) =>
                      setBookingForm((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell me about your date, venue, and vision..."
                    className="w-full rounded-xl bg-[#f9f9fb] border border-[#e5e5ea] px-3.5 py-2 text-[#141416] focus:outline-none focus:border-[#c4553d]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#c4553d] hover:bg-[#ad4530] text-white py-2.5 text-xs font-medium cursor-pointer transition-colors"
                >
                  Send Booking Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

