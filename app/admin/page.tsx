import Sidebar from "@/components/admin/Sidebar";
import StatsCards from "@/components/admin/StatsCards";

async function getStats() {
    const res = await fetch(
        "http://localhost:3000/api/admin/stats",
        {
            cache: "no-store",
        }
    );

    return res.json();
}

export default async function AdminPage() {
    const stats = await getStats();

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar />

            <main className="flex-1 p-8">

                <div className="mb-10">

                    <h1 className="text-5xl font-black mb-3">
                        Dashboard
                    </h1>

                    <p className="text-gray-500">
                        Overview of your business growth.
                    </p>

                </div>

                <StatsCards stats={stats} />

            </main>

        </div>
    );
}