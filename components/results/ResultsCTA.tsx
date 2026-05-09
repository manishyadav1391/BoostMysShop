import LeadForm from "@/components/forms/LeadForm";

export default function ResultsCTA() {
    return (
        <section className="text-center bg-orange-50 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Want These Results For Your Shop?
            </h2>

            <p className="text-gray-600 mb-8">
                Speak to our team today.
            </p>

            <LeadForm />
        </section>
    );
}