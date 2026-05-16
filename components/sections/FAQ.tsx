"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        q: "Will this work for a small shop?",
        a: "Yes, we target only 1–2km around your shop so every rupee is effective. Even a small kirana can see 30–40% more customers in the first month.",
    },
    {
        q: "I don't know technology",
        a: "You don't need to. If you can use WhatsApp, you're ready. We handle all the content creation, ad running, and reporting for you.",
    },
    {
        q: "How do I track results?",
        a: "Customers will mention your ad when they visit. You'll also get a weekly report showing reach, clicks, and how many people saw your ad.",
    },
    {
        q: "What if I don't see results?",
        a: "We offer a 5-Customer Guarantee. If at least 5 customers don't mention your ad in the first month, we refund our management fee — no questions asked.",
    },
    {
        q: "How long does it take to start?",
        a: "Ads go live within 4 days of signing up. Day 1 is onboarding, Day 2–3 is content creation, and Day 4 your campaign is live.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-24 px-5 bg-gray-50">
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Got Questions?</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                        Common Questions
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ delay: i * 0.08 }}
                            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                                ${open === i ? "border-indigo-200 shadow-lg shadow-indigo-50" : "border-gray-100 shadow-sm hover:shadow-md"}`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left gap-4"
                            >
                                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                                <motion.span
                                    animate={{ rotate: open === i ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`text-2xl font-light flex-shrink-0 ${open === i ? "text-indigo-600" : "text-gray-400"}`}
                                >
                                    +
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}