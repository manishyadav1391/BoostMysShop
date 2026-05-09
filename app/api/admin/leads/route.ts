import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";

export async function GET() {
    await connectDB();

    const leads = await Lead.find()
        .sort({ createdAt: -1 });

    return NextResponse.json(leads);
}