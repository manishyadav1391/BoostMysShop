"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
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

    return (
        <aside className="w-72 bg-black text-white min-h-screen p-6 hidden lg:block">

            <h2 className="text-3xl font-black mb-10">
                BoostMyShop
            </h2>

            <nav className="space-y-2">

                {items.map((item) => {
                    const Icon = item.icon;

                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-4 p-4 rounded-2xl transition
              
              ${active
                                    ? "bg-white text-black"
                                    : "hover:bg-white/10"
                                }
              `}
                        >
                            <Icon size={20} />

                            <span>{item.label}</span>
                        </Link>
                    );
                })}

            </nav>
        </aside>
    );
}