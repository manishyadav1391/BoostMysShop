"use client";

import { motion } from "framer-motion";

export default function TestimonialBlock({ study }: any) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-black z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4f46e5_0%,_transparent_60%)] opacity-40 z-0" />

            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 text-[120px] font-black text-white/5 leading-none select-none z-0">"</div>

            <div className="relative z-10 px-8 py-14 md:px-14 md:py-16 text-center">

                {/* Stars */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-yellow-400 text-2xl tracking-widest mb-6"
                >
                    ★★★★★
                </motion.div>

                {/* Quote */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl md:text-3xl text-white font-semibold italic leading-relaxed max-w-4xl mx-auto mb-10"
                >
                    "{study.testimonial}"
                </motion.p>

                {/* Owner */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.28 }}
                    className="flex items-center justify-center gap-4"
                >
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-black text-xl">
                        {study.owner?.[0] ?? "O"}
                    </div>

                    <div className="text-left">
                        <h3 className="text-white font-black text-lg">{study.owner}</h3>
                        <p className="text-indigo-300 text-sm">Owner, {study.shop}</p>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
}