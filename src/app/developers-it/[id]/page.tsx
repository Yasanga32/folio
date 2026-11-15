import React from "react";
import { redirect } from "next/navigation";
import DeveloperTemplateOneShowcase from "@/components/templates/developers/DeveloperTemplateOneShowcase";
import DeveloperTemplateThreeShowcase from "@/components/templates/developers/DeveloperTemplateThreeShowcase";

export function generateStaticParams() {
  return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((id) => ({ id }));
}

export default async function DevelopersItIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id === "1") {
    return <DeveloperTemplateOneShowcase />;
  }
  if (id === "3") {
    return <DeveloperTemplateThreeShowcase />;
  }
  redirect(`/template/developers-it/${id}`);
}
