"use client";

import LeadForm from "@/components/forms/LeadForm";
import { motion } from "framer-motion";

const proof = [
    { icon: "🏪", text: "50+ Shops Across Gujarat" },
    { icon: "📈", text: "4.1x Average ROI" },
    { icon: "🛡️", text: "5-Customer Money-Back Guarantee" },
    { icon: "⚡", text: "Results in 3 Days" },
];

export default function CTA() {
    return (
        <section className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-black z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#4f46e5_0%,_transparent_60%)] opacity-40 z-0" />

            <div className="relative z-10 px-5 py-20 md:py-28 max-w-5xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 text-sm font-semibold uppercase tracking-wider">
                        Free Consultation — No Commitment
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
                >
                    Start Your{" "}
                    <span className="text-indigo-300">₹200/Day</span>{" "}
                    Growth Today
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-indigo-200 text-xl mb-10"
                >
                    Join 50+ local shops that are beating quick-commerce with hyper-local ads.
                </motion.p>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {proof.map((p, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm"
                        >
                            <span>{p.icon}</span>
                            <span>{p.text}</span>
                        </div>
                    ))}
                </motion.div>

                <LeadForm />

            </div>
        </section>
    );
}