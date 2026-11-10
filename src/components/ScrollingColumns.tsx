"use client";

import React from "react";
import {
  BlenderCard,
  ArtDigestCard,
  CarlSaganCard,
  FigmaDarkCard,
  AgencyCard,
  ClonifyProCard,
} from "./TemplateCards";

export default function ScrollingColumns() {
  const column1 = [
    <BlenderCard key="blender-1" />,
    <ArtDigestCard key="art-1" />,
    <CarlSaganCard key="carl-1" />,
    <BlenderCard key="blender-2" />,
    <ArtDigestCard key="art-2" />,
    <CarlSaganCard key="carl-2" />,
  ];

  const column2 = [
    <FigmaDarkCard key="figma-1" />,
    <AgencyCard key="agency-1" />,
    <ClonifyProCard key="pro-1" />,
    <FigmaDarkCard key="figma-2" />,
    <AgencyCard key="agency-2" />,
    <ClonifyProCard key="pro-2" />,
  ];

  return (
    <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[760px] overflow-hidden vertical-fade-mask scroll-container select-none">
      {/* 2-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 h-full">
        {/* Column 1 - Live scrolling upwards */}
        <div className="relative overflow-hidden h-full">
          <div className="animate-scroll-up flex flex-col gap-4 md:gap-5 will-change-transform">
            {column1.map((card, idx) => (
              <div key={idx} className="transition-transform duration-300 hover:scale-[1.02]">
                {card}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 - Live scrolling with alternate speed / direction */}
        <div className="relative overflow-hidden h-full hidden sm:block">
          <div className="animate-scroll-down flex flex-col gap-4 md:gap-5 will-change-transform">
            {column2.map((card, idx) => (
              <div key={idx} className="transition-transform duration-300 hover:scale-[1.02]">
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

