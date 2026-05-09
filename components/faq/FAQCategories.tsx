import {
    Rocket,
    Wallet,
    BarChart3,
    MessageCircle,
} from "lucide-react";

import FAQAccordion from "./FAQAccordion";
import { faqCategories } from "@/constants/faq";

const icons: any = {
    rocket: Rocket,
    wallet: Wallet,
    chart: BarChart3,
    message: MessageCircle,
};

export default function FAQCategories() {
    return (
        <section className="py-20 px-5">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                {faqCategories.map((category, i) => {
                    const Icon = icons[category.icon];

                    return (
                        <div
                            key={i}
                            className="bg-gray-50 rounded-3xl p-8 border"
                        >

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8">

                                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                                    <Icon size={24} />
                                </div>

                                <h2 className="text-2xl font-black">
                                    {category.title}
                                </h2>

                            </div>

                            {/* Questions */}
                            <div className="space-y-4">

                                {category.questions.map((item, idx) => (
                                    <FAQAccordion
                                        key={idx}
                                        question={item.q}
                                        answer={item.a}
                                    />
                                ))}

                            </div>

                        </div>
                    );
                })}

            </div>
        </section>
    );
}