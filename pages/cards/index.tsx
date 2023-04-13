import TailwindCard from "@/components/Cards/Tailwind";
import SupabaseCard from "@/components/Cards/Supabase";
import TypescriptCard from "@/components/Cards/TypeScript";
import NextUICard from "@/components/Cards/NextUI";
import NextCard from "@/components/Cards/NextJS";

const CardsPage = () => {
  return (
    <div className="flex my-5 space-x-7 flex-wrap jus">
      <NextCard />
      <TypescriptCard />
      <SupabaseCard />
      <NextUICard />
      <TailwindCard />
    </div>
  )
}

export default CardsPage;