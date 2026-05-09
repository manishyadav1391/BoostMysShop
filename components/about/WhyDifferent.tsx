import {
    MapPin,
    Languages,
    Store,
    TrendingUp,
} from "lucide-react";

const items = [
    {
        icon: MapPin,
        title: "We're Local",
        desc:
            "We understand Gujarat markets and local customer behavior.",
    },

    {
        icon: Languages,
        title: "Simple Communication",
        desc:
            "Hindi, Gujarati, and practical explanations. No jargon.",
    },

    {
        icon: Store,
        title: "Real Shop Visits",
        desc:
            "We visit stores personally to understand your business.",
    },

    {
        icon: TrendingUp,
        title: "Real Growth",
        desc:
            "We focus on customers and sales, not fake engagement.",
    },
];

export default function WhyDifferent() {
    return (
        <section className="py-20 px-5 bg-gray-50">

            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-black mb-4">
                        Why We’re Different
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Built for local businesses, not corporate brands.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {items.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-3xl shadow-sm border hover:shadow-xl transition"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}