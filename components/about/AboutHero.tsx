"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="bg-black text-white pt-28 pb-24 px-5 text-center relative overflow-hidden">

            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#000_70%)] opacity-80 z-0" />

            <div className="max-w-4xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
                >
                    <span className="text-sm uppercase tracking-widest text-indigo-300">
                        About BoostMyShop
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-5xl md:text-6xl font-black leading-tight mb-6"
                >
                    Helping Local Shops{" "}
                    <span className="text-indigo-400">Win Again</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                    Built in Gujarat for local businesses
                    who want real customers, not vanity metrics.
                </motion.p>

            </div>
        </section>
    );
}