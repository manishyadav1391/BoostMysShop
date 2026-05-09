export default function BottomNav() {
    return (
        <div className="fixed bottom-0 left-0 w-full flex z-50">

            <a
                href="tel:+919408334733"
                className="flex-1 bg-black text-white text-center py-4 font-semibold"
            >
                Call Now
            </a>

            <a
                href="https://wa.me/919408334733"
                className="flex-1 bg-green-500 text-white text-center py-4 font-semibold"
            >
                WhatsApp
            </a>

        </div>
    );
}