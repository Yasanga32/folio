import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollingColumns from "@/components/ScrollingColumns";
import PortfolioEditorSection from "@/components/PortfolioEditorSection";
import TemplatesGridSection from "@/components/TemplatesGridSection";
import OnePlatformSection from "@/components/OnePlatformSection";
import WatchDemoSection from "@/components/WatchDemoSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import FiveReasonsSection from "@/components/FiveReasonsSection";
import ShowcaseCarouselSection from "@/components/ShowcaseCarouselSection";
import HumanSupportSection from "@/components/HumanSupportSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FramerBadge from "@/components/FramerBadge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 flex items-center py-6 sm:py-10 lg:py-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Social Proof, Headline, Copy & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center max-w-xl">
            {/* Social Proof: Overlapping Avatars + Trusted by 1k+ users */}
            <div className="flex items-center gap-3 mb-6 sm:mb-7">
              <div className="flex -space-x-2.5">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="User 1"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="User 2"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="User 3"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="User 4"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              </div>
              <span className="text-sm sm:text-base font-semibold text-neutral-900 tracking-tight">
                Trusted By 1k+ Users
              </span>
            </div>

            {/* Overline Tag */}
            <span className="text-[15px] sm:text-base font-semibold text-neutral-800 tracking-tight mb-2 sm:mb-3">
              The designer marketplace
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.06]">
              Pro Framer <br />
              templates
            </h1>

            {/* Paragraph Copy */}
            <p className="mt-5 sm:mt-6 text-neutral-800 text-base sm:text-lg font-normal leading-relaxed">
              Premium templates crafted to feel uniquely yours — customize in minutes and launch polished websites without starting from scratch.
            </p>

            {/* CTA Button & Marketplace Label */}
            <div className="mt-8 sm:mt-9 flex items-center gap-4 flex-wrap">
              <a
                href="#templates"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#c54432] hover:bg-[#b23b2b] active:scale-[0.98] text-white font-medium text-base tracking-tight shadow-lg shadow-red-900/15 transition-all duration-200"
              >
                Browse Templates
              </a>
              <span className="text-neutral-800 text-sm sm:text-[15px] font-medium">
                Available In Framer Marketplace
              </span>
            </div>
          </div>

          {/* Right Column: Live Scrolling Template Columns */}
          <div className="lg:col-span-7 w-full relative">
            <ScrollingColumns />
          </div>
        </div>
      </section>

      {/* Portfolio Website Builder Section */}
      <PortfolioEditorSection />

      {/* Best Framer Templates Grid Section */}
      <TemplatesGridSection />

      {/* The Case For One Platform Section */}
      <OnePlatformSection />

      {/* Live Video Demo & Software Walkthrough Section */}
      <WatchDemoSection />

      {/* Trust Badges & Guarantee Section */}
      <TrustBadgesSection />

      {/* Five Reasons to use Carbonmade Bento Section */}
      <FiveReasonsSection />

      {/* Dual Row Horizontal Scrolling Device Showcase */}
      <ShowcaseCarouselSection />

      {/* 24/7 Real Human Support & Review Section */}
      <HumanSupportSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer Section */}
      <Footer />

      {/* Floating Framer Badge */}
      <FramerBadge />
    </div>
  );
}
