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

    const leads = await Lead.find()
        .sort({ createdAt: -1 });

    return NextResponse.json(leads);
}