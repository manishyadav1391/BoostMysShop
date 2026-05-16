"use client";

import { motion } from "framer-motion";

const features = [
    { icon: "🤖", title: "AI Content Creation", desc: "Reels and Stories made automatically from your products" },
    { icon: "📱", title: "Vertical Reels", desc: "Short-form videos that grab attention in the feed" },
    { icon: "🗣️", title: "Hindi/Gujarati Ads", desc: "Local language ads that connect with your customers" },
    { icon: "📊", title: "Tracking Dashboard", desc: "See live results — reach, clicks, and walk-ins" },
    { icon: "📞", title: "Monthly Strategy Calls", desc: "Regular check-ins to review and improve your campaign" },
    { icon: "💬", title: "WhatsApp Support", desc: "Message us anytime — we reply within hours" },
];

export default function IncludedFeatures() {
    return (
        <section className="max-w-6xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Every Plan Includes</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    What You Always Get
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    No matter which plan you choose, these are standard.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true, margin: "-20px" }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                    >
                        <div className="text-3xl mb-4">{feature.icon}</div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}