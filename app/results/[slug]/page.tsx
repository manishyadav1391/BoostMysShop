import { notFound } from "next/navigation";

import { caseStudies } from "@/constants/results";

import CaseStudyHero from "@/components/results/CaseStudyHero";
import ProblemSolution from "@/components/results/ProblemSolution";
import MetricsSection from "@/components/results/MetricsSection";
import GallerySection from "@/components/results/GallerySection";
import TestimonialBlock from "@/components/results/TestimonialBlock";
import CaseStudyCTA from "@/components/results/CaseStudyCTA";

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const study = caseStudies.find(
        (item) => item.slug === slug
    );

    if (!study) {
        notFound();
    }

    return (
        <main className="pt-24 pb-24 px-5 space-y-16 bg-gray-50 min-h-screen">

            <CaseStudyHero study={study} />

            <ProblemSolution study={study} />

            <MetricsSection study={study} />

            <GallerySection study={study} />

            <TestimonialBlock study={study} />

            <CaseStudyCTA />

        </main>
    );
}