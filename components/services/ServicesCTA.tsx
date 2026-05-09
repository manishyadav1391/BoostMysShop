import LeadForm from "@/components/forms/LeadForm";

export default function ServicesCTA() {
    return (
        <section className="bg-indigo-900 rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
                Ready to Double Your Sales?
            </h2>

            <p className="mb-8 text-indigo-200">
                Speak to an expert today.
            </p>

            <LeadForm />
        </section>
    );
}