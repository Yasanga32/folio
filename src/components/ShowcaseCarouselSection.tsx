"use client";

import React from "react";
import Image from "next/image";

/* Device Bezel Container */
function DeviceBezel({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[360px] sm:w-[440px] lg:w-[490px] aspect-[16/10] rounded-[22px] sm:rounded-[26px] bg-[#1a1a1e] p-[6px] sm:p-[7px] shadow-2xl flex-shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <div className="w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden bg-white relative">
        {children}
      </div>
    </div>
  );
}

export default function ShowcaseCarouselSection() {
  /* Row 1 Cards */
  const row1Cards = [
    /* 1. Lydia Retoucher */
    <DeviceBezel key="r1-1">
      <div className="w-full h-full bg-[#fdfbf7] p-4 sm:p-5 flex justify-between gap-3 select-none">
        <div className="w-1/3 flex flex-col justify-between text-neutral-900">
          <div>
            <h4 className="text-xs sm:text-sm font-bold font-serif leading-tight">
              Lydia <br />
              Tetkova <br />
              Retoucher
            </h4>
            <p className="text-[8px] text-neutral-400 mt-2 leading-tight">
              London & New York · Fashion, beauty and commercial post-production.
            </p>
          </div>
          <div className="text-[7px] text-neutral-400 font-mono">
            SELECTED CLIENTS
          </div>
        </div>
        <div className="w-2/3 relative rounded-xl overflow-hidden shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
            alt="Fashion Retouching"
            fill
            className="object-cover"
            sizes="350px"
          />
        </div>
      </div>
    </DeviceBezel>,

    /* 2. Minimalist Architecture & Industrial Studs */
    <DeviceBezel key="r1-2">
      <div className="w-full h-full relative bg-neutral-950 select-none">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
          alt="Architecture Grid"
          fill
          className="object-cover brightness-90 contrast-125"
          sizes="400px"
        />
        <div className="absolute top-3 left-4 text-[9px] font-mono tracking-widest text-neutral-400">
          STUDIO / FORM
        </div>
      </div>
    </DeviceBezel>,

    /* 3. Lanvin Fashion Editorial */
    <DeviceBezel key="r1-3">
      <div className="w-full h-full bg-[#0d0d10] text-white p-3 sm:p-4 grid grid-cols-12 gap-2 select-none">
        <div className="col-span-7 relative rounded-lg overflow-hidden flex flex-col justify-between p-3">
          <Image
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80"
            alt="Lanvin Model"
            fill
            className="object-cover"
            sizes="300px"
          />
          <div className="relative z-10 text-xs font-serif tracking-widest text-white/80">
            AUTUMN / WINTER
          </div>
          <div className="relative z-10 text-2xl sm:text-3xl font-serif font-black tracking-widest text-red-500 uppercase drop-shadow">
            LANVIN
          </div>
        </div>
        <div className="col-span-5 grid grid-rows-2 gap-2">
          <div className="relative rounded-lg overflow-hidden bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80"
              alt="Lipstick Product"
              fill
              className="object-cover"
              sizes="150px"
            />
          </div>
          <div className="bg-[#f7edf0] rounded-lg p-2 flex flex-col justify-center items-center text-center">
            <div className="text-[10px] font-serif font-bold text-neutral-800">
              Stationery & Identity
            </div>
            <div className="w-8 h-0.5 bg-neutral-400 mt-1" />
          </div>
        </div>
      </div>
    </DeviceBezel>,

    /* 4. Daniel Lepik Sculptures */
    <DeviceBezel key="r1-4">
      <div className="w-full h-full bg-[#fbf9f6] p-4 flex justify-between select-none">
        <div className="w-1/3 flex flex-col justify-between">
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-tight text-neutral-900 font-sans uppercase">
              Daniel <br />
              Lepik
            </h4>
            <div className="text-[8px] text-neutral-400 mt-2 space-y-0.5">
              <div>Ceramics</div>
              <div>Sculpture</div>
              <div>Exhibitions</div>
            </div>
          </div>
          <div className="text-[7px] text-neutral-400">© 2026 D.L</div>
        </div>
        <div className="w-2/3 relative rounded-xl overflow-hidden bg-neutral-100">
          <Image
            src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
            alt="Ceramic sculpture"
            fill
            className="object-cover"
            sizes="350px"
          />
        </div>
      </div>
    </DeviceBezel>,

    /* 5. 3D Character Art */
    <DeviceBezel key="r1-5">
      <div className="w-full h-full bg-[#edf1f7] p-3 grid grid-cols-2 gap-2 select-none">
        <div className="relative rounded-xl overflow-hidden bg-purple-100">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
            alt="3D Character"
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden bg-emerald-100">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
            alt="3D Forest Art"
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
      </div>
    </DeviceBezel>,
  ];

  /* Row 2 Cards */
  const row2Cards = [
    /* 1. Chanel / Luxury Typography */
    <DeviceBezel key="r2-1">
      <div className="w-full h-full bg-[#fbfbfa] p-5 flex flex-col justify-center items-center text-center select-none space-y-1.5">
        <div className="text-xl sm:text-2xl font-serif tracking-widest text-neutral-900 uppercase">
          CHANEL
        </div>
        <div className="text-lg sm:text-xl font-serif tracking-widest text-neutral-600 uppercase">
          MAXMARA
        </div>
        <div className="text-base sm:text-lg font-serif tracking-widest text-neutral-400 uppercase">
          THEORY
        </div>
        <div className="text-sm sm:text-base font-serif tracking-widest text-neutral-300 uppercase">
          TIFFANY & CO
        </div>
        <div className="text-xs sm:text-sm font-serif tracking-widest text-neutral-200 uppercase">
          GUCCI
        </div>
      </div>
    </DeviceBezel>,

    /* 2. Elisabeth Kiviorg Studio */
    <DeviceBezel key="r2-2">
      <div className="w-full h-full bg-[#f6f3ee] p-3 sm:p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between text-[8px] text-neutral-400 border-b border-neutral-200 pb-1.5">
          <span>SELECTED WORKS</span>
          <span className="font-bold text-neutral-800 tracking-wider">
            ELISABETH KIVIORG
          </span>
          <span>INFO / CONTACT</span>
        </div>
        <div className="grid grid-cols-12 gap-2 flex-1 pt-2">
          <div className="col-span-5 relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80"
              alt="Fashion portrait"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-2">
            <div className="bg-[#dcd0f5] rounded-lg p-2 flex items-center justify-center text-[9px] font-bold text-purple-900">
              FABRIC
            </div>
            <div className="bg-[#f5cbb8] rounded-lg p-2 flex items-center justify-center text-[9px] font-bold text-amber-900">
              COLOR
            </div>
            <div className="col-span-2 bg-[#202024] rounded-lg p-2 flex items-center justify-center text-[9px] font-bold text-white">
              IDENTITY 2026
            </div>
          </div>
        </div>
      </div>
    </DeviceBezel>,

    /* 3. Kirsten Trier Equestrian Portfolio */
    <DeviceBezel key="r2-3">
      <div className="w-full h-full bg-[#0f0f12] text-white p-3 flex flex-col justify-between select-none">
        <div className="text-center py-1">
          <span className="text-sm font-serif italic text-neutral-200">
            Kirsten Trier
          </span>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-1.5 flex-1">
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
              alt="Equestrian 1"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=250&q=80"
              alt="Equestrian 2"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80"
              alt="Equestrian 3"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=250&q=80"
              alt="Equestrian 4"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=250&q=80"
              alt="Equestrian 5"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80"
              alt="Equestrian 6"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
        </div>
      </div>
    </DeviceBezel>,

    /* 4. We Are The Apertures Brutalist Agency */
    <DeviceBezel key="r2-4">
      <div className="w-full h-full bg-[#f4f4f4] p-4 flex flex-col justify-between select-none">
        <div>
          <span className="text-[8px] font-mono text-neutral-400">DESIGN / LAB</span>
          <h4 className="text-xl sm:text-2xl font-black text-neutral-950 uppercase tracking-tighter leading-none mt-1">
            WE ARE THE <br />
            APERTURES
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
              alt="Monochrome landscape"
              fill
              className="object-cover grayscale contrast-150"
              sizes="180px"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80"
              alt="Monochrome lighting"
              fill
              className="object-cover grayscale contrast-150"
              sizes="180px"
            />
          </div>
        </div>
      </div>
    </DeviceBezel>,

    /* 5. Jolie Vallella Editorial Magazine */
    <DeviceBezel key="r2-5">
      <div className="w-full h-full bg-[#fcf9f5] p-3 flex justify-between gap-2 select-none">
        <div className="w-1/3 flex flex-col justify-between text-[8px] text-neutral-500">
          <span className="font-bold text-neutral-900 uppercase">Jolie Vallella</span>
          <div className="space-y-0.5">
            <div>Editorial</div>
            <div>Styling</div>
            <div>2026</div>
          </div>
        </div>
        <div className="w-2/3 grid grid-rows-2 gap-1.5">
          <div className="relative rounded-lg overflow-hidden bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt="Editorial portrait"
              fill
              className="object-cover"
              sizes="180px"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden bg-pink-100 flex items-center justify-center text-[10px] font-serif font-bold text-pink-900">
            SPRING VOGUE
          </div>
        </div>
      </div>
    </DeviceBezel>,
  ];

  /* Duplicate arrays to create continuous infinite loops */
  const fullRow1 = [...row1Cards, ...row1Cards];
  const fullRow2 = [...row2Cards, ...row2Cards];

  return (
    <section className="w-full py-16 sm:py-24 overflow-hidden relative select-none">
      {/* Top & Bottom Ambient Vignette Masks */}
      <div className="w-full space-y-6 sm:space-y-8 horizontal-fade-mask scroll-container">
        {/* Row 1 - Smoothly scrolling to the left */}
        <div className="flex gap-5 sm:gap-6 animate-scroll-left will-change-transform">
          {fullRow1.map((card, idx) => (
            <div key={idx} className="flex-shrink-0">
              {card}
            </div>
          ))}
        </div>

        {/* Row 2 - Smoothly scrolling in opposite direction / rightwards */}
        <div className="flex gap-5 sm:gap-6 animate-scroll-right will-change-transform">
          {fullRow2.map((card, idx) => (
            <div key={idx} className="flex-shrink-0">
              {card}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

