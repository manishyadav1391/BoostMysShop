import { Search } from "lucide-react";

export default function FAQSearch() {
    return (
        <section className="-mt-10 px-5 relative z-10">

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border flex items-center px-5 h-16">

                <Search className="text-gray-400" />

                <input
                    placeholder="Search a question..."
                    className="flex-1 h-full outline-none px-4"
                />

            </div>

        </section>
    );
}