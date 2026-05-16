import Sidebar from "@/components/admin/Sidebar";
import LeadsTable from "@/components/admin/LeadsTable";

import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

async function getLeads() {
    const isAuth = await isAdminAuthenticated();
    
    if (!isAuth) {
        redirect("/admin/login");
    }

    await connectDB();
    const leads = await Lead.find().sort({ createdAt: -1 });
    
    return JSON.parse(JSON.stringify(leads));
}

export default async function LeadsPage() {
    const leads = await getLeads();

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
                            style={{ background: "linear-gradient(180deg, #34d399 0%, #10b981 100%)" }}
                        />
                        <h1 className="text-4xl font-black text-white tracking-tight">
                            Leads
                        </h1>
                    </div>
                    <p className="text-white/40 ml-4 text-sm">
                        Manage customer enquiries · {leads.length} total
                    </p>
                </div>

                <LeadsTable leads={leads} />

            </main>

        </div>
    );
}