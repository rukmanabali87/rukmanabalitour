import { toursData, activitiesData, ticketsData } from "./data";
import { priceProducts } from "./price-products";

export function getProductWithPrice(type, slug) {
    const DATA_MAP = {
        tours: toursData,
        activities: activitiesData,
        tickets: ticketsData,
    };

    const product = DATA_MAP[type]?.find(
        (item) => item.slug === slug
    );

    if (!product) return null;

    const price = priceProducts.find(
        (item) => item.slug === slug
    );

    return {
        ...product,
        priceOptions: price?.options || [],
    };
}