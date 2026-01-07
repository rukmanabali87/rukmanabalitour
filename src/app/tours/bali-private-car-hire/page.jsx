'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaMapMarkedAlt, FaUserCheck, FaCarSide } from "react-icons/fa";

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
        title: 'Hourly Charter'
    },
    {
        icon: FiActivity,
        name: 'Type',
        title: 'Tour'
    },
    {
        icon: FiUsers,
        name: 'Group Size',
        title: '50 Peoples'
    },
    {
        icon: FiGlobe,
        name: 'Languages',
        title: 'English'
    },
    {
        icon: FiDollarSign,
        name: 'Start Price',
        title: 'From IDR 257.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "What is Bali Private Car Hire?",
        desc: "A flexible service that lets you customize your itinerary and travel at your own pace with a private vehicle and driver."
    },
    {
        id: 2,
        title: "Which vehicles are available?",
        desc: "Choose from City Cars, MPVs, Family or Luxury Minivans, and Premium Minibuses depending on your group size and comfort preference."
    },
    {
        id: 3,
        title: "Is the route fixed or customizable?",
        desc: "The route is fully customizable. You decide which attractions to visit, the order, and how long to stay at each location."
    },
    {
        id: 4,
        title: "Can I hire the car for a few hours or a full day?",
        desc: "Yes, the service is available hourly or for a full day, with an experienced driver included for a smooth journey."
    },
    {
        id:5,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaMapMarkedAlt,
        title: "Flexible Custom Route",
        desc: "Plan your own itinerary and travel at your preferred pace."
    },
    {
        icon: FaCarSide,
        title: "Vehicle Options for Every Group",
        desc: "City car to premium minibus, tailored to your needs."
    },
    {
        icon: FaUserCheck,
        title: "Comfortable Private Service",
        desc: "Air-conditioned vehicle with an experienced local driver."
    },
];

export const itineraryData = [
    {
        time: "Pass By",
        title: "Ubud",
        desc: "Cultural villages, rice fields, and local life."
    },
    {
        time: "Pass By",
        title: "Tanah Lot",
        desc: "Iconic sea temple and coastal views."
    },
    {
        time: "Pass By",
        title: "Uluwatu",
        desc: "Clifftop temple with ocean panoramas."
    },
    {
        time: "Pass By",
        title: "Garuda Wisnu Kencana",
        desc: "Cultural park with a massive iconic statue."
    },
    {
        time: "Pass By",
        title: "Ulun Danu Beratan Temple",
        desc: "Floating temple and lake scenery."
    },
    {
        time: "Pass By",
        title: "Sacred Monkey Forest",
        desc: "Jungle area with free-roaming monkeys."
    },
    {
        time: "Pass By",
        title: "Tirta Empul Temple",
        desc: "Sacred water temple and holy springs."
    },
    {
        time: "Pass By",
        title: "Tegenungan Waterfall",
        desc: "Tropical waterfall and river views."
    },
    {
        time: "Pass By",
        title: "Ubud Art Market",
        desc: "Traditional crafts and local market."
    },
    {
        time: "Pass By",
        title: "Tegalalang Rice Terrace",
        desc: "Iconic layered rice fields."
    },
    {
        time: "Pass By",
        title: "Jatiluwih Green Land",
        desc: "Wide rice terraces and highland views."
    },
    {
        time: "Pass By",
        title: "Lempuyang Temple",
        desc: "Gate of Heaven and Mount Agung views."
    },
    {
        time: "Pass By",
        title: "Tirta Gangga",
        desc: "Royal water palace and gardens."
    }
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "Fully customizable route",
        "Mineral water bottles",
        "Petrol / fuel",
        "Insurance",
    ],
    excluded: [
        "Entrance tickets to attractions",
        "Meals and personal expenses",
    ]
};

export default function BaliPrivateCarHire(){

    const productData = {
        title: 'Bali Private Car Hire',
        place: 'Bali',
        desc1: 'Bali Private Car Hire is a flexible and comfortable transportation service designed to suit different travel styles, group sizes, and itineraries. Guests can choose from a wide range of vehicles, including City Cars for solo travelers or couples, Standard MPVs for small groups, Family Minivans for added space, Luxury Minivans for premium comfort, and Premium Minibuses for larger groups. Each vehicle is well-maintained and air-conditioned, ensuring a smooth and relaxing journey while exploring Bali.',
        desc2: 'One of the main advantages of this Bali Private Car Hire service is its fully customizable route. Travelers have complete freedom to decide where to go, how long to stay at each destination, and which attractions to include. Whether passing through cultural hubs like Ubud, iconic landmarks such as Tanah Lot and Uluwatu, or scenic highland areas like Tegalalang and Jatiluwih, the itinerary can be tailored to match personal interests, travel pace, and time preferences.',
        desc3: 'With flexible hourly options and an experienced local driver, Bali Private Car Hire offers a convenient and adaptable way to explore the island. Guests can enjoy views of temples, rice terraces, waterfalls, lakes, and cultural sites without being tied to a fixed schedule. This private car charter is ideal for travelers seeking comfort, privacy, and full control over their Bali journey.',
    };

    const images = [
        {src:'/images/tours/bali-private-car-hire/1.jpg', alt:'Toyota Alphard'},
        {src:'/images/tours/bali-private-car-hire/2.jpg', alt:'Toyota Avanza'},
        {src:'/images/tours/bali-private-car-hire/3.jpg', alt:'Toyota Innova'},
        {src:'/images/tours/bali-private-car-hire/4.jpg', alt:'Agya Car'},
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