"use client";

import React from "react";
import Image from "next/image";

export default function HumanSupportSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
        {/* Left Headline */}
        <div>
          <span className="text-[12px] sm:text-[13px] font-semibold text-neutral-500 uppercase tracking-[0.16em] block mb-3">
            24/7 Live Support
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-neutral-950 tracking-tight leading-[1.08]">
            Real human support <br />
            <span className="font-serif italic font-normal">in minutes.</span>
          </h2>
        </div>

        {/* Right Description */}
        <p className="text-neutral-600 text-sm sm:text-[15px] font-normal leading-relaxed max-w-md lg:pb-1">
          Ask a question and a real person on the Pixpa team answers on live chat,
          usually in minutes, any time of day. No AI bots. No ticket queue. The
          same people who answer know the editor, the templates and how a
          portfolio behaves once it is live, and they have solved your issue
          before.
        </p>
      </div>

      {/* 2-Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 3 Stacked Action Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: Live Support */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-neutral-200/80 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3.5">
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
              Live Support
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mb-4">
              Live chat and email, 24/7. Reach a real person, usually within minutes.
            </p>
            <a
              href="#support"
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-neutral-900 hover:text-purple-600 transition-colors"
            >
              <span>Login & Get Support</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 2: Help Center */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-neutral-200/80 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
              Help Center
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mb-4">
              Step-by-step guides and tutorials in 20+ languages, whenever you want to self-serve.
            </p>
            <a
              href="#help"
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-neutral-900 hover:text-purple-600 transition-colors"
            >
              <span>Go to Help Center</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 3: Pixpa Website Setup Service */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-neutral-200/80 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3">
              <svg
                className="w-4 h-4 fill-none stroke-current"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
              Get Your Website Set Up
            </span>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
              Pixpa Website Setup Service
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mb-3">
              A Pixpa designer builds your portfolio website from your brief, images, and content. Review and publish.
            </p>
            {/* Price Row */}
            <div className="flex items-center gap-2 flex-wrap text-xs mb-3">
              <span className="line-through text-neutral-400">USD 399</span>
              <span className="font-bold text-neutral-900">USD 199</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                Limited Time Offer
              </span>
              <span className="text-[11px] text-neutral-400">(One-time fee)</span>
            </div>
            <a
              href="#setup"
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-neutral-900 hover:text-purple-600 transition-colors"
            >
              <span>Get your website setup now</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Live Chat Simulation & Capterra Review Card */}
        <div className="lg:col-span-7 bg-[#f8ece8] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between border border-rose-100/80 shadow-sm relative overflow-hidden">
          {/* Top Half: Live Chat Interaction Canvas */}
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-md border border-neutral-200/70 aspect-[16/11] flex flex-col justify-between p-4 sm:p-5">
            {/* Background Studio Photo of Customer */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Janelia"
                fill
                className="object-cover object-top opacity-85"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            </div>

            {/* Window Dots */}
            <div className="relative z-10 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-neutral-300" />
              <div className="w-2 h-2 rounded-full bg-neutral-300" />
              <div className="w-2 h-2 rounded-full bg-neutral-300" />
            </div>

            {/* Live Chat Bubbles */}
            <div className="relative z-10 space-y-3 pt-6 pb-2">
              {/* Message 1: Janelia (Customer) */}
              <div className="flex items-start gap-2 max-w-sm">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white shadow-sm flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Janelia Avatar"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-md rounded-2xl rounded-tl-xs px-3.5 py-2 shadow-md border border-neutral-100 text-xs text-neutral-800 font-medium">
                  Hello, I need help setting up a form on my website.
                </div>
              </div>

              {/* Message 2: Support Agent */}
              <div className="flex items-start justify-end gap-2 max-w-sm ml-auto">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl rounded-tr-xs px-3.5 py-2 shadow-md border border-neutral-100 text-xs text-neutral-800 font-medium text-left">
                  <div className="font-bold text-neutral-900 text-[11px] mb-0.5">
                    Hi Janelia!!
                  </div>
                  <div>
                    We are here to help you. Let me know which page you are working on?
                  </div>
                </div>
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white shadow-sm flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Support Agent"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Half: Capterra Verified Review */}
          <div className="pt-6 sm:pt-8">
            <div className="flex items-center justify-between">
              {/* 5 Stars */}
              <div className="text-neutral-900 text-xs sm:text-sm tracking-widest">
                ★★★★★
              </div>
              {/* Capterra Logo */}
              <div className="flex items-center gap-1 text-xs font-bold text-neutral-800">
                <span className="text-[#ff6a48]">✦</span> Capterra
              </div>
            </div>

            {/* Editorial Serif Quote */}
            <blockquote className="my-4 text-base sm:text-lg lg:text-xl font-serif text-neutral-900 leading-snug">
              &ldquo;Pixpa&apos;s live support chat is just that — it&apos;s a real
              person with real answers. I&apos;m not stuck in AI hell! I get a
              quick response, and the answers I need so I can get my work done.&rdquo;
            </blockquote>

            {/* Reviewer Meta */}
            <div className="flex items-center gap-3 pt-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Ravel"
                  fill
                  className="object-cover grayscale"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">Ravel</div>
                <div className="text-[10px] text-neutral-500">
                  Pixpa customer, 2+ years · Verified Capterra review
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

