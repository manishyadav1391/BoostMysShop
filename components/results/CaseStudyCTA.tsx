import LeadForm from "@/components/forms/LeadForm";

export default function CaseStudyCTA() {
    return (
        <section className="bg-orange-50 p-10 rounded-3xl text-center">

            <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Want Similar Results?
            </h2>

            <p className="text-gray-600 mb-8">
                Let’s grow your local business next.
            </p>

            <LeadForm />

        </section>
    );
}