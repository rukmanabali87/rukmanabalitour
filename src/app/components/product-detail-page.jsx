import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";
import { FiMapPin } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";
import { FiClock, FiUsers, FiGlobe, FiDollarSign, FiActivity } from "react-icons/fi";

import ProductImage from "@/app/components/product-image";
import ProductDetailFaq from "@/app/components/faq/product-detail-faq";
import ProductHighlights from "@/app/components/product-highlights";
import ProductItinerary from "@/app/components/product-itinerary";
import ProductInclusions from "@/app/components/product-inclusions";
import Client from "@/app/components/client";

export default function ProductDetailPage({ data, type }) {

    const iconMap = {
        clock: FiClock,
        users: FiUsers,
        globe: FiGlobe,
        dollar: FiDollarSign,
        activity: FiActivity,
    };

    const descriptionHeadingMap = {
        tours: "Tour Description",
        activities: "Activity Description",
        tickets: "Ticket Information",
    };

    const highlightHeadingMap = {
        tours: "Tour Highlights",
        activities: "Activity Highlights",
        tickets: "Ticket Highlights",
    };

    const itineraryHeadingMap = {
        tours: "Tour Itinerary",
        activities: "Activity Itinerary",
        tickets: "Ticket Itinerary",
    };

    const descriptionHeading = descriptionHeadingMap[type] || "Description";
    const highlightHeading = highlightHeadingMap[type] || "Highlights";
    const itineraryHeading = itineraryHeadingMap[type] || "Itinerary";
    
    const {
        productData,
        images,
        tourDetailAbout,
        highlightsData,
        itineraryData,
        inclusionsData,
        faqData
    } = data;

    return (
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light" />

        <section className="relative table w-full items-center py-36 bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 -z-20">
                <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    priority
                    className="object-cover object-top"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">
                        {productData.title}
                    </h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold text-white/50">
                        <Link href="/">{type}</Link>
                    </li>
                    <li className="inline-block text-base text-white/50 mx-0.5">
                        <HiChevronRight className="text-xl inline-block align-middle" />
                    </li>
                    <li className="inline-block uppercase text-[13px] font-bold text-white">
                        {productData.title}
                    </li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-7">

                    <ProductImage images={images} />

                    <h5 className="text-2xl font-semibold mt-5">{productData.title}</h5>

                    <p className="flex items-center text-slate-400 font-medium mt-2">
                        <FiMapPin className="size-4 me-1" />
                        {productData.place}
                    </p>

                    <ul className="list-none">
                        {tourDetailAbout?.map((item, index) => {
                            const Icon = iconMap[item.icon];

                            return (
                                <li key={index} className="inline-flex items-center me-5 mt-5">
                                    {Icon && <Icon className="size-6 stroke-[1.5] text-primary" />}
                                    <div className="ms-3">
                                        <p className="font-medium">{item.name}</p>
                                        <span className="text-slate-400 font-medium text-sm">
                                            {item.title}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold">{descriptionHeading}:</h5>

                        {productData.desc.map((text, index) => (
                            <p
                                key={index}
                                className={`text-slate-400 ${index === 0 ? "mt-6" : "mt-3"}`}
                                >
                                {text}
                            </p>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold mb-6">{highlightHeading}:</h5>
                        <ProductHighlights items={highlightsData} />
                    </div>

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold">{itineraryHeading}:</h5>
                        <ProductItinerary items={itineraryData} />
                    </div>

                    <ProductInclusions items={inclusionsData} />

                    <div className="mt-6">
                        <h5 className="text-lg font-semibold">Questions & Answers:</h5>
                        <ProductDetailFaq items={faqData} />
                    </div>

                    <Client />
                    </div>

                    <DetailSidebar />
                </div>
            </div>
        </section>

        <Footer />
        <Switcher />
        </>
    );
}