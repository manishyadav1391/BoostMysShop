"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { createLead } from "@/hooks/useLead";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function LeadForm() {
    const pathname = usePathname(); // ✅ safe

    const [form, setForm] = useState({
        name: "",
        phone: "",
        shop: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!form.phone) {
            alert("Phone required");
            return;
        }

        setLoading(true);

        await createLead({
            ...form,
            source: pathname, // ✅ clean
        });

        setLoading(false);

        openWhatsApp(form);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto border border-gray-100"
        >
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Start Growing Today
                </h2>
                <p className="text-gray-500 text-sm">
                    Enter your details to get customers for your shop.
                </p>
            </div>

            <div className="space-y-4">
                <input
                    placeholder="Your Name"
                    className="w-full border border-gray-200 bg-gray-50 p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    }
                />

                <input
                    placeholder="Phone Number"
                    type="tel"
                    className="w-full border border-gray-200 bg-gray-50 p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                    }
                />

                <input
                    placeholder="Shop Name"
                    className="w-full border border-gray-200 bg-gray-50 p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    onChange={(e) =>
                        setForm({ ...form, shop: e.target.value })
                    }
                />

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-colors mt-2"
                >
                    {loading ? "Sending..." : "Get Started"}
                </motion.button>
            </div>
        </motion.div>
    );
}