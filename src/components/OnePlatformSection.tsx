"use client";

import React from "react";

export default function OnePlatformSection() {
  const oldSubscriptions = [
    {
      title: "Portfolio website builder",
      price: "$16/month",
      icon: (
        <svg
          className="w-4 h-4 text-neutral-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      title: "Client gallery tool",
      price: "$10/month",
      icon: (
        <svg
          className="w-4 h-4 text-neutral-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      ),
    },
    {
      title: "Online Store",
      price: "+ commission",
      icon: (
        <svg
          className="w-4 h-4 text-neutral-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
  ];

  const pixpaFeatures = [
    {
      name: "Portfolio website",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      name: "Client Galleries",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <circle cx="9" cy="11" r="1.5" />
          <path d="M4 17l4-4 4 4 4-5 4 4" />
        </svg>
      ),
    },
    {
      name: "Store",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      name: "Blog",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Marketing",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      name: "SEO",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M9.5 13l1.5-4 1.5 4M10 12h2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading & Value Proposition */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Overline */}
          <span className="text-[12px] sm:text-[13px] font-semibold text-neutral-500 uppercase tracking-[0.16em] mb-3">
            The Case For One Platform
          </span>

          {/* Headline with Serif Italic + Sans Bold */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-neutral-950 tracking-tight leading-[1.08] mb-6">
            <span className="font-serif italic font-normal">One platform</span>{" "}
            instead of <br />
            three subscriptions.
          </h2>

          {/* Paragraph 1 */}
          <p className="text-neutral-600 text-sm sm:text-[15px] font-normal leading-relaxed mb-4">
            Most photographers run a portfolio website builder, a separate client
            gallery tool and an online store that takes commission. Pixpa runs the
            portfolio, the galleries and the store in one platform at one price.
            No plugins. No commissions. No second logins.
          </p>

          {/* Paragraph 2 */}
          <p className="text-neutral-600 text-sm sm:text-[15px] font-normal leading-relaxed mb-8">
            The monthly cost is the visible part. The bigger tax is three logins,
            three places your images live, and a print sale that lands in a
            different dashboard from the rest of your orders. On Pixpa the
            portfolio website, the client galleries and the store are one product,
            so a print bought from a gallery and a print bought from the portfolio
            arrive in the same order list.
          </p>

          {/* CTA & Subtext */}
          <div className="flex flex-col items-start">
            <a
              href="#trial"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#18181b] hover:bg-black active:scale-[0.98] text-white text-[15px] font-medium tracking-tight shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Start Your Free Trial</span>
              <span className="text-base leading-none">→</span>
            </a>
            <span className="text-xs text-neutral-400 mt-2.5 font-normal tracking-tight">
              15 days · No card required
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Old Way vs Unified Platform */}
        <div className="lg:col-span-6 w-full flex flex-col items-center">
          {/* Top 3 Strikethrough Subscriptions */}
          <div className="w-full max-w-md space-y-3">
            {oldSubscriptions.map((sub, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl px-5 py-3.5 shadow-2xs border border-neutral-200/80 flex items-center justify-between text-neutral-400 text-sm overflow-hidden select-none"
              >
                {/* Left Info */}
                <div className="flex items-center gap-2.5 z-10">
                  {sub.icon}
                  <span className="font-medium text-neutral-500">{sub.title}</span>
                </div>

                {/* Right Price */}
                <div className="z-10 font-medium text-neutral-400">
                  {sub.price}
                </div>

                {/* Strikethrough Line running across */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[1px] bg-neutral-300 z-20 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Central Down Arrow */}
          <div className="my-4">
            <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-neutral-200/80 flex items-center justify-center text-neutral-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.25"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>

          {/* Unified Platform Card */}
          <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-neutral-200/50 border border-neutral-200/80">
            {/* Header */}
            <h3 className="text-center text-base sm:text-[17px] font-bold text-neutral-900 mb-6">
              Pixpa : One platform. One price.
            </h3>

            {/* 6 Feature Blocks (2 rows of 3) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {pixpaFeatures.map((feat, index) => (
                <div
                  key={index}
                  className="bg-[#eeedf7] hover:bg-[#e4e2f5] rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center gap-2 transition-all cursor-pointer aspect-[4/3] group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-neutral-800 leading-tight">
                    {feat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

