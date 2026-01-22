'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaMapMarkedAlt, FaCheckCircle, FaMapPin } from "react-icons/fa";
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
        title: 'From IDR 685.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this snorkeling tour suitable for beginners?",
        desc: "Yes. Blue Lagoon snorkeling is beginner-friendly with calm waters and professional guides assisting you throughout the activity."
    },
    {
        id: 2,
        title: "Do I need to know how to swim?",
        desc: "Basic swimming skills are recommended, but life jackets are provided for extra safety and comfort."
    },
    {
        id: 3,
        title: "What snorkeling spots will be visited?",
        desc: "You will snorkel at two locations: Blue Lagoon Beach and Tanjung Jepun, each offering clear water and colorful marine life."
    },
    {
        id: 4,
        title: "Is hotel pick-up and drop-off included?",
        desc: "Yes. Hotel pick-up and drop-off are included from selected areas in Bali. Additional charges may apply for locations outside the coverage area."
    },
    {
        id: 5,
        title: "What should I bring for this tour?",
        desc: "We recommend bringing swimwear, a change of clothes, sunscreen, and extra cash for personal expenses."
    },
    {
        id: 6,
        title: "Are underwater photos and videos included?",
        desc: "Underwater photos and videos are available as an optional add-on and can be arranged on the spot."
    },
    {
        id:7,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaMapPin,
        title: "Top Snorkeling Spots",
        desc: "Snorkel at Blue Lagoon Beach and Tanjung Jepun Beach."
    },
    {
        icon: FaMapMarkedAlt,
        title: "Clear Water & Marine Life",
        desc: "Enjoy calm waters, coral reefs, and tropical fish."
    },
    {
        icon: FaCheckCircle,
        title: "Comfortable Half-Day Tour",
        desc: "Hotel transfer, equipment, and Indonesian lunch included."
    }
];

export const itineraryData = [
    {
        time: "08:00 AM",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel or designated meeting point by a professional driver."
    },
    {
        time: "09:30 AM",
        title: "Arrival at Padang Bai",
        desc: "Arrive at Padang Bai and head to the snorkeling meeting point."
    },
    {
        time: "09:45 AM",
        title: "Registration & Briefing",
        desc: "Registration process, safety briefing, and snorkeling equipment preparation."
    },
    {
        time: "10:00 AM",
        title: "Blue Lagoon Snorkeling",
        desc: "Enjoy snorkeling at Blue Lagoon Beach with clear water and colorful marine life."
    },
    {
        time: "11:00 AM",
        title: "Tanjung Jepun Snorkeling",
        desc: "Continue snorkeling at Tanjung Jepun, known for calm waters and coral reefs."
    },
    {
        time: "12:00 PM",
        title: "Lunch",
        desc: "Enjoy a set-menu traditional Indonesian lunch at a local restaurant."
    },
    {
        time: "01:00 PM",
        title: "Return Transfer",
        desc: "Depart from Padang Bai and return to your hotel."
    },
    {
        time: "02:00 PM",
        title: "Hotel Drop-off",
        desc: "Estimated arrival back at your hotel. Tour ends."
    }
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "2 snorkeling spots",
        "Snorkeling gear",
        "Mineral water",
        "Shower & changing room",
        "Set menu traditional lunch",
        "Underwater photos & videos (add-on)",
        "Insurance",
    ],
    excluded: [
        "Swimwear",
        "Personal Expenses",
    ]
};

export default function BlueLagoonSnorkeling(){

    const productData = {
        title: 'Blue Lagoon Snorkeling',
        place: 'Karangasem, Bali',
        desc1: 'Blue Lagoon Snorkeling offers a relaxing snorkeling experience at one of Bali’s most popular snorkeling destinations, located in Padang Bai. The tour visits two snorkeling spots, Blue Lagoon Beach and Tanjung Jepun Beach, known for their clear waters, healthy coral reefs, and diverse tropical fish. With calm sea conditions and full snorkeling equipment provided, this activity is suitable for beginners and participants of all experience levels.',
        desc2: 'The Blue Lagoon Snorkeling tour includes hotel pick-up and drop-off from selected areas in Bali, professional assistance during the activity, and a traditional Indonesian lunch at Puri Rai Restaurant. Designed for comfort and convenience, this half-day tour allows guests to enjoy Bali’s marine life in a safe, well-organized, and enjoyable snorkeling experience.',
    };

    const images = [
        {src:'/images/activities/blue-lagoon-snorkeling/1.webp', alt:'Blue Lagoon Snorkeling'},
        {src:'/images/activities/blue-lagoon-snorkeling/2.webp', alt:'Blue Lagoon Snorkeling'},
        {src:'/images/activities/blue-lagoon-snorkeling/3.webp', alt:'Blue Lagoon Snorkeling'},
        {src:'/images/activities/blue-lagoon-snorkeling/4.webp', alt:'Blue Lagoon Snorkeling'},
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