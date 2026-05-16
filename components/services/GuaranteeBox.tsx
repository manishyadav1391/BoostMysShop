"use client";

import { motion } from "framer-motion";

const guaranteePoints = [
    { icon: "✅", text: "If 5 customers don't mention your ad in Month 1" },
    { icon: "💰", text: "We refund your full management fee" },
    { icon: "🤝", text: "No questions asked — 100% transparent" },
];

export default function GuaranteeBox() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl"
        >
            {/* Decorative background circle */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5 z-0" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5 z-0" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-white/20 border border-white/30 rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        🛡️ Our Promise To You
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                        The 5-Customer<br />Guarantee
                    </h2>

                    <p className="text-green-100 text-lg leading-relaxed">
                        We're so confident in our results, we back every plan with a
                        money-back guarantee.
                    </p>
                </div>

                {/* Right: Points */}
                <div className="space-y-4">
                    {guaranteePoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-start gap-4 bg-white/10 border border-white/20 rounded-2xl p-4"
                        >
                            <span className="text-2xl">{point.icon}</span>
                            <p className="text-white font-medium">{point.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}