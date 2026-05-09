import Image from "next/image";

export default function GallerySection({ study }: any) {
    return (
        <section>

            <h2 className="text-4xl font-bold text-blue-900 mb-8">
                Campaign Gallery
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

                {study.images.map((img: string, i: number) => (
                    <div
                        key={i}
                        className="relative h-72 rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={img}
                            alt="Campaign"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}

            </div>

        </section>
    );
}