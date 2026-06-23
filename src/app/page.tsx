import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { RoomCategories } from "@/components/sections/RoomCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EndToEndServices } from "@/components/sections/EndToEndServices";
import { Process } from "@/components/sections/Process";
import { Founder } from "@/components/sections/Founder";
import { PortfolioTeaser } from "@/components/sections/PortfolioTeaser";
import { LeadCTA } from "@/components/sections/LeadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <RoomCategories />
      <WhyChooseUs />
      <EndToEndServices />
      <Process />
      <Founder />
      <PortfolioTeaser />
      <LeadCTA />
    </>
  );
}
