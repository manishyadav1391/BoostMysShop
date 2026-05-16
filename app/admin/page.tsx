import Sidebar from "@/components/admin/Sidebar";
import StatsCards from "@/components/admin/StatsCards";

import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

async function getStats() {
    const isAuth = await isAdminAuthenticated();
    
    if (!isAuth) {
        redirect("/admin/login");
    }

    await connectDB();

    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: "new" });
    const contactedLeads = await Lead.countDocuments({ status: "contacted" });
    const convertedLeads = await Lead.countDocuments({ status: "converted" });

    return {
        totalLeads,
        newLeads,
        contactedLeads,
        convertedLeads,
    };
}

export default async function AdminPage() {
    const stats = await getStats();

    return (
        <div
            className="flex min-h-screen"
            style={{ background: "linear-gradient(135deg, #0a0818 0%, #0d0b1e 50%, #080612 100%)" }}
        >

            <Sidebar />

            <main className="flex-1 p-8 overflow-auto">

                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div
                            className="w-1 h-8 rounded-full"
                            style={{ background: "linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%)" }}
                        />
                        <h1 className="text-4xl font-black text-white tracking-tight">
                            Dashboard
                        </h1>
                    </div>
                    <p className="text-white/40 ml-4 text-sm">
                        Overview of your business growth · Real-time analytics
                    </p>
                </div>

                {/* Stats grid */}
                <StatsCards stats={stats} />

                {/* Activity placeholder */}
                <div
                    className="mt-8 rounded-3xl p-6 border"
                    style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.07)",
                    }}
                >
                    <h2 className="text-white/50 text-sm font-semibold uppercase tracking-widest">
                        Recent Activity
                    </h2>
                    <p className="text-white/20 text-sm mt-2">
                        Check the <span className="text-indigo-400">Leads</span> section to see all incoming enquiries.
                    </p>
                </div>

            </main>

        </div>
    );
}