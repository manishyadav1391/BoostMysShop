"use client";

import { motion } from "framer-motion";

const addOns = [
    {
        name: "Photoshoot",
        price: "₹3,000",
    },
    {
        name: "WhatsApp Setup",
        price: "₹1,500",
    },
    {
        name: "Google My Business",
        price: "₹2,000",
    },
];

export default function AddOns() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 max-w-4xl mx-auto"
        >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Optional Add-Ons
            </h3>

            <div className="space-y-4">
                {addOns.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="flex justify-between items-center bg-gray-50 hover:bg-indigo-50 transition-colors p-5 rounded-2xl cursor-default"
                    >
                        <span className="text-lg font-medium text-gray-700">{item.name}</span>
                        <span className="font-bold text-indigo-700 text-lg bg-indigo-100 px-4 py-1 rounded-full">
                            {item.price}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}