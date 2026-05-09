import { Info } from "lucide-react";

export default function FAQSupportBanner() {
    return (
        <section className="px-5 pt-16">

            <div className="max-w-5xl mx-auto bg-blue-50 border-l-4 border-blue-600 rounded-2xl p-6 flex gap-4">

                <Info className="text-blue-700 shrink-0 mt-1" />

                <div>

                    <h3 className="font-bold text-lg mb-2">
                        New to Digital Marketing?
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        Don’t worry. Most of our clients are first-time business owners using online marketing.
                        We explain everything simply and help you step-by-step.
                    </p>

                </div>
            </div>
        </section>
    );
}