import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { RoomCategories } from "@/components/sections/RoomCategories";

const WhyChooseUs = dynamic(
  () => import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs)
);
const EndToEndServices = dynamic(
  () => import("@/components/sections/EndToEndServices").then((m) => m.EndToEndServices)
);
const Process = dynamic(
  () => import("@/components/sections/Process").then((m) => m.Process)
);
const Portfolio = dynamic(
  () => import("@/components/sections/Portfolio").then((m) => m.Portfolio)
);
const BeforeAfterSection = dynamic(
  () => import("@/components/sections/BeforeAfterSection").then((m) => m.BeforeAfterSection)
);
const Founder = dynamic(
  () => import("@/components/sections/Founder").then((m) => m.Founder)
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((m) => m.Testimonials)
);
const InstagramFeed = dynamic(
  () => import("@/components/sections/InstagramFeed").then((m) => m.InstagramFeed)
);
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const LeadCTA = dynamic(
  () => import("@/components/sections/LeadCTA").then((m) => m.LeadCTA)
);

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
