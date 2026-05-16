"use client";

import Image from "next/image";
import { caseStudies } from "@/constants/results";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedCaseStudy() {
    const featured = caseStudies.find((item) => item.featured);

    if (!featured) return null;

    return (
        <section className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1 rounded-full mb-3 uppercase tracking-wider">
                    ⭐ Featured Case Study
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    How One Shop Beat Blinkit
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 grid lg:grid-cols-2"
            >
                {/* Left: Image */}
                <div className="relative h-72 lg:h-auto min-h-[400px]">
                    <Image
                        src="/images/case-studies/kirana-1.jpg"
                        alt={featured.shop}
                        fill
                        className="object-cover"
                    />
                    {/* Image description: A bustling Indian kirana (grocery) store with colorful products on shelves, a shop owner smiling at the counter, warm lighting, authentic local feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />

                    {/* Floating badge on image */}
                    <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3">
                            <div className="text-3xl font-black text-green-600">{featured.result.split(" ")[0]}</div>
                            <div className="text-gray-700 text-sm font-semibold">Additional monthly revenue</div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                        {/* Shop info */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-3xl font-black text-gray-900 mb-1">{featured.shop}</h3>
                                <p className="text-gray-500 flex items-center gap-1">
                                    📍 {featured.location}
                                </p>
                            </div>
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{featured.type}</span>
                        </div>

                        {/* Problem → Solution */}
                        <div className="space-y-4 mb-6">
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-xl">
                                <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">The Problem</p>
                                <p className="text-gray-700">{featured.problem}</p>
                            </div>
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl">
                                <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Our Solution</p>
                                <p className="text-gray-700">{featured.solution}</p>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {Object.entries(featured.metrics).map(([key, val], i) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-4 text-center"
                                >
                                    <div className="text-xl font-black text-indigo-700">{val}</div>
                                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Quote + CTA */}
                    <div>
                        <blockquote className="text-gray-600 italic border-l-4 border-indigo-300 pl-4 mb-6">
                            "{featured.testimonial}" — {featured.owner}
                        </blockquote>
                        <Link href={`/results/${featured.slug}`}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-indigo-200"
                            >
                                Read Full Story →
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}