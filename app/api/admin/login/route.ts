import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { password } = body;

        if (!password) {
            return NextResponse.json(
                { error: "Password is required" },
                { status: 400 }
            );
        }

        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 401 }
            );
        }

        const response = NextResponse.json({
            success: true,
        });

        response.cookies.set("admin_auth", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: "Login failed" },
            { status: 500 }
        );
    }
}