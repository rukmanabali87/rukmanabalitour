'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaUserCheck, FaWalking, FaFish } from "react-icons/fa";

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
        title: '4 Hours (Approx.)'
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
        title: 'From IDR 585.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Do I need swimming or diving experience?",
        desc: "No. Sea walking is suitable for beginners with no experience."
    },
    {
        id: 2,
        title: "How long does the sea walker session last?",
        desc: "The underwater walk lasts around 30 minutes."
    },
    {
        id: 3,
        title: "Is sea walking safe?",
        desc: "Yes. The activity is guided and monitored by professional instructors."
    },
    {
        id: 4,
        title: "Will my hair get wet?",
        desc: "Your face and hair usually stay dry during the activity."
    },
    {
        id: 5,
        title: "Is hotel transfer included?",
        desc: "Hotel transfer is available as an optional service."
    },
    {
        id:6,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaWalking,
        title: "Walk on the Ocean Floor",
        desc: "Explore the seabed using a special air-supplied helmet."
    },
    {
        icon: FaFish,
        title: "Feed Tropical Fish",
        desc: "Get close and interact with colorful marine life."
    },
    {
        icon: FaUserCheck,
        title: "Safe & Beginner Friendly",
        desc: "Guided by professional instructors at all times."
    }
];

export const itineraryData = [
    {
        time: "09:00 AM",
        title: "Arrival & Registration",
        desc: "Check-in and prepare at Bintang Beach Club."
    },
    {
        time: "09:30 AM",
        title: "Safety Briefing",
        desc: "Instruction by professional instructors."
    },
    {
        time: "10:00 AM",
        title: "Sea Walker Experience",
        desc: "30-minute underwater walking session."
    },
    {
        time: "11:00 AM",
        title: "Shower & Change",
        desc: "Use locker and shower facilities."
    },
    {
        time: "12:30 PM",
        title: "Tour Ends / Return Transfer",
        desc: "Optional hotel transfer."
    },
];

export const inclusionsData = {
    included: [
        "Hotel return transfer (optional)",
        "Professional sea walker instructors",
        "Sea walker safety equipment",
        "30-minute sea walk",
        "Locker",
        "Insurance",
    ],
    excluded: [
        "Meals",
        "Photos",
    ]
};

export default function SeaWalkerBali(){

    const productData = {
        title: 'Sea Walker Bali',
        place: 'Badung, Bali',
        desc1: 'Sea Walker Bali is a fun and safe underwater experience for those who want to explore the ocean without swimming or getting their hair wet. Wearing a special diving helmet that supplies fresh air from the surface, you can walk along the sea floor and come face to face with colorful tropical fish. With professional instructors guiding you at all times, this activity is suitable even for beginners with no diving experience.',
        desc2: 'The sea walking session lasts around 30 minutes at a depth of approximately 15 feet, allowing you to enjoy marine life up close and even feed the fish. Located at Bintang Beach Club Dive & Water Sport, this package includes safety equipment, locker use, insurance, and optional hotel transfers—making it an easy and memorable way to experience Bali’s underwater world.',
    };

    const images = [
        {src:'/images/activities/sea-walker-bali/1.jpg', alt:'Sea Walker Bali Activity'},
        {src:'/images/activities/sea-walker-bali/2.jpg', alt:'Underwater Sea Walking Bali'},
        {src:'/images/activities/sea-walker-bali/3.jpg', alt:'Feeding Tropical Fish Bali'},
        {src:'/images/activities/sea-walker-bali/4.jpg', alt:'Sea Walker Helmet Bali'},
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