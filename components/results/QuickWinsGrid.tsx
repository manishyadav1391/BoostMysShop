"use client";

import { caseStudies } from "@/constants/results";
import Link from "next/link";
import { motion } from "framer-motion";

// Emoji icons for shop types
const typeIcon: Record<string, string> = {
    Kirana: "🛒",
    Electronics: "📱",
    Boutique: "👗",
    Restaurant: "🍽️",
};

export default function QuickWinsGrid() {
    const quickWins = caseStudies.filter((item) => !item.featured);

    return (
        <section className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-end justify-between mb-10"
            >
                <div>
                    <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">More Success Stories</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                        Success Across Gujarat
                    </h2>
                </div>
                <span className="text-gray-400 text-sm hidden md:block">Scroll to explore →</span>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickWins.map((item, i) => (
                    <Link href={`/results/${item.slug}`} key={item.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow h-full flex flex-col justify-between"
                        >
                            {/* Top */}
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl">
                                        {typeIcon[item.type] ?? "🏪"}
                                    </div>
                                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">
                                        {item.type}
                                    </span>
                                </div>

                                <h3 className="text-xl font-black text-gray-900 mb-1">{item.shop}</h3>
                                <p className="text-gray-500 text-sm mb-4">📍 {item.location}</p>
                                <p className="text-gray-600 text-sm mb-6">{item.problem}</p>
                            </div>

                            {/* Result pill */}
                            <div className="flex items-center justify-between">
                                <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3">
                                    <div className="text-2xl font-black text-green-700">{item.result}</div>
                                    <div className="text-green-600 text-xs font-semibold">Monthly Result</div>
                                </div>
                                <span className="text-indigo-500 font-semibold text-sm">View Story →</span>
                            </div>
                        </motion.div>
                    </Link>
                ))}

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: quickWins.length * 0.12 }}
                    className="bg-indigo-600 rounded-3xl p-6 flex flex-col justify-between text-white"
                >
                    <div className="text-4xl mb-4">🚀</div>
                    <div>
                        <h3 className="text-2xl font-black mb-3">Your Shop Could Be Next</h3>
                        <p className="text-indigo-200 text-sm mb-6">Join shops across Gujarat that are beating quick commerce.</p>
                    </div>
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="w-full bg-white text-indigo-700 font-bold py-3 rounded-2xl"
                        >
                            See Plans →
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}