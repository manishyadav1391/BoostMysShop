export const metadata = {
    title: "Admin – BoostMyShop",
    description: "BoostMyShop admin dashboard",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    /**
     * This segment layout intentionally does NOT render Navbar / BottomNav.
     * Those components detect /admin routes via usePathname() and return null,
     * but having a dedicated layout here keeps admin completely isolated from
     * the marketing shell and ensures no flash of the marketing nav.
     */
    return (
        <div style={{ minHeight: "100vh", background: "#0a0818" }}>
            {children}
        </div>
    );
}
