'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaImage, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";

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
        title: 'From IDR 502.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is Ayung River Rafting suitable for beginners?",
        desc: "Yes. Ayung River Rafting features fun and moderate rapids, making it suitable for beginners and first-time rafters."
    },
    {
        id: 2,
        title: "Is this rafting tour safe?",
        desc: "Yes. The tour uses safety-approved equipment and is led by professional, experienced river guides."
    },
    {
        id: 3,
        title: "How long is the rafting experience?",
        desc: "The rafting adventure lasts approximately 2 hours, depending on river conditions and group pace."
    },
    {
        id: 4,
        title: "What should I wear and bring?",
        desc: "We recommend wearing comfortable outdoor clothing, river sandals or shoes, and bringing a change of clothes. Sunscreen is also recommended."
    },
    {
        id: 5,
        title: "Is lunch included in the tour?",
        desc: "Yes. An Indonesian buffet lunch is included after the rafting activity."
    },
    {
        id: 6,
        title: "Are hotel transfers included?",
        desc: "Yes. Return hotel transfers are included from selected areas."
    },
    {
        id: 7,
        title: "Is Ayung River Rafting suitable for children?",
        desc: "Yes. This activity is suitable for children aged 7 years and above, and all participants must be in good health."
    },
    {
        id:8,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FiActivity,
        title: "Exciting White Water Rafting",
        desc: "Enjoy fun and moderate rapids along Bali’s longest river."
    },
    {
        icon: FaImage,
        title: "Stunning Natural Scenery",
        desc: "Paddle through lush rainforest, waterfalls, and scenic river views."
    },
    {
        icon: FaUserCheck,
        title: "Professional Rafting Guides",
        desc: "Experience a safe and enjoyable adventure with trained local guides."
    },
    {
        icon: FaUsers,
        title: "Suitable for All Levels",
        desc: "Perfect for beginners, families, and adventure lovers."
    },
];

export const itineraryData = [
    {
        time: "08:00 AM",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel by an English-speaking driver."
    },
    {
        time: "09:00 AM",
        title: "Arrival",
        desc: "Arrive at Ayung Dewata Rafting base camp."
    },
    {
        time: "09:15 AM",
        title: "Safety Briefing",
        desc: "Safety briefing, gear fitting, and preparation before rafting."
    },
    {
        time: "09:30 AM",
        title: "Rafting Adventure",
        desc: "Start the Ayung River Rafting adventure for approximately 2 hours."
    },
    {
        time: "11:30 AM",
        title: "Refresh & Shower",
        desc: "Finish rafting, shower, and change clothes."
    },
    {
        time: "12:00 PM",
        title: "Lunch",
        desc: "Enjoy lunch at the rafting restaurant."
    },
    {
        time: "01:00 PM",
        title: "Return",
        desc: "Depart from the rafting site."
    },
    {
        time: "02:00 PM",
        title: "Drop-off",
        desc: "Drop-off back at your hotel. Tour ends."
    },
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "Return Hotel Transfer",
        "Safety-Approved Rafting Equipment",
        "Professional River Guide",
        "Waterproof Bag",
        "Shower, Towel & Locker Facilities",
        "Changing Room & Toilet",
        "Indonesian Buffet Lunch",
        "Insurance",
    ],
    excluded: [
        "Personal Expenses",
    ]
};

export default function AyungRiverRafting(){

    const productData = {
        title: 'Ayung River Rafting',
        place: 'Ubud, Bali',
        desc1: 'Ayung River Rafting is the perfect way to experience Bali’s natural beauty and adventure in one unforgettable trip. Paddle through fun and moderate rapids along Bali’s longest river, surrounded by lush rainforest, hidden waterfalls, and impressive stone carvings along the riverbanks. Located in Ubud, this rafting experience offers a scenic and exciting journey suitable for all adventure levels.',
        desc2: 'The Ayung River Rafting tour is led by professional and friendly guides who ensure safety and enjoyment throughout the ride. Whether you are a first-time rafter or an experienced adventurer, this tour delivers a perfect blend of adrenaline, breathtaking scenery, and cultural charm, making it one of Bali’s most popular outdoor activities.',
    };

    const images = [
        {src:'/images/activities/ayung-river-rafting/1.webp', alt:'Ayung River Rafting People'},
        {src:'/images/activities/ayung-river-rafting/2.webp', alt:'Ayung River Rafting Activity'},
        {src:'/images/activities/ayung-river-rafting/3.webp', alt:'Ayung River Rafting People in Action'},
        {src:'/images/activities/ayung-river-rafting/4.webp', alt:'Ayung River Rafting Group Photo'},
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