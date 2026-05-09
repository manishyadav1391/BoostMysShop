export default function MathSection() {
    return (
        <section className="py-20 px-5 bg-gray-50">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">
                        The Simple Math
                    </h2>

                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow mb-4">
                        <p className="text-sm text-gray-500 mb-2 uppercase">
                            Daily Exposure
                        </p>

                        <div className="flex justify-between items-center">
                            <span className="text-green-500 text-2xl font-bold">
                                ₹200/day
                            </span>
                            <span className="text-xl">→</span>
                            <span className="text-xl font-semibold">
                                2,000 People
                            </span>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            People in your area see your shop daily
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-sm text-gray-500 mb-2 uppercase">
                            Monthly Comparison
                        </p>

                        <div className="flex justify-between">
                            <span>Big Apps Spend</span>
                            <span className="text-red-500 font-bold">Lakhs</span>
                        </div>

                        <div className="flex justify-between mt-2">
                            <span>You Spend</span>
                            <span className="text-green-500 font-bold">₹6,000</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT (Visual Placeholder) */}
                <div className="bg-green-100 h-80 rounded-full flex items-center justify-center">
                    <span className="font-bold text-green-700">
                        Your Shop Reach Area
                    </span>
                </div>

            </div>
        </section>
    );
}