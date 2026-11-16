"use client";

/**
 * Developer & IT Template #3
 * John Doe Minimalist Portfolio Showcase with Moving Tech Stack Marquee,
 * My Tech Stack Grid, Professional Expertise, Work History, Projects, About Me & Footer.
 */

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

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
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
        <path d="M12 3C7 3 4 6 4 11c0 6 5 10 8 10s8-4 8-10c0-5-3-8-8-8z" />
        <path d="M12 8c-2 0-3 1.5-3 3.5s1 3.5 3 3.5 3-1.5 3-3.5S14 8 12 8z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#2496ed]" fill="currentColor">
        <path d="M22.5 10.5c-.3 0-1.8.1-2.5.7-.3-.7-1.2-1.2-2.1-1.2h-.4c-.3-1.3-1.3-2.3-2.8-2.6l-.7-.1-.3.6c-.6 1.4-.4 2.8.2 4H2.4c-.6 0-1 .4-1 1 0 3.4 2.3 6.3 5.5 7 1.1.2 2.3.2 3.4 0 3.2-.7 5.7-3.2 6.4-6.4 1.7-.1 3.3-.9 4.3-2.2.6-.9.7-1.8.5-2.8v-.1h-1zm-15-5.5h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2z" />
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
        <path d="M6.5 15.5c3.5 2.5 8.5 2.5 12 0 .4-.3.9.2.6.6-3.8 3.5-9.4 3.5-13.2 0-.4-.4.1-.9.6-.6zm12.3-1.2c-.3.4-1.5.3-2.1.2-.2 0-.3-.2-.1-.3.8-.6 2.1-.4 2.5.1.2.3-.1.5-.3.6z" />
        <path d="M10 8.5v3.2c0 .9-.5 1.3-1.3 1.3-.9 0-1.3-.5-1.3-1.3V8.5H5.8v3.5c0 1.9 1.1 2.9 2.9 2.9 1.8 0 2.9-1 2.9-2.9V8.5H10z" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "API",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e10098]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="4" r="2" />
        <circle cx="19" cy="8" r="2" />
        <circle cx="19" cy="16" r="2" />
        <circle cx="12" cy="20" r="2" />
        <circle cx="5" cy="16" r="2" />
        <circle cx="5" cy="8" r="2" />
        <path d="M12 4L19 8v8l-7 4-7-4V8z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#38bdf8]" fill="currentColor">
        <path d="M12 6c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.6-1.4.8.2 1.4.8 2 1.5 1.1 1.1 2.3 2.4 5 2.4 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.6 1.4-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.3-2.4-5-2.4zm-7.5 6c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.6-1.4.8.2 1.4.8 2 1.5 1.1 1.1 2.3 2.4 5 2.4 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.6 1.4-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.3-2.4-5-2.4z" />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "Cache",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#dc382d]" fill="currentColor">
        <path d="M2.5 7.5L12 3l9.5 4.5v9L12 21l-9.5-4.5v-9zm9.5 7.5l6-3-6-3-6 3 6 3z" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#326ce5]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7l4 3v5l-4 3-4-3v-5z" />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "VCS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#f05032]" fill="currentColor">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9 4.4l2.7 2.7c.6-.2 1.3 0 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3 0 1.8.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.5-.5-.7-1.3-.4-1.9l-2.4-2.4v5.3c.2.2.4.4.5.7.6.8.5 2-.4 2.6-.8.6-2 .5-2.6-.4-.6-.8-.5-2 .4-2.6.3-.2.6-.3 1-.3v-5.4c-.3 0-.7-.2-1-.4-.6-.5-.7-1.3-.4-1.9L7.5 5.9 2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" />
      </svg>
    ),
  },
  {
    name: "Linux",
    category: "OS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#fcc624]" fill="currentColor">
        <circle cx="12" cy="6" r="3" />
        <ellipse cx="12" cy="14" rx="5" ry="6" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="15" cy="20" r="1.5" />
      </svg>
    ),
  },
];

/* --- "My Tech Stack" 6 Pillars Dataset (Exact from Screenshot 1) --- */
interface TechStackPillar {
  title: string;
  description: string;
}

const TECH_STACK_PILLARS: TechStackPillar[] = [
  {
    title: "Full-Stack Development",
    description:
      "I build end-to-end web applications using modern frontend frameworks and robust backend technologies.",
  },
  {
    title: "API Development",
    description:
      "I develop RESTful and GraphQL APIs that enable seamless communication between systems.",
  },
  {
    title: "Database Management",
    description:
      "I design and optimize SQL and NoSQL databases for performance, reliability, and scalability.",
  },
  {
    title: "Software Testing",
    description:
      "I can write automated and manual tests to ensure software quality, reliability, and maintainability.",
  },
  {
    title: "Agile Development",
    description:
      "Collaborate in Agile teams to deliver high-quality software through iterative development and continuous improvement.",
  },
  {
    title: "UI/UX Collaboration",
    description:
      "Work closely with designers to transform concepts into intuitive and engaging user experiences.",
  },
];

/* --- "Professional Expertise" Badges (Exact from Screenshot 1) --- */
interface ExpertiseBadge {
  name: string;
  icon: React.ReactNode;
}

const EXPERTISE_ROW_1: ExpertiseBadge[] = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#61dafb]" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#ffa000]" fill="currentColor">
        <path d="M4.1 14.8l2.6-16.1c.1-.5.7-.7 1.1-.3l3.6 4.7-6.2 11.2c-.4.7-1.3.8-1.7.3l-.6-.8c-.3-.4-.2-1 .2-1.3l1-1.1v3.4zm15.8 0l-4.8-9.4c-.3-.5-1-.5-1.3 0l-3.2 6.1 6.8 11c.7.4 1.5-.2 1.5-1l1-6.7zM12 21.6l-8.6-4.8 6.5-11.7c.3-.5 1-.5 1.3 0l2 3.8 3.5-6.6c.3-.5 1-.5 1.3 0l6.4 12.2-12.4 7.1z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
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
    name: "Node.JS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#539e43]" fill="currentColor">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.3 7.2-4.3v-7L12 4.3z" />
      </svg>
    ),
  },
  {
    name: "TailwindCSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#38bdf8]" fill="currentColor">
        <path d="M12 6c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.6-1.4.8.2 1.4.8 2 1.5 1.1 1.1 2.3 2.4 5 2.4 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.6 1.4-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.3-2.4-5-2.4zm-7.5 6c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.6-1.4.8.2 1.4.8 2 1.5 1.1 1.1 2.3 2.4 5 2.4 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.6 1.4-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.3-2.4-5-2.4z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#f7df1e]" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#f7df1e" />
        <path
          d="M7 16.5c.7.4 1.5.7 2.3.7 1.3 0 2.1-.6 2.1-1.6 0-1-.7-1.4-1.8-1.9l-.6-.3c-1.8-.8-2.9-1.8-2.9-3.6 0-2 1.6-3.5 4.1-3.5 1 0 1.9.2 2.6.6l-.7 1.8c-.6-.3-1.3-.5-2-.5-1.2 0-1.8.6-1.8 1.4 0 .9.6 1.3 1.6 1.8l.6.3c2 .9 3.1 1.9 3.1 3.8 0 2.2-1.7 3.8-4.4 3.8-1.2 0-2.3-.3-3.1-.7l.9-2.3z"
          fill="#000"
        />
      </svg>
    ),
  },
];

const EXPERTISE_ROW_2: ExpertiseBadge[] = [
  {
    name: "GSAP",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#0ae448]" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#0ae448" />
        <path d="M8 12l3 3 5-6" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#f05032]" fill="currentColor">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9 4.4l2.7 2.7c.6-.2 1.3 0 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3 0 1.8.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.5-.5-.7-1.3-.4-1.9l-2.4-2.4v5.3c.2.2.4.4.5.7.6.8.5 2-.4 2.6-.8.6-2 .5-2.6-.4-.6-.8-.5-2 .4-2.6.3-.2.6-.3 1-.3v-5.4c-.3 0-.7-.2-1-.4-.6-.5-.7-1.3-.4-1.9L7.5 5.9 2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" />
      </svg>
    ),
  },
];

/* --- "Work History" Accordion Dataset (Exact from Screenshot 1) --- */
interface WorkHistoryItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

const WORK_HISTORY_ITEMS: WorkHistoryItem[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechNova Solutions",
    period: "2024 — Present",
    description:
      "Lead the development of scalable web applications and backend services. Design system architecture, build REST APIs, optimize application performance, and mentor junior engineers. Collaborate with cross-functional teams to deliver reliable, high-quality software.",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "CloudStack Technologies",
    period: "2022 — 2024",
    description:
      "Architected high-throughput microservices and optimized PostgreSQL database queries, reducing API response times by 38%. Spearheaded migration from legacy monolith services to containerized Docker workloads on AWS.",
  },
  {
    id: 3,
    role: "Junior Software Engineer",
    company: "ByteWorks Digital",
    period: "2021",
    description:
      "Implemented core user interfaces and responsive web features using Next.js and Tailwind CSS. Built CI/CD pipelines with GitHub Actions for automated linting, test suites, and staging deploys.",
  },
  {
    id: 4,
    role: "Web Designer",
    company: "Digital Agency Co.",
    period: "2020",
    description:
      "Created wireframes, high-fidelity prototypes, and component libraries in Figma for client projects. Coordinated directly with front-end engineers to ensure pixel-perfect design handoffs and accessible interfaces.",
  },
  {
    id: 5,
    role: "Software Engineering Intern",
    company: "Innovate Labs",
    period: "2018 — 2019",
    description:
      "Contributed to internal developer tooling, automated regression testing scripts, and documentation pipelines across distributed engineering squads.",
  },
];

/* --- "Projects" Accordion Dataset (Exact from Screenshot 2) --- */
interface ProjectItem {
  id: number;
  title: string;
  summary: string;
  tech: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS_ITEMS: ProjectItem[] = [
  {
    id: 1,
    title: "Enterprise CRM Platform",
    summary:
      "A multi-tenant cloud CRM platform designed for enterprise sales pipelines, real-time activity tracking, and automated revenue forecasting with automated lead scoring and team role access controls.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis"],
    metrics: "4.9/5 Rating · 120k+ Daily Active Users",
    liveUrl: "https://example.com/crm",
    githubUrl: "https://github.com/johndoe/enterprise-crm",
  },
  {
    id: 2,
    title: "Developer Toolkit",
    summary:
      "An open-source CLI suite and developer portal offering zero-config code scaffolding, automated API mock generation, and performance audits for modern engineering teams.",
    tech: ["TypeScript", "Rust", "Go", "GitHub Actions", "npm"],
    metrics: "18.5k GitHub Stars · 1.2M+ Monthly Downloads",
    liveUrl: "https://example.com/devkit",
    githubUrl: "https://github.com/johndoe/developer-toolkit",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    summary:
      "High-conversion headless storefront built with Next.js App Router, featuring instant faceted search, Stripe Elements checkout, and sub-100ms edge cache hits.",
    tech: ["Next.js", "TailwindCSS", "Stripe", "Redis", "Vercel"],
    metrics: "99.99% Uptime · +34% Conversion Uplift",
    liveUrl: "https://example.com/storefront",
    githubUrl: "https://github.com/johndoe/ecommerce-storefront",
  },
  {
    id: 4,
    title: "API Development",
    summary:
      "Distributed API gateway orchestrating 45+ internal microservices with rate limiting, JWT token verification, dynamic routing, and Prometheus metrics telemetry.",
    tech: ["Node.js", "Express", "GraphQL", "Redis", "Kubernetes"],
    metrics: "42k Req/sec · 14ms Average Latency",
    liveUrl: "https://example.com/api-gateway",
    githubUrl: "https://github.com/johndoe/api-gateway-engine",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    summary:
      "Real-time streaming analytics engine processing IoT telemetry and user events with customizable visual charting widgets and anomaly alerts.",
    tech: ["React", "D3.js", "TypeScript", "Apache Kafka", "ClickHouse"],
    metrics: "5M+ Events/min · Sub-second Query Times",
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/johndoe/realtime-analytics",
  },
  {
    id: 6,
    title: "Real-Time Chat Application",
    summary:
      "End-to-end encrypted collaborative chat system with presence detection, typing indicators, rich media attachments, and offline message queueing.",
    tech: ["WebSockets", "React", "Node.js", "Firebase", "TailwindCSS"],
    metrics: "250k Concurrent Conns · 10ms Latency",
    liveUrl: "https://example.com/chat-app",
    githubUrl: "https://github.com/johndoe/realtime-chat",
  },
  {
    id: 7,
    title: "Cloud Migration",
    summary:
      "Complete architectural overhaul transitioning legacy on-prem servers into scalable, fault-tolerant infrastructure with automated auto-scaling and zero-downtime cutover.",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "PostgreSQL"],
    metrics: "62% Cloud Cost Savings · Zero Downtime Cutover",
    liveUrl: "https://example.com/cloud-case-study",
    githubUrl: "https://github.com/johndoe/cloud-migration-iac",
  },
];

export default function DeveloperTemplateThreeShowcase() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Accordion state for Work History (Item 1 open by default as in screenshot)
  const [openWorkHistory, setOpenWorkHistory] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // Accordion state for Projects
  const [openProjects, setOpenProjects] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const toggleWorkHistory = (id: number) => {
    setOpenWorkHistory((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleProject = (id: number) => {
    setOpenProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDownloadCV = () => {
    try {
      const cvText = `=======================================================
JOHN DOE — SOFTWARE ENGINEER
Senior Full-Stack & Systems Engineer
Email: contact.johndoe@example.com | Portfolio: /developers-it/3
=======================================================

PROFESSIONAL SUMMARY:
Software Engineer specializing in scalable software, modern web
applications, and high-performance systems that deliver exceptional
user experiences.

CORE EXPERTISE:
- Languages: TypeScript, JavaScript, Python, Go, SQL, Rust
- Frontend: React, Next.js, Tailwind CSS, GSAP, State Architecture
- Backend & Cloud: Node.js, Express, PostgreSQL, Redis, Docker, AWS, Kubernetes
- Practices: Microservices, CI/CD, Agile/Scrum, Automated Testing

WORK HISTORY:
1. Senior Software Engineer — TechNova Solutions (2024 — Present)
   - Lead development of scalable web apps and backend services.
   - Design system architecture, build REST APIs, optimize latency.
2. Software Engineer — CloudStack Technologies (2022 — 2024)
   - Architected high-throughput microservices; reduced API response time by 38%.
3. Junior Software Engineer — ByteWorks Digital (2021)
   - Built core interfaces with Next.js & Tailwind; automated CI/CD pipelines.
4. Web Designer — Digital Agency Co. (2020)
   - Prototyped and built design systems for enterprise clients.
5. Software Engineering Intern — Innovate Labs (2018 — 2019)
   - Automated testing and internal developer tooling.

SELECTED PROJECTS:
- Enterprise CRM Platform (120k+ Daily Users)
- Developer Toolkit (18.5k GitHub Stars)
- E-Commerce Platform (99.99% Uptime)
- High-Performance API Gateway (42k Req/sec, 14ms latency)
=======================================================`;

      const blob = new Blob([cvText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "John-Doe-Software-Engineer-CV.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch {
      alert("Resume download started: John-Doe-Software-Engineer-CV.pdf");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* Embedded CSS Animations for Tech Stack Marquees */}
      <style jsx global>{`
        @keyframes techMarqueeLeft {
          0% {
            transform: translateX(0);
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
            transform: translateX(0);
          }
        }
        .animate-tech-left {
          display: flex;
          width: max-content;
          animation: techMarqueeLeft 28s linear infinite;
        }
        .animate-tech-right {
          display: flex;
          width: max-content;
          animation: techMarqueeRight 28s linear infinite;
        }
        .animate-tech-left:hover,
        .animate-tech-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* TOP HEADER BAR (Reference: Bold "John Doe" on left, "Download CV" on right) */}
      {/* ========================================================================= */}
      <header className="w-full border-b border-neutral-200/80 sticky top-0 z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/developers-it/3"
            className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 hover:opacity-80 transition-opacity select-none font-sans"
          >
            John Doe
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600">
            <a href="#tech-stack" className="hover:text-black transition-colors">
              Tech Stack
            </a>
            <a href="#expertise" className="hover:text-black transition-colors">
              Expertise
            </a>
            <a href="#work-history" className="hover:text-black transition-colors">
              Work History
            </a>
            <a href="#projects" className="hover:text-black transition-colors">
              Projects
            </a>
            <a href="#about-me" className="hover:text-black transition-colors">
              About Me
            </a>
          </nav>

          <button
            type="button"
            onClick={handleDownloadCV}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            {downloadSuccess ? "✓ Downloaded" : "Download CV"}
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* HERO SECTION (Reference: Centered Circle Portrait + Giant Headline + Bio)  */}
      {/* ========================================================================= */}
      <section id="hero" className="pt-16 sm:pt-24 pb-14 sm:pb-20 text-center px-6 sm:px-10 max-w-4xl mx-auto flex flex-col items-center">
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
      <section className="py-12 sm:py-16 border-y border-neutral-200/80 bg-neutral-50/70 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-6 text-center">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-600 shadow-xs mb-2">
            <span>Continuous Motion Stack</span>
          </div>
          <p className="text-xs text-neutral-500 font-mono">
            Hover over any technology badge to pause marquee
          </p>
        </div>

        {/* Motion Track Container with subtle fade masks */}
        <div className="space-y-3.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
      {/* SECTION 1: MY TECH STACK (Exact 6 Cards from User Screenshot 1)           */}
      {/* ========================================================================= */}
      <section id="tech-stack" className="py-20 sm:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 font-sans">
          My Tech Stack
        </h2>
        {/* Subtitle */}
        <p className="mt-3 mb-12 sm:mb-16 text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
          The technologies, frameworks, and tools I use to build scalable, high-quality software.
        </p>

        {/* 6 Cards Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {TECH_STACK_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-9 shadow-xs hover:shadow-md hover:border-neutral-400 transition-all duration-300 flex flex-col justify-start group"
            >
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-3 tracking-tight group-hover:text-black">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: PROFESSIONAL EXPERTISE (Exact Badges from User Screenshot 1)    */}
      {/* ========================================================================= */}
      <section id="expertise" className="py-20 sm:py-28 border-t border-neutral-200/80 bg-neutral-50/40 text-center px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 font-sans">
            Professional Expertise
          </h2>
          {/* Subtitle */}
          <p className="mt-3 mb-10 sm:mb-12 text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            Focused on building secure, high-performance applications with clean architecture and modern development practices.
          </p>

          {/* Badges Container: Row 1 & Row 2 Centered */}
          <div className="flex flex-col items-center gap-3.5 sm:gap-4 max-w-3xl mx-auto">
            {/* Row 1: React, Firebase, TypeScript, Node.JS, TailwindCSS, JavaScript */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {EXPERTISE_ROW_1.map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-xs hover:bg-neutral-800 hover:scale-105 transition-all cursor-default select-none"
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Row 2: GSAP, Git */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {EXPERTISE_ROW_2.map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-xs hover:bg-neutral-800 hover:scale-105 transition-all cursor-default select-none"
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WORK HISTORY (Exact Accordion from User Screenshot 1)          */}
      {/* ========================================================================= */}
      <section id="work-history" className="py-20 sm:py-28 border-t border-neutral-200/80 bg-white text-center px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 font-sans">
            Work History
          </h2>
          {/* Subtitle */}
          <p className="mt-3 mb-12 sm:mb-16 text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
            A record of my professional roles, key responsibilities, and contributions across software development projects.
          </p>

          {/* Accordion List */}
          <div className="divide-y divide-neutral-200 text-left border-y border-neutral-200">
            {WORK_HISTORY_ITEMS.map((item) => {
              const isOpen = !!openWorkHistory[item.id];
              return (
                <div key={item.id} className="py-6 sm:py-7">
                  <button
                    type="button"
                    onClick={() => toggleWorkHistory(item.id)}
                    className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs sm:text-sm text-neutral-500 font-mono">
                        {item.period}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-sm font-semibold text-neutral-600 transition-all ${
                          isOpen ? "bg-neutral-950 text-white border-neutral-950" : "group-hover:border-neutral-500"
                        }`}
                      >
                        {isOpen ? "×" : "+"}
                      </span>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  {isOpen && (
                    <div className="mt-4 pt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl pr-8 animate-fadeIn">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: PROJECTS (Exact Accordion List from User Screenshot 2)         */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 sm:py-28 border-t border-neutral-200/80 bg-neutral-50/30 text-center px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 font-sans">
            Projects
          </h2>
          {/* Subtitle */}
          <p className="mt-3 mb-12 sm:mb-16 text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
            A record of my professional roles, key responsibilities, and contributions across software development projects.
          </p>

          {/* Projects Accordion with "+" and "−" toggles */}
          <div className="divide-y divide-neutral-200 text-left border-y border-neutral-200 bg-white rounded-3xl p-6 sm:p-8 shadow-xs border">
            {PROJECTS_ITEMS.map((project) => {
              const isOpen = !!openProjects[project.id];
              return (
                <div key={project.id} className="py-5 sm:py-6 first:pt-2 last:pb-2">
                  <button
                    type="button"
                    onClick={() => toggleProject(project.id)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </span>

                    <span
                      className={`w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-sm font-semibold text-neutral-600 transition-all shrink-0 ${
                        isOpen ? "bg-neutral-950 text-white border-neutral-950" : "group-hover:border-neutral-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expandable Project Details */}
                  {isOpen && (
                    <div className="mt-4 pt-3 space-y-4 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="text-xs font-mono font-semibold text-neutral-900">
                        {project.metrics}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-neutral-950 hover:underline inline-flex items-center gap-1"
                          >
                            <span>Live Website</span>
                            <span>→</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-neutral-600 hover:text-black inline-flex items-center gap-1"
                          >
                            <span>Source Code</span>
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ABOUT ME (Exact 2-Column from User Screenshot 2)               */}
      {/* ========================================================================= */}
      <section id="about-me" className="py-20 sm:py-28 border-t border-neutral-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Centered Top Title & Subtitle */}
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 font-sans">
              About Me
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed">
              Passionate About Creating Modern Software That Powers Businesses and Great User Experiences
            </p>
          </div>

          {/* 2-Column Grid: Text on Left, Portrait Image on Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
            {/* Left Column: Meet John Doe Text & Download CV */}
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight mb-5 font-sans">
                Meet John Doe
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Hi, I&apos;m <strong className="font-semibold text-neutral-950">John Doe</strong>, a software engineer with a passion for building reliable, scalable, and user-focused digital products. With years of experience across frontend and backend development, I enjoy turning complex ideas into clean, efficient solutions that make a real impact.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-8">
                I specialize in modern web technologies, cloud-based applications, and performance optimization, always focusing on writing maintainable code and creating seamless user experiences. Whether I&apos;m developing a new product from the ground up or improving an existing platform, I believe great software comes from thoughtful design, collaboration, and continuous learning.
              </p>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="px-7 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <span>{downloadSuccess ? "✓ CV Downloaded" : "Download CV"}</span>
              </button>
            </div>

            {/* Right Column: Rectangular Portrait Photo of John Doe */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-neutral-950 ring-1 ring-neutral-200 group">
              <Image
                src="/images/developers/johndoe-about.png"
                alt="John Doe - About Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CALL TO ACTION BANNER                                          */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 max-w-5xl mx-auto px-6 sm:px-10 text-center">
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
      {/* SECTION 7: FULL FOOTER (User Explicit Request: "also add a footer")       */}
      {/* ========================================================================= */}
      <footer className="w-full border-t border-neutral-200 bg-neutral-950 text-neutral-300 pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 pb-14 border-b border-neutral-800">
            {/* Col 1: Wordmark & Bio */}
            <div className="md:col-span-2">
              <Link
                href="/developers-it/3"
                className="text-2xl sm:text-3xl font-black tracking-tight text-white hover:text-neutral-300 transition-colors select-none font-sans"
              >
                John Doe
              </Link>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
                Senior Software Engineer &amp; Full-Stack Architect. Specializing in scalable backend systems, robust APIs, and modern responsive web experiences.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3.5 mt-6 text-neutral-400">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-all cursor-pointer"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-all cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-all cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-all cursor-pointer"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="#hero" className="text-neutral-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#tech-stack" className="text-neutral-400 hover:text-white transition-colors">
                    My Tech Stack
                  </a>
                </li>
                <li>
                  <a href="#expertise" className="text-neutral-400 hover:text-white transition-colors">
                    Professional Expertise
                  </a>
                </li>
                <li>
                  <a href="#work-history" className="text-neutral-400 hover:text-white transition-colors">
                    Work History
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-neutral-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about-me" className="text-neutral-400 hover:text-white transition-colors">
                    About Me
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Info */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Inquiries
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mb-2">
                Open for senior contracts &amp; technical advisory roles.
              </p>
              <a
                href="mailto:contact.johndoe@example.com"
                className="text-xs sm:text-sm font-semibold text-white hover:underline block mb-4"
              >
                contact.johndoe@example.com
              </a>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available for Q1/Q2</span>
              </span>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
            <p>
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold"
              >
                <span>Back to Top</span>
                <span>↑</span>
              </button>
            </div>
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
