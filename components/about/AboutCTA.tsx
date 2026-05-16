"use client";

import LeadForm from "@/components/forms/LeadForm";
import { motion } from "framer-motion";

export default function AboutCTA() {
    return (
        <section className="py-24 px-5 bg-orange-50 relative overflow-hidden">

            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30 z-0" />

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-black mb-4 text-gray-900"
                >
                    Let's Grow Your Shop Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-gray-600 text-xl mb-12"
                >
                    Speak directly with our team on WhatsApp.
                </motion.p>

                <LeadForm />

            </div>
        </section>
    );
}