const benchmarks = [
    {
        title: "Retail Stores",
        growth: "25-30%",
    },

    {
        title: "Restaurants",
        growth: "40%",
    },

    {
        title: "Apparel",
        growth: "15-20%",
    },

    {
        title: "Service Centers",
        growth: "35%",
    },
];

export default function IndustryBenchmarks() {
    return (
        <section className="bg-blue-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
                Typical Growth
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

                {benchmarks.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-2xl text-center shadow"
                    >
                        <div className="text-3xl font-bold text-blue-900 mb-2">
                            {item.growth}
                        </div>

                        <p className="text-gray-600">
                            {item.title}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}