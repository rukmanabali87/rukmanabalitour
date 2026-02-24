import { toursData, activitiesData, ticketsData } from "@/app/data/data";
import ProductDetailPage from "@/app/components/product-detail-page";
import { notFound } from "next/navigation";
import Script from "next/script";

const baseUrl = "https://rukmanabalitour.com";

const DATA_MAP = {
    tours: toursData,
    activities: activitiesData,
    tickets: ticketsData,
};

const validTypes = Object.keys(DATA_MAP);

export function generateStaticParams() {
    return Object.entries(DATA_MAP).flatMap(([type, items]) =>
        items.map((item) => ({
        type,
        slug: item.slug,
        }))
    );
}

export async function generateMetadata({ params }) {
    const { type, slug } = await params;

    if (!validTypes.includes(type)) {
        return {
        title: "Page Not Found",
        description: "The requested page does not exist.",
        };
    }

    const product = DATA_MAP[type].find(
        (item) => item.slug === slug
    );

    if (!product) {
        return {
        title: "Page Not Found",
        description: "The requested page does not exist.",
        };
    }

    const firstParagraph = product.productData.desc?.[0] || "";

    const metaDescription =
        firstParagraph.length > 155
        ? firstParagraph.substring(0, 152) + "..."
        : firstParagraph;

    return {
        title: `${product.productData.title} | Rukmana Bali Tour`,
        description: metaDescription,

        alternates: {
        canonical: `${baseUrl}/${type}/${product.slug}`,
        },

        openGraph: {
        title: product.productData.title,
        description: metaDescription,
        url: `${baseUrl}/${type}/${product.slug}`,
        siteName: "Rukmana Bali Tour",
        images: [
            {
            url: `${baseUrl}${product.images?.[0]?.src}`,
            width: 1200,
            height: 630,
            alt:
                product.images?.[0]?.alt ||
                product.productData.title,
            },
        ],
        locale: "en_US",
        type: "website",
        },
    };
}

export default async function DetailPage({ params }) {
    const { type, slug } = await params;

    if (!validTypes.includes(type)) {
        return notFound();
    }

    const product = DATA_MAP[type].find(
        (item) => item.slug === slug
    );

    if (!product) return notFound();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: product.productData.title,
        description: product.productData.desc?.join(" ") || "",
        image: product.images?.map(
        (img) => `${baseUrl}${img.src}`
        ),
        itinerary: product.itineraryData?.map((it) => ({
        "@type": "TouristAttraction",
        name: it.title,
        description: it.desc,
        })),
        offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price:
            product.productData.price?.replace(/[^\d]/g, "") || "0",
        availability: "https://schema.org/InStock",
        url: `${baseUrl}/${type}/${product.slug}`,
        },
    };

    return (
        <>
        <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
            }}
        />
        <ProductDetailPage data={product} type={type} />
        </>
    );
}