'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { PiSunHorizonFill, PiIslandFill } from "react-icons/pi";
import { FaShrimp } from "react-icons/fa6";

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
        title: '6 Hours (Approx.)'
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
        title: 'From IDR 299.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this a private tour?",
        desc: "Yes, this is a private tour with a personal driver and vehicle, exclusively for you and your group."
    },
    {
        id: 2,
        title: "Is the Kecak & Fire Dance ticket included?",
        desc: "No, the Kecak & Fire Dance ticket is not included and can be purchased directly at Uluwatu Temple."
    },
    {
        id: 3,
        title: "Is this tour suitable for children or elderly?",
        desc: "Yes, but please note that Uluwatu Temple involves walking and stairs, so basic mobility is recommended."
    },
    {
        id: 4,
        title: "What should I bring for the tour?",
        desc: "Comfortable shoes, sunscreen, and a camera are recommended for a pleasant experience."
    },
    {
        id:5,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: PiIslandFill,
        title: "Padang Padang Beach",
        desc: "White-sand beach with scenic limestone cliffs."
    },
    {
        icon: PiSunHorizonFill,
        title: "Uluwatu Temple & Sunset",
        desc: "Iconic cliffside temple with sunset views and Kecak dance."
    },
    {
        icon: FaShrimp,
        title: "Jimbaran Bay Dinner",
        desc: "Fresh seafood dining by the beach."
    }
];

export const itineraryData = [
    {
        time: "02:00 PM",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel and depart to South Bali."
    },
    {
        time: "03:00 PM",
        title: "Padang Padang Beach",
        desc: "Visit the white-sand beach surrounded by limestone cliffs."
    },
    {
        time: "04:30 PM",
        title: "Uluwatu Temple",
        desc: "Explore the iconic cliffside sea temple."
    },
    {
        time: "06:00 PM",
        title: "Kecak & Fire Dance",
        desc: "Watch the traditional Kecak performance at Uluwatu Temple."
    },
    {
        time: "07:30 PM",
        title: "Jimbaran Bay Dinner",
        desc: "Enjoy seafood dining by the beach."
    },
    {
        time: "08:00 PM",
        title: "Return to Hotel",
        desc: "Transfer back to your hotel."
    }
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "Sarong for temple visit",
        "Entrance tickets (optional)",
        "Seafood dinner package (optional)",
        "Insurance",
    ],
    excluded: [
        "Kecak & Fire Dance ticket",
        "Personal Expenses",
    ]
};

export default function TanahLotSunsetTour(){

    const productData = {
        title: 'Uluwatu Sunset Tour',
        place: 'Badung, Bali',
        desc1: 'Discover the beauty of Bali’s southern coastline on the Uluwatu Sunset Tour, featuring stunning beaches, dramatic cliffs, and iconic cultural landmarks. The journey begins at Padang Padang Beach, a beautiful white-sand beach surrounded by limestone cliffs, ideal for relaxing, sightseeing, and capturing scenic photos.',
        desc2: 'Continue to the famous Uluwatu Temple, located on a high cliff overlooking the Indian Ocean. This sacred sea temple offers breathtaking sunset views and is also home to the traditional Kecak and Fire Dance, performed in the evening within the temple area.',
        desc3: 'The tour concludes at Jimbaran Bay, known for its relaxed beachfront atmosphere and fresh seafood dining by the beach. This final stop provides a perfect ending to the Uluwatu Sunset Tour, combining natural scenery, Balinese culture, and a memorable coastal dining experience.',
    };

    const images = [
        {src:'/images/tours/uluwatu-sunset-tour/1.jpg', alt:'Uluwatu Temple Sunset'},
        {src:'/images/tours/uluwatu-sunset-tour/2.jpg', alt:'Padang-Padang Beach'},
        {src:'/images/tours/uluwatu-sunset-tour/3.jpg', alt:'Kecak Dance Performance'},
        {src:'/images/tours/uluwatu-sunset-tour/4.jpg', alt:'Jimbaran Bay'},
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
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">{productData.title}</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Tours</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">{productData.title}</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-7">
                        <TourImageOne images={images}/>

                        <h5 className="text-2xl font-semibold mt-5">{productData.title}</h5>
                        <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin>{productData.place}</p>

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
                                {productData.desc1}
                            </p>
                            <p className="text-slate-400 mt-3">
                                {productData.desc2}
                            </p>
                            <p className="text-slate-400 mt-3">
                                {productData.desc3}
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