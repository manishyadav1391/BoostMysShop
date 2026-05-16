import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isAdminRoute = pathname.startsWith("/admin");
    const isLoginRoute = pathname === "/admin/login";

    if (!isAdminRoute) {
        return NextResponse.next();
    }

    const isLoggedIn = req.cookies.get("admin_auth")?.value === "true";

    // If already logged in and trying login page, send to dashboard
    if (isLoginRoute && isLoggedIn) {
        return NextResponse.redirect(new URL("/admin", req.url));
    }

    // If not logged in and trying admin page, send to login
    if (!isLoginRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};