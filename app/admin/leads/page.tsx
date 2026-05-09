import Sidebar from "@/components/admin/Sidebar";
import LeadsTable from "@/components/admin/LeadsTable";

async function getLeads() {
    const res = await fetch(
        "http://localhost:3000/api/admin/leads",
        {
            cache: "no-store",
        }
    );

    return res.json();
}

export default async function LeadsPage() {
    const leads = await getLeads();

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar />

            <main className="flex-1 p-8">

                <div className="mb-10">

                    <h1 className="text-5xl font-black mb-3">
                        Leads
                    </h1>

                    <p className="text-gray-500">
                        Manage customer inquiries.
                    </p>

                </div>

                <LeadsTable leads={leads} />

            </main>

        </div>
    );
}