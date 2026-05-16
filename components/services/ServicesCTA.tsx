"use client";

import LeadForm from "@/components/forms/LeadForm";
import { motion } from "framer-motion";

export default function ServicesCTA() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-indigo-900 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-800 to-indigo-900 opacity-50 z-0"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-6"
                >
                    Ready to Double Your Sales?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 text-xl text-indigo-200"
                >
                    Speak to an expert today and learn how we can grow your shop.
                </motion.p>

                <LeadForm />
            </div>
        </motion.section>
    );
}