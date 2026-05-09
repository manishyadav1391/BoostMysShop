import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";

export async function GET() {
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