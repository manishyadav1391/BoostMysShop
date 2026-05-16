"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Home,
    Briefcase,
    BarChart3,
    MessageCircle,
} from "lucide-react";

const navItems = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },

    {
        label: "Services",
        href: "/services",
        icon: Briefcase,
    },

    {
        label: "Results",
        href: "/results",
        icon: BarChart3,
    },

    {
        label: "About",
        href: "/about",
        icon: MessageCircle,
    },
    {
        label: "FAQ",
        href: "/faq",
        icon: MessageCircle,
    },
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    // Hide on all admin routes
    if (pathname?.startsWith("/admin")) return null;

    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-lg md:hidden">

            <div className="grid grid-cols-4 h-16">

                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center text-xs transition
              
              ${isActive
                                    ? "text-indigo-600 bg-indigo-50"
                                    : "text-gray-500"
                                }
              `}
                        >
                            <Icon size={20} />

                            <span className="mt-1">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
