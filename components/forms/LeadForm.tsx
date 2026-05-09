"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { createLead } from "@/hooks/useLead";
import { openWhatsApp } from "@/lib/whatsapp";

export default function LeadForm() {
    const pathname = usePathname(); // ✅ safe

    const [form, setForm] = useState({
        name: "",
        phone: "",
        shop: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!form.phone) {
            alert("Phone required");
            return;
        }

        setLoading(true);

        await createLead({
            ...form,
            source: pathname, // ✅ clean
        });

        setLoading(false);

        openWhatsApp(form);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">
                Get Customers for Your Shop
            </h3>

            <input
                placeholder="Your Name"
                className="w-full border p-3 mb-3 rounded"
                onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                }
            />

            <input
                placeholder="Phone Number"
                className="w-full border p-3 mb-3 rounded"
                onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                }
            />

            <input
                placeholder="Shop Name"
                className="w-full border p-3 mb-4 rounded"
                onChange={(e) =>
                    setForm({ ...form, shop: e.target.value })
                }
            />

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-green-500 text-white py-3 rounded"
            >
                {loading ? "Sending..." : "Get Started"}
            </button>
        </div>
    );
}