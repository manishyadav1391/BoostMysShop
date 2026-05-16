"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "50+", label: "Shops Helped" },
    { value: "₹25L+", label: "Revenue Generated" },
    { value: "4.1x", label: "Avg. ROI" },
    { value: "10+", label: "Cities in Gujarat" },
];

export default function ResultsHero() {
    return (
        <section className="bg-black text-white pt-28 pb-24 px-5 text-center relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#000_65%)] opacity-80 z-0" />

            <div className="max-w-5xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm uppercase tracking-widest text-green-300">Real Results. Real Shops.</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-5xl md:text-7xl font-black leading-tight mb-6"
                >
                    Success Stories From{" "}
                    <span className="text-indigo-400">Gujarat</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    See how local kirana stores, salons, and restaurants are beating
                    big apps with AI-powered neighborhood marketing.
                </motion.p>

                {/* Stats bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                        >
                            <div className="text-3xl font-black text-indigo-300 mb-1">{s.value}</div>
                            <div className="text-gray-400 text-sm">{s.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}