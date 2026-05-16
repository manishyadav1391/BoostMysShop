"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, PhoneCall, TrendingUp } from "lucide-react";

interface StatItem {
    label: string;
    value: number;
    icon: React.ElementType;
    color: string;
    glow: string;
    bg: string;
    ring: string;
    description: string;
}

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const start = performance.now();
        const step = (now: number) => {
            const elapsed = (now - start) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, target, duration]);

    return <span ref={ref}>{count}</span>;
}

function GaugeRing({
    value,
    max,
    color,
    ring,
    delay,
}: {
    value: number;
    max: number;
    color: string;
    ring: string;
    delay: number;
}) {
    const inView = useInView({ current: null } as any, { once: true });
    const percent = max > 0 ? Math.min(value / max, 1) : 0;
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const strokeDash = circumference * percent;

    return (
        <div className="relative w-28 h-28 flex items-center justify-center">
            <svg
                width="112"
                height="112"
                viewBox="0 0 112 112"
                className="absolute top-0 left-0 -rotate-90"
            >
                {/* Track */}
                <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth="8"
                />
                {/* Progress arc */}
                <motion.circle
                    cx="56"
                    cy="56"
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${circumference}`}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: circumference - strokeDash }}
                    transition={{ duration: 1.6, ease: "easeOut", delay }}
                />
            </svg>
            {/* Glow dot at end */}
            <div
                className={`absolute w-3 h-3 rounded-full blur-[2px] ${ring}`}
                style={{
                    boxShadow: `0 0 12px 4px ${color}`,
                    top: "6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />
        </div>
    );
}

export default function StatsCards({ stats }: { stats: any }) {
    const total = stats.totalLeads || 1; // avoid division by zero

    const items: StatItem[] = [
        {
            label: "Total Leads",
            value: stats.totalLeads,
            icon: Users,
            color: "#818cf8",
            glow: "shadow-indigo-500/30",
            bg: "from-indigo-950/60 to-slate-900/80",
            ring: "bg-indigo-400",
            description: "All time enquiries",
        },
        {
            label: "New Leads",
            value: stats.newLeads,
            icon: TrendingUp,
            color: "#34d399",
            glow: "shadow-emerald-500/30",
            bg: "from-emerald-950/60 to-slate-900/80",
            ring: "bg-emerald-400",
            description: "Awaiting follow-up",
        },
        {
            label: "Contacted",
            value: stats.contactedLeads,
            icon: PhoneCall,
            color: "#fbbf24",
            glow: "shadow-amber-500/30",
            bg: "from-amber-950/60 to-slate-900/80",
            ring: "bg-amber-400",
            description: "In conversation",
        },
        {
            label: "Converted",
            value: stats.convertedLeads,
            icon: UserCheck,
            color: "#f472b6",
            glow: "shadow-pink-500/30",
            bg: "from-pink-950/60 to-slate-900/80",
            ring: "bg-pink-400",
            description: "Closed deals",
        },
    ];

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {items.map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.bg}
                            border border-white/10 shadow-xl ${item.glow}
                            backdrop-blur-sm p-6 flex flex-col gap-4 cursor-default group`}
                    >
                        {/* Background glow blob */}
                        <div
                            className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                            style={{ background: item.color }}
                        />

                        {/* Top row: icon + gauge */}
                        <div className="flex items-center justify-between">
                            {/* Icon badge */}
                            <div
                                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{
                                    background: `${item.color}22`,
                                    border: `1px solid ${item.color}44`,
                                }}
                            >
                                <Icon size={20} style={{ color: item.color }} />
                            </div>

                            {/* Gauge ring */}
                            <div className="relative">
                                <GaugeRing
                                    value={item.value}
                                    max={total}
                                    color={item.color}
                                    ring={item.ring}
                                    delay={0.3 + i * 0.12}
                                />
                                {/* Percent label inside ring */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className="text-xs font-bold tabular-nums"
                                        style={{ color: item.color }}
                                    >
                                        {total > 0 ? Math.round((item.value / total) * 100) : 0}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Count */}
                        <div>
                            <h3 className="text-4xl font-black text-white tabular-nums leading-none">
                                <CountUp target={item.value} duration={1.4 + i * 0.1} />
                            </h3>
                            <p className="text-sm font-semibold text-white/80 mt-1">{item.label}</p>
                            <p className="text-xs text-white/40 mt-0.5">{item.description}</p>
                        </div>

                        {/* Bottom bar */}
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: item.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${total > 0 ? (item.value / total) * 100 : 0}%` }}
                                transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 + i * 0.1 }}
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}