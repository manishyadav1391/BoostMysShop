export default function TestimonialBlock({ study }: any) {
    return (
        <section className="bg-blue-900 text-white p-10 rounded-3xl text-center">

            <p className="text-3xl italic leading-relaxed max-w-4xl mx-auto mb-6">
                “{study.testimonial}”
            </p>

            <div>
                <h3 className="text-xl font-bold">
                    {study.owner}
                </h3>

                <p className="text-blue-200">
                    Owner of {study.shop}
                </p>
            </div>

        </section>
    );
}