import { caseStudies } from "@/constants/results";
import Link from "next/link";
export default function QuickWinsGrid() {
    const quickWins = caseStudies.filter(
        (item) => !item.featured
    );

    return (
        <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Success Across Gujarat
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

                {quickWins.map((item) => (
                    <Link
                        href={`/results/${item.slug}`}
                        key={item.id}
                    >
                        <div className="bg-white p-6 rounded-2xl shadow border hover:shadow-xl transition">

                            <h3 className="text-xl font-bold">
                                {item.shop}
                            </h3>

                            <p className="text-gray-500 mb-4">
                                {item.location}
                            </p>

                            <div className="text-3xl font-bold text-blue-900">
                                {item.result}
                            </div>

                        </div>
                    </Link>
                ))}

            </div>
        </section>
    );
}