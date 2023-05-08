import React from "react";
import TailwindCard from "@/components/Cards/Tailwind";
import SupabaseCard from "@/components/Cards/Supabase";
import TypescriptCard from "@/components/Cards/TypeScript";
import NextUICard from "@/components/Cards/NextUI";
import NextCard from "@/components/Cards/NextJS";

export const metadata = {
  title: 'Cards',
  description: 'Different Technology Cards',
}

const CardsPage = () => {
  return (
    <div className="flex my-4 space-x-7 flex-wrap justify-center flex-row pt-2">
      <NextCard />
      <TypescriptCard />
      <SupabaseCard />
      <NextUICard />
      <TailwindCard />
    </div>
  )
}

export default CardsPage;
