"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Results", href: "/results" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Hide on all admin routes
    if (pathname?.startsWith("/admin")) return null;

    // Detect scroll to switch from transparent → solid
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                    ${scrolled
                        ? "bg-[#0f0c29]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between py-4">

                    {/* ── LOGO ── */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Company Logo */}
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg"
                        >
                            <Image
                                src="/images/logo.jpg"
                                alt="BoostMyShop Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Wordmark */}
                        <div className="flex flex-col leading-none">
                            <span className="text-white font-black text-xl tracking-tight">
                                Boost<span className="text-yellow-400">My</span>Shop
                            </span>
                            <span className="text-white/40 text-[10px] uppercase tracking-widest font-medium">
                                Let Your Shop Get Noticed!
                            </span>
                        </div>
                    </Link>

                    {/* ── DESKTOP NAV ── */}
                    <nav className="hidden md:flex items-center gap-1">
                        {links.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                                        ${active
                                            ? "text-white"
                                            : "text-white/60 hover:text-white hover:bg-white/8"
                                        }`}
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-indigo-600/40 border border-indigo-500/40 rounded-xl"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ── DESKTOP CTA ── */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="tel:+919408334733"
                            className="text-white/60 hover:text-white text-sm font-semibold transition-colors px-3 py-2"
                        >
                            📞 Call
                        </a>
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="https://wa.me/919408334733?text=Hi,%20I%20want%20to%20know%20about%20BoostMyShop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-green-500/25"
                        >
                            <WhatsAppIcon />
                            WhatsApp
                        </motion.a>
                    </div>

                    {/* ── MOBILE HAMBURGER ── */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-white origin-center transition-all"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            className="block w-6 h-0.5 bg-white origin-center transition-all"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-white origin-center transition-all"
                        />
                    </button>
                </div>
            </header>

            {/* ── MOBILE MENU DRAWER ── */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 32 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-[#0f0c29] border-l border-white/10 z-50 md:hidden flex flex-col"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                                        <Image
                                            src="/logo.png"
                                            alt="BoostMyShop Logo"
                                            width={36}
                                            height={36}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-white font-black text-lg">
                                        Boost<span className="text-indigo-400">My</span>Shop
                                    </span>
                                </div>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white/50 hover:text-white text-2xl transition-colors leading-none"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Drawer links */}
                            <nav className="flex flex-col gap-1 p-4 flex-1">
                                {links.map((link, i) => {
                                    const active = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.07 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`flex items-center px-4 py-3 rounded-2xl font-semibold transition-all
                                                    ${active
                                                        ? "bg-indigo-600/30 text-white border border-indigo-500/40"
                                                        : "text-white/60 hover:text-white hover:bg-white/8"
                                                    }`}
                                            >
                                                {link.label}
                                                {active && <span className="ml-auto text-indigo-400">●</span>}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Drawer CTA */}
                            <div className="p-4 border-t border-white/10 space-y-3">
                                <a
                                    href="tel:+919408334733"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border border-white/20 text-white/80 hover:text-white font-semibold transition-colors text-sm"
                                >
                                    📞 Call Us
                                </a>
                                <a
                                    href="https://wa.me/919408334733?text=Hi,%20I%20want%20to%20know%20about%20BoostMyShop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors text-sm shadow-lg shadow-green-500/25"
                                >
                                    <WhatsAppIcon />
                                    WhatsApp Us
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function WhatsAppIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}