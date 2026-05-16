"use client";

import { founder } from "@/constants/about";
import { motion } from "framer-motion";

export default function CoverageArea() {
    return (
        <section className="py-24 px-5 bg-white">

            <div className="max-w-5xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-4"
                >
                    Where We Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-gray-600 text-lg mb-14"
                >
                    We prefer meeting shop owners in person.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6">

                    {founder.cities.map((city, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            className="bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 p-10 rounded-3xl transition-colors"
                        >

                            <div className="text-3xl mb-3">📍</div>

                            <h3 className="text-2xl font-bold mb-2 text-gray-900">
                                {city}
                            </h3>

                            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                                Active Local Support
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}