import ServicesHero from "@/components/services/ServicesHero";
import PricingCards from "@/components/services/PricingCards";
import GuaranteeBox from "@/components/services/GuaranteeBox";
import IncludedFeatures from "@/components/services/IncludedFeatures";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import AddOns from "@/components/services/AddOns";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <main className="pt-24 pb-24 px-5 space-y-16 bg-gray-50 min-h-screen">

            <ServicesHero />

            <PricingCards />

            <GuaranteeBox />

            <IncludedFeatures />

            <ProcessTimeline />

            <AddOns />

            <ServicesCTA />

        </main>
    );
}