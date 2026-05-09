import LeadForm from "@/components/forms/LeadForm";

export default function FAQCTA() {
    return (
        <section className="py-20 px-5 bg-black text-white">

            <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-10 text-center">

                <h2 className="text-5xl font-black mb-4">
                    Still Have Questions?
                </h2>

                <p className="text-gray-300 text-lg mb-10">
                    Speak directly with us on WhatsApp.
                </p>

                <LeadForm />

            </div>
        </section>
    );
}