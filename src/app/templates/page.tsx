import React from "react";
import Navbar from "@/components/Navbar";
import TemplateDirectory from "@/components/TemplateDirectory";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#16121f] text-white">
      <Navbar dark />
      <TemplateDirectory />
    </div>
  );
}

