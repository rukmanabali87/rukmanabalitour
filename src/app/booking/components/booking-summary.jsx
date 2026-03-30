import { calculatePrice } from "@/app/utils/calculate-price";

export default function BookingSummary({ bookingData }) {

    const selectedOption = bookingData?.priceOptions?.find(
        (opt) => opt.id === bookingData.option
    );

    const pricing = calculatePrice(
        selectedOption,
        Number(bookingData.pax || 1)
    );

    if (!pricing) {
        return (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow sticky top-24">
                <h2 className="text-xl font-semibold mb-6 text-center">Booking Summary</h2>
                <p className="text-sm text-red-500">
                    Pricing not available for selected pax.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow sticky top-24">

            <h2 className="text-xl font-semibold mb-6">Booking Summary</h2>

            <div className="space-y-3 text-sm">

                <p><strong>Product:</strong> {bookingData.title}</p>

                <p>
                    <strong>Option:</strong> {selectedOption?.name}
                </p>

                <p>
                    <strong>Date:</strong> {bookingData.date}
                </p>

                <p>
                    <strong>Pax:</strong> {bookingData.pax} person
                </p>

                <hr />

                <p className="flex justify-between">
                    <span>Price per person</span>
                    <span>IDR {pricing.pricePerPerson.toLocaleString()}</span>
                </p>

                <p className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>IDR {pricing.total.toLocaleString()}</span>
                </p>

            </div>

        </div>
    );
}