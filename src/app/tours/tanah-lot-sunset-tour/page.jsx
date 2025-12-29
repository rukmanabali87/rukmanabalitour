'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers, FiCamera } from "react-icons/fi";
import { FaCar, FaLandmark, FaCameraRetro } from "react-icons/fa";
import { PiIslandFill } from "react-icons/pi";

import TourImageOne from "@/app/components/tour-image-one";
import TourDetailFaq from "@/app/components/faq/tour-detail-faq";
import TourHighlights from "@/app/components/tour-highlights";
import TourItinerary from "@/app/components/tour-itinerary";
import TourInclusions from "@/app/components/tour-inclusions";
import Client from "@/app/components/client";

export const tourDetailAbout = [
    {
        icon: FiClock,
        name: 'Duration',
        title: '6 Hours'
    },
    {
        icon: FiActivity,
        name: 'Type',
        title: 'Tour'
    },
    {
        icon: FiUsers,
        name: 'Group Size',
        title: '15 Peoples'
    },
    {
        icon: FiGlobe,
        name: 'Languages',
        title: 'English'
    },
    {
        icon: FiDollarSign,
        name: 'Start Price',
        title: 'From IDR 327.000'
    },
];

export const faqData = [
    {
        id:1,
        title:'Is this tour private?',
        desc:'Yes. You will have your own private car and driver for the entire day.'
    },
    {
        id:2,
        title:'Can I customize tour itinerary?',
        desc:'Yes. The itinerary can be adjusted based on your preferences. Please discuss your requests with the operator in advance. Additional charges may apply.'
    },
    {
        id:3,
        title:'Is it suitable for children or elderly?',
        desc:'Yes. All locations are easily accessible with minimal walking and no strenuous activities.'
    },
    {
        id:4,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaCar,
        title: "Private Car & Driver",
        desc: "Comfortable travel with a professional local driver.",
    },
    {
        icon: FaLandmark,
        title: "Cultural Heritage Site",
        desc: "Visit Taman Ayun Temple, a UNESCO World Heritage Site.",
    },
    {
        icon: PiIslandFill,
        title: "Sunset at Tanah Lot",
        desc: "Witness a spectacular sunset at Bali’s iconic sea temple.",
    },
    {
        icon: FaCameraRetro,
        title: "Ocean View Scenery",
        desc: "Enjoy stunning coastal views and photo opportunities.",
    },
];

export const itineraryData = [
    {
        time: "14:00",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel in selected areas."
    },
    {
        time: "14:30",
        title: "Depart to Taman Ayun Temple",
        desc: "Drive to the royal temple of the former Mengwi Kingdom."
    },
    {
        time: "15:15",
        title: "Taman Ayun Temple",
        desc: "Explore the UNESCO World Heritage temple and its beautiful gardens."
    },
    {
        time: "16:00",
        title: "Depart to Tanah Lot Temple",
        desc: "Continue the journey toward Bali’s iconic sea temple."
    },
    {
        time: "16:45",
        title: "Tanah Lot Temple",
        desc: "Arrive at Tanah Lot and explore the surrounding area."
    },
    {
        time: "17:30",
        title: "Sunset at Tanah Lot",
        desc: "Enjoy a spectacular sunset overlooking the Indian Ocean."
    },
    {
        time: "18:15",
        title: "Return to Hotel",
        desc: "Depart back to your hotel after sunset."
    },
    {
        time: "20:00",
        title: "Hotel Drop-off",
        desc: "Drop-off at your hotel. Tour ends."
    }
];

export const inclusionsData = {
    included: [
        "Private Car & Driver",
        "English-Speaking Local Guide",
        "All entrance fees (optional)",
        "Insurance",
    ],
    excluded: [
        "Meals Fee",
        "Personal Expenses",
    ]
};

export default function TanahLotSunsetTour(){

    const images = [
        {src:'/images/tours/tanah-lot-sunset-tour/1.webp', alt:'Tanah Lot Temple with Sunset'},
        {src:'/images/tours/tanah-lot-sunset-tour/2.webp', alt:'Tanah Lot Temple Viewpoint'},
        {src:'/images/tours/tanah-lot-sunset-tour/3.jpg', alt:'Tanah Lot Temple Pathway'},
        {src:'/images/tours/tanah-lot-sunset-tour/4.jpg', alt:'Taman Ayun Temple'},
    ];

    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
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
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">Tanah Lot Sunset Tour</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Tours</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tanah Lot Sunset Tour</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-7">
                        <TourImageOne images={images}/>

                        <h5 className="text-2xl font-semibold mt-5">Nusa Penida Day Tour</h5>
                        <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin>Klungkung, Bali</p>

                        <ul className="list-none">
                            {tourDetailAbout.map((item,index)=>{
                                let Icon = item.icon
                                return(
                                    <li className="inline-flex items-center me-5 mt-5" key={index}>
                                        <Icon className="size-6 stroke-[1.5] text-[#397A3D]"></Icon>

                                        <div className="ms-3">
                                            <p className="font-medium">{item.name}</p>
                                            <span className="text-slate-400 font-medium text-sm">{item.title}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">Tour Descriptions:</h5>

                            <p className="text-slate-400 mt-6">
                                Experience the beauty of Bali’s culture and coastline on the Tanah Lot Sunset Tour, a perfect half-day journey featuring two of the island’s most iconic temples. The tour begins with a visit to Taman Ayun Temple, a UNESCO-listed heritage site from the former Mengwi Kingdom. Known for its classic Balinese architecture, peaceful water moat, and beautifully arranged gardens, this royal temple offers a serene introduction to Bali’s spiritual and cultural traditions.
                            </p>
                            <p className="text-slate-400 mt-3">
                                The highlight of the tour is Tanah Lot Temple, one of Bali’s most famous sunset spots. Perched on a dramatic offshore rock formation overlooking the Indian Ocean, Tanah Lot provides breathtaking ocean views and unforgettable sunset scenery. Stroll around the temple complex, explore the surrounding coastal area, and capture stunning photos as the sky transforms into golden and orange hues. The Tanah Lot Sunset Tour is an ideal choice for travelers seeking cultural exploration combined with Bali’s most spectacular sunset experience.    
                            </p>
                        </div>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold mb-6">Tour Highlights:</h5>
                
                            <TourHighlights items={highlightsData} />
                        </div>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">Tour Itinerary:</h5>

                            <TourItinerary items={itineraryData}/>
                        </div>

                        <TourInclusions items={inclusionsData}/>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">Questions & Answers:</h5>

                            <TourDetailFaq items={faqData}/>
                        </div>

                        <Client/>
                    </div>
                    <DetailSidebar/>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}