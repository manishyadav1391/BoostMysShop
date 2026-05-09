"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        label: "Home",
        href: "/",
    },

    {
        label: "Services",
        href: "/services",
    },

    {
        label: "Results",
        href: "/results",
    },

    {
        label: "About",
        href: "/about",
    },

    {
        label: "FAQ",
        href: "/faq",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="hidden md:flex fixed top-0 left-0 w-full h-16 bg-white border-b z-50 items-center justify-between px-10">

            {/* Logo */}
            <Link
                href="/"
                className="text-2xl font-black text-indigo-900"
            >
                BoostMyShop
            </Link>

            {/* Links */}
            <nav className="flex gap-8">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`font-medium transition
              
              ${pathname === link.href
                                ? "text-indigo-600"
                                : "text-gray-600"
                            }
            `}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* CTA */}
            <a
                href="https://wa.me/91XXXXXXXXXX"
                className="bg-green-500 text-white px-5 py-2 rounded-xl"
            >
                WhatsApp
            </a>
        </header>
    );
}