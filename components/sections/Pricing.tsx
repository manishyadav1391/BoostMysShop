"use client";

import { motion } from "framer-motion";
import { plans } from "@/constants/pricing";
import Link from "next/link";

export default function Pricing() {
    return (
        <section className="py-24 px-5 bg-black text-white relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1e1b4b_0%,_#000_65%)] opacity-60 z-0" />

            <div className="max-w-5xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 font-bold uppercase tracking-wider text-sm mb-3">No Surprises</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Transparent Pricing
                    </h2>
                    <p className="text-gray-400 text-lg">
                        No hidden charges. Cancel anytime.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            className={`rounded-3xl p-8 relative overflow-hidden transition-shadow hover:shadow-2xl
                                ${plan.featured
                                    ? "bg-indigo-600 text-white border border-indigo-400"
                                    : "bg-white text-gray-900 border border-gray-100"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 inset-x-0 text-center py-2 bg-indigo-400/30 text-white text-xs font-black uppercase tracking-widest border-b border-white/20">
                                    ⭐ Most Popular
                                </div>
                            )}

                            <div className={plan.featured ? "pt-6" : ""}>
                                <h3 className={`text-2xl font-black mb-2 ${plan.featured ? "text-white" : "text-gray-900"}`}>
                                    {plan.name}
                                </h3>

                                <div className="flex items-end gap-1 mb-6">
                                    <span className={`text-5xl font-black ${plan.featured ? "text-white" : "text-gray-900"}`}>
                                        ₹{plan.price.toLocaleString()}
                                    </span>
                                    <span className={`mb-2 text-sm ${plan.featured ? "text-indigo-200" : "text-gray-500"}`}>/month</span>
                                </div>

                                <ul className="mb-8 space-y-3">
                                    {plan.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                                                ${plan.featured ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>
                                                ✓
                                            </span>
                                            <span className={`text-sm ${plan.featured ? "text-indigo-100" : "text-gray-700"}`}>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/services">
                                    <motion.button
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        className={`w-full py-4 rounded-2xl font-bold text-base transition-colors
                                            ${plan.featured
                                                ? "bg-white text-indigo-700 hover:bg-indigo-50"
                                                : "bg-indigo-600 text-white hover:bg-indigo-700"
                                            }`}
                                    >
                                        {plan.cta ?? "Select Plan"}
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all plans link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <Link href="/services" className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 transition-colors">
                        View all plans including Premium →
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}