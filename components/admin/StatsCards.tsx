export default function StatsCards({
    stats,
}: any) {
    const items = [
        {
            label: "Total Leads",
            value: stats.totalLeads,
        },

        {
            label: "New Leads",
            value: stats.newLeads,
        },

        {
            label: "Contacted",
            value: stats.contactedLeads,
        },

        {
            label: "Converted",
            value: stats.convertedLeads,
        },
    ];

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {items.map((item, i) => (
                <div
                    key={i}
                    className="bg-white rounded-3xl p-8 shadow-sm border"
                >

                    <p className="text-gray-500 mb-3">
                        {item.label}
                    </p>

                    <h3 className="text-4xl font-black">
                        {item.value}
                    </h3>

                </div>
            ))}

        </div>
    );
}