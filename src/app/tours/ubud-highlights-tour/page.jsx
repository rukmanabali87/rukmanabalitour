'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { PiSunHorizonDuotone, PiBankDuotone } from "react-icons/pi";
import { FaWater, FaFeather, FaImages } from "react-icons/fa";
import { GiSeaCliff } from "react-icons/gi";

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
        title: '8 to 10 Hours (Approx.)'
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
        title: 'From IDR 411.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this a private Ubud tour?",
        desc: "Yes, this is a private Ubud Highlights Tour with your own air-conditioned vehicle and personal driver-guide."
    },
    {
        id: 2,
        title: "Which places are visited on the Ubud Highlights Tour?",
        desc: "The tour includes Ubud Monkey Forest, Tegenungan Waterfall, Elephant Cave, Tegalalang Rice Terrace, Ubud Art Market, and Ubud Palace."
    },
    {
        id: 3,
        title: "Are entrance tickets included?",
        desc: "Entrance tickets are optional and can be included during booking or paid directly at the attractions."
    },
    {
        id: 4,
        title: "Is this tour suitable for children and elderly?",
        desc: "Yes, the tour is suitable, but some locations involve walking and stairs, so basic mobility is recommended."
    },
    {
        id:5,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
     {
        icon: PiBankDuotone,
        title: "Cultural Heritage",
        desc: "Explore Ubud Palace and shop local crafts at Ubud Art Market."
    },
    {
        icon: FaImages,
        title: "Natural Scenery",
        desc: "Enjoy Tegenungan Waterfall and the iconic Tegalalang Rice Terrace."
    },
    {
        icon: FaFeather,
        title: "Wildlife & Temples",
        desc: "See monkeys at Ubud Monkey Forest and visit Elephant Cave."
    },
];

export const itineraryData = [
    {
        time: "08:00 AM",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel by private air-conditioned car with an English-speaking driver."
    },
    {
        time: "09:30 AM",
        title: "Ubud Monkey Forest",
        desc: "Observe long-tailed macaques in their natural jungle habitat."
    },
    {
        time: "10:45 AM",
        title: "Tegenungan Waterfall",
        desc: "Enjoy scenic views and the refreshing atmosphere of the waterfall."
    },
    {
        time: "12:00 PM",
        title: "Elephant Cave (Goa Gajah)",
        desc: "Explore an ancient temple with unique carvings and spiritual ambiance."
    },
    {
        time: "01:15 PM",
        title: "Lunch Break",
        desc: "Free time for lunch at a local restaurant (own expense)."
    },
    {
        time: "02:15 PM",
        title: "Tegalalang Rice Terrace",
        desc: "Admire the iconic rice terraces and capture beautiful photos."
    },
    {
        time: "03:45 PM",
        title: "Ubud Traditional Art Market & Ubud Palace",
        desc: "Visit the royal palace and shop for local handicrafts in Ubud center."
    },
    {
        time: "04:00 PM",
        title: "Return to Hotel",
        desc: "Transfer back to your hotel, concluding the Ubud Highlights Tour."
    },
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "Bottle mineral water",
        "Entrance tickets (optional)",
        "Insurance",
    ],
    excluded: [
        "Lunch",
        "Personal Expenses",
    ]
};

export default function TanahLotSunsetTour(){

    const productData = {
        title: 'Ubud Highlights Tour',
        place: 'Ubud, Bali',
        desc1: 'Ubud Highlights Tour is a private day tour designed to explore the cultural and natural treasures of Ubud at a relaxed pace. With a personal driver-guide and private vehicle, you can enjoy Ubud’s top attractions comfortably without joining a group tour.',
        desc2: 'This tour includes a visit to the Ubud Monkey Forest to see macaques in their natural habitat, followed by scenic stops at Tegenungan Waterfall and the famous Tegalalang Rice Terrace. You will also explore Goa Gajah (Elephant Cave), a historic temple known for its unique stone entrance and spiritual atmosphere.',
        desc3: 'The journey continues to Ubud Traditional Art Market and Ubud Palace, where you can shop for local handicrafts and learn about Ubud’s royal heritage. Combining culture, nature, and local life, this Ubud Highlights Tour is perfect for travelers who want to experience the best of Ubud in one day.',
    };

    const images = [
        {src:'/images/tours/ubud-highlights-tour/1.jpg', alt:'Dolphin in Lovina Beach'},
        {src:'/images/tours/ubud-highlights-tour/2.jpg', alt:'Dolphins Watching Tour'},
        {src:'/images/tours/ubud-highlights-tour/3.jpg', alt:'Gitgit Waterfall Bali'},
        {src:'/images/tours/ubud-highlights-tour/4.jpg', alt:'Wanagiri Hidden Hill Bali'},
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