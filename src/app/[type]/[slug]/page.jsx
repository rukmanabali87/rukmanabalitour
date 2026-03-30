import { toursData, activitiesData, ticketsData } from "@/app/data/data";
import { getProductWithPrice } from "@/app/data/get-product-with-price";
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

    const product = getProductWithPrice(type, slug);

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
        title: `${product.productData.title} - Rukmana Bali Tour`,
        description: metaDescription,
        alternates: {
        canonical: `${baseUrl}/${type}/${product.slug}`,
        },
    };
}

export default async function DetailPage({ params }) {
    const { type, slug } = await params;

    if (!validTypes.includes(type)) {
        return notFound();
    }

    const product = getProductWithPrice(type, slug);

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
        "@type": "AggregateOffer",
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