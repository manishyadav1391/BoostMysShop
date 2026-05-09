import LeadForm from "@/components/forms/LeadForm";

export default function AboutCTA() {
    return (
        <section className="py-20 px-5 bg-orange-50">

            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-5xl font-black mb-4">
                    Let’s Grow Your Shop Together
                </h2>

                <p className="text-gray-600 text-lg mb-10">
                    Speak directly with our team on WhatsApp.
                </p>

                <LeadForm />

            </div>
        </section>
    );
}