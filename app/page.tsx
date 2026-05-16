
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import MathSection from "@/components/sections/MathSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";

import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import HeroSlider from "@/components/sections/HeroSlider/HeroSlider";

export default function Home() {
  return (
    <main className="pt-16 pb-20">
      <HeroSlider />
      <TrustStrip />
      <Problem />
      <MathSection />
      <HowItWorks />
      <Pricing />

      <FAQ />
      <CTA />
    </main>
  );
}