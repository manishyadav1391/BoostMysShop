import { pricingPlans } from "@/constants/services";

export default function PricingCards() {
    return (
        <section className="grid lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
                <div
                    key={i}
                    className={`rounded-2xl p-6 bg-white shadow-lg border relative
          ${plan.featured
                            ? "border-indigo-600 scale-105"
                            : "border-gray-200"
                        }`}
                >
                    {/* Badge */}
                    {plan.featured && (
                        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold">
                            RECOMMENDED
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2">
                        {plan.name}
                    </h3>

                    <p className="text-gray-500 mb-6">
                        {plan.label}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                        <span className="text-4xl font-bold">
                            ₹{plan.price}
                        </span>

                        <span className="text-gray-500">
                            /month
                        </span>
                    </div>

                    {/* Ad Spend */}
                    <div className="bg-indigo-50 p-3 rounded-lg mb-6">
                        <p className="font-semibold text-indigo-900">
                            ₹{plan.adSpend} ad spend included
                        </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-2"
                            >
                                <span className="text-green-500">✔</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <button
                        className={`w-full py-4 rounded-xl font-semibold transition
            ${plan.featured
                                ? "bg-indigo-600 text-white"
                                : "bg-black text-white"
                            }`}
                    >
                        {plan.cta}
                    </button>
                </div>
            ))}
        </section>
    );
}