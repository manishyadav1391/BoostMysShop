"use client";

import { useState } from "react";

const filters = [
    "All",
    "Kirana",
    "Boutique",
    "Electronics",
    "Restaurant",
];

export default function FilterChips() {
    const [active, setActive] = useState("All");

    return (
        <div className="flex gap-3 overflow-x-auto pb-2">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActive(filter)}
                    className={`px-5 py-2 rounded-full whitespace-nowrap transition
          
          ${active === filter
                            ? "bg-blue-900 text-white"
                            : "bg-gray-100 text-gray-700"
                        }
          `}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}