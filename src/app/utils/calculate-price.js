export function calculatePrice(option, pax) {
    if (!option?.pricing) return null;

    const pricing = option.pricing.find(
        (p) => p.pax === pax
    );

    if (!pricing) return null;

    return {
        total: pricing.total,
        pricePerPerson: Math.round(pricing.total / pax)
    };
}