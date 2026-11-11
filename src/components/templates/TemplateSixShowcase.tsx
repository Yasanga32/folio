"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

interface EditorialPhotoItem {
  id: string;
  indexLabel?: string;
  client: string;
  title: string;
  category: "Automotive" | "Fashion" | "Luxury" | "Sport & Commercial";
  year: string;
  location: string;
  src: string;
  fallbackSrc: string;
  aspectClass: string;
}

interface ServiceRow {
  id: string;
  titleLineOne: string;
  titleLineTwo?: string;
  items: string[];
  leadText: string;
  midBoldOne?: string;
  midMutedOne: string;
  endBold: string;
  src: string;
  fallbackSrc: string;
  deckBackOneClass: string;
  deckBackTwoClass: string;
}

const HERO_PANELS: EditorialPhotoItem[] = [
  {
    id: "hero-apex-f1",
    indexLabel: "I",
    client: "Scuderia Track Study",
    title: "Apex Motion — Formula Circuit",
    category: "Automotive",
    year: "2026",
    location: "Monza, Italy",
    src: "https://images.unsplash.com/photo-1728116693268-125c5d6ad9e2?auto=format&fit=crop&w=1000&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1581439645268-ea7bbe6bd091?auto=format&fit=crop&w=1000&q=85",
    aspectClass: "aspect-[3/4.35]",
  },
  {
    id: "hero-crimson-coupe",
    indexLabel: "II",
    client: "Atelier Rosso",
    title: "Overhead Crimson Coupe",
    category: "Automotive",
    year: "2026",
    location: "Milan Studio",
    src: "https://images.unsplash.com/photo-1762314907955-b7c1e11a8782?auto=format&fit=crop&w=1000&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1555472287-ada4cab06bfe?auto=format&fit=crop&w=1000&q=85",
    aspectClass: "aspect-[3/4.35]",
  },
  {
    id: "hero-serpent-gold",
    indexLabel: "III",
    client: "Maison Aurelia",
    title: "Rose-Gold Coiled Bracelet Study",
    category: "Luxury",
    year: "2026",
    location: "Paris Showroom",
    src: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1000&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1608973044200-647acdcff830?auto=format&fit=crop&w=1000&q=85",
    aspectClass: "aspect-[3/4.35]",
  },
  {
    id: "hero-sapphire-macaw",
    indexLabel: "IV",
    client: "Veyra Fine Jewels",
    title: "Indigo Feather & Sapphire Cut",
    category: "Luxury",
    year: "2026",
    location: "Antwerp / Chicago",
    src: "https://images.unsplash.com/photo-1563485406544-24c433192ac3?auto=format&fit=crop&w=1000&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1000&q=85",
    aspectClass: "aspect-[3/4.35]",
  },
];

const GALLERY_COLUMNS: EditorialPhotoItem[][] = [
  [
    {
      id: "gal-fernweg",
      indexLabel: "(1)",
      client: "Fernweg",
      title: "Fernweg — Silver Roadster Cove Study",
      category: "Automotive",
      year: "2026",
      location: "Stuttgart Stage",
      src: "https://images.unsplash.com/photo-1659671026898-b4b7f9eda35e?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1708781055870-5ac2a90bbef0?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/5.1]",
    },
    {
      id: "gal-marrow-studio",
      indexLabel: "(5)",
      client: "Marrow Studio",
      title: "Marrow Studio — High Altitude Winter Campaign",
      category: "Fashion",
      year: "2026",
      location: "Zermatt Alps",
      src: "https://images.unsplash.com/photo-1650226700636-4d1378671b9e?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/4.1]",
    },
  ],
  [
    {
      id: "gal-northline",
      indexLabel: "(2)",
      client: "Northline",
      title: "Northline — Overhead Hardcourt Serve",
      category: "Sport & Commercial",
      year: "2026",
      location: "Chicago Court Club",
      src: "https://images.unsplash.com/photo-1602211847326-dd96f7c45f10?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1598552133129-c5c474a8414d?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/3.45]",
    },
    {
      id: "gal-halcyon",
      indexLabel: "(6)",
      client: "Halcyon",
      title: "Halcyon — Cobalt Court Sportswear",
      category: "Fashion",
      year: "2026",
      location: "Los Angeles, CA",
      src: "https://images.unsplash.com/photo-1668032739447-cefbcc8cd806?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/4]",
    },
  ],
  [
    {
      id: "gal-salt-fable",
      indexLabel: "(3)",
      client: "Salt & Fable",
      title: "Salt & Fable — Clay Court Still Life",
      category: "Luxury",
      year: "2026",
      location: "Palm Springs, CA",
      src: "https://images.unsplash.com/photo-1598552133129-c5c474a8414d?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/4.2]",
    },
    {
      id: "gal-coastform",
      indexLabel: "(7)",
      client: "Coastform",
      title: "Coastform — Equestrian Tapestry Study",
      category: "Luxury",
      year: "2026",
      location: "Normandy Estate",
      src: "https://images.unsplash.com/photo-1551892884-0fbf2ef25b89?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/3.15]",
    },
  ],
  [
    {
      id: "gal-veyra",
      indexLabel: "(4)",
      client: "Veyra",
      title: "Veyra — Hyacinth & Sapphire Ring",
      category: "Luxury",
      year: "2026",
      location: "New York Studio",
      src: "https://images.unsplash.com/photo-1610847034016-49565e0c068a?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1563485406544-24c433192ac3?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/3.85]",
    },
    {
      id: "gal-alto",
      indexLabel: "(8)",
      client: "Alto",
      title: "Alto — Botanical Glass & Daylight",
      category: "Sport & Commercial",
      year: "2026",
      location: "Kyoto Garden",
      src: "https://images.unsplash.com/photo-1630855004469-26d523de5dc4?auto=format&fit=crop&w=1000&q=85",
      fallbackSrc:
        "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=1000&q=85",
      aspectClass: "aspect-[3/3.95]",
    },
  ],
];

const ABOUT_METRICS = [
  { value: "250+", label: "Projects Delivered" },
  { value: "1M+", label: "Photos Captured" },
  { value: "7+", label: "Years of Experience" },
  { value: "12+", label: "Industries Worked" },
];

const ABOUT_PORTRAIT = {
  id: "about-monochrome-portrait",
  indexLabel: "00",
  client: "Sasha Grey — Studio Self Study",
  title: "Monochrome Film Study, 120mm",
  category: "Fashion" as const,
  year: "2026",
  location: "Chicago Darkroom",
  src: "https://images.unsplash.com/photo-1771749141621-cf9a4d91c14e?auto=format&fit=crop&w=1000&q=85",
  fallbackSrc:
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85",
  aspectClass: "aspect-[3/4.05]",
};

const SERVICE_ROWS: ServiceRow[] = [
  {
    id: "service-portrait-branding",
    titleLineOne: "Portrait & Personal",
    titleLineTwo: "Branding",
    items: [
      "Headshots",
      "Personal Branding Sessions",
      "LinkedIn & Corporate Portraits",
      "Founder & Executive Portraits",
      "Creative Portraits",
    ],
    leadText:
      "Professional portraits that capture who you are and what you stand for.",
    midBoldOne: "Perfect for",
    midMutedOne: "founders, creatives, and professionals",
    endBold: "who need images that work as hard as they do.",
    src: "https://images.unsplash.com/photo-1668032739447-cefbcc8cd806?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    deckBackOneClass: "bg-[#4f84ba]",
    deckBackTwoClass: "bg-[#255589]",
  },
  {
    id: "service-editorial-lifestyle",
    titleLineOne: "Editorial &",
    titleLineTwo: "Lifestyle",
    items: [
      "Magazine & Editorial Features",
      "Fashion Lookbooks",
      "Lifestyle Campaigns",
      "Concept & Story-Driven Shoots",
      "Music & Artist Photography",
    ],
    leadText: "Story-driven shoots that bring concepts to life.",
    midMutedOne: "From magazine features to campaign visuals,",
    endBold: "I create images with mood, narrative, and intention.",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    deckBackOneClass: "bg-[#7a3135]",
    deckBackTwoClass: "bg-[#4f191c]",
  },
  {
    id: "service-product-commercial",
    titleLineOne: "Product &",
    titleLineTwo: "Commercial",
    items: [
      "E-commerce Product Photography",
      "Food & Beverage Photography",
      "Real Estate & Interior Photography",
      "Brand & Marketing Campaigns",
      "Packaging & Flat-Lay Photography",
    ],
    leadText:
      "Clean, compelling product photography that makes your work look as good as it is.",
    midMutedOne: "Ideal for brands, e-commerce,",
    endBold: "and marketing campaigns.",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85",
    deckBackOneClass: "bg-[#dcdad4]",
    deckBackTwoClass: "bg-[#c6c3bc]",
  },
  {
    id: "service-event-coverage",
    titleLineOne: "Event Coverage",
    items: [
      "Product Launches",
      "Conferences & Corporate Events",
      "Private Parties & Gatherings",
      "Concerts & Live Performances",
      "Brand Activations",
    ],
    leadText:
      "Candid, well-timed coverage that captures the energy of the moment —",
    midMutedOne: "from launches and conferences to",
    endBold: "private gatherings.",
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=85",
    fallbackSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
    deckBackOneClass: "bg-[#a2a4a9]",
    deckBackTwoClass: "bg-[#7c7e83]",
  },
];

function SafeEditorialImage({
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
  const [failedForSrc, setFailedForSrc] = useState<string | null>(null);
  const activeSrc = failedForSrc === src ? fallbackSrc : src;

  return (
    <Image
      src={activeSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => {
        if (failedForSrc !== src) {
          setFailedForSrc(src);
        }
      }}
      className={className}
    />
  );
}

export default function TemplateSixShowcase() {
  const [activeTab, setActiveTab] = useState<"Home" | "Contact">("Home");
  const [clockText, setClockText] = useState("CST 12:04:05 PM");
  const [lightboxItem, setLightboxItem] = useState<EditorialPhotoItem | null>(
    null
  );
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveFilter, setArchiveFilter] = useState<
    "All" | EditorialPhotoItem["category"]
  >("All");
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const allArchiveItems = useMemo(
    () => [...GALLERY_COLUMNS.flat(), ...HERO_PANELS],
    []
  );

  const filteredArchiveItems = useMemo(() => {
    if (archiveFilter === "All") {
      return allArchiveItems;
    }
    return allArchiveItems.filter((item) => item.category === archiveFilter);
  }, [allArchiveItems, archiveFilter]);

  useEffect(() => {
    const updateClock = () => {
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setClockText(`CST ${formatted}`);
    };

    const initialTick = window.setTimeout(updateClock, 0);
    const intervalId = window.setInterval(updateClock, 1000);
    return () => {
      window.clearTimeout(initialTick);
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxItem(null);
        setArchiveOpen(false);
        setAboutModalOpen(false);
      }

      if (lightboxItem) {
        const index = allArchiveItems.findIndex(
          (item) => item.id === lightboxItem.id
        );
        if (event.key === "ArrowRight" && index >= 0) {
          setLightboxItem(
            allArchiveItems[(index + 1) % allArchiveItems.length]
          );
        } else if (event.key === "ArrowLeft" && index >= 0) {
          setLightboxItem(
            allArchiveItems[
              (index - 1 + allArchiveItems.length) % allArchiveItems.length
            ]
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem, allArchiveItems]);

  const navigateToSection = (sectionId: "sasha-top" | "sasha-gallery" | "sasha-about") => {
    const scrollTarget = () => {
      if (sectionId === "sasha-top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (activeTab !== "Home") {
      setActiveTab("Home");
      window.setTimeout(scrollTarget, 60);
      return;
    }

    scrollTarget();
  };

  const openContactTab = (prefillTopic?: string) => {
    if (prefillTopic) {
      setFormState((prev) => ({
        ...prev,
        notes: prev.notes.trim()
          ? prev.notes
          : `Interested in ${prefillTopic}: `,
      }));
    }
    setFormSubmitted(false);
    setActiveTab("Contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const isContactReady =
    formState.name.trim().length > 0 &&
    formState.email.trim().length > 0 &&
    formState.notes.trim().length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#ebebed] text-[#111113] selection:bg-[#111113] selection:text-white relative">
      {/* Shared Template Switcher Navbar in Light Palette */}
      <div className="border-b border-[#111113]/10 bg-[#ebebed]">
        <Navbar />
      </div>

      {/* Persistent Editorial Header: SASHA GREY + Available Cutout + Pill Tabs */}
      <header
        id="sasha-top"
        className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-11"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => navigateToSection("sasha-top")}
            className="relative inline-block w-fit text-left cursor-pointer focus:outline-none"
          >
            <h1 className="font-optic-display font-bold uppercase text-[clamp(3.6rem,10.8vw,9.4rem)] leading-[0.82] tracking-[-0.02em] text-[#111113] select-none">
              SASHA GREY
            </h1>
            <span
              aria-label="Available for commissions"
              className="pointer-events-none select-none absolute top-[11%] sm:top-[12%] -left-[3.2%] sm:-left-[2.2%] z-10 inline-flex items-center justify-center bg-[#ebebed] px-2.5 sm:px-3.5 py-[2px] sm:py-[4px] -rotate-[40deg] text-[10px] sm:text-[12.5px] md:text-[14px] font-semibold tracking-[-0.01em] text-[#111113] leading-none"
            >
              Available
            </span>
          </button>

          <nav
            aria-label="Portfolio sections"
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:pt-3"
          >
            <button
              type="button"
              onClick={() => navigateToSection("sasha-top")}
              className="rounded-full border border-[#2a2a2d]/65 px-3.5 sm:px-4 py-1 text-[11px] sm:text-[12px] font-medium text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigateToSection("sasha-gallery")}
              className="rounded-full border border-[#2a2a2d]/65 px-3.5 sm:px-4 py-1 text-[11px] sm:text-[12px] font-medium text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113] transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => navigateToSection("sasha-about")}
              className="rounded-full border border-[#2a2a2d]/65 px-3.5 sm:px-4 py-1 text-[11px] sm:text-[12px] font-medium text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => openContactTab()}
              aria-current={activeTab === "Contact" ? "page" : undefined}
              className={`rounded-full border px-3.5 sm:px-4 py-1 text-[11px] sm:text-[12px] font-medium transition-colors cursor-pointer ${
                activeTab === "Contact"
                  ? "bg-[#111113] text-white border-[#111113]"
                  : "border-[#2a2a2d]/65 text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113]"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">
        {activeTab === "Contact" ? (
          /* =============================================================== */
          /* CONTACT TAB VIEW                                                */
          /* =============================================================== */
          <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-14 sm:pt-20 pb-20 sm:pb-28">
            <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-[#111113]">
              <span>Contact me</span>
              <span className="tabular-nums">©2026</span>
            </div>

            <div className="mt-3 flex flex-col gap-[3px]" aria-hidden="true">
              <div className="h-px w-full bg-[#111113]/18" />
              <div className="h-px w-full bg-[#111113]/12" />
            </div>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Copy Block */}
              <div className="lg:col-span-6 lg:pl-12 xl:pl-20">
                <p className="max-w-[390px] text-[15.5px] sm:text-[17.5px] leading-[1.35] tracking-[-0.015em] font-medium">
                  <span className="text-[#111113]">
                    No forms with fifteen fields,{" "}
                  </span>
                  <span className="text-[#7e7e84]">
                    no sales calls before you even know what you need.{" "}
                  </span>
                  <span className="text-[#111113]">
                    Just tell Sasha Grey what you&apos;re working on.
                  </span>
                </p>
              </div>

              {/* Right Minimalist Underline Inquiry Form */}
              <div className="lg:col-span-6 w-full lg:max-w-[460px]">
                {formSubmitted ? (
                  <div className="pt-2 space-y-5">
                    <div className="border-b border-[#111113]/18 pb-5">
                      <p className="text-[16px] font-medium tracking-[-0.01em] text-[#111113]">
                        Thanks{formState.name ? `, ${formState.name}` : ""}. Your
                        message is in.
                      </p>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-[#5e5e64]">
                        Sasha Grey&apos;s studio will review your project note
                        and reply directly to{" "}
                        <span className="text-[#111113] font-medium">
                          {formState.email}
                        </span>{" "}
                        shortly ({clockText}).
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          setFormState({ name: "", email: "", notes: "" });
                          setFormSubmitted(false);
                        }}
                        className="rounded-full bg-[#111113] hover:bg-neutral-800 text-white px-5 py-2 text-[11.5px] font-medium transition-colors cursor-pointer"
                      >
                        Send another note
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateToSection("sasha-top")}
                        className="rounded-full border border-[#2a2a2d]/65 px-5 py-2 text-[11.5px] font-medium text-[#111113] hover:bg-[#111113] hover:text-white transition-colors cursor-pointer"
                      >
                        Back to Home
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <label className="block">
                      <span className="block text-[10.5px] font-medium text-[#8a8a90] mb-1.5">
                        Name *
                      </span>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Jane Foster"
                        className="w-full bg-transparent border-0 border-b border-[#111113]/15 pb-3 text-[12px] font-medium text-[#111113] placeholder:text-[#4e4e54] focus:outline-none focus:border-[#111113] transition-colors"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-[10.5px] font-medium text-[#8a8a90] mb-1.5">
                        E-mail *
                      </span>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="jane@framer.com"
                        className="w-full bg-transparent border-0 border-b border-[#111113]/15 pb-3 text-[12px] font-medium text-[#111113] placeholder:text-[#4e4e54] focus:outline-none focus:border-[#111113] transition-colors"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-[10.5px] font-medium text-[#8a8a90] mb-1.5">
                        Project &amp; Details *
                      </span>
                      <textarea
                        rows={5}
                        required
                        value={formState.notes}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            notes: e.target.value,
                          }))
                        }
                        placeholder="Tell me more"
                        className="w-full bg-transparent border-0 border-b border-[#111113]/15 pb-3 text-[12px] font-medium text-[#111113] placeholder:text-[#4e4e54] resize-none focus:outline-none focus:border-[#111113] transition-colors"
                      />
                    </label>

                    <button
                      type="submit"
                      className={`w-full rounded-full py-3.5 text-[12px] font-medium transition-all cursor-pointer ${
                        isContactReady
                          ? "bg-[#111113] text-white hover:bg-neutral-800 active:scale-[0.99]"
                          : "bg-[#f5f5f7] text-[#84848a] hover:bg-[#111113] hover:text-white"
                      }`}
                    >
                      Send message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* ============================================================= */}
            {/* 1. HERO BIO + LIVE CLOCK + 4-COLUMN STRIP                     */}
            {/* ============================================================= */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-10 pb-16 sm:pb-24">
              {/* Bio + Live CST Clock + Hire Me Pill Row aligned with 4-column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end">
                <p className="lg:col-span-2 max-w-[365px] text-[12px] sm:text-[12.5px] leading-[1.42] font-medium text-[#161618]">
                  Photographer and visual storyteller with more than 5 years of
                  experience, focused on portrait, editorial, and brand
                  photography. My work spans across various industries including
                  Fashion, Hospitality, Real Estate, Food &amp; Beverage,
                  Wellness, Music, and many more.
                </p>

                <div className="flex items-center lg:justify-center pb-0.5">
                  <span
                    suppressHydrationWarning
                    className="text-[11.5px] sm:text-[12px] font-medium tabular-nums tracking-[0.01em] text-[#111113]"
                  >
                    {clockText}
                  </span>
                </div>

                <div className="flex sm:justify-end">
                  <button
                    type="button"
                    onClick={() => openContactTab()}
                    className="rounded-full bg-[#111113] hover:bg-neutral-800 active:scale-95 text-white px-5 py-1.5 text-[11.5px] sm:text-[12px] font-medium transition-all cursor-pointer"
                  >
                    Hire me
                  </button>
                </div>
              </div>

              {/* Continuous Moving 4-Column Sharp Vertical Showcase Marquee */}
              <div className="mt-3.5 sm:mt-4 w-full overflow-hidden scroll-container">
                <div className="flex w-max animate-scroll-left-fast">
                  {[0, 1].map((dupIndex) => (
                    <div
                      key={dupIndex}
                      aria-hidden={dupIndex === 1}
                      className="flex items-stretch gap-3 sm:gap-3.5 pr-3 sm:pr-3.5 shrink-0"
                    >
                      {HERO_PANELS.map((panel, idx) => (
                        <button
                          key={`${dupIndex}-${panel.id}`}
                          type="button"
                          tabIndex={dupIndex === 1 ? -1 : 0}
                          onClick={() => setLightboxItem(panel)}
                          aria-label={
                            dupIndex === 0 ? `Inspect ${panel.title}` : undefined
                          }
                          className={`group relative shrink-0 w-[245px] sm:w-[290px] lg:w-[322px] ${panel.aspectClass} bg-neutral-300 overflow-hidden rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111113]`}
                        >
                          <SafeEditorialImage
                            src={panel.src}
                            fallbackSrc={panel.fallbackSrc}
                            alt={dupIndex === 0 ? panel.title : ""}
                            priority={dupIndex === 0 && idx < 2}
                            sizes="(max-width: 640px) 245px, (max-width: 1024px) 290px, 322px"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                          <span className="pointer-events-none absolute inset-x-0 bottom-0 p-3 flex items-center justify-between text-[11px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                            <span>{panel.client}</span>
                            <span>{panel.year}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============================================================= */}
            {/* 2. GALLERY: STAGGERED 4-COLUMN MASONRY ARCHIVE                */}
            {/* ============================================================= */}
            <section
              id="sasha-gallery"
              className="scroll-mt-6 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-12 pb-20 sm:pb-28"
            >
        <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-[#111113] pb-3 border-b border-[#111113]/18">
          <span>Gallery</span>
          <span className="tabular-nums">@2026</span>
          <button
            type="button"
            onClick={() => {
              setArchiveFilter("All");
              setArchiveOpen(true);
            }}
            className="hover:underline underline-offset-4 cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-3.5 gap-y-8 items-start">
          {GALLERY_COLUMNS.map((column, colIdx) => (
            <div key={`gallery-col-${colIdx}`} className="flex flex-col gap-6 sm:gap-7">
              {column.map((item) => (
                <article key={item.id} className="group">
                  <div className="flex items-center justify-between text-[11px] sm:text-[11.5px] font-medium text-[#1a1a1d] mb-1.5">
                    <span>{item.client}</span>
                    <span className="tabular-nums text-[#3a3a40]">
                      {item.indexLabel}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxItem(item)}
                    aria-label={`Open ${item.client} photography series`}
                    className={`relative block w-full ${item.aspectClass} bg-neutral-300 overflow-hidden rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111113]`}
                  >
                    <SafeEditorialImage
                      src={item.src}
                      fallbackSrc={item.fallbackSrc}
                      alt={item.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </button>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. ABOUT: EDITORIAL STATEMENT + 2x2 METRICS + MONOCHROME STUDY    */}
      {/* ================================================================= */}
      <section
        id="sasha-about"
        className="scroll-mt-6 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-12 pb-20 sm:pb-28"
      >
        <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-[#111113] pb-3 border-b border-[#111113]/18">
          <span>About</span>
          <span className="tabular-nums">@2026</span>
          <button
            type="button"
            onClick={() => setAboutModalOpen(true)}
            className="hover:underline underline-offset-4 cursor-pointer"
          >
            More about me
          </button>
        </div>

        <h2 className="mt-8 sm:mt-11 max-w-[790px] text-[26px] sm:text-[34px] lg:text-[42px] font-medium tracking-[-0.028em] leading-[1.12] text-[#111113]">
          When I&apos;m not behind the camera, you&apos;ll find me exploring new
          locations, studying light, or editing through a fresh batch of film.
        </h2>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.9fr_1.05fr] gap-8 lg:gap-8 items-stretch">
          {/* Left: 2x2 Stats aligned toward baseline */}
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7">
              {ABOUT_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="pb-4 border-b border-[#111113]/18"
                >
                  <div className="text-[26px] sm:text-[32px] font-medium tracking-[-0.025em] leading-none text-[#111113] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium text-[#4a4a50]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Monochrome Low-Key Studio Portrait */}
          <div>
            <button
              type="button"
              onClick={() => setLightboxItem(ABOUT_PORTRAIT)}
              aria-label="Inspect monochrome studio portrait"
              className="group relative block w-full aspect-[3/4.05] bg-[#161618] overflow-hidden rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111113]"
            >
              <SafeEditorialImage
                src={ABOUT_PORTRAIT.src}
                fallbackSrc={ABOUT_PORTRAIT.fallbackSrc}
                alt={ABOUT_PORTRAIT.title}
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover grayscale contrast-115 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </button>
          </div>

          {/* Right: Editorial Philosophy + Lets Work CTA */}
          <div className="flex flex-col justify-between gap-8">
            <p className="text-[12.5px] sm:text-[13px] leading-[1.48] font-medium text-[#1b1b1e] max-w-[430px]">
              I&apos;m a photographer who believes every brand and every person
              has a story worth telling through a single frame. Over the past 8+
              years, I&apos;ve partnered with startups, studios, and individuals
              to capture images that feel honest, intentional, and unmistakably
              theirs. Whether it&apos;s a product launch, a personal branding
              shoot, or an editorial campaign, I bring the same care to every
              project — from first concept to final edit.
            </p>

            <div>
              <button
                type="button"
                onClick={() => openContactTab()}
                className="rounded-full bg-[#111113] hover:bg-neutral-800 active:scale-95 text-white px-5 py-1.5 text-[11.5px] sm:text-[12px] font-medium transition-all cursor-pointer"
              >
                Lets Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. SERVICES: EDITORIAL DELIVERABLES + FANNED PHOTO CARD DECKS     */}
      {/* ================================================================= */}
      <section
        id="sasha-services"
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-12 pb-12 sm:pb-16"
      >
        <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-[#111113] pb-3 border-b border-[#111113]/18">
          <span>Services</span>
          <span className="tabular-nums">@2026</span>
        </div>

        <div className="divide-y divide-[#111113]/18">
          {SERVICE_ROWS.map((service) => {
            const fullServiceName = service.titleLineTwo
              ? `${service.titleLineOne} ${service.titleLineTwo}`
              : service.titleLineOne;

            return (
              <div
                key={service.id}
                className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr_auto] gap-8 lg:gap-10 items-stretch"
              >
                {/* Left Column: Heading + Numbered Index Rows */}
                <div className="flex flex-col justify-between gap-10 sm:gap-14">
                  <h3 className="text-[26px] sm:text-[32px] font-medium tracking-[-0.025em] leading-[1.1] text-[#111113]">
                    <span className="block">{service.titleLineOne}</span>
                    {service.titleLineTwo && (
                      <span className="block">{service.titleLineTwo}</span>
                    )}
                  </h3>

                  <ol className="space-y-1 max-w-[430px]">
                    {service.items.map((item, idx) => (
                      <li
                        key={item}
                        className="grid grid-cols-[44px_1fr] items-baseline text-[11.5px] sm:text-[12px] font-medium text-[#1a1a1d]"
                      >
                        <span className="tabular-nums text-[#2b2b30]">
                          {String(idx + 1).padStart(2, "0")}.
                        </span>
                        <span className="text-right">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Middle Column: Editorial Copy Right-Aligned */}
                <div className="flex items-center lg:justify-end">
                  <p className="text-[12px] sm:text-[12.5px] leading-[1.48] text-right max-w-[295px] text-[#6e6e73]">
                    <span className="font-semibold text-[#111113]">
                      {service.leadText}{" "}
                    </span>
                    {service.midBoldOne && (
                      <span className="font-semibold text-[#111113]">
                        {service.midBoldOne}{" "}
                      </span>
                    )}
                    <span>{service.midMutedOne} </span>
                    <span className="font-semibold text-[#111113]">
                      {service.endBold}
                    </span>
                  </p>
                </div>

                {/* Far-Right Column: Fanned Stacked Photo Card Deck */}
                <div className="flex items-center justify-center lg:justify-end pl-6 pt-3">
                  <button
                    type="button"
                    onClick={() => openContactTab(fullServiceName)}
                    aria-label={`Book ${fullServiceName}`}
                    className="group relative w-[240px] sm:w-[276px] lg:w-[300px] aspect-square cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111113]"
                  >
                    {/* Back card 2 (deep accent swatch) */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 origin-bottom-left ${service.deckBackTwoClass} border-2 border-white -rotate-[10deg] -translate-x-2 -translate-y-1.5 transition-transform duration-300 ease-out group-hover:-rotate-[13deg] group-hover:-translate-x-3`}
                    />
                    {/* Back card 1 (mid accent swatch) */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 origin-bottom-left ${service.deckBackOneClass} border-2 border-white -rotate-[5deg] -translate-x-1 -translate-y-0.5 transition-transform duration-300 ease-out group-hover:-rotate-[7deg] group-hover:-translate-x-1.5`}
                    />
                    {/* Main front square photograph */}
                    <span className="relative block w-full h-full border-[3px] border-white bg-neutral-200 overflow-hidden shadow-xs">
                      <SafeEditorialImage
                        src={service.src}
                        fallbackSrc={service.fallbackSrc}
                        alt={fullServiceName}
                        sizes="(max-width: 640px) 240px, 300px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
          </>
        )}
      </main>

      {/* ================================================================= */}
      {/* 5. FOOTER: MONUMENTAL LET'S TALK + SOCIAL PILLS + COPYRIGHT       */}
      {/* ================================================================= */}
      <footer className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-10 pt-16 sm:pt-24 pb-20 sm:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-8">
            <button
              type="button"
              onClick={() => openContactTab()}
              className="font-optic-display font-bold uppercase text-[clamp(3.7rem,9.8vw,9rem)] leading-[0.82] tracking-[-0.02em] text-[#111113] hover:opacity-80 transition-opacity text-left cursor-pointer"
            >
              LET&apos;S TALK
            </button>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-1">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#2a2a2d]/65 px-3.5 py-1 text-[11px] font-medium text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113] transition-colors"
              >
                Youtube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#2a2a2d]/65 px-3.5 py-1 text-[11px] font-medium text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#2a2a2d]/65 px-3.5 py-1 text-[11px] font-medium text-[#111113] hover:bg-[#111113] hover:text-white hover:border-[#111113] transition-colors"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          <p className="text-[11px] sm:text-[11.5px] font-medium text-[#111113] lg:pb-1 whitespace-nowrap">
            ©2026 Sasha Grey.
          </p>
        </div>
      </footer>

      <FramerBadge />

      {/* ================================================================= */}
      {/* MODAL 1: LIGHTBOX VIEWER                                          */}
      {/* ================================================================= */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-black/82 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#ebebed] text-[#111113] border border-white/25 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr]"
          >
            <div className="relative w-full aspect-[4/5] bg-neutral-900">
              <SafeEditorialImage
                src={lightboxItem.src}
                fallbackSrc={lightboxItem.fallbackSrc}
                alt={lightboxItem.title}
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-medium text-[#55555c] pb-3 border-b border-[#111113]/15">
                  <span>{lightboxItem.category}</span>
                  <span>
                    {lightboxItem.indexLabel
                      ? `Frame ${lightboxItem.indexLabel}`
                      : lightboxItem.year}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-medium tracking-tight text-[#111113]">
                  {lightboxItem.client}
                </h3>
                <p className="mt-2 text-sm text-[#4a4a50]">
                  {lightboxItem.title}
                </p>

                <dl className="mt-6 space-y-2.5 border-t border-[#111113]/15 pt-4 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-[#55555c]">Location</dt>
                    <dd className="font-medium text-[#111113]">
                      {lightboxItem.location}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#55555c]">Year</dt>
                    <dd className="font-medium text-[#111113]">
                      {lightboxItem.year}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#55555c]">Format</dt>
                    <dd className="font-medium text-[#111113]">
                      Medium Format &amp; 120mm Film
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex items-center justify-between gap-3 pt-4 border-t border-[#111113]/15">
                <button
                  type="button"
                  onClick={() => {
                    const currentTitle = lightboxItem.category;
                    setLightboxItem(null);
                    openContactTab(`${currentTitle} Shoot`);
                  }}
                  className="rounded-full bg-[#111113] text-white px-5 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Commission Similar
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="rounded-full border border-[#111113]/40 px-4 py-2 text-xs font-medium text-[#111113] hover:bg-[#111113] hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* MODAL 2: SEE ALL GALLERY ARCHIVE                                  */}
      {/* ================================================================= */}
      {archiveOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Complete portfolio archive"
          onClick={() => setArchiveOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-5xl bg-[#ebebed] text-[#111113] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#111113]/18">
              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  Complete Archive (@2026)
                </h3>
                <p className="text-xs text-[#55555c] mt-0.5">
                  Selected commercial, automotive, luxury, and portrait commissions
                </p>
              </div>
              <button
                type="button"
                onClick={() => setArchiveOpen(false)}
                className="rounded-full border border-[#111113]/45 px-4 py-1 text-xs font-medium hover:bg-[#111113] hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(
                [
                  "All",
                  "Automotive",
                  "Fashion",
                  "Luxury",
                  "Sport & Commercial",
                ] as const
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setArchiveFilter(cat)}
                  className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                    archiveFilter === cat
                      ? "bg-[#111113] text-white"
                      : "border border-[#111113]/35 text-[#111113] hover:bg-[#111113]/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredArchiveItems.map((item) => (
                <button
                  key={`archive-${item.id}`}
                  type="button"
                  onClick={() => {
                    setArchiveOpen(false);
                    setLightboxItem(item);
                  }}
                  className="text-left group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] w-full bg-neutral-300 overflow-hidden">
                    <SafeEditorialImage
                      src={item.src}
                      fallbackSrc={item.fallbackSrc}
                      alt={item.title}
                      sizes="250px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] font-medium">
                    <span>{item.client}</span>
                    <span className="text-[#55555c]">{item.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* MODAL 3: MORE ABOUT SASHA GREY                                    */}
      {/* ================================================================= */}
      {aboutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About Sasha Grey"
          onClick={() => setAboutModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl bg-[#ebebed] text-[#111113] p-6 sm:p-9 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#111113]/18 text-xs font-medium">
              <span>Studio Profile</span>
              <button
                type="button"
                onClick={() => setAboutModalOpen(false)}
                className="rounded-full border border-[#111113]/45 px-3.5 py-1 hover:bg-[#111113] hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-medium tracking-tight leading-tight">
              Visual storytelling across automotive, luxury goods, sport, and
              contemporary portraiture.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#343438]">
              Based in Chicago (CST) with regular production weeks in New York,
              Los Angeles, and Milan. Every commission pairs digital medium-format
              precision with analog 120mm film contact sheets for natural
              highlights and tactile color depth.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#111113]/15 pt-5 text-xs">
              <div>
                <div className="font-semibold text-[#111113] uppercase tracking-wider text-[10px]">
                  Selected Sectors
                </div>
                <p className="mt-1.5 text-[#4a4a50] leading-relaxed">
                  Fashion, Hospitality, Real Estate, Food &amp; Beverage,
                  Wellness, Motorsport, High Jewelry, and Independent Music.
                </p>
              </div>
              <div>
                <div className="font-semibold text-[#111113] uppercase tracking-wider text-[10px]">
                  Studio Workflow
                </div>
                <p className="mt-1.5 text-[#4a4a50] leading-relaxed">
                  Art direction decks, location scouting, tethered capture,
                  calibrated color grading, and archival delivery.
                </p>
              </div>
            </div>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setAboutModalOpen(false);
                  openContactTab();
                }}
                className="rounded-full bg-[#111113] text-white px-5 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Hire Sasha Grey
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
