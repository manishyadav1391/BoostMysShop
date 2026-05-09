import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, phone, shop, source } = body;

        if (!phone) {
            return NextResponse.json(
                { error: "Phone is required" },
                { status: 400 }
            );
        }

        await connectDB();

        const newLead = await Lead.create({
            name,
            phone,
            shop,
            source,
        });

        return NextResponse.json({
            success: true,
            data: newLead,
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}