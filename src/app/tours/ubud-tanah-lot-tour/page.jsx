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
import { FaImages } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
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
        title: '8 Hours (Approx.)'
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
        title: 'From IDR 377.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this a private tour?",
        desc: "Yes, this is a private tour with a personal driver and vehicle for you and your group."
    },
    {
        id: 2,
        title: "Is lunch included in the tour?",
        desc: "Lunch is not included, but there will be time to stop at a local restaurant during the tour."
    },
    {
        id: 3,
        title: "Is this tour suitable for children or elderly?",
        desc: "Yes, but some locations involve walking and steps, so basic mobility is recommended."
    },
    {
        id: 4,
        title: "What should I bring for the tour?",
        desc: "Comfortable shoes, sunscreen, camera, and cash for personal expenses are recommended."
    },
    {
        id:5,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaImages,
        title: "Ubud Nature Highlights",
        desc: "Tegenungan Waterfall and Tegalalang Rice Terrace."
    },
    {
        icon: MdTempleHindu,
        title: "Ubud Culture & Market",
        desc: "Traditional art market and Puseh Batuan Temple."
    },
    {
        icon: PiSunHorizonFill,
        title: "Tanah Lot Sea Temple",
        desc: "Iconic ocean temple with scenic coastal views."
    },
];

export const itineraryData = [
    {
        time: "08:00 AM",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel and depart to Ubud area."
    },
    {
        time: "09:30 AM",
        title: "Tegenungan Waterfall",
        desc: "Visit the scenic waterfall surrounded by tropical nature."
    },
    {
        time: "10:45 AM",
        title: "Tegalalang Rice Terrace",
        desc: "Enjoy panoramic views of Bali’s iconic rice terraces."
    },
    {
        time: "12:00 PM",
        title: "Ubud Art Market",
        desc: "Explore local handicrafts and souvenirs."
    },
    {
        time: "01:00 PM",
        title: "Puseh Batuan Temple",
        desc: "Visit a traditional Balinese temple with classic architecture."
    },
    {
        time: "02:00 PM",
        title: "Teba Sari Agrotourism",
        desc: "Coffee tasting with plantation views."
    },
    {
        time: "04:00 PM",
        title: "Tanah Lot Temple",
        desc: "Explore the famous sea temple and coastal scenery."
    },
    {
        time: "05:00 PM",
        title: "Return to Hotel",
        desc: "Transfer back to your hotel."
    }
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "Mineral water",
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
        title: 'Ubud Tanah Lot Tour',
        place: 'Tabanan-Ubud, Bali',
        desc1: 'Explore Bali’s natural and cultural highlights on the Ubud Tanah Lot Tour, combining waterfalls, rice terraces, and iconic temples in one day. The tour starts in Ubud with visits to Tegenungan Waterfall and Tegalalang Rice Terrace, offering refreshing nature views and some of Bali’s most scenic photo spots.',
        desc2: 'Continue to Ubud Traditional Art Market and Puseh Batuan Temple, where you can experience local craftsmanship, traditional architecture, and Balinese spiritual culture. These stops provide insight into daily life and long-standing traditions in the heart of Bali.',
        desc3: 'The journey continues to Teba Sari Bali Agrotourism for coffee tasting with plantation views before ending at Tanah Lot Temple, Bali’s famous sea temple set against the ocean. With dramatic coastal scenery and sunset views, this tour delivers a perfect blend of nature, culture, and iconic landscapes.',
    };

    const images = [
        {src:'/images/tours/ubud-tanah-lot-tour/1.jpg', alt:'Tanag Lot Temple'},
        {src:'/images/tours/ubud-tanah-lot-tour/2.jpg', alt:'Tegenungan Waterfall'},
        {src:'/images/tours/ubud-tanah-lot-tour/3.jpg', alt:'Tegalalang Rice Terrace'},
        {src:'/images/tours/ubud-tanah-lot-tour/4.jpg', alt:'Ubud Traditional Art Market'},
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