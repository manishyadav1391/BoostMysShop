import { founder } from "@/constants/about";

export default function CoverageArea() {
    return (
        <section className="py-20 px-5 bg-white">

            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-4xl font-black mb-6">
                    Where We Work
                </h2>

                <p className="text-gray-600 text-lg mb-12">
                    We prefer meeting shop owners in person.
                </p>

                <div className="grid md:grid-cols-3 gap-6">

                    {founder.cities.map((city, i) => (
                        <div
                            key={i}
                            className="bg-gray-100 p-10 rounded-3xl"
                        >

                            <h3 className="text-2xl font-bold mb-2">
                                {city}
                            </h3>

                            <p className="text-gray-600">
                                Active Local Support
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}