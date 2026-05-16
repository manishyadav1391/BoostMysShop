"use client";

import { motion } from "framer-motion";

export default function VideoTestimonial() {
    return (
        <section className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Real Testimonial</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">Hear It From Our Clients</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden h-[480px] bg-black shadow-2xl group cursor-pointer"
            >
                {/* Background image */}
                {/* Image description: A happy Indian shop owner in traditional clothes standing in front of a well-decorated local store, smiling at the camera, with the store interior visible behind them */}
                <img
                    src="/images/case-studies/video-thumb.jpg"
                    alt="Video Testimonial"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-500"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md text-white text-4xl flex items-center justify-center border-2 border-white/40 shadow-2xl"
                    >
                        ▶
                    </motion.button>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-3xl">
                        <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
                        <p className="text-2xl md:text-3xl text-white font-semibold italic leading-relaxed mb-4">
                            "પહેલાં ગ્રાહકો ઘટતા હતા, હવે WhatsApp થી line લાગે છે!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">R</div>
                            <div>
                                <p className="text-white font-bold">Ramesh Patel</p>
                                <p className="text-gray-400 text-sm">Owner, Shreeji Kirana — Paldi, Ahmedabad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}