"use client";

import { motion } from "framer-motion";
import { User, Phone, Store, Globe, Tag } from "lucide-react";

const statusConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
    new: {
        label: "New",
        color: "#34d399",
        bg: "rgba(52,211,153,0.12)",
        border: "rgba(52,211,153,0.3)",
    },
    contacted: {
        label: "Contacted",
        color: "#fbbf24",
        bg: "rgba(251,191,36,0.12)",
        border: "rgba(251,191,36,0.3)",
    },
    converted: {
        label: "Converted",
        color: "#f472b6",
        bg: "rgba(244,114,182,0.12)",
        border: "rgba(244,114,182,0.3)",
    },
};

export default function LeadsTable({ leads }: { leads: any[] }) {
    const safeLeads = Array.isArray(leads) ? leads : [];

    if (safeLeads.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl p-16 flex flex-col items-center justify-center gap-3 text-center"
                style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
            >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}
                >
                    <User size={28} className="text-indigo-400" />
                </div>
                <p className="text-white/60 font-semibold">No leads yet</p>
                <p className="text-white/25 text-sm">New leads will appear here automatically.</p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden"
            style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <table className="w-full">

                <thead>
                    <tr
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    >
                        {[
                            { label: "Name", icon: User },
                            { label: "Phone", icon: Phone },
                            { label: "Shop", icon: Store },
                            { label: "Source", icon: Globe },
                            { label: "Status", icon: Tag },
                        ].map(({ label, icon: Icon }) => (
                            <th
                                key={label}
                                className="text-left px-6 py-4"
                            >
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/30">
                                    <Icon size={12} />
                                    {label}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {safeLeads.map((lead: any, i: number) => {
                        const st = statusConfig[lead.status] ?? {
                            label: lead.status,
                            color: "#94a3b8",
                            bg: "rgba(148,163,184,0.12)",
                            border: "rgba(148,163,184,0.3)",
                        };

                        return (
                            <motion.tr
                                key={lead._id}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, delay: i * 0.05 }}
                                className="group"
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black text-white shrink-0"
                                            style={{
                                                background: `linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.3))`,
                                                border: "1px solid rgba(99,102,241,0.3)",
                                            }}
                                        >
                                            {(lead.name || "?")[0].toUpperCase()}
                                        </div>
                                        <span className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">
                                            {lead.name}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    <a
                                        href={`tel:${lead.phone}`}
                                        className="text-white/50 text-sm font-mono hover:text-indigo-400 transition-colors"
                                    >
                                        {lead.phone}
                                    </a>
                                </td>

                                <td className="px-6 py-4">
                                    <span className="text-white/60 text-sm">{lead.shop}</span>
                                </td>

                                <td className="px-6 py-4">
                                    <span className="text-white/40 text-sm capitalize">{lead.source || "—"}</span>
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className="px-3 py-1.5 rounded-xl text-xs font-bold capitalize"
                                        style={{
                                            color: st.color,
                                            background: st.bg,
                                            border: `1px solid ${st.border}`,
                                        }}
                                    >
                                        {st.label}
                                    </span>
                                </td>
                            </motion.tr>
                        );
                    })}
                </tbody>

            </table>
        </motion.div>
    );
}