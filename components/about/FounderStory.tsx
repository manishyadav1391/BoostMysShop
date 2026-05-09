import Image from "next/image";
import { founder } from "@/constants/about";

export default function FounderStory() {
    return (
        <section className="py-20 px-5 bg-white">

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">

                    <Image
                        src="/images/founder.jpg"
                        alt={founder.name}
                        fill
                        className="object-cover"
                    />

                </div>

                {/* Content */}
                <div>

                    <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                        Founder Story
                    </div>

                    <h2 className="text-5xl font-black text-black mb-3">
                        {founder.name}
                    </h2>

                    <p className="text-xl text-gray-500 mb-8">
                        {founder.role}
                    </p>

                    <div className="space-y-5 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {founder.story}
                    </div>

                    <div className="mt-10 border-l-4 border-black pl-6">
                        <p className="text-2xl italic font-semibold">
                            “{founder.quote}”
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}