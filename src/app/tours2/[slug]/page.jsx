import { toursData } from "@/app/data/data";
import TourDetailPage from "@/app/components/tour-detail-page";
import { notFound } from "next/navigation";
import Script from "next/script";

export function generateStaticParams() {
    return toursData.map((tour) => ({
        slug: tour.slug,
    }));
};

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const tour = toursData.find((item) => item.slug === slug);

    if (!tour) {
        return {
        title: "Tour Not Found",
        description: "The requested tour does not exist.",
        };
    }

    const baseUrl = "https://rukmanabalitour.com";

    const firstParagraph = tour.productData.desc?.[0] || "";

    const metaDescription =
        firstParagraph.length > 155
        ? firstParagraph.substring(0, 152) + "..."
        : firstParagraph;

    return {
        title: `${tour.productData.title} | Rukmana Bali Tour`,
        description: metaDescription,

        keywords: [
        tour.productData.title,
        "Bali Tour Package",
        "Private Bali Tour",
        "Nusa Penida Tour",
        ],

        alternates: {
        canonical: `${baseUrl}/tours2/${tour.slug}`,
        },

        openGraph: {
        title: tour.productData.title,
        description: metaDescription,
        url: `${baseUrl}/tours2/${tour.slug}`,
        siteName: "Rukmana Bali Tour",
        images: [
            {
            url: `${baseUrl}${tour.images?.[0]?.src}`,
            width: 1200,
            height: 630,
            alt: tour.images?.[0]?.alt || tour.productData.title,
            },
        ],
        locale: "en_US",
        type: "website",
        },

        twitter: {
        card: "summary_large_image",
        title: tour.productData.title,
        description: metaDescription,
        images: [`${baseUrl}${tour.images?.[0]?.src}`],
        },
    };
}

export default async function TourDetail({ params }) {
    const { slug } = await params;

    const tour = toursData.find((item) => item.slug === slug);

    if (!tour) return notFound();

    const baseUrl = "https://rukmanabalitour.com";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: tour.productData.title,
        description: tour.productData.desc?.join(" ") || "",
        touristType: "Travelers",
        image: tour.images?.map(
        (img) => `${baseUrl}${img.src}`
        ),

        itinerary: tour.itineraryData?.map((item) => ({
        "@type": "TouristAttraction",
        name: item.title,
        description: item.desc,
        })),

        offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: tour.productData.price || "1281000",
        availability: "https://schema.org/InStock",
        url: `${baseUrl}/tours2/${tour.slug}`,
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

        <TourDetailPage data={tour} />
        </>
    );
}