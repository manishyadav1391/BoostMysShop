import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import WhyDifferent from "@/components/about/WhyDifferent";
import MissionSection from "@/components/about/MissionSection";
import CoverageArea from "@/components/about/CoverageArea";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">

            <AboutHero />

            <FounderStory />

            <WhyDifferent />

            <MissionSection />

            <CoverageArea />

            <AboutCTA />

        </main>
    );
}