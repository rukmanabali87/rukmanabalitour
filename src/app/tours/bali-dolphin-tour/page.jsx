'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { PiSunHorizonFill, PiSunHorizonDuotone } from "react-icons/pi";
import { FaImages } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiWaterfall } from "react-icons/gi";

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
        title: '10 Hours (Approx.)'
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
        title: 'From IDR 702.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this a private tour?",
        desc: "Yes, this is a private tour with a personal driver and vehicle, exclusively for your group."
    },
    {
        id: 2,
        title: "What is the minimum booking requirement?",
        desc: "The minimum booking requirement for this tour is 2 persons."
    },
    {
        id: 3,
        title: "Is dolphin watching guaranteed?",
        desc: "Dolphins are usually seen in Lovina, but sightings depend on natural conditions and cannot be guaranteed."
    },
    {
        id: 4,
        title: "Is this tour suitable for children or elderly?",
        desc: "Yes, but early departure and boat activity should be considered, especially for elderly guests."
    },
    {
        id:5,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: PiSunHorizonDuotone,
        title: "Sunrise Dolphin Watching",
        desc: "Watch dolphins swimming freely at sunrise in Lovina Beach."
    },
    {
        icon: GiWaterfall,
        title: "Git Git Waterfall",
        desc: "Visit a scenic waterfall surrounded by lush tropical nature."
    },
    {
        icon: FaImages,
        title: "Wanagiri Twin Lakes View",
        desc: "Enjoy panoramic views of the famous Twin Lakes in North Bali."
    },
];

export const itineraryData = [
    {
        time: "03:00 AM",
        title: "Hotel Pick-up",
        desc: "Early morning pick-up from your hotel and depart to Lovina Beach, North Bali."
    },
    {
        time: "06:00 AM",
        title: "Lovina Dolphin Watching",
        desc: "Board a traditional jukung boat and watch dolphins swimming freely at sunrise."
    },
    {
        time: "08:30 AM",
        title: "Breakfast",
        desc: "Enjoy breakfast at a local restaurant near Lovina Beach."
    },
    {
        time: "10:00 AM",
        title: "Git Git Waterfall",
        desc: "Visit a scenic waterfall surrounded by lush tropical nature."
    },
    {
        time: "12:00 PM",
        title: "Wanagiri Twin Lakes View",
        desc: "Stop at Wanagiri Hidden Hills to enjoy panoramic views of the Twin Lakes."
    },
    {
        time: "01:30 PM",
        title: "Return to Hotel",
        desc: "Transfer back to your hotel with scenic countryside views."
    },
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "Mineral water",
        "Breakfast",
        "Entrance tickets (optional)",
        "Insurance",
    ],
    excluded: [
        "Personal Expenses",
    ]
};

export default function TanahLotSunsetTour(){

    const productData = {
        title: 'Bali Dolphin Tour',
        place: 'Buleleng, Bali',
        desc1: 'Experience an unforgettable morning on the Bali Dolphin Tour, starting with an early journey to Lovina Beach in North Bali. As the sun rises, board a traditional jukung boat and head out to sea to witness dolphins swimming and playing freely in their natural habitat, creating a magical sunrise experience.',
        desc2: 'After the dolphin-watching experience, the tour continues to Git Git Waterfall, one of the most beautiful waterfalls in North Bali. Surrounded by lush greenery and fresh mountain air, this stop offers a refreshing nature escape and excellent photo opportunities.',
        desc3: 'The tour ends at Wanagiri Hidden Hills, where you can enjoy stunning views of the famous Twin Lakes. Combined with comfortable transportation and scenic routes, the Bali Dolphin Tour is a perfect choice for travelers seeking wildlife encounters and natural beauty in North Bali.',
    };

    const images = [
        {src:'/images/tours/bali-dolphin-tour/1.jpg', alt:'Dolphin in Lovina Beach'},
        {src:'/images/tours/bali-dolphin-tour/2.jpg', alt:'Dolphins Watching Tour'},
        {src:'/images/tours/bali-dolphin-tour/3.jpg', alt:'Gitgit Waterfall Bali'},
        {src:'/images/tours/bali-dolphin-tour/4.jpg', alt:'Wanagiri Hidden Hill Bali'},
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
                    className="object-cover object-center"
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