"use client";

import { motion } from "framer-motion";

const benchmarks = [
    {
        title: "Restaurants",
        growth: "40%",
        icon: "🍽️",
        color: "bg-orange-500",
        pct: 75,
        desc: "Avg monthly footfall increase"
    },
    {
        title: "Service Centers",
        growth: "35%",
        icon: "🔧",
        color: "bg-indigo-500",
        pct: 65,
        desc: "Avg booking increase"
    },
    {
        title: "Retail Stores",
        growth: "25–30%",
        icon: "🛒",
        color: "bg-green-500",
        pct: 55,
        desc: "Avg revenue growth"
    },
    {
        title: "Apparel",
        growth: "15–20%",
        icon: "👗",
        color: "bg-pink-500",
        pct: 40,
        desc: "Avg walk-in increase"
    },
];

export default function IndustryBenchmarks() {
    return (
        <section className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Industry Data</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    Typical Growth by Industry
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    Based on average results across our clients in Gujarat.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {benchmarks.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        className="bg-white rounded-3xl p-6 shadow-md border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                            <div className="ml-auto text-3xl font-black text-indigo-700">{item.growth}</div>
                        </div>

                        {/* Progress bar */}
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                                className={`h-full rounded-full ${item.color}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}