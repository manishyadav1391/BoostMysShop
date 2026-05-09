export default function LeadsTable({
    leads,
}: any) {
    return (
        <div className="bg-white rounded-3xl border overflow-hidden">

            <table className="w-full">

                <thead className="bg-gray-50 border-b">

                    <tr>

                        <th className="text-left p-5">
                            Name
                        </th>

                        <th className="text-left p-5">
                            Phone
                        </th>

                        <th className="text-left p-5">
                            Shop
                        </th>

                        <th className="text-left p-5">
                            Source
                        </th>

                        <th className="text-left p-5">
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {leads.map((lead: any) => (
                        <tr
                            key={lead._id}
                            className="border-b hover:bg-gray-50"
                        >

                            <td className="p-5">
                                {lead.name}
                            </td>

                            <td className="p-5">
                                {lead.phone}
                            </td>

                            <td className="p-5">
                                {lead.shop}
                            </td>

                            <td className="p-5">
                                {lead.source}
                            </td>

                            <td className="p-5">

                                <span className="px-3 py-1 rounded-full bg-black text-white text-sm">
                                    {lead.status}
                                </span>

                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}