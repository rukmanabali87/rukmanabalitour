'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaMountain, FaSun, FaCoffee } from "react-icons/fa";
import { TbCliffJumping } from "react-icons/tb";
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
        title: 'Activity'
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
        title: 'From IDR 361.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "What time does the tour start?",
        desc: "Hotel pick-up starts around 1:00 AM to catch the sunrise."
    },
    {
        id: 2,
        title: "Is trekking experience required?",
        desc: "No. The trek is suitable for beginners with a local guide."
    },
    {
        id: 3,
        title: "How long is the hike?",
        desc: "The hike takes around 1.5–2 hours each way."
    },
    {
        id: 4,
        title: "What should I bring?",
        desc: "Comfortable shoes, warm jacket, and personal items."
    },
    {
        id: 5,
        title: "Is hotel transfer included?",
        desc: "Yes, private hotel transfer is available as an optional service."
    },
    {
        id:6,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        id: 1,
        icon: FaMountain,
        title: "Mount Batur Sunrise Trek",
        desc: "Hike an active volcano with a licensed local guide."
    },
    {
        id: 2,
        icon: FaSun,
        title: "Sunrise & Breakfast at the Summit",
        desc: "Enjoy sunrise views with a light breakfast on top."
    },
    {
        id: 3,
        icon: FaCoffee,
        title: "Coffee Plantation Visit",
        desc: "Taste local coffee or tea after the trek."
    },
];

export const itineraryData = [
    {
        time: "01:00",
        title: "Hotel Pick-up",
        desc: "Pick-up by private air-conditioned car."
    },
    {
        time: "03:00",
        title: "Arrival at Basecamp",
        desc: "Meet trekking guide and prepare."
    },
    {
        time: "03:30",
        title: "Start Trekking",
        desc: "Begin hiking Mount Batur."
    },
    {
        time: "06:00",
        title: "Summit & Sunrise",
        desc: "Watch sunrise and enjoy breakfast."
    },
    {
        time: "07:00",
        title: "Descend to Basecamp",
        desc: "Trek back down safely."
    },
    {
        time: "09:00",
        title: "Coffee Plantation Visit",
        desc: "Coffee or tea tasting."
    },
    {
        time: "10:00",
        title: "Return Transfer",
        desc: "Drive back to hotel."
    },
    {
        time: "11:00",
        title: "Arrive at Hotel",
        desc: "Tour ends."
    },
];

export const inclusionsData = {
    included: [
        "Private air-conditioned hotel transfer (optional)",
        "Licensed trekking guide",
        "Summit breakfast",
        "Flashlight & mineral water",
        "Coffee/tea tasting (optional)",
        "All fees & taxes",
        "Insurance",
    ],
    excluded: [
        "Personal expenses",
    ]
};

export default function JumpingSlidingAlingAlingWaterfall(){

    const productData = {
        title: 'Mount Batur Sunrise Trekking',
        place: 'Bangli, Bali',
        desc1: 'Mount Batur Sunrise Trekking is one of Bali’s most iconic experiences, offering breathtaking views of lakes, jungle, ocean, and mountains from the summit of an active volcano. This complete package includes round-trip hotel transfers, a licensed local trekking guide, flashlight, mineral water, and a light breakfast served at the top—so you can focus fully on enjoying the sunrise adventure.',
        desc2: 'After reaching the summit around 6:00 AM, relax and enjoy breakfast while watching the sun rise over Bali. The journey continues with a visit to a local coffee plantation, where you can see how coffee is grown and enjoy a tasting of coffee or tea. With private transport, professional guidance, and all fees included, this trek is a safe, comfortable, and unforgettable way to start your day in Bali.',
    };

    const images = [
        {src:'/images/activities/mount-batur-sunrise-trekking/1.jpg', alt:'Sunrise in Mount Batur Bali'},
        {src:'/images/activities/mount-batur-sunrise-trekking/2.jpg', alt:'Mount Batur Viewpoint Bali'},
        {src:'/images/activities/mount-batur-sunrise-trekking/3.jpg', alt:'Hiking Mount Batur Bali'},
        {src:'/images/activities/mount-batur-sunrise-trekking/4.jpg', alt:'Mount Batur in Top of the Mountain'},
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
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Activities</Link></li>
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