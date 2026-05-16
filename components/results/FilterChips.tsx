"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const filters = [
    { label: "All", emoji: "✨" },
    { label: "Kirana", emoji: "🛒" },
    { label: "Boutique", emoji: "👗" },
    { label: "Electronics", emoji: "📱" },
    { label: "Restaurant", emoji: "🍽️" },
];

export default function FilterChips() {
    const [active, setActive] = useState("All");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 py-4"
        >
            {filters.map((filter) => (
                <motion.button
                    key={filter.label}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(filter.label)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 border
                        ${active === filter.label
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                            : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                        }`}
                >
                    <span>{filter.emoji}</span>
                    {filter.label}
                </motion.button>
            ))}
        </motion.div>
    );
}