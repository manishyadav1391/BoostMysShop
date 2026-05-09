import { plans } from "@/constants/pricing";

export default function Pricing() {
    return (
        <section className="py-20 px-5 bg-black text-white">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-6">
                    Transparent Pricing
                </h2>

                <p className="text-gray-400 mb-10">
                    No hidden charges. Cancel anytime.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className="bg-white text-black p-8 rounded-xl"
                        >
                            <h3 className="text-xl font-bold mb-4">
                                {plan.name}
                            </h3>

                            <p className="text-3xl font-bold mb-6">
                                ₹{plan.price}/month
                            </p>

                            <ul className="mb-6 space-y-2 text-left">
                                {plan.features.map((f, idx) => (
                                    <li key={idx}>✔ {f}</li>
                                ))}
                            </ul>

                            <button className="w-full bg-black text-white py-3 rounded-lg">
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}