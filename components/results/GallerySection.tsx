"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GallerySection({ study }: any) {
    return (
        <section>

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Visual Proof</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    Campaign Gallery
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
                {study.images.map((img: string, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        whileHover={{ y: -6 }}
                        className="relative h-72 rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                    >
                        <Image
                            src={img}
                            alt={`Campaign image ${i + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/30 transition-colors duration-300" />
                        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-xl">
                                Photo {i + 1}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}