"use client";

import Image from "next/image";
import { founder } from "@/constants/about";
import { motion } from "framer-motion";

export default function FounderStory() {
    return (
        <section className="py-24 px-5 bg-white overflow-hidden">

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/images/founder.jpg"
                        alt={founder.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-6"
                    >
                        Founder Story
                    </motion.div>

                    <h2 className="text-5xl font-black text-black mb-3">
                        {founder.name}
                    </h2>

                    <p className="text-xl text-gray-500 mb-8">
                        {founder.role}
                    </p>

                    <div className="space-y-5 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {founder.story}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 border-l-4 border-black pl-6 py-2"
                    >
                        <p className="text-2xl italic font-semibold text-gray-800">
                            "{founder.quote}"
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}