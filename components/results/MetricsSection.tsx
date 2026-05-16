"use client";

import { motion } from "framer-motion";

const metricConfig = [
    { key: "revenue", icon: "💰", label: "Revenue", color: "from-green-500 to-emerald-600", bg: "bg-green-50", border: "border-green-200", text: "text-green-700" },
    { key: "customers", icon: "👥", label: "New Customers", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700" },
    { key: "reach", icon: "📡", label: "Total Reach", color: "from-orange-500 to-amber-600", bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700" },
    { key: "roi", icon: "📈", label: "ROI Achieved", color: "from-purple-500 to-violet-600", bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700" },
];

export default function MetricsSection({ study }: any) {
    const metrics = study.metrics;

    return (
        <section>

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">By The Numbers</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    Campaign Results
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {metricConfig.map((m, i) => (
                    <motion.div
                        key={m.key}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        whileHover={{ y: -6 }}
                        className={`${m.bg} border ${m.border} rounded-3xl p-6 text-center hover:shadow-xl transition-all duration-300`}
                    >
                        {/* Icon */}
                        <div className="text-3xl mb-3">{m.icon}</div>

                        {/* Value */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className={`text-3xl font-black ${m.text} mb-1`}
                        >
                            {metrics[m.key]}
                        </motion.div>

                        {/* Label */}
                        <p className="text-gray-500 text-sm font-medium">{m.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}