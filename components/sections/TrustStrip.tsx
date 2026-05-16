"use client";

import { motion } from "framer-motion";

const trustStats = [
  { icon: "👥", number: "50+", label: "Local Shops", color: "#4ade80" },
  { icon: "📍", number: "2 Cities", label: "Ahd & Vadodara", color: "#60a5fa" },
  { icon: "⭐", number: "4.8/5", label: "Client Rating", color: "#fbbf24" },
  { icon: "💰", number: "245%", label: "Average ROI", color: "#a78bfa" },
  { icon: "🎯", number: "2000+", label: "Daily Reach", color: "#f472b6" },
  { icon: "⚡", number: "3 Days", label: "See Results", color: "#fb923c" },
];

export default function TrustStrip() {
  return (
    <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-t border-b border-[rgba(255,215,0,0.2)] py-8 px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-5">
          {trustStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative flex items-center gap-3 md:gap-4 px-4 py-4 md:px-5 md:py-5 bg-white/5 backdrop-blur-[10px] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              {/* Left accent bar */}
              <div
                className="absolute top-0 left-0 w-1 h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: stat.color }}
              />

              {/* Icon */}
              <span className="text-2xl md:text-3xl leading-none grayscale-[30%] transition-all duration-300 group-hover:grayscale-0">
                {stat.icon}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-[2px]">
                <span
                  className="text-xl md:text-2xl font-extrabold leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </span>
                <span className="text-[12px] md:text-[13px] text-white/60 font-medium">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}