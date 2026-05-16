"use client";

import { motion } from "framer-motion";

const problems = [
    {
        icon: "📉",
        title: "80%",
        tag: "Market Share Lost",
        desc: "Kirana stores losing customers to Blinkit, Zepto & Swiggy Instamart every single month.",
        color: "from-red-500 to-rose-600",
        border: "border-red-200",
        bg: "bg-red-50",
        tagColor: "bg-red-100 text-red-600",
    },
    {
        icon: "⏱️",
        title: "10 Min",
        tag: "Customer Expectation",
        desc: "Customers now expect 10-minute delivery. They open apps first, not walk to your shop.",
        color: "from-orange-500 to-amber-600",
        border: "border-orange-200",
        bg: "bg-orange-50",
        tagColor: "bg-orange-100 text-orange-600",
    },
    {
        icon: "📱",
        title: "Offline",
        tag: "Visibility Problem",
        desc: "Your shop has no online presence. Your customers are scrolling Instagram — but not seeing you.",
        color: "from-violet-500 to-purple-600",
        border: "border-violet-200",
        bg: "bg-violet-50",
        tagColor: "bg-violet-100 text-violet-600",
    },
];

export default function Problem() {
    return (
        <section className="py-24 px-5 bg-white">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-red-500 font-bold uppercase tracking-wider text-sm mb-3">Wake-Up Call</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        The Hard Truth for{" "}
                        <span className="text-red-500">Local Shops</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Quick-commerce is winning. Here's exactly what you're up against.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true, margin: "-40px" }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className={`relative rounded-3xl border ${item.border} ${item.bg} p-8 overflow-hidden hover:shadow-xl transition-shadow`}
                        >
                            {/* Big stat in background */}
                            <div className="absolute -right-4 -top-4 text-[100px] font-black opacity-5 leading-none select-none">
                                {item.title}
                            </div>

                            {/* Icon */}
                            <div className="text-4xl mb-5">{item.icon}</div>

                            {/* Tag */}
                            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${item.tagColor}`}>
                                {item.tag}
                            </span>

                            {/* Stat */}
                            <div className={`text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>
                                {item.title}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA nudge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 text-lg">
                        But there's a way to fight back — for just{" "}
                        <span className="text-indigo-600 font-black">₹200/day</span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}