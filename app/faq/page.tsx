import FAQHero from "@/components/faq/FAQHero";
import FAQSearch from "@/components/faq/FAQSearch";
import FAQSupportBanner from "@/components/faq/FAQSupportBanner";
import FAQCategories from "@/components/faq/FAQCategories";
import FAQCTA from "@/components/faq/FAQCTA";

export default function FAQPage() {
    return (
        <main className="bg-white min-h-screen">

            <FAQHero />

            <FAQSearch />

            <FAQSupportBanner />

            <FAQCategories />

            <FAQCTA />

        </main>
    );
}