import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";
import BookingForm from "./booking-form";
import BookingSummary from "./booking-summary";

export default function BookingLayout({ bookingData }) {
    return (
        <>
            <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light" />

            <section className="relative w-full py-36 overflow-hidden">
                <Image
                    src="/images/bg/9.jpg"
                    alt="Bali Tour Packages"
                    fill
                    priority
                    className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">Complete Your Booking</h1>
                    </div>
                </div>
            </section>

            <div className="container py-16">

                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-8">
                        <BookingForm bookingData={bookingData} />
                    </div>

                    <div className="md:col-span-4">
                        <BookingSummary bookingData={bookingData} />
                    </div>
                </div>
            </div>

            <Footer/>
            <Switcher/>
        </>
    );
}