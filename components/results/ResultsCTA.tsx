"use client";

import LeadForm from "@/components/forms/LeadForm";
import { motion } from "framer-motion";

const proof = [
    { icon: "🏪", text: "50+ Shops Across Gujarat" },
    { icon: "📈", text: "4.1x Average ROI" },
    { icon: "🛡️", text: "5-Customer Money-Back Guarantee" },
];

export default function ResultsCTA() {
    return (
        <section className="relative overflow-hidden rounded-3xl">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-black z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#4f46e5_0%,_transparent_60%)] opacity-40 z-0" />

            <div className="relative z-10 px-8 py-16 md:py-20 max-w-4xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 text-sm font-semibold uppercase tracking-wider">Available Now — Limited Slots</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
                >
                    Want These Results{" "}
                    <span className="text-indigo-300">For Your Shop?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-indigo-200 text-xl mb-8"
                >
                    Speak to our team today. Free consultation, no commitment required.
                </motion.p>

                {/* Trust proof */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {proof.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm">
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