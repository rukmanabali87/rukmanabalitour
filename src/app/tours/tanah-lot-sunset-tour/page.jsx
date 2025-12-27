'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { MdDirectionsBoat } from "react-icons/md";
import { PiIslandFill } from "react-icons/pi";

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
        title: '12 Hours'
    },
    {
        icon: FiActivity,
        name: 'Type',
        title: 'Tour, Adventure'
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
        title: 'From IDR 1.100.000'
    },
];

export const faqData = [
    {
        id:1,
        title:'Is this tour private?',
        desc:'Yes. You will have your own private car and driver for the entire day.'
    },
    {
        id:2,
        title:'Can I customize tour itinerary?',
        desc:'Absolutely. You can add East Nusa Penida or snorkeling sessions. but discuss first with operator maybe need a more payment.'
    },
    {
        id:3,
        title:'Is it suitable for children or elderly?',
        desc:'Yes. All locations are accessible without hiking down Kelingking.'
    },
    {
        id:4,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaCar,
        title: "Private Car & Driver",
        desc: "Explore comfortably with an expert local island driver.",
    },
    {
        icon: MdDirectionsBoat,
        title: "Fast Boat Tickets Included",
        desc: "Round-trip fast boat from Sanur to Nusa Penida.",
    },
    {
        icon: PiIslandFill,
        title: "Top Destinations",
        desc: "Visit Kelingking, Broken Beach, Angel's Billabong, and Crystal Bay.",
    },
];

export const itineraryData = [
    {
        time: "06:00",
        title: "Hotel Pick-up",
        desc: "Pick-up from Nusa Dua, Sanur, Kuta, Seminyak, or Ubud."
    },
    {
        time: "07:30",
        title: "Sanur Beach Harbour",
        desc: "Fast boat departure to Nusa Penida."
    },
    {
        time: "08:15",
        title: "Nusa Penida Arrival",
        desc: "Meet local guide and start the tour."
    },
    {
        time: "08:30",
        title: "Broken Beach (Pasih Uug)",
        desc: "Visit the famous natural rock arch."
    },
    {
        time: "09:15",
        title: "Angel’s Billabong",
        desc: "Explore the natural infinity pool."
    },
    {
        time: "10:30",
        title: "Kelingking Beach",
        desc: "Photo stop and optional short trek."
    },
    {
        time: "12:00",
        title: "Lunch Break",
        desc: "Lunch at a local restaurant (Indonesian food)."
    },
    {
        time: "13:30",
        title: "Crystal Bay",
        desc: "Relax, swim, or enjoy the beach."
    },
    {
        time: "15:30",
        title: "Nusa Penida Port",
        desc: "Transfer back to the port."
    },
    {
        time: "16:30",
        title: "Fast Boat to Sanur",
        desc: "Return trip to Sanur."
    },
    {
        time: "17:30",
        title: "Hotel Drop-off",
        desc: "Drop-off at your hotel. Tour ends."
    }
];

export const inclusionsData = {
    included: [
        "Private Car & Driver",
        "English-Speaking Local Guide",
        "Lunch (Indonesian Food)",
        "Return Fast Boat Ticket",
    ],
    excluded: [
        "Meals Fee",
        "Personal Expenses",
    ]
};

export default function NusaPenidaDayTour(){

    const images = [
        {src:'/images/tours/nusa-penida-day-tour/1.webp', alt:'Kelingking Beach'},
        {src:'/images/tours/nusa-penida-day-tour/2.webp', alt:'Broken Beach'},
        {src:'/images/tours/nusa-penida-day-tour/3.webp', alt:'Angel\'s Billabong'},
        {src:'/images/tours/nusa-penida-day-tour/4.webp', alt:'Crystal Bay'},
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
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">Tanah Lot Sunset Tour</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Tours</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tanah Lot Sunset Tour</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-7">
                        <TourImageOne images={images}/>

                        <h5 className="text-2xl font-semibold mt-5">Nusa Penida Day Tour</h5>
                        <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin>Klungkung, Bali</p>

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
                                Nusa Penida Day Tour by Rukmana Bali Tour is a 12-hour full-day tour designed to explore the most iconic destinations on Nusa Penida Island. The journey starts from Sanur Beach Harbour with a fast boat transfer, offering an easy and comfortable way to discover the island’s dramatic cliffs, crystal-clear waters, and natural beauty.
                            </p>
                            <p className="text-slate-400 mt-3">
                                This Nusa Penida tour package takes you to must-see attractions including Broken Beach, famous for its natural rock arch, and the iconic Kelingking Beach, known for its breathtaking cliff views shaped like a T-Rex. You will also visit Angel’s Billabong, a natural infinity pool with clear water and stunning coastal scenery.    
                            </p>
                            <p className="text-slate-400 mt-3">
                                The tour concludes at Crystal Bay, a peaceful white-sand beach ideal for relaxation. Guests may choose an optional snorkeling activity to explore the vibrant marine life. Perfect for travelers with limited time, the Nusa Penida Day Tour by Rukmana Bali Tour is an ideal way to experience the highlights of Nusa Penida in one day.
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