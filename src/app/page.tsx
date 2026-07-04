import { AnnouncementBar, Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { RealtimeDataSection } from "@/components/RealtimeDataSection";
import { GranularDataSection } from "@/components/GranularDataSection";
import { LiveMarketPulseSection } from "@/components/LiveMarketPulseSection";
import { AlgoriNewsSection } from "@/components/AlgoriNewsSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ImproveFmcgSection } from "@/components/ImproveFmcgSection";
import { SolutionsSection } from "@/components/SolutionsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <AnnouncementBar />
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <TrustedBySection />
        <RealtimeDataSection />
        <GranularDataSection />
        <LiveMarketPulseSection />
        <AlgoriNewsSection />
        <ValuesSection />
        <ImproveFmcgSection />
        <SolutionsSection />
      </main>
    </div>
  );
}
