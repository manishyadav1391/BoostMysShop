"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudyHero({ study }: any) {
    return (
        <section className="bg-black text-white pt-28 pb-16 px-5 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1e1b4b_0%,_#000_65%)] opacity-80 z-0" />

            <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT — Text */}
                <div>
                    {/* Breadcrumb badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
                    >
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                        {study.type} Success Story
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.12 }}
                        className="text-5xl md:text-6xl font-black leading-tight mb-4"
                    >
                        {study.shop}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.22 }}
                        className="text-gray-400 text-xl mb-8 flex items-center gap-2"
                    >
                        📍 {study.location}
                    </motion.p>

                    {/* Result highlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-3xl p-6"
                    >
                        <p className="text-green-400 text-xs font-black uppercase tracking-widest mb-2">🏆 Monthly Result</p>
                        <h2 className="text-4xl font-black text-white">{study.result}</h2>
                    </motion.div>
                </div>

                {/* RIGHT — Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Pulsing ring */}
                    <motion.div
                        animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 rounded-3xl border-2 border-indigo-500/40"
                    />

                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={study.images?.[0] ?? "/images/case-studies/kirana-1.jpg"}
                            alt={study.shop}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Floating type tag */}
                        <div className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-black uppercase px-3 py-1.5 rounded-xl">
                            {study.type}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}