export interface Slide {
    id: number;
    title: {
        hindi?: string;
        english: string;
        highlight?: string;
    };
    subtitle: string;
    image: string;
    imageAlt: string;
    trustIndicators?: {
        number: string;
        label: string;
    }[];
    mathVisual?: {
        left: { number: string; label: string };
        right: { number: string; label: string };
    };
    comparison?: {
        label: string;
        value: string;
        highlight?: boolean;
    }[];
    cta: {
        primary: {
            text: string;
            link: string;
            icon?: string;
        };
        secondary: {
            text: string;
            link: string;
            icon?: string;
        };
    };
}

export const slides: Slide[] = [
    {
        id: 1,
        title: {
            hindi: "for ₹200/day Your Shop in entire city",
            english: "",
        },
        subtitle:
            "Struggling to new customers? Now reach every home in the city for just <strong>₹6000/month</strong> ",
        image: "/images/with-ads.jpg",
        imageAlt: "Empty shop vs customers entering",
        trustIndicators: [
            { number: "50+", label: "Local Shops" },
            { number: "Ahmedabad", label: "Based Agency" },
            { number: "245%", label: "Avg ROI" },
        ],
        cta: {
            primary: {
                text: "WhatsApp",
                link: "https://wa.me/9408334733?text=Hi,%20I%20want%20to%20know%20about%20₹200/day%20ads",
                icon: "whatsapp",
            },
            secondary: {
                text: "📞 Call ",
                link: "tel:+919876543210",
            },
        },
    },
    {
        id: 2,
        title: {
            highlight: "2,000 Local People",
            english: "See Your Shop Daily",
        },
        subtitle:
            "Advertise your shop on Instagram and Facebook to <strong>every household within a 1–2 kilometer radius</strong>—for just ₹200 per day.",
        image: "/images/radius-map.jpg",
        imageAlt: "Map showing 1-2km radius targeting",
        mathVisual: {
            left: { number: "₹200", label: "per day" },
            right: { number: "2,000+", label: "People will see daily" },
        },
        comparison: [
            { label: "Zepto spends:", value: "₹lakhs" },
            { label: "You will spend:", value: "₹6,000", highlight: true },
        ],
        cta: {
            primary: {
                text: "Free Consultation",
                link: "/consultation",
                icon: "calendar",
            },
            secondary: {
                text: "How it works →",
                link: "/how-it-works",
            },
        },
    },
    {
        id: 3,
        title: {
            english: "Real Shop Owners,",
            highlight: "Real Results",
        },
        subtitle:
            'Sheetal Kirana, Satellite: <strong>"In the very first month, 15 new customers came in who said, I saw it on Instagram."</strong>',
        image: "/images/owner-testimonial.jpg",
        imageAlt: "Shop owner testimonial",
        trustIndicators: [
            { number: "₹35,000", label: "Extra Monthly Revenue" },
            { number: "150+", label: "New Customers" },
            { number: "340%", label: "ROI Achieved" },
        ],
        cta: {
            primary: {
                text: "WhatsApp",
                link: "https://wa.me/919876543210?text=I%20want%20to%20know%20more%20about%20Success%20Stories",
                icon: "whatsapp",
            },
            secondary: {
                text: "More Success Stories →",
                link: "/results",
            },
        },
    },
    {
        id: 4,
        title: {
            english: "No Technical Knowledge?",
            highlight: "We will handle everything",
        },
        subtitle:
            "Send just one photo of your shop. Creating, running, and tracking ad results - <strong>we'll handle everything</strong>",
        image: "/images/mobile-ad-preview.png",
        imageAlt: "Mobile showing Instagram ad",
        comparison: [
            { label: "You will do:", value: "Just send one photo" },
            { label: "We will do:", value: "Professional Ads + Targeting + Reporting", highlight: true },
        ],
        cta: {
            primary: {
                text: "Start at ₹200/day",
                link: "https://wa.me/919876543210?text=I%20want%20to%20start%20at%20₹200/day",
                icon: "whatsapp",
            },
            secondary: {
                text: "View Pricing ",
                link: "/pricing",
            },
        },
    },
];