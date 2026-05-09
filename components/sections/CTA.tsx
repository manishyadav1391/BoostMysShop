import LeadForm from "@/components/forms/LeadForm";
export default function CTA() {
    return (
        <section className="py-20 px-5 text-center bg-green-50">
            <h2 className="text-3xl font-bold mb-4">
                Start Your ₹200/Day Growth Today
            </h2>

            <p className="text-gray-600 mb-8">
                Free consultation. No commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <a
                    href="https://wa.me/919408334733?text=Hi%20I%20want%20to%20grow%20my%20shop"
                    className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold"
                >
                    WhatsApp Now
                </a>

                <button className="bg-black text-white px-8 py-4 rounded-xl">
                    Book Free Call
                </button>

            </div>
            <div className="py-20 px-5 text-center bg-green-5000">
                <h2 className="text-3xl font-bold mb-6">
                    Start Growing Today
                </h2>

                <LeadForm />
            </div>

        </section>

    );
}