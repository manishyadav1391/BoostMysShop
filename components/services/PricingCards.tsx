"use client";

import { pricingPlans } from "@/constants/services";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingCards() {
    return (
        <section className="max-w-6xl mx-auto">

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Transparent Pricing</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    Pick the Plan That Fits Your Shop
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    No hidden fees. No long-term contracts. Cancel anytime.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6 items-center">
                {pricingPlans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ y: plan.featured ? -8 : -5 }}
                        className={`rounded-3xl overflow-hidden shadow-lg border relative transition-shadow hover:shadow-2xl
                            ${plan.featured
                                ? "border-indigo-500 bg-indigo-600 text-white scale-105"
                                : "border-gray-100 bg-white text-gray-900"
                            }`}
                    >
                        {/* Featured banner */}
                        {plan.featured && (
                            <div className="bg-indigo-400/30 text-white text-center py-2 text-xs font-black uppercase tracking-widest border-b border-white/20">
                                ⭐ Most Popular — Recommended
                            </div>
                        )}

                        <div className="p-8">
                            {/* Title + label */}
                            <div className="mb-6">
                                <h3 className={`text-2xl font-black mb-1 ${plan.featured ? "text-white" : "text-gray-900"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm font-medium ${plan.featured ? "text-indigo-200" : "text-gray-500"}`}>
                                    {plan.label}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6 flex items-end gap-1">
                                <span className={`text-5xl font-black ${plan.featured ? "text-white" : "text-gray-900"}`}>
                                    ₹{plan.price.toLocaleString()}
                                </span>
                                <span className={`mb-2 text-sm ${plan.featured ? "text-indigo-200" : "text-gray-500"}`}>/month</span>
                            </div>

                            {/* Ad Spend pill */}
                            <div className={`p-3 rounded-2xl mb-6 text-center text-sm font-semibold
                                ${plan.featured ? "bg-white/20 text-white" : "bg-indigo-50 text-indigo-800"}`}>
                                💰 ₹{plan.adSpend.toLocaleString()} ad spend included
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                                            ${plan.featured ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>
                                            ✓
                                        </span>
                                        <span className={`text-sm ${plan.featured ? "text-indigo-100" : "text-gray-700"}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className={`w-full py-4 rounded-2xl font-bold text-base transition-colors
                                        ${plan.featured
                                            ? "bg-white text-indigo-700 hover:bg-indigo-50"
                                            : "bg-indigo-600 text-white hover:bg-indigo-700"
                                        }`}
                                >
                                    {plan.cta ?? `Choose ${plan.name}`}
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}