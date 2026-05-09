const testimonials = [
    {
        name: "Rajesh Kirana",
        location: "Ahmedabad",
        result: "+15 Customers/Day",
        text: "Pehle sirf purane customers aate the. Ab naye log ad dekh kar aate hain!",
    },
    {
        name: "Priya Fashion",
        location: "Vadodara",
        result: "₹25,000 Extra Revenue",
        text: "They handle everything. I just see results in my shop.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 px-5 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">
                Success Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-gray-100 p-6 rounded-xl shadow"
                    >
                        <h3 className="font-bold text-lg">
                            {t.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                            {t.location}
                        </p>

                        <div className="bg-green-100 text-green-700 font-bold p-2 rounded mb-3 text-center">
                            {t.result}
                        </div>

                        <p className="text-gray-600 italic">
                            "{t.text}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}