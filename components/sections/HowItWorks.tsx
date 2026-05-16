"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        icon: "📸",
        title: "Send Content",
        desc: "Just send photos or videos of your products from your phone via WhatsApp. That's all you do.",
        color: "bg-indigo-600",
        accent: "border-indigo-200 bg-indigo-50",
    },
    {
        number: "02",
        icon: "🤖",
        title: "We Run Ads",
        desc: "Our AI creates professional reels & stories. We target every home within 2km of your shop.",
        color: "bg-orange-500",
        accent: "border-orange-200 bg-orange-50",
    },
    {
        number: "03",
        icon: "🛍️",
        title: "Get Customers",
        desc: "People visit your shop saying 'I saw your ad on Instagram'. Real customers, real footfall.",
        color: "bg-green-600",
        accent: "border-green-200 bg-green-50",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 px-5 bg-gray-50">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-3">Dead Simple Process</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        How It{" "}
                        <span className="text-indigo-600">Works</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        No tech knowledge. No agency meetings. Just 3 simple steps.
                    </p>
                </motion.div>

                {/* Steps grid */}
                <div className="grid md:grid-cols-3 gap-8 relative">

                    {/* Connecting dashes on desktop */}
                    <div className="hidden md:block absolute top-14 left-[33%] right-[33%] border-t-2 border-dashed border-gray-300 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="relative flex flex-col items-center text-center z-10"
                        >
                            {/* Number + Icon circle */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`w-28 h-28 rounded-3xl ${step.color} flex flex-col items-center justify-center mb-6 shadow-lg text-white relative`}
                            >
                                <span className="text-3xl mb-1">{step.icon}</span>
                                <span className="text-xs font-black opacity-70">{step.number}</span>

                                {/* Pulsing ring on first step */}
                                {i === 0 && (
                                    <motion.div
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 rounded-3xl border-4 border-indigo-400"
                                    />
                                )}
                            </motion.div>

                            <h3 className="text-2xl font-black text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom trust line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-wrap justify-center gap-6 text-center"
                >
                    {[
                        { icon: "⚡", text: "Ads live in 4 days" },
                        { icon: "📊", text: "Weekly reports" },
                        { icon: "💬", text: "WhatsApp support" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100 text-gray-700 font-semibold">
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}