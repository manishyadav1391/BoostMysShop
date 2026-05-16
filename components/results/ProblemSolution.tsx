"use client";

import { motion } from "framer-motion";

export default function ProblemSolution({ study }: any) {
    return (
        <section>

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">The Full Story</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    Problem & Solution
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">

                {/* Problem */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-red-50 border border-red-200 rounded-3xl p-8 relative overflow-hidden"
                >
                    {/* Watermark */}
                    <div className="absolute -right-4 -top-4 text-[100px] opacity-5 select-none">❌</div>

                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center text-xl">😟</div>
                        <h3 className="text-2xl font-black text-red-600">The Problem</h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">{study.problem}</p>
                </motion.div>

                {/* Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-indigo-50 border border-indigo-200 rounded-3xl p-8 relative overflow-hidden"
                >
                    {/* Watermark */}
                    <div className="absolute -right-4 -top-4 text-[100px] opacity-5 select-none">✅</div>

                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-xl">🚀</div>
                        <h3 className="text-2xl font-black text-indigo-700">Our Solution</h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">{study.solution}</p>
                </motion.div>

            </div>
        </section>
    );
}