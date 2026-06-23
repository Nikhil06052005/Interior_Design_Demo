import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Founder } from "@/components/sections/Founder";
import { PortfolioTeaser } from "@/components/sections/PortfolioTeaser";
import { LeadCTA } from "@/components/sections/LeadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Founder />
      <PortfolioTeaser />
      <LeadCTA />
    </>
  );
}
