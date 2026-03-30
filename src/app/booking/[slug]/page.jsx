import { getProductWithPrice } from "@/app/data/get-product-with-price";

import BookingForm from "@/app/booking/components/booking-form";
import BookingSummary from "@/app/booking/components/booking-summary";

export default async function BookingPage({ params, searchParams }) {

    const { slug } = await params;

    const option = searchParams.option;
    const pax = Number(searchParams.pax);
    const date = searchParams.date;

    const product = getProductWithPrice(slug);

    if (!product) return <p>Product not found</p>;

    const selectedOption = product.priceOptions.find(
        (o) => o.id === option
    );

    const pricingTier = selectedOption?.pricing.find(
        (p) => p.pax === pax
    );

    const total = pricingTier?.total || 0;

    const bookingData = {
        slug,
        option,
        pax,
        date,
        total,
        title: product.productData.title,
        priceOptions: product.priceOptions,
    };

    return (
        <section className="container py-20">

            <div className="grid md:grid-cols-3 gap-10">

                {/* FORM */}
                <div className="md:col-span-2">
                    <BookingForm bookingData={bookingData} />
                </div>

                {/* SUMMARY */}
                <BookingSummary bookingData={bookingData} />

            </div>

        </section>
    );
}