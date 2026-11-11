import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FramerBadge from "@/components/FramerBadge";
import TemplateOneShowcase from "@/components/templates/TemplateOneShowcase";
import TemplateTwoShowcase from "@/components/templates/TemplateTwoShowcase";
import TemplateThreeShowcase from "@/components/templates/TemplateThreeShowcase";
import TemplateFourShowcase from "@/components/templates/TemplateFourShowcase";

const TEMPLATE_IDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export function generateStaticParams() {
  return TEMPLATE_IDS.map((id) => ({ id }));
}

export default async function PhotographyTemplatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!TEMPLATE_IDS.includes(id)) {
    notFound();
  }

  if (id === "1") {
    return <TemplateOneShowcase />;
  }

  if (id === "2") {
    return <TemplateTwoShowcase />;
  }

  if (id === "3") {
    return <TemplateThreeShowcase />;
  }

  if (id === "4") {
    return <TemplateFourShowcase />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] relative">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center text-center py-16 sm:py-20">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600 shadow-xs mb-4">
          <span>Photography #{id}</span>
          <span className="text-neutral-300">·</span>
          <span className="font-mono lowercase text-neutral-500">
            /template/photography/{id}
          </span>
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08]">
          Photography Template #{id}
        </h1>

        <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-xl">
          Dedicated endpoint for Photography Template #{id}. Share a screenshot
          or layout direction whenever you&apos;re ready to design this page.
        </p>

        {/* Quick Endpoint Switcher (1 to 10) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-lg">
          {TEMPLATE_IDS.map((item) => {
            const isCurrent = item === id;
            return (
              <Link
                key={item}
                href={`/template/photography/${item}`}
                className={`w-10 h-10 rounded-xl inline-flex items-center justify-center text-sm font-semibold tabular-nums transition-all ${
                  isCurrent
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-white text-neutral-700 border border-neutral-200/80 hover:border-neutral-400 hover:text-neutral-950"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </main>

      <FramerBadge />
    </div>
  );
}

