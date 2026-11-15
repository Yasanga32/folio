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

/* --- News and Insight Dataset (Matching Reference Image 3) --- */
const NEWS_ITEMS = [
  {
    id: "design-to-freelancing",
    title: "Find all everything from design to freelancing",
    image: "/images/developers/news-pastel-cube.jpg",
    alt: "Pastel cube 3D render representing design to freelancing",
  },
  {
    id: "freelancer-to-agency",
    title: "Webflow freelancer to agency owner path",
    image: "/images/developers/news-sneakers.jpg",
    alt: "Sneaker puddle water splash representing career journey",
  },
  {
    id: "design-trends",
    title: "Design trends you should follow for next project",
    image: "/images/developers/news-camera-parts.jpg",
    alt: "Disassembled vintage SLR camera parts knolling flatlay",
  },
];

/* --- Frequently Asked Questions Dataset (Matching Reference Image 3) --- */
interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "There are many types of services we offer, ranging from design and development to marketing and consulting, but each project is tailored individually, ensuring a unique solution that fits your needs perfectly.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines typically range from 2 to 6 weeks depending on project scope, complexity, and revisions required. Clear milestones and weekly check-ins keep everything on schedule.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed project-based pricing and monthly retainer options. Each quote is tailored to the project deliverables, timeline, and value created for your business.",
  },
  {
    question: "Do you offer post-project support?",
    answer:
      "Yes, we provide 30 days of complimentary post-launch support and bug fixes, along with optional ongoing maintenance and optimization packages.",
  },
];

/* --- Experience Dataset (Matching Reference Image media_1794762684143_ef53a6da.jpg) --- */
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  badge: "product" | "ux" | "lead" | "senior" | "uiux";
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Product Designer",
    company: "hyperfolio.framer.website",
    period: "2023 - Present",
    badge: "product",
  },
  {
    role: "UX Designer",
    company: "codot.framer.website",
    period: "2019 - 2023",
    badge: "ux",
  },
  {
    role: "Lead Product Designer",
    company: "pentaclay.com",
    period: "2016 - 2018",
    badge: "lead",
  },
  {
    role: "Senior Product Designer",
    company: "greenspire.framer.website",
    period: "2015 - 2016",
    badge: "senior",
  },
  {
    role: "UI/UX Designer",
    company: "kalry.framer.website",
    period: "2014 - 2015",
    badge: "uiux",
  },
];

/* --- Awards Dataset (Matching Reference Image media_1794762684143_ef53a6da.jpg) --- */
interface AwardItem {
  platform: string;
  title: string;
  year: string;
}

const AWARDS_ITEMS: AwardItem[] = [
  {
    platform: "Dribbble",
    title: "Elegant pixels for refined web artistry",
    year: "2016",
  },
  {
    platform: "Awwwards",
    title: "Digital dreamscapes for immersive experiences",
    year: "2019",
  },
  {
    platform: "Behance",
    title: "Innovative interfaces for modern applications",
    year: "2022",
  },
];

function ExperienceBadgeIcon({ badge }: { badge: ExperienceItem["badge"] }) {
  if (badge === "product") {
    return (
      <div className="w-8 h-8 rounded-full bg-rose-500/15 text-rose-500 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      </div>
    );
  }
  if (badge === "ux") {
    return (
      <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-500 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 8h8v8H8z" />
        </svg>
      </div>
    );
  }
  if (badge === "lead") {
    return (
      <div className="w-8 h-8 rounded-full bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <circle cx="8" cy="8" r="3.5" />
          <circle cx="16" cy="8" r="3.5" />
          <circle cx="8" cy="16" r="3.5" />
          <circle cx="16" cy="16" r="3.5" />
        </svg>
      </div>
    );
  }
  if (badge === "senior") {
    return (
      <div className="w-8 h-8 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="12" r="4.5" />
          <circle cx="16" cy="12" r="4.5" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-lg bg-red-600/15 text-red-400 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <polygon points="12 2 22 12 12 22 2 12" />
      </svg>
    </div>
  );
}

const BRAND_LOGOS = [
  {
    name: "Grid",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    name: "Asterisk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
      </svg>
    ),
  },
  {
    name: "Arch",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M4 21V10a8 8 0 0 1 16 0v11" />
        <path d="M8 21v-7a4 4 0 0 1 8 0v7" />
      </svg>
    ),
  },
  {
    name: "Infinity",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.261-8-12.356-8-5.096 0-5.096 8 0 8 5.095 0 7.261-8 12.356-8z" />
      </svg>
    ),
  },
  {
    name: "Rings",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
  {
    name: "Flower",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="12" cy="19" r="2.5" />
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Target",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
      </svg>
    ),
  },
  {
    name: "Clover",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <rect x="4" y="4" width="7" height="7" rx="3.5" />
        <rect x="13" y="4" width="7" height="7" rx="3.5" />
        <rect x="4" y="13" width="7" height="7" rx="3.5" />
        <rect x="13" y="13" width="7" height="7" rx="3.5" />
      </svg>
    ),
  },
  {
    name: "SlantedBars",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <polygon points="5 20 9 4 12 4 8 20" />
        <polygon points="12 20 16 4 19 4 15 20" />
      </svg>
    ),
  },
];

/* --- Blog Page Dataset (Matching Reference Image media_1794762714793_ac96528c.jpg) --- */
interface BlogPostItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const FEATURED_BLOG_POST = {
  date: "Aug 14, 2024",
  title: "14 common design misconceptions",
  excerpt:
    "Security weaknesses are critical in a network security system. Fuzzing is a common and dangerous vulnerability...",
  image:
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80",
  alt: "Yellow and blue pencils flatlay on yellow and cyan background",
};

const BLOG_GRID_POSTS: BlogPostItem[] = [
  {
    id: "freelance-agency",
    title: "How to move from freelance design agency",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    alt: "Cyclist speeding through modern city streets with motion blur",
  },
  {
    id: "web-designer-truths",
    title: "10 things nobody told you a web designer",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    alt: "Minimalist audio synthesizer rotary dial and slider knob",
  },
  {
    id: "design-blogs-reading",
    title: "5 web design blogs you should be reading",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    alt: "Sleek matte black product design with red indicator light",
  },
  {
    id: "creativity-efficiency",
    title: "Balancing design creativity with efficiency",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    alt: "Two designers working together at studio desks with moodboard",
  },
  {
    id: "design-freelancing",
    title: "Find all everything from design to freelancing",
    image: "/images/developers/news-pastel-cube.jpg",
    alt: "Pastel 3D cube render representing design to freelancing",
  },
  {
    id: "webflow-to-agency",
    title: "Webflow freelancer to agency owner path",
    image: "/images/developers/news-sneakers.jpg",
    alt: "Sneakers splashing in water puddle representing career path",
  },
];

export default function DeveloperTemplateOneShowcase() {
  const [activeTab, setActiveTab] = useState<"home" | "about" | "blog">("home");
  const [activeNav, setActiveNav] = useState<string>("home");
  const [expandedService, setExpandedService] = useState<string>("creative-design");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [moreBlogsLoaded, setMoreBlogsLoaded] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#about") {
        setActiveTab("about");
        setActiveNav("about");
      } else if (window.location.hash === "#blog") {
        setActiveTab("blog");
        setActiveNav("blog");
      } else if (window.location.hash === "#home" || window.location.hash === "") {
        setActiveTab("home");
        setActiveNav("home");
      }
    };

    window.addEventListener("hashchange", onHash);
    const timer = setTimeout(onHash, 0);

    return () => {
      window.removeEventListener("hashchange", onHash);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (activeTab !== "home") return;

    const handleScroll = () => {
      const sectionIds = ["home", "about", "services", "blog", "faq", "contact"];
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
  }, [activeTab]);

  const handleNavAction = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === "about") {
      setActiveTab("about");
      setActiveNav("about");
      window.history.pushState(null, "", "#about");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (target === "blog") {
      setActiveTab("blog");
      setActiveNav("blog");
      window.history.pushState(null, "", "#blog");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (target === "home") {
      setActiveTab("home");
      setActiveNav("home");
      window.history.pushState(null, "", "#home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // target is "services" (Portfolio)
    if (activeTab !== "home") {
      setActiveTab("home");
      window.history.pushState(null, "", `#${target}`);
      setTimeout(() => {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: "smooth" });
        setActiveNav(target);
      }, 60);
    } else {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${target}`);
        setActiveNav(target);
      }
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    handleNavAction(e, id);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("hello.andro@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
      {/* ROUTED VIEW: HOME VS ABOUT (Matches Reference Image media_1794762684143)    */}
      {/* ========================================================================= */}
      {activeTab === "about" ? (
        /* ========================================================================= */
        /* ABOUT PAGE VIEW                                                           */
        /* ========================================================================= */
        <div className="bg-white text-neutral-950 min-h-screen selection:bg-[#c8f53c] selection:text-black animate-fadeIn">
          {/* Top Floating Andro Pill Navigation Bar on Clean Canvas */}
          <header className="relative z-30 pt-6 px-6 sm:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              {/* Left: Brand Monogram Logo */}
              <button
                type="button"
                onClick={(e) => handleNavAction(e, "home")}
                className="flex items-center gap-2 group transition-transform active:scale-95 cursor-pointer"
                aria-label="Andro Home"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-neutral-950 flex items-center justify-center p-2 shadow-sm">
                  <AndroLogo className="w-6 h-6 text-[#c8f53c]" />
                </div>
              </button>

              {/* Center: Rounded Pill Navigation Bar */}
              <nav className="flex items-center bg-[#151518] border border-neutral-800 p-1 sm:p-1.5 rounded-full shadow-2xl">
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "home")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all text-neutral-300 hover:text-white cursor-pointer active:scale-95"
                >
                  Home
                </button>
                <button
                  type="button"
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-[#c8f53c] text-black shadow-md scale-102 cursor-default"
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "services")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all text-neutral-300 hover:text-white cursor-pointer active:scale-95"
                >
                  Portfolio
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "blog")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all text-neutral-300 hover:text-white cursor-pointer active:scale-95"
                >
                  Blog
                </button>
              </nav>

              {/* Right: "Let's talk" Outline Pill Button */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="px-4 sm:px-5 py-2 rounded-full border border-neutral-300 hover:border-neutral-500 bg-white text-xs sm:text-sm text-neutral-900 font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
                >
                  <svg
                    className="w-3.5 h-3.5 text-neutral-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Let&apos;s talk</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main About Page Body */}
          <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 sm:pt-20 pb-16">
            {/* 2-Column Hero: Photo on Left, Bio & Metrics on Right */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Portrait Photo with rounded corners */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl bg-neutral-950">
                  <Image
                    src="/images/developers/andro-portrait.jpg"
                    alt="Andro - Web designer and developer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Bio Headline, Subtitle, Metrics & Social buttons */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-neutral-950 tracking-tight leading-[1.14]">
                  I&apos;m a web designer and developer in Manchester.
                </h1>

                <p className="mt-5 text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl">
                  With over a decade of industry experience, I specialize in creating visually
                  appealing and functional websites.
                </p>

                {/* Metrics with Underline Dividers */}
                <div className="mt-8 space-y-5 max-w-lg">
                  <div className="border-b border-neutral-200 pb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                      75+
                    </div>
                    <div className="text-xs text-neutral-500 font-medium tracking-tight mt-1">
                      Projects done
                    </div>
                  </div>

                  <div className="border-b border-neutral-200 pb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                      100%
                    </div>
                    <div className="text-xs text-neutral-500 font-medium tracking-tight mt-1">
                      Positive reviews
                    </div>
                  </div>
                </div>

                {/* Action Buttons Row: Hire Me + 3 Social Icons */}
                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(true)}
                    className="px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-sm cursor-pointer"
                  >
                    Hire Me
                  </button>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full border border-neutral-300 text-neutral-700 flex items-center justify-center hover:border-neutral-500 hover:text-black transition-colors font-bold text-xs"
                  >
                    f
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-full border border-neutral-300 text-neutral-700 flex items-center justify-center hover:border-neutral-500 hover:text-black transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full border border-neutral-300 text-neutral-700 flex items-center justify-center hover:border-neutral-500 hover:text-black transition-colors font-bold text-xs"
                  >
                    in
                  </a>
                </div>
              </div>
            </section>

            {/* Brand / Client Logos Row (Matches Reference Image) */}
            <section className="py-14 sm:py-20 border-y border-neutral-200/80 my-16 sm:my-20">
              <div className="flex items-center justify-between gap-6 sm:gap-10 overflow-x-auto text-neutral-400 py-2">
                {BRAND_LOGOS.map((brand, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 hover:text-neutral-900 transition-colors flex items-center justify-center p-2"
                    title={brand.name}
                  >
                    {brand.icon}
                  </div>
                ))}
              </div>
            </section>

            {/* 10 Years of Experience Dark Card (Matches Reference Image) */}
            <section className="rounded-[36px] sm:rounded-[48px] bg-[#0c0c0e] text-white p-8 sm:p-14 lg:p-16 shadow-2xl mb-20 sm:mb-28">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-center tracking-tight text-white mb-10 sm:mb-14">
                10 years of experience
              </h2>

              <div className="space-y-3.5 max-w-4xl mx-auto">
                {EXPERIENCE_ITEMS.map((exp, idx) => (
                  <div
                    key={idx}
                    className="rounded-full border border-neutral-800/80 bg-[#121216]/70 hover:border-neutral-700 hover:bg-[#16161b] px-6 sm:px-8 py-4 sm:py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                  >
                    {/* Left: Icon & Role */}
                    <div className="flex items-center gap-3.5">
                      <ExperienceBadgeIcon badge={exp.badge} />
                      <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                        {exp.role}
                      </span>
                    </div>

                    {/* Middle: Domain in lime/yellow */}
                    <span className="text-xs sm:text-sm font-mono text-[#c8f53c] font-medium tracking-tight">
                      {exp.company}
                    </span>

                    {/* Right: Year Range */}
                    <span className="text-xs sm:text-sm font-mono text-neutral-400">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards Section (Matches Reference Image) */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-20 sm:pb-28">
              {/* Left: Silver Trophy Cup Photo */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl bg-neutral-950">
                  <Image
                    src="/images/developers/awards-trophy.jpg"
                    alt="Luxury silver trophy design award"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right: Awards Info & List */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-950 tracking-tight">
                  Awards
                </h2>

                <p className="mt-4 text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xl">
                  Recognized for excellence in digital design, responsive engineering, and
                  human-centric user interface craftsmanship across global platforms.
                </p>

                <div className="mt-8 space-y-4 max-w-xl">
                  {AWARDS_ITEMS.map((award, idx) => (
                    <div
                      key={idx}
                      className="border-b border-neutral-200/90 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                    >
                      <div>
                        <span className="font-bold text-sm sm:text-base text-neutral-950 block">
                          {award.platform}
                        </span>
                        <span className="text-xs sm:text-sm text-neutral-500 block mt-0.5">
                          {award.title}
                        </span>
                      </div>
                      <span className="font-mono text-xs sm:text-sm text-neutral-500 shrink-0">
                        {award.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action Banner on About page */}
            <div className="pb-16 sm:pb-20">
              <div className="rounded-[36px] sm:rounded-[48px] bg-[#0c0c0e] text-white p-12 sm:p-20 lg:p-24 text-center relative overflow-hidden shadow-2xl flex flex-col items-center">
                <span className="text-xs sm:text-sm font-semibold text-[#c8f53c] tracking-tight block mb-4 sm:mb-6">
                  Let&apos;s turn your ideas into a stunning reality.
                </span>

                <a
                  href="mailto:hello.andro@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyEmail();
                  }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black text-white hover:text-[#c8f53c] tracking-tight transition-colors cursor-pointer block leading-tight max-w-5xl"
                >
                  hello.andro@gmail.com
                </a>

                <p className="mt-3 text-xs text-neutral-400 font-mono">
                  {copiedEmail ? "✓ Email copied to clipboard!" : "Click to copy email address"}
                </p>

                {/* Bottom Nav pill inside banner */}
                <div className="mt-12 sm:mt-16 flex justify-center">
                  <nav
                    aria-label="About Page CTA Navigation"
                    className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#18181d] border border-neutral-800"
                  >
                    <button
                      type="button"
                      onClick={(e) => handleNavAction(e, "home")}
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      Home
                    </button>
                    <button
                      type="button"
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold bg-[#c8f53c] text-black transition-all cursor-default"
                    >
                      About
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleNavAction(e, "services")}
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      Portfolio
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleNavAction(e, "blog")}
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      Blog
                    </button>
                  </nav>
                </div>
              </div>
            </div>

            {/* Footer on About page */}
            <footer className="w-full py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200/80 text-xs text-neutral-500 font-medium">
              <div>
                <span>Theme created by </span>
                <strong className="text-neutral-950 font-semibold">Pentaclay</strong>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-semibold text-neutral-800 hover:text-neutral-950 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Back to Top</span>
                  <span>&uarr;</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website or Dribbble"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
                <a
                  href="https://producthunt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Product Hunt"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M11 8h2.8c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2H11V8zm-2-2v12h2v-4h2.8c2.3 0 4.2-1.9 4.2-4.2S16.1 6 13.8 6H9z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors font-bold text-[11px]"
                >
                  in
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors font-bold text-[12px]"
                >
                  f
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </footer>
          </main>
        </div>
      ) : activeTab === "blog" ? (
        /* ========================================================================= */
        /* BLOG PAGE VIEW (Matches Reference Image media_1794762714793_ac96528c.jpg)  */
        /* ========================================================================= */
        <div className="bg-white text-neutral-950 min-h-screen selection:bg-[#c8f53c] selection:text-black animate-fadeIn">
          {/* Top Floating Andro Pill Navigation Bar on Clean Canvas */}
          <header className="relative z-30 pt-6 px-6 sm:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              {/* Left: Brand Monogram Logo */}
              <button
                type="button"
                onClick={(e) => handleNavAction(e, "home")}
                className="flex items-center gap-2 group transition-transform active:scale-95 cursor-pointer"
                aria-label="Andro Home"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-neutral-950 flex items-center justify-center p-2 shadow-sm">
                  <AndroLogo className="w-6 h-6 text-[#c8f53c]" />
                </div>
              </button>

              {/* Center: Rounded Pill Navigation Bar */}
              <nav className="flex items-center bg-[#151518] border border-neutral-800 p-1 sm:p-1.5 rounded-full shadow-2xl">
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "home")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all text-neutral-300 hover:text-white cursor-pointer active:scale-95"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "about")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all text-neutral-300 hover:text-white cursor-pointer active:scale-95"
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "services")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all text-neutral-300 hover:text-white cursor-pointer active:scale-95"
                >
                  Portfolio
                </button>
                <button
                  type="button"
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-[#c8f53c] text-black shadow-md scale-102 cursor-default"
                >
                  Blog
                </button>
              </nav>

              {/* Right: "Let's talk" Outline Pill Button */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="px-4 sm:px-5 py-2 rounded-full border border-neutral-300 hover:border-neutral-500 bg-white text-xs sm:text-sm text-neutral-900 font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
                >
                  <svg
                    className="w-3.5 h-3.5 text-neutral-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Let&apos;s talk</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Blog Body */}
          <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 sm:pt-14 pb-16">
            {/* Centered Large Header */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-neutral-950 text-center tracking-tight mb-8 sm:mb-12">
              News And Insight
            </h1>

            {/* Featured Wide Banner Card (Matches Top of Reference Screenshot) */}
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-xl mb-8 sm:mb-10 group cursor-pointer bg-neutral-100">
              <Image
                src={FEATURED_BLOG_POST.image}
                alt={FEATURED_BLOG_POST.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1150px"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Floating White Card on the Left */}
              <div className="absolute top-5 left-5 bottom-5 sm:top-9 sm:left-9 sm:bottom-9 w-full max-w-[290px] sm:max-w-[380px] bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10">
                <div>
                  <span className="text-[11px] sm:text-xs font-mono text-neutral-400 font-medium block mb-2 sm:mb-3">
                    {FEATURED_BLOG_POST.date}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-neutral-950 tracking-tight leading-snug">
                    {FEATURED_BLOG_POST.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {FEATURED_BLOG_POST.excerpt}
                  </p>
                </div>

                <div className="pt-4">
                  <span className="text-xs font-bold text-neutral-950 underline underline-offset-4 inline-flex items-center gap-1 group-hover:text-neutral-600 transition-colors">
                    Read more ↗
                  </span>
                </div>
              </div>
            </div>

            {/* 6-Card Grid of Blog Posts (Matches Reference Image) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {BLOG_GRID_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="relative h-[320px] sm:h-[380px] lg:h-[400px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-md group cursor-pointer bg-neutral-900"
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Bottom Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Title Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                    <h3 className="text-white font-bold text-lg sm:text-xl lg:text-[22px] leading-snug tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}

              {/* Extra 3 Cards when "Load More" is clicked */}
              {moreBlogsLoaded && (
                <>
                  <div className="relative h-[320px] sm:h-[380px] lg:h-[400px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-md group cursor-pointer bg-neutral-900 animate-fadeIn">
                    <Image
                      src="/images/developers/news-camera-parts.jpg"
                      alt="Disassembled vintage SLR camera parts knolling flatlay"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                      <h3 className="text-white font-bold text-lg sm:text-xl lg:text-[22px] leading-snug tracking-tight">
                        Design trends you should follow for next project
                      </h3>
                    </div>
                  </div>

                  <div className="relative h-[320px] sm:h-[380px] lg:h-[400px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-md group cursor-pointer bg-neutral-900 animate-fadeIn">
                    <Image
                      src="/images/developers/service-creative-design.jpg"
                      alt="Creative design flatlay branding sketches"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                      <h3 className="text-white font-bold text-lg sm:text-xl lg:text-[22px] leading-snug tracking-tight">
                        Modern design systems for fast-shipping products
                      </h3>
                    </div>
                  </div>

                  <div className="relative h-[320px] sm:h-[380px] lg:h-[400px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-md group cursor-pointer bg-neutral-900 animate-fadeIn">
                    <Image
                      src="/images/developers/service-web-dev.jpg"
                      alt="Developer workstation coding Next.js application"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                      <h3 className="text-white font-bold text-lg sm:text-xl lg:text-[22px] leading-snug tracking-tight">
                        Scaling modern web apps to millions of users
                      </h3>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Load More Button */}
            <div className="mt-12 sm:mt-16 flex justify-center">
              <button
                type="button"
                onClick={() => setMoreBlogsLoaded((prev) => !prev)}
                className="px-6 py-2.5 rounded-full bg-[#c8f53c] hover:bg-[#d8fb54] text-black font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                {moreBlogsLoaded ? "Show Less" : "Load More"}
              </button>
            </div>

            {/* Call to Action Banner on Blog Page */}
            <div className="pt-16 sm:pt-24 pb-16 sm:pb-20">
              <div className="rounded-[36px] sm:rounded-[48px] bg-[#0c0c0e] text-white p-12 sm:p-20 lg:p-24 text-center relative overflow-hidden shadow-2xl flex flex-col items-center">
                <span className="text-xs sm:text-sm font-semibold text-[#c8f53c] tracking-tight block mb-4 sm:mb-6">
                  Let&apos;s turn your ideas into a stunning reality.
                </span>

                <a
                  href="mailto:hello.andro@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyEmail();
                  }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black text-white hover:text-[#c8f53c] tracking-tight transition-colors cursor-pointer block leading-tight max-w-5xl"
                >
                  hello.andro@gmail.com
                </a>

                <p className="mt-3 text-xs text-neutral-400 font-mono">
                  {copiedEmail ? "✓ Email copied to clipboard!" : "Click to copy email address"}
                </p>

                {/* Bottom Nav inside CTA banner with Blog active */}
                <div className="mt-12 sm:mt-16 flex justify-center">
                  <nav
                    aria-label="Blog Page CTA Navigation"
                    className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#18181d] border border-neutral-800"
                  >
                    <button
                      type="button"
                      onClick={(e) => handleNavAction(e, "home")}
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      Home
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleNavAction(e, "about")}
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      About
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleNavAction(e, "services")}
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      Portfolio
                    </button>
                    <button
                      type="button"
                      className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold bg-[#c8f53c] text-black transition-all cursor-default"
                    >
                      Blog
                    </button>
                  </nav>
                </div>
              </div>
            </div>

            {/* Footer on Blog Page */}
            <footer className="w-full py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200/80 text-xs text-neutral-500 font-medium">
              <div>
                <span>Theme created by </span>
                <strong className="text-neutral-950 font-semibold">Pentaclay</strong>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-semibold text-neutral-800 hover:text-neutral-950 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Back to Top</span>
                  <span>&uarr;</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website or Dribbble"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
                <a
                  href="https://producthunt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Product Hunt"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M11 8h2.8c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2H11V8zm-2-2v12h2v-4h2.8c2.3 0 4.2-1.9 4.2-4.2S16.1 6 13.8 6H9z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors font-bold text-[11px]"
                >
                  in
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors font-bold text-[12px]"
                >
                  f
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </footer>
          </main>
        </div>
      ) : (
        /* ========================================================================= */
        /* HOME PAGE VIEW                                                            */
        /* ========================================================================= */
        <div className="animate-fadeIn">
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
              onClick={(e) => handleNavAction(e, "home")}
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
                { label: "Portfolio", id: "services" },
                { label: "Blog", id: "blog" },
              ].map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => handleNavAction(e, item.id)}
                    className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#c8f53c] text-black shadow-md scale-102"
                        : "bg-white/95 text-neutral-900 hover:bg-white active:scale-95"
                    }`}
                  >
                    {item.label}
                  </button>
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
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
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

        {/* ========================================================================= */}
        {/* NEWS AND INSIGHT SECTION (Matches Reference Image 3 Top)                   */}
        {/* ========================================================================= */}
        <section id="blog" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32 scroll-mt-20">
          <div className="flex items-center justify-between gap-4 mb-10 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-neutral-950">
              News and Insight
            </h3>
            <button
              type="button"
              className="px-5 py-2 rounded-full border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-900 hover:bg-neutral-100 hover:border-neutral-400 transition-all cursor-pointer active:scale-95"
            >
              View all post
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {NEWS_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative h-[340px] sm:h-[400px] lg:h-[440px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Gradient scrim for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Card Title at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                  <h4 className="text-white font-bold text-lg sm:text-xl lg:text-[22px] leading-snug tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS SECTION (Matches Reference Image 3 Middle)      */}
        {/* ========================================================================= */}
        <section id="faq" className="max-w-4xl mx-auto px-6 sm:px-10 pb-24 sm:pb-32 scroll-mt-20">
          <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-950 text-center tracking-tight mb-12 sm:mb-16">
            Frequently asked Questions
          </h3>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-neutral-300 bg-white shadow-md"
                      : "border-neutral-200/90 bg-white hover:border-neutral-300 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((prev) => (prev === idx ? null : idx))}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-black tracking-tight pr-4">
                      {item.question}
                    </span>
                    <span className="text-xl sm:text-2xl font-light text-neutral-400 group-hover:text-neutral-700 shrink-0 w-6 text-center select-none transition-colors">
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-7 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl border-t border-neutral-100 pt-3.5 animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION BANNER (hello.andro@gmail.com)                              */}
        {/* ========================================================================= */}
        <div id="contact" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-20 sm:pb-28 scroll-mt-20">
          <div className="rounded-[36px] sm:rounded-[48px] bg-[#0c0c0e] text-white p-12 sm:p-20 lg:p-24 text-center relative overflow-hidden shadow-2xl flex flex-col items-center">
            {/* Subtitle in Neon Lime */}
            <span className="text-xs sm:text-sm font-semibold text-[#c8f53c] tracking-tight block mb-4 sm:mb-6">
              Let&apos;s turn your ideas into a stunning reality.
            </span>

            {/* Giant Email Link */}
            <a
              href="mailto:hello.andro@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                handleCopyEmail();
              }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black text-white hover:text-[#c8f53c] tracking-tight transition-colors cursor-pointer block leading-tight max-w-5xl"
            >
              hello.andro@gmail.com
            </a>

            <p className="mt-3 text-xs text-neutral-400 font-mono">
              {copiedEmail ? "✓ Email copied to clipboard!" : "Click to copy email address"}
            </p>

            {/* Bottom Nav pill inside banner (Matches Reference Image 3) */}
            <div className="mt-12 sm:mt-16 flex justify-center">
              <nav
                aria-label="Footer CTA Navigation"
                className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#18181d] border border-neutral-800"
              >
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "home")}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeNav === "home"
                      ? "bg-[#c8f53c] text-black"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "about")}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeNav === "about"
                      ? "bg-[#c8f53c] text-black font-semibold"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "services")}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeNav === "services"
                      ? "bg-[#c8f53c] text-black font-semibold"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  Portfolio
                </button>
                <button
                  type="button"
                  onClick={(e) => handleNavAction(e, "blog")}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeNav === "blog"
                      ? "bg-[#c8f53c] text-black font-semibold"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  Blog
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOOTER BAR (Matches Reference Image 3 Bottom)                              */}
        {/* ========================================================================= */}
        <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200/80 text-xs text-neutral-500 font-medium">
          <div>
            <span>Theme created by </span>
            <strong className="text-neutral-950 font-semibold">Pentaclay</strong>
          </div>

          <div>
            <button
              type="button"
              onClick={(e) => handleNavAction(e, "home")}
              className="font-semibold text-neutral-800 hover:text-neutral-950 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <span>&uarr;</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Globe / Website */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website or Dribbble"
              className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>

            {/* Product Hunt / Asterisk */}
            <a
              href="https://producthunt.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Product Hunt"
              className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M11 8h2.8c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2H11V8zm-2-2v12h2v-4h2.8c2.3 0 4.2-1.9 4.2-4.2S16.1 6 13.8 6H9z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors font-bold text-[11px]"
            >
              in
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors font-bold text-[12px]"
            >
              f
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:border-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )}

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
                <span>{copiedEmail ? "✓ Email Copied!" : "Copy Email (hello.andro@gmail.com)"}</span>
              </button>

              <a
                href="mailto:hello.andro@gmail.com"
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
