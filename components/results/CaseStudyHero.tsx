import Image from "next/image";

export default function CaseStudyHero({ study }: any) {
    return (
        <section className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

                <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {study.type} Success Story

                </div>

                <h1 className="text-5xl font-bold text-blue-900 mb-4">
                    {study.shop}
                </h1>

                <p className="text-xl text-gray-600 mb-6">
                    {study.location}
                </p>

                <div className="bg-green-100 text-green-800 p-5 rounded-2xl">
                    <p className="text-sm uppercase font-semibold mb-2">
                        Result
                    </p>

                    <h2 className="text-3xl font-bold">
                        {study.result}
                    </h2>
                </div>

            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <Image
                    src={study.images[0]}
                    alt={study.shop}
                    fill
                    className="object-cover"
                />
            </div>

        </section>
    );
}