import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { RoomCategories } from "@/components/sections/RoomCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EndToEndServices } from "@/components/sections/EndToEndServices";
import { Process } from "@/components/sections/Process";
import { Founder } from "@/components/sections/Founder";
import { Portfolio } from "@/components/sections/Portfolio";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { FAQ } from "@/components/sections/FAQ";
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
      <Portfolio />
      <BeforeAfterSection />
      <Founder />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <LeadCTA />
    </>
  );
}
