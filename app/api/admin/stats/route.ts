import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export async function GET() {

    const isAuth = await isAdminAuthenticated();

    if (!isAuth) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    await connectDB();

    const totalLeads = await Lead.countDocuments();

    const newLeads = await Lead.countDocuments({
        status: "new",
    });

    const contactedLeads =
        await Lead.countDocuments({
            status: "contacted",
        });

    const convertedLeads =
        await Lead.countDocuments({
            status: "converted",
        });

    return NextResponse.json({
        totalLeads,
        newLeads,
        contactedLeads,
        convertedLeads,
    });
}