import React from "react";
import Navbar from "@/components/Navbar";
import HorizontalScrollTemplates from "@/components/HorizontalScrollTemplates";
import Home2FloatingBadges from "@/components/Home2FloatingBadges";

export default function Home2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] relative overflow-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Hero Header */}
      <main className="flex-1 flex flex-col justify-between pt-8 sm:pt-14 pb-12">
        {/* Centered Heading & CTA */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-neutral-950 leading-[1.05]">
            Create a SaaS website <br />
            in days, not weeks.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-neutral-600 text-base sm:text-lg font-normal max-w-xl mx-auto">
            Build and ship your next SaaS or Startup website fast.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            {/* Get This Template with Lime Accent Shadow */}
            <div className="relative group">
              {/* Lime/Chartreuse Accent Layer behind */}
              <div className="absolute inset-0 bg-[#d8f936] rounded-xl translate-x-1.5 translate-y-1.5 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <a
                href="#template"
                className="inline-flex items-center gap-1.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#17171a] hover:bg-black text-white text-[15px] font-medium tracking-tight shadow-sm active:scale-[0.98] transition-all"
              >
                <span>Get This Template</span>
                <span className="text-sm">↗</span>
              </a>
            </div>

            {/* Explore Demos Button */}
            <a
              href="#demos"
              className="inline-flex items-center gap-1.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#eeedf4] hover:bg-[#e4e2ed] text-neutral-800 border border-neutral-300/80 text-[15px] font-medium tracking-tight active:scale-[0.98] transition-all"
            >
              <span>Explore Demos</span>
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>

        {/* Live Horizontally Scrolling Cards Showcase */}
        <div className="w-full mt-12 sm:mt-16">
          <HorizontalScrollTemplates />
        </div>
      </main>

      {/* Floating Action Badges on Bottom Right */}
      <Home2FloatingBadges />
    </div>
  );
}

