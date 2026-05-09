"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border rounded-2xl overflow-hidden bg-white">

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left"
            >

                <span className="font-semibold text-lg">
                    {question}
                </span>

                <ChevronDown
                    className={`transition ${open ? "rotate-180" : ""
                        }`}
                />

            </button>

            {open && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {answer}
                </div>
            )}

        </div>
    );
}