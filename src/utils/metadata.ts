import { Metadata } from "next";

export const generateMetadata = ({
    title = "Atyuttama",
    description = ``,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/images/logo.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/images/logo.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
