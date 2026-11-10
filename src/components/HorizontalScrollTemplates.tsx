"use client";

import React from "react";
import Image from "next/image";

/* Horizontal Card 1: Customer Stories & Testimonials */
function StoriesCard() {
  return (
    <div className="w-[330px] sm:w-[370px] h-[480px] sm:h-[530px] rounded-2xl bg-white border border-neutral-200/80 shadow-md p-4 flex flex-col justify-between overflow-hidden flex-shrink-0">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
        <span className="text-xs font-bold text-neutral-800">Stories</span>
        <span className="text-[10px] text-neutral-400">Wall of Love</span>
      </div>

      <div className="py-2 space-y-3">
        {/* Testimonial Card 1 */}
        <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200/70 space-y-2">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Sarah K."
                fill
                className="object-cover"
                sizes="50px"
              />
            </div>
            <div>
              <div className="text-[11px] font-bold text-neutral-900">Sarah Jenkins</div>
              <div className="text-[9px] text-neutral-400">Head of Growth at Acme</div>
            </div>
          </div>
          <p className="text-[10px] text-neutral-600 leading-relaxed">
            &ldquo;We launched our SaaS landing page in 2 days and converted 35% more signups than our previous custom build.&rdquo;
          </p>
          <div className="text-[9px] text-amber-500 font-bold">★★★★★</div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200/70 space-y-2">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="David Chen"
                fill
                className="object-cover"
                sizes="50px"
              />
            </div>
            <div>
              <div className="text-[11px] font-bold text-neutral-900">David Chen</div>
              <div className="text-[9px] text-neutral-400">Founder & CEO</div>
            </div>
          </div>
          <p className="text-[10px] text-neutral-600 leading-relaxed">
            &ldquo;Incredible components and animations. Saved us hundreds of hours of design and development.&rdquo;
          </p>
          <div className="text-[9px] text-amber-500 font-bold">★★★★★</div>
        </div>
      </div>

      {/* Bottom Brand Bar */}
      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[9px] text-neutral-400">
        <span>Trusted by 10,000+ teams</span>
        <span className="font-semibold text-neutral-700">Read 50+ stories →</span>
      </div>
    </div>
  );
}

/* Horizontal Card 2: Careers & Culture */
function CareersCard() {
  return (
    <div className="w-[330px] sm:w-[370px] h-[480px] sm:h-[530px] rounded-2xl bg-white border border-neutral-200/80 shadow-md p-4 flex flex-col justify-between overflow-hidden flex-shrink-0">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <span className="text-xs font-bold text-neutral-900">✦ Fluxy</span>
        <div className="flex items-center gap-2 text-[9px] text-neutral-400">
          <span>Company</span>
          <span>Careers</span>
          <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-white font-medium text-[8px]">
            We&apos;re Hiring
          </span>
        </div>
      </div>

      {/* Headline */}
      <div className="text-center py-1">
        <h4 className="text-sm sm:text-base font-bold text-neutral-950 leading-tight">
          Work with us and <br />
          grow fast with others
        </h4>
      </div>

      {/* Double Photo Collage */}
      <div className="grid grid-cols-2 gap-2 my-1">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
            alt="Team Working"
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
            alt="Coworker on sofa"
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="space-y-1.5 pt-1">
        <div className="text-[10px] font-bold text-neutral-800">Benefits & Perks</div>
        <div className="grid grid-cols-2 gap-1.5 text-[8px] text-neutral-600">
          <div className="p-1.5 rounded bg-neutral-50 border border-neutral-100">
            ✓ 100% Remote flexibility
          </div>
          <div className="p-1.5 rounded bg-neutral-50 border border-neutral-100">
            ✓ Annual company retreats
          </div>
          <div className="p-1.5 rounded bg-neutral-50 border border-neutral-100">
            ✓ Premium health coverage
          </div>
          <div className="p-1.5 rounded bg-neutral-50 border border-neutral-100">
            ✓ $2,500 Learning stipend
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[9px] text-neutral-500">
        <span>12 Open Positions</span>
        <span className="font-semibold text-neutral-800">Apply Now →</span>
      </div>
    </div>
  );
}

/* Horizontal Card 3: Lead Gen & Marketing */
function LeadGenCard() {
  return (
    <div className="w-[330px] sm:w-[370px] h-[480px] sm:h-[530px] rounded-2xl bg-white border border-neutral-200/80 shadow-md p-4 flex flex-col justify-between overflow-hidden flex-shrink-0">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <span className="text-xs font-bold text-neutral-900">✦ Fluxy</span>
        <span className="text-[9px] text-neutral-400">Marketing</span>
      </div>

      {/* Headline & Subtitle */}
      <div className="space-y-1 py-1">
        <h4 className="text-sm sm:text-base font-bold text-neutral-950 leading-tight">
          Generate more leads than ever, with Fluxy.
        </h4>
        <p className="text-[9px] text-neutral-500 leading-relaxed">
          High-converting lead forms, smart attribution, and pipeline analytics.
        </p>
      </div>

      {/* Photo & Floating Card Component */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-tr from-purple-100 via-pink-50 to-amber-50 p-2.5 border border-purple-200/60 my-1">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80"
            alt="Lead Gen"
            fill
            className="object-cover"
            sizes="300px"
          />
          {/* Floating UI Notification */}
          <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-xs rounded-lg p-2 shadow-md border border-neutral-100 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-[8px] font-bold text-neutral-800">
              New lead captured (+34%)
            </div>
          </div>
        </div>
      </div>

      {/* Connect with Leads Box */}
      <div className="bg-neutral-900 text-white rounded-xl p-3 space-y-1">
        <div className="text-[10px] font-bold">Connect with leads with zero hassle.</div>
        <div className="text-[8px] text-neutral-400">
          Automate follow-ups via email, Slack, and your CRM instantly.
        </div>
      </div>

      {/* Partner Logos */}
      <div className="pt-2 border-t border-neutral-100 flex items-center justify-around text-[8px] text-neutral-400 font-bold uppercase tracking-wider">
        <span>Logipsum</span>
        <span>Logipsum</span>
        <span>Logipsum</span>
      </div>
    </div>
  );
}

/* Horizontal Card 4: Project Management Made Easy */
function ProjectManagementCard() {
  return (
    <div className="w-[330px] sm:w-[370px] h-[480px] sm:h-[530px] rounded-2xl bg-white border border-neutral-200/80 shadow-md p-4 flex flex-col justify-between overflow-hidden flex-shrink-0">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <span className="text-xs font-bold text-neutral-900">✦ Fluxy</span>
        <span className="text-[9px] text-neutral-400">Management</span>
      </div>

      {/* Headline */}
      <div className="text-center py-1">
        <h4 className="text-sm sm:text-base font-bold text-neutral-950 leading-tight">
          Project Management Made Easy
        </h4>
        <p className="text-[9px] text-neutral-500 mt-1">
          Everything your design and dev team needs in one place.
        </p>
      </div>

      {/* Pastel Floating Cards Canvas */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-tr from-purple-200/60 via-amber-100/50 to-pink-200/40 p-3 border border-neutral-200 my-1 flex flex-col justify-between">
        {/* Floating Card 1: Purple Task */}
        <div className="bg-white rounded-lg p-2 shadow-sm border border-purple-200/70 w-3/4">
          <div className="flex items-center justify-between text-[8px] font-bold text-purple-700 mb-0.5">
            <span>Sprint 24 · In Progress</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          </div>
          <div className="text-[9px] font-medium text-neutral-800">
            Ship interactive hero section
          </div>
        </div>

        {/* Floating Card 2: Note */}
        <div className="bg-amber-50 rounded-lg p-2 shadow-sm border border-amber-200/80 w-4/5 self-end">
          <div className="text-[8px] text-amber-900 font-serif italic">
            &ldquo;The key is clean typography and smooth micro-interactions.&rdquo;
          </div>
        </div>
      </div>

      {/* Feature statement */}
      <div className="text-center py-1">
        <span className="text-[10px] font-semibold text-neutral-700">
          All you need to run your brands effectively
        </span>
      </div>

      {/* Partner Logos */}
      <div className="pt-2 border-t border-neutral-100 flex items-center justify-around text-[8px] text-neutral-400 font-bold uppercase tracking-wider">
        <span>Google</span>
        <span>Apple</span>
        <span>Figma</span>
        <span>Framer</span>
      </div>
    </div>
  );
}

/* Horizontal Card 5: Pricing & Plans */
function PricingCard() {
  return (
    <div className="w-[330px] sm:w-[370px] h-[480px] sm:h-[530px] rounded-2xl bg-white border border-neutral-200/80 shadow-md p-4 flex flex-col justify-between overflow-hidden flex-shrink-0">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <span className="text-xs font-bold text-neutral-900">✦ Fluxy</span>
        <span className="text-[9px] text-neutral-400">Pricing</span>
      </div>

      {/* Headline */}
      <div className="text-center py-1">
        <h4 className="text-sm sm:text-base font-bold text-neutral-950 leading-tight">
          Pricing & Plans
        </h4>
        <p className="text-[8px] text-neutral-500 mt-0.5">
          Transparent pricing for startups and scaling teams.
        </p>
      </div>

      {/* 3 Tier Pricing Table */}
      <div className="grid grid-cols-3 gap-1.5 my-1">
        {/* Tier 1: Free */}
        <div className="bg-neutral-50 rounded-lg p-2 border border-neutral-200 text-center flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-neutral-500 uppercase">Starter</div>
            <div className="text-sm font-extrabold text-neutral-900 mt-1">$0</div>
            <div className="text-[7px] text-neutral-400">Forever free</div>
          </div>
          <div className="text-[7px] text-neutral-500 pt-2 space-y-0.5">
            <div>1 Project</div>
            <div>Community support</div>
          </div>
        </div>

        {/* Tier 2: Pro (Highlighted) */}
        <div className="bg-white rounded-lg p-2 border-2 border-neutral-900 shadow-sm text-center flex flex-col justify-between relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[7px] font-bold px-1.5 py-0.2 rounded-full uppercase">
            Popular
          </div>
          <div>
            <div className="text-[8px] font-bold text-neutral-800 uppercase mt-0.5">Pro</div>
            <div className="text-sm font-extrabold text-neutral-950 mt-1">$49</div>
            <div className="text-[7px] text-neutral-400">Per month</div>
          </div>
          <div className="text-[7px] text-neutral-700 font-medium pt-2 space-y-0.5">
            <div>Unlimited projects</div>
            <div>Custom domains</div>
            <div>Priority 24/7 chat</div>
          </div>
        </div>

        {/* Tier 3: Enterprise */}
        <div className="bg-neutral-50 rounded-lg p-2 border border-neutral-200 text-center flex flex-col justify-between">
          <div>
            <div className="text-[8px] font-bold text-neutral-500 uppercase">Scale</div>
            <div className="text-sm font-extrabold text-neutral-900 mt-1">$99</div>
            <div className="text-[7px] text-neutral-400">Per month</div>
          </div>
          <div className="text-[7px] text-neutral-500 pt-2 space-y-0.5">
            <div>Custom integrations</div>
            <div>Dedicated manager</div>
          </div>
        </div>
      </div>

      {/* Comparison bullet points */}
      <div className="bg-neutral-50 rounded-lg p-2 border border-neutral-100 text-[8px] text-neutral-600 space-y-1">
        <div className="flex items-center gap-1">
          <span className="text-emerald-600 font-bold">✓</span>
          <span>No credit card required for 14-day trial</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-emerald-600 font-bold">✓</span>
          <span>Cancel or switch plans anytime</span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[9px] text-neutral-500">
        <span>Compare full plans</span>
        <span className="font-semibold text-neutral-800">Start Free →</span>
      </div>
    </div>
  );
}

export default function HorizontalScrollTemplates() {
  const cards = [
    <StoriesCard key="card-1" />,
    <CareersCard key="card-2" />,
    <LeadGenCard key="card-3" />,
    <ProjectManagementCard key="card-4" />,
    <PricingCard key="card-5" />,
    <StoriesCard key="card-6" />,
    <CareersCard key="card-7" />,
    <LeadGenCard key="card-8" />,
    <ProjectManagementCard key="card-9" />,
    <PricingCard key="card-10" />,
  ];

  return (
    <div className="relative w-full overflow-hidden horizontal-fade-mask py-6 select-none scroll-container">
      {/* Infinite Horizontal Carousel */}
      <div className="flex gap-6 animate-scroll-left will-change-transform">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="transition-transform duration-300 hover:scale-[1.02] flex-shrink-0"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}

