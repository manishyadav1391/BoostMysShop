const steps = [
    {
        title: "Send Content",
        desc: "Just send photos/videos from your phone",
    },
    {
        title: "We Run Ads",
        desc: "We create and run ads for you",
    },
    {
        title: "Get Customers",
        desc: "People come saying 'I saw your ad'",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 px-5 bg-white text-center">
            <h2 className="text-3xl font-bold mb-12">
                How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                    <div key={i} className="p-6">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            {i + 1}
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                        </h3>

                        <p className="text-gray-600">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}