'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaCrosshairs, FaUsers, FaCar } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

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
        title: 'From IDR 670.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is Bali Paintball safe for beginners?",
        desc: "Yes. Professional staff provide safety briefing and assist throughout the game."
    },
    {
        id: 2,
        title: "What is the minimum age to join?",
        desc: "Participants must be at least 12 years old."
    },
    {
        id: 3,
        title: "How long does the paintball session last?",
        desc: "The activity lasts around 2–3 hours including briefing and games."
    },
    {
        id: 4,
        title: "Is hotel transfer included?",
        desc: "Yes, free hotel transfer is included from selected areas."
    },
    {
        id: 5,
        title: "What should I wear?",
        desc: "Comfortable clothes and closed shoes are recommended."
    },
    {
        id:6,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaCrosshairs,
        title: "Paintball Adventure",
        desc: "Fun outdoor paintball games."
    },
    {
        icon: FaUsers,
        title: "Group Friendly",
        desc: "Suitable for beginners and families."
    },
    {
        icon: FaCar,
        title: "Hotel Transfer",
        desc: "Comfortable round-trip transport."
    },
];

export const itineraryData = [
    {
        time: "09:00 AM",
        title: "Hotel Pick-up",
        desc: "Pick-up by private air-conditioned vehicle."
    },
    {
        time: "10:00 AM",
        title: "Arrival & Registration",
        desc: "Welcome drink, registration, and preparation."
    },
    {
        time: "10:30 AM",
        title: "Safety Briefing",
        desc: "Rules and game instructions by staff."
    },
    {
        time: "11:00 AM",
        title: "Paintball Games",
        desc: "Exciting paintball matches with full equipment."
    },
    {
        time: "01:00 PM",
        title: "Break & Light Meal",
        desc: "Rest, change clothes, and enjoy light meal."
    },
    {
        time: "02:00 PM",
        title: "Return Transfer",
        desc: "Drive back to your hotel."
    },
    {
        time: "03:00 PM",
        title: "Arrive at Hotel",
        desc: "End of Bali Paintball tour."
    },
];

export const inclusionsData = {
    included: [
        "Paintball gear",
        "Light meal & soft drink",
        "Locker & insurance",
        "Hotel transfer",
    ],
    excluded: [
        "Alcohol (available to purchase)",
        "Photos (available to purchase)"
    ]
};

export default function BaliBirdParkTicket(){

    const productData = {
        title: 'Bali Paintball',
        place: 'Badung, Bali',
        desc1: 'Bali Paintball is a fun half-day outdoor activity in the Bali countryside, ideal for friends and families seeking an exciting adventure away from crowded attractions. Enjoy private paintball games in a specially designed arena with full equipment and professional staff assistance, suitable for beginners and players aged 12 and above.',
        desc2: 'The package includes round-trip hotel transfers by air-conditioned vehicle, welcome drink, registration, complete playing gear, mineral water, light meal, soft drink, locker, changing room, and insurance coverage for a safe and comfortable experience.',
    };

    const images = [
        {src:'/images/activities/bali-paintball/1.jpg', alt:'Bali Paintball Adventure'},
        {src:'/images/activities/bali-paintball/2.jpg', alt:'Paintball Players in Action'},
        {src:'/images/activities/bali-paintball/3.jpg', alt:'Bali Paintball Team Strategy'},
        {src:'/images/activities/bali-paintball/4.jpg', alt:'Exciting Paintball Match'},
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
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Activities</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><HiChevronRight className="text-xl inline-block align-middle" /></li>
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