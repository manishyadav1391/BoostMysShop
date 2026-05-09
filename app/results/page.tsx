import ResultsHero from "@/components/results/ResultsHero";
import FilterChips from "@/components/results/FilterChips";
import FeaturedCaseStudy from "@/components/results/FeaturedCaseStudy";
import VideoTestimonial from "@/components/results/VideoTestimonial";
import QuickWinsGrid from "@/components/results/QuickWinsGrid";
import IndustryBenchmarks from "@/components/results/IndustryBenchmarks";
import ResultsCTA from "@/components/results/ResultsCTA";

export default function ResultsPage() {
    return (
        <main className="pt-24 pb-24 px-5 space-y-16 bg-gray-50 min-h-screen">

            <ResultsHero />

            <FilterChips />

            <FeaturedCaseStudy />

            <VideoTestimonial />

            <QuickWinsGrid />

            <IndustryBenchmarks />

            <ResultsCTA />

        </main>
    );
}