export type PlanFeature = {
    text: string;
};

export type Plan = {
    name: string;
    badge?: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    buttonText: string;
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Starter Package",
        badge: "Starter",
        description: "Perfect for small projects",
        price: {
            monthly: 2500,
            yearly: 27000,
        },
        features: [
            { text: "Landing page or simple website" },
            { text: "Responsive design" },
            { text: "Basic SEO optimization" },
            { text: "30 days of support" },
        ],
        buttonText: "Get Started",
    },
    {
        name: "Growth Package",
        badge: "Popular",
        description: "For growing businesses",
        price: {
            monthly: 5000,
            yearly: 54000,
        },
        features: [
            { text: "Custom web/mobile app development" },
            { text: "Advanced features & integrations" },
            { text: "UI/UX design included" },
            { text: "3 months support & maintenance" },
        ],
        buttonText: "Book Consultation",
        popular: true,
    }
];

export const MARQUEE_ITEMS = [
    "Transform Ideas",
    "Build Solutions",
    "Drive Growth",
    "Innovation First",
    "Expert Team",
    "Proven Results",
    "Tech Excellence"
];
