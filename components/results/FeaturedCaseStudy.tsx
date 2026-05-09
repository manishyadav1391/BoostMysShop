import Image from "next/image";
import { caseStudies } from "@/constants/results";
import Link from "next/link";

export default function FeaturedCaseStudy() {
    const featured = caseStudies.find(
        (item) => item.featured
    );

    if (!featured) return null;

    return (
        <section className="bg-white rounded-3xl overflow-hidden shadow-lg">

            {/* Image */}
            <div className="relative h-72 w-full">
                <Image
                    src="/images/without-ads.jpg"
                    alt={featured.shop}
                    fill
                    className="object-cover"
                />

                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured Case Study
                </div>
            </div>

            {/* Content */}
            <div className="p-8">

                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    {featured.shop}
                </h2>

                <p className="text-gray-500 mb-6">
                    {featured.location}
                </p>

                {/* Problem */}
                <div className="mb-4">
                    <h3 className="font-semibold text-red-500 mb-1">
                        Problem
                    </h3>

                    <p className="text-gray-700">
                        {featured.problem}
                    </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                    <h3 className="font-semibold text-blue-700 mb-1">
                        Solution
                    </h3>

                    <p className="text-gray-700">
                        {featured.solution}
                    </p>
                </div>

                {/* Result */}
                <div className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-xl mb-6">
                    <p className="text-sm uppercase font-semibold text-blue-700 mb-1">
                        Monthly Result
                    </p>

                    <h4 className="text-3xl font-bold text-blue-900">
                        {featured.result}
                    </h4>
                </div>

                <Link
                    href={`/results/${featured.slug}`}
                >
                    <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold">
                        Read Full Story
                    </button>
                </Link>
            </div>
        </section>
    );
}