"use client";

import { motion } from "framer-motion";

const steps = [
    {
        day: "Day 1",
        title: "Onboarding",
        desc: "We call you, understand your shop, and set everything up.",
        icon: "👋",
    },
    {
        day: "Day 2–3",
        title: "AI Content Creation",
        desc: "Our AI creates reels and stories from your products.",
        icon: "🎬",
    },
    {
        day: "Day 4",
        title: "Ads Go Live",
        desc: "Your campaign goes live targeting people within 2km of your shop.",
        icon: "🚀",
    },
    {
        day: "Day 7",
        title: "First Report",
        desc: "You receive a clear report: reach, clicks, and enquiries.",
        icon: "📊",
    },
    {
        day: "Day 30",
        title: "Scale Review",
        desc: "We review what worked and plan the next month for more growth.",
        icon: "📈",
    },
];

export default function ProcessTimeline() {
    return (
        <section className="max-w-6xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Simple Process</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    Your 30-Day Launch Plan
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    From sign-up to your first customer — in under 4 days.
                </p>
            </motion.div>

            <div className="relative">
                {/* Connecting line on desktop */}
                <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-indigo-100 z-0" />

                <div className="grid lg:grid-cols-5 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Icon circle */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                className="w-20 h-20 rounded-2xl bg-white border-2 border-indigo-100 shadow-lg flex items-center justify-center text-3xl mb-4 relative z-10"
                            >
                                {step.icon}
                            </motion.div>

                            {/* Step number */}
                            <div className="absolute top-0 right-4 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center z-20">
                                {i + 1}
                            </div>

                            <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-1">{step.day}</p>
                            <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}