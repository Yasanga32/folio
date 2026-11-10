"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Is building a website free on Copyfolio?",
    answer:
      "Yes! You can sign up, choose a template, customize your layout, and build your entire portfolio for free. You only need to upgrade when you're ready to connect a custom domain or unlock unlimited projects.",
  },
  {
    question: "Does Copyfolio host my website for me?",
    answer:
      "Yes, every Copyfolio website comes with fast, reliable cloud hosting and SSL security included automatically—no external hosting setup or plugins required.",
  },
  {
    question: "How is Copyfolio better than Wix or Squarespace?",
    answer:
      "Copyfolio is purpose-built for writers, marketers, and creatives. Instead of overwhelming blank canvases, you get guided case-study layouts, writing prompts, and distraction-free styling so you can launch in minutes.",
  },
  {
    question: "How can I showcase my projects with Copyfolio?",
    answer:
      "You can present your work as full interactive case studies, downloadable PDFs, external article links, embedded videos, or clean visual galleries tailored to your discipline.",
  },
  {
    question: "What kind of content can I display on my Copyfolio site?",
    answer:
      "You can mix rich text, high-resolution images, video embeds, social posts, PDFs, testimonials, service cards, contact forms, and full blog posts.",
  },
  {
    question: "How much storage do I get?",
    answer:
      "Every account includes generous image and file storage for your portfolio pieces, and Pro plans remove file limits so you can upload high-resolution media freely.",
  },
  {
    question: "Who is Copyfolio for?",
    answer:
      "Copyfolio is designed for copywriters, social media managers, UGC creators, digital marketers, designers, and freelancers building a standout personal brand.",
  },
  {
    question: "What kind of sites can I build with Copyfolio?",
    answer:
      "You can build personal portfolios, freelancer websites, agency landing pages, link-in-bio hubs, and content-rich blogs all from one dashboard.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-6 pb-8">
      <div className="bg-[#fae5df] rounded-[28px] sm:rounded-[36px] px-7 py-12 sm:p-14 lg:px-16 lg:py-20 border border-[#f2d4cb]/70 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Serif Heading with Sketch Underline & CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-serif text-4xl sm:text-[46px] lg:text-[50px] tracking-tight leading-[1.08] font-normal">
              <span className="block text-[#9e4f28]">Got questions?</span>
              <span className="block text-[#141414] mt-1">
                We came{" "}
                <span className="relative inline-block">
                  prepared.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#141414] pointer-events-none"
                    viewBox="0 0 180 14"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 9.5C48 4.5 118 3.5 176 7.5"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 11.5C62 7.5 128 7 170 9.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                </span>
              </span>
            </h2>

            {/* Two Black Buttons */}
            <div className="mt-9 flex items-center gap-3 flex-wrap">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0e0e0e] hover:bg-neutral-800 active:scale-[0.98] text-white text-[13px] font-semibold tracking-tight transition-all"
              >
                Get started for free
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0e0e0e] hover:bg-neutral-800 active:scale-[0.98] text-white text-[13px] font-semibold tracking-tight transition-all"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Accordion FAQ List */}
          <div className="lg:col-span-7 w-full">
            <div className="divide-y divide-[#e4bfb5] border-b border-[#e4bfb5]">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.question} className="py-4 sm:py-4.5">
                    <button
                      type="button"
                      onClick={() => toggleItem(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    >
                      <span className="text-[15px] sm:text-base font-medium text-[#181818] group-hover:text-[#9e4f28] transition-colors">
                        {item.question}
                      </span>
                      <svg
                        className={`w-4 h-4 text-neutral-800 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    </button>

                    {/* Expandable Answer */}
                    <div
                      className={`grid transition-all duration-200 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2.5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-neutral-700 leading-relaxed pr-8">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

