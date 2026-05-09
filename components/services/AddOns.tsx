const addOns = [
    {
        name: "Photoshoot",
        price: "₹3,000",
    },
    {
        name: "WhatsApp Setup",
        price: "₹1,500",
    },
    {
        name: "Google My Business",
        price: "₹2,000",
    },
];

export default function AddOns() {
    return (
        <section className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-6">
                Add-On Services
            </h3>

            <div className="space-y-4">
                {addOns.map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-between bg-gray-50 p-4 rounded-xl"
                    >
                        <span>{item.name}</span>
                        <span className="font-bold">
                            {item.price}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}