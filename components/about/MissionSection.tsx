"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
    return (
        <section className="py-24 px-5 bg-black text-white relative overflow-hidden">

            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#312e81_0%,_#000_65%)] opacity-60 z-0" />

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-6 text-indigo-300 text-sm tracking-widest uppercase"
                >
                    Our Mission
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-5xl md:text-6xl font-black leading-tight mb-8"
                >
                    Technology Should Empower{" "}
                    <span className="text-indigo-400">Local Businesses</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl text-gray-300 leading-relaxed"
                >
                    We believe small businesses deserve the same
                    digital power as large brands —
                    without expensive agencies or complicated systems.
                </motion.p>

            </div>
        </section>
    );
}