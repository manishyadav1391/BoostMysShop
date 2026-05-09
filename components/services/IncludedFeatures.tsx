
const features = [
    "AI Content Creation",
    "Vertical Reels",
    "Hindi/Gujarati Ads",
    "Tracking Dashboard",
    "Monthly Strategy Calls",
];

export default function IncludedFeatures() {
    return (
        <section className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">
                Included In Every Plan
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 rounded-xl shadow-sm"
                    >
                        ✔ {feature}
                    </div>
                ))}
            </div>
        </section>
    );
}