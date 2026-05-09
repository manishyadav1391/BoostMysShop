const faqs = [
    {
        q: "Will this work for a small shop?",
        a: "Yes, we target only 1–2km around your shop so every rupee is effective.",
    },
    {
        q: "I don’t know technology",
        a: "You don’t need to. If you can use WhatsApp, you're ready.",
    },
    {
        q: "How do I track results?",
        a: "Customers will mention your ad + weekly reports provided.",
    },
];

export default function FAQ() {
    return (
        <section className="py-20 px-5 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">
                Common Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                    <details
                        key={i}
                        className="bg-white p-5 rounded-lg shadow cursor-pointer"
                    >
                        <summary className="font-semibold">
                            {faq.q}
                        </summary>
                        <p className="mt-3 text-gray-600">
                            {faq.a}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}