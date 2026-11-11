import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";

const TEMPLATE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function PhotographyTemplatesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] relative">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center text-center py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 mb-3">
          Photography Endpoints
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08]">
          Photography Templates (1–10)
        </h1>
        <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-xl">
          Choose any photography template endpoint from 1 to 10 below or from
          the Template dropdown in the navigation bar.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3 w-full max-w-2xl">
          {TEMPLATE_IDS.map((num) => (
            <Link
              key={num}
              href={`/template/photography/${num}`}
              className="group bg-white border border-neutral-200/80 hover:border-neutral-900 rounded-2xl p-4 flex flex-col items-center justify-center gap-1 shadow-xs hover:shadow-md transition-all"
            >
              <span className="text-2xl font-bold text-neutral-900 tabular-nums">
                {num}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 group-hover:text-neutral-600">
                /photography/{num}
              </span>
            </Link>
          ))}
        </div>
      </main>

      <FramerBadge />
    </div>
  );
}

