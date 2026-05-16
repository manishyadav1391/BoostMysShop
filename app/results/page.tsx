import ResultsHero from "@/components/results/ResultsHero";
import FilterChips from "@/components/results/FilterChips";
import FeaturedCaseStudy from "@/components/results/FeaturedCaseStudy";
import VideoTestimonial from "@/components/results/VideoTestimonial";
import QuickWinsGrid from "@/components/results/QuickWinsGrid";
import IndustryBenchmarks from "@/components/results/IndustryBenchmarks";
import ResultsCTA from "@/components/results/ResultsCTA";

export default function ResultsPage() {
    return (
        <main className="bg-gray-50 min-h-screen overflow-x-hidden">

            {/* Full-width hero */}
            <ResultsHero />

            {/* Padded content area */}
            <div className="px-5 py-16 space-y-20 max-w-7xl mx-auto">

                <FilterChips />

                <FeaturedCaseStudy />

                <VideoTestimonial />

                <QuickWinsGrid />

                <IndustryBenchmarks />

                <ResultsCTA />

            </div>
        </main>
    );
}