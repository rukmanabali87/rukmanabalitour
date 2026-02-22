import { toursData } from "@/app/data/data"

export default function sitemap() {
    const baseUrl = "https://www.rukmanabalitour.com"

    const tourUrls = toursData.map((tour) => ({
        url: `${baseUrl}/tours2/${tour.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        images: tour.images.map((img) => ({
        url: `${baseUrl}${img.src}`,
        title: tour.productData.title,
        })),
    }));

    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
        },
        ...tourUrls,
    ];
}