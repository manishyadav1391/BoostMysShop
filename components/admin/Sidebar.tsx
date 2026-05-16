"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    LogOut,
    Zap,
} from "lucide-react";

const items = [
    {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        label: "Leads",
        href: "/admin/leads",
        icon: Users,
    },
    {
        label: "Case Studies",
        href: "/admin/case-studies",
        icon: FileText,
    },
    {
        label: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    async function handleLogout() {
        await fetch("/api/admin/logout", {
            method: "POST",
        });

        window.location.href = "/admin/login";
    }

    return (
        <aside
            className="w-72 min-h-screen hidden lg:flex lg:flex-col relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #0f0c1d 0%, #0a0818 50%, #060410 100%)",
                borderRight: "1px solid rgba(129, 140, 248, 0.12)",
            }}
        >
            {/* Ambient glow */}
            <div className="absolute top-0 left-0 w-full h-64 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)",
                }}
            />

            <div className="relative flex flex-col h-full p-6">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                            boxShadow: "0 0 20px rgba(99,102,241,0.4)",
                        }}
                    >
                        <Zap size={18} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-black text-white leading-none">
                            Boost<span className="text-indigo-400">My</span>Shop
                        </h2>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">Admin Panel</p>
                    </div>
                </motion.div>

                {/* Nav */}
                <nav className="space-y-1.5 flex-1">
                    <p className="text-[10px] text-white/20 uppercase tracking-widest font-semibold px-3 mb-3">
                        Navigation
                    </p>
                    {items.map((item, i) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;

                        return (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group relative overflow-hidden
                                        ${active
                                            ? "text-white"
                                            : "text-white/40 hover:text-white/80"
                                        }`}
                                    style={active ? {
                                        background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 100%)",
                                        border: "1px solid rgba(99,102,241,0.3)",
                                        boxShadow: "0 0 20px rgba(99,102,241,0.1)",
                                    } : {
                                        border: "1px solid transparent",
                                    }}
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="sidebar-pill"
                                            className="absolute inset-0 rounded-2xl"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <div
                                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 relative z-10
                                            ${active
                                                ? "bg-indigo-500/30"
                                                : "bg-white/5 group-hover:bg-white/10"
                                            }`}
                                    >
                                        <Icon size={16} className={active ? "text-indigo-300" : ""} />
                                    </div>
                                    <span className="font-semibold text-sm relative z-10">{item.label}</span>
                                    {active && (
                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 relative z-10"
                                            style={{ boxShadow: "0 0 8px rgba(99,102,241,0.8)" }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Divider */}
                <div className="h-px bg-white/5 my-4" />

                {/* Logout */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={handleLogout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl font-semibold text-sm text-white/70 hover:text-white transition-all duration-200"
                    style={{
                        background: "rgba(239,68,68,0.08)",
                        border: "1px solid rgba(239,68,68,0.2)",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(239,68,68,0.18)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(239,68,68,0.4)";
                        (e.currentTarget as HTMLButtonElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(239,68,68,0.08)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(239,68,68,0.2)";
                        (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
                    }}
                >
                    <LogOut size={16} />
                    Logout
                </motion.button>
            </div>
        </aside>
    );
}