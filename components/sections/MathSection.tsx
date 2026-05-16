"use client";

import { motion } from "framer-motion";

const mathCards = [
    {
        label: "Daily Exposure",
        left: { value: "₹200", sub: "per day" },
        arrow: "→",
        right: { value: "2,000", sub: "People see your shop" },
        color: "border-green-300",
        highlight: "text-green-600",
    },
    {
        label: "Monthly Comparison",
        rows: [
            { name: "Big apps spend", value: "₹ Lakhs", red: true },
            { name: "You spend", value: "₹6,000", green: true },
        ],
    },
];

const radiusStats = [
    { icon: "📍", value: "1–2 km", label: "Local Targeting Radius" },
    { icon: "👥", value: "2,000+", label: "Daily People Reached" },
    { icon: "💰", value: "₹200", label: "Per Day Investment" },
];

export default function MathSection() {
    return (
        <section className="py-24 px-5 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-3">The Numbers Don't Lie</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        The Simple{" "}
                        <span className="text-indigo-600">Math</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Spend less than a cup of chai per hour. Reach your entire neighbourhood.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT — Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-5"
                    >
                        {/* Card 1 — Daily Exposure */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Daily Exposure</p>
                            <div className="flex items-center justify-between gap-4">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-indigo-600">₹200</div>
                                    <div className="text-gray-500 text-sm mt-1">per day</div>
                                </div>
                                <motion.div
                                    animate={{ x: [0, 6, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="text-3xl text-gray-300"
                                >
                                    →
                                </motion.div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-green-600">2,000+</div>
                                    <div className="text-gray-500 text-sm mt-1">People see your shop</div>
                                </div>
                            </div>
                            <div className="mt-4 bg-green-50 rounded-2xl px-4 py-2 text-green-700 text-sm font-semibold text-center">
                                📍 People within 2km of your shop
                            </div>
                        </motion.div>

                        {/* Card 2 — Monthly Comparison */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Monthly Comparison</p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-red-50 rounded-2xl border border-red-100">
                                    <span className="text-gray-700 font-medium">Big Apps Spend</span>
                                    <span className="text-red-600 font-black text-lg">₹ Lakhs</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-2xl border border-green-200">
                                    <span className="text-gray-700 font-medium">You Spend</span>
                                    <span className="text-green-600 font-black text-lg">₹6,000</span>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-gray-500 text-sm">
                                Same neighbourhood. 
                                <span className="text-indigo-600 font-bold"> 100x less cost.</span>
                            </div>
                        </motion.div>

                        {/* Mini stat pills */}
                        <div className="grid grid-cols-3 gap-3">
                            {radiusStats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100"
                                >
                                    <div className="text-2xl mb-1">{s.icon}</div>
                                    <div className="font-black text-gray-900 text-sm">{s.value}</div>
                                    <div className="text-gray-400 text-xs">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Map image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Pulsing rings behind the circle */}
                        <motion.div
                            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="absolute w-80 h-80 rounded-full border-2 border-indigo-300"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            className="absolute w-80 h-80 rounded-full border-2 border-indigo-200"
                        />

                        {/* Circular image */}
                        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                            <img
                                src="/images/radius-map.jpg"
                                alt="2km radius targeting map"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm whitespace-nowrap z-20"
                        >
                            📍 2km Hyper-Local Targeting
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}