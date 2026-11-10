import React from "react";
import Image from "next/image";

/* Card 1: Collaborate into Blender */
export function BlenderCard() {
  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
      {/* Top browser bar mock */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <span className="text-[11px] font-bold tracking-tight text-neutral-800">
            @Clonify
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-neutral-400">
          <span>About</span>
          <span>Features</span>
          <span>Pricing</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 items-center">
        {/* Left copy */}
        <div className="col-span-6 space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
            Collaborate right into Blender.
          </h3>
          <p className="text-[10px] text-neutral-400 leading-relaxed line-clamp-2">
            Create 3D assets, sync animations and render directly with real-time feedback.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-300 text-[11px] font-medium text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer">
            <span>Start for free</span>
            <span className="text-xs">→</span>
          </div>
          {/* Trustpilot stars */}
          <div className="pt-1 flex items-center gap-1.5">
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              ★ 4.8 / 5.0
            </span>
            <span className="text-[9px] text-neutral-400">120+ reviews</span>
          </div>
        </div>

        {/* Right 3D Visuals */}
        <div className="col-span-6 grid grid-cols-2 gap-2">
          {/* 3D Blender Graphic */}
          <div className="bg-amber-50 rounded-xl p-3 flex flex-col items-center justify-center border border-amber-100/60 aspect-square">
            <div className="w-9 h-9 relative flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow" fill="none">
                <circle cx="24" cy="24" r="14" fill="#EA7600" />
                <path d="M18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24Z" fill="white" />
                <circle cx="24" cy="24" r="3.5" fill="#22578E" />
                <path d="M24 10L36 6M24 10L14 7M24 10L24 16" stroke="#EA7600" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          {/* 3D Picture/Gallery Icon */}
          <div className="bg-indigo-50 rounded-xl p-3 flex flex-col items-center justify-center border border-indigo-100/60 aspect-square">
            <div className="w-9 h-9 bg-gradient-to-tr from-indigo-500 to-purple-400 rounded-xl shadow-md flex items-center justify-center text-white text-xs font-bold transform -rotate-3">
              ✦
            </div>
          </div>
          {/* 3D Flame */}
          <div className="bg-orange-50 rounded-xl p-3 flex flex-col items-center justify-center border border-orange-100/60 aspect-square">
            <span className="text-2xl drop-shadow transform hover:scale-110 transition-transform">🔥</span>
          </div>
          {/* 3D Capsule Pill */}
          <div className="bg-teal-50 rounded-xl p-3 flex flex-col items-center justify-center border border-teal-100/60 aspect-square">
            <div className="w-8 h-4 rounded-full bg-gradient-to-r from-red-400 to-blue-400 transform -rotate-45 shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Card 2: Get inspired minimal art digest */
export function ArtDigestCard() {
  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
        <span className="text-[11px] font-bold text-neutral-800">◇ Artspace</span>
        <span className="text-[10px] text-neutral-400">Issue #42</span>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug mb-3">
        Get inspired — daily <br />
        minimal art digest.
      </h3>

      {/* Grid of 3 artistic visuals */}
      <div className="grid grid-cols-3 gap-2">
        {/* Artistic portrait with cloud mask */}
        <div className="relative rounded-xl overflow-hidden bg-neutral-900 aspect-[3/4] border border-neutral-200">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            alt="Minimalist Portrait"
            fill
            className="object-cover grayscale contrast-125"
            sizes="(max-width: 768px) 100vw, 200px"
          />
          {/* Cloud blur shape overlay */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-12 h-6 bg-sky-200/90 rounded-full blur-[2px] shadow-sm" />
        </div>

        {/* Vertical geometric lines */}
        <div className="rounded-xl overflow-hidden bg-neutral-50 p-2 flex flex-col justify-between border border-neutral-200 aspect-[3/4]">
          <div className="h-full w-full flex justify-between items-stretch py-1">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-0.5 bg-neutral-800 h-full rounded-full opacity-80"
              />
            ))}
          </div>
          <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 pt-1">
            <span>VOL.1</span>
            <span>2026</span>
          </div>
        </div>

        {/* Abstract texture collage */}
        <div className="rounded-xl overflow-hidden bg-neutral-100 flex flex-col justify-between p-2 border border-neutral-200 aspect-[3/4] relative">
          <div className="w-full h-1/2 bg-amber-500 rounded-md opacity-90 mix-blend-multiply flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
            FORM
          </div>
          <div className="w-full h-1/3 bg-neutral-800 rounded-md flex items-center justify-center text-[9px] text-neutral-200 font-mono">
            RAW
          </div>
          <span className="absolute bottom-1 right-2 text-[10px] font-serif italic text-neutral-400">
            K.
          </span>
        </div>
      </div>
    </div>
  );
}

/* Card 3: Carl Sagan Visual Designer */
export function CarlSaganCard() {
  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-neutral-800" />
          <span className="text-[11px] font-bold text-neutral-800">Portfolio</span>
        </div>
        <span className="text-[10px] text-neutral-400">Index</span>
      </div>

      <div className="grid grid-cols-12 gap-3 items-start">
        <div className="col-span-7">
          <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-tight">
            Carl Sagan. <br />
            Visual designer
          </h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 font-medium text-neutral-700">
              Tokyo / Berlin
            </span>
          </div>
        </div>
        <div className="col-span-5">
          <p className="text-[10px] text-neutral-500 leading-relaxed">
            I&apos;m a passionate designer who thrives on the dance between creativity and functionality. With a curiosity to create experiences...
          </p>
        </div>
      </div>
    </div>
  );
}

/* Card 4: Figma Dark Card */
export function FigmaDarkCard() {
  return (
    <div className="w-full bg-[#17171a] text-white rounded-2xl p-5 shadow-md border border-neutral-800 hover:border-neutral-700 transition-all relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-blue-600/15 blur-2xl rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-medium text-neutral-300">New Release</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
          Meet Clonify — the fastest way to design pages in{" "}
          <span className="inline-flex items-center gap-1 text-purple-300">
            <svg className="w-3.5 h-3.5 inline" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
            </svg>
            Figma
          </span>
        </h3>

        <div className="pt-1">
          <button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#8c52ff] hover:bg-[#7b42ea] text-white text-[12px] font-medium shadow-sm transition-all">
            <span>Browse Library</span>
            <span>→</span>
          </button>
        </div>

        <div className="pt-2 flex items-center gap-2 text-[10px] text-neutral-400 border-t border-neutral-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Clonify Pro now supports 5.0 API with full dark theme!</span>
        </div>
      </div>
    </div>
  );
}

/* Card 5: Creative Agency from Netherlands */
export function AgencyCard() {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
      {/* Bright Lime/Yellow Top Banner */}
      <div className="bg-[#e2f934] p-4 text-neutral-950">
        <div className="flex items-center justify-between text-[10px] font-medium mb-2 opacity-80">
          <div className="flex items-center gap-2">
            <span>Home</span>
            <span>Shop</span>
            <span>Product</span>
            <span>Pages</span>
          </div>
          <div className="w-4 h-2 flex flex-col justify-between">
            <div className="w-full h-0.5 bg-neutral-900" />
            <div className="w-full h-0.5 bg-neutral-900" />
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight">
          An award winning creative agency from Netherlands
        </h3>
      </div>

      {/* Main Image Banner */}
      <div className="relative w-full aspect-[4/3] bg-neutral-100">
        <Image
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
          alt="Creative agency model"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        {/* Subtle Dark Bottom Bar */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-between">
          <span className="text-[10px] text-white/90 line-clamp-1 max-w-[180px]">
            Award winning identity and design
          </span>
          <button className="px-3 py-1 rounded-full bg-black/80 hover:bg-black text-white text-[10px] font-medium border border-white/20 transition-colors">
            See projects
          </button>
        </div>
      </div>
    </div>
  );
}

/* Card 6: Clonify Pro Dream Website */
export function ClonifyProCard() {
  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
          <span className="text-[11px] font-bold text-neutral-800">@Clonify</span>
        </div>
        {/* Avatar Stack */}
        <div className="flex -space-x-1.5">
          <div className="w-5 h-5 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-[8px] font-bold">
            JD
          </div>
          <div className="w-5 h-5 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-[8px] font-bold">
            AL
          </div>
          <div className="w-5 h-5 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-[8px] font-bold">
            MS
          </div>
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug mb-3">
        Clonify Pro — Build <br />
        your dream website.
      </h3>

      {/* Wireframe UI Blocks */}
      <div className="grid grid-cols-4 gap-2 pt-1">
        <div className="h-10 rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border border-neutral-300" />
        </div>
        <div className="h-10 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center">
          <div className="w-4 h-2 rounded bg-neutral-300" />
        </div>
        <div className="h-10 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center">
          <div className="w-3 h-3 rotate-45 border border-neutral-300" />
        </div>
        <div className="h-10 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center">
          <div className="w-4 h-4 rounded-lg bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}

