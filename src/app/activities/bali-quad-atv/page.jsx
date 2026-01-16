'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaUserCheck} from "react-icons/fa";
import { BiSolidLandscape } from "react-icons/bi";
import { GiMountainRoad } from "react-icons/gi";

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
        title: 'From IDR 1.353.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "What should I wear and bring?",
        desc: "We recommend wearing comfortable clothes for changing after the ride. Sunscreen is also advised. Please bring extra money if you wish to purchase drinks at the restaurant or photo/video documentation."
    },
    {
        id: 2,
        title: "Are there any special offers for group bookings?",
        desc: "Yes. Special prices are available for group bookings."
    },
    {
        id: 3,
        title: "Is there an additional charge for solo travelers?",
        desc: "Yes. A single traveler is subject to an additional 50% charge."
    },
    {
        id: 4,
        title: "Are there any hidden charges?",
        desc: "No. All prices are reasonable, fair, and there are no hidden charges."
    },
    {
        id: 5,
        title: "How can I make the payment?",
        desc: "Payment can be made upon arrival at the ATV ride location, and no deposit is required."
    },
    {
        id: 6,
        title: "What currencies are accepted?",
        desc: "We accept payments in USD, Indonesian Rupiah, or other currencies based on the latest exchange rates."
    },
    {
        id: 7,
        title: "Do you accept old USD banknotes?",
        desc: "No. We do not accept USD banknotes issued in 1996 or earlier."
    },
    {
        id:8,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: GiMountainRoad,
        title: "Off-Road ATV Adventure",
        desc: "Explore jungle trails, rivers, tunnels, and muddy tracks."
    },
    {
        icon: FaUserCheck,
        title: "Professional ATV Instructor",
        desc: "Ride safely with experienced and friendly instructors."
    },
    {
        icon: FiActivity,
        title: "Thrilling Riding Experience",
        desc: "Enjoy an exciting and adrenaline-filled ATV ride."
    },
    {
        icon: BiSolidLandscape,
        title: "Ubud Natural Landscape",
        desc: "Discover beautiful natural scenery in Ubud."
    },
];

export const itineraryData = [
    {
        time: "08:00 AM",
        title: "Hotel Pick-up",
        desc: "Hotel pick-up by an English-speaking driver."
    },
    {
        time: "09:00 AM",
        title: "Arrival",
        desc: "Arrive at the Bali Quad ATV location in Ubud."
    },
    {
        time: "09:15 AM",
        title: "Registration & Briefing",
        desc: "Registration process, safety briefing, and equipment fitting."
    },
    {
        time: "09:30 AM",
        title: "ATV Ride",
        desc: "Enjoy a 2-hour off-road adventure riding a powerful quad bike."
    },
    {
        time: "11:30 AM",
        title: "Refresh & Shower",
        desc: "Time to refresh, shower, and relax after the ATV ride."
    },
    {
        time: "12:00 PM",
        title: "Return",
        desc: "Depart back to your hotel."
    },
    {
        time: "01:00 PM",
        title: "Drop-off",
        desc: "Estimated hotel drop-off. Tour ends."
    },
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "Welcome Drink",
        "Professional ATV Instructor",
        "ATV Bike & Safety Equipment",
        "Shower, Towel & Changing Room",
        "Buffet Lunch",
        "Insurance",
        "21% Government Tax & Service Charge"
    ],
    excluded: [
        "Personal Expenses",
    ]
};

export default function BaliQuadATV(){

    const productData = {
        title: 'Bali Quad ATV',
        place: 'Gianyar, Bali',
        desc1: 'Bali Quad ATV Tour in Ubud offers an exciting off-road adventure through Bali’s stunning natural landscape. Ride a powerful 250cc quad bike and explore scenic jungle trails, rivers, tunnels, and muddy tracks located in Ubud. This tour is perfect for adventure seekers looking for thrilling experiences away from crowded tourist areas.',
        desc2: 'Our Bali Quad ATV Ubud experience is suitable for both beginners and experienced riders, guided by professional instructors to ensure safety and enjoyment. Whether you are traveling solo, with friends, or family, this ATV tour delivers adrenaline, breathtaking scenery, and an unforgettable adventure in Ubud.',
    };

    const images = [
        {src:'/images/activities/bali-quad-atv/1.webp', alt:'Bali Quad ATV with Gorilla Face Cave'},
        {src:'/images/activities/bali-quad-atv/2.webp', alt:'Bali Quad ATV Trail'},
        {src:'/images/activities/bali-quad-atv/3.webp', alt:'Bali Quad ATV Ride'},
        {src:'/images/activities/bali-quad-atv/4.webp', alt:'Bali Quad ATV Experience'},
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