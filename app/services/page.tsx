import ServicesHero from "@/components/services/ServicesHero";
import PricingCards from "@/components/services/PricingCards";
import GuaranteeBox from "@/components/services/GuaranteeBox";
import IncludedFeatures from "@/components/services/IncludedFeatures";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import AddOns from "@/components/services/AddOns";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <main className="bg-gray-50 min-h-screen overflow-x-hidden">

            {/* Full-width hero */}
            <ServicesHero />

            {/* Padded content area */}
            <div className="px-5 py-16 space-y-24 max-w-7xl mx-auto">

                <PricingCards />

                <GuaranteeBox />

                <IncludedFeatures />

                <ProcessTimeline />

                <AddOns />

                <ServicesCTA />

            </div>
        </main>
    );
}