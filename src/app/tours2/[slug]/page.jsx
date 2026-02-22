import { toursData } from "@/app/data/data";
import TourDetailPage from "@/app/components/tour-detail-page";
import { notFound } from "next/navigation";
import Script from "next/script";

export function generateStaticParams() {
    return toursData.map((tour) => ({
        slug: tour.slug,
    }));
    }

    export async function generateMetadata({ params }) {
    const { slug } = await params;

    const tour = toursData.find(
        (item) => item.slug === slug
    );

    if (!tour) {
        return {
        title: "Tour Not Found",
        description: "The requested tour does not exist.",
        };
    }

    return {
        title: `${tour.productData.title} | Rukmana Bali Tour`,
        description: tour.productData.desc1.slice(0, 155),

        keywords: [
        tour.productData.title,
        "Nusa Penida Tour",
        "Nusa Penida Day Trip",
        "Bali Tour Package",
        ],

        alternates: {
        canonical: `https://rukmanabalitour.com/tours2/${tour.slug}`,
        },

        openGraph: {
        title: tour.productData.title,
        description: tour.productData.desc1,
        url: `https://rukmanabalitour.com/tours2/${tour.slug}`,
        siteName: "Rukmana Bali Tour",
        images: [
            {
            url: `https://rukmanabalitour.com${tour.images[0].src}`,
            width: 1200,
            height: 630,
            alt: tour.images[0].alt,
            },
        ],
        locale: "en_US",
        type: "website",
        },

        twitter: {
        card: "summary_large_image",
        title: tour.productData.title,
        description: tour.productData.desc1,
        images: [`https://rukmanabalitour.com${tour.images[0].src}`],
        },
    };
    }

    export default async function TourDetail({ params }) {
    const { slug } = await params;

    const tour = toursData.find(
        (item) => item.slug === slug
    );

    if (!tour) return notFound();

    // Structured Data (Tour Schema)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: tour.productData.title,
        description: tour.productData.desc1,
        touristType: "Travelers",
        image: tour.images.map(
        (img) => `https://rukmanabalitour.com${img.src}`
        ),
        itinerary: tour.itineraryData.map((item) => ({
        "@type": "TouristAttraction",
        name: item.title,
        description: item.desc,
        })),
        offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "1281000",
        availability: "https://schema.org/InStock",
        url: `https://rukmanabalitour.com/tours/${tour.slug}`,
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